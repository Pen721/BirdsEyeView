<template>
  <div class="container" v-on:click="goToArticle">
    <p class="score">{{ reviewScore }}</p>
    <div class="text">
      <h1 class="name">{{ reviewerName }}</h1>
      <p class="text">{{ text }}</p>
    </div>
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
    goToArticle() {
      window.location = this.url;
    },
  },
};
</script>
<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  margin-bottom: 5px;
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
  overflow: ellipses;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines you want to display */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
