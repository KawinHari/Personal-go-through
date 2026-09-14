const dialog = document.querySelector('.lightbox');
const dialogImage = dialog.querySelector('img');
const dialogCaption = dialog.querySelector('p');

document.querySelectorAll('.polaroid, .simple-photo').forEach((card) => {
  card.addEventListener('click', () => {
    const image = card.querySelector('img');
    // When you replace a placeholder image, the lightbox automatically uses it too.
    dialogImage.src = image.src;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = card.dataset.caption || '';
    dialog.showModal();
  });
});

document.querySelector('.close-lightbox').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
