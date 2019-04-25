import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../lib/api';

//action types
const GET_TABLE_LIST = 'table/GET_TABLE_LIST';

export const getTableList = createAction(GET_TABLE_LIST, api.getTableList, meta => meta);

const initialState = Map({
    tables: List(),
    lastPage: null
});

export default handleActions({
    ...pender({
        type: GET_TABLE_LIST,
        onSuccess: (state, action) => {
            const { data: tables } = action.payload;
            const lastPage = action.payload.headers['last-page'];
            return state.set('tables', fromJS(tables))
                        .set('lastpage', parseInt(lastPage, 10));
        }
    })
}, initialState)