// 액션 생성자 파일입니다.

// 로그인, 로그아웃에 대한 서비스(통신) import
import { userService } from '../_services';
// 액션 타입 import
import { userConstants } from '../_constants';

// 액션 목록
export const userActions = {
    login
}

// login 액션
function login(userid, password) {
    
    // 로그인 이벤트(login 버튼 클릭)가 발생할 경우
    // dispatch 함수를 통해 request 액션을 스토어한테 넘겨준다.
    return dispatch => {
        dispatch(request({ userid }));

        userService.login(userid, password)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    // 액션 type과 유저의 정보를 스토어한테 넘겨줄 때 호출되는 함수들
    function request( user ) {
        return
        { type: userConstants.LOGIN_REQUEST, user }
    }
    function success( user ) { 
        return 
        { type: userConstants.LOGIN_SUCCESS, user } 
    }
    function failure( error ) { 
        return 
        { type: userConstants.LOGIN_FAILURE, error } 
    }
}