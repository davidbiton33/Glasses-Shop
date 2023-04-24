/* eslint-disable react/jsx-props-no-spreading */
import { Boundary } from 'components/common';
import { MenuAppliedFilters, MenuList } from 'components/menu';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectFilter } from 'selectors/selector_menu';

import { MenusNavbar } from '../components_menu';

import MenusTable from '../components_menu/MenusTable';

const Menus = () => {
  useDocumentTitle('Product List | Salinaka Admin');
  useScrollTop();

  const store = useSelector((state) => ({
    filteredMenus: selectFilter(state.menus.items, state.filter),
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    menus: state.menus
  }));

  return (
    <Boundary>
      <MenusNavbar
        menusCount={store.menus.items.length}
        totalMenusCount={store.menus.total}
      />
      <div className="product-admin-items">
        <MenuList {...store}>
          <MenuAppliedFilters filter={store.filter} />
          <MenusTable filteredMenus={store.filteredMenus} />
        </MenuList>
      </div>
    </Boundary>
  );
};

export default withRouter(Menus);
