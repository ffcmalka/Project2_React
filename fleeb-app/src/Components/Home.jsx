import React, { useState } from 'react'


export default function Home () {

      const[searchTerm, setSearchTerm] = useState("")
      const url = "https://rickandmortyapi.com/api/character"
     
  return (
    <>
    <div className= "plumbus-container">
      <div className= "searchInput-container">
        <h2> Rick and Morty's Character Portal Gun </h2>
          <img src="https://nothingbutgeek.com/wp-content/uploads/2017/06/RAM_LOGO_FINAL.jpg"/>
            <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
              setSearchTerm(event.target.value)
            }}/>
        </div>
    <div className="template_container">
      <h3> Click on Characters to Find Out More...</h3>
      {
        url  
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
                  <h4>{item.title}</h4>
                  <p className="status">{item.status}</p>
                </div>
              )
             }) 
       }
        </div>
    </div>
    </>
  )
}