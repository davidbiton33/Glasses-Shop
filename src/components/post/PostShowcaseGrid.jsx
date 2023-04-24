/* eslint-disable react/forbid-prop-types */
import { FeaturedPost } from 'components/post';
import PropType from 'prop-types';
import React from 'react';

const PostShowcase = ({ posts, skeletonCount }) => (
  <div className="product-display-grid">
    {(posts.length === 0) ? new Array(skeletonCount).fill({}).map((post, index) => (
      <FeaturedPost
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        post={post}
      />
    )) : posts.map((post) => (
      <FeaturedPost
        key={post.id}
        post={post}
      />
    ))}
  </div>
);
PostShowcase.defaultProps = {
  skeletonCount: 4
};

PostShowcase.propTypes = {
  posts: PropType.array.isRequired,
  skeletonCount: PropType.number
};

export default PostShowcase;
