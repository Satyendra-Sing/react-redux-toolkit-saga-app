import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Card, CardMedia, Grid, CardContent, Typography} from "@mui/material";
import {Link} from 'react-router-dom';

const MoviesList = () => {
    const {
        moviesList
    } = useSelector((state) => ({
        ...state.movies
    }));

    return (
        <div>
            <Grid sx={{flexGrow: 1}} container>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={3}>
                        {moviesList.Search && moviesList.Search.map((val, i) => (
                            <Grid key={i} item>
                                <Link to={"/movie/"+val.imdbID}>
                                <Card sx={{maxWidth: "350"}}>

                                        <CardMedia
                                            component="img"
                                            height="350"
                                            image={val.Poster}
                                            alt={val.title}
                                        />
                                        <CardContent>
                                            <Typography variant={"body2"} color={"text.primary"}>
                                                {val.Title}
                                            </Typography>
                                            <Typography variant={"body2"} color={"text.primary"}>
                                                ({val.Year})
                                            </Typography>
                                        </CardContent>
                                </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default MoviesList;