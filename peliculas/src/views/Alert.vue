<template>
  <div class="alert">
    <h1>Alerta: {{ $route.params.id }}</h1>
    <router-link :to="{ name: 'Alert', params: { id: home } }">Alert</router-link>
  </div>
</template>

<script>
export default {
  data() {
      return {
          home: false,
          puto: 3,
      }
  }
};
</script>


<style>
</style>