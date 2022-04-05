/**
 * Removes a given token from a given string, except for the last instance of the token
 * @param {string} string string containing the token to be removed, ex: 1.000.00
 * @param {string} token token to be removed from the string, ex: .
 * @returns {string} string with every token removed but the last, ex: 1000.00
 */

const returnTrue = () => {
  return true;
};

const removeAllButLast = (string: string, token: string): string => {
  const parts = string.split(token);

  if (parts[1] === undefined) {
    return string;
  }

  return parts.length > 1 ? parts.slice(0, -1).join('') + token + parts.slice(-1) : '';
};

export { returnTrue, removeAllButLast };

export default removeAllButLast;
