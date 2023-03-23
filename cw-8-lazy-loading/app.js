// 1. variant 1/ Создали один IntersectionObserver на все картинки


const images = document.querySelectorAll('.feed img');
options = {
  rootMargin: '100px',
};

function onEntry(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {     
      const image = entry.target;
      image.src = image.dataset.lazy;
      image.classList.add('appear');
      observer.unobserve(image);
    }
  });
}

const io = new IntersectionObserver(onEntry, options);

images.forEach((image) => {
  io.observe(image);
});


// 2. variant 2. Можна зробить на кожне зображення окремий IntersectionObserver

// const images = document.querySelectorAll('.feed img');


// const lazyLoad = target => {

//   options = {
//     rootMargin: '100px',
//   };

//   const io = new IntersectionObserver((entries, observer) => {
//        entries.forEach((entry) => {
//           if (entry.isIntersecting) {           
//             const image = entry.target;
//             image.src = image.dataset.lazy;
//             image.classList.add('appear');
//             observer.disconnect();
//           }
//         });        
//   }, options);
//   io.observe(target);
// };

// images.forEach((image) => lazyLoad(image));