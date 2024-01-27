import {call, fork, put, takeLatest} from 'redux-saga/effects';
import {getMovies, setMovies, getMovie, setMovie} from "./features/movieSlice";
import {fetchMovies, fetchMovie} from "./api";

function* onLoadMoviesAsync({payload}) {
    try {
        const response = yield call(fetchMovies, payload);
        if (response.status === 200) {
            yield put(setMovies({...response.data}))
        }
    } catch (e) {
        console.log(e.message)
    }
}

function* onLoadMovieAsync({payload}) {
    try {
        const response = yield call(fetchMovie, payload);
        if (response.status === 200) {
            yield put(setMovie({...response.data}))
        }
    } catch (e) {
        console.log(e.message)
    }
}

function* onLoadMovies() {
    yield takeLatest(getMovies.type, onLoadMoviesAsync)
}

function* onLoadMovie() {
    yield takeLatest(getMovie.type, onLoadMovieAsync)
}

export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)]