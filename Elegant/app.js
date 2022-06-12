// NAVIGATION BAR ON SCROLL FUNCTION START HERE 
const nav = document.querySelector('.navbg');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
   
})
// NAVIGATION BAR ON SCROLL FUNCTION END HERE 


// NAVIGATION BAR DISPLAY FUNCTION START HERE 
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".links");
const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
// NAVIGATION BAR DISPLAY FUNCTION END HERE 

// 




// $(document).ready(function(){
//     $('body').scroll(function(){
//         $('.logo').hide(fast);
//     })
    
//     $('.navbg').scroll(function(){
//         $('.logo2').show(fast);
//     })
// }); 


/*
$(document).ready(function(){
    $('.menu-icon').on('click', function(){
        $('.mob-button').toggle();
    })
}); */