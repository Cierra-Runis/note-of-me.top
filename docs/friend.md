---
editLink: false
sidebar: false
aside: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/100991984',
    name: 'KagurazakaAsahi',
    org: '咖酱的博客',
    orgLink: 'https://www.kablog.top',
    links: [
      { icon: 'github', link: 'https://github.com/KagurazakaAsahi' },
      { icon: 'gmail', link: 'mailto:1805569685@qq.com' }
    ]
  },
]
</script>

# 友链

<VPTeamMembers :members="members" />
