import { useDidMount } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'services/firebase';

const usePost = (id) => {
  // get and check if post exists in store
  const storePost = useSelector((state) => state.posts.items.find((item) => item.id === id));

  const [post, setPost] = useState(storePost);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!post || post.id !== id) {
          setLoading(true);
          const doc = await firebase.getSinglePost(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setPost(data);
              setLoading(false);
            }
          } else {
            setError('Post not found.');
          }
        }
      } catch (err) {
        if (didMount) {
          setLoading(false);
          setError(err?.message || 'Something went wrong.');
        }
      }
    })();
  }, [id]);

  return { post, isLoading, error };
};

export default usePost;
