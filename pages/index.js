import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Sidemenu from "../components/sidemenu";

import React, {
  useState,
  useEffect,
  Component,
} from "react";
import { getMovies, getCategories } from "./../actions/index";

const Home = (props) => {
  
  
  const {images, categories, movies} = props;

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidemenu categories={categories} />
            </div>

            <div className="col-lg-9">
              <Carousel images={images} />
              <div className="row">
                <MovieList
                  movies={movies || []}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie) =>{
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name,
    }
  })

  return {
    movies: movies,
    images: images,
    categories: categories
  };
};


export default Home;
