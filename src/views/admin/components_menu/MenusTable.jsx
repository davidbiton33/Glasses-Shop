/* eslint-disable react/forbid-prop-types */
import PropType from 'prop-types';
import React from 'react';
import { MenuItem } from '.';

const MenusTable = ({ filteredMenus }) => (
  <div>
    {filteredMenus.length > 0 && (
      <div className="grid grid-product grid-count-6">
        <div className="grid-col" />
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
    {filteredMenus.length === 0 ? new Array(10).fill({}).map((menu, index) => (
      <MenuItem
        // eslint-disable-next-line react/no-array-index-key
        key={`product-skeleton ${index}`}
        menu={menu}
      />
    )) : filteredMenus.map((menu) => (
      <MenuItem
        key={menu.id}
        menu={menu}
      />
    ))}
  </div>
);

MenusTable.propTypes = {
  filteredMenus: PropType.array.isRequired
};

export default MenusTable;
