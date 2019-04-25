import React, { Component } from 'react';
import Search from '../Search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as listActions from '../store/modules/list';
import * as tableActions from '../store/modules/table';

class ListSearchContainer extends Component {

    handleChangeInput = ({name, value}) => {
        
        const { ListActions } = this.props;
        ListActions.changeInput({name, value});
    }

    handleSubmit = async () => {
        console.log("this.props 내용");
        console.log(this.props);
        
        const { tableActions } = this.props;
        const { startdate, enddate, name } = this.props;
        const search = {
            startdate,
            enddate,
            name
        }

        try {
            console.log('search: ' + search.name);
            console.log('tableActions 내용');
            console.log(tableActions.getTableList());
            //await tableActions.getTableList(search);

          } catch (e) {
            console.log(e);
          }

        /*
        const { tag, page, ListActions } = this.props;
        ListActions.getPostList({
        page,
        tag
        });
        */
    }

    render() {
        const { startdate, enddate, name } =this.props;
        const { handleChangeInput, handleSubmit } = this;
        return (
            <Search
                startdate={startdate}
                enddate={enddate}
                name={name}
                onChangeInput={handleChangeInput}
                onSubmit={handleSubmit}
            />
        );
    }
}

//구독
export default connect(
    (state) => ({
        startdate: state.list.get('startdate'),
        enddate: state.list.get('enddate'),
        name: state.list.get('name')
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch),
        TableActions: bindActionCreators(tableActions, dispatch)
    })
)(ListSearchContainer);