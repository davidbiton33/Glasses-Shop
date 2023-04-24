import {
  APPLY_FILTER,
  // MENU_APPLY_FILTER,
  // USER_RESET_FILTER,
  CLEAR_RECENT_SEARCH,
  REMOVE_SELECTED_RECENT, 
  RESET_FILTER, 
  SET_BRAND_FILTER,
  SET_MAX_PRICE_FILTER,
  SET_MIN_PRICE_FILTER, SET_TEXT_FILTER
} from 'constants/constants';

export const setTextFilter = (keyword) => ({
  type: SET_TEXT_FILTER,
  payload: keyword
});

// export const userSetTextFilter = (keyword) => ({
//   type: USER_SET_TEXT_FILTER,
//   payload: keyword
// });

export const setBrandFilter = (brand) => ({
  type: SET_BRAND_FILTER,
  payload: brand
});

export const setMinPriceFilter = (min) => ({
  type: SET_MIN_PRICE_FILTER,
  payload: min
});

export const setMaxPriceFilter = (max) => ({
  type: SET_MAX_PRICE_FILTER,
  payload: max
});

export const resetFilter = () => ({
  type: RESET_FILTER
});

// export const userResetFilter = () => ({
//   type: USER_RESET_FILTER
// });

export const clearRecentSearch = () => ({
  type: CLEAR_RECENT_SEARCH
});

// export const userClearRecentSearch = () => ({
//   type: USER_CLEAR_RECENT_SEARCH
// });

export const removeSelectedRecent = (keyword) => ({
  type: REMOVE_SELECTED_RECENT,
  payload: keyword
});

// export const userRemoveSelectedRecent = (keyword) => ({
//   type: USER_REMOVE_SELECTED_RECENT,
//   payload: keyword
// });

export const applyFilter = (filters) => ({
  type: APPLY_FILTER,
  payload: filters
});

// export const menuApplyFilter = (filters) => ({
//   type: MENU_APPLY_FILTER,
//   payload: filters
// });
