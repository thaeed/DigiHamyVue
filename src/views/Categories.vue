<template>
  <PageComponent>
    {{ cats }}
  </PageComponent>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import axios from "axios";

const route = useRoute();
const id = route.params.id; // read parameter id (it is reactive)
const cats = computed(() => apiCall);

async function apiCall() {
  try {
    let res = axios({
      url: "https://localhost:5001/course",
      method: "get",
      timeout: 8000,
      headers: {
        ApiKey: "ouur12%^074$!^0QWYE#!WU78rt12bU!gg&",
      },
    });
    if (res.status == 200) {
      // test for status you want, etc
      console.log(res.status);
      console.log(res.data);
      console.log("####");
    }
    // Don't forget to return something
    return (await res).data;
  } catch (err) {
    console.error(err);
  }
}
</script>

<script mounted></script>

<style scoped></style>
