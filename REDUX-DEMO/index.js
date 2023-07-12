const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

// 스펠링 실수 방지를 위해 상수로 선언
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

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

function orderIcecream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty,
    };
}

function restockIcecream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    };
}

// 초기 상태 정의 (object 형태)
// const initialState = {
//     numOfCakes: 10,
//     numOfIcecreams: 20,
// }

// reducer를 분리하기 위해 state 분리
const initialCakeState = {
    numOfCakes: 10,
}

const initialIcecreamState = {
    numOfIcecreams: 20,
}

// reducer
// arguments : previousState, action
// return value : newState
// multiple reducer들로 분리 (cakeReducer, icecreamReducer)
const cakeReducer = (state = initialCakeState, action) => {
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
            };
        default: // 이전 상태 그대로 반환
            return state;
    }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1,
            };
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + action.payload,
            };
        default:
            return state;
    }
}

// conbineReducers - parameter : (key : reducer) 쌍으로 이루어진 객체
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
});

// createStore - parameter : reducer function (초기 상태를 가짐)
// store 정의
const store = createStore(rootReducer);
console.log('Initial state', store.getState());

// listener 등록
// subscribe() : 등록 취소를 처리하는 함수를 반환
const unsubscribe = store.subscribe(() => 
    console.log('update state', store.getState())
);

// dispatch - parameter : action
// dispatch()로 state 업데이트
// store.dispatch(orderCake()); // action creator가 action 반환
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(3));


// bindActionCreators - parameter : actionCreators, dispatch
// bindActionCreator 사용하여 state 업데이트
    // presentational 컴포넌트가 redux를 인식하지 않고 state 업데이트 가능
// bindActionCreator의 use case
    // 1. Redux를 인식하지 못하는 컴포넌트에 action creator를 전달하는 경우
    // 2. dispatch 또는 Redux store를 전달하지 않는 경우
const actions = bindActionCreators(
    { orderCake, restockCake, orderIcecream, restockIcecream },
    store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(2);

// listener 등록 취소
unsubscribe();