describe('Task delete', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/groups/show/123');
  })

  it('Delete task successfully', () => {
    const targetTask = {taskName: 'Clean code'};

    openDialog(targetTask);
    closeDialog();
    openDialog(targetTask);

    cy.contains('Do you want delete Clean code?');

    confirmDelete();

    cy.get('#app').should('not.contain', targetTask.taskName);
  })

  function openDialog({taskName}) {
    cy.contains('[data-test="task-list-item"]', taskName)
      .find('[data-test="open-task-delete-dialog"]')
      .click();
  }

  function closeDialog() {
    cy.get('[data-test="cancel-delete-task"]').click();
  }

  function confirmDelete() {
    cy.get('[data-test="confirm-delete-task"]').click();
    cy.wait('@deleteCard');
  }
})
