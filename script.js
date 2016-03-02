$(document).ready(function(){
    var sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate", 
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate"
        ];
        
    var keyCodePress;
    var letter;
    var letterCount = 0;
    var firstLtr = 0;
    var firstLtrDisplay = sentences[0].charAt(firstLtr);
    var keyCodeUp;
    
    $('#words').append(sentences[0]);
    $('#keyboard-upper-container').hide();
    
    $(document).on('keypress', function(e){
        keyCodePress = e.which; // var moved to top of page
        letter = (String.fromCharCode(keyCodePress)); //var moved to top
        $('#words-typed').append(letter);
        $('#next-letter').text(letter);
            //these are regular char
            if ((keyCodePress >=0) && (keyCodePress < 32) || (keyCodePress > 47) && (keyCodePress < 58) || (keyCodePress > 64) && (keyCodePress < 91) || (keyCodePress > 96) && (keyCodePress < 123)) {
                $('#' + letter).addClass('keyPressed');
            //these are for spec char
            } else {
                $('#' + keyCodePress).addClass('keyPressed');
            }
            $('#block').prepend('&nbsp;').html;
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
        keyCodeUp = e.which; //var moved to top
        $('*').removeClass('keyPressed');
            if (e.which == 16) {
                $("#keyboard-lower-container").show();
                $("#keyboard-upper-container").hide();
            } 
        // var testSent = [
        // "ten ate neite ate nee enet ite ate inet ent eate Too ato too nOt enot one totA not anot tOO aNot oat itain oat tain nate eate tea anne inant nean itant eate anot eat nato inate eat anot tain eat nee ene ate ite tent tiet ent ine ene ete ene ate"
        // ];
        // $(testSent).each(function(){
        //     var letters = this.split('');
        //     console.log(letters);
        //     //var eachLetter = testSent.length;
        //     //for (var i = 0; i< eachLetter; i++) {
        //     //console.log('z' + testSent[i]);
        //     }

        }); 
    //});
// end of original script tag below
});   

