/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
export const selectFilter = (menus, filter) => {
  if (!menus || menus.length === 0) return [];

  const keyword = filter.keyword.toLowerCase();

  return menus.filter((menu) => {
    const isInRange = filter.maxPrice
      ? (menu.price >= filter.minPrice && menu.price <= filter.maxPrice)
      : true;
    const matchKeyword = menu.keywords ? menu.keywords.includes(keyword) : true;
    // const matchName = menu.name ? menu.name.toLowerCase().includes(keyword) : true;
    const matchDescription = menu.description
      ? menu.description.toLowerCase().includes(keyword)
      : true;
    const matchBrand = menu.brand ? menu.brand.toLowerCase().includes(filter.brand) : true;

    return ((matchKeyword || matchDescription) && matchBrand && isInRange);
  }).sort((a, b) => {
    if (filter.sortBy === 'name-desc') {
      return a.name < b.name ? 1 : -1;
    } else if (filter.sortBy === 'name-asc') {
      return a.name > b.name ? 1 : -1;
    } else if (filter.sortBy === 'price-desc') {
      return a.price < b.price ? 1 : -1;
    }

    return a.price > b.price ? 1 : -1;
  });
};

// Select menu with highest price
export const selectMax = (menus) => {
  if (!menus || menus.length === 0) return 0;

  let high = menus[0];

  for (let i = 0; i < menus.length; i++) {
    if (menus[i].price > high.price) {
      high = menus[i];
    }
  }

  return Math.floor(high.price);
};

// Select menu with lowest price
export const selectMin = (menus) => {
  if (!menus || menus.length === 0) return 0;
  let low = menus[0];

  for (let i = 0; i < menus.length; i++) {
    if (menus[i].price < low.price) {
      low = menus[i];
    }
  }

  return Math.floor(low.price);
};
