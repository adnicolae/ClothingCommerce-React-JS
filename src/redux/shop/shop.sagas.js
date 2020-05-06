import { takeLatest, call, put, all } from 'redux-saga/effects'; // listens to every action passed to it

import ShopActionTypes from './shop.types'; // we need to listen to specific shop action types

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'; // functionality for the API

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions'; // also need the actions

// the function that runs the async code that pulls in the data
export function* fetchCollectionsAsync() {
  yield console.log('I am fired');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

// this is going to pause whenever a specific action type comes in
export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart())
  ])
}