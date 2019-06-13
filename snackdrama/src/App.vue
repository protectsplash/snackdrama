<template>
  <v-app>
    <router-view name="header"/>
    <div class="wrapper">
      <router-view>
      </router-view>
    </div>
    <router-view name="footers"/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
