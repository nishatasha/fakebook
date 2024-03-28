// utils.js

// Function to toggle the display of the modal
function toggleModal(modalId) {
    const modal = document.querySelector(modalId);
    
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
}


export { toggleModal };
