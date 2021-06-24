import React from 'react'
import type { FC } from 'react'
import { Link } from 'gatsby'

export const SideBar: FC = () => (
  <aside>
    サイドバー
    <div id="sponser-link">広告等</div>
    <div id="profile-box">
      <div>プロフィール画像</div>
      <div>そららいど</div>
      <div>- プロフィール -</div>
    </div>
  </aside>
)
