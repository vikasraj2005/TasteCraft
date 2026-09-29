 const toggler = document.getElementById("toggler");
    const navLinks = document.getElementById("nav-links");
// open menu
    toggler.addEventListener("click", ()=> {
        toggler.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // close menu
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click",() => {
             toggler.classList.remove("active");
        navLinks.classList.remove("active");
        });

    });

    // scroll 

    const scroll = document.getElementById("navbar");

    window.addEventListener("scroll", ()=> {
        if(window.scrollY > 40){
            scroll.classList.add("scroll");
        }
        else{
            scroll.classList.remove("scroll");
        }
    });



    // news letter form

    const news = document.getElementById("newsletterForm");

    news.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank You For Subscribing TasteCraft");
        news.reset()
    })

