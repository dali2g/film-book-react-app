import React, { useState } from "react";
import { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=879dc796'
const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        const res = await fetch(` ${API_URL}&s=${title}`)
        const data = await res.json()

        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies("")

    }, [])

    return (
        <div className="app">
            <h1>Movies Book</h1>

            <div className="search">
                <input placeholder="Search for movies !"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}></input>
                <img src={SearchIcon} alt="search"
                    onClick={() => searchMovies(searchTerm)}></img>
            </div>
            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>Type A Film Name Before Searching</h2>
                </div>
            )}
        </div>
    )
}

export default App