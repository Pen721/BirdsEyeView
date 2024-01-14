<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import data from "./data.js";
import TestView from "../../views/TestView.vue";

const route = useRoute();
const paperId = route.params.id;
const paperData = ref({}); // Initialize with an empty object

const paperjson = {
  "2f3822eb380b5e753a6d579f31dfc3ec4c4a0820": {
    _id: {
      $oid: "65a315ca7ca43556687af638",
    },
    peer_reviews: [
      {
        reviewer_name: "Reviewer 1",
        reviewer_score: 5,
        text: "1. Unsurprisingly, the **idea of extending linear reasoning to tree reasoning isn't a new thing.** Specifically, [1] leverages beam search to guide the chain-of-thought to decode a better reasoning path, which is almost the same as the BFS in this paper. [1] also uses self-evaluation to provide heuristics. [2] also formulates the reasoning as a tree reasoning problem. More importantly, the application of BFS and DFS seems to be ad-hoc, and there could be more principled methods to guide the search. For example, [3, 4] applies MCTS to guide the search, which might have better planning abilities.\n2. While ToT improves CoT naturally, it doesn't come without cost. One major concern is the **efficiency issue for querying the expensive GPT-4 multiple times.** The paper should give the audience a clearer idea of how cost ToT is compared with CoT, probably with an efficiency comparison between them. More interestingly, the paper should propose or at least discuss potential means to reduce the inference cost, such as using various smaller models for sampling or state evaluation, etc.\n3. The application scope is largely limited. While the authors say they select the three tasks because they are hard, the **selected three tasks are arguably narrow with two text games.** One possible reason is that the selected tasks make the thought and state formulation easier and demonstrate improvement significantly. Nonetheless, it would be necessary to extend the scope to be more similar to CoT tasks to demonstrate the broader applicability of the proposed methods.",
        url: "https://openreview.net/forum?id=5Xc1ecxO1h",
      },
    ],
    tweets: [
      {
        username: "srush_nlp",
        view_count_str: "6.1k views",
        text: "Man, you've branded a method to give openai exponential money",
        url: "https://twitter.com/srush_nlp/status/1659683079194042370",
      },
    ],
    references: [
      {
        paper_title: "ToolLLM: Facilitating Large Language Models to Master 16000+ Real-World APIs",
        text: "1. It should be noted DFSDT shares a similar idea to a concurrent work: tree-of-thought (ToT) reasoning (Yao et al., 2023). However, our DFSDT targets general decision-making problems where the decision space is infinite, compared to **ToT’s** **relatively simple tasks** that can be addressed by **brute-force search**, such as Game of 24 and Crosswords. The distinct target between DFSDT and ToT determines the significant difference in the implementation details.",
        url: "https://arxiv.org/abs/2307.16789",
      },
    ],
    paper_id: "2f3822eb380b5e753a6d579f31dfc3ec4c4a0820",
    paper_title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
    summary: "TODO",
    paper_url: "https://arxiv.org/abs/2305.10601",
    code_url: "https://github.com/princeton-nlp/tree-of-thought-llm",
    semantic_scholar_url: "https://www.semanticscholar.org/paper/Tree-of-Thoughts%3A-Deliberate-Problem-Solving-with-Yao-Yu/2f3822eb380b5e753a6d579f31dfc3ec4c4a0820",
    connected_papers_url: "https://www.connectedpapers.com/main/2f3822eb380b5e753a6d579f31dfc3ec4c4a0820/Tree-of-Thoughts%3A-Deliberate-Problem-Solving-with-Large-Language-Models/graph",
  },
};

const paper2 = {
  "2f3822eb380b5e753a6d579f31dfc3ec4c4a0820": {
    _id: {
      $oid: "65a315ca7ca43556687af638",
    },
    peer_reviews: [
      {
        reviewer_name: "Reviewer 1",
        reviewer_score: 5,
        text: "1. Unsurprisingly, the **idea of extending linear reasoning to tree reasoning isn't a new thing.** Specifically, [1] leverages beam search to guide the chain-of-thought to decode a better reasoning path, which is almost the same as the BFS in this paper. [1] also uses self-evaluation to provide heuristics. [2] also formulates the reasoning as a tree reasoning problem. More importantly, the application of BFS and DFS seems to be ad-hoc, and there could be more principled methods to guide the search. For example, [3, 4] applies MCTS to guide the search, which might have better planning abilities.\n2. While ToT improves CoT naturally, it doesn't come without cost. One major concern is the **efficiency issue for querying the expensive GPT-4 multiple times.** The paper should give the audience a clearer idea of how cost ToT is compared with CoT, probably with an efficiency comparison between them. More interestingly, the paper should propose or at least discuss potential means to reduce the inference cost, such as using various smaller models for sampling or state evaluation, etc.\n3. The application scope is largely limited. While the authors say they select the three tasks because they are hard, the **selected three tasks are arguably narrow with two text games.** One possible reason is that the selected tasks make the thought and state formulation easier and demonstrate improvement significantly. Nonetheless, it would be necessary to extend the scope to be more similar to CoT tasks to demonstrate the broader applicability of the proposed methods.",
        url: "https://openreview.net/forum?id=5Xc1ecxO1h",
      },
      {
        reviewer_name: "Reviewer 2",
        reviewer_score: 8,
        text: "I wonder if it might be possible to discuss the efforts required to adapt Tree of Thoughts to other tasks and reasoning formats. To me, it seems like other than the search algorithm (BFS/DFS), the other three parts would require **some hand-crafted engineering from scratch for a different task.**",
        url: "https://openreview.net/forum?id=5Xc1ecxO1h",
      },
      {
        reviewer_name: "Reviewer 3",
        reviewer_score: 6,
        text: "The biggest weakness of ToT is that the paper lacks the evaluation of some important properties of ToT. Here I put a list:\n1. There is **no data about the price** of ToT compared with baselines (there is a short mention in the Limitations about the price/success rate trade-off). In the best case, I would like to have a graph where there is a success rate on the y-axis and a price on the x-axis. If you think that such a graphical analysis would be too detailed please put some data in a table. The price of GPT-4 may be different in the future, so alternatively you can add information about the number of tokens used by ToT per solution compared with baselines. Probably the best would be to have both information: price and number of tokens.\n2. There is **no data about the time execution** of ToT compared with baselines.\n3. Some additional comparisons are missing. We know that a single execution of ToT is significantly more powerful than a single execution of baseline (for example IO). However **is it possible that running IO or CoT many times (until it finds a solution) is actually cheaper and faster than ToT?** ToT will still have scientific value even in the case where the answer to the previous question is positive, but the scientific community will benefit from knowing it. Currently, it is not really known what are the maximum capabilities of properly used LLM and how to maximize its performance. In a search for the most effective methods, we need to know as many properties of each approach as possible. Knowing more about ToT would add great value to the paper. Here is a list of my suggestions for additional comparisons:\n4. While I see value in the creative writing task, **I am not very convinced that a task with just one ToT step is meaningful when evaluating tree search algorithms.** More precisely: while formally this task falls under the ToT framework, it's hard to think about it in terms of tree search.",
        url: "https://openreview.net/forum?id=5Xc1ecxO1h",
      },
    ],
    tweets: [
      {
        username: "srush_nlp",
        view_count_str: "6.1k views",
        text: "Man, you've branded a method to give openai exponential money",
        url: "https://twitter.com/srush_nlp/status/1659683079194042370",
      },
      {
        username: "jeasinema",
        view_count_str: "3.9k views",
        text: 'Hi Shunyu, thanks for the great work. I have a qq and hope you can help me with: if we consider a LLM that can learn from its past planning/reasoning failures, ex. putting them (these can be viewed as some "half-baked thoughts") into the prompt, how does it compare to ToT?',
        url: "https://twitter.com/jeasinema/status/1659483063355871234",
      },
      {
        username: "BlackHackofDoom",
        view_count_str: "2.6k views",
        text: "You report improvements in just three tasks, that are also novel? That is underwhelming. Why can't you show improvement in more established benchmarks (pointless as they may be)?",
        url: "https://twitter.com/BlackHackOfDoom/status/1659665532692430848",
      },
      {
        username: "jieyilong",
        view_count_str: "9.5k views",
        text: 'Nice work! We presented a similar idea in a recent paper. We even coined the same term "Tree-of-Thought", what a coincidence lol\nhttps://arxiv.org/pdf/2305.08291.pdf…\nWe conducted tests on a set of Sudoku benchmarks, and also observed significant improvement compared to using LLM alone.',
        url: "https://twitter.com/jieyilong/status/1659831888171892736",
      },
    ],
    references: [
      {
        paper_title: "ToolLLM: Facilitating Large Language Models to Master 16000+ Real-World APIs",
        text: "1. It should be noted DFSDT shares a similar idea to a concurrent work: tree-of-thought (ToT) reasoning (Yao et al., 2023). However, our DFSDT targets general decision-making problems where the decision space is infinite, compared to **ToT’s** **relatively simple tasks** that can be addressed by **brute-force search**, such as Game of 24 and Crosswords. The distinct target between DFSDT and ToT determines the significant difference in the implementation details.",
        url: "https://arxiv.org/abs/2307.16789",
      },
      {
        paper_title: "Graph of Thoughts: Solving Elaborate Problems with Large Language Models",
        text: "We introduce Graph of Thoughts (GoT): a framework that advances prompting capabilities in large language models (LLMs) **beyond those offered by paradigms such as** Chain-of-Thought or **Tree of Thoughts (ToT).** The key idea and primary advantage of GoT is the ability to model the information generated by an LLM as an arbitrary graph, where units of information (“LLM thoughts”) are vertices, and edges correspond to dependencies between these vertices. […] We illustrate that GoT offers advantages over state of the art on different tasks, for example **increasing the quality of sorting by 62% over ToT, while simultaneously reducing costs by >31%.**",
        url: "https://arxiv.org/abs/2308.09687",
      },
      {
        paper_title: "Reasoning with Language Model is Planning with World Model",
        text: "Concurrently to our work, Yao et al. (2023) apply heuristic-based search, like depth-/breadth-first search, for better reasoning paths. However, **none of the above methods formally introduce the world model and instantiates the reward and state into a unified framework.**",
        url: "https://arxiv.org/abs/2305.14992",
      },
    ],
    paper_id: "",
    paper_title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models",
    summary:
      "Mixed Recognition and Skepticism: Academic reviewers acknowledge the improvement of Chain of Thoughts (CoT) by Tree of Thoughts (ToT). Criticism on the limited scope and lack of novelty in the approach. Efficiency Concerns: Raised concerns about the cost implications of multiple GPT-4 queries. Suggestions for more comprehensive evaluations and efficiency comparisons. Community Sentiment: Interest in the paper's ideas, with discussions on Twitter. Questions about its impact and application on established benchmarks.",
    paper_url: "https://arxiv.org/abs/2305.10601",
    code_url: "https://github.com/princeton-nlp/tree-of-thought-llm",
    semantic_scholar_url: "https://www.semanticscholar.org/paper/Tree-of-Thoughts%3A-Deliberate-Problem-Solving-with-Yao-Yu/2f3822eb380b5e753a6d579f31dfc3ec4c4a0820",
    connected_papers_url: "https://www.connectedpapers.com/main/2f3822eb380b5e753a6d579f31dfc3ec4c4a0820/Tree-of-Thoughts%3A-Deliberate-Problem-Solving-with-Large-Language-Models/graph",
  },
};
</script>

<template>
  <div v-if="paper2[paperId].peer_reviews || paper2[paperId].tweets || paper2[paperId].references">
    <TestView
      :peer_reviews="paper2[paperId].peer_reviews"
      :tweets="paper2[paperId].tweets"
      :references="paper2[paperId].references"
      :paper_title="paper2[paperId].paper_title"
      :summary="paper2[paperId].summary"
      :paper_url="paper2[paperId].paper_url"
      :code_url="paper2[paperId].code_url"
      :semantic_scholar_url="paper2[paperId].semantic_scholar_url"
      :connected_papers_url="paper2[paperId].connected_papers_url"
    />
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
