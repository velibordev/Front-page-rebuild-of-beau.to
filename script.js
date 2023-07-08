let hamburger = document.querySelector('.hamburger')
let header_links = document.querySelector('.header_links')
hamburger.addEventListener('click', () => {
   hamburger.classList.toggle('active')
   header_links.classList.toggle('active')
}) 