import {stubGetList} from './../../support/stub-requests';

describe('Tasks index', () => {
  const emptyMessage = 'Add tasks...';

  beforeEach(() => {
    cy.login();
  })

  context('with tasks', () => {
    beforeEach(() => {
      goToTaskList();
    })

    it('Show tasks ordered by pos asc', () => {
      cy.get('#app').should('not.contain', emptyMessage);

      taskListItem(0).contains('DRY');
      taskListItem(1).contains('Clean code');
    })
  })

  context('without tasks', () => {
    beforeEach(() => {
      stubGetList('fixture:lists/empty-tasks.json');
      goToTaskList();
    })

    it('Show empty message', () => {
      cy.get('[data-test=task-list-item]').should('not.exist');
      cy.contains(emptyMessage);
    })
  })

  function goToTaskList() {
    cy.visit('/groups/show/123');
  }

  function taskListItem(index) {
    return cy.get('[data-test="task-list-item"]').eq(index);
  }
})
