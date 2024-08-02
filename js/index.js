let slideIndex = 1;  
showSlides(slideIndex);  

function changeSlides(n) {  
    showSlides(slideIndex += n);  
}  

function showSlides(n) {  
    let i;  
    let slides = document.getElementsByClassName("slides")[0];  
    let slidesLength = slides.getElementsByTagName("img").length;  
      
    if (n > slidesLength) {slideIndex = 1}      
    if (n < 1) {slideIndex = slidesLength}  
      
    for (i = 0; i < slidesLength; i++) {  
        slides.getElementsByTagName("img")[i].style.display = "none";    
    }  
      
    slides.getElementsByTagName("img")[slideIndex-1].style.display = "block";    
}  