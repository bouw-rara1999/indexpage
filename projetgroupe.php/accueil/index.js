const header = document.querySelector('#nav');

window.addEventListener('scroll', () => {
  if (window.scrollY == 0) {
    header.style.backgroundColor = 'transparent';
    header.style.maxWidth = '1400px';
  } else {
    header.style.backgroundColor = 'white'; 
    
  }
});




















// const header = document.querySelector('#nav');

// window.addEventListener('scroll', () => {
//   if (window.scrollY == 0) {
//     header.style.backgroundColor = 'transparent';
    
//   } else {
//     header.style.backgroundColor = 'white'; header.style.maxWidth = '100%';
//      header.style.maxWidth = '100%';
//   }
// });




















