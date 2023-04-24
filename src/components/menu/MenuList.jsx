/* eslint-disable react/forbid-prop-types */
import { Boundary, MessageDisplay } from 'components/common';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from 'redux/actions/miscActions';
import { getMenus } from 'redux/actions/menuActions';

const MenuList = (props) => {
  const {
    menus, filteredMenus, isLoading, requestStatus, children
  } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchMenus = () => {
    setFetching(true);
    dispatch(getMenus(menus.lastRefKey));
  };

  useEffect(() => {
    if (menus.items.length === 0 || !menus.lastRefKey) {
      fetchMenus();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [menus.lastRefKey]);

  if (filteredMenus.length === 0 && !isLoading) {
    return (
      <MessageDisplay message={requestStatus?.message || 'No menus found.'} />
    );
  } if (filteredMenus.length === 0 && requestStatus) {
    return (
      <MessageDisplay
        message={requestStatus?.message || 'Something went wrong :('}
        action={fetchMenus}
        buttonLabel="Try Again"
      />
    );
  }
  return (
    <Boundary>
      {children}
      {/* Show 'Show More' button if products length is less than total products */}
      {menus.items.length < menus.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchMenus}
            type="button"
          >
            {isFetching ? 'Fetching Items...' : 'Show More Items'}
          </button>
        </div>
      )}
    </Boundary>
  );
};

MenuList.defaultProps = {
  requestStatus: null
};

MenuList.propTypes = {
  menus: PropType.object.isRequired,
  filteredMenus: PropType.array.isRequired,
  isLoading: PropType.bool.isRequired,
  requestStatus: PropType.string,
  children: PropType.oneOfType([
    PropType.arrayOf(PropType.node),
    PropType.node
  ]).isRequired
};

export default MenuList;
