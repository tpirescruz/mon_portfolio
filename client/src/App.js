import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Construction from './pages/Construction';
import NotFound from './pages/NotFound';
import Parcours from './pages/Parcours';
import Home from './pages/Home';
import Dev from './pages/Dev';
import Illustration from './pages/Illustration';


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
                <Route path="/" exact component={Home} />
                <Route path="/dev-web-front" exact component={Dev} />
                <Route path="/illustration" exact component={Illustration} />
                <Route path="/parcours" exact component={Parcours} />
                <Route path="/construction" exact component={Construction} />
                <Route component={NotFound} />           
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