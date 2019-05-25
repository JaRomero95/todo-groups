describe('Login', () => {
  beforeEach(() => {
    // TODO: get urls from api service
    cy.route('1/search*', 'fixture:boards/board.json');
    cy.route('1/boards/*/lists*', 'fixture:lists/lists.json');

    cy.visit('/');
  })

  it('Success auth flow', () => {
    logoutButton().should('not.exist');

    fillLoginForm();

    cy.get('[data-test=group-list]');

    logoutButton().click();

    cy.get('[data-test=login-form]');
  })

  function fillLoginForm() {
    cy.get('[name=api-key]').type('a');
    cy.get('[name=oauth-token]').type('b');
    cy.get('[type=submit]').click();
  }

  function logoutButton() {
    return cy.get('[data-test=logout]');
  }
})
