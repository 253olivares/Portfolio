var slideNum = 0;
var firstLoad = 0;
showSlide();
// this function is created to cycle through my slide show on my home page and will be set on a timer I set at the end of the function.
function showSlide() {
    var i;
    //creating a array by grabing all the divs with the class of slides
    var slides = document.getElementsByClassName("slide");
    //cycle through the array
    for (i = 0; i < slides.length; i++) {
        if (firstLoad == 0) {
            slides[i].style.display = "none";
            firstLoad++;
        } else {
            TweenMax.to(slides[i], { duration: 1.25, opacity: 0 });
            // setTimeout(function () {
            //     slides[i].style.display = "none";
            // }, 1000);
        }
    }
    //allows a little bit of time to pass between animations so that it looks better
    setTimeout(750)
    //keep track of slide number
    slideNum++;
    //when it goes over the array reset
    if (slideNum > slides.length) { slideNum = 1 }
    //change style for that specific div
    slides[slideNum - 1].style.display = "block";
    TweenMax.to(slides[slideNum - 1], { duration: 1.25, opacity: 1 });
    //repeat the function every 5 seconds
    setTimeout(showSlide, 6000)
}