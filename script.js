const API_KEY = '3dd4d746bbde9386de21e9d7bcd788b2';
const DOMAIN = 'https://api.themoviedb.org/3';
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original';

const button = document.querySelector('button');
const input = document.querySelector('input');
const section = document.querySelector('section');

const renderList = (movies) => {
  movies.forEach((movie) => {
    let myDiv = document.createElement('div');
    myDiv.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path} />`;
    let myH2 = document.createElement('h2');
    myH2.innerText = movie.original_title;

    section.appendChild(myDiv);
    section.appendChild(myH2);
  });
};

const makeCall = async () => {
  let movie = input.value;
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=3dd4d746bbde9386de21e9d7bcd788b2`
  );

  renderList(response.data.results);
  input.value = '';
};

button.addEventListener('click', makeCall);
