import React from 'react';
import arrowUp from '../../assets/icons/arrow-up-solid.svg';
import arrowDown from '../../assets/icons/arrow-down-solid.svg';
import arrowLeft from '../../assets/icons/arrow-left-solid.svg';
import arrowRight from '../../assets/icons/arrow-right-solid.svg';
import './Arrow.styles.css';

const chooseArrow = (step) => {
   return step === 0 ? <img src={arrowDown} alt='arrowDown'/> :
            step === 1 ? <img src={arrowUp} alt='arrowUp'/> :
            step === 2 ? <img src={arrowLeft} alt='arrowLeft'/> :
            step === 3 ? <img src={arrowRight} alt='arrowRight'/> :
            null;
};

const Arrow = ({step}) => {
    const elem = chooseArrow(step); 
    return(
        <div className='arrow-cell'>
            {elem}
        </div>
    )
};

export default Arrow;
