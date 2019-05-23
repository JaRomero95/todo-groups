const env = process.env.NODE_ENV;
const boardPrefix = env === 'production' ? '' : env;
const BOARD_NAME = `MyToDoGroups - ${boardPrefix}`;

export default {
  BOARD_NAME
};
