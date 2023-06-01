import Card from '../Card/Card';
import style from './Cards.module.css'

const Cards = (props)=> {
   
   const {characters, onClose} = props
   
   
   return(
      <div className={style.container}>
         {
            characters.map(({id,...info}) =>{
               return(
               <>
                  <Card
                     id={id}
                     key={id}
                     {...info}
                  />
               </>
               )
            })
         }
      </div>
   )
}

export default Cards

// characters.map(({id,name,status,species,origin,gender,image}) =>{