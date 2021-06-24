import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

export const Footer: FC = () => (
  <footer>
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

    <div id="copy">
      <p>&copy; 2021 Sorarideblog</p>
    </div>
  </footer>
)
