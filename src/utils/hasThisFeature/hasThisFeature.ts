/**
 * Returns if a given feature has been subscribed by the company
 * @param {string} featureName name of the feature we want to verify
 * @returns {boolean} wether feature is subscribed or not
 */

const hasThisFeature = (featureName: string): boolean => {
  const featuresList = JSON.parse(localStorage.getItem('subscription' || '[]'));
  const hasFeature = featuresList.some(feature => feature.name === featureName);

  return hasFeature;
};

export default hasThisFeature;
