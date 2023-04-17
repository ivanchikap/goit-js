import searchPic from './service';
import { debounce } from 'lodash';
import {
  alert,
  notice,
  info,
  success,
  error,
  defaultModules,
  defaults,
} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

defaultModules.set(PNotifyMobile, {});
defaults.tags = null;
defaults.maxTextHeight = null;
defaults.delay = 6000;
defaults.remove = true;
defaults.destroy = true;

function throwAlert(titleC = 'Default title', typeC = 'Error', hitCounts = 0) {
  alert({
    title: titleC,
    text: `There are ${hitCounts} totalHits in the response! I render 12 ones`,
    type: typeC,
  });
}

const form = document.forms['form'];
const input = form.elements['input'];
const gallery = document.querySelector('#gallery .row');
const loadMore = document.querySelector('.btn--fixed');
let globalInputValue = '';


input.addEventListener('input', debounce(inputHandler, 1000));
loadMore.addEventListener('click', loadMoreHandler);
gallery.addEventListener('click', galleryHandler);

function galleryHandler(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
        <h3>This is th ebig version of your img</h3>
        <div class="modal__img">
          <img src="${e.target.dataset.bigimg}" alt="${e.target.alt}">
        </div>       
    </div>
  `)

  instance.show()
}

function loadMoreHandler(e) {
  e.preventDefault();
  searchPic.searchQuery = globalInputValue;
  searchPic.fetchPictures().then((pictures) => {
    console.log(pictures);
    if (!pictures.totalHits) {
      throwAlert('There are no pictures', 'error', pictures.totalHits);
      return;
    }
    if (!pictures.hits.length) {
      throwAlert('The end', 'info', pictures.totalHits);
      return;
    }
    throwAlert('Success request', 'success', pictures.totalHits);
    insertMarkup(pictures.hits);

    const element = gallery.querySelector('.col-6:last-child');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  });
}

function inputHandler(e) {
  const inputValue = e.target.value;
  globalInputValue = inputValue;
  searchPic.searchQuery = inputValue;

  clearContainer();

  searchPic.fetchPictures().then((pictures) => {
    if (!pictures.totalHits) {
      throwAlert('There are no pictures', 'error', pictures.totalHits);
      return;
    }
    throwAlert('Success request', 'success', pictures.totalHits);
    insertMarkup(pictures.hits);
  });
}

function insertMarkup(images) {
  let markup = '';
  images.forEach((picture) => {
    const imgMarkup = generetaPictureTemplate(picture);
    markup += imgMarkup;
  });

  gallery.insertAdjacentHTML('beforeend', markup);
}

function generetaPictureTemplate(img) {
  return `
        <div class="col-6">
          <article class="article">
            <div class="article__img">
              <img src="${img.previewURL}" alt="${img.tags}" data-bigimg="${img.largeImageURL}">
            </div>
            <div class="article__about">
              <div class="article__about-item">
                <i class="material-icons">thumb_up</i>
                <span>${img.likes}</span>
              </div>
              <div class="article__about-item">
                <i class="material-icons">visibility</i>
                <span>${img.views}</span>
              </div>
              <div class="article__about-item">
                <i class="material-icons">comment</i>
                <span>${img.comments}</span>
              </div>
              <div class="article__about-item">
                <i class="material-icons">cloud_download</i>
                <span>${img.downloads}</span>
              </div>
            </div>
          </article>
        </div>
  `;
}

function clearContainer() {
  gallery.innerHTML = '';
}
