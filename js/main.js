'use strict';

const cardsElement = document.querySelector('.js-cards');

function getProductHtmlCode(name, price, imageUrl) {
  let htmlCode = `<article class="card">`;
  htmlCode += `  <img src="${imageUrl}" class="card__img" alt="Camiseta de ${name}">`;
  htmlCode += `  <h3 class="card__title">${name}</h3>`;
  htmlCode += `  <p class="card__description">${price} €</p>`;
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

function paintProducts() {
  const product1 = getProductHtmlCode(
    'Unicorn',
    '12,00',
    './images/unicornio.jpg'
  );
  const product2 = getProductHtmlCode(
    'Fat Cat',
    '15,00',
    './images/fat-cat.jpg'
  );
  const product3 = getProductHtmlCode(
    'Stinky Dog',
    '13,00',
    './images/stinky-dog.png'
  );
  cardsElement.innerHTML = product1 + product2 + product3;
}

paintProducts();
