<template>
  {{id}}
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();  
const id = route.params.id; // read parameter id (it is reactive) 

</script>

<style scoped></style>
