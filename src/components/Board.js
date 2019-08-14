import React from 'react';
import Menu from './Menu';
import Square from './Square';
import winCondition from '../utilities/winCondition';
import Status from './Status';
import ErrorBoundary from './ErrorBoundary';


export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            playerOne: true,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        squares[i] === null ?
            (squares[i] = this.state.playerOne ? 'X' : 'O') :
            (console.log("you can't redo this!!"))
        this.setState({
            squares: squares,
            playerOne: !this.state.playerOne
        })
        console.log(this.state.squares)
    }

    render() {
        const winStatus = winCondition(this.state.squares)
        const disabledSquare = (i) => {
            !winStatus ? this.handleClick(i) : null
        }
        const boxes = [];
        for (let i = 0; i < 9; i++) {
            boxes.push(<Square key={i} value={this.state.squares[i]} onClick={() => disabledSquare(i)} />)
        }

        return (
            <ErrorBoundary>
                <div className="board-container">
                    <h1 className="board-header">Tic Tac Toe</h1>
                    <Status squares={this.state.squares} />
                    <Menu />
                    <div className='square-container'>
                        {boxes}
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}