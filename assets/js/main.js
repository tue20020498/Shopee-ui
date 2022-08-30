
$(document).ready(function () {
    $('.image-slider').slick(
        {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="next" style="display: none"><i class="fa-solid fa-angle-right"></i></button>',
            prevArrow: '<button type="button" class="prev" style="display: none"><i class="fa-solid fa-angle-left"></i></button>',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
        }
    );
});

// button back to top



const handleScroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('.back-to-top').style.display = 'block';
    } else {
        document.querySelector('.back-to-top').style.display = 'none';
    }
}
window.addEventListener('scroll', handleScroll)

const handleBackToTop = () => {
   document.body.scrollIntoView({
        block:"start",
        behavior: "smooth", 
    })

}

document.querySelector('.back-to-top').addEventListener('click', handleBackToTop)
