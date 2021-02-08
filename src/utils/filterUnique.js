const filterUnique = (array, key) => array.filter((v, i, a) => a.findIndex((t) => (t[key] === v[key])) === i);

export default filterUnique;
