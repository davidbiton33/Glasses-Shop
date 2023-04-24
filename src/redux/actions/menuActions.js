import {
  // ADD_PRODUCT,
  ADD_MENU,

  // ADD_PRODUCT_SUCCESS,
  ADD_MENU_SUCCESS,

  // CANCEL_GET_PRODUCTS,
  CANCEL_GET_MENUS,

  CLEAR_SEARCH_STATE,

  // EDIT_PRODUCT,
  EDIT_MENU,

  // EDIT_PRODUCT_SUCCESS,
  EDIT_MENU_SUCCESS,

  // GET_PRODUCTS,
  GET_MENUS,
  
  // GET_PRODUCTS_SUCCESS,
  GET_MENUS_SUCCESS,

  // REMOVE_PRODUCT,
  REMOVE_MENU,

  // REMOVE_PRODUCT_SUCCESS,
  REMOVE_MENU_SUCCESS,

  // SEARCH_PRODUCT,
  SEARCH_MENU,
  
  // SEARCH_PRODUCT_SUCCESS,
  SEARCH_MENU_SUCCESS

} from 'constants/constants';

// export const getProducts = (lastRef) => ({
// type: GET_PRODUCTS,
// payload: lastRef
// });

export const getMenus = (lastRef) => ({
  type: GET_MENUS,
  payload: lastRef
});

// export const getProductsSuccess = (products) => ({
//   type: GET_PRODUCTS_SUCCESS,
//   payload: products
// });

export const getMenusSuccess = (menus) => ({
  type: GET_MENUS_SUCCESS,
  payload: menus
});

// export const cancelGetProducts = () => ({
//   type: CANCEL_GET_PRODUCTS
// });

export const cancelGetMenus = () => ({
  type: CANCEL_GET_MENUS
});

// export const addProduct = (product) => ({
//   type: ADD_PRODUCT,
//   payload: product
// });

export const addMenu = (menu) => ({
  type: ADD_MENU,
  payload: menu
});

// export const searchProduct = (searchKey) => ({
//   type: SEARCH_PRODUCT,
//   payload: {
//     searchKey
//   }
// });

export const searchMenu = (searchKey) => ({
  type: SEARCH_MENU,
  payload: {
    searchKey
  }
});

// export const searchProductSuccess = (products) => ({
//   type: SEARCH_PRODUCT_SUCCESS,
//   payload: products
// });

export const searchMenuSuccess = (menus) => ({
  type: SEARCH_MENU_SUCCESS,
  payload: menus
});

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE
});

// export const addProductSuccess = (product) => ({
//   type: ADD_PRODUCT_SUCCESS,
//   payload: product
// });

export const addMenuSuccess = (menu) => ({
  type: ADD_MENU_SUCCESS,
  payload: menu
});

// export const removeProduct = (id) => ({
//   type: REMOVE_PRODUCT,
//   payload: id
// });

export const removeMenu = (id) => ({
  type: REMOVE_MENU,
  payload: id
});

// export const removeProductSuccess = (id) => ({
//   type: REMOVE_PRODUCT_SUCCESS,
//   payload: id
// });

export const removeMenuSuccess = (id) => ({
  type: REMOVE_MENU_SUCCESS,
  payload: id
});

// export const editProduct = (id, updates) => ({
//   type: EDIT_PRODUCT,
//   payload: {
//     id,
//     updates
//   }
// });

export const editMenu = (id, updates) => ({
  type: EDIT_MENU,
  payload: {
    id,
    updates
  }
});

// export const editProductSuccess = (updates) => ({
//   type: EDIT_PRODUCT_SUCCESS,
//   payload: updates
// });

export const editMenuSuccess = (updates) => ({
  type: EDIT_MENU_SUCCESS,
  payload: updates
});

