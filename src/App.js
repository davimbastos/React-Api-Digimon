import React, { useState, useEffect} from 'react'
import axios from 'axios'

import Header from './components/ui/Header'
import CharactersGrip from './components/characters/CharactersGrid'
import Search from './components/ui/Search'
import './App.css';

const digimons = require('./db')


const digimon = digimons.map(digimon => digimon.digimon_1)

const teste = digimon.map(teste => teste.img)

console.log(teste)
console.log(digimon)

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')



  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(`https://digimon-api.herokuapp.com/api/digimon/?name=${query}`)

      setItems(results.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharactersGrip isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
