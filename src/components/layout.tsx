import React from 'react'
import type { FC } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { SideBar } from './sidebar'

export const Layout: FC = ({ children }) => (
  <div>
    <Header></Header>
    <div id="main-aside-wrapper">
      <main>
        <div className="content">{children}</div>
      </main>
      <SideBar></SideBar>
    </div>
    <Footer></Footer>
  </div>
)
