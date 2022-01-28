/**
 * Deep clones a variable to create a new memory reference with the same content
 */

const clone = (variable: any): any => JSON.parse(JSON.stringify(variable));

export default clone;
