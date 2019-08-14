import React from 'react';
import winCondition from '../utilities/winCondition';

const Status = (props) => {
    const winStatus = winCondition(props.squares)
    let winCaption;
    if (winStatus === "X") {
        winCaption = 'Player One is the Winner!!'
    } else if (winStatus === "O") {
        winCaption = 'Player Two is the Winner!!'
    } else {
        winCaption = 'No Winner yet!'
    }
    return (
        <div>
            {winCaption}
        </div>
    )
}


export default Status;