import {expectedToBeInHomePage} from './../../support/page-assertions';

describe('Groups create', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/groups/show/123');
  })

  it('Delete group successfully', () => {
    openDialog();
    closeDialog();
    openDialog();

    cy.contains('Do you want delete Test group?');

    confirmDelete();

    expectedToBeInHomePage();
  })

  function openDialog() {
    cy.get('[data-test="open-delete-dialog"]').click();
  }

  function closeDialog() {
    cy.get('[data-test="cancel-delete-group"]').click();
  }

  function confirmDelete() {
    cy.get('[data-test="confirm-delete-group"]').click();
    cy.wait('@deleteList');
  }
})
