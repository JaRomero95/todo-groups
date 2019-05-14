// "https://api.trello.com/1/search?query=ToDo Groups&modelTypes=boards"
import client from '../client';

// {{url}}/search?query=MyToDoGroups&modelTypes=boards&key={{key}}&token={{token}}
const searchPath = 'search';
const boardsPath = 'boards';

const GROUP_NAME = 'MyToDoGroups';

async function show() {
  const params = {modelTypes: 'boards', query: GROUP_NAME};
  const response = await client.get(searchPath, {params});
  const {boards} = response.data;
  let board = boards && boards[0];

  if (!board) {
    board = await create();
  }

  return board;
}

async function create() {
  const params = {name: GROUP_NAME};
  const response = await client.post(boardsPath, null, {params});
  return response.data;
}

export default {
  show,
};
