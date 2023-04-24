import { CheckOutlined } from '@ant-design/icons';
import { ImageLoader } from 'components/common';
import { displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

const PostItem = ({ post, isItemOnBasket, addToBasket }) => {
  const history = useHistory();

  const onClickItem = () => {
    if (!post) return;

    if (post.id) {
      history.push(`/post/${post.id}`);
    }
  };

  const itemOnBasket = isItemOnBasket ? isItemOnBasket(post.id) : false;

  const handleAddToBasket = () => {
    if (addToBasket) addToBasket({ ...post, selectedSize: post.sizes[0] });
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!post.id ? 'product-loading' : ''}`}
        style={{
          border: post && itemOnBasket ? '1px solid #a6a5a5' : '',
          boxShadow: post && itemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
        }}
      >
        {itemOnBasket && <CheckOutlined className="fa fa-check product-card-check" />}
        <div
          className="product-card-content"
          onClick={onClickItem}
          role="presentation"
        >
          <div className="product-card-img-wrapper">
            {post.image ? (
              <ImageLoader
                alt={post.name}
                className="product-card-img"
                src={post.image}
              />
            ) : <Skeleton width="100%" height="90%" />}
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {post.name || <Skeleton width={80} />}
            </h5>
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {post.name || <Skeleton width={80} />}
            </h5>
            <p className="product-card-brand">
              {post.brand || <Skeleton width={60} />}
            </p>
            <h4 className="product-card-price">
              {post.price ? displayMoney(post.price) : <Skeleton width={40} />}
            </h4>
          </div>
        </div>
        {post.id && (
          <button
            className={`product-card-button button-small button button-block ${itemOnBasket ? 'button-border button-border-gray' : ''}`}
            onClick={handleAddToBasket}
            type="button"
          >
            {itemOnBasket ? 'Remove from basket' : 'Add to basket2'}
          </button>
        )}

      </div>
    </SkeletonTheme>
  );
};

PostItem.defaultProps = {
  isItemOnBasket: undefined,
  addToBasket: undefined
};

PostItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropType.object.isRequired,
  isItemOnBasket: PropType.func,
  addToBasket: PropType.func
};

export default PostItem;
