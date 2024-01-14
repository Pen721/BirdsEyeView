<script setup>
import OpenReview from "@/components/Critics/OpenReview.vue";
import OtherPapers from "@/components/Critics/OtherPapers.vue";
import Twitter from "@/components/Critics/Twitter.vue";
import Abstract from "@/components/Critics/Abstract.vue";
</script>
<template>
  <div>
    <Abstract :paper_title="paper_title" :summary="summary" :paper_url="paper_url" :code_url="code_url" :semantic_scholar_url="semantic_scholar_url" :connected_papers_url="connected_papers_url" />

    <div class="critic-container">
      <div class="open-review">
        <h1>Open review</h1>
        <div class="open-review-container">
          <OpenReview v-for="review in peer_reviews" :key="review.url" :reviewerName="review.reviewer_name" :reviewScore="review.reviewer_score" :text="review.text" :url="review.url" />
        </div>
      </div>
      <div class="twitter">
        <h1>Twitter</h1>
        <Twitter v-for="tweet in tweets" :key="tweet.url" :username="tweet.username" :views="tweet.view_count_str" :text="tweet.text" :ur="tweet.url" />
      </div>
      <div class="other-papers">
        <h1>Other papers</h1>
        <OtherPapers v-for="reference in references" :key="reference.url" :paperTitle="reference.paper_title" :text="reference.text" :url="reference.url" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    peer_reviews: Array,
    tweets: Array,
    references: Array,
    paper_title: String,
    summary: String,
    paper_url: String,
    code_url: String,
    semantic_scholar_url: String,
    connected_papers_url: String,
  },
  mounted() {
    console.log(this.paper_title);
    console.log(this.tweets);
    console.log(this.references);
  },
};
</script>
<style scoped>
* {
  font-family: "acumin-pro", sans-serif;
  font-weight: 200;
  font-style: normal;
}
.critic-container {
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
}
.open-review {
  max-height: 60vh;
  overflow-y: auto;
}
.twitter {
  overflow-y: auto;
  max-height: 60vh;
}
.other-papers {
  overflow-y: auto;
  max-height: 60vh;
}
</style>
