/**
 * Gets the value of an environment variable in both Next.js and React projects
 * @param {string} varName environment variable name without 'NEXT_PUBLIC_' prefixes, ex: CDN_UPLOADS_URL
 * @returns {string} environment variable value
 */

const getEnvVar = (varName: string): string =>
  process.env[`NEXT_PUBLIC_${varName.toLowerCase()}`] ||
  process.env[`PUBLIC_${varName.toUpperCase()}`];

export default getEnvVar;
