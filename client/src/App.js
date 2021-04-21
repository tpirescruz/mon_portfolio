import React, { useState } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Construction from './pages/Construction';


function App() {

    // const [msg, setMsg] = useState('')

    // const handleClick = async () => {
    //     const data = await window.fetch('/portfolio')
    //     const json = await data.json()
    //     const msg = json.msg

    //     setMsg(msg)
    // }

    return (
        <BrowserRouter>
            <Switch>
                <Construction />
            
            </Switch>
        </BrowserRouter>
    
        // <div className="App">
        //     <header className="App-header">
                
        //         <p>
        //             Edit <code> src / App.js </code> and save to reload.
        //         </p>
        //         <a className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer">
        //             Learn React
        //         </a>
        //         <button onClick={handleClick}> Dis bonjour!
                    
        //         </button>
        //         <p>
        //             {msg}
        //         </p>
        //     </header>
        // </div>
    );
}

export default App;