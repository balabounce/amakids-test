import React from 'react';
import './Cell.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearWay } from '../../store/way';
import startFlag from '../../assets/icons/flag-regular.svg';
import successFlag from '../../assets/icons/check-solid.svg';
import timesFlag from '../../assets/icons/times-solid.svg';

const successCheck = (event, endCoord, dispatch) => {
    if(event.currentTarget.id !== endCoord && !event.currentTarget.classList.contains('start-cell')) {
        document.getElementById(event.currentTarget.id).innerHTML = `<img src=${timesFlag} alt='failCheck'/>`;
        document.getElementById(event.currentTarget.id).classList.add('fail-cell');
    } 
    document.getElementById(endCoord).innerHTML = `<img src=${successFlag} alt='successCheck'/>`;
    document.getElementById(endCoord).classList.add('end-cell');
    setTimeout(() => {
        document.querySelectorAll('.end-cell img, .fail-cell img').forEach(node => node.remove());
        dispatch(clearWay());
    }, 5000);
}

const Cell = ({start, id}) => {
    const dispatch = useDispatch();
    const endCoord = useSelector(state => state.way.yEnd) + '-' + useSelector(state => state.way.xEnd);
    return (
        <div className={start ? 'cell start-cell' : 'cell'} id={id} onClick={(event) => successCheck(event, endCoord, dispatch)}>
            {start ? <img src={startFlag} alt='startFlag'/> : null}
        </div>
    );
};

export default Cell;
