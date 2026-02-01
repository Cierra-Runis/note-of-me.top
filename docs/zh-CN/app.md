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
    orgLink: 'https://app.note-of-me.top',
  },
]
</script>

# 应用

<VPTeamMembers :members="members" />
