/* eslint-disable react/forbid-prop-types */
import { FeaturedMenu } from 'components/menu';
import PropType from 'prop-types';
import React from 'react';

const MenuShowcase = ({ menus, skeletonCount }) => (
  <div className="product-display-grid">
    {(menus.length === 0) ? new Array(skeletonCount).fill({}).map((menu, index) => (
      <FeaturedMenu
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        menu={menu}
      />
    )) : menus.map((menu) => (
      <FeaturedMenu
        key={menu.id}
        menu={menu}
      />
    ))}
  </div>
);
MenuShowcase.defaultProps = {
  skeletonCount: 4
};

MenuShowcase.propTypes = {
  menus: PropType.array.isRequired,
  skeletonCount: PropType.number
};

export default MenuShowcase;
