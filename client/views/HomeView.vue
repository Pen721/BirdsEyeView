<script setup lang="ts">
import SearchBar from "@/components/SearchBar/SearchBar.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { currentUsername, isLoggedIn } = storeToRefs(useUserStore());
</script>

<template>
  <main>
    <SearchBar />
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
