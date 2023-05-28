import { connect } from 'react-redux';
import Card from '../Card/Card';
import { filterCards, orderCards } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './Favorites.module.css'


const Favorite = ({myFavorites})=>{

   const [aux,setAux] = useState(false)

   const dispatch = useDispatch()

   const handleOrder = (event) => {
      dispatch(orderCards(event.target.value))
      setAux(true)
   }

   const handleFilter = (event) =>{      
      dispatch(filterCards(event.target.value))
   }
    return(
        <div>
         <div>
         <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
         </select>
         </div>
         
         <div>
            <select onChange={handleFilter}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">Unknown</option>
               <option value="allCharacters">All Characters</option>
            </select>
         </div>
         <div className={style.container}>
            {
            myFavorites.map(({id,name,status,species,origin,gender,image,onClose}) =>{
               return(
               <>
                  <Card
                     id={id}
                     key={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin}
                     image={image}
                     onClose={onClose}
                  />
               </>
                  )
            })
            }  
         </div>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
       myFavorites : state.myFavorites
    }
 }

export default connect(
    mapStateToProps,
    null
)(Favorite)