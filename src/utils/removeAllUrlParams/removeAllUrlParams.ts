/**
 * Removes every parameter of a given URL
 */

const removeAllUrlParams = (url: string): string => url.substring(0, url.indexOf('?'));

export default removeAllUrlParams;
