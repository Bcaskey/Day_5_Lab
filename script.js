// Set the lower case keyboard onload
$(document).ready(function(){

    // below working thru array by line
    // working on going through a loop on top of a loop
    var sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate", 
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate"
        ];
   
    $('#words').append(sentences[0]);
    
    var firstLtr = 0;
    var firstLtrDisplay = sentences[0].charAt(firstLtr);
    console.log(firstLtrDisplay);
    
    // above working thru array by line
    $('#keyboard-upper-container').hide();
    
    $(document).on('keypress', function(e){
        var keyCodePress = e.which;
        var letter = (String.fromCharCode(keyCodePress));
        $('#words-typed').append(letter);
        $('#next-letter').text(letter);
            //these are regular char
            if ((keyCodePress >=0) && (keyCodePress < 32) || (keyCodePress > 47) && (keyCodePress < 58) || (keyCodePress > 64) && (keyCodePress < 91) || (keyCodePress > 96) && (keyCodePress < 123)) {
                $('#' + letter).addClass('keyPressed');
            //these are for spec char
            } else {
                $('#' + keyCodePress).addClass('keyPressed');
            }
    });
    // When shift key is down, show the upper case keyboard
    $(document).keydown(function(e){ //keydown understands the key, but not the optional values of the key shift/noshift
        if (e.which == 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    });
    // when shift key is up, go back to lower case keyboard
    $(document).keyup(function (e){
        var keyCodeUp = e.which;
        $('*').removeClass('keyPressed');
            if (e.which == 16) {
                $("#keyboard-lower-container").show();
                $("#keyboard-upper-container").hide();
        }
    });
// end of original script tag below
});   
        
        // not used variables below. Spitting the lines of the array, and counting each character.
        // var letterCount = 0; //setting at zero before keyUp or keyPress
        // var currentLetter;    
        // var line1 = sentences[0];
        // var line2 = sentences[1];
        // var line3 = sentences[2];
        // var line4 = sentences[3];        
        // var line5 = sentences[4];

        // var line1cnt = line1.split('');
        // var line2cnt = line2.split('');
        // var line3cnt = line3.split('');
        // var line4cnt = line4.split('');
        // var line5cnt = line5.split('');
