import React, {useState} from "react"
import { Header } from '../src/components/Header'
import { Breadcrumbs } from '../src/components/Breadcrumbs'
import { MenuLateral } from '../src/components/MenuLateral'
import { IntranetContent } from '../src/components/IntranetContent'
import { Footer } from '../src/components/Footer'
import { FooterMenu } from '../src/components/FooterMenu'
import { Root } from './routes/Root'
import { useSearchParams } from 'react-router-dom';

// import { Protocolo } from './components/Protocolo/Protocolo'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'


function App() {

  const [searchParams] = useSearchParams();
  // console.log(searchParams.get('menu')); // 'graduacao'

  return (
    <>
      <Header />
      <div className="container">
            <main className="main-wrapper">
              <Breadcrumbs title="Extranet" icon="fa fa-home" subTitle=""/>
              <div className="row">
                <MenuLateral titleMenu="Graduação" menuitems='menu-feagri-graduacao'/>
                <IntranetContent>
                  <Root />
                </IntranetContent>
              </div>
            </main>
      </div>      
      <FooterMenu />
      <Footer />
    </>

  )
}

export default App
