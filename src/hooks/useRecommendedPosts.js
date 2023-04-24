import { useDidMount } from 'hooks';
import { useEffect, useState } from 'react';
import firebase from '../services/firebase';

const useRecommendedPosts = (itemsCount) => {
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const didMount = useDidMount(true);

  const fetchRecommendedPosts = async () => {
    try {
      setLoading(true);
      setError('');

      const docs = await firebase.getRecommendedPosts(itemsCount);

      if (docs.empty) {
        if (didMount) {
          setError('No recommended posts found.');
          setLoading(false);
        }
      } else {
        const items = [];

        docs.forEach((snap) => {
          const data = snap.data();
          items.push({ id: snap.ref.id, ...data });
        });

        if (didMount) {
          setRecommendedPosts(items);
          setLoading(false);
        }
      }
    } catch (e) {
      if (didMount) {
        setError('Failed to fetch recommended posts');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (recommendedPosts.length === 0 && didMount) {
      fetchRecommendedPosts();
    }
  }, []);


  return {
    recommendedPosts, fetchRecommendedPosts, isLoading, error
  };
};

export default useRecommendedPosts;
