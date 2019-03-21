import renderToDOM from './render-to-dom.js';
import makeMessage from './make-message.js'

const waitTime = new Promise((todoOK, todoMal)=>{
  setTimeout(()=>{
    todoOK('han pasado 3 segundos omg');
  }, 3000)
})

export var messages = {
  firstMessage: 'hola mundo desde un modulo',
  delayedMessage: async () => {
    const message = await waitTime;
    console.log(message);
    // const element = document.createElement('p');
    // element.textContent = message;
    renderToDOM(makeMessage(message));
  },
}
