import React from 'react'
import type { FC } from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import '../styles/skills.scss'

const Page: FC = () => {
    const pageTitle = '経験スキル'
    const pageDescription = `これまで学習したり取り扱ってきた技術やツールをまとめました。`

    return (
        <Layout>
            <SEO title={pageTitle} description={pageDescription}></SEO>
            <article id='skills'>
                <h2 className='page-title'>{pageTitle}</h2>
                <section>
                    <h3>開発ツール</h3>
                    <div>
                        <div>
                            <h4>自信あり</h4>
                            <ul>
                                <li>Windows</li>
                                <li>Mac OS</li>
                                <li>Linux</li>
                                <li>Git</li>
                                <li>GitHub</li>
                                <li>Docker</li>
                                <li>
                                    <strong>GCP</strong>
                                    <ul>
                                        <li>Cloud Functions</li>
                                        <li>Cloud Firestore</li>
                                        <li>Cloud Scheduler</li>
                                        <li>Firebase Authentication</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>AWS</strong>
                                    <ul>
                                        <li>Lambda</li>
                                        <li>DynamoDB</li>
                                        <li>S3</li>
                                        <li>API Gateway</li>
                                        <li>CloudWatch</li>
                                        <li>Secret Manager</li>
                                        <li>AWS CLI</li>
                                    </ul>
                                </li>
                                <li>Slack</li>
                                <li>Chatwork</li>
                                <li>Netlify</li>
                                <li>Contentful</li>
                                <li>MySQL</li>
                                <li>Raspberry Pi</li>
                                <li>VS Code</li>
                                <li>JetBrains製 IDE</li>
                                <li>SSH</li>
                                <li>FTP</li>
                            </ul>
                        </div>
                        <div>
                            <h4>初級</h4>
                            <ul>
                                <li>Heroku</li>
                                <li>Arduino</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3>フレームワーク・ライブラリ</h3>
                    <div>
                        <div>
                            <h4>自信あり</h4>
                            <ul>
                                <li>Flutter</li>
                                <li>PIL (Python)</li>
                                <li>OpenCV (Python)</li>
                                <li>React</li>
                                <li>Nuxt.js</li>
                                <li>Gatsby.js</li>
                                <li>Vue.js (2系まで)</li>
                                <li>LINE Bot</li>
                                <li>Selenium</li>
                            </ul>
                        </div>
                        <div>
                            <h4>初級</h4>
                            <ul>
                                <li>Ruby on Rails</li>
                                <li>Express</li>
                                <li>Next.js</li>
                                <li>TensorFlow</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h3>言語</h3>
                    <div>
                        <div>
                            <h4>自信あり</h4>
                            <ul>
                                <li>HTML・CSS・JavaScript</li>
                                <li>TypeScript</li>
                                <li>SASS/SCSS</li>
                                <li>C</li>
                                <li>Python</li>
                                <li>PHP</li>
                                <li>Go</li>
                                <li>SQL</li>
                                <li>Dart</li>
                            </ul>
                        </div>
                        <div>
                            <h4>初級</h4>
                            <ul>
                                <li>C++</li>
                                <li>Java</li>
                                <li>MATLAB</li>
                                <li>Ruby</li>
                                <li>C#</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </article>
        </Layout>
    )
}

export default Page
