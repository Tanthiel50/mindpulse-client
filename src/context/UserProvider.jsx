import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../http-common/axios-configuration';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');

        if (token) {
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const response = await axiosInstance.get('/me');
          setUser(response.data);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      return response;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
