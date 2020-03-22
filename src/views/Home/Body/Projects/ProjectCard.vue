<template>
  <v-card
    v-ripple
    @click="animateIt"
  >
    <v-img
      :src="require(`@/assets/${img}.png`)"
      :lazy-src="require(`@/assets/${img}.png`)"
    />
    <v-card-title primary-title>
      {{ title }}
    </v-card-title>
    <v-card-text>
      {{ description }}
    </v-card-text>
    <v-card-actions class="d-block text-right">
      <v-btn
        outlined
        :href="website"
        target="_blank"
        :class="{'tada animated': animate}"
      >
        Visit site
      </v-btn>
      <v-btn
        :href="source"
        outlined
      >
        Source Code
      </v-btn>
      <v-btn
        :href="about"
        outlined
      >
        Read about
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    website: {
      type: String,
      required: true
    },
    source: {
      type: String,
      required: true
    },
    about: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      timeout: false,
      animate: false
    }
  },
  methods: {
    animateIt (id) {
      this.animate = false
      setTimeout(() => {
        this.animate = true
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.animate = false
        }, 1000)
      }, 0)
    }
  }
}
</script>

<style>

</style>
