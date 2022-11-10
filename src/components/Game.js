import React from 'react';
import ReactDOM from 'react-dom/client';
import {Board} from './Board'
import '../index.css';

export function Game(props) {
  return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={props.squares}
            onClick={(i) => props.onClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{props.status}</div>
          <ol>{props.moves}</ol>
        </div>
      </div>
    );
  }
// ========================================

