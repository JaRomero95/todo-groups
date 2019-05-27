describe('Login', () => {
  context('without previous auth', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Success auth flow', () => {
      logoutButton().should('not.exist');
  
      fillLoginForm();
  
      expectedToBeInHomePage();
  
      logoutButton().click();
  
      expectedToBeInLoginPage();
    })

    it('Invalid auth flow', () => {
      cy.route({
        url: '1/members/me*', // TODO: import url from somewhere
        status: 401
      });

      fillLoginForm();

      cy.get('.v-alert').contains('Invalid credentials');
    })
  })

  context('with previous auth', () => {
    beforeEach(() => {
      // TODO: extract function to reuse storage logic in app
      localStorage.setItem('key', 'a');
      localStorage.setItem('token', 'b');

      cy.visit('/')
    })

    it('Redirect to home if tokens exists', () => {
      expectedToBeInHomePage();
    })
  })

  function fillLoginForm() {
    cy.get('[name=api-key]').type('a');
    cy.get('[name=oauth-token]').type('b');
    cy.get('[type=submit]').click();
  }

  function logoutButton() {
    return cy.get('[data-test=logout]');
  }

  // TODO: extract function to route tests helpers
  function expectedToBeInHomePage() {
    cy.url().should('include', '/groups'); // TODO: add helper to test exact url without domain
    cy.get('[data-test=group-list]');
  }

  // TODO: extract function to route tests helpers
  function expectedToBeInLoginPage() {
    cy.url().should('include', '/login'); // TODO: add helper to test exact url without domain
    cy.get('[data-test=login-form]');
  }
})
