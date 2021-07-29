import React from 'react'
import type { FC } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { SideBar } from './sidebar'
import { Helmet } from 'react-helmet'

export const Layout: FC = ({ children }) => (
  <div>
    <Helmet>
      {/* <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script> */}
    </Helmet>

    <Header></Header>
    <div id="main-aside-wrapper">
      <main>
        <div className="content">{children}</div>
      </main>
      {/* <SideBar></SideBar> */}
    </div>
    <Footer></Footer>
  </div>
)
