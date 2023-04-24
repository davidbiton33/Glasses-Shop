import { useDidMount } from 'hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from 'services/firebase';

const useMenu = (id) => {
  // get and check if menu exists in store
  const storeMenu = useSelector((state) => state.menus.items.find((item) => item.id === id));

  const [menu, setMenu] = useState(storeMenu);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMount = useDidMount(true);

  useEffect(() => {
    (async () => {
      try {
        if (!menu || menu.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleMenu(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMount) {
              setMenu(data);
              setLoading(false);
            }
          } else {
            setError('Menu not found.');
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

  return { menu, isLoading, error };
};

export default useMenu;
