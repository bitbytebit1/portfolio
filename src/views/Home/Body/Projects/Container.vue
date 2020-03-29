<template>
  <v-container>
    <div class="section-divider">
      <p>Projects</p>
    </div>
    <v-row>
      <v-col
        cols="12"
        md="6"
        v-for="(card, i) in cards"
        :key="i"
      >
        <ProjectCard v-bind="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      cards: [
        {
          title: 'Super Combo Records',
          img: 'scr2',
          description: 'Headless e-commerce site built using Vue and Snipcart.',
          website: 'https://supercomborecords.netlify.com',
          source: '',
          about: ''
        },
        {
          title: 'dreamcloud',
          img: 'dc',
          description: 'Make playlists with songs from Mixcloud, Soundcloud, YouTube and Vimeo.',
          website: 'https://dreamcloud.netlify.com',
          source: '',
          about: ''
        },
        {
          title: 'matrix',
          img: 'matrix',
          description: 'Make playlists with songs from Mixcloud, Soundcloud, YouTube and Vimeo.',
          website: '#/matrix',
          source: '',
          about: ''
        },
        {
          title: 'SpiralRealm',
          img: 'green',
          description: 'Take a break and lose yourself in the spiral realm.',
          website: 'https://frosty-payne-c18919.netlify.com/',
          source: '',
          about: ''
        },
        {
          title: 'Markdown-IT',
          img: 'markdownit',
          description: 'Markdown-IT is a start-up located in Bergslagen.',
          website: 'https://markdownit.se',
          source: '',
          about: ''
        },
        {
          title: 'memeR',
          img: 'memer',
          description: 'Tinder for memes.',
          website: 'https://memer.netlify.com/',
          source: '',
          about: ''
        }
      ]
    }
  }

}
</script>

<style>
.section-divider {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    position: relative;
    margin: 60px 0 40px;
    text-align: center;
    padding: 0;
    clear: both;
}
.section-divider p {
    color: #24272a;
    font-size: 18px;
    font-weight: 700;
    font-size: 30px;
    display: inline-block;
    padding: 0 20px;
    margin: 0;
    position: relative;
    background-color: #fff;
    top: -24px;
}
</style>
