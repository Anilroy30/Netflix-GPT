import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
    disPatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    getTopRatedMovies();
  })
}

export default useTopRatedMovies;