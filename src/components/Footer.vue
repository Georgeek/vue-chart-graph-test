<template>
  <footer>
    <span>Build with <a href="https://vuejs.org">Vue.js</a> and <a href="http://vue-chartjs.org">vue-chartjs</a></span>
    <span>For issues of feature requests visit <a href="https://github.com/apertureless/npm-stats">GitHub</a></span>
  </footer>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  
  footer {
    background-color: #4f5566;
    color: #fff;
    font-size: 1rem;
    padding: 1.8rem 2.5rem;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;

    a {
      color: #00c4c9;

      &:hover {
        background: #006163;
      }
    }
  }
</style>
