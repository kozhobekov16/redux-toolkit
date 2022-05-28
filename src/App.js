import './App.css';
import { useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./Home";
import Basket from "./Basket";
import Todo from "./Todo";

function App() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setCart(json))
    }, [])
    return (
            <BrowserRouter>
                <div className="App">
                    <h1>Redux-toolkit</h1>
                    <header>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/basket'>Basket</NavLink>
                        <NavLink to='/todos'>Todos</NavLink>
                    </header>
                    <Routes>
                        <Route path="/" element={<Home cart={cart}/>}/>
                        <Route path="/basket" element={<Basket/>}/>
                        <Route path="/todos" element={<Todo/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default App;
