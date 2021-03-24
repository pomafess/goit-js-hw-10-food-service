// import '../styles.css';
import menu from '../menu.json';
import itemsTemplate from '../templates/card.hbs';

const menuRef = document.querySelector('ul.js-menu');

const markup = itemsTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);
