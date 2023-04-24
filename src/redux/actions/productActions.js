import {
  ADD_PRODUCT,
  ADD_USER,
  ADD_PRODUCT_SUCCESS,
  CANCEL_GET_PRODUCTS,
  CLEAR_SEARCH_STATE,

  EDIT_PRODUCT,
  EDIT_MENU,

  EDIT_PRODUCT_SUCCESS,

  GET_PRODUCTS,
  // GET_MENUS,
  
  GET_PRODUCTS_SUCCESS,

  REMOVE_PRODUCT,
  REMOVE_MENU,

  REMOVE_PRODUCT_SUCCESS,
  // REMOVE_USER_SUCCESS,

  SEARCH_PRODUCT,
  SEARCH_PRODUCT_SUCCESS
} from 'constants/constants';

export const getProducts = (lastRef) => ({
  type: GET_PRODUCTS,
  payload: lastRef
});

// export const getMenus = (lastRef) => ({
//   type: GET_MENUS,
//   payload: lastRef
// });

export const getProductsSuccess = (products) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products
});

export const cancelGetProducts = () => ({
  type: CANCEL_GET_PRODUCTS
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

export const searchProduct = (searchKey) => ({
  type: SEARCH_PRODUCT,
  payload: {
    searchKey
  }
});

export const searchProductSuccess = (products) => ({
  type: SEARCH_PRODUCT_SUCCESS,
  payload: products
});

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE
});

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product
});

// export const addUserSuccess = (user) => ({
//   type: ADD_USER_SUCCESS,
//   payload: user
// });

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id
});

export const removeMenu = (id) => ({
  type: REMOVE_MENU,
  payload: id
});

export const removeProductSuccess = (id) => ({
  type: REMOVE_PRODUCT_SUCCESS,
  payload: id
});

// export const removeUserSuccess = (id) => ({
//   type: REMOVE_USER_SUCCESS,
//   payload: id
// });

export const editProduct = (id, updates) => ({
  type: EDIT_PRODUCT,
  payload: {
    id,
    updates
  }
});

export const editMenu = (id, updates) => ({
  type: EDIT_MENU,
  payload: {
    id,
    updates
  }
});

// export const editUser = (id, updates) => ({
//   type: EDIT_USER,
//   payload: {
//     id,
//     updates
//   }
// });

export const editProductSuccess = (updates) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: updates
});

// export const editUserSuccess = (updates) => ({
//   type: EDIT_USER_SUCCESS,
//   payload: updates
// });
