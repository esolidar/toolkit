/**
 * This function is called only once in a given period, X milliseconds after its last invocation
 * The timer is reset on every call
 * @param {any} callback function to be executed after the delay
 * @param {number} wait number of the milliseconds to wait
 */

const debounce = (callback: any, wait: number) => {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
};

export default debounce;
