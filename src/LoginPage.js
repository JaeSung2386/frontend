import React, {Component} from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

export class LoginPage extends Component {

    constructor(props) {
        super(props);

        // 상태 초기화
        this.state = {
            userid: '',
            password: '',
            // submit 클릭 여부
            submitted: false
        };

        // 바인딩
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // id, password 입력시 속성값 변경
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value});
    }

    // 로그인 버튼 클릭시 submitted값 변경
    handleSubmit(e) {
        // refresh(새로고침) 막음
        e.preventDefault();


        this.setState({ submitted: true });
        const { userid, password } = this.state;
        
        /*
        const submitted = this.state.submitted;
        console.log( "userid: " + userid );
        console.log( "password: " + password );
        console.log( "submitted: " + submitted );
        */
        const { dispatch } = this.props;
        if( userid && password ) {
            dispatch(userActions.login(userid, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { userid, password, submitted } = this.state;
        return(
            <div>
                <div>
                    Username: test<br />
                    Password: test
                </div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='userid'>Username</label>
                        <input type='text' name='userid' value={userid} onChange={this.handleChange} />
                        { submitted && !userid &&
                            <div>Userid is required</div>
                        }
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' value={password} onChange={this.handleChange} />
                        { submitted && !password &&
                            <div>Password is required</div>
                        }
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
                {/*
                <div>name {this.state.userid}</div>
                <div>password {this.state.password}</div>
                <div>submitted {this.state.submitted}</div>
                */}
            </div>
        )
    }
}

// connect()를 사용하기 위해 mapStateToProps 함수 정의
// state를 컴포넌트의 props에 매핑
// 현재 권한을 넘겨줌
function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

// mapStateToProps를 사용하여 LoginPage 컴포넌트를 store에 연결 
LoginPage = connect(mapStateToProps)(LoginPage);

// 타입 체크 = validation
/*
LoginPage.propTypes = {
    userid: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    submitted: propTypes.bool.isRequired
}
*/
export default LoginPage; 