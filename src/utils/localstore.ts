const PHOTO_CART_KEY = 'TRAVELPIX_PHOTO_CART_KEY';

const setDataLocalByKey = (key: string, data: string) => {
  localStorage.setItem(key, data);
};

const getDataLocalByKey = (key: string): string => {
  const dataStr = localStorage.getItem(key);
  if (dataStr === null) return '';
  return dataStr;
};

const checkExistingKey = (key: string): boolean => {
  const dataStr = localStorage.getItem(key);
  return dataStr !== null;
};

const removeDataLocalByKey = (key: string) => {
  if (checkExistingKey(key)) {
    localStorage.removeItem(key);
  }
};

export { PHOTO_CART_KEY, setDataLocalByKey, getDataLocalByKey, checkExistingKey, removeDataLocalByKey };
