const pic = document.querySelector('#curries');
const picModal = document.querySelector('.pic-modal');
const modalShow = document.querySelector('.modal-open');
const modalCloseBtn = document.querySelector('#close');

console.log(pic);


// Open modal
function openModal() {
    picModal.classList.add('modal-open')
}

// Close modal
function closeModal() {
    picModal.classList.remove('modal-open');
}

// Event Listeners

pic.addEventListener('click', openModal);

modalCloseBtn.addEventListener('click', closeModal)
