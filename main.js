let btnMenu = document.getElementById('btn-menu');
let closeMenu = document.getElementById('closeMenu')
let dropdownContent = document.getElementById('dropdown-content');

btnMenu.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownContent.style.display = 'flex';
    document.body.style.position = 'fixed';
})

closeMenu.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownContent.style.display = 'none';
    document.body.style.position = 'relative';
})


let darkerBackground = document.querySelectorAll('.darker-background');
darkerBackground.forEach((element) => {
    element.addEventListener('click', (event) => {
        if (event.target.classList.contains('selected')) {
            event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            event.target.classList.remove('selected');
            event.target.parentNode.style.height = '30vh';
        } else {
            event.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            event.target.classList.add('selected');
            event.target.parentNode.style.height = '60vh';
        }
    })
});




