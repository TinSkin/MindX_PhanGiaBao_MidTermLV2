import React from "react";

function MovieCard({ movie, setCurrentMovie }) {
  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md w-48 flex-shrink-0 h-[300px] mt-6"
      onClick={() => setCurrentMovie(movie)}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-faded-primary to-card-faded-secondary bottom-"></div>
      <img
        src={movie.image}
        alt={movie.movieName}
        className="w-full h-full object-cover"
      />
      <div className="z-10 absolute p-2 top-0 left-0 right-0 bottom-0 flex flex-col justify-end items-center">
        <p className="text-xs text-white text-center">Episode {movie.episode}</p>
        <h3 className="text-center mt-3 text-sm font-semibold text-white">
          {movie.movieName}
        </h3>
      </div>
    </div>
  );
}

export default MovieCard;
