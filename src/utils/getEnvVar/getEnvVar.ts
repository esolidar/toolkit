/**
 * Gets the value of an environment variable in both Next.js and React projects
 * @param {string} name - env variable name without NEXT_ prefix, example: PUBLIC_CDN_UPLOADS_URL
 */

const getEnvVar = name => process.env[`NEXT_${name}`] || process.env[name];

export default getEnvVar;
