# ADR: Validation for Correctness

## Context
Certifiable, Inc. requires a system to automate the grading of short answers and case study submissions, ensuring high accuracy in validating correctness. Submissions include both structured content (e.g., UML diagrams, templated ADRs) and unstructured content (free-form text). There's a need for up-to-date information to be incorporated in the validation process.

## Decision
Implement a Retrieval-Augmented Generation (RAG) Architecture. This approach combines advanced retrieval techniques to source relevant, contextual data with generative AI capabilities, effectively enhancing the validation process by utilizing both static and dynamic data sources.

## Rationale
- **Information Retrieval:** Provides access to a broad array of contextually relevant information, ensuring that the validation process is informed by the latest available data.
- **Generative AI:** Uses its capabilities to interpret and validate nuanced submissions, integrating retrieved contextual information.
- **Handling Mixed Content:** Able to manage both structured and unstructured content, enhancing adaptability and precision in validation.
- **Dynamic Data Utilization:** Overcomes the limitations of relying solely on a static dataset by continuously integrating up-to-date information.

## Fit with Constraints
- **Scalability and Adaptability:** Efficiently manages increased candidate volumes without extensive additional data labeling, leveraging existing information.
- **Resource Management:** While more complex than classical ML, it effectively balances the need for accuracy with resource availability through scalable retrieval and generation.

## Comparison of Architectures and Trade-Off Analysis

### LLM Fine-Tuning
- **Pros:** Offers nuanced language understanding tailored to specific tasks.
- **Cons:** Requires substantial labeled data and computational resources; higher cost and initial complexity.
- **Decision:** Denied, primarily due to the requirement for substantial labeled data and high resource demand, which is a limitation given the expected growth in number of candidates.

### Classical ML Architecture
- **Pros:** Efficiently handles structured data with lower computational overhead.
- **Cons:** Limited in handling unstructured data and dynamic content without substantial preprocessing.
- **Decision:** Denied because of the growing need to process both structured and unstructured content dynamically, which classical ML struggles with, especially at scale.

### RAG Architecture (Chosen Approach)
- **Pros:** Combines contextual retrieval with generative insights, offering high accuracy and flexibility by utilizing both structured and dynamic data sources.
- **Cons:** Involves managing retrieval and generation components, requiring robust integration.
- **Decision:** Accepted due to its ability to integrate retrieval and generation capabilities, handling varied content efficiently and adapting to dynamic data needs.

### Rule-Based Systems
- **Pros:** Simple implementation for structured tasks with consistent performance.
- **Cons:** Lacks flexibility for evolving scenarios and requires manual intervention.
- **Decision:** Denied because the flexibility required for handling a diverse mix of candidate submissions and evolving content outpaces the capabilities of static, rule-based approaches.

### LLM Agent Architecture
- **Pros:** Capable of performing complex tasks and handling nuanced content with high accuracy; adaptable to dynamic scenarios.
- **Cons:** High computational demand and complexity in implementation and integration, particularly for large-scale applications.
- **Decision:** Denied due to the resource-intensive nature and the complexity involved in managing LLM agents, which may not align with the cost and scalability constraints given the expected increase in candidate volumes.

## Consequences
- **Positive:**
  - **Enhanced Accuracy and Contextual Relevance:** Benefits from integrating retrieval processes with generative models, improving validation accuracy.
  - **Adaptability:** Easily adapts to new data inputs, enhancing the system's ability to scale as the candidate base grows.

- **Negative:**
  - **Infrastructure Complexity:** Requires efficient management of retrieval and generation components.
  - **Initial Integration Effort:** Significant effort in setting up effective retrieval systems and integrating them with generative models.
