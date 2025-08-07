// src/store/sagas/rootSaga.js
import { all } from "redux-saga/effects";
import { watchFetchApiData } from "./todoSaga";

export default function* rootSaga() {
  yield all([
    watchFetchApiData(),
    // Tambahkan watcher saga lainnya di sini
  ]);
}
