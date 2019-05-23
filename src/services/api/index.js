import board from './resources/board';
import lists from './resources/lists';
import cards from './resources/cards';

/**
 * Adaptation from Trello API to application Domain Specific Language
 * 
 * DSL             Trello
 * =======================
 * database*       board
 * group           list
 * task            card   
 */

export default {
  board,
  groups: lists,
  tasks: cards,
};
