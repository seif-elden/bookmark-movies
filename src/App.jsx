import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./screens/Home"
import About from './screens/About';
import ContactUs from './screens/ContactUs';
import AddMovie from './screens/AddMovie';
import MovieDetails from './screens/MovieDetails';
import NavBar from './components/NavBar';



function App() {

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      )
      .then((res) => {
        setMovies(res.data.results);
        console.log("mounted")
      });
  }, []); 

  
  const addMovie=(data)=>{
    console.log(data)
    setMovies([...movies, data])
  }

return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home m={movies}></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
      <Route path='/addmovie' element={<AddMovie addMovie={addMovie}></AddMovie>}></Route>
      <Route path="/movie/:movieId" element={<MovieDetails></MovieDetails>} /> 
    </Routes>
  </BrowserRouter>
);
}

export default App
