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
(function() {
	const parent = document.querySelector('.range-slider');

	if (!parent) {
		return;
	}

	const rangeS = parent.querySelectorAll('input[type="range"]'),
	      numberS = parent.querySelectorAll('input[type="number"]');

	rangeS.forEach((el) => {
		el.oninput = () => {
			let slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);

			if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
			}

			numberS[0].value = slide1;
			numberS[1].value = slide2;
		}
	});

	numberS.forEach((el) => {
		el.oninput = () => {
			let number1 = parseFloat(numberS[0].value),
				number2 = parseFloat(numberS[1].value);

			if (number1 > number2) {
				let tmp = number1;
				numberS[0].value = number2;
				numberS[1].value = tmp;
			}

			rangeS[0].value = number1;
			rangeS[1].value = number2;
		}
	});
})();


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