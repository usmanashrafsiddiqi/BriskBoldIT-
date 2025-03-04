import React from 'react'
import { Header } from './Header'
import { Services } from './Services'
import { About } from './About'
import { Gallery } from './Gallery'
import { Contact } from './Contact'
import Tools from './Tools'
import Customer from './Customer'
import Software from './Software'
import LowCode from './LowCode'
import GoogleReviews from './GoogleReviews'

const Homepage = ({ header, services, about, gallery, contact }) => {
    return (
        <div style={{ margin: 0, padding: 0 }}>
            <Header data={header} />
            <Services data={services} />
            <Customer />
            <Gallery data={gallery} />
            <Software/>
            <LowCode/>
            <Tools />
            <About data={about} />
            <Contact data={contact} />
          <GoogleReviews/>
        </div>
    )
}

export default Homepage
