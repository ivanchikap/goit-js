import * as basiclightbox from 'basiclightbox';

const openModalBtnRef = document.getElementById('modalOpen')
const modalTemplate  = document.querySelector('#modal');

const lbInstance = basiclightbox.create(modalTemplate);



openModalBtnRef.addEventListener('click' , () => {
  lbInstance.show();
})