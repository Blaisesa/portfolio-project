document.querySelectorAll('.open-popup').forEach(btn => {
  btn.addEventListener('click', () => {
    const popupId = btn.getAttribute('data-popup');
    document.getElementById(popupId).style.display = 'flex';
  });
});

document.querySelectorAll('.close-popup').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.popup-overlay').style.display = 'none';
  });
});

window.addEventListener('click', e => {
  if (e.target.classList.contains('popup-overlay')) {
    e.target.style.display = 'none';
  }
});

