import React from 'react'
import type { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import '../styles/footer.scss'
import TwitterIcon from '../images/twitter.svg'
import ZennIcon from '../images/zenn.svg'

export const Footer: FC = () => {
  const images = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)
  const twitterSvg = images.file.publicURL
  // const zennImage = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "zenn.svg" }) {
  //       publicURL
  //     }
  //   }
  // `)
  // const { zennSvg } = zennImage.file.publicURL
  // const githubImage = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "github.svg" }) {
  //       publicURL
  //     }
  //   }
  // `)
  // const { githubSvg } = githubImage.file.publicURL
  // const qiitaImage = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "qiita.svg" }) {
  //       publicURL
  //     }
  //   }
  // `)
  // const { qiitaSvg } = qiitaImage.file.publicURL

  return (
    <footer>
      <div id="footerContents">
        <div id="blogTitle">
          <div id="englishTitle">Soraride&apos;s Blog</div>
          <div id="japaneseTitle">そららいどのブログ</div>
          <div id="follow">
            <a href="">
              {/* <TwitterIcon></TwitterIcon> */}
              <img src={TwitterIcon} alt="" width="50px" />
              {/* <img src={twitterSvg} width="50px"></img> */}
            </a>
            <a href="">
              <img src={ZennIcon} width="50px"></img>
            </a>
            {/* <a href="">
              <img src={githubSvg} width="50px"></img>
            </a>
            <a href="">
              <img src={qiitaSvg} width="50px"></img>
            </a> */}
          </div>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <a href="mailto:sorarideblog@gmail.com">Contact</a>
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
