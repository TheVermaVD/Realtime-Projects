
let slides = document.getElementsByClassName('slider');
console.log(slides);
console.log(slides.length); //4
//4 slides (index : 0,1,2,3)

let slideIndex = 0;
slides[slideIndex].style.display = "block"



document.getElementById("next").addEventListener('click', function () {


  for (let element of slides) {

    element.style.display = 'none';

  }
 

  if(slideIndex == slides.length-1 ) {

    slideIndex = -1;

    // slides[slideIndex].style.display = "block";

  }


    slideIndex = slideIndex + 1;
    slides[slideIndex].style.display = "block"


});

document.getElementById("prev").addEventListener('click', function () {

  for (let element of slides) {

    element.style.display = 'none';

  }

  if (slideIndex <= 0) {

    slideIndex = slides.length;

  }

  // console.log("after", slideIndex);


  slideIndex = slideIndex - 1;
  slides[slideIndex].style.display = "block"


  // console.log(slideIndex);



});


