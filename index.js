const page = document.querySelector('.page');
const buttons = [...document.querySelectorAll('.btn')];
const modal = document.createElement('section');
modal.classList.add('modal');

modal.addEventListener('click', () => {
  setTimeout(() => {
    page.removeChild(modal);
  }, 200);
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button);
    page.append(modal);
  });
})

console.log(buttons);