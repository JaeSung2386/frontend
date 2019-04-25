import { longStackSupport } from "q";

// 로그인, 로그아웃을 하기 위해 서비스(통신)을 수행하는 파일입니다.

export const userService = {
    login
};

// 실제 로그인 서비스가 작동하는 함수
function login(userid, password) {

    // 요청 방식
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({userid, password })
    };

    /* react에서는 axios, react-native에서는 fetch를 주로 사용
     axios
     - 라이브러리 다운 받아야함
     - 라이브러리 많아서 무거움
     - react에서는 fetch보다 사용하기 편함

     fetch
     - import 안해도 사용 가능
     - response timeout 제공 안함
     - 브라우저마다 지원 유무 있음
    */ 
    return fetch('/users/authenticate', requestOptions)
        // 응답 데이터 처리 함수 호출
        .then(handleResponse)
        .then(user => {
            // 로그인 성공하면 토큰을 받아온다.
            if(user.token) {
                // 응답 데이터를 localStorage에 등록
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function handleResponse(response) {
    // 응답 데이터를 text형식으로 파싱
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            // 401 = 권한 없음
            if(response.status === 401) {
                // 401에러 발생시 로그아웃 처리
                // logout();

                // 페이지 새로 고침
                window.location.reload(true);
            }
            // statusText : 응답 객체 안에 성공 여부 확인
            // 
            const error = (data && data.message) || response.statusText;
            
            // Promise.reject(error) : error로 거부된 Promise 객체 반환 
            return Promise.reject(error);
        }

        // 에러가 없으면 데이터 return
        return data;
    })
}