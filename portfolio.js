let currentIndex = 0;

function showSlide(index) {
   const slider = document.querySelector('.slider');
   const totalSlides = document.querySelectorAll('.slide').length;


if (index < 0) {
    index = totalSlides - 1;

}

else if (index >= totalSlides ) {
    index = 0;
}

currentIndex = index;
const translateValue = -index * 100 + '%';
slider.style.transform = 'translateX(' + translateValue +')';
}

function prevSlide() {
    showSlide(currentIndex - 1);
}


function nextSlide() {
    showSlide(currentIndex + 1);
}

function press() {
    alert("successfully send");
    


}



