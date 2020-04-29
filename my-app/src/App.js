import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Container from "@material-ui/core/Container";

import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import Contenido from "./Components/Contenido";
import Footer from "./Components/Footer";


function App() {
        const config = {
           systemName: 'SkoKom'
    }
        return (

            < div className = "App" >

               <header className="App-header">
                   <Navbar systemName={config.systemName}/>
                   <Carousel/>
                   <Contenido/>
                   <Footer/>
               </header>

            </div>

    );

}

export default App;
