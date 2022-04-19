import React from 'react'
import type { FC } from 'react'
import { Layout } from '../../components/layout'
import SEO from '../../components/seo'
import '../../styles/work.scss'

const Page: FC = () => {
  const pageTitle = '製作実績'
  const pageDescription = `これまで製作してきたものをまとめました。`

  return (
    <Layout>
      <SEO title={pageTitle} description={pageDescription}></SEO>
      <article id="portfolio">
        <h2>{pageTitle}</h2>

        <section>
          <h3 className="work-title">Youtubeライブ版オンライン作業部屋</h3>
          <div>
            <blockquote className="twitter-tweet">
              <p lang="ja" dir="ltr">
                記事を書きました😉
                <br />
                <br />
                youtube配信型オンライン自習室を作った
                [オンライン作業部屋]｜そららいど
                <a href="https://t.co/o2WZqiCfPm">https://t.co/o2WZqiCfPm</a>
                <a href="https://twitter.com/hashtag/zenn?src=hash&amp;ref_src=twsrc%5Etfw">
                  #zenn
                </a>
              </p>
              &mdash; そららいど (@sorarideblog)
              <a href="https://twitter.com/sorarideblog/status/1479676748581453826?ref_src=twsrc%5Etfw">
                January 8, 2022
              </a>
            </blockquote>
          </div>
        </section>

        <section>
          <h3 className="work-title">オンライン作業部屋</h3>
          <div>
            <blockquote className="twitter-tweet">
              <p lang="ja" dir="ltr">
                記事書きました。
                <br />
                <br />
                仮想オンライン作業スペースを作った｜そららいど{' '}
                <a href="https://t.co/1R05ZpQZE4">
                  https://t.co/1R05ZpQZE4
                </a>{' '}
                <a href="https://twitter.com/hashtag/zenn?src=hash&amp;ref_src=twsrc%5Etfw">
                  #zenn
                </a>
              </p>
              &mdash; そらららららららいど (@sorarideblog){' '}
              <a href="https://twitter.com/sorarideblog/status/1420233455946719238?ref_src=twsrc%5Etfw">
                July 28, 2021
              </a>
            </blockquote>
          </div>
        </section>

        <section>
          <h3 className="work-title">
            聴いた音楽の週間ランキングをツイートするプログラム
          </h3>
          <div>
            <blockquote className="twitter-tweet">
              <p lang="ja" dir="ltr">
                過去に聞いた曲のランキングを毎週ツイートするbotを作った(
                <a href="https://t.co/vFga7vqYVs">https://t.co/vFga7vqYVs</a>
                )｜そららいど{' '}
                <a href="https://t.co/dRzil7kgkB">
                  https://t.co/dRzil7kgkB
                </a>{' '}
                <a href="https://twitter.com/hashtag/zenn?src=hash&amp;ref_src=twsrc%5Etfw">
                  #zenn
                </a>
              </p>
              &mdash; そらららららららいど (@sorarideblog){' '}
              <a href="https://twitter.com/sorarideblog/status/1421752484360380420?ref_src=twsrc%5Etfw">
                August 1, 2021
              </a>
            </blockquote>{' '}
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Page
