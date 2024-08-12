// src/pages/Home.js
import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} title={movie.title} movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
