AOS.init({
  duration: 1000,
  once: true
});

window.addEventListener('load', () => {
  const loader = document.querySelector('.loading-screen');
  setTimeout(() => loader.style.opacity = '0', 1000);
  setTimeout(() => loader.style.display = 'none', 2000);
});