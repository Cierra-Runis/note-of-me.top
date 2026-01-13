---
editLink: false
sidebar: false
aside: false
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/29329988',
    name: 'MIDI',
    org: '可視化プレイヤー',
    orgLink: 'https://www.kablog.top', /// TODO: change link
  },
]
</script>

# アプリ

<VPTeamMembers :members="members" />
