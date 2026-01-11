---
editLink: false
sidebar: false
aside: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/29329988',
    name: 'MIDI',
    org: '可视化播放器',
    orgLink: 'https://www.kablog.top', /// TODO: change link
  },
]
</script>

# 应用

<VPTeamMembers :members="members" />
