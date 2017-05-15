$('.tab-controls a').on('click', function(e) {
    e.preventDefault();

    // Remove active class from buttons
    $('.tab-controls a').removeClass('active');

    // Add the correct active class
    $(this).addClass('active');

    // Hide all tab items
    $('[class^=tab-item]').hide();

    // Show the clicked tab
    var num = $(this).attr('data-tab-item');
    console.log(num);
    $('.tab-item-'+num).fadeIn();
});

 $(document).ready(function() {
    $(".showfirst").delay(600).fadeIn(800);
});

 $(document).ready(function() {
    $(".show2").delay(1200).fadeIn(800);
});

 $(document).ready(function() {
    $(".show3").delay(0).fadeIn(700);
});

 $(document).ready(function() {
    $(".show4").delay(1800).fadeIn(1000);
     $(".show11").delay(300).fadeIn(800);
      $(".show2").delay(600).fadeIn(800);
      $(".show14").delay(900).fadeIn(800);
});

//
//var comfyText = (function(){
//  var tag = document.querySelectorAll('textarea')
//  for (var i=0; i<tag.length; i++){
//    tag[i].addEventListener('paste',autoExpand)
//    tag[i].addEventListener('input',autoExpand)
//    tag[i].addEventListener('keyup',autoExpand)
//  }
//  function autoExpand(e,el){
//    var el = el || e.target
//    el.style.height = 'inherit'
//    el.style.height = el.scrollHeight+'px'
//  }
//  window.addEventListener('load',expandAll)
//  window.addEventListener('resize',expandAll)
//  function expandAll(){
//    var tag = document.querySelectorAll('textarea')
//    for (var i=0; i<tag.length; i++){
//      autoExpand(e,tag[i])
//    }
//  }
//})()
//
// $(window).load(function() {
//      setTimeout(function() {
//          	
//$( ".title" ).hide();
//    $(".showfirst").delay(600).fadeIn(800);
//     $(".show2").delay(1200).fadeIn(800);
//     $(".show3").delay(0).fadeIn(700);
//     $(".show4").delay(1800).fadeIn(1000);
//           }, 2000);
//     
//});
//
//


