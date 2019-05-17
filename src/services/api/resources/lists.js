import client from '../client';

const listsPath = idBoard => `boards/${idBoard}/lists`;
const listPath = idList => `lists/${idList}`;

async function index(idBoard) {
  const params = {fields: ['name', 'pos']};
  const response = await client.get(listsPath(idBoard), {params});
  return response.data;
}

async function create(idBoard, list) {
  const response = await client.post(listsPath(idBoard), null, {params: list});
  return response.data;
}

async function update(idList, params) {
  const response = await client.put(listPath(idList), null, {params});
  return response.data;
}

async function show(idList) {
  const params = {cards: 'all', card_fields: 'name'};
  const response = await client.get(listPath(idList), {params});
  return response.data;
}

export default {
  index,
  show,
  create,
  update,
};
