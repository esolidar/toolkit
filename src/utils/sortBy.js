const sortBy = (array, property) =>
  array.sort((a, b) => {
    return a[property] - b[property];
  });

export default sortBy;
