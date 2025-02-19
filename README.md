# katas-condensers-2025

This repo holds devlierables of Condensers team for O'Reily Kata Winter 2025 event.

# Overview

We identifed following scenarios of using AI in certification system:

1. Process automation - company has a fear that the current manual processes of certification will not be able to handle increased load next years (see constraints below).
   - Potential improvements:
     - (out of scope for first iteration) New multiple choice and short answer questions (test 1) generation.
     - (out of scope for first iteration) Find the need to modify questions in test 1, based on candidates submissions.
     - Manual grading of short answers (test 1)
       - (out of scope for first iteration) Short answer (test 1) validation against plagiarism/AI generation. 
       - (!!!1st prio!!!) Short answer (test 1) validation for correctness.
     - Removing bottleneck of designated expert software architects (5 of 300).
       - (out of scope for first iteration) New case studies (test 2) generation, based on number of input parameters (architecture style, type of communications, technical context etc).
     - Manual grading of case study submission (test 2)
       - (out of scope for first iteration) Case study submission (test 2) validation against plagiarism/AI generation.
       - (out of scope for first iteration) Case study submission (test 2) validation for correctness.
       - (out of scope for first iteration) Detailed reasoning email generation (test 2).

2. Accuracy in:
   1. (out of scope for first iteration) Company provided data (multiple choices questions in test 1, case studies in test 2).
   2. Candidate submissions grading (short answers in test 1, architectural solution in test 2).

# Diagrams

## Static view

1. C4 Landscape view:
   1. [source](./architecture/static%20views/landscape.c4)
   2. ![static image](./assets/static%2520views/commonLandscape.png)
2. Administration proces view:
   1. [source](./architecture/static%20views/c4_l2/administration.c4)
   2. ![static image](./assets/static%2520views/c4_l2/administrativeSystemContext.png)
3. Aptitude test view:
   1. [source](./architecture/static%20views/c4_l2/aptitudeTest.c4)
   2. ![static image](./assets/static%2520views/c4_l2/aptitudeTestSystemContext.png)
4. Embeddings data pipeline view:
   1. [source](./architecture/static%20views/c4_l3/new_multimodalEmbeddingsPipeline.c4)
   2. ![static image](./assets/static%2520views/c4_l3/multimodalEmbeddingsPipelineContainer.png)

## Dynamic views

1. Dynamic view of the 'Modify Aptitude Tests' use case of Administration Process:
   1. [source](./architecture/dynamic%20views/certificationProcessAptitude.c4)
   2. ![static image](./assets/dynamic%2520views/modifyAptitudeTest.png)
2. Dynamic view of the 'Certification Process (Test 1: Aptitude Test)' use case:
   1. [source](./architecture/dynamic%20views/certificationProcessAptitude.c4)
   2. ![static image](./assets/dynamic%2520views/certificationProcessAptitudeTest.png)
3. Dynamic view of the 'Modify Case Studies and Grading Criteria' use case of Administration Process:
   1. [source](./architecture/dynamic%20views/certificationProcessAptitude.c4)
   2. ![static image](./assets/dynamic%2520views/modifyCaseStudiesAndGradingCriteria.png)

## Legend:
   1. Green blocks - added software systems or containers.
   2. Amber blocks - changed software systems or containers.

# ADRs

1. [Validation for Correctness, common](./architecture/adr/1_validation_for_correctness_common.md)
2. [Validation for Correctness, embedding models](./architecture/adr/1_validation_for_correctness_embedding_model.md)
3. [Accuracy of candidate submission](./architecture/adr/2_accuracy_candidate_submission.md)
4. [Accuracy of commpany provided data](./architecture/adr/2_accuracy_company_provided_data.md)