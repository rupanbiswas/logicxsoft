// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


// // Owl Carousel
// $(document).ready(function() {
//     $(".client-slider-section").owlCarousel({
//         items: 4,
//         loop: true,
//         nav: false,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         responsiveClass: true,
//         responsive: {
//             0: {
//                 items: 2
//             },
//             600: {
//                 items: 3
//             },
//             1000: {
//                 items: 6
//             }
//         }
//     });
// });

// load

const updateScrollPercentage = function() { 
    const heightOfWindow = window.innerHeight,
        contentScrolled = window.pageYOffset,
        bodyHeight = document.body.offsetHeight,
        percentage = document.querySelector("[data-scrollPercentage] .percentage")
        percentageVal = document.querySelector("#percentage-value")

    if(bodyHeight - contentScrolled <= heightOfWindow) {
        percentageVal.textContent = percentage.style.width = "100%"
    }
    else {
        const total = bodyHeight - heightOfWindow,
            got = contentScrolled,
            percent = parseInt((got/total) * 100)
        percentageVal.textContent = percentage.style.width = percent + "%"
    }
}

window.addEventListener('scroll', updateScrollPercentage)


// const fname =document.getElementById('fname');
// const email =document.getElementById('email');
// const number =document.getElementById('number');
// const country =document.getElementById('country');
// const subject =document.getElementById('subject');
// const submit =document.getElementById('submit');


// submit.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     console.log('Clicked');
// })