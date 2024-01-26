// Carga
window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector('.loop').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000); // Ajusta el tiempo en milisegundos según sea necesario
});

// Toggle Navbar
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
