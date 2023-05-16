import yo from '../utils/yo.jpeg'
import style from './about.module.css'

const About = ()=>{
    return (
        <div className={style.about}> 
            <img className={style.portrait} src={yo} alt='Foto del autor del proyecto: Carlos Rojas'/>
            
            <div className={style.container}>
                <div className={style.box}>
                    <span className={style.title}>Carlos Enrique Rojas Perez</span>
                <div>
                    <strong>RICK Y MORTY APP</strong>
                    <p>Proyecto Integrador</p>
                    <span></span> <span></span>
                </div>
                </div>
            </div>            
        </div>
        
        
    )
}

export default About