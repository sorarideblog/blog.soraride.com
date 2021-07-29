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
          <div id="englishTitle">Soraride&apos;s Blog</div>
          <div id="japaneseTitle">そららいどのブログ</div>
        </div>
        <div id="follow">
          <a href="https://twitter.com/sorarideblog">
            <TwitterIcon />
            {/* <img src={TwitterIcon} alt="" width={iconSize} /> */}
          </a>
          <a href="https://zenn.dev/soraride">
            <ZennIcon />
          </a>
          <a href="https://github.com/sorarideblog">
            <GithubIcon />
          </a>
          <a href="https://qiita.com/sorarideblog">
            <QiitaIcon />
          </a>
        </div>
        <div id="footerNav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="copy">
        <p>&copy; 2021 Sorarideblog</p>
      </div>
    </footer>
  )
}
