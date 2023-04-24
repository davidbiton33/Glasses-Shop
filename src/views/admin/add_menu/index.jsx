import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useScrollTop } from 'hooks';
import React, { lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addMenu } from 'redux/actions/menuActions';

const MenuForm = lazy(() => import('../components_menu/MenuForm'));

const AddMenu = () => {
  useScrollTop();
  useDocumentTitle('Add New Menu | Salinaka');
  const isLoading = useSelector((state) => state.app.loading);
  const dispatch = useDispatch();

  const onSubmit = (menu) => {
    dispatch(addMenu(menu));
  };

  return (
    <div className="product-form-container">
      <h2>Add New Menu1</h2>
      <Suspense fallback={(
        <div className="loader" style={{ minHeight: '80vh' }}>
          <h6>Loading ... </h6>
          <br />
          <LoadingOutlined />
        </div>
      )}
      >
        <MenuForm
          isLoading={isLoading}
          onSubmit={onSubmit}
          menu={{
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

export default withRouter(AddMenu);


// okay