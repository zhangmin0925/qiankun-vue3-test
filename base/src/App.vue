<template>
<div style="font-size: 44px; text-align: center;">
  <div>
    <router-link to="/web-index">主应用的子路由</router-link> |
  </div>
  <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>


<style lang="scss">
html, body{
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>

