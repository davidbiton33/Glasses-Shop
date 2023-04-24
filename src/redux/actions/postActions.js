import {
  // ADD_PRODUCT,
  // ADD_MENU,
  ADD_POST,

  // ADD_PRODUCT_SUCCESS,
  // ADD_MENU_SUCCESS,
  ADD_POST_SUCCESS,

  // CANCEL_GET_PRODUCTS,
  // CANCEL_GET_MENUS,
  CANCEL_GET_POSTS,

  CLEAR_SEARCH_STATE,

  // EDIT_PRODUCT,
  // EDIT_MENU,
  EDIT_POST,

  // EDIT_PRODUCT_SUCCESS,
  // EDIT_MENU_SUCCESS,
  EDIT_POST_SUCCESS,

  // GET_PRODUCTS,
  // GET_MENUS,
  GET_POSTS,
  
  // GET_PRODUCTS_SUCCESS,
  // GET_MENUS_SUCCESS,
  GET_POSTS_SUCCESS,

  // REMOVE_PRODUCT,
  // REMOVE_MENU,
  REMOVE_POST,

  // REMOVE_PRODUCT_SUCCESS,
  // REMOVE_MENU_SUCCESS,
  REMOVE_POST_SUCCESS,

  // SEARCH_PRODUCT,
  // SEARCH_MENU,
  SEARCH_POST,
  
  // SEARCH_PRODUCT_SUCCESS,
  // SEARCH_MENU_SUCCESS,
  SEARCH_POST_SUCCESS

} from 'constants/constants';

// export const getProducts = (lastRef) => ({
// type: GET_PRODUCTS,
// payload: lastRef
// });

// export const getMenus = (lastRef) => ({
//   type: GET_MENUS,
//   payload: lastRef
// });

export const getPosts = (lastRef) => ({
  type: GET_POSTS,
  payload: lastRef
});

// export const getProductsSuccess = (products) => ({
//   type: GET_PRODUCTS_SUCCESS,
//   payload: products
// });

// export const getMenusSuccess = (menus) => ({
  // type: GET_MENUS_SUCCESS,
//   payload: menus
// });

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
});

// export const cancelGetProducts = () => ({
//   type: CANCEL_GET_PRODUCTS
// });

// export const cancelGetMenus = () => ({
  // type: CANCEL_GET_MENUS
// });

export const cancelGetPosts = () => ({
  type: CANCEL_GET_POSTS
});

// export const addProduct = (product) => ({
//   type: ADD_PRODUCT,
//   payload: product
// });

// export const addMenu = (menu) => ({
//   type: ADD_MENU,
//   payload: menu
// });

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});

// export const searchProduct = (searchKey) => ({
//   type: SEARCH_PRODUCT,
//   payload: {
//     searchKey
//   }
// });

// export const searchMenu = (searchKey) => ({
  // type: SEARCH_MENU,
//   payload: {
//     searchKey
//   }
// });

export const searchPost = (searchKey) => ({
  type: SEARCH_POST,
  payload: {
    searchKey
  }
});

// export const searchProductSuccess = (products) => ({
//   type: SEARCH_PRODUCT_SUCCESS,
//   payload: products
// });

// export const searchMenuSuccess = (menus) => ({
  // type: SEARCH_MENU_SUCCESS,
//   payload: menus
// });

export const searchPostSuccess = (posts) => ({
  type: SEARCH_POST_SUCCESS,
  payload: posts
});

export const clearSearchState = () => ({
  type: CLEAR_SEARCH_STATE
});

// export const addProductSuccess = (product) => ({
//   type: ADD_PRODUCT_SUCCESS,
//   payload: product
// });

// export const addMenuSuccess = (menu) => ({
//   type: ADD_MENU_SUCCESS,
//   payload: menu
// });

export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: post
});

// export const removeProduct = (id) => ({
//   type: REMOVE_PRODUCT,
//   payload: id
// });

// export const removeMenu = (id) => ({
//   type: REMOVE_MENU,
//   payload: id
// });

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id
});

// export const removeProductSuccess = (id) => ({
//   type: REMOVE_PRODUCT_SUCCESS,
//   payload: id
// });

// export const removeMenuSuccess = (id) => ({
  // type: REMOVE_MENU_SUCCESS,
//   payload: id
// });

export const removePostSuccess = (id) => ({
  type: REMOVE_POST_SUCCESS,
  payload: id
});

// export const editProduct = (id, updates) => ({
//   type: EDIT_PRODUCT,
//   payload: {
//     id,
//     updates
//   }
// });

// export const editMenu = (id, updates) => ({
//   type: EDIT_MENU,
//   payload: {
//     id,
//     updates
//   }
// });
export const editPost = (id, updates) => ({
  type: EDIT_POST,
  payload: {
    id,
    updates
  }
});

// export const editProductSuccess = (updates) => ({
//   type: EDIT_PRODUCT_SUCCESS,
//   payload: updates
// });

// export const editMenuSuccess = (updates) => ({
  // type: EDIT_MENU_SUCCESS,
//   payload: updates
// });

export const editPostSuccess = (updates) => ({
  type: EDIT_POST_SUCCESS,
  payload: updates
});

