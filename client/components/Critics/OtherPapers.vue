<template>
  <div class="container" v-on:click="goToArticle">
    <div class="text">
      <h1 class="nameOtherPapers">{{ paperTitle }}</h1>
      <p class="textOtherPapers">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paperTitle: String,
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
.nameOtherPapers {
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Number of lines you want to display */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.textOtherPapers {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines you want to display */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
