const navSlide = () => {

    const Menu = document.querySelector('.wrapper-menu');
    const nav = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar-list li');
    const buttonforTop = document.querySelector('.moveToTop');

    buttonforTop.style.visibility = "hidden";

    Menu.addEventListener('click', () => {
        Menu.classList.toggle('open');
        nav.classList.toggle('sidebar-active');
        buttonforTop.style.visibility = "hidden";

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    buttonforTop.style.visibility = "visible";
                    buttonforTop.style.animation = `fadeIn 1s`;
                } else {
                    buttonforTop.style.animation = '';
                    buttonforTop.style.visibility = "hidden";
                }
            } else {
                link.style.animation = `navLinkFade 0.5s ease-in forwards ${index/11 + 0.15}s`;
            }
        });
    })
    
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            buttonforTop.style.visibility = "visible";
            buttonforTop.style.animation = `fadeIn 1s`;
        } else {
            buttonforTop.style.animation = '';
            buttonforTop.style.visibility = "hidden";
        }
    };
}

const app = () => {
    navSlide();
}

app();
