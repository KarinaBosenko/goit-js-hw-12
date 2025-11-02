import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.btn-load');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
    <li class="gallery-item">
    <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}"/>
    </a>
    <ul class="descr">
    <li class="descr-item">
    <h3>Likes</h3>
    <p>${image.likes}</p>
    </li>
    <li class="descr-item">
    <h3>Views</h3>
    <p>${image.views}</p>
    </li>
    <li class="descr-item">
    <h3>Comments </h3>
    <p>${image.comments}</p>
    </li>
    <li class="descr-item">
    <h3>Downloads </h3>
    <p>${image.downloads}</p>
    </li>
    </ul>
      </li>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  btnLoadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  btnLoadMore.classList.add('hidden');
}
