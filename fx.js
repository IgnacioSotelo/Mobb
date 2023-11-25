gsap.registerPlugin(ScrollTrigger);
const p_section1 = new SplitType('#div_h1_section1 p');

gsap.fromTo("nav", {
    y: "-150%"
}, {
    y: 0,
    duration: 0.5,
    delay: 2
});

gsap.from("#h1_main *", {
    y: 100,
    autoAlpha: 0,
    duration: 1,
    stagger: {
        each: 0.1
    },
    delay: 2
});

gsap.from(".char", {
    y: -10,
    autoAlpha: 0,
    duration: 0.1,
    stagger: {
        each: 0.05
    },
    delay: 2
});



/*****************************************************/

let tl_circulo_1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section_1",
        start: "top top",
        end: "center top",
        scrub: true,
    }
});

let tl_circulo_2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section_2",
        start: "top top",
        end: "bottom top",
        scrub: true,
    }
});

tl_circulo_1.to("#img_circulo_rosa", {
    scale: 0.5
});

tl_circulo_2.to("#img_circulo_rosa", {
    scale: 0.6
});

// ****************** PROGRESS BAR ****************** 
let tl_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".div_figuras",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

tl_tl.fromTo(".time_line", {
    width: "0%"
}, 
{
    width: "100%",
    ease: "none"
});
// ****************** PROGRESS BAR ****************** 

//********************* FIGURAS *********************

let tl_circulo_borde_1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".div_figuras",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
});

tl_circulo_borde_1.fromTo("#circulo_1", {
    x: "5vw",
    y: "10vh"
}, {
    x: "-20vw",
    y: "-30vh",
    ease: "none",
})
.fromTo("#circulo_2", {
    x: "10vw",
    y: "75vh"
}, {
    x: "-20vw",
    y: "90vh",
    ease: "power.out",
}
    , "<")
.fromTo("#cuadrado_1", {
    x: "20vw",
    y: "50vh",
    rotate: 30,
}, {
    x: "-20vw",
    y: "60vh",
    rotate: -40,
}, "<")
.fromTo("#cuadrado_2", {
    x: "50vw",
    y: "70vh",
    rotate: -12
}, {
    x: "30vw",
    y: "150vh",
    rotate: 190,
}, "<")
.fromTo("#poligono_1", {
    x: "75vw",
    y: "20vh",
    rotate: 20
}, {
    x: "100vw",
    y: "0vh",
    rotate: 90,
}, "<")
.fromTo("#poligono_2", {
    x: "35vw",
    y: "2vh",
    rotate: 20,
}, {
    y: "-100vh",
    rotate: 90,
}, "<")
.fromTo("#circulo_3", {     // rosa 
    x: "18vw",
    y: "24vh",
    rotate: 20,
}, {
    x: "45vw",
    y: "45vh",
    rotate: 90,
}, "<")
.fromTo("#circulo_4", {     // rosa 
    x: "80vw",
    y: "40vh",
    rotate: 20
}, {
    x: "45vw",
    y: "45vh",
    rotate: 90,
}, "<")
.fromTo("#cuadrado_3", {
    x: "60vw",
    y: "18vh",
    rotate: 40
}, {
    x: "45vw",
    y: "45vh",
    rotate: 90,
}, "<")
.fromTo("#cuadrado_4", {
    x: "80vw",
    y: "75vh",
    rotate: 35
},{
    x: "45vw",
    y: "45vh",
    rotate: -20
}, "<")
.fromTo("#poligono_3", {
    x: "30vw",
    y: "75vh",
    rotate: 35
},{
    x: "45vw",
    y: "45vh",
    rotate: -20
}, "<")
.fromTo("#poligono_3", {
    x: "30vw",
    y: "75vh",
    rotate: 35
},{
    x: "45vw",
    y: "45vh",
    rotate: 45
}, "<")
.fromTo("#poligono_4", {
    x: "-30vw",
    y: "-75vh",
    rotate: -35
},{
    x: "45vw",
    y: "45vh",
    rotate: 360
}, "<")
.fromTo("#circulo_5", {
    x: "-30vw",
    y: "10vh",
    rotate: -10
},{
    x: "45vw",
    y: "45vh",
    rotate: 45
}, "<")
.fromTo("#cuadrado_5", {
    x: "70vw",
    y: "50vh",
    rotate: -10
},{
    x: "110vw",
    y: "90vh",
    rotate: -45
}, "<")
.fromTo("#poligono_5", {
    x: "120vw",
    y: "50vh",
    rotate: -10
},{
    x: "45vw",
    y: "45vh",
    rotate: -45
}, "<")
.fromTo("#circulo_6", {
    x: "40vw",
    y: "-100vh",
    rotate: -10
},{
    x: "45vw",
    y: "45vh",
    rotate: -45
}, "<")
;
//********************* FIGURAS *********************

let tl_texto_section2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section_2",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

tl_texto_section2.from(".div_section2_texto p", {
    autoAlpha: 0,
    stagger: {
        each: 0.1
    }
})
    .to(".div_section2_texto p", {
        autoAlpha: 0
    }, 1);
/****** Agrandar circulo  ********/
    let tl_circulos = gsap.timeline({
        scrollTrigger:{
            trigger: "#section_sub_2",
            start: "top center",
            end: "bottom center",
            scrub: true,
        }
    });

    tl_circulos.fromTo("#img_circulo_blanco", {
        scale: 0
    },{
        scale: 0,
        ease: "none"
    })
    .to("#img_circulo_rosa", {
        scale: 0,
        ease: "none"
    }, "<")
    .fromTo("#img_circulo_rosa_2", {
        scale: 0
    },
    {
        scale: 7,
        ease: "none"
    }, "<");
/*****************************************************/
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
})

gsap.ticker.lagSmoothing(0);