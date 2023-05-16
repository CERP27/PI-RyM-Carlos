 import axios from "axios"
 import { useParams } from "react-router-dom"
 import { useState, useEffect } from "react"

 const Details =()=>{

   const {id} = useParams()

   const [character,setCharacter] = useState({})
   
   useEffect(() => {
      axios(`http://127.0.0.1:3001/rickandmorty/character/:${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return (

      <div >
         <h1>{character.name}</h1>
         <h1>{character.origin?.name}</h1>
      </div>
   )
 }

 export default Details