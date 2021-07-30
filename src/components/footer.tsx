import React from 'react'
import type { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import '../styles/footer.scss'
import {
  TwitterIcon,
  ZennIcon,
  GithubIcon,
  QiitaIcon
} from '../components/svgs'

export const Footer: FC = () => {
  return (
    <footer>
      <div id="footerContents">
        <div id="blogTitle">
          <div id="englishTitle">{`< Jun's Blog />`}</div>
          <div id="japaneseTitle">じゅんのブログ</div>
        </div>
        <div id="follow">
          <a
            href="https://twitter.com/sorarideblog"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a href="https://zenn.dev/soraride" target="_blank" rel="noreferrer">
            <ZennIcon />
          </a>
          <a
            href="https://github.com/sorarideblog"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://qiita.com/sorarideblog"
            target="_blank"
            rel="noreferrer"
          >
            <QiitaIcon />
          </a>
        </div>
        <div id="footer-nav">
          <Link to="/" className="footer-link">
            Top
          </Link>
          <Link to="/works" className="footer-link">
            Works
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
      </div>
      <div id="copy">
        <p>&copy; 2021 Sorarideblog</p>
      </div>
    </footer>
  )
}
