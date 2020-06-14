


$(document).ready(function(){
  
sizing()
new CircleType((document.getElementById('circle-text')))

const paralaxContainer = document.querySelectorAll(".paralax-container")
paralaxContainer.forEach(element=>{
  element.addEventListener("mousemove", function(event){
   $(".paralax").css("transform", `translate(${event.screenX/20}px)`)
  
  })
})
$(window).resize(sizing)

})
$('.third-page').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});
let documentHeight;
function sizing (){
  documentHeight=document.documentElement.clientHeight
  console.log(documentHeight)
  $(".page"). css("height", documentHeight)
  $(".outer-wrapper").css("transform", `rotate(-90deg) translateX(-${documentHeight}px)`)
  $(".outer-wrapper").css("width", `${documentHeight}px`)
  $(".wrapper").css("transform", `rotate(90deg) translateY(-${documentHeight}px)`)
  
}