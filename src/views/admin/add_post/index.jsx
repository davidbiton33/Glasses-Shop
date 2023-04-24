import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost } from 'redux/actions/postActions';

const PostForm = lazy(() => import('../components_post/PostForm'));

const AddPost = () => {
  useScrollTop();
  useDocumentTitle('Add New Post | Salinaka');
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onSubmit = (post) => {
    dispatch(addPost(post));
  };

  return (
    <div className="product-form-container">
      <h2>Add New Post1</h2>
      <Suspense fallback={(
        <div className="loader" style={{ minHeight: '80vh' }}>
          <h6>Loading ... </h6>
          <br />
          <LoadingOutlined />
        </div>
      )}
      >
        <PostForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          post={{
            name: '',
            brand: '',
            price: 0,
            maxQuantity: 0,
            description: '',
            keywords: [],
            sizes: [],
            image: '',
            isFeatured: false,
            isRecommended: false,
            availableColors: [],
            imageCollection: []
          }}
        />
      </Suspense>
    </div>
  );
};

export default withRouter(AddPost);


// okay