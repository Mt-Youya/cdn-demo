import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Demo from "./components/demo.jsx"
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <Link to="/"> Back Home </Link>
            <Routes>
                <Route path="/" element={<Demo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
