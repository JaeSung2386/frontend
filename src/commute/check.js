import React, {Component} from 'react';
import Clock from 'react-live-clock';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import axios from 'axios';

// axios.defaults.headers.common['Authorization'] =
//    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNTU2NTAyNDE2LCJpYXQiOjE1NTU4OTc2MTZ9.hK9ujazIT2XpBxLn_kL_gzPEfssICpOurzI8I43D-zkTge0g7MwIReZ_B9y1jNe94gqw71OTnYOliT3AN2ZRbA';

class Check extends Component {

    constructor(props){
        super(props);

        this.state = {
            gotoDisabled: false,
            gotoVariant: "primary",
            offDisabled: true,
            offVariant: "secondary"
        }
    }

    goTo = async () => {
        await axios.post("http://localhost:8076/work/goto", {no: 1, id:"admin", commute: "출근", recordType: "출근 입력"})
            .then((response) => {
                console.log(response);

                this.setState({
                    gotoDisabled: true,
                    gotoVariant: "secondary",
                    offDisabled: false,
                    offVariant: "primary"
                })
            })
            .catch((error) =>  console.log(error));
    }

    goOff = async() => {
        await axios.post("http://localhost:8076/work/go-off", {no: 1, id: "admin", commute: "퇴근", recordType: "퇴근 입력"})
            .then((response) => {
                console.log(response);

                this.setState({
                    gotoDisabled: false,
                    gotoVariant: "primary",
                    offDisabled: true,
                    offVariant: "secondary"
                })
            })
            .catch((error) => console.log(error));
    }

    render(){
        return (
            <div className="container-fluid">
                <h1 className="h3 mb-1 text-gray-800">
                    <Clock format={"HH:mm:ss A MM/DD"} ticking={true} />
                </h1>

                <Button variant={this.state.gotoVariant} size="lg" disabled={this.state.gotoDisabled} onClick={() => {
                    console.log("출근 버튼 클릭");

                    this.goTo();
                }}>
                    출근
                </Button>

                <Button variant={this.state.offVariant} size="lg" disabled={this.state.offDisabled} onClick={() => {
                    console.log("퇴근 버튼 클릭");

                    this.goOff();
                }}>
                    퇴근
                </Button>

                <br/><br/><br/><br/><br/>

                <Link to="list">
                    <Button variant="primary" size="lg" onClick={() => {

                    }}>
                        출퇴근 조회
                    </Button>
                </Link>

            </div>
        );
    }
};

export default Check;