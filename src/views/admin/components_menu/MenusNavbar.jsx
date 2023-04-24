import { FilterOutlined, PlusOutlined } from '@ant-design/icons';
import { FiltersToogleMenu, SearchBar } from 'components/common';
import { ADD_MENU } from 'constants/routes';
import PropType from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

const MenusNavbar = (props) => {
  const { menusCount, totalMenusCount } = props;
  const history = useHistory();

  return (
    <div className="product-admin-header">
      <h3 className="product-admin-header-title">
        Menus &nbsp;
        (
        {`${menusCount} / ${totalMenusCount}`}
        )
      </h3>
      <SearchBar />
            &nbsp;
      <FiltersToogleMenu>
        <button className="button-muted button-small" type="button">
          <FilterOutlined />
          &nbsp;More Filters
        </button>
      </FiltersToogleMenu>
      <button
        className="button button-small"
        onClick={() => history.push(ADD_MENU)}
        type="button"
      >
        <PlusOutlined />
        &nbsp; Add New Menu2
      </button>
    </div>
  );
};

MenusNavbar.propTypes = {
  menusCount: PropType.number.isRequired,
  totalMenusCount: PropType.number.isRequired
};

export default MenusNavbar;

// okay