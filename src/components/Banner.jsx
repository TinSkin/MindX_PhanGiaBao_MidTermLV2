import React from "react";

function Banner({ currentMovie }) {
  return (
    <section className="container px-4 py-10 mx-auto md:py-16">
      <h1 className="text-3xl text-white font-bold mb-5 tracking-wide md:text-4xl lg:text-5xl">
        Explore
      </h1>
      <h3 className="text-2xl font-semibold mb-5 text-gray-100 md:text-2xl lg:text-3xl">
        What are you gonna watch today ?
      </h3>
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-lg">
        <div className="absolute w-full h-full bg-gradient-to-l from-faded-primary to-faded-secondary"></div>
        <img
          className="object-cover w-full h-full"
          src={currentMovie.image}
          alt={currentMovie.movieName}
        />
        <div className="absolute bottom-0 left-0 right-0 rounded-xl p-6 md:p-6 lg:p-8 m-4 md:m-6 lg:m-8">
          <h1 className="text-4xl font-bold text-white mb-5 md:text-3xl lg:text-4xl">
            {currentMovie.movieName}
          </h1>
          <p className="text-gray-300 text-base lg:text-base sm:text-sm max-sm:hidden">
            {currentMovie.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;
