import style from './Card.module.css'
import { Link } from 'react-router-dom';
const Card = (props)=> {
   
   return (
      <div className={style.container}>
         <button className={style.boton} onClick={()=>props.onClose(props.id)}>Eliminar</button>
         <img className={style.photo} src={props.image} alt={`Imagen de ${props.name}`} />
         <Link to={`/details/${props.id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
      </div>
   );
}

export default Card