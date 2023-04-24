import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
import { ColorChooser, ImageLoader, MessageDisplay } from 'components/common';
import { PostShowcaseGrid } from 'components/post';
import { RECOMMENDED_POSTS, POST } from 'constants/routes';
import { displayMoney } from 'helpers/utils';
import {
  useBasket,
  useDocumentTitle,
  usePost,
  useRecommendedPosts,
  useScrollTop
} from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';

const ViewPost = () => {
  const { id } = useParams();
  const { post, isLoading, error } = usePost(id);
  const { addToBasket, isItemOnBasket } = useBasket(id);
  useScrollTop();
  useDocumentTitle(`View ${post?.name || 'Item'}`);

  const [selectedImage, setSelectedImage] = useState(post?.image || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const {
    recommendedPosts,
    fetchRecommendedPosts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useRecommendedPosts(6);
  const colorOverlay = useRef(null);

  useEffect(() => {
    setSelectedImage(post?.image);
  }, [post]);

  const onSelectedSizeChange = (newValue) => {
    setSelectedSize(newValue.value);
  };

  const onSelectedColorChange = (color) => {
    setSelectedColor(color);
    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };

  const handleAddToBasket = () => {
    addToBasket({ ...post, selectedColor, selectedSize: selectedSize || post.sizes[0] });
  };

  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <h4>Loading Post...</h4>
          <br />
          <LoadingOutlined style={{ fontSize: '3rem' }} />
        </div>
      )}
      {error && (
        <MessageDisplay message={error} />
      )}
      {(post && !isLoading) && (
        <div className="product-view">
          <Link to={POST}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Back to shop
            </h3>
          </Link>
          <div className="product-modal">
            {post.imageCollection.length !== 0 && (
              <div className="product-modal-image-collection">
                {post.imageCollection.map((image) => (
                  <div
                    className="product-modal-image-collection-wrapper"
                    key={image.id}
                    onClick={() => setSelectedImage(image.url)}
                    role="presentation"
                  >
                    <ImageLoader
                      className="product-modal-image-collection-img"
                      src={image.url}
                    />
                  </div>
                  // {post.imageCollection.length !== 0 
                    // <div className="product-modal-image-collection">
                    //   {post.imageCollection.map((image) => (
                    //     <div
                    //       className="product-modal-image-collection-wrapper"
                    //       key={image.id}
                    //       onClick={() => setSelectedImage(image.url)}
                    //       role="presentation"
                    //     >
                    //       <ImageLoader
                    //         className="product-modal-image-collection-img"
                    //         src={image.url}
                    //       />
                    //     </div>
                    //   ))}
                    // </div>
                  // }
                ))}
              </div>
            )}
            <div className="product-modal-image-wrapper">
              {selectedColor && <input type="color" disabled ref={colorOverlay} id="color-overlay" />}
              <ImageLoader
                alt={post.name}
                className="product-modal-image"
                src={selectedImage}
              />
            </div>
            <div className="product-modal-details">
              <br />
              <span className="text-subtle">{post.brand}</span>
              <h1 className="margin-top-0">{post.name}</h1>
              <span>{post.description}</span>
              <br />
              <br />
              <div className="divider" />
              <br />
              <div>
                <span className="text-subtle">Lens Width and Frame Size</span>
                <br />
                <br />
                <Select
                  placeholder="--Select Size--"
                  onChange={onSelectedSizeChange}
                  options={post.sizes.sort((a, b) => (a < b ? -1 : 1)).map((size) => ({ label: `${size} mm`, value: size }))}
                  styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
                />
              </div>
              <br />
              {post.availableColors.length >= 1 && (
                <div>
                  <span className="text-subtle">Choose Color</span>
                  <br />
                  <br />
                  <ColorChooser
                    availableColors={post.availableColors}
                    onSelectedColorChange={onSelectedColorChange}
                  />
                </div>
              )}
              <h1>{displayMoney(post.price)}</h1>
              <div className="product-modal-action">
                <button
                  className={`button button-small ${isItemOnBasket(post.id) ? 'button-border button-border-gray' : ''}`}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(post.id) ? 'Remove From Basket' : 'Add To Basket'}
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '10rem' }}>
            <div className="display-header">
              <h1>Recommended</h1>
              <Link to={RECOMMENDED_POSTS}>See All</Link>
            </div>
            {errorFeatured && !isLoadingFeatured ? (
              <MessageDisplay
                message={error}
                action={fetchRecommendedPosts}
                buttonLabel="Try Again"
              />
            ) : (
              <PostShowcaseGrid posts={recommendedPosts} skeletonCount={3} />
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ViewPost;
