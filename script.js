let slideIndex = 0;
let play = setInterval(showSlides, 2000);
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slider-item");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
}

function playSlider(){
    clearInterval(play);
    play = setInterval(showSlides, 2000);
}

function pouseSlider(){
    clearInterval(play);
}