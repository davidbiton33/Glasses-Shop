import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, useMenu, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { editMenu } from 'redux/actions/menuActions';

const MenuForm = lazy(() => import('../components_menu/MenuForm'));

const EditMenu = ({ match }) => {
  useDocumentTitle('Edit Menu | Salinaka');
  useScrollTop();
  const { menu, error, isLoading } = useMenu(match.params.id);
  const dispatch = useDispatch();

  const onSubmitForm = (updates) => {
    dispatch(editMenu(menu.id, updates));
  };

  return (
    <div className="product-form-container">
      {error && <Redirect to="/dashboard/menus" />}
      <h2>Edit Menu3</h2>
      {menu && (
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
            onSubmit={onSubmitForm}
            menu={menu}
          />
        </Suspense>
      )}
    </div>
  );
};

EditMenu.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string
    })
  }).isRequired
};

export default withRouter(EditMenu);
