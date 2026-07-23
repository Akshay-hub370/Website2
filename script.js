document.addEventListener("DOMContentLoaded", function(){

    /* ==========================
       STICKY HEADER
    ========================== */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", function(){

        if(window.scrollY > 50){
            header.classList.add("sticky");
        }else{
            header.classList.remove("sticky");
        }

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const currentPage =
    window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar a")
    .forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")===currentPage){
            link.classList.add("active");
        }

    });

    /* ==========================
       SCROLL ANIMATION
    ========================== */

    const sections =
    document.querySelectorAll("section");

    const observer =
    new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{
        threshold:0.15
    });

    sections.forEach(section=>{

        section.style.opacity="0";
        section.style.transform="translateY(40px)";
        section.style.transition="all 0.8s ease";

        observer.observe(section);

    });

    /* ==========================
       PRODUCT FILTER
    ========================== */

    const filterButtons =
    document.querySelectorAll(".filter-btn");

    const cards =
    document.querySelectorAll(".product-card");

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            filterButtons.forEach(btn=>{
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter =
            button.dataset.filter;

            cards.forEach(card=>{

                if(
                    filter==="all" ||
                    card.classList.contains(filter)
                ){
                    card.style.display="block";
                }else{
                    card.style.display="none";
                }

            });

        });

    });

    /* ==========================
       PRODUCT CARD HOVER
    ========================== */

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform =
            "translateY(-10px)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform =
            "translateY(0px)";

        });

    });

    /* ==========================
       CONTACT FORM
    ========================== */

    const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const email =
        form.querySelector('input[type="email"]').value;

        const phone =
        form.querySelector('input[type="tel"]').value;

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const phonePattern =
        /^[0-9]{10}$/;

        if(!emailPattern.test(email)){
            alert("Please enter a valid email.");
            return;
        }

        if(!phonePattern.test(phone)){
            alert("Please enter a valid 10 digit phone number.");
            return;
        }

        const success =
        document.getElementById("success-message");

        success.innerHTML =
        "✓ Thank you! Your enquiry has been submitted successfully.";

        success.style.display = "block";

        form.reset();

    });

}
});
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if(menuToggle){

menuToggle.addEventListener("click", function(){

    navbar.classList.toggle("active");

});

}