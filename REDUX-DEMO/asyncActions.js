const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// initial state
const initialState = {
    loading: false,
    data: [],
    error: '',
};

// action types
const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

// action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    };
};

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
};

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    };
};

// reducer
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: '',
            };
        case FETCH_USERS_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload,
            };
    }
};

// action creator
// thunk middleware 사용하면 action 객체 대신 함수를 리턴할 수 있다.
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            }).catch(error => {
                dispatch(fetchUsersFailure(error.message));
            }
        )
    };
}

// create redux store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => { console.log(store.getState()) });
store.dispatch(fetchUsers())