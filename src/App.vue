<template>
  <div id="app">
    <Header />
    <MainCarousel />
  <div class="container" id = "mainContainer">
    <div class="columns">
      <div class="column is-two-thirds">
        <router-view/>
      </div>
      <div class="column is-one-third">
        <Sidebar />
      </div>
    </div>
  </div>
  <MainFooter />
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* background-color: #f8f8f8; */
}
#nav {
  padding: 30px;
}

#mainContainer{
  padding: 10px;
  /* box-shadow: 0 4px 12px 0 rgba(0,0,0,.2); */
}

/* .columns{
  margin-top: 80px !important;
} */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MainCarousel from '@/components/MainCarousel'
import MainFooter from '@/components/MainFooter'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    MainCarousel,
    MainFooter
  }

}
</script>
