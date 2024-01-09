const imgContainer = document.querySelector('.img-container');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let x = 0;
let timer;
next.addEventListener('click', () => {
    x = x - 45;
    clearTimeout(timer);
    udateImg();
})
prev.addEventListener('click', () => {
    x = x + 45;
    clearTimeout(timer);
    udateImg();
})
function udateImg() {
    imgContainer.style.transform = ` perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x + 45;
        udateImg()
    }, 3000)
}
udateImg();