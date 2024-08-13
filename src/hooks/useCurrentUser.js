import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { usersApi } from '../api'; // Ajusta la ruta según tu estructura de proyecto
import { useSelector } from 'react-redux';
export const useCurrentUser = () => {
  const [data, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userData = useSelector((state) => state.navUsers);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await userData.access;
        if (!token) {
          throw new Error('No token found');
        }

        const response = await usersApi.mainUsersCurrentRetrieve({
          headers: { Authorization: `Bearer ${userData.access}` }
        });

        setUserData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { data, loading, error };
};