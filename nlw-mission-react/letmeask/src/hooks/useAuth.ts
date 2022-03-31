// #region Imports

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// #endregion Imports

export function useAuth() {
  const value = useContext(AuthContext);

  return value;
}