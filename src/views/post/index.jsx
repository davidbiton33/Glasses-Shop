/* eslint-disable react/jsx-props-no-spreading */
import { PostAppliedFilters, PostGrid, PostList } from 'components/post';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectFilter } from 'selectors/selector';

const Post = () => {
  useDocumentTitle('Post | Salinaka');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredPosts: selectFilter(state.posts.items, state.filter),
    posts: state.posts,
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading
  }), shallowEqual);

  return (
    <main className="content">
      <section className="product-list-wrapper">
        <PostAppliedFilters filteredPostsCount={store.filteredPosts.length} />
        <PostList {...store}>
          <PostGrid posts={store.filteredPosts} />
        </PostList>
      </section>
    </main>
  );
};

export default Post;
