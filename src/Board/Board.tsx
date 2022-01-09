import React from 'react';
import './board.css'

interface Board {
  rows: Row[]
}

interface Row {
  cells: Cell[]
}

interface Cell {
  state: string
}

interface BoardProps {
  board: Board
}

function Board(props: BoardProps) {
  const {board} = props;
  return <table className="Board">
    <tbody>
      <tr>
        <th></th>
        <th>A</th>
        <th>B</th>
        <th>C</th>
        <th>D</th>
        <th>E</th>
        <th>F</th>
        <th>G</th>
        <th>H</th>
        <th>I</th>
        <th>J</th>
      </tr>
      {board.rows.map((row: Row, index: number) => <tr>
        <th>{index + 1}</th>
        {row.cells.map((cell: Cell) => <td>
          {getCellContent(cell)}
        </td>)}
      </tr>)}
    </tbody>
  </table>
}

function getCellContent(cell: Cell) {
  switch (cell.state) {
    case 'empty':
      return '';
    case 'miss':
      return <span className='is-miss'>x</span>;
    case 'hit':
      return <span className='is-hit'></span>
  }
}

export default Board;
