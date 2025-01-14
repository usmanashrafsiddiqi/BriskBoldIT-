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
        <div style={{ margin: 0, padding: 0 }}>
            <Header data={header} />
            <Services data={services} />
            <Customer />
            <Gallery data={gallery} />
            <Tools />
            <Contact data={contact} />
            <About data={about} />
        </div>
    )
}

export default Homepage
