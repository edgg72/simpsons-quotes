import React from 'react';
import './CharacterInfo.css'
import Spinner from '../Spinner/Spinner';

function CharacterInfo({ data }) {
  return (
    <div className='characterContainer' >
      {data ? (
        data.map((char, i) => {
          return (
            <div key={i} className='characterSection'>

              {i % 2 === 0 ? (
                //changing the position of the items 
                <section className='characterInfo' >
                  <div className='characterLeftSide' >
                    <h1 className='characterName' role="cName" >{char.character}</h1>
                    <p className='characterQuote' role="quote" >{`"${char.quote}"`}</p>
                  </div>
                  <img className='characterImage' src={char.image} alt={char.character} role="cImage" />
                </section>
              ) : (
                <section className='characterInfo' >
                  <img className='characterImage' src={char.image} alt={char.character} role="cImage" />
                  <div className='characterLeftSide' >
                    <h1 className='characterName' role="cName" >{char.character}</h1>
                    <p className='characterQuote' role="quote" >{`"${char.quote}"`}</p>
                  </div>
                </section>
              )}
            </div>
          )
        })
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default CharacterInfo;