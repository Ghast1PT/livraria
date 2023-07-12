import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (

        <footer className={styles.footer + ' bg-primary'}>
            <ul className={styles.social_list + ' text-secundary'}>
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p className='text-secundary mt-4'><span className='font-bold'>Costs</span> &copy; 20223</p>
        </footer>

    )
}

export default Footer