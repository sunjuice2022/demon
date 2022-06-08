
// 寻找class toggle
const menuToggle = document.querySelector('toggle')

// 寻找 class showcase
const showcase = document.querySelector('.showcase')


let num=0
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})
console.log('hello')