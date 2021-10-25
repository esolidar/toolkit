import isDefined from '../isDefined';

const isObject = v => isDefined(v) && typeof v === 'object' && !Array.isArray(v);

export default isObject;
