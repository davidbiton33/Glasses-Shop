import { useBasket } from 'hooks';
import PropType from 'prop-types';
import React from 'react';
import PostItem from './PostItem';

const PostGrid = ({ posts }) => {
  const { addToBasket, isItemOnBasket } = useBasket();

  return (
    <div className="product-grid">
      {posts.length === 0 ? new Array(12).fill({}).map((post, index) => (
        <PostItem
          // eslint-disable-next-line react/no-array-index-key
          key={`product-skeleton ${index}`}
          post={post}
        />
      )) : posts.map((post) => (
        <PostItem
          key={post.id}
          isItemOnBasket={isItemOnBasket}
          addToBasket={addToBasket}
          post={post}
        />
      ))}
    </div>
  );
};

PostGrid.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropType.array.isRequired
};

export default PostGrid;
