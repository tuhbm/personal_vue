<template>
  <div id="app" class="app">
    <app-header></app-header>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import appHeader from './components/Header/Header'

export default {
  name: 'app',
  components: {
      appHeader
  }
}
</script>

<style>
html,a,p,div,ul,ol,li,body{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app{
  position:relative;
  padding-top:7rem;
  background-color:#000;
}
</style>
