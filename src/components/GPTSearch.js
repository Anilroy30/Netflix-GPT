import React from 'react'
import GPTSearchEngine from './GPTSearchEngine'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_LOGO } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img className='h-screen object-cover' src={BG_LOGO} alt="logo"/>
    </div>
    <div>
        <GPTSearchEngine/>
        <GPTMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearch