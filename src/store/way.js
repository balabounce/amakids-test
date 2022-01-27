import { createSlice } from '@reduxjs/toolkit';
import { DIMENSION } from '../utils/utils';

export const waySlice = createSlice({
    name: 'waySlice',
    initialState: {
        xStart: Math.floor(Math.random() * DIMENSION),
        yStart: Math.floor(Math.random() * DIMENSION),
        steps: [],
        xEnd: 0,
        yEnd: 0,
        gameCount: 0
    },
    reducers: {
        makeStep: (state) => {
            state.xEnd = state.xStart;
            state.yEnd = state.yStart;
            const switcher = () => {
                const randStep = Math.floor(Math.random() * 4);
                switch(randStep) {
                    case 0: 
                        if(state.yEnd + 1 < DIMENSION) {
                            state.steps.push(0);
                            state.yEnd += 1;
                        } else state.steps.push(false); 
                        break;
                    case 1: 
                        if(state.yEnd - 1 >= 0) {
                            state.steps.push(1);
                            state.yEnd -= 1;
                        } else state.steps.push(false);
                        break;
                    case 2:
                        if(state.xEnd - 1 >= 0) {
                            state.steps.push(2);
                            state.xEnd -= 1;
                        } else state.steps.push(false);
                        break;
                    case 3: 
                        if(state.xEnd + 1 < DIMENSION) {
                            state.steps.push(3);
                            state.xEnd += 1;
                        } else state.steps.push(false);
                        break;
                    default:
                        console.log('Error');
                }
                if(state.steps[state.steps.length - 1] === false) {
                    state.steps.pop();
                } 
                if(state.steps.length !== 10) {
                    switcher()
                } else if(state.xStart === state.xEnd && state.yStart === state.yEnd) {
                    state.steps.pop();
                    switcher();
                }
             } 
         switcher();
        },
        clearWay: (state) =>  {
            state.xStart = Math.floor(Math.random() * DIMENSION); 
            state.yStart = Math.floor(Math.random() * DIMENSION); 
            state.steps = [];
            state.gameCount += 1;
        }

    }
});

export const { makeStep, clearWay } = waySlice.actions;

export default waySlice.reducer;
