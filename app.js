gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const section1 = gsap.timeline()

section1
    .from(".content h1 > span:first-child",{x: "-100vw", opacity: 1, duration: 1})
    .from(".content h1 span:last-child",{x: "+100vw", opacity: 1, duration: 1},"<")
    .from(".content p",{rotate: "90deg", transformOrigin: "top left", opacity: 0, duration: 1})
    .from(".content img",{y: "100vh", opacity: 1, duration: 1})

    const section2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section2",
            start: "top 10% ",
            //markers: true,
            toggleActions: "play none none reverse"         
        }
    })

    section2 
        .from(".section2 h2 > span:first-child", {y: "-100vh", opacity: 1, duration: .5})
        .from(".section2 h2 > span:last-child", {y: "-100vh", opacity: 1, duration: .5})
        .from(".section2 p",{ rotateY: "90deg", opacity: 0, duration: 1})

const hsection = gsap.timeline({
    scrollTrigger:{
        trigger: ".horizontal-sections",
       // markers: true,
        start: "top",
        end: "bottom",
        scrub: true,
        pin: true
    }
})

hsection
    .to(".horizontal-sections",{xPercent: -35, opacity: 1, duration: 1})

//section 3
const section3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section3",
        //markers: true,
        start:"top top",
        toggleActions: "play none none reverse"
    }
})

section3
    .from(".section3 h2",{scale: "10", opacity: 0, duration: 1})
    .from(".section3 p span",{y: "100vh", opacity: 0, stagger: .2, duration: 1})
    .to(".section3 p span",{ backgroundColor: "white", color: "black", duration: 1},"<")

//section 4
const section4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section4",
        start: "bottom 50%",
        //markers: true
        toggleActions: "play none none reverse"
    }
})

section4
    .from(".section4 .portfolio-item",{x: "100vw", stagger: .3, duration: 1})

// section 5
let letters = document.querySelector(".section5  h2").textContent
letters = letters.split("")
let title = document.querySelector(".section5 h2")
title.innerHTML = ""
letters.forEach(element => {
    let letter = document.createElement("span")
    if(element == " "){
        letter.classList.add("space")
    }
    else{
        letter.textContent = `${element}`
    }
    title.append(letter)
});

const section5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section5",
        //markers: true,
        start: "top",
        end:"bottom bottom +=20%",
        scrub: true,
        pin: true,
    }
})

section5
    .from(".section5 h2 span",{y: "-100vh", opacity: 0, stagger: .2, duration: 1})
    .from(".section5 p",{y: "100vh", opacity: 0, duration: .8})
    .from(".section5 button",{ opacity: 0, scale: 0, duration: .8})
    .to(".section5",{backgroundColor: "black", duration: .8})
    .from(".section5 ",{backgroundPositionX: "150%", duration: 1})
    
