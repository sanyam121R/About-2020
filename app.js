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

const imgSlideShow = () => {
    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    var manualNav = function(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');

            btns.forEach((btn) => {
                btn.classList.remove('active');
            });
        });

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    });
}


const app = () => {
    navSlide();
    imgSlideShow();
}

app();
