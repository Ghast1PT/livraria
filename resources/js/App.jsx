import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass='min-height'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/livros" element={<Contact />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App