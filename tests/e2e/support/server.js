import config from '../../../src/config'; // TODO: use absolute path

beforeEach(() => {
  cy.server({
    force404: true,
    baseUrl: config.TRELLO_API_URL,
  });
});