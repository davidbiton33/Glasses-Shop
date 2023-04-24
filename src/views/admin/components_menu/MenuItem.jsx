import { ImageLoader } from 'components/common';
import { EDIT_MENU } from 'constants/routes';
import { displayActionMessage, displayDate, displayMoney } from 'helpers/utils';
import PropType from 'prop-types';
import React, { useRef } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { removeMenu } from 'redux/actions/menuActions';

const MenuItem = ({ menu }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const menuRef = useRef(null);

  const onClickEdit = () => {
    history.push(`${EDIT_MENU}/${menu.id}`);
  };

  const onDeleteMenu = () => {
    menuRef.current.classList.toggle('item-active');
  };

  const onConfirmDelete = () => {
    dispatch(removeMenu(menu.id));
    displayActionMessage('Item successfully deleted');
    menuRef.current.classList.remove('item-active');
  };

  const onCancelDelete = () => {
    menuRef.current.classList.remove('item-active');
  };

  return (
    <SkeletonTheme
      color="#e1e1e1"
      highlightColor="#f2f2f2"
    >
      <div
        className={`item item-s ${!menu.id && 'item-loading'}`}
        ref={menuRef}
      >
        <div className="grid grid-count-6">
          <div className="grid-col item-img-wrapper">
            {menu.image ? (
              <ImageLoader
                alt={menu.name}
                className="item-img"
                src={menu.image}
              />
            ) : <Skeleton width={50} height={30} />}
          </div>
          <div className="grid-col">
            <span className="text-overflow-ellipsis">{menu.name || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{menu.brand || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            <span>{menu.price ? displayMoney(menu.price) : <Skeleton width={30} />}</span>
          </div>
          <div className="grid-col">
            <span>
              {menu.dateAdded ? displayDate(menu.dateAdded) : <Skeleton width={30} />}
            </span>
          </div>
          <div className="grid-col">
            <span>{menu.maxQuantity || <Skeleton width={20} />}</span>
          </div>
        </div>
        {menu.id && (
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
              onClick={onDeleteMenu}
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

MenuItem.propTypes = {
  menu: PropType.shape({
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

export default withRouter(MenuItem);
