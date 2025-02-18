# ADR: Validation of Company-Provided Data

## Context
Certifiable, Inc. provides multiple choice questions and answers for Test 1 (Aptitude Test), as well as case studies with potential solutions for Test 2 (Architecture Solution). It is crucial to ensure the accuracy and relevance of these materials to maintain the integrity of the certification process.

## Decision
Begin with a manual validation process for company-provided data, leveraging expert review to ensure question quality and case study relevance. Consider future automation opportunities for efficiency and scalability as the process evolves.

## Rationale
- **Consistency and Expertise:** Manual validation leverages the expertise of employed software architects, ensuring that content meets the required standards.
- **Infrequency of Changes:** Given that new questions and case studies are not added frequently, manual validation is cost-effective and sufficient at the start.
- **Future Automation Potential:** As processes grow or change frequency increases, automation can be explored to enhance efficiency and reduce manual effort.

## Trade-Off Analysis

- **Manual Validation (Chosen Initial Approach):**
  - **Pros:** Ensures high-quality, expert-reviewed content; minimal initial cost and complexity.
  - **Cons:** Time-consuming for experts; scalability limitations as volume increases.
  - **Decision:** Accepted initially due to the current volume and frequency of content updates, making manual oversight manageable and effective.

- **Potential Automation Solutions:**
  - **Pros:** Reduces long-term effort and potential for human error; scalable with growing needs.
  - **Cons:** Initial setup cost and complexity; requires robust AI models that may need significant data to train.
  - **Decision:** Considered for future implementation, especially if content update frequency or volume increases significantly, making automation more beneficial.

## Consequences
- **Positive:**
  - **High-Quality Assurance:** Ensures content relevance and accuracy through expert validation.
  - **Cost Efficiency:** Avoids upfront technological investments until justified by increased need.

- **Negative:**
  - **Resource Utilization:** Requires dedicated expert effort, which could limit attention on other critical tasks.
  - **Scalability Constraints:** Manual processes may become unsustainable with substantially increased content updates.
