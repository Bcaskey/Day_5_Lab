// Set the lower case keyboard onload
$(document).ready(function(){

    // below working thru array by line
    // working on going through a loop on top of a loop
    var sentences = [
        "text 1 ", //"ten ate neite ate nee enet ite ate inet ent eate", 
        "text 2 ", //"Too ato too nOt enot one totA not anot tOO aNot",
        "text 3 ", //"oat itain oat tain nate eate tea anne inant nean",
        "text 4 ", //"itant eate anot eat nato inate eat anot tain eat",
        "text 5 " //"nee ene ate ite tent tiet ent ine ene ete ene ate"
        ];
    $('#words').append(sentences);
    $.each(sentences, function( index, value ) {
        $('#words' + value).text( index + ": " + value ); // replaced alert writes everything, dropped append
        });
    // above working thru array by line
    $('#keyboard-upper-container').hide();
    
    $(document).on('keypress', function(e){
        var KeyCodePress = e.which;
        var letter = (String.fromCharCode(KeyCodePress));
        $('#words-typed').append(letter);
        $('#next-letter').text(letter);
        $('#' + letter).addClass('keyPressed');
        console.log(letter);
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
        //console.log('test222: ' + keyCodeUp);
        $('*').removeClass('keyPressed');
            if (e.which == 16) {
                $("#keyboard-lower-container").show();
                $("#keyboard-upper-container").hide();
        }
    });
// end of original script tag below
});   
     
