<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './Components/NavBar.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>