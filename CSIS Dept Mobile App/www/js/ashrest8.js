// dropdown menu overflow
function fun_Dropdown() {
    document.getElementById("overflowEl").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//slideshow buttons
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activeimg", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeimg";
}




//conversion weight
function weightConverterPTK(valNum) {
  document.getElementById("kilograms").value=valNum/2.2046;
}
function weightConverterKTP(valNum) {
	document.getElementById("pounds").value=valNum*2.2046;
}

//cpnversion length
function lengthConverterMTK(valNum) {
	document.getElementById("kilometers").value=valNum/0.62137;
}
function lengthConverterKTM(valNum) {
	document.getElementById("miles").value=valNum*0.62137;
}

//conversion temp
function tempConverterFTC(valNum) {
	document.getElementById("dCel").value=(valNum-32)/1.8;
}
function tempConverterCTF(valNum) {
	document.getElementById("dFah").value=(valNum*1.8)+32;
}

//conversion speed
function speedConverterMTK(valNum) {
	document.getElementById("kph").value=valNum*1.609344;
}
function speedConverterKTM(valNum) {
	document.getElementById("mph").value=valNum/1.609344;
}