


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
  console.log(document.documentElement.clientWidth)
  if(document.documentElement.clientWidth<=992){
  $(".page"). css("max-height", "1000px")
  $(".page"). css("width", "100%")
  $(".wrapper").css("height", "max-content")
  $(".wrapper").css("width", "100%")
  $(".fifteenth-page"). css("height", "500px")
  $(".fifteenth-page__img"). css("width", "100%")
  $(".thirteenth-page"). css("height", "min-content")
  $(".eleventh-page"). css("height", "600px")
  $(".thirteenth-page"). css("max-height", "min-content")

  $('.thirteenth-page__links__container ul').css("display", "none")
  $('.thirteenth-page__links__container h1').on('click', function(){
    $(this).addClass('h1');
    $('thirteenth-page__links__container ul').not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500)
  })

  }
  else{

  $(".page"). css("height", documentHeight)
  $(".outer-wrapper").css("transform", `rotate(-90deg) translateX(-${documentHeight}px)`)
  $(".outer-wrapper").css("width", `${documentHeight}px`)
  $(".wrapper").css("transform", `rotate(90deg) translateY(-${documentHeight}px)`)
  }
}