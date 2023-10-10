import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);
// description: "Hokkaido Flower"
// original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg"
// preview: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg"

const list = document.querySelector('.gallery');
const markup = galleryItems.map(({ description, original, preview }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`).join('');

list.insertAdjacentHTML('afterbegin', markup);

list.addEventListener('click', handelrClick);

let instance = null;

function handelrClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') rerturn;
  const altDescription = evt.target.alt;
        // console.log(altDescription);
        const srcLargeImage = evt.target.dataset.source;
        // console.log(largeImage)
  instance = basicLightbox.create(`
            <div class="modal">
                <img src="${srcLargeImage}" alt="${altDescription}" width="600">
            </div>
`);
  instance.show();
  document.addEventListener('keydown', onEscClose)
}

function onEscClose (event) {
  if (event.code !== "Escape") return;
              instance.close();
              document.removeEventListener("keydown", onEscClose);        
            
      }


// const linkEl = document.querySelectorAll('.gallery__link');

// linkEl.forEach(element => {
//     element.addEventListener('click', handlerClick);
    
//     function handlerClick(evt) {
//         evt.preventDefault();
//         // console.dir(evt);
//         const altDescription = evt.target.alt;
//         // console.log(altDescription);
//         const srcLargeImage = evt.target.dataset.source;
//         // console.log(largeImage)
//         const instance = basicLightbox.create(`
//             <div class="modal">
//                 <img src="${srcLargeImage}" alt="${altDescription}" width="600">
//             </div>
//         `);

//         instance.show();

//       document.addEventListener("keydown", onEscClose);
      
//       function onEscClose (event) {
//             if (event.key === "Escape") {
//               instance.close();
//               document.removeEventListener("keydown", onEscClose);
              
//             };
//       }

//     };
// });



