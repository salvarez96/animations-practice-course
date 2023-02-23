const page = document.querySelector('.page');
const buttons = [...document.querySelectorAll('.btn')];

const modalButton = document.createElement('button');
modalButton.type = 'button';
modalButton.textContent = 'Lo quiero!';

const modalContent = document.createElement('div');
modalContent.classList.add('modal__content');

modalContent.innerHTML = `
  <img class="close-modal" onclick="removeModal()" src="/public/icons8-macos-close-32.png" alt="close modal icon" />
  <input type="radio" name="figure-selection" id="radio-1">
  <input type="radio" name="figure-selection" id="radio-2">
  <input type="radio" name="figure-selection" id="radio-3">
  <div class="cards">
    <label class="card" for="radio-1" id="card-1">
      <img src="/public/spiderman.png" alt="Spiderman" />
    </label>
    <label class="card" for="radio-2" id="card-2">
      <img src="/public/robin.png" alt="Robin" />
    </label>
    <label class="card" for="radio-3" id="card-3">
      <img src="/public/batman.png" alt="Batman" />
    </label>
  </div>
`
modalContent.appendChild(modalButton);

modalContent.addEventListener('click', e => {
  e.stopPropagation();
});

function removeModal() {
  setTimeout(() => {
    page.removeChild(modal);
  }, 200);
}

const modal = document.createElement('section');
modal.classList.add('modal');
modal.appendChild(modalContent);

modal.addEventListener('click', removeModal);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    page.append(modal);
    modalContent.focus();
  });
});
