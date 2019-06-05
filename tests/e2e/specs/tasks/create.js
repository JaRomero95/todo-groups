describe('Tasks create', () => {
  beforeEach(() => {
    cy.visit('/groups/show/123');
  })

  it('Create tasks successfully', () => {
    expectInsertTaskInListOnCreate();
    
    checkNewTaskPosition();
  })

  function expectInsertTaskInListOnCreate() {
    // FIXME: assert length changes instead assert before and after
    taskListItems().should('have.length', 2);
    addNewTask();
    taskListItems().should('have.length', 3);
  }

  function checkNewTaskPosition() {
    taskListItem(0).contains('YAGNI');
  }

  function addNewTask() {
    cy.get('[name=name]').type('test x{enter}');
    cy.wait('@postCard');
  }

  function taskListItem(index) {
    // TODO: DRY, function used in specs/tasks/index too
    return taskListItems().eq(index);
  }

  function taskListItems() {
    return cy.get('[data-test="task-list-item"]');
  }
})
