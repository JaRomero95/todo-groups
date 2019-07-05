import {expectQueryParams} from './../../support/xhr-assertions';

describe('Groups create', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/groups');
  })

  it('Create group successfully', () => {
    expectInsertGroupInListOnCreate();
    
    checkNewGroupPosition();
  })

  function expectInsertGroupInListOnCreate() {
    // FIXME: assert length changes instead assert before and after
    groupListRows().should('have.length', 2);
    addNewGroup();
    groupListRows().should('have.length', 3);
  }

  function checkNewGroupPosition() {
    groupListRows().eq(0).contains('Test group');
  }

  function addNewGroup() {
    cy.get('[name=name]').type('test x{enter}');
    cy.wait('@postList').then(expectQueryParams.bind(null, {name: 'test x', pos: '998'}));
  }

  function groupListRows() {
    return cy.get('[data-test=group-list-item]');
  }
})
