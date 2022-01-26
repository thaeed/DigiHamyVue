<script setup>

import NavbarVue from './components/Navbar.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
<Navbar></Navbar>
 <router-view> </router-view>
</template>

<style>
@font-face {
  font-family: "Tanha";
  src: local("Tanha"), url("./assets/fonts/Tanha/Tanha-FD-WOL.ttf") format("truetype"), url("./assets/fonts/Tanha/Tanha-FD-WOL.eot") format("eot");
}
#app {
  font-family: 'Tanha','Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 60px;
}
</style>
