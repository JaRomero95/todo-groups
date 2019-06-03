function expectedToBeInHomePage() {
  cy.url().should('include', '/groups'); // TODO: add helper to test exact url without domain
  cy.get('[data-test=group-list]');
}

function expectedToBeInLoginPage() {
  cy.url().should('include', '/login'); // TODO: add helper to test exact url without domain
  cy.get('[data-test=login-form]');
}

export {
  expectedToBeInLoginPage,
  expectedToBeInHomePage,
}
