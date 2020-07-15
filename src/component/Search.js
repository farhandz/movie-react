import React from 'react'

function Search({handleinput , keypres}) {
    return (
        <div>
            <section>
                <input 
                type="text"
                placeholder="search...."
                className="searchbox"
                onChange={handleinput}
                onKeyPress = {keypres}
                />
            </section>
        </div>
    )
}

export default Search
