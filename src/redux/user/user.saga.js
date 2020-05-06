import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import { googleSignInSuccess, googleSignInFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    console.log("SUCCESS", user)
    const userRef = yield call(createUserProfileDocument, user);
    console.log("SUCCESS: userRef");
    
    const userSnapshot = yield userRef.get();
    console.log("SUCCESS: userSnapshot");
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart)
  ])
}