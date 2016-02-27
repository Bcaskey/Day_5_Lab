// Set the lower case keyboard onload
$(document).ready(function(){
     $("#keyboard-upper-container").hide();
    // When shift key is down, show the upper case keyboard
        $(document).keydown(function (e){
            //console.log('shift test');
            if (e.which == 16) {
                $("#keyboard-upper-container").show();
                $("#keyboard-lower-container").hide();
            }
        });
    // when shift key is up, go back to lower case keyboard
        $(document).keyup(function (e){
            //console.log('shift test');
            if (e.which == 16) {
                $("#keyboard-lower-container").show();
                $("#keyboard-upper-container").hide();
            }
        });
        $(document).keydown(function (e){
            console.log('key test' + e.which);
            // here we need to use e.which to give us he ASCII code for which key was pressed.
                //$("#keyboard-upper-container").show();
                //$("#keyboard-lower-container").hide();
            
        });
     
});












 
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
   
     


