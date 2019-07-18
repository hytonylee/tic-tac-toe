import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import './styles/styles.scss';

const jsx = (
    <div>
        <Board />
    </div>
)


ReactDOM.render(jsx, document.getElementById('app'));
