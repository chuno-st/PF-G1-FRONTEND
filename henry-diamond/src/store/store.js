import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducer';

const store = configureStore(
    {reducer: rootReducer}
    )

export default store