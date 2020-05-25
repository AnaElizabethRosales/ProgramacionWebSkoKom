import React from 'react';
import Navbar from "./Components/Navbar";
import Catalogo from "./Components/Catalogo";
import Footer from "./Components/Footer";


function App2() {
    const config = {
        systemName: 'SkoKom'
    }
    return (

        < div className = "App2" >

            <header className="App2-header">
                <Navbar systemName={config.systemName}/>
                <Catalogo/>
                <Footer/>
            </header>

        </div>

    );

}

export default App2;