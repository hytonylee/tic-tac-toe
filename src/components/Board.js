import React from 'react';
import Menu from './Menu';
import Square from './Square';


export default class Board extends React.Component {



    render() {

        const boxes = [];
        for (let i = 0; i < 9; i++) {
            boxes.push(<Square key={i} />)
        }

        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <Menu />
                <div className='square-container'>
                    {boxes}
                </div>
            </div>
        )
    }
}