// toggle icon navbar
let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onclick = () => {
    menuIcon.classList.toggle(`bx-x`);
    navbar.classList.toggle(`active`);
}

let sections = document.querySelectorAll(`section`);
let navlinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);

        if(top >= offset && top < offset + height)
        {
            // active navbar links
            navlinks.forEach(links=> {
                links.classList.remove(`active`);
                document.querySelector(`header nav a[href*="${id}"]`).classList.add(`active`);
            })
            // active sessions for animation on scroll 
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeat on scroll use this 
        else {
            sec.classList.remove('show-animate');

        }
    });
    let header = document.querySelector(`.header`);

    header.classList.toggle(`sticky`, window.scrollY > 100);

    // REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINKS(SCROLL) 
    menuIcon.classList.remove(`bx-x`);
    navbar.classList.remove(`active`);

    // animation footer on scroll 
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight );
}
