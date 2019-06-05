describe('Groups edit', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/groups/show/123');
  })

  it('Create group successfully', () => {
    clickEditGroup();
    setGroupName('Hello world');
    cancelEditGroup();

    expectTitleToBe('Test group');

    clickEditGroup();
    setGroupName('Hello world');
    confirmEditGroup();

    // FIXME: this is not real, the expected value is the one defined in the update fixture
    expectTitleToBe('Hello world');
  })

  function clickEditGroup() {
    cy.get('[data-test="group-edit"]').click();
  }

  function setGroupName(groupName) {
    groupForm().find('[name=name]').clear().type(groupName);
  }

  function cancelEditGroup() {
    groupForm().contains('clear').click();
  }

  function confirmEditGroup() {
    groupForm().contains('send').click();
    cy.wait('@putList');
  }

  function groupForm() {
    return cy.get('[data-test="group-edit-form"]');
  }

  function expectTitleToBe(title) {
    cy.contains('[data-test="group-title"]', title);
  }
})
