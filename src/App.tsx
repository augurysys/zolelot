import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board/Board';

function App() {
  const board = {
    rows: [
      {cells: [{state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'miss'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'empty'}, {state: 'hit'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'empty'}, {state: 'hit'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'empty'}, {state: 'miss'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'miss'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]},
      {cells: [{state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}, {state: 'empty'}]}
    ]
  }
  return <Board board={board}></Board>
}

export default App;
