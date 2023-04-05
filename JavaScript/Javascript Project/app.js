let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
}


let login = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    
}






var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disabledOnInteraction: false,
    },
    centerSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
     
    },
  },
});