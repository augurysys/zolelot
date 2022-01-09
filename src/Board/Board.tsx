import React from 'react';
import './board.css'

type Board = Row[];
type Row = Cell[];
type Cell = 'empty' | 'hit' | 'miss';

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
      {board.map((row: Row, index: number) => <tr key={`row_${index}`}>
        <th>{index + 1}</th>
        {row.map((cell: Cell, index: number) => <td key={`cell_${index}`} onClick={(e) => {onCellClicked(e, cell);}}>
          {getCellContent(cell)}
        </td>)}
      </tr>)}
    </tbody>
  </table>
}

function onCellClicked(e: unknown, cell: Cell) {
  console.log(`clicked on ${JSON.stringify(cell)}`);
}

function getCellContent(cell: Cell) {
  switch (cell) {
    case 'empty':
      return '';
    case 'miss':
      return <span className='is-miss'>x</span>;
    case 'hit':
      return <span className='is-hit'></span>
  }
}

export default Board;
