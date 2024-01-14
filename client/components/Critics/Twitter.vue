<template>
  <div class="container">
    <h3>{{ username }}</h3>
    <h3>{{ views }}</h3>
    <span>{{ text }}</span>
    <span>{{ url }}</span>
  </div>
</template>

<script>
export default {
  props: {
    username: String,
    views: Number,
    text: String,
    url: String,
  },
  methods: {
    goToArticle() {
      window.open(this.url);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 15px;
}
.score {
  position: absolute;
  margin: 0;
  padding: 5px;
  border: 2px solid black;
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
.name {
  margin: 0;
}
</style>
