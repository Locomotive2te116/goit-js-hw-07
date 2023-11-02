import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const makeGallery = pictureInfo => { 
    const { preview, original, description } = pictureInfo;
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </li>
         `;
}
const arrayGallery = galleryItems.map(pictureInfo => {
    return makeGallery(pictureInfo);
});

galleryList.insertAdjacentHTML('beforeend', arrayGallery.join(''));



galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  let baseLBox = null;
  if (target.classList.contains("gallery__image")) {
    basicLightbox
      .create(
        `
          <img class='img-generate-big' width="1400" height="900" src="${target.getAttribute(
            "data-source"
          )}">
      `
      )
      .show();
    baseLBox = document.querySelector(".basicLightbox");
      }
  document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
      baseLBox.classList.remove("basicLightbox");
    }
  });
});