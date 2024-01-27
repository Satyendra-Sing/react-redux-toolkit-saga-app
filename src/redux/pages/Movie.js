import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {Typography, Button} from "@mui/material";
import useStyles from "../styles"
import {getMovie} from "../features/movieSlice";

const Movie = (props) => {
    const {movie} = useSelector((state) => ({...state.movies}));
    const dispatch = useDispatch();
    const classes = useStyles();
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (id) {
            dispatch(getMovie(id));
        }
    }, [id]);
    return (
        <section className={classes.section}>
            <img src={movie?.Poster} alt={movie?.Title}/>
            <div>
                <Typography align='left' variant='h3' gutterButton component="h2">
                    {movie?.Title}
                </Typography>
                <Typography align='left' variant='h3' gutterButton component="h5">
                    Year : {movie?.Year}
                </Typography>
                <Typography align='left' variant='body1' gutterButton component="p">
                    Poster : {movie?.Poster}
                </Typography>
                <Typography align='left' variant='h6' gutterButton component="h6">
                    Director : {movie?.Director}
                </Typography>
                <Button variant="container" onClick={() => navigate("/")}>
                    Go Back
                </Button>
            </div>
        </section>
    );
};

export default Movie;