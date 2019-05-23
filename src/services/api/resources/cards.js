import client from '../client';

const cardsPath = idList => `lists/${idList}/cards`;
const cardPath = 'cards';

async function index(idList) {
  const response = await client.get(cardsPath(idList));
  return response.data;
}

async function create(idList, card) {
  const params = {idList, ...card};
  const response = await client.post(cardPath, null, {params});
  return response.data;
}

export default {
  index,
  create,
};
