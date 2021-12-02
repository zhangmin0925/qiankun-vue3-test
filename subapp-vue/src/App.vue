<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{path: linkobj.link,query: linkobj.params}">去About</router-link> |
      <router-link :to="{path: linkobj.link}">不带query参数去About </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      linkobj: {
        link: '/about',
        params: {
          a:1,
          b:8
        }
      }
    }
  }
}

</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
