import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStep } from '../../store/way';
import Arrow from '../Arrow/Arrow.component';
import './ArrowTable.styles.css';

const ArrowTable = () => {
    const way = useSelector(state => state.way.steps);
    const dispatch = useDispatch();
    const gamesCount = useSelector(state => state.way.gameCount);

    React.useEffect(() => {
        dispatch(makeStep());
    }, [gamesCount]);

    return (
        <div className='arrow-table'>
            {way.length === 10 ? way.map((item, i) => <Arrow key={i} step={item}/>) : null}
        </div>
    );

};

export default ArrowTable;
