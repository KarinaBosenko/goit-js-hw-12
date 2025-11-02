import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

let text = '';
let page = 1;
const perPage = 15;

const form = document.querySelector('.form');
const searchText = document.querySelector('[name="search-text"]');
const btnLoadMore = document.querySelector('.btn-load');

form.addEventListener('submit', searchImage);
btnLoadMore.addEventListener('click', onLoadMore);

async function searchImage(event) {
  event.preventDefault();
  page = 1;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  text = searchText.value.trim();

  if (!text) {
    iziToast.warning({
      message: 'Enter a search word!',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  try {
    const data = await getImagesByQuery(text, page);
    if (data.hits.length <= 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    createGallery(data.hits);

    const maxPage = Math.ceil(data.totalHits / perPage);

    if (page < maxPage) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Oops! Something went wrong. Try again later.',
      position: 'topRight',
    });
  } finally {
    form.reset();
    hideLoader();
  }
}

async function onLoadMore() {
  page++;
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(text, page);
    createGallery(data.hits);
    const maxPage = Math.ceil(data.totalHits / perPage);
    if (page >= maxPage) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
    const galleryItem = document.querySelector('.gallery-item');
    const info = galleryItem.getBoundingClientRect();
    const height = info.height;
    window.scrollBy({
      top: height * 2,
      left: 0,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Oops! Something went wrong. Try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
