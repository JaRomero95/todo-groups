import {expectQueryParams} from './../../support/xhr-assertions';

describe('Mark tasks as completed', () => {
  beforeEach(() => {
    cy.visit('/groups/show/123');
  })

  it('Mark task as complete successfully', () => {
    const taskName = 'Clean code';

    assertTaskIsNotCompleted(taskName);
    checkTask(taskName);
    expectSendCompleteTaskRequest();
    assertTaskIsCompleted(taskName);
  })

  it('Mark task as incomplete successfully', () => {
    const taskName = 'DRY';

    assertTaskIsCompleted(taskName);
    checkTask(taskName);
    expectSendIncompleteTaskRequest();
    assertTaskIsNotCompleted(taskName);
  })

  function expectSendCompleteTaskRequest() {
    const isoDateRegexp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
    const expectedParams = {due: isoDateRegexp, dueComplete: 'true'};

    expectSendTaskRequest(expectedParams);
  }

  function expectSendIncompleteTaskRequest() {
    const expectedParams = {due: '', dueComplete: 'false'};

    expectSendTaskRequest(expectedParams);
  }

  function expectSendTaskRequest(expectedParams) {
    cy.wait('@putCard').then(expectQueryParams.bind(null, expectedParams));
  }

  function checkTask(taskName) {
    findTaskCheckbox(taskName).click();
  }

  function assertTaskIsCompleted(taskName) {
    findTaskNativeCheckbox(taskName).should('be.checked');
  }

  function assertTaskIsNotCompleted(taskName) {
    findTaskNativeCheckbox(taskName).should('not.be.checked');
  }

  function findTaskCheckbox(taskName) {
    return cy.contains('[data-test="task-list-item"]', taskName)
      .find('.v-input--checkbox');
  }

  function findTaskNativeCheckbox(taskName) {
    return findTaskCheckbox(taskName).find('[type=checkbox]');
  }
})
