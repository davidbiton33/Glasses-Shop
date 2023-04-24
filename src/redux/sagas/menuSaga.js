/* eslint-disable indent */
import {
  ADD_MENU,
  EDIT_MENU,
  GET_MENUS,
  REMOVE_MENU,
  SEARCH_MENU
} from 'constants/constants';

import { ADMIN_MENUS } from 'constants/routes';
import { displayActionMessage } from 'helpers/utils';
import {
  all, call, put, select
} from 'redux-saga/effects';
import { setLoading, setRequestStatus } from 'redux/actions/miscActions';
import { history } from 'routers/AppRouter';
import firebase from 'services/firebase';
import {
  addMenuSuccess,
  clearSearchState, editMenuSuccess, getMenusSuccess,
  removeMenuSuccess,
  searchMenuSuccess
} from '../actions/menuActions';


function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch menus'));
  console.log('ERROR: ', e);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}

function* menuSaga({ type, payload }) {
  switch (type) {
    case GET_MENUS:
      try {
        yield initRequest();
        const state = yield select();
        const result = yield call(firebase.getMenus, payload);

        if (result.menus.length === 0) {
          handleError('No items found.');
        } else {
          yield put(getMenusSuccess({
            menus: result.menus,
            lastKey: result.lastKey ? result.lastKey : state.menus.lastRefKey,
            total: result.total ? result.total : state.menus.total
          }));
          yield put(setRequestStatus(''));
        }
        // yield put({ type: SET_LAST_REF_KEY, payload: result.lastKey });
        yield put(setLoading(false));
      } catch (e) {
        console.log(e);
        yield handleError(e);
      }
      break;

    case ADD_MENU: {
      try {
        yield initRequest();

        const { imageCollection } = payload;
        const key = yield call(firebase.generateKey);
        const downloadURL = yield call(firebase.storeImage, key, 'menus', payload.image);
        const image = { id: key, url: downloadURL };
        let images = [];

        if (imageCollection.length !== 0) {
          const imageKeys = yield all(imageCollection.map(() => firebase.generateKey));
          const imageUrls = yield all(imageCollection.map((img, i) => firebase.storeImage(imageKeys[i](), 'menus', img.file)));
          images = imageUrls.map((url, i) => ({
            id: imageKeys[i](),
            url
          }));
        }

        const menu = {
          ...payload,
          image: downloadURL,
          imageCollection: [image, ...images]
        };

        yield call(firebase.addMenu, key, menu);
        yield put(addMenuSuccess({
          id: key,
          ...menu
        }));
        yield handleAction(ADMIN_MENUS, 'Item succesfully added', 'success');
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to add: ${e?.message}`, 'error');
      }
      break;
    }
    case EDIT_MENU: {
      try {
        yield initRequest();

        const { image, imageCollection } = payload.updates;
        let newUpdates = { ...payload.updates };

        if (image.constructor === File && typeof image === 'object') {
          try {
            yield call(firebase.deleteImage, payload.id);
          } catch (e) {
            console.error('Failed to delete image ', e);
          }

          const url = yield call(firebase.storeImage, payload.id, 'menus', image);
          newUpdates = { ...newUpdates, image: url };
        }

        if (imageCollection.length > 1) {
          const existingUploads = [];
          const newUploads = [];

          imageCollection.forEach((img) => {
            if (img.file) {
              newUploads.push(img);
            } else {
              existingUploads.push(img);
            }
          });

          const imageKeys = yield all(newUploads.map(() => firebase.generateKey));
          const imageUrls = yield all(newUploads.map((img, i) => firebase.storeImage(imageKeys[i](), 'menus', img.file)));
          const images = imageUrls.map((url, i) => ({
            id: imageKeys[i](),
            url
          }));
          newUpdates = { ...newUpdates, imageCollection: [...existingUploads, ...images] };
        } else {
          newUpdates = {
            ...newUpdates,
            imageCollection: [{ id: new Date().getTime(), url: newUpdates.image }]
          };
          // add image thumbnail to image collection from newUpdates to
          // make sure you're adding the url not the file object.
        }

        yield call(firebase.editMenu, payload.id, newUpdates);
        yield put(editMenuSuccess({
          id: payload.id,
          updates: newUpdates
        }));
        yield handleAction(ADMIN_MENUS, 'Item succesfully edited', 'success');
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to edit: ${e.message}`, 'error');
      }
      break;
    }
    case REMOVE_MENU: {
      try {
        yield initRequest();
        yield call(firebase.removeMenu, payload);
        yield put(removeMenuSuccess(payload));
        yield put(setLoading(false));
        yield handleAction(ADMIN_MENUS, 'Item succesfully removed', 'success');
      } catch (e) {
        yield handleError(e);
        yield handleAction(undefined, `Item failed to remove: ${e.message}`, 'error');
      }
      break;
    }
    case SEARCH_MENU: {
      try {
        yield initRequest();
        // clear search data
        yield put(clearSearchState());

        const state = yield select();
        const result = yield call(firebase.searchMenus, payload.searchKey);

        if (result.menus.length === 0) {
          yield handleError({ message: 'No menu found.' });
          yield put(clearSearchState());
        } else {
          yield put(searchMenuSuccess({
            menus: result.menus,
            lastKey: result.lastKey ? result.lastKey : state.menus.searchedMenus.lastRefKey,
            total: result.total ? result.total : state.menus.searchedMenus.total
          }));
          yield put(setRequestStatus(''));
        }
        yield put(setLoading(false));
      } catch (e) {
        yield handleError(e);
      }
      break;
    }
    default: {
      throw new Error(`Unexpected action type ${type}`);
    }
  }
}

export default menuSaga;
