document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        console.log('Checkbox state changed:', checkbox.checked);
    });
});
