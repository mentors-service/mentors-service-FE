export const checkIsLoggedIn = () => {
  const token = window.localStorage.getItem('token');

  if (!token) return false;

  return true;
};
