gsap.from(".page1 .box",{
    scale:0,
    delay:0.5,
    duration:2,
    rotate:360
})
gsap.from(".page2 .box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    scrollTrigger:".page2 .box",
})
gsap.from(".page3 .box",{
    scale:0,
   
    duration:2,
    rotate:360,                           //Use This type for Reverse Animation
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        markers:true,
        // start:"top 75%"
        start:"top 60%",
        end:"top 15%",
        // scrub:true
        scrub:4   //we can give 1-5 for Smooth
    }
})
