import React from 'react';
import Menu from './Menu';
import Square from './Square';
import ErrorBoundary from './ErrorBoundary'


export default class Board extends React.Component {

    render() {

        const boxes = [];
        for (let i = 0; i < 9; i++) {
            boxes.push(<Square key={i} value={i} />)
        }

        return (
            <ErrorBoundary>
                <div className="board-container">
                    <h1 className="board-header">Tic Tac Toe</h1>
                    <Menu />
                    <div className='square-container'>
                        {/* <div className='square-wrapper'> */}
                        {boxes}
                        {/* </div> */}
                    </div>
                </div>
            </ErrorBoundary>
        )
    }
}