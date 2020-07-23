import React, { useState, useEffect} from 'react'

import Header from './components/ui/Header'
import CharactersGrip from './components/characters/CharactersGrid'
import Search from './components/ui/Search'
import './App.css';

const db = require('./db')


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')



  useEffect(() => {
    const fetchItems = async () => {
      
    const digimons = db.map(digimons => digimons.digimon_id)

    //console.log(digimons)
    
    setItems(digimons)
    setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharactersGrip isLoading={isLoading} items={items}
      />
    </div>
  );

}

export default App;
