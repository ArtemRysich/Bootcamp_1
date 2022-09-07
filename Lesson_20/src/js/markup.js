export function createMarkup(arr) {
  const markup = arr.reduce((acc, {
    name,
    gender,
    race
  }) => acc + `  <li>
    <h2>Name: ${name}</h2>
    <p>Race: ${race}</p>
    <p>Gender: ${gender}</p>
  </li>`, '');
  return markup;
}