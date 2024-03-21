import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../http-common/axios-configuration';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const generateHash = (value) => {
    if (!value) return null;
    return value.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0).toString();
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        const roleHash = localStorage.getItem('roleHash');

        if (token) {
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          const response = await axiosInstance.get('/me');
          setUser({ ...response.data, role });
        }
        if (generateHash(role) !== roleHash) {
          // Les données semblent avoir été manipulées
          logout();
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const verifyIntegrity = () => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');
      const roleHash = localStorage.getItem('roleHash');
  
      if (token && role) {
        if (generateHash(role) !== roleHash) {
          // Si le hash ne correspond pas, cela indique une possible manipulation
          logout();
        }
      }
    };
  
    // Exécutez immédiatement une fois au démarrage
    verifyIntegrity();
  
    // Configurez ensuite une vérification périodique toutes les 2 minutes
    const intervalId = setInterval(verifyIntegrity, 120000); // 120000 ms = 2 minutes
  
    // N'oubliez pas de nettoyer l'intervalle lorsque le composant est démonté
    // pour éviter des effets indésirables ou des fuites de mémoire
    return () => clearInterval(intervalId);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('roleHash', generateHash(response.data.role));
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
    localStorage.removeItem('roleHash');
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
