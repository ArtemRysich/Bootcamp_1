const BASE_URL = 'https://the-one-api.dev/v2/';
const character = 'character';
const bearer = 'Bearer XJlq9OFMcHAy8pAQK7xj';
const limit = 10;
const options = {
    headers: {
      Authorization: bearer
    }
  };

export function lordApi(page = 1) {
  const response = fetch(`${BASE_URL}${character}/?limit=${limit}&page=${page}`, options)
  .then(data => {
    if (!data.ok) {
      throw new Error('Fail');
    }
    return data.json();
  }).catch(err => console.error(err))
  return response;
}