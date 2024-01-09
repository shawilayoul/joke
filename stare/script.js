const emojContainer = document.querySelector('.emoj-container');
const starEl = document.querySelectorAll('.fa-star');
const face = document.querySelectorAll('.fa-regular');

const colors = ['red', 'yellow', 'blue', 'orange', 'green'];
starEl.forEach((star, index) => {
    star.addEventListener('click', () => {
        updateStar(index);
    })
})
updateStar(0);
function updateStar(index) {
    starEl.forEach((stars, dex) => {
        if (dex < index + 1) {
            stars.classList.add('active');
        } else if (dex > index) {
            stars.classList.remove('active');
        }
    });
    face.forEach((fa) => {
        fa.style.transform = `translateX(-${index * 48}px)`;
        fa.style.color = colors[index];
    })
}