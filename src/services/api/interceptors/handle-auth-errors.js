import router from '@/services/router';

function isAuthErrorStatus(status) {
  return [400, 401].includes(status);
}

function isDataErrorMsg(message) {
  return ['invalid token', 'invalid key'].includes(message);
}

function isAuthError(response) {
  return response && isAuthErrorStatus(response.status) && isDataErrorMsg(response.data);
}

function handleError(error) {
  if (isAuthError(error.response)) {
    // TODO: show invalid token alert
    router.push({name: 'login'});
  }

  Promise.reject(error);
}

export default handleError;
