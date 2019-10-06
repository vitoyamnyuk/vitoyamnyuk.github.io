
const navbarSlide = () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar-nav');
    const NavLinks = document.querySelectorAll('.navbar-nav li');
    
    burger.addEventListener ('click', () => {

        nav.classList.toggle('navbar-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5} s`; 
            }
            
    });
    burger.classList.toggle('toggle');
    });
    
}

navbarSlide();