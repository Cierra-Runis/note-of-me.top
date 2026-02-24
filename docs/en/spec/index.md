<script setup>
import { VPTeamMembers } from 'vitepress/theme';

const members = [
  {
    avatar: '/assets/iso-logo.svg',
    name: 'ISO 8601-1:2019',
    org: "International Organization for Standardization",
  },
]
</script>

# Specifications

<VPTeamMembers :members="members" />
