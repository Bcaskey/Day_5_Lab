// Set the lower case keyboard onload
$(document).ready(function(){
    
    //Put this into the words div
    var sentences = [
        //"ten ate neite ate nee enet ite ate inet ent eate", 
        //"Too ato too nOt enot one totA not anot tOO aNot",
        //"oat itain oat tain nate eate tea anne inant nean",
        //"itant eate anot eat nato inate eat anot tain eat",
        //"nee ene ate ite tent tiet ent ine ene ete ene ate"
        "text 1 ",
        "text 2 ",
        "text 3 ",
        "text 4 ",
        "text 5 "
    ];
    
    
    
    //jQuery.each( arr, function( i, val ) {
  //$( "#" + val ).text( "Mine is " + val + "." );
    
    
    
    $("#words").append(sentences);
    
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
                var letter = (String.fromCharCode(letterCode));
                    console.log(letter);
                $("#words-typed").append(letter);
                $("#next-letter").text(letter);
                
                // console.log(test);
                // $("next-letter").text($(this).text());
            });




// end of original script tag below
});   
     


