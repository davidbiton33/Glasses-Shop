import { LoadingOutlined } from '@ant-design/icons';
import { useDocumentTitle, usePost, useScrollTop } from 'hooks';
import PropType from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { editPost } from 'redux/actions/postActions';

const PostForm = lazy(() => import('../components_post/PostForm'));

const EditPost = ({ match }) => {
  useDocumentTitle('Edit Post | Salinaka');
  useScrollTop();
  const { post, error, isLoading } = usePost(match.params.id);
  const dispatch = useDispatch();

  const onSubmitForm = (updates) => {
    dispatch(editPost(post.id, updates));
  };

  return (
    <div className="product-form-container">
      {error && <Redirect to="/dashboard/posts" />}
      <h2>Edit Post3</h2>
      {post && (
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
            onSubmit={onSubmitForm}
            post={post}
          />
        </Suspense>
      )}
    </div>
  );
};

EditPost.propTypes = {
  match: PropType.shape({
    params: PropType.shape({
      id: PropType.string
    })
  }).isRequired
};

export default withRouter(EditPost);
