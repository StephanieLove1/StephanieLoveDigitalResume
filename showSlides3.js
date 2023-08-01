let slideIndex3 = 0;
  showSlides3();

  function showSlides3() {
    let i;
    let slides3 = document.getElementsByClassName("mySlides3");
    let dots3 = document.getElementsByClassName("dot3")
    for (i = 0; i < slides3.length; i++){
      slides3[i].style.display = "none";
    }
    slideIndex3++;
    if (slideIndex3 > slides3.length) {slideIndex3 = 1}
    for (i = 0; i < dots3.length; i++) {
      dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex3-1].style.display = "block";
    dots3[slideIndex3-1].className += " active";
    setTimeout(showSlides3, 7000);
  }