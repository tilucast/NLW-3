import React from 'react'

import {FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import logoImg from '../images/Logo.svg'

import '../styles/pages/landing.css'

function Landing () {
    return (
        <main id="page-landing">
            <section className="content-wrapper">
                <img src={logoImg} alt="logo"/>

                <article>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </article>

                <article className="location">
                <strong>Distrito Federal</strong>
                <span>Planaltina</span>
                </article>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
                </Link>
            </section>
        </main>
    )
}

export default Landing