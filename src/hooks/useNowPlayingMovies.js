import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    // Fetch Data from TMDB API and Update the Movie store
  const disPatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    disPatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  })
}

export default useNowPlayingMovies;