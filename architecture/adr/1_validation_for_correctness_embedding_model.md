# ADR: Selection of Embedding Model for Generating Embeddings

## Context
Certifiable, Inc. requires a robust solution for generating embeddings from aptitude test questions and architectural solution case studies. These embeddings will be used for semantic analysis, validation, and ensuring content integrity across certifications. This involves generating embeddings from both text and images.

## Decision
Adopt BERT (Bidirectional Encoder Representations from Transformers) as the primary embedding model for generating embeddings from textual content and CLIPModel from Hugging Face Transformers for generating embeddings from image content. These models are chosen for their strong performance in their respective domains.

## Rationale
- **Semantic Understanding of Text:** BERT is well-known for its ability to understand context and generate embeddings that capture complex linguistic and semantic relationships.
- **Multimodal Capability with CLIP:** CLIPModel excels in understanding and associating visual content with text, making it suitable for generating image embeddings in environments where both modalities are present.
- **Versatility:** Capable of handling diverse content types, making them suitable for both textual analysis and image-based case studies.
- **Industry Tested:** These models are widely used across industries and are supported by numerous libraries and frameworks, ensuring reliability and robustness.

## Trade-Off Analysis

- **BERT (Chosen Model for Text):**
  - **Pros:** Excellent at capturing context and semantics, strong community support, and pre-trained models widely available.
  - **Cons:** Computationally intensive; requires significant resources for processing.
  - **Decision:** Accepted for robust semantic capabilities in text processing.

- **CLIP (Chosen Model for Images):**
  - **Pros:** High performance in generating detailed visual embeddings and understanding the relationship between text and images.
  - **Cons:** Requires preprocessing of images and computational resources similar to textual models.
  - **Decision:** Accepted for its ability to effectively process and generate embeddings from images, especially in multimodal contexts.

- **Alternative Models (e.g., GPT, RoBERTa for Text):**
  - **Pros:** Similar performance in capturing nuanced semantic details.
  - **Cons:** Often require fine-tuning for optimal performance in specific use cases.
  - **Decision:** Denied in favor of BERT and CLIP's domain-specific strengths.

## Consequences
- **Positive:**
  - **Enhanced Precision:** Improved accuracy in comparing and validating questions and case studies due to the combined strengths of text and image embeddings.
  - **Community Resources:** Leverage existing infrastructure and community support for smoother implementation and troubleshooting.

- **Negative:**
  - **Resource Demands:** High computational requirements may necessitate infrastructure upgrades or optimization.
  - **Implementation Complexity:** Initial setup of models and embedding pipelines requires detailed planning and execution.