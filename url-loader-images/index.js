import './estilos.css';
import {messages} from './message.js';
import platziImg from './platzi.jpg';

document.write(messages.firstMessage);
messages.delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);
// console.log('hola mundo desde webpack');
console.log('hola desde webpack, en un webpack.config');
