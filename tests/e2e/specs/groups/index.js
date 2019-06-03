import {stubGetLists} from './../../support/stub-requests';

describe('Groups index', () => {
  beforeEach(() => {
    cy.login();
  })

  context('with groups', () => {
    beforeEach(() => {
      cy.visit('/groups');
    })

    it('Show groups ordered by pos asc', () => {
      cy.get('#app').should('not.contain', 'Create your first group...');

      cy.get('[data-test=group-list-item]').contains('Group B');
      cy.get('[data-test=group-list-item]:last-child').contains('Group A');
    })
  })

  context('without groups', () => {
    beforeEach(() => {
      stubGetLists('fixture:lists/empty.json');
      cy.visit('/groups');
    })

    it('Show empty message', () => {
      cy.get('[data-test=group-list-item]').should('not.exist');
      cy.contains('Create your first group...');
    })
  })
})
