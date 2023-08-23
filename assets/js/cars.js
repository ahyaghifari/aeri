$(document).ready(function () {

    let allCars = []
    let cars = []

    gsap.from('#cars-title-search', {
        y: -50,
        opacity: 0,
        duration: 1
    })

    var owl = $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    })

    function loadCars() {
        $.each(cars, function (i, c) { 
            $('main').append(`
             <div class="cars cursor-pointer hover:shadow h-fit" slug="${c.slug}">
                <img src="${c.main_image}" class="h-[100px] sm:h-[150px] md:h-[180px] w-full object-cover" />
                <div class="bg-cyan-800 text-white text-[9px] text-center px-5 py-2 sm:text-[11px] lg:text-xs">
                    <p class="font-semibold text-[12px] uppercase text-amber-100 sm:text-sm lg:text-base">${c.model}</p>
                    <p class="mt-1">Rp. ${c.twelve_hour_rent} / 12 hours </p>
                    <p>Rp. ${c.full_day_rent} / Full day </p>
                </div>
             </div>
            `)
        });
        gsap.from('main div', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 1
        })
    }

    function changeDetail(car) {
        $('#merk-car-detail').html(car.merk)
        $('.model-car-detail').html(car.model)
        $('#year-car-detail').html(car.year)
        $('#type-car-detail').html(car.type)
        $('#color-car-detail').html(car.color)
        $('#transmition-car-detail').html(car.transmition)
        $('#seater-car-detail').html(car.seater)
        $('#fuel-car-detail').html(car.fuel)
        $('#features-car-detail').html(car.features)
        $('#twelve-hours-rent-car-detail').html(car.twelve_hours_rent)
        $('#full-day-rent-car-detail').html(car.full_day_rent)
        $('#cars-detail-bg').attr('src', car.main_image)
        let images = car.images
        $('.owl-carousel div').remove()
        for (let i = 0; i < images.length; i++) {
            $('.owl-carousel').append(`
            <div class="w-full h-[35vh] md:h-[45vh] flex justify-center items-center relative">
                        <img src="${images[i]}" alt="">
                        <p id="source-image-detail" class="text-[8px] text-white w-3/4 break-all absolute bottom-2 left-2 lg:text-[10px]">
                            ${images[i]}
                        </p>
                    
                        </div> 
            `)            
        }
        owl.owlCarousel('initialize')
        owl.trigger('to.owl.carousel', [0, 300])
    }

    $.getJSON("assets/data/cars.json", function (data) {
        allCars = data
        cars = data
        loadCars()
        changeDetail(cars[0])
        
    });

    $(document).on('click', '.cars', function () {
        let car = cars.find((c) => c.slug == $(this).attr('slug'))
        changeDetail(car)
        setTimeout(() => {
            $('#cars-detail').addClass('active')
            
        }, 500);
        $('body').addClass('unscroll')
    })
    
    $('#cars-detail-close-btn').click(function () {
        $('#cars-detail').removeClass('active')
        $('body').removeClass('unscroll')
    })

    $('#cars-search').keyup(function () {
        $('main div').remove()
        var originVal = $(this).val()
        var val = originVal.toLowerCase()
        if (val != "") {   
            cars = allCars.filter((c) => {
                var merk = c.merk.toLowerCase()
                var model = c.model.toLowerCase()
                return (merk.includes(val) || model.includes(val))
            })
        } else {
            cars = allCars
        }
        loadCars()
    })

    $('#nav-btn').click(function () {
        $('#nav-list').toggleClass('invisible')
    })

});