$(document).ready(function () {
    
    var tlHeader = gsap.timeline()

    let mm = gsap.matchMedia();   

    function animation() {
        //  ---------- HEADER ----------
        gsap.from('#header-bg', {
            opacity: 0,
            duration: 1.5
        })

        gsap.from('#car-home', {
            opacity: 0,
            x: 50,
            duration: 1,
            delay: 1.5,
        })

        gsap.from('header h1', {
            y: 50,
            duration: 1,
            lineHeight: 0,
            opacity: 0,
            delay: 2.5
        })
        
        gsap.from('header h3', {
            y: -10,
            duration: 1,
            opacity: 0,
            delay: 3
        })

        // ---------- FIND CAR ----------
        gsap.from('#bg-find-car', {
            scrollTrigger: {
                trigger: 'main',
                start: 'top center',
                end: 'bottom center'
            },
            duration: 1.5,
            width: 0
        })

        gsap.from('#car-find-car', {
            scrollTrigger: {
                trigger: 'main',
                start: 'top 40%',
                end: 'bottom bottom',
            },
            duration: 1,
            scale: 0
        })
    
        gsap.from('#find-car-content', {
            scrollTrigger: {
                trigger: '#find-car',
                start: 'top 25%',
            },
            opacity: 0,
            duration: 1,
            x: -50
        })

        gsap.from('#find-car-nav', {
            scrollTrigger: {
                trigger: '#find-car',
                start: 'top 25%',
            },
            opacity: 0,
            duration: 1,
            y: 50
        })

        // ---------- CHECK CAR ----------
        gsap.from('#check-car h1', {
            scrollTrigger: {
                trigger: '#check-car h1',
                top: 'top 50%'
            },
            scale: 1.1,
            duration: 0.5,
            opacity: 0
        })
        gsap.from('#check-car-content', {
            scrollTrigger: {
                trigger: '#check-car h1',
                top: 'top 50%'
            },
            text: {
                value: 1,
            },
            duration: 4,
        })
        gsap.from('#check-car-ready', {
            scrollTrigger: {
                trigger: '#check-car h1',
                top: 'top 50%'
            },
            delay: 4,
            duration: 0.3,
            y: 10,
            opacity: 0,
        })

        // ---------- DRIVERS ----------
        gsap.from('#drivers img', {
            scrollTrigger: {
                trigger: '#drivers',
                start: 'top 40%'
            },
            y: 50,
            opacity: 0,
            rotateY: 320,
            duration: 1
        })
        gsap.from('#drivers #drivers-destination', {
            scrollTrigger: {
                trigger: '#drivers',
                start: 'top 40%'
            },
            y: 50,
            opacity: 0,
            delay: 0.5
        })
        gsap.from('#drivers #drivers-content', {
            scrollTrigger: {
                trigger: '#drivers',
                start: 'top center'
            },
            x: -100,
            opacity: 0,
        })

        let needUsImg = gsap.utils.toArray('.need-us-images')
        gsap.from(needUsImg, {
            scrollTrigger: {
                trigger: '#need-us h1',
                start: 'top 30%'
            },
            y: 60,
            opacity: 0,
            duration: 1
        })

    }

    mm.add("(min-width: 768px)", () => {
        animation()
    })
    mm.add("(max-width: 767px)", () => {
        animation()
    })

    $('#nav-btn').click(function () {
        $('#nav-list').toggleClass('invisible')
    })

});