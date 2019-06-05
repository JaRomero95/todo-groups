import client from '../client';

const mePath = 'members/me';

async function show() {
  const params = {fields: ['fullName', 'username', 'gravatarHash']};
  const response = await client.get(mePath, {params});
  return response.data;
}

export default {
  show,
};
