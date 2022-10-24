import React from 'react'
import type { FC } from 'react'
import { Layout } from '../components/layout'
import SEO from '../components/seo'
import '../styles/profile.scss'
import { StaticImage } from 'gatsby-plugin-image'

const Page: FC = ({ data }: any) => (
    <Layout>
        <SEO title='自己紹介' description='そららいどの自己紹介ページ。'></SEO>
        <article>
            <div id='profile'>
                <h2>プロフィール</h2>
                <StaticImage
                    className='profile-img'
                    src='../images/2021-06-13_18-40-37_985.jpeg'
                    alt='プロフィール画像'
                    width={100}
                />
                <div>
                    <p>名前：そららいど</p>
                    <p>所属：大学院 博士前期課程2年</p>
                    <p>趣味：散歩</p>
                    <p>好きな食べ物：蒙古タンメン</p>
                    <p>老後に嗜みたい趣味：ピアノ</p>
                </div>
                <div>
                    <p>こんにちは。</p>
                </div>
            </div>

            {/* <div id="career">
        <h2>業務経歴</h2>
        <div></div>
      </div> */}
        </article>
    </Layout>
)

export default Page
