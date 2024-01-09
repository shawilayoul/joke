const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const container = document.querySelector('.container');
const imgContainer = document.querySelector('.img-container');
const imgs = document.querySelectorAll('.imgSlide');

let currentImg = 1;
next.addEventListener('click', () => {
    currentImg++;
    updateImg();
})
prev.addEventListener('click', () => {
    currentImg--;
    updateImg();
})
updateImg();
function updateImg() {
    if (currentImg > imgs.length - 1) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgs.length - 1;
    }
    imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    setTimeout(() => {
        currentImg++;
        updateImg()
    }, 5000)
}