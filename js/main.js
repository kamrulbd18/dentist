jQuery(document).ready(function( $ ) {

new WOW().init();

$('#menu').slicknav();

$("#productCarousel").owlCarousel({
    items:4,
    margin:15,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

$("#offerCarousel").owlCarousel({
    items:4,
    margin:15,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
    loop: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});

/*For Accordion*/
 $(document).ready(function () {
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function (a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function (a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });
});


$("#testimonialCarousel").owlCarousel({
    items:1,
    margin:0,
    nav:false,
    dots: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true
});

// Partner Slider
$('#partnerCarousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    smartSpeed: 400,
    autoplay: 4000,
    responsive:{
        300:{
            items:2
        },
        400:{
            items:3
        },
        800:{
            items:4
        },
        1200:{
            items:6
        }
    }
});  

$('#appBanner').owlCarousel({
    items:1,
    margin:0,
    nav:false,
    navText: '',
    loop: true,
    autoplay: true,
    autoplayHoverPause: true
})

// Autocomplete textbox
    var doctor = [
        "Doctors",
        "Dentist",
        "Physician",
        "General Dental Surgeon",
        "Orthodontist",
        "Prosthodontist"
    ];

    $("#selectDoctor").autocomplete({
        source:doctor,
        autoFocus:true
    })

    var location = [
        "DHAKA",
        "DINAJPUR",
        "FARIDPUR",
        "COMILLA",
        "CHITTAGONG",
        "CHANDPUR",
        "BOGRA",
        "BHOLA",
        "BARISAL",
        "BARGUNA",
        "BANDARBAN",
        "BAGERHAT",
        "CHAPAI NABABGANJ",
        "CHITTAGONG",
        "CHUADANGA",
        "HABIGANJ",
        "JAMALPUR"
    ];

    $("#searchLocation").autocomplete({
        source:location,
        autoFocus:true
    })

});