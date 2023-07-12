import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Contact from './components/pages/Contact';
import Books from './components/pages/Books';
import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Book from './components/pages/Book';

function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass='min-height'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/livros" element={<Books />} />
                    <Route path="/livro/:id" element={<Book />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App