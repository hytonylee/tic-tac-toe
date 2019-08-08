import React from 'react';
import Menu from './Menu';
import Square from './Square';
import ErrorBoundary from './ErrorBoundary'


export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(i) {
        const squares = this.state.squares;
        squares[i] = 'X'
        this.setState({ squares: squares })
    }

    render() {

        const boxes = [];
        for (let i = 0; i < 9; i++) {
            boxes.push(<Square key={i} value={this.state.squares[i]} onClick={() => this.handleClick(i)} />)
        }

        return (
            <ErrorBoundary>
                <div className="board-container">
                    <h1 className="board-header">Tic Tac Toe</h1>
                    <Menu />
                    <div className='square-container'>
                        {boxes}
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}