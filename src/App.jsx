import './App.css';

import { useEffect, useState } from 'react';
import React from 'react'
import MainContainer from './maincontainer';
import Loading from './loading';

const App = () => {
  const [friends, setFriends] = useState([])
  const [search, setSearch] = useState(friends)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((data) => {
        setLoading(false)
        setFriends(data)
        setSearch(data)
      })

  }, [])



  const handleChange = (e) => {
    e.preventDefault()
    let nameSearch = e.target.value.toUpperCase()

    const searchResult = friends.filter(result => {
      return result.name.toUpperCase().includes(nameSearch)
    })
    setSearch(searchResult)
  }

  return <div>
    {loading ? <Loading /> : <MainContainer search={search} onChange={(e) => handleChange(e)} />
    }
  </div>
}

export default App;
