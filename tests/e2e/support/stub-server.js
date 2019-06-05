import config from '../../../src/config'; // TODO: use absolute path
import * as requests from './stub-requests';

beforeEach(() => {
  cy.server({
    force404: true,
    baseUrl: config.TRELLO_API_URL,
  });

  stubAllRequests();
});

function stubAllRequests() {
  Object.keys(requests).forEach(key => requests[key]());
}
