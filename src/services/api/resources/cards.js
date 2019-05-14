import client from '../client';

const cardsPath = idList => `lists/${idList}/cards`;

async function index(idList) {
  const response = await client.get(cardsPath(idList));
  return response.data;
}

export default {
  index,
};
