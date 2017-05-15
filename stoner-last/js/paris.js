$('#paris').click(function(e){
    console.log("click");
    e.preventDefault();
    $('#parisSplit').show(200);
})

$("#fermerParis").click(function(e){
    console.log("click");
    e.preventDefault();
    $('#parisSplit').hide(100);
    $('#parisouest').css("display","none");
    $(".rightcontainer-ecole .ecole,busy").css("visibility", 'visible');
})

$(".arrondissements").click(function(e){
    e.preventDefault();
    console.log("click arrondissements");
    $(".rightcontainer-ecole .ecole,busy").css("visibility", 'hidden');
    $('.rightcontainer-ecole #parisest').css("display", "none");
    $(".rightcontainer-ecole").prepend($("#parisouest"));
    $('#parisouest').css("display", 'block');
  
})

$(".nonoccupee").click(function(e){
    e.preventDefault();
    console.log("click non occupee");
    $(".rightcontainer-ecole .ecole,busy").css("visibility", 'hidden');
    $('.rightcontainer-ecole #parisouest').css("display", "none");
    $(".rightcontainer-ecole").prepend($("#parisest"));
    $('#parisest').css("display", 'block');
   
})