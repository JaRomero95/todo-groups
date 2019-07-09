const env = process.env.NODE_ENV;
const boardPrefix = env === 'production' ? '' : ` - ${env}`;

export default {
  TRELLO_API_URL: 'https://api.trello.com/1',
  BOARD_NAME: `MyToDoGroups${boardPrefix}`,
};
