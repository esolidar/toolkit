const removeUrlParam = (param) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(param);
  window.history.pushState({ path: url.href }, '', url.href);
};

export default removeUrlParam;
