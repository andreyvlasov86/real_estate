import {put, call, takeEvery} from 'redux-saga/effects';
import { collectDataSuccess, collectDataError, deleteDataSuccess} from './actions'
import Api from '../../service/api';



export default function* watchFilesData() {
  yield takeEvery('COLLECT_DATA', fetchFilesAsync);
  yield takeEvery('DELETE_DATA', deleteFilesAsync);
  yield takeEvery('COLLECT_DATA_PING', pingFilesAsync)
}

export function* fetchFilesAsync() {
  try {
    const response = yield call(() => {
      return Api.get('get_data/')
      }
    );
    //console.log('fetchFilesAsync', response.data);
    yield put(collectDataSuccess({loading: true, id: response.data.id}))
  } catch (error) {
    //console.log('ERROR', error);
    yield put(collectDataError())
  }
}

export function* pingFilesAsync(action) {
  try {
    const response = yield call(() => {
      return Api.get(`ping_status/${action.payload}`)
      }
    );
    console.log('pingFilesAsync', response.data)
    if (response.data.status === 'false') {
      throw response
    }
    if (response.data.status === 'complete') {
      console.log('pingFilesAsync complete', response.data);
      yield put(collectDataSuccess({loading: false}))
    } else {
      console.log('pingFilesAsync continue', response.data);
      yield put(collectDataSuccess({loading: true, data: response.data}))
    }
  } catch (error) {
    console.log('ERROR');
    yield put(collectDataError())
  }
}

export function* deleteFilesAsync() {
  try {
    yield call(() => {
      return Api.get('del_data/')
      }
    );
    yield put(deleteDataSuccess())
  } catch (error) {
    console.log('ERROR');
  }
}


