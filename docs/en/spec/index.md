<script setup>
import { VPTeamMembers } from 'vitepress/theme';
import { withBase, useData } from 'vitepress'

const members = [
  {
    avatar: '/iso-logo.svg',
    name: 'ISO 8601-1:2019',
    org: "International Organization for Standardization",
  },
  {
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/MIDI_LOGO.svg',
    name: 'Standard MIDI-File Format Spec. 1.1',
    org: 'MIDI Association',
    orgLink: 'https://docs.lchzh.top/learning/midi/smf1.1'
  }
]
</script>

# Specifications

<VPTeamMembers :members="members" />
