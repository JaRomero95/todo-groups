import client from '../client';

const cardsPath = idList => `lists/${idList}/cards`;
const createCardPath = 'cards';
const cardPath = idCard => `cards/${idCard}`;

async function create(idList, card) {
  const params = {idList, ...card};
  const response = await client.post(createCardPath, null, {params});
  return response.data;
}

async function update(idCard, params) {
  const response = await client.put(cardPath(idCard), null, {params});
  return response.data;
}

async function destroy(idCard) {
  const response = await client.delete(cardPath(idCard));
  return response.data;
}

export default {
  create,
  update,
  destroy,
};
