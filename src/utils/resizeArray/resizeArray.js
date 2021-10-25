const resizeArray = (array, newSize) => {
  const changeSize = newSize - array.length;

  if (changeSize > 0) return array.concat(Array(changeSize).fill(0));
  return array.slice(0, newSize);
};

export default resizeArray;
