---
layout: home
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

//客服💁‍♀️
const customerService  = [
  {
    avatar: '/else/团队人员图片/客服/洋洋.jpg',
    name: '洋洋',
    title: '吗喽圣体',
    desc: '吗喽与勤奋并存，实力与效率的化身。',
    // links: [
    //   {icon: 'github', link: 'https://github.com/luoliguang'},
    // ]
  },
    {
    avatar: '/else/团队人员图片/客服/富哥.jpg',
    name: '浪浪',
    title: '客服主管',
    desc: '体弱多病，经常休息。',

  },
]

//设计师
const art  = [
  {
    avatar: '/else/团队人员图片/美工/桃子姐.png',
    name: '桃子姐',
    title: '办公室主任',
    desc: '美貌与智慧并存,英雄与侠义的化身.',
  },
    {
    avatar: '/else/团队人员图片/美工/少军.png',
    name: '卷毛哥',
    title: '🐂🍺美工',
    desc: '🎧质量很好,有很好的屏蔽能力.。',
  },
    {
    avatar: '/else/团队人员图片/美工/飞龙在天.png',
    name: '飞龙在天',
    title: '大师兄',
    desc: '好好学习，天天向上',
  }
]

</script>


<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>客服💁‍♀️</template>
    <template #lead>✊❤✊👆为客户服务。</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="customerService" />

  <VPTeamPageTitle>
    <template #title>设计师</template>
    <template #lead>有求必应，使命必达。</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="art" />
  

</VPTeamPage>