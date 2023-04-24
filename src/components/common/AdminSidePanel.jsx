import { ADMIN_PRODUCTS, ADMIN_MENUS, ADMIN_POSTS } from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Home } from 'views';

const SideNavigation = () => (
  <aside className="sidenavigation">
    <div className="sidenavigation-wrapper">
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_PRODUCTS}
        >
          Products
        </NavLink>
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_MENUS}
        >
          Menus
        </NavLink>

        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_POSTS}
        >
          Posts
        </NavLink>

      </div>
      <div className="sidenavigation-item">
        <h4 className="sidenavigation-menu my-0">Read More</h4>
      </div>
    </div>
  </aside>
);

export default SideNavigation;
