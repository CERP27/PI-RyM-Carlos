import style from './Card.module.css'
import { Link, useLocation } from 'react-router-dom';
import { addFav, filterCards, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


const Card = ({id,name,species,gender,image,origin,status,removeFav,addFav,onClose, myFavorites,filterCards})=> {
   
   const [isFav,setIsFav] = useState(false);
   const {pathname} =useLocation()

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id)
         // filterCards('allCharacters') // esto permite que se re-renderice la carta al quitarle el fav
      }else{
         setIsFav(true);
         addFav({id,name,origin,species,gender,image,status})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      
   }, [myFavorites]);
   
   return (
      
      <div className={style.card}>
         <div className={style.bttns}>
         {isFav ? (
         <button className={style.favBttn} onClick={handleFavorite}>❤️</button>
         ) : (
         <button className={style.favBttn} onClick={handleFavorite}>🤍</button>
         )}

         {pathname==='/home' ? <button className={style.boton} onClick={()=> {onClose(id);  setIsFav(false)}}>❌</button>:''}

         </div>
         
         <div className={style.photo}>
         <img src={image} alt={`Imagen de ${name}`} />
         </div>
         
         <div className={style.info}>
         <Link className={style.nameLink} to={`/details/${id}`}>
            <h2>{name}</h2>
         </Link>         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         </div>
         
      </div>
   );
}

const mapStateToProps = (state) =>{
   return {
      myFavorites : state.myFavorites
   }
}

const mapDispatchToProps= (dispatch)=>{
   return {
      addFav: (character)=>{ dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))},
      filterCards: (pepito) =>{dispatch(filterCards(pepito))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps)(Card)