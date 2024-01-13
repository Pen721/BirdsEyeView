<script setup>
import OpenReview from "@/components/Critics/OpenReview.vue";
import OtherPapers from "@/components/Critics/OtherPapers.vue";
import Twitter from "@/components/Critics/Twitter.vue";
</script>
<template>
  <div>
    <div class="critic-container">
      <div class="open-review">
        <h1>Open review</h1>
        <div class="open-review-container">
          <OpenReview
            :reviewerName="'Jensen Huang'"
            :reviewScore="'5'"
            :text="'This is a super long and complicated article. No one understands what\'s going on. Also figure 1 is completely misleading and I can\'t understand why anyone would like this paper.'"
            :url="'https://openreview.net/forum?id=PdaFecDUhL'"
          />
          <OpenReview
            :reviewerName="'Jensen Huang'"
            :reviewScore="'5'"
            :text="'This is a super long and complicated article. No one understands what\'s going on. Also figure 1 is completely misleading and I can\'t understand why anyone would like this paper.'"
            :url="'https://openreview.net/forum?id=PdaFecDUhL'"
          />
          <OpenReview
            :reviewerName="'Jensen Huang'"
            :reviewScore="'5'"
            :text="'This is a super long and complicated article. No one understands what\'s going on. Also figure 1 is completely misleading and I can\'t understand why anyone would like this paper.'"
            :url="'https://openreview.net/forum?id=PdaFecDUhL'"
          />
        </div>
      </div>
      <div class="twitter">
        <h1>Twitter</h1>
        <Twitter
          :username="'hello'"
          :views="'9'"
          :text="'yay this is great'"
          :url="'asdf.com'"
          />
      </div>
      <div class="other-papers">
        <h1>Other papers</h1>
        <OtherPapers
          :paperTitle="'Attention is all you need and this is extra long form just to drive home a point of trimming'"
          :text="'This is the abstract of the paper that will need to be cut off at some point This is the abstract of the paper that will need to be cut off at some point This is the abstract of the paper that will need to be cut off at some point'"
          :url="'https://arxiv.org/pdf/1706.03762.pdf'"
        />
        <OtherPapers
          :paperTitle="'Attention is all you need and this is extra long form just to drive home a point of trimming'"
          :text="'This is the abstract of the paper that will need to be cut off at some point This is the abstract of the paper that will need to be cut off at some point This is the abstract of the paper that will need to be cut off at some point'"
          :url="'https://arxiv.org/pdf/1706.03762.pdf'"
        />
        <OtherPapers
          :paperTitle="'Attention is all you need and this is extra long form just to drive home a point of trimming'"
          :text="'This is the abstract of the paper that will need to be cut off at some point This is the abstract of the paper that will need to be cut off at some point This is the abstract of the paper that will need to be cut off at some point'"
          :url="'https://arxiv.org/pdf/1706.03762.pdf'"
        />
      </div>
    </div>
  </div>
</template>
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
  overflow-y: auto;
}
</style>
