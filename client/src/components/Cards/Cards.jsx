import Card from '../Card/Card';
import style from './Cards.module.css'

const Cards = (props)=> {
   
   const {characters, onClose} = props
   
   
   return(
      <div className={style.container}>
         {
            characters.map(({id,name,status,species,origin,gender,image}) =>{
               return(
               <>
                  <Card
                     id={id}
                     key={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={origin.name}
                     image={image}
                     onClose={onClose}
                  />
               </>
               )
            })
         }
      </div>
   )
}

export default Cards