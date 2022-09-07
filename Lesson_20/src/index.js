import {
  lordApi
} from './js/fetchLord';
import {
  createMarkup
} from './js/markup'

const list = document.querySelector('.js-list');
const guard = document.querySelector('.js-guard');
const options = {
  root: null,
  rootMargin: '300px',
  treshold: 1
}
const observer = new IntersectionObserver(handlerLoadMore, options);
// const loadMore = document.querySelector('.js-load');
// loadMore.addEventListener('click', handlerLoadMore);
let page = 1;



lordApi().then(resp => {
  list.insertAdjacentHTML('beforeend', createMarkup(resp.docs));
  observer.observe(guard);
//   loadMore.setAttribute('hidden', false);
})


// function handlerLoadMore(evt) {
//   page += 1;
//   lordApi(page).then(resp => {
//     list.insertAdjacentHTML('beforeend', createMarkup(resp.docs));
//     if (resp.page === resp.pages) {
//       loadMore.setAttribute('hidden', true);
//       alert('End of search');
//     }
//   })
// }

function handlerLoadMore(entries){
    console.log(entries);
    const entry = entries[0];
    if(entry.isIntersecting){
        page +=1;
        lordApi(page).then(resp =>{
            list.insertAdjacentHTML('beforeend', createMarkup(resp.docs));
            if(resp.page === resp.pages){
                observer.unobserve(guard);
                alert('End of search');
            }
        })
    }
}