<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <router-link class="navbar-brand mx-3" to="/">Popular Movies</router-link> 
      <router-link class="navbar-brand mx-3" to="Movies_best">Top Movies</router-link> 
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
