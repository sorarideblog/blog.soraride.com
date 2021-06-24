import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

export const Header: FC = () => (
  <header id="header">
    <div id="blog-title">
      <h1>
        <Link to="/">そららいどのブログ</Link>
      </h1>
    </div>
    <div className="header-contents">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/">About</Link>
      </span>
      <span>
        <Link to="/">Articles</Link>
      </span>
      <span>
        <Link to="/">Contact</Link>
      </span>
    </div>
  </header>
)
