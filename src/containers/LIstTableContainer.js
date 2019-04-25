import React, { Component } from 'react';
import TableList from '../commute/list/TableList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as tableActions from '../store/modules/table';

class LIstTableContainer extends Component {

    render() {
        const { tables } =this.props;
        return (
            <div>
                <TableList tables={tables}/>      
            </div>
        );
    }
}

export default connect(
    (state) => ({
        tables: state.table.get('tables')
    }),
    (dispatch) => ({
        TableActions: bindActionCreators(tableActions, dispatch)
    })
)(LIstTableContainer);