import router from '@/services/router';

function isAuthErrorStatus(status) {
  return [401].includes(status);
}

function isAuthError(response) {
  return response && isAuthErrorStatus(response.status);
}

function handleError(error) {
  if (isAuthError(error.response)) {
    // TODO: show invalid token alert
    // TODO: centralize login/logout
    localStorage.removeItem('key');
    localStorage.removeItem('token');
    router.push({name: 'login'});
  }

  Promise.reject(error);
}

export default handleError;
