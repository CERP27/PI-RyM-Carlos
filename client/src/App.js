import './App.css';
import axios from 'axios'
import {Routes , Route , useLocation , useNavigate} from 'react-router-dom'
import { useState , useEffect } from 'react';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';

import Details from './routes/details'
import About from './routes/about'
import Form from './components/Form/Form';
import Favorite from './components/Favorites/Favorites';

function App() {
   const [characters,setCharacters] = useState([])
   
   const [access, setAccess] = useState(false);

   const navigate = useNavigate();
   const EMAIL = '';
   const PASSWORD = '';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout(){
      setAccess(false);
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // function onSearch(id) {
      
   //    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
   //       if (data.name) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }
   function onSearch(id) {
      axios(`http://127.0.0.1:3001/rickandmorty/character/:${id}`).then(
        ({ data }) => {
          const respuesta = verificarPersonaje(data.id, characters);
          if (respuesta === true) window.alert("El personaje ya existe no se puede repetir");
          else {
            if (data.id) setCharacters((oldChars) => [...oldChars, data]);
            else window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }


   const verificarPersonaje = (id, characters) => {
      let aux = false;
      for (const i of characters) {
        if (id === i.id) {
          aux = true;
          break;
        }
      }
      return aux;
    };
   
   
      const onClose = (id) => {
         const pepe =parseInt(id);
         const data = characters.filter(capi=>capi.id !== pepe);
         setCharacters(data);
      };

   // function onClose(id) {
      
   //    setCharacters((oldChars)=> oldChars.filter((char)=> char.id!==id))
   // }
      const {pathname} = useLocation()

   return (
      <div className='App'>
         {pathname!=='/' ? <NavBar onSearch ={onSearch} logout={logout}/> :''}
                  
      <Routes>
         <Route path='/' element={<Form login={login} />} />
         <Route path='/home' element={<Cards characters={characters} onClose ={onClose}/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/favorite' element={<Favorite/>} />
         <Route path='/details/:id' element={<Details />}/> 
      </Routes>
      </div>

   );
}

export default App;
