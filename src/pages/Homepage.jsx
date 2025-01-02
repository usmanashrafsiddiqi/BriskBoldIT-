import React from 'react'
import { Header } from './Header'
import { Services } from './Services'
import { About } from './About'
import { Gallery } from './Gallery'
import { Contact } from './Contact'
import Tools from './Tools'
import Customer from './Customer'

const Homepage = ({ header, services, about, gallery, contact }) => {
    return (
        <div>
            <Header data={header} />
            <Services data={services} />
            <About data={about} />
            <Tools />
            <Gallery data={gallery} />
            <Customer />
            <Contact data={contact} />
        </div>
    )
}

export default Homepage
