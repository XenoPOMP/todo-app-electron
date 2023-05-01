import Cookies from 'universal-cookie';

type UseCookieType<T> = [
  getItem: T,
  setItem: (newValue: T) => void
];

export const useCookie = <T>(
  name: string,
  defaultValue: T
): UseCookieType<T> => {
  const cookies = new Cookies();
  const getItem = cookies.get(name);

  if (!getItem) {
    cookies.set(name, defaultValue);
  }

  return [
    getItem,
    (newValue) => {
      cookies.set(name, newValue);
    }
  ];
}