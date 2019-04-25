import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
//import { pender } from 'redux-pender';

//import * as api from 'lib/api';

const CHANGE_INPUT = 'list/CHANGE_INPUT';

export const changeInput = createAction(CHANGE_INPUT);

const initialState = Map({
    startdate: '',
    enddate: '',
    name: ''
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { name, value} = action.payload;
        return state.set(name, value);
    }
}, initialState)