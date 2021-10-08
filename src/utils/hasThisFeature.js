const hasThisFeature = feature => {
  const features = JSON.parse(localStorage.getItem('subscription' || '[]'));
  const isInArray = features.find(e => e.name === feature);

  return !!isInArray;
};

export default hasThisFeature;
