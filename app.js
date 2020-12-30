const navSlide = () => {

    const Menu = document.querySelector('.wrapper-menu');
    const nav = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar-list li');

    Menu.addEventListener('click', () => {
        Menu.classList.toggle('open');
        nav.classList.toggle('sidebar-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease-in forwards ${index/11 + 0.15}s`;
            }
        });
    })
}


const app = () => {
    navSlide();
}

app();
