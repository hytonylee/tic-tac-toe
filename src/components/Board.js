import React from 'react';
import Menu from './Menu';
import Square from './Square';

export default class Board extends React.Component {
    render() {
        return (
            <div>
                <h1>Tic Tac Toe</h1>
                <Menu />
                <Square />
            </div>
        )
    }
}