import React from 'react'
import GPTSearchEngine from './GPTSearchEngine'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_LOGO } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img src={BG_LOGO} alt="logo"/>
        </div>

        <GPTSearchEngine/>
        <GPTMovieSuggestions/>
    </div>
  )
}

export default GPTSearch