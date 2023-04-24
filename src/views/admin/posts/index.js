/* eslint-disable react/jsx-props-no-spreading */
import { Boundary } from 'components/common';
import { PostAppliedFilters, PostList } from 'components/post';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectFilter } from 'selectors/selector_post';

import { PostsNavbar } from '../components_post';

import PostsTable from '../components_post/PostsTable';

const Posts = () => {
  useDocumentTitle('Product List | Salinaka Admin');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredPosts: selectFilter(state.posts.items, state.filter),
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    posts: state.posts
  }));

  return (
    <Boundary>
      <PostsNavbar
        postsCount={store.posts.items.length}
        totalPostsCount={store.posts.total}
      />
      <div className="product-admin-items">
        <PostList {...store}>
          <PostAppliedFilters filter={store.filter} />
          <PostsTable filteredPosts={store.filteredPosts} />
        </PostList>
      </div>
    </Boundary>
  );
};

export default withRouter(Posts);
