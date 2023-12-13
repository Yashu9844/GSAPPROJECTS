
var tl = gsap.timeline();

tl.from(".nav img, .nav h3,.nav h4,.nav button",{
y:-100,
duration:0.9,
delay:1,
opacity:0,
stagger:0.25
})

tl.from(".main h1",{
    opacity:0,
    y:100,
    duration:0.75,
    stagger:0.25
    

})
tl.from(".left-img ,.right-img ",{
    opacity:0,
    scale:0,duration:1,
    stagger:0.25
})
tl.from(".main h5",{
    opacity:0,
    scale:0
})
tl.to("h5",{
    y:40,
    repeat:-1,duration:0.75,
    yoyo:true
})