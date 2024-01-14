const data = {
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

export default data;
