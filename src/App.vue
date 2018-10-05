<template>
  <div id="app" class="app">
    <app-header></app-header>
    <div class="app__container">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from './components/Header/Header';
import appFooter from './components/Footer/Footer';

export default {
  name: 'app',
  components: {
      appHeader,
      appFooter
  }
}
</script>

<style>
html,a,p,div,ul,ol,li,body{
  margin:0;
  padding:0;
}
a{
  text-decoration: none;
  color:inherit;
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
  padding-top:5rem;
  background-color:#000;
}
.app__container{
  padding-bottom:5rem;
}
</style>
