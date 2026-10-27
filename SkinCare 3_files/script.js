// ===============================
// SHOP NOW BUTTON
// ===============================

const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });
});

// ===============================
// ADD TO CART
// ===============================

let cartCount = 0;

const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        alert("Product Added To Cart");

        const cartCounter = document.getElementById("cart-count");

        if(cartCounter){
            cartCounter.textContent = cartCount;
        }

    });

});

// ===============================
// FAVORITE BUTTON
// ===============================

const favButtons = document.querySelectorAll(".fav-btn");

favButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        button.classList.toggle("active");

        if(button.classList.contains("active")){

            button.style.background="#D9778C";
            button.style.color="white";

        }else{

            button.style.background="#FFE5EC";
            button.style.color="#D9778C";

        }

    });

});

// ===============================
// SEARCH
// ===============================

const searchInput=document.getElementById("searchInput");

const cards=document.querySelectorAll(".card");

searchInput.addEventListener("keyup",()=>{

    let value=searchInput.value.toLowerCase();

    cards.forEach(card=>{

        let title=card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});

// ===============================
// NEWSLETTER
// ===============================

const subscribeBtn=document.getElementById("subscribeBtn");

subscribeBtn.addEventListener("click",()=>{

    alert("Thank you for subscribing!");

});

// ===============================
// CONTACT FORM
// ===============================

const contactForm=document.getElementById("contactForm");

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Your Message Has Been Sent Successfully");

    contactForm.reset();

});

// ===============================
// BACK TO TOP
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// DARK MODE
// ===============================

const darkBtn=document.getElementById("darkMode");

if(darkBtn){

    darkBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

    });

}

// ===============================
// SCROLL ANIMATION
// ===============================

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="1s";

    observer.observe(section);

});