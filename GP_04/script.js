var tl = gsap.timeline()

tl.from(".nav",{
    opacity:0,
    delay:0.5
})

tl.from(".nav h1,.nav h3,.nav h4",{
    y:-80,
    duration:0.8,
    opacity:0,
    stagger:0.3
})
tl.from(".left h1",{
    x:-500,
    duration:0.8,
    opacity:0,
    stagger:0.5
})
tl.from(".right img",{
    scale:2,
    opacity:0,
    duration:0.6
}).bo
gsap.from(".page2 .box ",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body"
    }
})