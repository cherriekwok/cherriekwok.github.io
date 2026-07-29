/* ==========================================
   PAGE FLASH ANIMATION
========================================== */

window.addEventListener("load", () => {

    const flash = document.getElementById("flash");

    if (flash) {
        flash.classList.add("flash");
    }

});


/* ==========================================
   MOBILE MENU
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const button =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector("nav");

    if(button && nav){

        button.addEventListener("click", () => {
            nav.classList.toggle("open");
        });

    }

});


/* ==========================================
   OPTIONAL PAGE TRANSITIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const links =
        document.querySelectorAll("a");

    links.forEach(link => {

        const href =
            link.getAttribute("href");

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto") ||
            href.startsWith("http")
        ){
            return;
        }

        link.addEventListener("click", e => {

            e.preventDefault();

            const flash =
                document.getElementById("flash");

            if(flash){

                flash.style.opacity = ".85";

                setTimeout(() => {
                    window.location = href;
                }, 250);

            }else{

                window.location = href;

            }

        });

    });

});
```
