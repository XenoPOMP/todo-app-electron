type UseLocalStorageType<T> = [
  getItem: T,
  setItem: (newValue: T) => void
];

export const useLocalStorage = <T>(
  name: string,
  defaultItem?: T
): UseLocalStorageType<T> => {
  const getItem = localStorage.getItem(name);

  // Check if state is not created
  if (!getItem) {
    localStorage.setItem(name, JSON.stringify(defaultItem));
  }

  return [
    getItem ? JSON.parse(getItem) : defaultItem,
    (newValue) => {
      localStorage.setItem(name, JSON.stringify(newValue));
    },
  ];
};
