# ADR: Reasoning Email Generation

## Context
Certifiable, Inc. requires an efficient system for automatically generating comprehensive feedback emails personalized for candidates. The aim is to enhance satisfaction and operational efficiency while using AI to provide detailed reasoning.

## Decision
Adopt a template-based email generation system augmented with Retrieval-Augmented Generation (RAG) for populating specific content fields. This approach leverages static templates for structure and RAG for personalized, context-specific content.

## Rationale
- **Simplicity and Efficiency:** Templates provide a structured framework for emails, reducing complexity and ensuring consistency across communications.
- **Contextual Relevance:** RAG is used to generate key content fields, ensuring each email contains personalized and contextually accurate information for the candidate.
- **Resource Management:** This approach balances the need for personalization with available computational resources and infrastructure.

## Trade-Off Analysis
- **Template-Based System with RAG:**
  - **Pros:** Streamlined process with clear structure and personalized content; efficient in terms of resource use and implementation.
  - **Cons:** May lack the deep personalization possible with a fully generative approach.
- **Fully LLM-Based System:**
  - **Pros:** Offers highly personalized and nuanced communications.
  - **Cons:** Higher computational demands and complexity.

## Consequences
- **Positive:**
  - **Enhanced Efficiency:** Reduces manual workload significantly while providing detailed and relevant feedback.
  - **Scalability:** Easily scales with increased candidate numbers, maintaining consistency and efficiency.

- **Negative:**
  - **Template Constraints:** Limited flexibility if template changes are required frequently.
  - **Initial Setup:** Requires careful design of templates and integration with RAG outputs.

## Technical Components/Libraries
- **Template Engine:** Use a template engine like Jinja2 for structuring emails.
