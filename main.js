
window.onscroll=()=>{
    searchbtn.classList.remove('fa-times');
    searchform.classList.remove('active');
   
}


let searchbtn = document.querySelector('#btnsearch');
let searchform = document.querySelector('.searchbar');

searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times');
    searchform.classList.toggle('active');
})

let userbtn = document.querySelector('#user');
let formcontainer = document.querySelector('.login_form_container');
let closebtn = document.querySelector('.close');
let bar = document.querySelector('.menu_bar');
let navbar = document.querySelector('.navbar');
let vidbtn = document.querySelectorAll('.vid-btn');

bar.addEventListener('click',()=>{
   bar.classList.toggle('fa-times');
   navbar.classList.toggle('active');
})

userbtn.addEventListener('click',()=>{
    formcontainer.classList.add('active');

   
})
closebtn.addEventListener('click',()=>{
    formcontainer.classList.remove('active')
})

vidbtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src= src;
    })
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,

    autoplay : {
        delay: 2500,
        disableOnInteraction: false,

    },
    breakpoints: {
        640: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,
            
        },
        1024: {
            slidesPerView: 3,
            
        }
    }
});







let button = document.querySelector('#discover');
let packagesection = document.querySelector('#packages');

button.addEventListener('click',()=>{
   packagesection.scrollIntoView({
       behavior: "smooth"
   })
})


