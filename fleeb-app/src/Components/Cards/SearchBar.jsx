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



    

    return (
      <>
    <div className= "searchInput-container">
        <div className="search-bar">
          <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
              setSearchTerm(event.target.value)
            }}/>
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