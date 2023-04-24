import { FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { FiltersTooglePost, SearchBar } from 'components/common';
import { ADD_POST } from 'constants/routes';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const PostsNavbar = (props) => {
  const { postsCount, totalPostsCount } = props;
  const history = useHistory();

  return (
    <div className="product-admin-header">
      <h3 className="product-admin-header-title">
        Posts &nbsp;
        (
        {`${postsCount} / ${totalPostsCount}`}
        )
      </h3>
      <SearchBar />
            &nbsp;
      <FiltersTooglePost>
        <button className="button-muted button-small" type="button">
          <FilterOutlined />
          &nbsp;More Filters
        </button>
      </FiltersTooglePost>
      <button
        className="button button-small"
        onClick={() => history.push(ADD_POST)}
        type="button"
      >
        <PlusOutlined />
        &nbsp; Add New Post2
      </button>
    </div>
  );
};

PostsNavbar.propTypes = {
  postsCount: PropType.number.isRequired,
  totalPostsCount: PropType.number.isRequired
};

export default PostsNavbar;

// okay