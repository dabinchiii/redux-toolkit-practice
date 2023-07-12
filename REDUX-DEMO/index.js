const redux = require('redux');
const createStore = redux.createStore;

// 스펠링 실수 방지를 위해 상수로 선언
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

// action creator : a function that returns an object
function orderCake() {
    // action 정의 (action: type 프로퍼티를 가지는 객체)
    return {
        type: CAKE_ORDERED,
        payload: 1, // payload : 전송할 추가 정보를 위한 프로퍼티 (redux convention)
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    };
}

// 초기 상태 정의 (object 형태)
const initialState = {
    numOfCakes: 10,
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
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload,
            }
        default: // 이전 상태 그대로 반환
            return state;
    }
}

// parameter : reducer function (초기 상태를 가짐)
// store 정의
const store = createStore(reducer);
console.log('Initial state', store.getState());

// listener 등록
// subscribe() : 등록 취소를 처리하는 함수를 반환
const unsubscribe = store.subscribe(() => 
    console.log('update state', store.getState())
);

// parameter : action
// dispatch()로 state 업데이트
store.dispatch(orderCake()); // action creator가 action 반환
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

// listener 등록 취소
unsubscribe();