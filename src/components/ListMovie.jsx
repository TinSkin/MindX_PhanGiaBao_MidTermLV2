import React from "react";

// Import Components
import MovieCard from "./MovieCard";

function ListMovie({ listMovie, setCurrentMovie }) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-4xl text-white font-bold mb-2 tracking-wide">
        New Release
      </h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 gap-3">
        {listMovie.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            setCurrentMovie={setCurrentMovie}
          />
        ))}
      </div>
    </div>
  );
}

export default ListMovie;
