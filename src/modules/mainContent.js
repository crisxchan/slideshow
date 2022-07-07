function loadImage() {
  const imagesWrapper = document.createElement('ul');
  imagesWrapper.classList.add('image-wrapper');

  for (let i = 0; i < 3; i += 1) {
    const imgFrame = document.createElement('li');
    imgFrame.classList.add('image-frame');
    imgFrame.dataset.id = i + 1;
    if (i === 1) imgFrame.dataset.active = true;
    else imgFrame.dataset.active = false;

    const img = document.createElement('div');
    img.innerHTML = i + 1;

    imgFrame.append(img);

    imagesWrapper.append(imgFrame);
  }

  return imagesWrapper;
}

function imgSlide(direction) {
  const offset = (direction === 'left') ? -1 : 1;

  const imgWrapper = document.querySelector('.image-wrapper');
  const activeImage = document.querySelector('[data-active=true]');
  let newImageIndex = [...imgWrapper.children].indexOf(activeImage) + offset;
  let leftSiblingIndex = newImageIndex - 1;
  let rightSiblingIndex = newImageIndex + 1;

  if (rightSiblingIndex >= [...imgWrapper.children].length) rightSiblingIndex = 0;
  if (rightSiblingIndex < 0) rightSiblingIndex = [...imgWrapper.children].length - 1;

  if (leftSiblingIndex >= [...imgWrapper.children].length) leftSiblingIndex = 0;
  if (leftSiblingIndex < 0) leftSiblingIndex = [...imgWrapper.children].length - 1;

  if (newImageIndex >= [...imgWrapper.children].length) {
    newImageIndex = 0;
    leftSiblingIndex = [...imgWrapper.children].length - 1;
    rightSiblingIndex = 1;
  }
  if (newImageIndex < 0) {
    newImageIndex = [...imgWrapper.children].length - 1;
    leftSiblingIndex = 0;
    rightSiblingIndex = 1;
  }

  // set center
  [...imgWrapper.children][newImageIndex].dataset.active = true;
  [...imgWrapper.children][newImageIndex].style.gridArea = 'center';

  // set sides
  activeImage.dataset.active = false;
  [...imgWrapper.children][leftSiblingIndex].style.gridArea = 'left';
  [...imgWrapper.children][rightSiblingIndex].style.gridArea = 'right';
}

function loadButton(side) {
  const btn = document.createElement('button');
  btn.classList.add(side);

  btn.innerHTML = side === 'left' ? '&#8592' : '&#8594';

  btn.addEventListener('click', imgSlide.bind(this, side));
  return btn;
}

function loadMainContent() {
  const carouselWrapper = document.createElement('div');

  const leftBtn = loadButton('left');

  const images = loadImage();

  const rightBtn = loadButton('right');

  carouselWrapper.append(leftBtn, images, rightBtn);

  return carouselWrapper;
}

export default function getMainContent() {
  const main = document.createElement('main');

  main.appendChild(loadMainContent());

  return main;
}
