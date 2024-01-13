<template>
  <div class="search-result-container">
    <span>{{ year }}</span>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    year: String,
  },
};
</script>
<style scoped>
* {
  font-family: "acumin-pro", sans-serif;
  font-weight: 200;
  font-style: normal;
}
.search-result-container {
  cursor: pointer;
  width: 100%;
  border: 1px solid grey;
}
</style>
