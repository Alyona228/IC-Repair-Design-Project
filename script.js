const arrowLeft = document.querySelector('.page2__arrow')
console.log(arrowLeft);

arrowLeft.addEventListener('mousedown', e => {

  const img = document.querySelector('.page2__images')
  if (img.style.backgroundImage == 'url("./images/image2.2.jpg")') {
    img.style.backgroundImage = 'url(./images/image3.jpg)'
  } else {
    if (img.style.backgroundImage == 'url("./images/image3.jpg")') {
      img.style.backgroundImage = 'url(./images/image2.1.jpg)'
    } else {
      img.style.backgroundImage = 'url(./images/image2.2.jpg)'
    }
  }
  console.log(img.style.backgroundImage)


})
const arrowRight = document.querySelector('.page2__arrow--rigth')
console.log(arrowRight);

arrowRight.addEventListener('mousedown', e => {

  const img = document.querySelector('.page2__images')
  if (img.style.backgroundImage == 'url("./images/image2.2.jpg")') {
    img.style.backgroundImage = 'url(./images/image2.1.jpg)'
  } else {
    if (img.style.backgroundImage == 'url("./images/image3.jpg")') {
      img.style.backgroundImage = 'url(./images/image2.2.jpg)'
    } else {
      img.style.backgroundImage = 'url(./images/image3.jpg)'
    }
  }
  console.log(img.style.backgroundImage)


})