const checkbox = document.getElementById('checkbox');
const gt1 = document.getElementById('gt1');
const theme = document.getElementById('theme');

checkbox.addEventListener('change', () => {
    gt1.classList.toggle('light')
    theme.classList.toggle('dark')
})