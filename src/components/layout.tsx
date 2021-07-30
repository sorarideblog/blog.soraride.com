import React from 'react'
import type { FC } from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Helmet } from 'react-helmet'

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Helmet>
        {/* Material UI: https://material-ui.com/getting-started/usage/#responsive-meta-tag */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>

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
