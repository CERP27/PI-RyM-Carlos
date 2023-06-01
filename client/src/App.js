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

   
   // function login(userData) {
      //    if (userData.password === PASSWORD && userData.email === EMAIL) {
         //       setAccess(true);
         //       navigate('/home');
         //    }
         // }
         
   const navigate = useNavigate();
   
   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
   //    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
   //       const { access } = data;
   //       console.log(access)
   //       setAccess(data);
   //       access && navigate('/home');
   //    });
   // }

   //LOGIN CON ASYNC AWAIT
   const login = async (userData)=>{
      const {email,password} = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      console.log(data)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
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
   // function onSearch(id) {
   //    axios(`http://127.0.0.1:3001/rickandmorty/character/${id}`).then(
   //      ({ data }) => {
   //        const respuesta = verificarPersonaje(data.id, characters);
   //        if (respuesta === true) window.alert("El personaje ya existe no se puede repetir");
   //        else {
   //          if (data.id) setCharacters((oldChars) => [...oldChars, data]);
   //          else window.alert("¡No hay personajes con este ID!");
   //        }
   //      }
   //    );
   //  }
   
   //OnSearch con ASYNC AWAIT
   const onSearch = async (id) => {
      try {
         const {data} = await axios(`http://127.0.0.1:3001/rickandmorty/character/${id}`)
         verificarPersonaje(data.id,characters)
         ? window.alert('¡Este personaje ya ha sido agregado!')
         : data.id && setCharacters((oldChars) => [...oldChars, data])
                
      } catch (error) {
         window.alert('¡No existen personajes con este ID!') 
      }
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
   
   
      // const onClose = (id) => {
      //    const pepe =parseInt(id);
      //    const data = characters.filter(capi=>capi.id !== pepe);
      //    setCharacters(data);
      // };

   function onClose(id) {
      
      setCharacters((oldChars)=> oldChars.filter((char)=> char.id!==id))
   }
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
