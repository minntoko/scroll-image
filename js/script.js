const bg = document.querySelector('.header');
const height = document.documentElement.clientHeight;
window.addEventListener('scroll', () => {
  bg.style.transform = 'scale('+ (1.6 - window.pageYOffset * .6 / height)+')';
  bg.style.opacity = 1 - window.pageYOffset / height;
  console.log(height);
});