import { useState, useEffect } from 'react';
import getLocalStorage from '../utils/getLocalStorage';

const useLocalStorage = (key, defaultValue = {}) => {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    setStoredValue(getLocalStorage(key, defaultValue));
  }, []);

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };
  return [storedValue, setValue];
};
export default useLocalStorage;
