const page = document.querySelector('.page');
const buttons = [...document.querySelectorAll('.btn')];

const modalButton = document.createElement('button');
modalButton.type = 'button';
modalButton.textContent = 'Lo quiero!';

const modalContent = document.createElement('div');
modalContent.classList.add('modal__content');
modalContent.appendChild(modalButton);

modalContent.addEventListener('click', e => {
  e.stopPropagation();
});

const modal = document.createElement('section');
modal.classList.add('modal');
modal.appendChild(modalContent);

modal.addEventListener('click', () => {
  setTimeout(() => {
    page.removeChild(modal);
  }, 200);
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button);
    page.append(modal);
    modalContent.focus();
  });
});

console.log(buttons);