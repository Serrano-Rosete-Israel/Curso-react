import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

import { FirstApp } from './FirstApp';
//import { HelloWorldApp } from './HelloWorld';


import './styles.css';

function App(){
    return <h1>Hola Mundo</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     {/*   <CounterApp value={10}/>*/}
     <FirstApp/>
    </React.StrictMode>


)