import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Container from "@material-ui/core/Container";


import Carousel from "./Components/Carousel";
import Contenido from "./Components/Contenido";
import Catalogo from "./Components/Catalogo";
import Contacto from "./Components/Contacto";
import Footer from "./Components/Footer";


function App() {
        const config = {
           systemName:'SkoKom'
    }
        return (

            <div className = "App" >
               <header className="App-header">
                   <Navbar className="App-Nav" systemName={config.systemName}/>
                   <Carousel/>
                   <Contenido/>
                   <Catalogo/>
                   <Contacto/>
                   <Footer/>
               </header>

            </div>

    );

}

export default App;
