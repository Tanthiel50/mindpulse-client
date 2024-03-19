import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../http-common/axios-configuration';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');

        if (token) {
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const response = await axiosInstance.get('/me');
          setUser({ ...response.data, role });
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
      localStorage.setItem('role', response.data.role);
      setUser({ ...response.data.user, role: response.data.role });
      return response;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const logout = (onLoggedOut) => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
    if (onLoggedOut) {
        onLoggedOut();
    }
};

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
