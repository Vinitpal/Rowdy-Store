const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key, initialValue) => {
  const property = localStorage.getItem(key);
  const initialState = property ? JSON.parse(property) : initialValue;

  return initialState;
};

const randomIDGenerator = () => {
  return Math.random().toString(36).substr(2, 19);
};

const getTimeStamp = () => {
  return new Date().toString().slice(4, 24);
};

export { setLocalStorage, getLocalStorage, randomIDGenerator, getTimeStamp };
