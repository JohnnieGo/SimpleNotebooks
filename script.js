function showMenu () {
    var x = document.getElementById("mobileMenu");
            x.style.display = "flex";
    var y = document.body;
            y.style.overflow = "hidden";

    };

function hideMenu () {
    var x = document.getElementById("mobileMenu");
            x.style.display = "none";
    var y = document.body;
        y.style.overflow = "visible";
}

function showFilters () {
    var x = document.getElementById("mobileFilters");
            x.style.display = "flex";
    var y = document.body;
            y.style.overflow = "hidden";

    };

function hideFilters () {
    var x = document.getElementById("mobileFilters");
            x.style.display = "none";
    var y = document.body;
        y.style.overflow = "visible";
}



//Filters
!function(){const e=document.querySelector(".range-slider");if(!e)return;const l=e.querySelectorAll('input[type="range"]'),a=e.querySelectorAll('input[type="number"]');l.forEach(e=>{e.oninput=(()=>{let e=parseFloat(l[0].value),t=parseFloat(l[1].value);e>t&&([e,t]=[t,e]),a[0].value=e,a[1].value=t})}),a.forEach(e=>{e.oninput=(()=>{let e=parseFloat(a[0].value),t=parseFloat(a[1].value);if(e>t){let l=e;a[0].value=t,a[1].value=l}l[0].value=e,l[1].value=t})})}();


// Photo slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}