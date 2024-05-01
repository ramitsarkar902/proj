import { useCallback, useState } from 'react';

const useStorage = () => {
  const [storageMode, setStorageMode] = useState('localStorage');
  const [backupStorage, setBackupStorage] = useState({});

  const checkForStorage = useCallback(() => {
    try {
      localStorage.length;
    } catch (e) {
      try {
        sessionStorage.length;
        setStorageMode('sessionStorage');
      } catch (e) {
        setStorageMode('backupStorage');
      }
    }
  }, []);

  const storeInLocalStorage = (key, value) => {
    if (storageMode === 'localStorage') {
      localStorage.setItem(key, value);
    } else if (storageMode === 'sessionStorage') {
      sessionStorage.setItem(key, value);
    } else {
      setBackupStorage({ ...backupStorage, [key]: value });
    }
  };

  const getFromLocalStorage = (key) => {
    if (storageMode === 'localStorage') {
      return localStorage.getItem(key);
    } else if (storageMode === 'sessionStorage') {
      return sessionStorage.getItem(key);
    } else {
      return backupStorage[key];
    }
  };

  const removeFromLocalStorage = (key) => {
    if (storageMode === 'localStorage') {
      localStorage.removeItem(key);
    } else if (storageMode === 'sessionStorage') {
      sessionStorage.removeItem(key);
    } else {
      const { [key]: value, ...rest } = backupStorage;
      setBackupStorage(rest);
    }
  };

  const clearLocalStorage = () => {
    if (storageMode === 'localStorage') {
      localStorage.clear();
    }
  };

  return {
    checkForStorage,
    storeInLocalStorage,
    getFromLocalStorage,
    removeFromLocalStorage,
    clearLocalStorage,
  };
};

export default useStorage;
