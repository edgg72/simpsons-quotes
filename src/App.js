import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

import CharacterInfo from './components/CharacterInfo/CharacterInfo';
import { NotFound } from './helpers/NotFound';

const API_URL = "https://simpsons-api-quotes.herokuapp.com/"

function App() {

  const [backendData, setBackendData] = useState();
  const [query, setQuery] = useState("");
  const [numberOfQuotes, setNumberOfQuotes] = useState(1)

  useEffect(() => {
    async function fetchData() {
      axios.get(API_URL).then(
        response => setBackendData(response.data)
      )
    }
    fetchData();
  }, [])

  const searchCharacter = async (input, numQuotes) => {
    //setting this to null so that the loading spinner appears 
    setBackendData(null)
    axios.get(API_URL, {
      params: {
        input,
        numQuotes
      }
    }).then(response => {
      //do this when the API response is empty
      if (response.data.length === 0) setBackendData(NotFound)
      else setBackendData(response.data)
    }
    )
  }

  const keyDownHandler = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchCharacter(event.target.value, numberOfQuotes)
    }
  };

  const numberOfQuotesHandler = value => {
    //avoiding values lesser or equal than zero
    if (value <= 0) {
      setNumberOfQuotes(1)
    } else setNumberOfQuotes(value)
  }

  return (
    <main className='mainContainer'>
      <img
        src='https://cdn.glitch.me/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2Fsimpsons.PNG'
        alt='title'
        className='titleImage'
      />
      <section className='searchContainer'>
        <input
          placeholder='Type a character, then press Enter or click Search'
          value={query}
          onKeyDown={event => keyDownHandler(event)}
          onChange={(event) => setQuery(event.target.value)}
          className='searchInput'
          role="searchInput"
        />
        <label className='quotesLabel' htmlFor="quotes">How many quotes?</label>
        <input
          type="number"
          id="quotes"
          name="points"
          step="1"
          value={numberOfQuotes}
          className='stepInput'
          onChange={e => numberOfQuotesHandler(e.target.value)}
        />
        <button
          role="searchButton"
          className='searchButton'
          onClick={() => searchCharacter(query, numberOfQuotes)}
        >Search
        </button>
      </section>
      <CharacterInfo data={backendData} />
    </main>
  )
}

export default App