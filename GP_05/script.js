var tl = gsap.timeline();


function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a > 100){
            a =100 
            document.querySelector(".loader h1").innerHTML= a + "%"
        }else{
           
            document.querySelector(".loader h1").innerHTML= a + "%"

        }
       

    },150)
}
time()

tl.to(".loader h1",{
   scale:1.4,
   delay:0.5, 
   duration:1.5,
   onStart:time()
})




tl.to(".loader",{
    top:"-100vh",
    delay:0.5,
    duration:1
})



gsap.to(".page1 h1",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true
    }
})