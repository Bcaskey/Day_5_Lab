// Set the lower case keyboard onload
$(document).ready(function(){
     $("#keyboard-upper-container").hide();
    // When shift key is down, show the upper case keyboard
        $(document).keydown(function (e){  //keydown understands the key, but not the optional values of the key shift/noshift
            if (e.which == 16) {
                $("#keyboard-upper-container").show();
                $("#keyboard-lower-container").hide();
            }
        });
    // when shift key is up, go back to lower case keyboard
        $(document).keyup(function (e){
            if (e.which == 16) {
                $("#keyboard-lower-container").show();
                $("#keyboard-upper-container").hide();
            }
        });
        

            
            $(document).on("keypress", function(e){
                var letterCode = e.which;
                $("#words-typed").text(String.fromCharCode(letterCode)); // now I need to make this a sentence with glyphs
                $("#next-letter").text(String.fromCharCode(letterCode)); //I think this is the highlighted letter pressed key
                // console.log(test);
                // $("next-letter").text($(this).text());
            });




// end of original script tag below
});   
     


