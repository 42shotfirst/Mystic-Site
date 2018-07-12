<template>
  <div class="main">
    <button v-on:click="$router.push('/features')">Go to Features</button>
    <button v-on:click="$router.push('/')">Go home</button>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped lang="less">
</style>
