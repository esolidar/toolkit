const returnTrue = () => {
  return true;
};

const removeAllButLast = (string, token) => {
  const parts = string.split(token);

  if (parts[1] === undefined) {
    return string;
  }

  return parts.length > 1 ? parts.slice(0, -1).join('') + token + parts.slice(-1) : '';
};
export { returnTrue, removeAllButLast };

export default removeAllButLast;
