<template>
  <div class="container">
    <h1>{{ username }}</h1>
    <h1>{{ views}}</h1>
    <span>{{ text }}</span>
    <span>{{ url }}</span>
  </div>
</template>


<script>
export default {
  props: {
	username: String,
	views: Integer,
	text: String,
	url: String,
}
,
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
}
</style>