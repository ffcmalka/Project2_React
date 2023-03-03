import SearchBarCss from '../Styles/SearchBar.css'
import React, { useState, useEffect } from "react"
import axios from "axios"


export default function SearchBar () {
  
  const[searchTerm, setSearchTerm] = useState("")
  const[searchInput, setSearchInput] = useState([])

      useEffect(() => {

        const getCharacter = async () => {
          const url = "https://rickandmortyapi.com/api/character"
          const response = await axios.get(url)
          console.log(response)
          setSearchInput(response.data.results)
        }

        getCharacter()
        
    }, [])

// -creating the search bar component:
    // -make a state to set data in. X
    // -create a useeffect function to control components life cylce. X
    // -create the input element X
    // -create the event handler to get triggered when someone types. X
    // -with condition statements we can render our data in the searchbar the way we want we want to using .filter and .map. X

    

    return (
      <>
    <div className= "searchInput-container">
      <div className="wrap">
        <div className="search-bar">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
              setSearchTerm(event.target.value)
            }}/>
            <i class="fa fa-search"></i>
        </div>
      </div>
      <div className="template_container">
        {
          searchInput
              .filter((item) => {
                if(searchTerm == ""){
                  return item;
                }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return item;
                }
              })
             .map((item) => {
              return(
                <div className="template" key={item.id}>
                  <img src={item.image} alt=""/>
                  <h4>{item.name}</h4>
                  <p className="id">ID: {item.id}</p>
                </div>
              )
             }) 
       }
      </div>
      </div>
    </>
    )
}