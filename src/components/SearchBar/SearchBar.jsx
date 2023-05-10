import { useState } from "react";
import style from './SearchBar.module.css'

 const SearchBar =({onSearch}) =>{
   const [id,setId] = useState('')

   const handleChange = (e) =>{
      setId(e.target.value)
   }
   
   const random = ()=>{
      const id = Math.floor(Math.random() * (826 - 0 + 1) -0);
      onSearch(id);
   };

   return (
      <div className={style.inputg}>         
         <button className={style.submiti} onClick={random}><span>🌀</span></button>                      
         <input placeholder="Ingresa el ID del personaje"  id="input-field" type='search' value={id} onChange={handleChange}/>
         <button className={style.submit} onClick={()=>onSearch(id)}><span>➕</span></button>    
         
      </div>
   );
}

export default SearchBar

// const input = document.getElementById('search')
// const characterID=input.value;

// if(characterID){

//    setId(id => id=characterID)
//    // onSearch(characterID);
//    input.value =''
// }