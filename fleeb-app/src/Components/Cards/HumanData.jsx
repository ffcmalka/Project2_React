import { useState, useEffect } from 'react'
import axios from 'axios'
import HumanDataCss from '../Styles/HumanData.css'

export default function HumanData () {

    //making a state to set data in x
    //setting up a useEffect to control my components lifecycle x
    //organize API links / url x
    // make the darn API call, right? X
    //set our data in state and log it X
    // render our data x
    //setup Guard Opeartor x

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
    //inside of our guarded return, lets map through our ricks. x
    // set rick on line 14,22,24 to ricks plural x
      if (ricks) {
          return (
            <div className="human-grid">
              <h1> List of Humans </h1>
     { 
                ricks.map((rick) => (
                  rick.species==="Human"?
                    <div className="human-card" key={rick.id}>
                  <h2>{rick.name}</h2> 
                <img src={rick.image}/>
              <h2>ID No.{rick.id}</h2>
            </div>:null
   ) )
  
  }
             </div>      
          )} else {
              return (
                <h1> loading please wait </h1>
        )}


  
}





{/* <img src="https://wallpaperaccess.com/full/4127824.jpg"/> */}