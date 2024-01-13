<template>
  <div class="container">
    <h1>{{ reviewerName }}</h1>
    <h1>{{ reviewScore }}</h1>
    <span>{{ text }}</span>
    <span>{{ url }}</span>
  </div>
</template>

<script>
export default {
  props: {
    reviewerName: String,
    reviewScore: Number,
    text: String,
    url: String,
  },
  methods: {
    routerDestination() {
      this.$router.push({ path: `/papers/${this.id}` });
      //   this.$router.push({ name: "papers", params: { id: this.id } });
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  width: 80%;
  height: 50px;
  background-color: red;
}
</style>
