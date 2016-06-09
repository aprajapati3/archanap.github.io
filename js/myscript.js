
$(document).ready(function(){
    $("p").on('click', function() {
        if($('p:visible')){
            $(this).hide();
        }else{
            $(this).show();
        }
        
    });
    $('h2').click(function () {
       alert('h2 clicked'); 
    });
});