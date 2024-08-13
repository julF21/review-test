<script setup lang="ts">
   import {useToDoList} from './store'
   const store = useToDoList()
</script>

<template>
  <header>
    всего задач {{ store.count }}
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
  color: #fff;
 }
</style>
