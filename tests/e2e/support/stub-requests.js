const BOARD_URL = '1/search*';
const LISTS_URL = '1/boards/*/lists*';
const LIST_URL = '1/lists/*';
const CLOSE_LIST_URL = `${LIST_URL}/closed*`
const CARDS_URL = '1/cards*'
const CARD_URL = '1/cards/*'
const PROFILE_URL = '1/members/me*';

function stubGetBoard(response='fixture:boards/board.json') {
  cy.route('GET', BOARD_URL, response).as('getBoard');
}

function stubGetLists(response='fixture:lists/lists.json') {
  cy.route('GET', LISTS_URL, response).as('getLists');
}

function stubPostList(response='fixture:lists/create.json') {
  cy.route('POST', LISTS_URL, response).as('postList');
}

function stubPutList(response='fixture:lists/update.json') {
  cy.route('PUT', LIST_URL, response).as('putList');
}

function stubGetList(response='fixture:lists/show.json') {
  cy.route('GET', LIST_URL, response).as('getList');
}

function stubDeleteList(response='fixture:lists/delete.json') {
  cy.route('PUT', CLOSE_LIST_URL, response).as('deleteList');
}

function stubPostCard(response='fixture:cards/create.json') {
  cy.route('POST', CARDS_URL, response).as('postCard');
}

function stubPutCard(response='fixture:cards/update.json') {
  cy.route('PUT', CARD_URL, response).as('putCard');
}

function stubDeleteCard(response='fixture:cards/create.json') {
  cy.route('DELETE', CARD_URL, response).as('deleteCard');
}

function stubGetProfile(response='fixture:me/me.json') {
  cy.route('GET', PROFILE_URL, response).as('getProfile');
}

export {
  stubGetBoard,
  stubGetLists,
  stubPostList,
  stubPutList,
  stubGetList,
  stubGetProfile,
  stubDeleteList,
  stubPostCard,
  stubPutCard,
  stubDeleteCard,
}
