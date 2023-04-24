// import { CheckOutlined } from '@ant-design/icons';
// import { ImageLoader } from 'components/common';
// import { displayMoney } from 'helpers/utils';
// import PropType from 'prop-types';
// import React from 'react';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
// import { useHistory } from 'react-router-dom';

// const UserItem = ({ user, isItemOnBasket, addToBasket }) => {
//   const history = useHistory();

//   const onClickItem = () => {
//     if (!user) return;

//     if (user.id) {
//       history.push(`/user/${user.id}`);
//     }
//   };

//   const itemOnBasket = isItemOnBasket ? isItemOnBasket(user.id) : false;

//   const handleAddToBasket = () => {
//     if (addToBasket) addToBasket({ ...user, selectedSize: product.sizes[0] });
//   };

//   return (
//     <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
//       <div
//         className={`product-card ${!product.id ? 'product-loading' : ''}`}
//         style={{
//           border: user && itemOnBasket ? '1px solid #a6a5a5' : '',
//           boxShadow: user && itemOnBasket ? '0 10px 15px rgba(0, 0, 0, .07)' : 'none'
//         }}
//       >
//         {itemOnBasket && <CheckOutlined className="fa fa-check product-card-check" />}
//         <div
//           className="product-card-content"
//           onClick={onClickItem}
//           role="presentation"
//         >
//           <div className="product-card-img-wrapper">
//             {product.image ? (
//               <ImageLoader
//                 alt={user.name}
//                 className="product-card-img"
//                 src={user.image}
//               />
//             ) : <Skeleton width="100%" height="90%" />}
//           </div>
//           <div className="product-details">
//             <h5 className="product-card-name text-overflow-ellipsis margin-auto">
//               {user.name || <Skeleton width={80} />}
//             </h5>
//             <p className="product-card-brand">
//               {user.brand || <Skeleton width={60} />}
//             </p>
//             <h4 className="product-card-price">
//               {user.price ? displayMoney(user.price) : <Skeleton width={40} />}
//             </h4>
//           </div>
//         </div>
//         {user.id && (
//           <button
//             className={`product-card-button button-small button button-block ${itemOnBasket ? 'button-border button-border-gray' : ''}`}
//             onClick={handleAddToBasket}
//             type="button"
//           >
//             {itemOnBasket ? 'Remove from basket' : 'Add to basket'}
//           </button>
//         )}

//       </div>
//     </SkeletonTheme>
//   );
// };

// UserItem.defaultProps = {
//   isItemOnBasket: undefined,
//   addToBasket: undefined
// };

// UserItem.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   user: PropType.object.isRequired,
//   isItemOnBasket: PropType.func,
//   addToBasket: PropType.func
// };

// export default UserItem;
