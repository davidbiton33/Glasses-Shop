/* eslint-disable react/forbid-prop-types */
import { Boundary, MessageDisplay } from 'components/common';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { getPosts } from 'redux/actions/postActions';

const PostList = (props) => {
  const {
    posts, filteredPosts, isLoading, requestStatus, children
  } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchPosts = () => {
    setFetching(true);
    dispatch(getPosts(posts.lastRefKey));
  };

  useEffect(() => {
    if (posts.items.length === 0 || !posts.lastRefKey) {
      fetchPosts();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [posts.lastRefKey]);

  if (filteredPosts.length === 0 && !isLoading) {
    return (
      <MessageDisplay message={requestStatus?.message || 'No posts found.'} />
    );
  } if (filteredPosts.length === 0 && requestStatus) {
    return (
      <MessageDisplay
        message={requestStatus?.message || 'Something went wrong :('}
        action={fetchPosts}
        buttonLabel="Try Again"
      />
    );
  }
  return (
    <Boundary>
      {children}
      {/* Show 'Show More' button if products length is less than total products */}
      {posts.items.length < posts.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchPosts}
            type="button"
          >
            {isFetching ? 'Fetching Items...' : 'Show More Items'}
          </button>
        </div>
      )}
    </Boundary>
  );
};

PostList.defaultProps = {
  requestStatus: null
};

PostList.propTypes = {
  posts: PropType.object.isRequired,
  filteredPosts: PropType.array.isRequired,
  isLoading: PropType.bool.isRequired,
  requestStatus: PropType.string,
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default PostList;
