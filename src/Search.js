import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Search extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            startdate: '',
            enddate: '',
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    */
    /*
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    */
   
    handleChange = (e) => {
        const { onChangeInput } = this.props;
        const { value, name } = e.target;
        onChangeInput({name, value});
    }

    /*
    handleSubmit(e) {
        var search = {
            name: this.state.name,
            startdate: this.state.startdate,
            enddate: this.state.enddate
        }

        axios.post('http://localhost:8080/work/goto', search)
        .then( response => {
            alert(response);
        })
        .catch( response => {
            alert(response);
        });
    }
*/
    // get 방식
    /*
    handleSubmit(e) {
        axios.get('http://localhost:8080/test/list')
        .then( response => {
            alert(response);
        })
        .catch( response => {
            alert(response);
        });
    }    
    */

    render() {
        const { handleChange,  } = this;
        const { startdate, enddate, name, onSubmit } = this.props;

        return (
            <div>
                <form>
                    <input
                        title="시작 날짜"
                        type="date"
                        value={startdate}
                        onChange={handleChange}
                        name="startdate"
                    />
                    <input
                        title="끝 날짜"
                        type="date"
                        value={enddate}
                        onChange={handleChange}
                        name="enddate"
                    />
                    <input
                        title="이름"
                        type="text"
                        value={name}
                        onChange={handleChange}
                        name="name">
                    </input>
                    <Button onClick={onSubmit} theme="outline">검색</Button>
                    </form>
            </div>
        );
    }
}

export default Search;