const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const progress = document.querySelector('.front-bar');
const steps = document.querySelectorAll('.steps');
const solid = document.querySelectorAll('.fa-solid');

let currentChecked = 1;
next.addEventListener('click', () => {
    currentChecked++;
    if (currentChecked > steps.length) {
        currentChecked = steps.length;
    }
    updateStep()
})

prev.addEventListener('click', () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateStep();
})

function updateStep() {
    steps.forEach((step, index) => {
        if (index < currentChecked) {
            step.classList.add('check');
            step.innerHTML = `
            <i class="fa-sharp fa-solid fa-check"></i>
             <small>${index == 0 ? 'start' : index === steps.length - 1 ? 'final' : 'step' + index}</small>
            `
        } else {
            step.classList.remove('check');
            step.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        }

    })
    const checkNumbr = document.querySelectorAll('.check');
    progress.style.width = ((checkNumbr.length - 1) / (steps.length - 1)) * 100 + "%";

}
