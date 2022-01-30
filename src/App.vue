<script setup>
import NavbarVue from "./components/Navbar.vue";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/LoginModal.vue";
</script>

<template>
  <Navbar />
</template>

<style>
@font-face {
  font-family: "Tanha";
  src: local("Tanha"),
    url("./assets/fonts/Tanha/Tanha-FD-WOL.ttf") format("truetype"),
    url("./assets/fonts/Tanha/Tanha-FD-WOL.eot") format("eot");
}
body {
  /* background-size: 10px;
  background-image: url("./assets/bg.png");
  background-repeat: repeat;*/

  background-color: #264653;
  opacity: 0.8;
  background-image: radial-gradient(circle at center center, #f1faee, #264653),
    repeating-radial-gradient(
      circle at center center,
      #f1faee,
      #f1faee,
      18px,
      transparent 36px,
      transparent 18px
    );
  background-blend-mode: darken;
}

#app {
  font-family: "Tanha", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.--digiOrange {
  background-color: #e76a4b;
  color: #f1faee;
}
.--digiBrown {
  background-color: #f4a261;
}
.--digiYellow {
  background-color: #e9c46a;
}
.--digiGreen {
  background-color: #2a9d8f;
  color: #f1faee;
}

.--digiDark {
  background-color: #264653;
  color: #f1faee;
}

.--digiDark:hover {
  color: #f1faee;
  text-shadow: 1px 0px #f1faee;
}
</style>
