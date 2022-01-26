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
background-image: radial-gradient(circle at center center, #F1FAEE, #264653), repeating-radial-gradient(circle at center center, #F1FAEE, #F1FAEE, 18px, transparent 36px, transparent 18px);
background-blend-mode:darken;
}

#app {
  font-family: "Tanha", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.--digiOrange {
  background-color: #e76a4b;
  color : #F1FAEE;
}
.--digiBrown {
  background-color: #F4A261;
}
.--digiYellow {
  background-color: #E9C46A;
}
.--digiGreen {
  background-color: #2A9D8F;
  color : #F1FAEE;
}

.--digiDark {
  background-color: #264653;
  color : #F1FAEE;
  
}

.--digiDark:hover{
  color : #F1FAEE;
   text-shadow: 1px 0px #F1FAEE;
}



</style>
