<script setup lang="ts">

</script>

<template>
  <header>
     
  </header>
  <aside>
    <h3>Меню</h3>
  </aside>
  <router-view></router-view>
  <footer></footer>
</template>

<style>
 aside {
  background-color: grey;
  width: 300px;
  height: 100vh;
 }
 footer, header {
  width: 100%;
  height: 80px;
  background: black;
 }
</style>
