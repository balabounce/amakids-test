import { configureStore } from '@reduxjs/toolkit';
import waySlice from './way';

export default configureStore({
    reducer: {
        way: waySlice,
    }
});
