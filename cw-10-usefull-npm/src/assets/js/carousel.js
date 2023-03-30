import Siema from 'siema';

const siema = new Siema(
  {
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  }
);
const nextBtn = document.querySelector('.js-next');
const prevBtn = document.querySelector('.js-prev');

nextBtn.addEventListener('click', () => siema.next());
prevBtn.addEventListener('click', () => siema.prev());