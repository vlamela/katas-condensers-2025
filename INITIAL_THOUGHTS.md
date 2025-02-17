# Drivers

1. Process automation - company has a fear that the current manual processes of certification will not be able to handle increased load next years (see constraints below).
   - Potential improvements:
     - New multiple choice and short answer questions (test 1) generation.
     - Find the need to modify questions in test 1, based on candidates submissions.
     - Manual grading of short answers (test 1)
       - Short answer (test 1) validation against plagiarism/AI generation. 
       - (!!!most impact!!!) Short answer (test 1) validation for correctness
     - Removing bottleneck of designated expert software architects (5 of 300)
       - New case studies (test 2) generation, based on number of input parameters (architecture style, type of communications, technical context etc)
     - Manual grading of case study submission (test 2)
       - Case study submission (test 2) validation against plagiarism/AI generation.
       - (!!!most impact!!!) Case study submission (test 2) validation for correctness.
       - Detailed reasoning email generation (test 2).

2. Accuracy in both input data (multiple choices questions in test 1, case studies in test 2) and grading (multiple choices and short answers in test 1) candidate is crucial.

# Target metrics

1. (process time) Currently, average time it takes to manually grade each test is 8 hrs (3 hrs + 8 hrs). Final duration of automated grading of test 1 and test 2 should be faster by 1110% (900% to represent 10x times increase in number of weekly candidates, plus 21%), e.g it should not exceed 5 minutes.
2. (accuracy - proposal) 99% of automatically checked submissions should not be challenged by candidates.
3. (cost) Currently, average cost of manual grading test 1 and test 2 for one candidate is 550$ (50$ per hr * (3 hrs + 8 hrs)). Final cost of automated grading of test 1 and test 2 should not exceed that number.

# Constraints

1. Expected growth worldwide is from 200 candidates per week up to 1000-2000 (5x-10x times) this year, because of expansion to other parts of the world.
2. Market capacity in USA is 176k software architects at the moment of writing, with 300k job openings yet to be filled.
3. Market capacity in U.K., Europe and Asia is estimated at 600k at the moment of writing.
4. 80% of companies across USA and overseas accept or insist on Certifiable, Inc. certification.
5. Expected growth 21% worldwide next 4 years.
6. Certification exam cost is fixed, 800$.
7. It takes for an employed expert software architect on average 3 hours to grade short answer questions in test 1 for a given candidate and provide candidate feedback.
8. It takes for an employed expert software architect on average 8 hours to grade the architecture submission in test 2 for a given candidate and provide candidate feedback.
9. Company employs 300 software architect.
   - What is their role?
     - Give feedback on existing case studies (test 2).
     - Review and grade software architecture submissions.
10. Of 300 software architects 5 are “designated”
    - What is their role?
      - Add or modify aptitude test questions based on their own analysis and feedback from other employed experts.
      - Add or modify case studies based on their own analysis and feedback from other employed experts.

# Actors

1. Employed expert software architect.
2. Designated employed expert software architect.
3. Candidate.
4. Administrator from Certifiable Inc.

# Functional requirements

1. Turnaround for grading test 1 should not exceed 1 week.
2. Turnaround for grading test 2 should not exceed 1 week.
3. Candidate should start test 2 in 30 days upon successful completion of test 1.
4. Download of case study 2 by candidate signifies start of test 2.
5. 100% accuracy of input data and grading during exams (test 1).

# NFRs

1. Current number of active users (total, not concurrent) - 120k.
2. System should be capable to support expected growth in user base in 5 years range.
3. Cost is not a major factor, but still needs to be considered.

# ADRs

1. TBD