const redux = require('redux');
const produce = require('immer').produce;

const initialState = {
    name: 'Vishwas',
    address: { // object state
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
    },
};

const STREET_UPDATED = 'STREET_UPDATED'; // action type

// action creator
const updateStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street,
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case STREET_UPDATED:
        //     return {
        //         ...state,
        //         address: {
        //             ...state.address,
        //             street: action.payload,
        //         },
        //     }
            return produce(state, (draft) => { // produce가 위의 주석 처리된 코드로 해석해준다.
                draft.address.street = action.payload;
            }); // current state, state의 사본을 받는 함수
        default:
            return state; 
    }
}

// store 생성
const store = redux.createStore(reducer);
console.log('Initial State', initialState);

// listener 등록
const unsubscribe = store.subscribe(() => {
    console.log('Updated State', store.getState());
});

// dispatch로 state 변경
store.dispatch(updateStreet('456 Main St'));

// listener 등록 취소
unsubscribe();