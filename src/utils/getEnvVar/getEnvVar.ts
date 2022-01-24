/**
 * Gets the value of an environment variable in both Next.js and React projects
 * @param {string} name environment variable name without 'NEXT_PUBLIC_' prefixes, ex: CDN_UPLOADS_URL
 * @returns {string} environment variable value
 */

const getEnvVar = (name: string): string =>
  process.env[`NEXT_PUBLIC_${name.toLowerCase()}`] || process.env[`PUBLIC_${name.toUpperCase()}`];

export default getEnvVar;
