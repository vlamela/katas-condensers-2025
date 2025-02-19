# ADR: Validation of Candidate Submissions

## Context
Certifiable, Inc. needs to ensure the accuracy and integrity of data submitted by candidates by implementing guardrails to effectively detect plagiarism and AI-generated content. This is essential for maintaining the credibility of the certifications and supporting AI-assisted development processes.

## Decision
Implement a simple custom Retrieval-Augmented Generation (RAG) guardrail architecture. This approach will store and compare embeddings in a vector database to check submissions for plagiarism and AI-generated content.

## Rationale
- **Feasibility:** A simple RAG architecture allows for a straightforward implementation path without the complexity of integrating multiple systems initially.
- **Efficiency:** Using embeddings stored in a vector database provides a fast and efficient way to compare submissions against existing data.
- **Scalability:** This setup can be expanded in the future as data and resource requirements grow.

## Trade-Off Analysis

- **RAG Guardrail Approach (Chosen Option):**
  - **Pros:** Easily implemented with immediate utility for identifying plagiarism; flexible for future upgrades.
  - **Cons:** Initial capabilities may be limited in scope compared to more complex systems.
  - **Decision:** Accepted for its simplicity and direct integration into existing processes, providing a quick win in enhancing data integrity.

- **Full-Text Search with Elasticsearch:**
  - **Pros:** Efficient for keyword-based search and handling structured data.
  - **Cons:** Lacks semantic depth required for nuanced comparisons.
  - **Decision:** Denied for initial implementation, due to less suitability for nuanced tasks compared to RAG.

- **Specialized Semantic Analysis Tools:**
  - **Pros:** Deep semantic understanding for text analysis.
  - **Cons:** Complexity and resource demand that may not be immediately necessary.
  - **Decision:** Denied for initial implementation due to the current focus on simplicity.

## Consequences
- **Positive:**
  - **Quick Deployment:** Rapid implementation of guardrails enhances submission integrity without significant delays.
  - **Future Expandability:** Can serve as a foundation for integrating more advanced features and tools as necessary.

- **Negative:**
  - **Limited Initial Capabilities:** May not catch all sophisticated instances of plagiarism or AI-generated content.
  - **Resource Needs:** Initial setup of the vector database and embedding comparisons requires focused resource allocation.
