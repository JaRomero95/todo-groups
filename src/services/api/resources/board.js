import client from '../client';
import config from '@/config';

const searchPath = 'search';
const boardsPath = 'boards';

const {BOARD_NAME} = config;

async function show() {
  const params = {modelTypes: 'boards', query: BOARD_NAME};
  const response = await client.get(searchPath, {params});
  const {boards} = response.data;
  let board = boards.find(({name}) => name === BOARD_NAME);

  if (!board) {
    board = await create();
  }

  return board;
}

async function create() {
  const params = {name: BOARD_NAME, defaultLabels: false, defaultLists: false};
  const response = await client.post(boardsPath, null, {params});
  return response.data;
}

export default {
  show,
};
