const useLocalStorage = (localKey) => {
  const localData = JSON.parse(localStorage.getItem(localKey));

  if (!localData) localStorage.setItem(localKey, JSON.stringify([]));

  const setStorage = (data) =>
    localStorage.setItem(localKey, JSON.stringify(data));

  return [localData, setStorage];
};

export default useLocalStorage;
