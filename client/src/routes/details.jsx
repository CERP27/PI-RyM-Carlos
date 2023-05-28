 import axios from "axios"
 import { useParams } from "react-router-dom"
 import { useState, useEffect } from "react"
 import style from './details.module.css'
 const Details =()=>{

   const {id} = useParams()

   const [character,setCharacter] = useState({})
   
   useEffect(() => {
      axios(`http://127.0.0.1:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

   return (
      
      <div className={style.details}>
         <div className={style.pjPhoto}>
            <img src={character.image} alt={character.name} />
         </div>

         <div className={style.pjInfo}>
            <h1>{character.name}</h1>
            <h1>{character.status}</h1>
            <h1>{character.species}</h1>
            <h1>{character.gender}</h1>
            <h1>{character.origin}</h1>
         </div>
      </div>
   )
 }

 export default Details