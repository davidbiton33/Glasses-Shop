/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
export const selectFilter = (posts, filter) => {
  if (!posts || posts.length === 0) return [];

  const keyword = filter.keyword.toLowerCase();

  return posts.filter((post) => {
    const isInRange = filter.maxPrice
      ? (post.price >= filter.minPrice && post.price <= filter.maxPrice)
      : true;
    const matchKeyword = post.keywords ? post.keywords.includes(keyword) : true;
    // const matchName = post.name ? post.name.toLowerCase().includes(keyword) : true;
    const matchDescription = post.description
      ? post.description.toLowerCase().includes(keyword)
      : true;
    const matchBrand = post.brand ? post.brand.toLowerCase().includes(filter.brand) : true;

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

// Select post with highest price
export const selectMax = (posts) => {
  if (!posts || posts.length === 0) return 0;

  let high = posts[0];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].price > high.price) {
      high = posts[i];
    }
  }

  return Math.floor(high.price);
};

// Select post with lowest price
export const selectMin = (posts) => {
  if (!posts || posts.length === 0) return 0;
  let low = posts[0];

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].price < low.price) {
      low = posts[i];
    }
  }

  return Math.floor(low.price);
};
