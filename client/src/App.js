import logo from './logo.svg';
import './App.css';
import {React, useEffect, useState} from 'react';
import Pets from './components/pets/Pets'

function App() {

    const [data, setData] = useState(null);

    useEffect(()=>{
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    },[]);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {!data ? "Loading..." : data}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <Pets></Pets>
        </div>
    );
}

export default App;
