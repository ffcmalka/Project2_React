import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function CharacterData () {

    //making a state to set data in x
    //setting up a useEffect to control my components lifecycle x
    //organize API links / url x
    // make the darn API call, right? X
    //set our data in state and log it X
    // render our data
    //setup Guard Opeartor

    const [ricks, setRicks] = useState([])

    useEffect(() => {
        const url = "https://rickandmortyapi.com/api/character"

        const getRick = async () => {
          const response = await axios.get(url)
          console.log(response)
          setRicks(response.data.results)
        }

        getRick()
        
    }, [])


    console.log(ricks)
    //Our state of rick is an array x
    //inside of our guarded return, lets map through our ricks. 
    // set rick on line 14,22,24 to ricks plural x
  if (ricks) {
    return (
      <div className="character">
        <div className="character-header">
          {
            ricks.map((rick) => (
              <div className="chracter-card" key={rick.id}>
                <img src={rick.image} alt={rick.name}/>
                <h1>{rick.name}</h1>
                <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
              </div>
            ))
          }

        </div>
      </div>
    )} else {
      return (
        <h1> loading please wait... </h1>
      )
    }
    


  
}





{/* <img src="https://wallpaperaccess.com/full/4127824.jpg"/> */}