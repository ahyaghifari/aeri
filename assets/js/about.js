$(document).ready(function () {
    
    // let mm = gsap.matchMedia();

    gsap.from('#car-bg', {
        opacity: 0,
        duration: 1
    })

    gsap.from('#car', {
        rotate: -90,
        opacity: 0,
        duration: 0.8,
        delay: 1
    })
    
    gsap.from('h1', {
        y: -30,
        opacity: 0,
        delay: 2,
        duration: 0.6
    })
    gsap.from('h3', {
        y: -30,
        opacity: 0,
        delay: 2.6,
        duration: 0.6
    })

    function animation() {
        
    }

    // mm.add("(min-width: 768px)", () => {
    //     animation()
    // })
    // mm.add("(max-width: 767px)", () => {
    //     animation()
    // })

    $('#nav-btn').click(function () {
        $('#nav-list').toggleClass('invisible')
    })

});