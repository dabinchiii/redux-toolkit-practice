const CAKE_ORDERED = 'CAKE_ORDERED'; // 스펠링 실수 방지를 위해 상수로 선언

// action creator : a function that returns an object
function orderCake() {
    // action 정의 (action: type 프로퍼티를 가지는 객체)
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}

// 초기 상태 정의 (object 형태)
const initialState = {
    numOfCakes: 10,
    anotherProperty: 0,
}

// reducer
// arguments : previousState, action
// return value : newState
const reducer = (state = initialState, action) => {
    switch(action.type) { // switch문으로 action type에 따라 분기
        case CAKE_ORDERED:
            return {
                ...state, // state object 복사
                numOfCakes: state.numOfCakes - 1, // 변경 필요한 프로퍼티만 업데이트
            };
        default: // 이전 상태 그대로 반환
            return state;
    }
}