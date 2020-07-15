import React,{useState} from 'react'
import axios from 'axios'
import Search from './component/Search'
import Results from './component/Results'
import Popup from './component/Popup'

function App() {
  const [state, setState] = useState({
    s: "",
    result: [],
    selected: {}
  })

  const keypres = e => {
    if(e.key == "Enter") {
      fetch(`http://www.omdbapi.com/?&apikey=3f495d55&s=${state.s}`)
      .then(data => {
        return data.json()
    }) .then(ress => {
      let result = ress.Search
      setState(prevState=>{
       return{...prevState, result }
        
      })
    })

    }
  }


  const handleinput = e => {
      let s = e.target.value

      setState(prevState => {
        return {...prevState, s}
      })
  }

  const openpopup = (id) => {
    axios(`http://www.omdbapi.com/?&apikey=3f495d55&i=${id}`).then(({ data }) => {
      let selected = data;

      setState(prevState=>{
        return {...prevState, selected}
      })
      
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  console.log(state.selected)

  return (
    <div>
        <header>
            <h1>Movie Database</h1>
        </header>
        <main>
          <Search handleinput={handleinput} keypres={keypres} />
        {typeof state.result !== "undefined" ? <Results result={state.result} openpopup={openpopup} />: ('data tidak ditemukan')}
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup}/> : false}
        </main>
    </div>
  )
}

export default App
