<template>
  <div id="app">
    <j-header></j-header>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <j-Footer></j-Footer>
  </div>
</template>

<script>
import JHeader from '@/components/Header'
import JFooter from '@/components/Footer'

export default {
  components: { JHeader, JFooter },
  name: 'app'
}
</script>

<style lang="scss">
  @import "/assets/styles/_variables.scss";
  
  #app {
    font-family: $base-font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
