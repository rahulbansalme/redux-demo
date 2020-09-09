import { put, takeLatest } from 'redux-saga/effects'

function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchAsyncCount() {
    yield put({type: "IS_FETCHING_COUNT", payload: true});
    yield later(1000);
    yield put({type: "FETCH_ASYNC_COUNT_DONE"});
    yield put({type: "IS_FETCHING_COUNT", payload: false});
}

function* mySaga() {
  yield takeLatest("FETCH_ASYNC_COUNT", fetchAsyncCount);
}

export default mySaga;