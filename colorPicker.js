// take elements from DOM HTML in JavaScript


const colorPicker = document.getElementById('colorPicker');
const displayColor = document.getElementById('colorDisplay');


colorPicker.addEventListener('input', function() {
    displayColor.style.backgroundColor = colorPicker.value;
})