<template>
  <div class="container">
    <h1 class="name">{{ paper_title }}</h1>
    <p class="text">{{ summary }}</p>

    <div class="link-container">
      <span class="link" v-on:click="goPaper">Paper</span>
      <span class="link" v-on:click="goCode">Code</span>
      <span class="link" v-on:click="goSemantic">Semantic Scholar</span>
      <span class="link" v-on:click="goConnected">Connected papers</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paper_title: String,
    summary: String,
    paper_url: String,
    code_url: String,
    semantic_scholar_url: String,
    connected_papers_url: String,
  },
  methods: {
    goPaper() {
      window.open(this.paper_url);
    },
    goCode() {
      window.open(this.code_url);
    },
    goSemantic() {
      window.open(this.semantic_scholar_url);
    },
    goConnected() {
      window.open(this.connected_papers_url);
    },
  },
};
</script>
<style scoped>
.link-container {
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
.link {
  cursor: pointer;
}
.container {
  margin: 0 auto;
  width: 80%;
  position: relative;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 20px;
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
