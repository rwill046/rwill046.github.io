// jQuery that will "listen" to the html index.html
$(document).ready(function(){
    $('form').on('submit', function(){
        $.ajax({
          type: 'POST',
          url: '/',
          data: $(this).serializeArray(), //req.body
          success: function(data){
            alert("Thank you for your time!");
            $("#sid").css("background-color", "#000033");
            $("#sid").css("color", "#000033");
            $("#sid").attr("disabled", true);
          }
        });
        return false;
    });
  });