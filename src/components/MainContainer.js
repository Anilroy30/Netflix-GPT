import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies)

    if(!movies) return;   // this is called as early return

    const mainMovie = movies[0];
    console.log(mainMovie);

    const {original_title, overview} = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground/>
    </div>
  )
}

export default MainContainer