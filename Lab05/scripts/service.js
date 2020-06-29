// Function to verify that the phone number is correct.
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\([0-9]{1,3}\)[0-9]{1,3}[-][0-9]{1,4}[ ]*$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

//JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    $("#bphone").on("change", function(){
        if (!validatePhone("bphone")){
            alert("Invalid Phone Number");
            $("#bphone").val("Format: (XXX)XXX-XXXX").css('color', '#DAA520');
        }
    });

    //Book Appointment
    $("#bname").on("click", function(){
        $("#bname").css('color', 'black').select();
    });
    $("#bphone").on("click", function(){
        $("#bphone").css('color', 'black').select();
    });
    $("#bappoint").on("click", function(){
        $("#bappoint").css('color', 'black').select();
    });
    $("#bdate").on("click", function(){
        $("#bdate").css('color', 'black').select();
    });
    $("#bmessage").on("click", function(){
        $("#bmessage").css('color', 'black').select();
    });

    //Navlink
    $(".nav-link").click(function() {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
});