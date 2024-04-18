import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import '../index.css'

export default function App() {
    return(
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}