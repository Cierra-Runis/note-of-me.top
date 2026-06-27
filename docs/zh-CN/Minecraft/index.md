<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import { withBase, useData } from 'vitepress'

const members = [
  {
    avatar: 'https://zh.minecraft.wiki/images/MinecraftTheIslandCover.png',
    name: 'Minecraft: The Island',
    org: 'Minecraft: The Island',
    orgLink: './The-Island/The-Island.md',
  },
  {
    avatar: 'https://www.minecraft.net/content/dam/minecraftnet/franchise/logos/minecraft-creeper-face.jpg',
    name: 'The Minecraft',
    org: 'The Minecraft',
    orgLink: './The-Minecraft/The-Minecraft.md',
  }
]
</script>

# Minecraft

<VPTeamMembers :members="members" />
