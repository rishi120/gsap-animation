$(window).on('load', function() {

    /* loader functionality */
    setTimeout(function() {
        $('.loader').slideUp(1000);
        // $(' html, body').css({ overflow: 'auto' });
    }, 500);


});


$(document).ready(function() {
    /* width transition */
    setTimeout(() => {
        $('.trans-grow').addClass('grow');
        $('#line').animate({ height: 86 }, 1000);
        // $('.svg-grid-wrapper img').slideDown(1000);
    }, 2000);
    setTimeout(() => {
        $('.amplify').css('opacity', '1');
        $('#line-1').animate({ height: 86 }, 1000);
    }, 3000);

    /* typewritter effect */
    var tech4good = document.getElementById('typewritter');
    var typewriter = new Typewriter(tech4good, {
        loop: true,
        cursor: ''
    });
    typewriter.typeString('TECH4GOOD')
        .pauseFor(2500)
        .deleteAll()
        .typeString('OTTER')
        .pauseFor(2500)
        .start()


    /* gsap functionality */

    setTimeout(() => {
        var brandName = gsap.timeline();
        var headingWrapper = gsap.timeline();
        var head = gsap.timeline();
        var body = gsap.timeline();
        var leg = gsap.timeline();
        var animateDiv = gsap.timeline();
        var svgGrid = gsap.timeline();
        /* nav */
        brandName.from(".otter", 1, {
                translateY: -50,
                stagger: .2
            }, .5)
            .to(".otter", 1, {
                opacity: 1
            }, .5)

        /* heading */

        headingWrapper.from(".heading-wrapper h1", 1, {
                translateY: 50,
                stagger: .2
            }, .5)
            .to(".heading-wrapper h1", 1, {
                opacity: 1
            }, .5)

        /* girl svg animation */
        head.from(".head", 1, {
                translateX: 300,
                stagger: .2
            }, .5)
            .to(".head", 1, {
                opacity: 1
            }, .5)
        body.from(".body", 1, {
                translateX: -400,
                stagger: .2
            }, .5)
            .to(".body", 1, {
                opacity: 1
            }, .5)
        leg.from(".leg-img", 1, {
                translateY: 50,
                stagger: .2
            }, .5)
            .to(".leg-img", 1, {
                opacity: 1
            }, .5)


    }, 2000);


});