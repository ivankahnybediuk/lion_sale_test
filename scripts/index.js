

$(document).ready(function(){
new CircleType((document.getElementById('circle-text'))).radius(80)

const paralaxContainer = document.querySelectorAll(".paralax-container")
paralaxContainer.forEach(element=>{
  element.addEventListener("mousemove", function(event){
   $(".paralax").css("transform", `translate(${event.screenX/20}px)`)
  
  })
})
window.scroll(function(e){
  console.log("top "+ e.scrollTop )
  console.log("left "+ e.scrollLeft )
})

})
$('.third-page').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});

