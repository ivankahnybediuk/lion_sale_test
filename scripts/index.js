
// $(".main-screen__bg").css("height", document.documentElement.clientHeight)
// $(function(){
//   $(window).resize(function() {
//     $(".main-screen__bg").css("height", document.documentElement.clientHeight)
//   })
// })
$(document).ready(()=>{
  // $(".main-screen__circle-text").lettering();
// $(".main-screen__circle-text").circleType()
new CircleType((document.getElementById('circle-text'))).radius(80)
})



