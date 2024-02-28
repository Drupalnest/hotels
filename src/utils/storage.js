const isBrowser = typeof window !== 'undefined';

/**
 * Retrieves a value from the browser's local storage by key.
 * @param {string} key - They key value under which the item is stored.
 * @returns {Object/undefined} - The item (if found).
 * @constructor
 */
const GetLocalStorageValue = (key) => {
  let returnValue = null;
  let fetchedItem = window.localStorage.getItem(key);

  if(fetchedItem) {
    fetchedItem = JSON.parse(fetchedItem);
    let now = new Date().getTime();

    if(fetchedItem.expiry == 0 || now < fetchedItem.expiry) {
      returnValue = fetchedItem.value;
    } else {
      window.localStorage.removeItem(key);
    }
  }

  return returnValue;
};

/**
 * Stores a value in the browser's local storage.
 * @param {string} key - The key value to store the object under.
 * @param {Object} value - The value to be stored in local storage.
 * @param {integer} value - The expiry time of local storage in miliseconds.

 * @constructor
 */
const SetLocalStorageValue = (key, value, ttl=0) => {
  let now = new Date().getTime();
  let valueWithExpry = {
    value: value,
    expiry: ttl > 0 ? now + ttl : ttl // expiry 0 for no expiry date
  }
  window.localStorage.setItem(key, JSON.stringify(valueWithExpry));
};

/**
 * Removes a value from the browser's local storage by key. If no key is
 * provided, all values are cleared from local storage.
 * @param {string} key - If not provided, will clear all values from local storage
 * @constructor
 */
const ClearLocalStorageValue = (key) => {
  if (key) {
    window.localStorage.removeItem(key);
  }
  else {
    window.localStorage.clear();
  }
};

export const Storage = {
  SetLocalStorageValue: SetLocalStorageValue,
  GetLocalStorageValue: GetLocalStorageValue,
  ClearLocalStorageValue: ClearLocalStorageValue
}
