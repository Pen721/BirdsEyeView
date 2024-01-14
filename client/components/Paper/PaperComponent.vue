<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import data from "./data.js";
import TestView from "../../views/TestView.vue";

const route = useRoute();
const paperId = route.params.id;
const paperData = ref({}); // Initialize with an empty object

onMounted(() => {
  paperData.value = data[paperId] || {};
});
</script>

<template>
  <div v-if="paperData.value.peer_reviews || paperData.value.tweets || paperData.value.references">
    <TestView :peer_reviews="paperData.value.peer_reviews" :tweets="paperData.value.tweets" :references="paperData.value.references" />
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
