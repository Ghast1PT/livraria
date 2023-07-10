import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from './Container'

function Navbar() {
    return (
        <nav className={styles.navbar + ' bg-primary text-secundary font-bold'}>
            <Container>
                <Link to="/">Início</Link>

                <ul className={styles.list}>
                    <li className=''><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contatos</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar