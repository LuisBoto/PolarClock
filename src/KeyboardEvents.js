var keys = [];

window.addEventListener('keydown', onKeyDown, false);
window.addEventListener('keyup', onKeyUp, false);

function onKeyDown( event) {
    input = inputs.keyboard;

    var pos = keys.indexOf(event.keyCode);
    if ( pos == -1 ) {
        keys.push(event.keyCode);
        switch ( event.keyCode ){
            case 13:
                controls.enter = true;
                break;
        }

        if (awaitingInput && keycodes.indexOf(event.keyCode)!=-1)
            userInput = userInput+String.fromCharCode(event.keyCode);
        if (awaitingInput && userInput.length>0 && event.keyCode==8) {
            //Deleting last character
            userInput=userInput.substring(0, userInput.length-1);
        }

    }

}

function onKeyUp( event) {
    var pos = keys.indexOf(event.keyCode);
    keys.splice( pos, 1);
}
