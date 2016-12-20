<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="router-container">
      <router-link to="/router1" class="nav-left">nav1</router-link>
      <router-link to="/router2">nav2</router-link>
    </div>

    <div class="router-view">
      <router-view></router-view>
    </div>

  </div>
</template>



<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-container {
  margin: 20px;
}

.nav-left {
  margin-right: 20px;
}

.router-view{
  width: 1000px;
  height: 400px;
  border: 1px solid #2196F3;
  margin: 0 auto;
}

</style>
