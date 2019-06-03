const BOARD_URL = '1/search*';
const LISTS_URL = '1/boards/*/lists*';
const PROFILE_URL = '1/members/me*';

function stubGetBoard(response='fixture:boards/board.json') {
  cy.route('GET', BOARD_URL, response);
}

function stubGetLists(response='fixture:lists/lists.json') {
  cy.route('GET', LISTS_URL, response);
}

function stubPostList(response='fixture:lists/create.json') {
  cy.route('POST', LISTS_URL, response);
}

function stubGetProfile(response='fixture:me/me.json') {
  cy.route('GET', PROFILE_URL, response);
}

export {
  stubGetBoard,
  stubGetLists,
  stubPostList,
  stubGetProfile,
}
