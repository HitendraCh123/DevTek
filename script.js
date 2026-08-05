/*=========================================
PRELOADER (Optional)
=========================================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/*=========================================
STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


/*=========================================
MOBILE MENU
=========================================*/

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

});


document.querySelectorAll("nav ul li a").forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");

        navMenu.classList.remove("active");

    });

});


/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================
REVEAL ANIMATION
=========================================*/
const revealElements = document.querySelectorAll(".reveal");

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();



/*=========================================
HERO PARALLAX
=========================================*/

const hero = document.querySelector(".hero");

hero.addEventListener("mousemove",(e)=>{

    const cards=document.querySelectorAll(".card");

    let x=e.clientX/window.innerWidth;

    let y=e.clientY/window.innerHeight;

    cards.forEach((card,index)=>{

        let speed=(index+1)*8;

        card.style.transform=
        `translate(${x*speed}px,${y*speed}px)`;

    });

});


hero.addEventListener("mouseleave",()=>{

    document.querySelectorAll(".card").forEach(card=>{

        card.style.transform="translate(0,0)";

    });

});


/*=========================================
COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(".hero-stats h2");

let started=false;

window.addEventListener("scroll",()=>{

    const section=document.querySelector(".hero-stats");

    if(!section) return;

    const top=section.getBoundingClientRect().top;

    if(top<window.innerHeight-120 && !started){

        started=true;

        counters.forEach(counter=>{

            const original=counter.innerText;

            let number=parseFloat(original);

            let suffix="";

            if(original.includes("+")) suffix="+";
            if(original.includes("%")) suffix="%";
            if(original.toLowerCase().includes("x")) suffix="X";

            counter.innerText="0";

            let count=0;

            const speed=number/80;

            const update=()=>{

                count+=speed;

                if(count<number){

                    counter.innerText=Math.floor(count)+suffix;

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=original;

                }

            }

            update();

        });

    }

});


/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("current");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("current");

        }

    });

});


/*=========================================
FLOATING EFFECT
=========================================*/

document.querySelectorAll(".card").forEach((card,index)=>{

    card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-15px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500+(index*100),

            iterations:Infinity

        }

    );

});


/*=========================================
BUTTON RIPPLE
=========================================*/

document.querySelectorAll(".btn,.primary-btn,.secondary-btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});


/*=========================================
IMAGE ZOOM
=========================================*/

const heroImage=document.querySelector(".right img");

window.addEventListener("scroll",()=>{

    const value=window.scrollY*0.0005;

    heroImage.style.transform=`scale(${1+value})`;

});


/*=========================================
COUNTER ANIMATION
=========================================*/

const statCounters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter() {

    const stats = document.querySelector(".stats");

    if (!stats || counterStarted) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        statCounters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            function update() {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            }

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);

startCounter();


new Swiper(".testimonialSlider",{

    slidesPerView:3,

    spaceBetween:30,

    loop:true,

    autoplay:{

        delay:3000,

        disableOnInteraction:false,

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    breakpoints:{

        0:{

            slidesPerView:1

        },

        768:{

            slidesPerView:2

        },

        1024:{

            slidesPerView:3

        }

    }

});