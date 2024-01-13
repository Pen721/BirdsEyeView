<template>
  <h1>{{ this.title }}</h1>
</template>

<script>
export default {
  props: {
    title: String,
    year: String,
  },
};
</script>
