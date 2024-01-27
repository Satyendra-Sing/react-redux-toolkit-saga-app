import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./redux/pages/Home";
import Movie from "./redux/pages/Movie";
import './App.css'
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movie/:id" element={<Movie/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    );
}

export default App;
