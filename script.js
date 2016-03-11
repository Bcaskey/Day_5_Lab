$(document).ready(function() {
    $('#keyboard-upper-container').hide();

    var sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate"
    ];

    var keyCodePress;//ASCII for which key was pressed
    //var letter;
    var letterCount = 0;
    var firstLtr = 0;
    var firstLtrDisplay = sentences[0].charAt(firstLtr);
    var keyCodeUp;
    var sentenceIndex = 0;
    var LetterIndex = 0; //the first letter of the indexed sentence.
    var errors = 0;
    var sentence;
    var time;

    function setWordText(event) {
        if (sentenceIndex < sentences.length) {//loops thru array looking for all values used
            sentence = sentences[sentenceIndex];//define what sentence u are using
            letterIndex = 0; //has to be zero again here, for loop statement
            sentenceIndex++;//counting through sentence array items.
            $('#words').text(sentence);
            setNextLetterDiv(sentence[letterIndex]);//this sets the letterIndex value to the next letter
            var numErrors = $('#words-typed').find('span.glyphicon-remove').length;// append div
            errors += numErrors; // counts
            $('#words-typed').empty();//IS THIS A FUNCTION?
            $('#block').stop(true, true).animate({ 'left': '15px' });//WHAT ARE THE TRUE VALUES? AND WHY STOP ANIMATE?
        } else {
            //After doing all above, we are done. Play again, or stop?
            var wpm = calculateWPM(event);//calls the calculate funciton, declare wpm
            displayScore(wpm);//passes display score, with a value;
            askToPlayAgain();//calls play again
        }
    };

    setWordText();//calls all the if loop for sentences
    
    function calculateWPM(event) {
        time = event.timeStamp - time; //time stamp, less time
        var mistakes = errors;
        var numberOfWords = 54;
        var minutes = (time / 1000) / 60;
        var wpm = Math.floor(numberOfWords / minutes - (mistakes * 2));
        return wpm;
    };

    function displayScore(wpm) {
        var message;
        if (parseInt(wpm) < 0) {
            message = 'There were a lot of mistakes!';
        } else {
            message = 'You typed ' + wpm + ' words per minute!';
        }
        $('#message').html(message).css({ 'font-size': '30px' });
    };

    function askToPlayAgain() {
        setTimeout(function() { // Built into JS.
            if (confirm('Would you like to play again?')) {
                sentenceIndex = 0;
                time = undefined;
                $('#message').empty();
                setWordText();
            }
        }, 5000);
    }

    function setNextLetterDiv(letterIndex) { //changed from letter as example
        $('#next-letter').text(letterIndex); //changed from letter as example
    }
    function moveBlock() {
        $("#block").animate({ "left": "+=17px" }, 80);
    }

    $(document).on('keypress', function(e) {
        if (!time) { // setting time start
            time = e.timeStamp;
        }
        
        var keyCodePress = e.keyCode;        
        if (keyCodePress === sentence[letterIndex].charCodeAt()) {
            $('#words-typed').append($('<span class="glyphicon glyphicon-ok"></span>'));
        } else {
            $('#words-typed').append($('<span class="glyphicon glyphicon-remove"></span>'));
        }
        letterIndex++;
        if (letterIndex < sentence.length) { // Still letters remaining in current sentence
            moveBlock();
            setNextLetterDiv(sentence[letterIndex]);
        } else { // End of the sentence. Call our setWordText setup function
            setWordText(e); // Finishing things up for this sentence
        }
    });
    var selector = '#' + keyCodePress;
    $(selector).css({ 'background-color': '#38B0DE', 'color': '#fff' });

    $(document).keydown(function(e) {
        if (e.which == 16) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }
    });
    // when shift key is up, go back to lower case keyboard
    $(document).keyup(function(e) {
        keyCodeUp = e.which; //var moved to top
        $('*').removeClass('keyPressed');
        if (e.which == 16) {
            $("#keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }
    });
});   