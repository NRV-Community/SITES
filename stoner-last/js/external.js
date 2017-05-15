     $(window).scroll(function (event) {
                    // A chaque fois que l'utilisateur va scroller (descendre la page)
                    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

                    //si cette valeur > à 200 on ajouter la class
                    if (y >= 200) {
                        $('.nav').addClass('fixed');
                    } else {
                        // sinon, on l'enlève
                        $('.nav').removeClass('fixed');
                    }
                });


                $('g a.clicker').on('click', function (e) {
                    e.preventDefault();
                    var index = $('a.clicker').index(this) + 1;


                    $('div.ecole').each(function () {

                        if ($(this).attr('rel') == index) {
                            $(this).addClass('active');
                            $(this).css('visibility','visible').css('display','block').animate({opacity: 1.0, right: '0px'}, 900);
                        } else {
                            $(this).removeClass('active');
                            $(this).hide(0);
                        }
                    });

                });

                $(".rightcontainer-ecole .ecole").first().show(200);

//                $(document).ready(function () {
//                    var scroll_start = 0;
//                    var startchange = $('#startchange');
//                    var offset = startchange.offset();
//                    $(document).scroll(function () {
//                        scroll_start = $(this).scrollTop();
//                        if (scroll_start > offset.top) {
//                            $('#navbar').css('background-color', '#f0f0f0');
//                        } else {
//                            $('#navbar').css('background-color', 'transparent');
//                        }
//                    });
//                });
//
//                $(document).ready(function () {
//                    var scroll_start = 0;
//                    var startchange = $('#startchange');
//                    var offset = startchange.offset();
//                    $(document).scroll(function () {
//                        scroll_start = $(this).scrollTop();
//                        if (scroll_start > offset.top) {
//                            $('#navbar').css('background-color', '#ffffff');
//                        } else {
//                            $('#navbar').css('background-color', 'transparent');
//                        }
//                    });
//                });
                
                
                var divs = $('.wrapFR-intro');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   divs.css({ 'opacity' : (1 - st/20) });
});

                //     $( "g a" ).click(function() {
                //  alert( "lol" );
                //});




             $(window).scroll(function (event) {
                    // A chaque fois que l'utilisateur va scroller (descendre la page)
                    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

                    //si cette valeur > à 200 on ajouter la class
                    if (y >= 200) {
                        $('.nav').addClass('fixed');
                    } else {
                        // sinon, on l'enlève
                        $('.nav').removeClass('fixed');
                    }
                });
                
//                
//                 $(document).ready(function(){       
//   var scroll_start = 0;
//   var startchange2 = $('#startchange2');
//   var offset = startchange2.offset();
//   $(document).scroll(function() { 
//      scroll_start = $(this).scrollTop();
//      if(scroll_start > offset.top) {
//           $(".conteneurgrandefrance").slideToggle("slow") 
//       } else {
//          $('.conteneurgrandefrance').css('display', 'none');
//       }
//   });
                     
//                  $(window).scroll(function () {
//    console.log($(window).scrollTop());
//    var topDivHeight = $(".intro").height();
//    var viewPortSize = $(window).height();
//    
//    var triggerAt = 200;
//    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;
//
//    if ($(window).scrollTop() >= triggerHeight) {
//        $('.conteneurgrandefrance').addClass('lolxd').hide().fadeIn(500).slideDown(500);
//        $(this).off('scroll');
//    }
//});


$(document).ready(function () {
    
    
    
//    $(window).scroll(function () {
//    console.log($(window).scrollTop());
//    var topDivHeight = $(".topdiv").height();
//    var viewPortSize = $(window).height();
//    
//    var triggerAt = 200;
//    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;
//
//    if ($(window).scrollTop() >= triggerHeight) {
//        ('.conteneurgrandefrance')
//.animate({opacity: 1.0, top: '0px'}, 500);
//        $(this).off('scroll');
//    }
//});
    
    

                
                
})
               

//                    $('div.ecole').each(function () {
//
//                        if ($(this).attr('rel') == index) {
//                            $(this).addClass('active');
//                            $(this).show("slide");
//                        } else {
//                            $(this).removeClass('active');
//                            $(this).hide(100);
//                        }
//                    });

               

                $(".rightcontainer-ecole .ecole").first().show(200);

//                $(document).ready(function () {
//                    var scroll_start = 0;
//                    var startchange = $('#startchange');
//                    var offset = startchange.offset();
//                    $(document).scroll(function () {
//                        scroll_start = $(this).scrollTop();
//                        if (scroll_start > offset.top) {
//                            $('#navbar').css('background-color', '#f0f0f0');
//                        } else {
//                            $('#navbar').css('background-color', 'transparent');
//                        }
//                    });
//                });
//
//                $(document).ready(function () {
//                    var scroll_start = 0;
//                    var startchange = $('#startchange');
//                    var offset = startchange.offset();
//                    $(document).scroll(function () {
//                        scroll_start = $(this).scrollTop();
//                        if (scroll_start > offset.top) {
//                            $('#navbar').css('background-color', '#ffffff');
//                        } else {
//                            $('#navbar').css('background-color', 'transparent');
//                        }
//                    });
//                    
//               
//                });
//             

//
//                
//                $.fn.is_on_screen = function(){
//     
//    var win = $(window);
//     
//    var viewport = {
//        top : win.scrollTop(),
//        left : win.scrollLeft()
//    };
//    viewport.right = viewport.left + win.width();
//    viewport.bottom = viewport.top + win.height();
//     
//    var bounds = this.offset();
//    bounds.right = bounds.left + this.outerWidth();
//    bounds.bottom = bounds.top + this.outerHeight();
//     
//    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
//     
//};
//
//if( $('.topcarte').length > 0 ) { // if target element exists in DOM
//	if( $('.topcarte').is_on_screen() ) { // if target element is visible on screen after DOM loaded
//        
//        $('.conteneurgrandefrance').css('visibility', 'visible')
//          .animate({opacity: 1.0, top: '0px'}, 1800); // log info	
//       
//	} else {
//      
//	}
//}
//                
                $('.leftcontainer:visible').ready(function() {
        $('.conteneurgrandefrance').css('visibility', 'visible')
          .animate({opacity: 1.0, top: '0px'}, 1500);
                  
    });
                
                
                
                
                
//$(window).scroll(function(){ // bind window scroll event
//	if( $('.topcarte').length > 0 ) { // if target element exists in DOM
//		if( $('.topcarte').is_on_screen() ) { 
//            alert( "lol" );// if target element is visible on screen after DOM loaded
//			$(this).css('visibility', 'visible')
//          .animate({opacity: 1.0, top: '0px'}, 1100); // log info
//		} else {
//			alert( "lol" ); // log info
//		}
//	}
//});
//                
                
                

                //     $( "g a" ).click(function() {
                //  alert( "lol" );
                //});
               $(document).ready(function () {
                 
                $( ".desktop g a.clicker" ).click(function() {
        
  $('.left').css('width','50%').css('display','none').slideToggle("slow");
                     $('.mobile .right').slideToggle("slow");
  $('.rightcontainer-ecole').delay(200 ).css('visibility','visible').animate({opacity: 1.0, right: '0px'}, 600);
//  $('.tabs').delay(200 ).css('visibility','visible').animate({opacity: 1.0, left: '0px'}, 600);
  
$('.conteneurgrandefrance').css('width','100%');
$('.conteneurgrandefrance').css('margin-top','10%');
$('.leftcontainer').css('margin-top','-4%;');
$('.leftcontainer').css('padding-top','11%');
                    $('.rondrouge').show(900);
                    
    
                    
                    
                    
});
});
                
                
              
                
                $( ".left" ).load(function() {
            
  $(this).fadeIn(300).slideDown(300);
});





