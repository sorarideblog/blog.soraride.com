import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'
import '../styles/footer.scss'

export const Footer: FC = () => (
  <footer>
    <div id="footerContents">
      <div id="blogTitle">
        <div id="englishTitle">Soraride&apos;s Blog</div>
        <div id="japaneseTitle">そららいどのブログ</div>
        <div id="follow">
          Follow <a href="">Twitter</a>
          <a href="">GitHub</a>
          <a href="">Qiita</a>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Articles</Link>
        </li>

        <li>
          <a href="mailto:sorarideblog@gmail.com">Contact</a>
        </li>
      </ul>
    </div>
    <div id="copy">
      <p>&copy; 2021 Sorarideblog</p>
    </div>
  </footer>
)
