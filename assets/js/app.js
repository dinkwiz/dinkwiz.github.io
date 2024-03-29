const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav li');



    burger.addEventListener('click', () => {
            //toggle nav
        nav.classList.toggle('nav-active');

            //Animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navFade 0.5s easy forwards ${index / 7 + 1.5}s`;
        }
        });
        //Burger animation
        burger.classList.toggle('toggle');

    });

}

navSlide();
