// Change the text content dynamically
const statusText = document.getElementById('status-text');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', () => {
  statusText.textContent = 'Status updated: You clicked the button!';
  statusText.style.color = '#006600'; // Changes CSS via JavaScript
});

// Add and remove elements dynamically
const boxContainer = document.getElementById('box-container');
const addBoxBtn = document.getElementById('add-box-btn');
const removeBoxBtn = document.getElementById('remove-box-btn');

addBoxBtn.addEventListener('click', () => {
  const newBox = document.createElement('div');
  newBox.classList.add('box');
  boxContainer.appendChild(newBox);
});

removeBoxBtn.addEventListener('click', () => {
  const lastBox = boxContainer.lastElementChild;
  if (lastBox) {
    lastBox.remove();
  }
});
