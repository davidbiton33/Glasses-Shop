/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import { PostItem } from '.';

const PostsTable = ({ filteredPosts }) => (
  <div>
    {filteredPosts.length > 0 && (
      <div className="grid grid-product grid-count-6">
        {/* <div className="grid-col" /> */}
        <div className="grid-col">
          <h5>Image</h5>
        </div>
        <div className="grid-col">
          <h5>Name</h5>
        </div>
        <div className="grid-col">
          <h5>Brand</h5>
        </div>
        <div className="grid-col">
          <h5>Price</h5>
        </div>
        <div className="grid-col">
          <h5>Date Added</h5>
        </div>
        <div className="grid-col">
          <h5>Qty</h5>
        </div>
      </div>
    )}
    {filteredPosts.length === 0 ? new Array(10).fill({}).map((post, index) => (
      <PostItem
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        post={post}
      />
    )) : filteredPosts.map((post) => (
      <PostItem
        key={post.id}
        post={post}
      />
    ))}
  </div>
);

PostsTable.propTypes = {
  filteredPosts: PropType.array.isRequired
};

export default PostsTable;
