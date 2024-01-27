import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    moviesList: [],
    movie: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        getMovies(name) {
            return name;
        },
        setMovies: (state, {payload}) => {
            state.moviesList = payload;
        },
        getMovie(id) {
            return id;
        },
        setMovie(state, {payload}) {
            state.movie = payload;
        }
    }
});

export const {getMovies, setMovies, getMovie, setMovie} = movieSlice.actions;
export default movieSlice.reducer;