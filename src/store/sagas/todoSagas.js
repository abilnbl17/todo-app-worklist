// src/store/sagas/todoSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios"; // Anda akan menginstal axios nanti
import { setTodos, setLoading, setError } from "../reducers/todoSlice";

// Worker Saga: Ambil data dari API
function* fetchApiDataSaga(action) {
  try {
    yield put(setLoading(true)); // Tampilkan loading
    // Ganti URL ini dengan API publik yang ingin Anda gunakan
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    yield put(setTodos(response.data));
    yield put(setLoading(false)); // Sembunyikan loading
  } catch (e) {
    yield put(setError(e.message));
    yield put(setLoading(false)); // Sembunyikan loading meskipun error
  }
}

// Watcher Saga: Mendengarkan action FETCH_API_DATA
export function* watchFetchApiData() {
  yield takeLatest("FETCH_API_DATA", fetchApiDataSaga);
}
