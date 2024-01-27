import React from 'react';
import Search from "../components/Search";
import MoviesList from "../features/MoviesList";

const Home = () => {
    return (
        <div>
            <Search/>
            <MoviesList/>
        </div>
    );
};

export default Home;