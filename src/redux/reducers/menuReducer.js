import {
  ADD_MENU_SUCCESS,
  CLEAR_SEARCH_STATE, EDIT_MENU_SUCCESS,
  GET_MENUS_SUCCESS, REMOVE_MENU_SUCCESS,
  SEARCH_MENU_SUCCESS
} from 'constants/constants';

const initState = {
  lastRefKey: null,
  total: 0,
  items: []
};

export default (state = {
  lastRefKey: null,
  total: 0,
  items: [],
  searchedMenus: initState
}, action) => {
  switch (action.type) {
    case GET_MENUS_SUCCESS:
      return {
        ...state,
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [...state.items, ...action.payload.menus]
      };
    case ADD_MENU_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SEARCH_MENU_SUCCESS:
      return {
        ...state,
        searchedMenus: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [...state.searchedMenus.items, ...action.payload.menus]
        }
      };
    case CLEAR_SEARCH_STATE:
      return {
        ...state,
        searchedMenus: initState
      };
    case REMOVE_MENU_SUCCESS:
      return {
        ...state,
        items: state.items.filter((menu) => menu.id !== action.payload)
      };
    case EDIT_MENU_SUCCESS:
      return {
        ...state,
        items: state.items.map((menu) => {
          if (menu.id === action.payload.id) {
            return {
              ...menu,
              ...action.payload.updates
            };
          }
          return menu;
        })
      };
    default:
      return state;
  }
};
