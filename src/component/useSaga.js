/* eslint-disable prefer-destructuring */
const globalArray = { count: null };

export function useSaga(callback, array) {
  if (array[0] === globalArray?.count) {
    return null;
  }
  globalArray.count = array[0];
  return callback();
}
