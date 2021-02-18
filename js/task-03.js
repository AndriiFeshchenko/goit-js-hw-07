const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//use insertAdjacentHTML
const galleryRef = document.querySelector('#gallery');

const template = images.reduce((item, { url, alt }) => {
  const image = `<img src="${url}" alt="${alt}" class="gallery__image">`;
  item += `<li class="gallery__card">${image}</li>`;
  return item;
}, '');

galleryRef.insertAdjacentHTML('afterbegin', template);

//use createElement and append
// const galleryRef = document.querySelector('#gallery');

// const createGalleryCard = ({ url, alt }) => {
//   const imgTagObj = document.createElement('img');
//   [imgTagObj.src, imgTagObj.alt] = [url, alt];
//   imgTagObj.classList.add('gallery__image');

//   const liTagObj = document.createElement('li');
//   liTagObj.classList.add('gallery__card');

//   liTagObj.appendChild(imgTagObj);
//   return liTagObj;
// };
// const template = images.map(createGalleryCard);
// galleryRef.append(...template);