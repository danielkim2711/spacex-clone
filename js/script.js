const btn = document.getElementById('menu-btn');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
}
