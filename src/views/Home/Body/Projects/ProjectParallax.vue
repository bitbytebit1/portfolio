<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        v-ripple
        @click="animateIt"
      >
        <v-parallax
          :src="require(`@/assets/${img}.png`)"
          :lazy-src="require(`@/assets/${img}.png`)"
        />
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#1e1e1e"
          >
            <div class="text-center">
              {{ title }}
            </div>
            <div class="text-center">
              {{ description }}

              <v-card-actions class="d-block text-center">
                <v-btn
                  :href="about"
                  outlined
                >
                  About
                </v-btn>
                <v-btn
                  :href="source"
                  outlined
                >
                  Code
                </v-btn>
                <v-btn
                  outlined
                  :href="website"
                  target="_blank"
                  :class="{'tada animated': animate}"
                >
                  Visit
                </v-btn>
              </v-card-actions>
            </div>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
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
