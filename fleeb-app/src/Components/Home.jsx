import HomeCss from './Styles/Home.css'
import SearchBarCss from './Styles/SearchBar.css'
import React from 'react'
import axios from 'axios'
import SearchBar from './Cards/SearchBar'


export default function Home () {

   

// -basic layout of what I want to display X



  return (
    <>
    <div className= "plumbus-container">
    <h1> <h2> Rick </h2> <h3> and </h3> <h4> Morty's </h4> <h5> Character Portal Gun </h5> </h1>
      <div className="header-image">
        {/* <img src="https://wallpapercave.com/wp/wp6736927.jpg"/> */}
        </div>
            <SearchBar/>
            </div>
    </>
  )
}