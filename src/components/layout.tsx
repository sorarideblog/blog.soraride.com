import React from 'react'
import type { FC } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export const Layout: FC = ({ children }) => (
  <div className="wrapper">
    <Header></Header>
    <div className="content">{children}</div>
    <Footer></Footer>
  </div>
)
