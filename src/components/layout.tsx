import React from 'react'
import type { FC } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <div id="topSpacer"></div>
      <Header></Header>
      <div id="main-aside-wrapper">
        <main>
          <div className="content">{children}</div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  )
}
