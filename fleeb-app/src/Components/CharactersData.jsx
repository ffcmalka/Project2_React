import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CharacterData () {

    //making a state to set data in x
    //setting up a useEffect to control my components lifecycle x
    //organize API links / url x
    // make the darn API call, right? X
    //set our data in state and log it X
    // render our data
    //setup Guard Opeartor

    const [rick, setRick] = useState({})

    useEffect(() => {
        const url = "https://rickandmortyapi.com/api/character"

        const getRick = async () => {
          const response = await axios.get(url)
          console.log(response)
          setRick(response.data)
        }

        getRick()

    }, [])


      console.log(rick)

      if (rick && rick.name) {
          return ( 
          <div>
            <h2>{rick.name}</h2>
            <img src={rick.image}/>
          </div>
        )
      } else {
        return (
          <h1> loading please wait </h1>
        )
      }


  
}