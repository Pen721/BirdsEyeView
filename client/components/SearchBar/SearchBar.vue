<template>
  <div>
    <input type="text" v-model="searchQuery" @input="onSearch" placeholder="Search..." />
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.authorsYear }}
        {{ item.title }}
      </li>
    </ul>
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
