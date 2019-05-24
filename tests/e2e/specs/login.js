describe('Login', () => {
  beforeEach(() => {
    // TODO: get urls from api service
    cy.route('1/search*', 'fixture:boards/board.json');
    cy.route('1/boards/*/lists*', 'fixture:lists/lists.json');
    cy.visit('/');
  })

  it('Success auth', () => {
    cy.get('[name=api-key]').type('a');
    cy.get('[name=oauth-token]').type('b');
    cy.get('[type=submit]').click();

    cy.contains('Group 1');
  })
})
