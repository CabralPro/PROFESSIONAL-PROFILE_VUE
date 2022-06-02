export const Storage = {

  setItemArrayStorage: <T>(key: string, item: T, append = true): void => {
    const items = Storage.getArrayStorage<T>(key);
    items.push(item);
    localStorage.setItem(key, JSON.stringify(items));
  },

  getArrayStorage: <T>(key: string): T[] => JSON.parse(localStorage.getItem(key) || '[]'),

  removeItemArrayStorage: <T>(key: string, item: T): void => {
    const items = Storage.getArrayStorage<T>(key);
    const filtredItems = items.filter((e: T) => e !== item);
    localStorage.setItem(key, JSON.stringify(filtredItems));
  },

};
