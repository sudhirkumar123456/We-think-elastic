var loader = document.querySelector("#loader");
setTimeout(function(){
   loader.style.top = "-100%"
},5500)

gsap.from("#nav h5",{
    x:-30,
    opacity:0,
    duration:.5,
    delay:5.5,
    stagger:.2
})


var h1 = document.querySelector("#page1 h1");
var h1Text = h1.textContent;
var splittedText = h1Text.split("");

var clutter = "";
splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
});
h1.innerHTML = clutter;

gsap.from("#page1 h1 span",{
    y:100,
    stagger:.09,
    opacity:0,
    delay:5.5
})


gsap.to("#page2 video",{
    width:"100%",
    height:"100%",
    duration:1,
    scrollTrigger:{
        trigger:"#page2 video",
        scroller:"body",       
        start:"top 90%",
        end:"top -2%",
        scrub:true
    }
})

gsap.from("#page3 h1,#page3 p",{
    y:200,
    duration:.5,
    stagger:.2,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",        
        start:"top 25%",       
    }
})

var page4 = document.querySelector("#page4");
var cursor = document.querySelector("#cursor");
var elem1 = document.querySelectorAll(".elem1");
page4.addEventListener("mousemove",function(dets){
cursor.style.left = dets.x+ "px"
cursor.style.top = dets.y+ "px"
})
elem1.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.opacity = 1;
    });

    elem.addEventListener("mouseleave", function () {
        cursor.style.opacity = 0;
    });
});


var page5 = document.querySelector("#page5");
var cursor2 = document.querySelector("#cursor2");
var elem2 = document.querySelectorAll(".elem2");

page5.addEventListener("mousemove", function(val) {
    cursor2.style.left = val.x + "px";
    cursor2.style.top = val.y + "px";
});

elem2.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        cursor2.style.opacity = 1;
    });

    e.addEventListener("mouseleave", function () {
        cursor2.style.opacity = 0;
    });
});
var page6 = document.querySelector("#page6");
var cursor3 = document.querySelector("#cursor3");
var page6Vdo = document.querySelectorAll("#page6-vdo");

page6.addEventListener("mousemove", function(val) {
    cursor3.style.left = val.x + "px";
    cursor3.style.top = val.y + "px";
});

page6Vdo.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
        cursor3.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        cursor3.style.opacity = 0;
    });
});

gsap.to("#page8 h1",{
    x:"-55%",
    duration:1,
    scrollTrigger:{
        trigger:"#page8",
        scroller:"body",        
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})

gsap.from("#page11-text h1",{
    y:200,
    duration:1,
    stagger:.1,
    scrollTrigger:{
        trigger:"#page11",
        scroller:"body",        
        start:"top 30%",
        end:"top -100%",
      
    }
})

