import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import Search from '../Search';

// axios.defaults.headers.common['Authorization'] =
//    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNTU2NTAyNDE2LCJpYXQiOjE1NTU4OTc2MTZ9.hK9ujazIT2XpBxLn_kL_gzPEfssICpOurzI8I43D-zkTge0g7MwIReZ_B9y1jNe94gqw71OTnYOliT3AN2ZRbA';


class List extends Component {

    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    findAll = async() => {
        await axios.get("http://localhost:8076/commute/list/1")
            .then((response) => {
                console.log(response);

                const array = response.data.data.map((item) => {
                    return {
                        user_no: item.userNo,
                        insert_user_id: item.insertUserId,
                        day: item.day,
                        total_worktime: item.totalWorktime,
                        state: item.state,
                        commute: item.commute
                    }
                })

                this.setState({
                    data: array
                })
            })
            .catch((error) => console.log(error));
    }

    componentWillMount() {
        this.findAll();
        console.log(this.state.data);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1 className="h3 mb-1 text-gray-800">
                    출퇴근 조회
                    <Search />
                </h1>

                <div>
                    <Table responsive hover>
                        <thead>
                        <tr>
                            <th>User No</th>
                            <th>이름</th>
                            <th>일자</th>
                            <th>총근무시간</th>
                            <th>상태</th>
                            <th>구분</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.user_no}</td>
                                        <td>{item.insert_user_id}</td>
                                        <td>{item.day}</td>
                                        <td>{item.total_worktime}</td>
                                        <td>{item.state}</td>
                                        <td>{item.commute}</td>
                                    </tr>
                                }
                            )
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
};

export default List;