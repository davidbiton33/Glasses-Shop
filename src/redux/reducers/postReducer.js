import {
  ADD_POST_SUCCESS,
  CLEAR_SEARCH_STATE, EDIT_POST_SUCCESS,
  GET_POSTS_SUCCESS, REMOVE_POST_SUCCESS,
  SEARCH_POST_SUCCESS
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
  searchedPosts: initState
}, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        lastRefKey: action.payload.lastKey,
        total: action.payload.total,
        items: [...state.items, ...action.payload.posts]
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        searchedPosts: {
          lastRefKey: action.payload.lastKey,
          total: action.payload.total,
          items: [...state.searchedPosts.items, ...action.payload.posts]
        }
      };
    case CLEAR_SEARCH_STATE:
      return {
        ...state,
        searchedPosts: initState
      };
    case REMOVE_POST_SUCCESS:
      return {
        ...state,
        items: state.items.filter((post) => post.id !== action.payload)
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        items: state.items.map((post) => {
          if (post.id === action.payload.id) {
            return {
              ...post,
              ...action.payload.updates
            };
          }
          return post;
        })
      };
    default:
      return state;
  }
};
