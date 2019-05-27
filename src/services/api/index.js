import board from './resources/board';
import lists from './resources/lists';
import cards from './resources/cards';
import me from './resources/me';

/**
 * Adaptation from Trello API to application Domain Specific Language
 * 
 * DSL             Trello
 * =======================
 * database*       board
 * group           list
 * task            card   
 * profile         me
 */

export default {
  board,
  groups: lists,
  tasks: cards,
  profile: me,
};
