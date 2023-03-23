const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const modal = document.querySelector('.js-lightbox');
const bigImgRef = document.querySelector('.lightbox__image');
let currentImgIndex = 0;

function renderGallery() {
  const galleryRef = document.querySelector('ul.js-gallery');
  let fragment = '';

  galleryItems.forEach((item, index) => {
    const li = generateImgTemplate(item, index);
    fragment += li;
  });

  galleryRef.insertAdjacentHTML('afterbegin', fragment);
}

function generateImgTemplate(
  {
    preview = 'images/zagl.jpg',
    original = 'images/zagl.jpg',
    description = 'some img',
  } = {},
  index = 0
) {
  return `
      <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          data-index="${index}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

function onImgClick(e) {
  e.preventDefault();
  const target = e.target;
  if (target.nodeName !== 'IMG') {
    console.log('Клік не на зображенні');
    return;
  }

  const imgIndex = target.dataset.index;
  const bigImgRefValue = target.dataset.source;
  openModal(imgIndex);
  bigImgRef.src = bigImgRefValue;
}

function openModal(index) {
  currentImgIndex = Number(index);
  modal.classList.add('is-open');
  document.removeEventListener('click', onImgClick);
  document.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModalOnEscape);
  document.addEventListener('keydown', changeImg);
}

function changeImg(e) {
  if (e.key === 'ArrowLeft') {
    if (currentImgIndex - 1 < 0) {
      return;
    }

    bigImgRef.src = galleryItems[currentImgIndex - 1].original;
    currentImgIndex -= 1;
  }

  if (e.key === 'ArrowRight') {
    if (currentImgIndex >= galleryItems.length - 1) {
      console.log('index bigger then array length');
      return;
    }
    bigImgRef.src = galleryItems[currentImgIndex + 1].original;
    currentImgIndex += 1;
  }
}

function closeModal(e) {
  const closeBtn = document.querySelector(
    'button[data-action="close-lightbox"]'
  );
  const overlay = document.querySelector('div.lightbox__overlay');

  if (e.target !== closeBtn && e.target !== overlay) {
    return;
  }

  modal.classList.remove('is-open');
  bigImgRef.src = '';
  document.removeEventListener('click', closeModal);
  document.addEventListener('click', onImgClick);
  document.removeEventListener('keydown', closeModalOnEscape);
  document.removeEventListener('keydown', changeImg);
}

function closeModalOnEscape(e) {
  if (e.code !== 'Escape') {
    return;
  }
  modal.classList.remove('is-open');
  bigImgRef.src = '';
  document.removeEventListener('click', closeModal);
  document.addEventListener('click', onImgClick);
}

document.addEventListener('DOMContentLoaded', renderGallery);
document.addEventListener('click', onImgClick);
