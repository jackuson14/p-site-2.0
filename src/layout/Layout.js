import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Container style={{overflowY:"scroll", overflow: 'visible'}}>
      <main>
        {children}
      </main> 
      <Footer />
      </Container>
    </>
  )
}
