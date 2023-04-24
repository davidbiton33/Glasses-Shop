import { ImageLoader } from 'components/common';
import { EDIT_POST } from 'constants/routes';
import { displayActionMessage, displayDate, displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React, { useRef } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { removePost } from 'redux/actions/postActions';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const postRef = useRef(null);

  const onClickEdit = () => {
    history.push(`${EDIT_POST}/${post.id}`);
  };

  const onDeletePost = () => {
    postRef.current.classList.toggle('item-active');
  };

  const onConfirmDelete = () => {
    dispatch(removePost(post.id));
    displayActionMessage('Item successfully deleted');
    postRef.current.classList.remove('item-active');
  };

  const onCancelDelete = () => {
    postRef.current.classList.remove('item-active');
  };

  return (
    <SkeletonTheme
      color="#ffffff"
      highlightColor="#e6dcdc"
    >
      <div
        className={`item item-s ${!post.id && 'item-loading'}`}
        ref={postRef}
      >
        <div className="grid grid-count-6">
          <div className="grid-col post-item-img-wrapper">
            {post.image ? (
              <ImageLoader
                alt={post.name}
                className="item-img"
                src={post.image}
              />
            ) : <Skeleton width={50} height={30} />}
          </div>
          <div className="grid-col">
            <span className="text-overflow-ellipsis">{post.name || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{post.brand || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{post.price ? displayMoney(post.price) : <Skeleton width={30} />}</span>
          </div>
          <div className="grid-col">
            <span>
              {post.dateAdded ? displayDate(post.dateAdded) : <Skeleton width={30} />}
            </span>
          </div>
          <div className="grid-col">
            <span>{post.maxQuantity || <Skeleton width={20} />}</span>
          </div>
        </div>
        {post.id && (
          <div className="item-action">
            <button
              className="button button-border button-small"
              onClick={onClickEdit}
              type="button"
            >
              Edit1
            </button>
            &nbsp;
            <button
              className="button button-border button-small button-danger"
              onClick={onDeletePost}
              type="button"
            >
              Delete
            </button>
            <div className="item-action-confirm">
              <h5>Are you sure you want to delete this?</h5>
              <button
                className="button button-small button-border"
                onClick={onCancelDelete}
                type="button"
              >
                No
              </button>
              &nbsp;
              <button
                className="button button-small button-danger"
                onClick={onConfirmDelete}
                type="button"
              >
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
    </SkeletonTheme>
  );
};

PostItem.propTypes = {
  post: PropType.shape({
    id: PropType.string,
    name: PropType.string,
    brand: PropType.string,
    price: PropType.number,
    maxQuantity: PropType.number,
    description: PropType.string,
    keywords: PropType.arrayOf(PropType.string),
    imageCollection: PropType.arrayOf(PropType.object),
    sizes: PropType.arrayOf(PropType.string),
    image: PropType.string,
    imageUrl: PropType.string,
    isFeatured: PropType.bool,
    isRecommended: PropType.bool,
    dateAdded: PropType.number,
    availableColors: PropType.arrayOf(PropType.string)
  }).isRequired
};

export default withRouter(PostItem);
