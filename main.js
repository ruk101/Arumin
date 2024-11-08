// Get elements
const getInTouchButton = document.querySelector('a[href="#"]');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

// Show modal when button is clicked
getInTouchButton.addEventListener('click', (event) => {
  event.preventDefault();
  contactModal.classList.remove('hidden');
});

// Hide modal when close button is clicked
closeModal.addEventListener('click', () => {
  contactModal.classList.add('hidden');
});

// Hide modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    contactModal.classList.add('hidden');
  }
});
