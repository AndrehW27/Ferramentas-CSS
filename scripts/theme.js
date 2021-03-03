const checkbox = document.getElementById('checkbox');
const theme = document.getElementById('theme');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    theme.classList.toggle('white')
})