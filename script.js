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




// reservation form

 
 const dateInput =
            document.getElementById("date");

        const today =
            new Date().toISOString().split("T")[0];

        dateInput.min = today;

 const reservationForm =
            document.getElementById("ReservationForm");

        const success =
            document.getElementById("success");


        function setError(element, status) {

            const group =
                element.closest(".form-content");

            if (status) {

                group.classList.add("error");

            } else {

                group.classList.remove("error");

            }

        }


        reservationForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name");

                const email =
                    document.getElementById("email");

                const phone =
                    document.getElementById("phone");

                const guests =
                    document.getElementById("guests");

                const date =
                    document.getElementById("date");

                const time =
                    document.getElementById("time");


                let valid = true;


                /* NAME */

                if (name.value.trim().length < 3) {

                    setError(name, true);

                    valid = false;

                } else {

                    setError(name, false);

                }


                /* EMAIL */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email.value)) {

                    setError(email, true);

                    valid = false;

                } else {

                    setError(email, false);

                }


                /* PHONE */

                const phonePattern =
                    /^[6-9]\d{9}$/;


                if (!phonePattern.test(phone.value)) {

                    setError(phone, true);

                    valid = false;

                } else {

                    setError(phone, false);

                }


                /* GUESTS */

                if (!guests.value) {

                    setError(guests, true);

                    valid = false;

                } else {

                    setError(guests, false);

                }


                /* DATE */

                if (!date.value || date.value < today) {

                    setError(date, true);

                    valid = false;

                } else {

                    setError(date, false);

                }


                /* TIME */

                if (!time.value) {

                    setError(time, true);

                    valid = false;

                } else {

                    setError(time, false);

                }


                /* SUCCESS */

                if (valid) {

                    reservationForm.style.display =
                        "none";

                    success.classList.add("show");

                }

            }
        );



    













    // news letter form

    const news = document.getElementById("newsletterForm");

    news.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank You For Subscribing TasteCraft");
        news.reset()
    })

