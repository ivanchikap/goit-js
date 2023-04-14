import searchPic from './service';
import { debounce } from 'lodash';

const search = searchPic.fetchPictures();

const form = document.forms['form'];
const input = form.elements['input'];
const gallery = document.querySelector('#gallery .row');

input.addEventListener('input', debounce(inputHandler, 1000));

function inputHandler(e) {
  const inputValue = e.target.value;

  searchPic.searchQuery = inputValue;

  const res = searchPic.fetchPictures();

  searchPic.fetchPictures().then((pictures) => {
    let markup = '';
    pictures.forEach((picture) => {
      const imgMarkup = generetaPictureTemplate(picture);
      markup += imgMarkup;
    });


    gallery.insertAdjacentHTML('afterbegin', markup);
  });
}


function generetaPictureTemplate(img) {
  console.log(img);
  return `
        <div class="col-6">
          <article class="article">
            <div class="article__img">
              <img src="${img.largeImageURL}" alt="${img.tags}">
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
  `  
}
