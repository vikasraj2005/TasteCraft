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


// menu filter

  const filterButtons = document.querySelectorAll(".filter-btn");

        const menuCards = document.querySelectorAll(".card");


        filterButtons.forEach(button => {

            button.addEventListener("click", () => {

                filterButtons.forEach(btn => {

                    btn.classList.remove("active");

                });

                button.classList.add("active");


                const filter = button.dataset.filter;


                menuCards.forEach(card => {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.classList.remove("hide");

                    } else {

                        card.classList.add("hide");

                    }

                });

            });

        });

// order button


document.querySelectorAll(".order-btn").forEach(button => {

    button.addEventListener("click", () => {
        alert("Thank you! Please contact TasteCraft to place your order.");
    });
   
});












    // news letter form

    const news = document.getElementById("newsletterForm");

    news.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank You For Subscribing TasteCraft");
        news.reset()
    })

