import React from 'react'

function Result({results, openpopup}) {
    return (
        <div className="result" onClick={() => openpopup(results.imdbID)} >
            <img src={results.Poster} width="30px" />
            <h3>{results.Title}</h3>
        </div>
    )
}

export default Result
