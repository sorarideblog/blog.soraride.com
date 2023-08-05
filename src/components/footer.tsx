import React from 'react'
import type { FC } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import '../styles/footer.scss'
import {
    TwitterIcon,
    ZennIcon,
    GithubIcon,
    QiitaIcon,
} from '../components/svgs'

export const Footer: FC = () => {
    return (
        <footer>
            <div id='footerContents'>
                <Link to='/'>
                    <div id='blogTitle'>
                        <div id='englishTitle'>{`< Soraride's Blog />`}</div>
                        <div id='japaneseTitle'>そららいどのブログ</div>
                    </div>
                </Link>
                <div id='follow'>
                    <a
                        href='https://twitter.com/sorarideblog'
                        target='_blank'
                        rel='noreferrer'
                        id='twitter'
                    >
                        <TwitterIcon />
                    </a>
                    <a
                        href='https://zenn.dev/soraride'
                        target='_blank'
                        rel='noreferrer'
                        id='zenn'
                    >
                        <ZennIcon />
                    </a>
                    <a
                        href='https://github.com/sorarideblog'
                        target='_blank'
                        rel='noreferrer'
                        id='github'
                    >
                        <GithubIcon />
                    </a>
                    <a
                        href='https://qiita.com/sorarideblog'
                        target='_blank'
                        rel='noreferrer'
                        id='qiita'
                    >
                        <QiitaIcon />
                    </a>
                </div>
                <div id='footer-nav'>
                    <Link to='/' className='footer-link'>
                        Top
                    </Link>
                    <Link to='/works' className='footer-link'>
                        Works
                    </Link>
                    <Link to='/skills' className='footer-link'>
                        Skills
                    </Link>
                    <Link to='/profile' className='footer-link'>
                        Profile
                    </Link>
                </div>
            </div>
            <div id='copy'>
                <p>&copy; 2023 Soraride</p>
            </div>
        </footer>
    )
}
