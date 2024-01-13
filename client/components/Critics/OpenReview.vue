<template></template>

<script>
export default {
  props: {
    reviewerName: String,
    reviewScore: Integer,
    id: String,
  },
  methods: {
    routerDestination() {
      this.$router.push({ path: `/papers/${this.id}` });
      //   this.$router.push({ name: "papers", params: { id: this.id } });
    },
  },
};
</script>
