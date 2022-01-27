import React from 'react';
import { useSelector } from 'react-redux';
import Cell from '../Cell/Cell.component';
import './CellTable.styles.css';
import { DIMENSION } from '../../utils/utils';

const CellTable = () => {
    const cellsArr = [];
    const x = useSelector(state => state.way.xStart);
    const y = useSelector(state => state.way.yStart);
    console.log(`start flag: x = ${x}, y = ${y}`)
    for(let i = 0; i < DIMENSION; i++) {
        for(let j = 0; j < DIMENSION; j++) {
            i === y && j === x ? cellsArr.push(<Cell key={i+'-'+j} id={i+'-'+j} start={true}/>) : cellsArr.push(<Cell key={i+'-'+j} id={i+'-'+j}/>)
        }
    }

    return (
        <div className='cell-grid'>
            { cellsArr.map(cell => cell) }
        </div>
    );
};

export default CellTable;
