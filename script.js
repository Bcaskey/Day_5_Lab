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
        
        // below finds a keystroke value, from here I need to convert the ascii 
        //code to text for the typed string line and attach a glyph
        $(document).keypress(function (e){
            var keycode = e.which;
            var letter = e.innerHTML;
                $("#words-typed").text(e.which); //keypress understand shift/no shift
                // lower f is 102 upper f is 70, keycode is 70 for both, ascii key code is 102 and 70
                console.log(letter);
                //$("next-letter").text("this is a test");
                // $("#next-letter").text($(this).text()); this passes the entire keyboard content

        });
        // lets taget the next letters tag <div class='row col-lg-12 text-center' id='next-letter'>letters typed</div>

            
        
    

// end of original script tag below
});


//      ------      here is a sample key delete later
        //   		<span class='well well-lg key' id='R'>R</span>
        
        
        //This works, but it only saves one letter at a time. Delete when fixed above
        // $(document).keydown(function (e){ 
            // $("#words-typed").text(e.which);
        // });
        // Delete above, when words keep characters.

 
//     sample
//     eventListener keypresss => function(e) {
//         console.log(which);
//         
//         sample
//     }
//     
//     sample
//        button.addEventListener('click', doSomething); do something runs a function
//        function doSomething(e) {
//            var clickedElem = e.target; //stores e.target of click
//            e.target = //whatever button you clicked
//        }
        
//   sample
   
     


