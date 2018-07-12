<template>
  <div id="q-app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script>
import navbar from './pages/elements/navbar'
export default {
  name: 'App',
  components: {
    'navbar': navbar
  }
}
</script>

<style>
</style>
