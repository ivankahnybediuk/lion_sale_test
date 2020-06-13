
// $(".main-screen__bg").css("height", document.documentElement.clientHeight)
// $(function(){
//   $(window).resize(function() {
//     $(".main-screen__bg").css("height", document.documentElement.clientHeight)
//   })
// })
$(document).ready(function(){
new CircleType((document.getElementById('circle-text'))).radius(80)

const paralaxContainer = document.querySelectorAll(".paralax-container")
paralaxContainer.forEach(element=>{
  element.addEventListener("mousemove", function(event){
   $(".paralax").css("transform", `translate(${event.screenX/50}px)`)
  
  })
})



})
$('.third-page').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

		

