$(document).ready(function(){
  $(".header").click(function() {
    //get the next element
    $info = $(this).next();
    //check if it is already visible
    if($info.is(":hidden")){
      //no, then slide all the info up
      $(".info").slideUp("fast");
      //then toggle the one we clicked, slide down in this case
      $info.slideToggle("fast");
    }
  });
});
