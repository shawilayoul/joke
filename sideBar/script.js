const sideBar = document.querySelector('.sideBar');
const nav = document.querySelector('nav');
const sign = document.querySelector('.open');
const closes = document.querySelector('.fa-xmark');
const model = document.querySelector('.model-container')

sideBar.addEventListener('click', () => {
    nav.classList.toggle('show-side')
})

sign.addEventListener('click', () => {
    model.classList.add('show');
})
closes.addEventListener('click', () => {
    model.classList.remove('show');

})
window.addEventListener('click', (e) => {
    if (e.target === model) {
        model.classList.remove('show');

    }
})