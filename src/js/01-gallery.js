import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const createMarkupGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
`
  )
  .join('');
galleryContainer.insertAdjacentHTML('afterbegin', createMarkupGallery);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
