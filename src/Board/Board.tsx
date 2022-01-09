import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { clickCell } from '../features/board/boardSlice';
import './board.css'

type Board = Row[];
type Row = Cell[];
type Cell = 'empty' | 'hit' | 'miss';

interface BoardProps {
  board: Board
}

function Board(props: BoardProps) {
  const dispatch = useAppDispatch();

  function onCellClicked(e: unknown, cell: Cell, rowIndex: number, columnIndex: number) {
    console.log(`clicked on ${JSON.stringify(cell)}`);
    dispatch(clickCell([rowIndex, columnIndex]));
  }

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
      {board.map((row: Row, rowIndex: number) => <tr key={`row_${rowIndex}`}>
        <th>{rowIndex + 1}</th>
        {row.map((cell: Cell, columnIndex: number) => <td key={`cell_${columnIndex}`} onClick={(e) => {onCellClicked(e, cell, rowIndex, columnIndex);}}>
          {getCellContent(cell)}
        </td>)}
      </tr>)}
    </tbody>
  </table>
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
