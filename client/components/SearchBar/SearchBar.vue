<script setup>
import SearchResult from "./SearchResult.vue";
</script>
<template>
  <div class="search-container">
    <h2>WHAT DOES THE WORLD THINK?</h2>
    <div class="search-box">
      <input type="text" v-model="searchQuery" @input="onSearch" placeholder="Search..." />
      <button>
        <img src="@/assets/images/serach.png" />
      </button>
    </div>

    <div class="results">
      <SearchResult v-for="item in items" :key="item.id" :title="item.title" :year="item.authorsYear" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      items: [],
    };
  },
  methods: {
    async onSearch() {
      // Logic to handle search
      if (this.searchQuery.length >= 3) {
        try {
          let response = await fetch(`https://api.semanticscholar.org/graph/v1/paper/autocomplete?query=${this.searchQuery}`);
          if (!response.ok) {
            console.log("response not ok");
          }
          let body = await response.json();
          console.log(body);
          this.items = body.matches;
        } catch (error) {
          console.log("received an error of", error);
        }
      } else if (this.searchQuery.length < 3) {
        this.items = [];
      }
    },
  },
};
</script>
<style scoped>
* {
  font-family: "acumin-pro", sans-serif;
  font-weight: 200;
  font-style: normal;
}
.search-container {
  margin: 0 auto;
  text-align: center;
  max-width: 50vw;
}

.search-box {
  position: relative;
  margin: auto;
  max-width: 50vw; /* Adjust as necessary */
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="text"] {
  width: 100%;
  padding: 20px;
  /* Make room for the search icon */
  border: 1px solid #ccc;
  border-radius: 50px; /* Rounded borders */
  font-size: 16px; /* Adjust as necessary */
  box-sizing: border-box;
}

button {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background: none;
  border: none;
  outline: none;
  padding: 0 20px;
  cursor: pointer;
}

.search-icon {
  /* Use a real icon or adjust this to your preference */
  font-size: 20px; /* Adjust as necessary */
}
img {
  width: 100%;
  height: 100%;
  margin-top: 2px;
}
button {
  padding: 50px;
}
.results {
  max-height: 75vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
