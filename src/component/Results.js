import React from 'react'
import Result from './Result'

function Results({result , openpopup}) {
    return (
        <div>
            <section className="results">
                {result.map(results=> (
                    <Result key={results.imdbID}  results={results} openpopup={openpopup} />
                ))}
            </section>
        </div>
    )
}

export default Results
