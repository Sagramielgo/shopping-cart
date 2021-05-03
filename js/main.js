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
