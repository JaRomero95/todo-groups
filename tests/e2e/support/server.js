import config from '../../../src/config'; // TODO: use absolute path

beforeEach(() => {
  cy.server({
    force404: true,
    baseUrl: config.TRELLO_API_URL,
  });

  // TODO: get urls from api service
  cy.route('1/search*', 'fixture:boards/board.json');
  cy.route('1/boards/*/lists*', 'fixture:lists/lists.json');
  cy.route('1/members/me*', 'fixture:me/me.json');
});