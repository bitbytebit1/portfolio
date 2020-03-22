<template>
  <div>
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from './Header/Header.vue'
import Body from './Body/Body.vue'

export default {
  name: 'Home',

  components: {
    Header,
    Body
  }
}
</script>
