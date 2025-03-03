import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    getPopularMovies();
  })
}

export default usePopularMovies;