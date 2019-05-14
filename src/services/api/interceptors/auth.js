function auth(config) {
  const authParams = {
    key: localStorage.getItem('key'),
    token: localStorage.getItem('token'),
  };


  return {
    ...config,
    params: {
      ...authParams,
      ...config.params,
    }
  };
}

export default auth;
