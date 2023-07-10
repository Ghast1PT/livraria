import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from './Container'
import React from 'react'

function Navbar() {
    return (
        <nav className={styles.navbar + ' bg-blue-300 text-gray-500'}>
            <Container>
                <Link to="/"><img src={''} alt='costs logo' /></Link>

                <ul className={styles.list}>
                    <li className=''><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contatos</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar