function t(e){switch(e){case"index":return`direction: down

Candidate: {
  label: "candidate"
  shape: person
}
DesignatedExpert: {
  label: "designatedExpert"
  shape: person
}
Expert: {
  label: "expert"
  shape: person
}
CompanyAdmin: {
  label: "companyAdmin"
  shape: person
}
CandidateTestingUi: {
  label: "candidateTestingUi"
}
CertificationViewerUi: {
  label: "certificationViewerUi"
}
ExpertAdminUi: {
  label: "expertAdminUi"
}
ExpertGradingUi: {
  label: "expertGradingUi"
}
CompanyAdminUi: {
  label: "companyAdminUi"
}
CaseStudyRetrievalService: {
  label: "caseStudyRetrievalService"
}
CandidateRegistrationService: {
  label: "candidateRegistrationService"
}
AptitudeTestTaker: {
  label: "aptitudeTestTaker"
}
CertificationViewerService: {
  label: "certificationViewerService"
}
AptitudeTestMaintenanceService: {
  label: "aptitudeTestMaintenanceService"
}
CaseStudyMaintenanceService: {
  label: "caseStudyMaintenanceService"
}
AptitudeTestAnalysisService: {
  label: "aptitudeTestAnalysisService"
}
ArchitectureManualGrader: {
  label: "architectureManualGrader"
}
AptitudeManualGrader: {
  label: "aptitudeManualGrader"
}
UserMaintenanceService: {
  label: "userMaintenanceService"
}
MultimodalEmbeddingsPipeline: {
  label: "multimodalEmbeddingsPipeline"
}
ArchitectureSubmissionService: {
  label: "architectureSubmissionService"
}
CandidateCertificationService: {
  label: "candidateCertificationService"
}
CandidateArchitectureNotification: {
  label: "candidateArchitectureNotification"
}
AptitudeManualCapture: {
  label: "aptitudeManualCapture"
}
AptitudeAutoGrader: {
  label: "aptitudeAutoGrader"
}
CandidateAptitudeNotification: {
  label: "candidateAptitudeNotification"
}
CandidateStatusService: {
  label: "candidateStatusService"
}

Candidate -> CandidateTestingUi: "[...]"
Candidate -> CertificationViewerUi: "views certificate"
DesignatedExpert -> CompanyAdminUi: "manages own profile"
DesignatedExpert -> ExpertAdminUi: "[...]"
Expert -> ExpertGradingUi: "grades architecture solution, provides feedback"
Expert -> CompanyAdminUi: "manages own profile"
CompanyAdmin -> CompanyAdminUi: "manages expert software architects and their profiles"
CandidateTestingUi -> CaseStudyRetrievalService: "retrieves case study"
CandidateTestingUi -> ArchitectureSubmissionService: "uploads architecture solution"
CandidateTestingUi -> CandidateRegistrationService: "registers candidate for certification"
CandidateTestingUi -> AptitudeTestTaker: "takes aptitude test"
CandidateTestingUi -> CandidateStatusService: "checks progress of certification attempt"
ExpertGradingUi -> ArchitectureManualGrader: "grades architecture solution, provides feedback"
ExpertGradingUi -> AptitudeManualGrader: "grades aptitude test, provides feedback"
CertificationViewerUi -> CertificationViewerService: "views certificate"
CaseStudyRetrievalService -> CandidateStatusService: "updates candidate' architecture solution status"
ArchitectureSubmissionService -> CandidateStatusService: "updates candidate' architecture solution status"
ArchitectureManualGrader -> ArchitectureSubmissionService: "gets architecture solution"
ArchitectureManualGrader -> CandidateCertificationService: "generates and stores certificate"
ArchitectureManualGrader -> CandidateArchitectureNotification: "notifies candidate of their grade for the architecture submission, provides feedback, provides instructions on how to proceed"
ArchitectureManualGrader -> CandidateStatusService: "gets candidate' architecture solution status"
CertificationViewerService -> CandidateCertificationService: "gets certificate"
CompanyAdminUi -> UserMaintenanceService: "manages expert software architects and their profiles"
ExpertAdminUi -> AptitudeTestMaintenanceService: "manages aptitude test questions"
ExpertAdminUi -> CaseStudyMaintenanceService: "manages case studies"
ExpertAdminUi -> AptitudeTestAnalysisService: "analyzes aptitude test results"
AptitudeTestMaintenanceService -> MultimodalEmbeddingsPipeline: "generates embeddings from multimodal input (aptitude test questions and answers)"
CaseStudyMaintenanceService -> MultimodalEmbeddingsPipeline: "generates embeddings from multimodal input (case study and its baseline solution)"
AptitudeTestTaker -> AptitudeManualCapture: "captures aptitude test short answers"
AptitudeTestTaker -> AptitudeAutoGrader: "grades aptitude test multiple choice answers"
AptitudeManualGrader -> AptitudeManualCapture: "receives short answers of aptitude test"
AptitudeManualGrader -> AptitudeAutoGrader: "receives grade of aptitude test multiple choice"
AptitudeManualGrader -> CandidateStatusService: "updates candidate' aptitude test status"
AptitudeManualGrader -> CandidateAptitudeNotification: "notifies candidate of test results, provides feedback, provides instructions on how to proceed"
`;case"commonLandscape":return`direction: down

@gr1: {
  label: "Actors"

  NatedExpert: {
    label: "designatedExpert"
    shape: person
  }
  T: {
    label: "expert"
    shape: person
  }
  NyAdmin: {
    label: "companyAdmin"
    shape: person
  }
  Date: {
    label: "candidate"
    shape: person
  }
}
@gr2: {
  label: "Administrative"

  NyAdminUi: {
    label: "companyAdminUi"
  }
  TAdminUi: {
    label: "expertAdminUi"
  }
  AintenanceService: {
    label: "userMaintenanceService"
  }
  UdeTestMaintenanceService: {
    label: "aptitudeTestMaintenanceService"
  }
  TudyMaintenanceService: {
    label: "caseStudyMaintenanceService"
  }
  UdeTestAnalysisService: {
    label: "aptitudeTestAnalysisService"
  }
}
@gr3: {
  label: "Aptitude Test"

  DateTestingUi: {
    label: "candidateTestingUi"
  }
  TGradingUi: {
    label: "expertGradingUi"
  }
  DateRegistrationService: {
    label: "candidateRegistrationService"
  }
  UdeTestTaker: {
    label: "aptitudeTestTaker"
  }
  UdeManualGrader: {
    label: "aptitudeManualGrader"
  }
  UdeManualCapture: {
    label: "aptitudeManualCapture"
  }
  UdeAutoGrader: {
    label: "aptitudeAutoGrader"
  }
  DateAptitudeNotification: {
    label: "candidateAptitudeNotification"
  }
  DateStatusService: {
    label: "candidateStatusService"
  }
}
@gr4: {
  label: "Case Study"

  FicationViewerUi: {
    label: "certificationViewerUi"
  }
  TudyRetrievalService: {
    label: "caseStudyRetrievalService"
  }
  TectureManualGrader: {
    label: "architectureManualGrader"
  }
  FicationViewerService: {
    label: "certificationViewerService"
  }
  TectureSubmissionService: {
    label: "architectureSubmissionService"
  }
  DateArchitectureNotification: {
    label: "candidateArchitectureNotification"
  }
  DateCertificationService: {
    label: "candidateCertificationService"
  }
}
MultimodalEmbeddingsPipeline: {
  label: "multimodalEmbeddingsPipeline"
}

@gr1.NatedExpert -> @gr2.NyAdminUi: "manages own profile"
@gr1.T -> @gr2.NyAdminUi: "manages own profile"
@gr1.NyAdmin -> @gr2.NyAdminUi: "manages expert software architects and their profiles"
@gr1.NatedExpert -> @gr2.TAdminUi: "[...]"
@gr2.NyAdminUi -> @gr2.AintenanceService: "manages expert software architects and their profiles"
@gr2.TAdminUi -> @gr2.UdeTestMaintenanceService: "manages aptitude test questions"
@gr2.TAdminUi -> @gr2.TudyMaintenanceService: "manages case studies"
@gr2.TAdminUi -> @gr2.UdeTestAnalysisService: "analyzes aptitude test results"
@gr2.UdeTestMaintenanceService -> MultimodalEmbeddingsPipeline: "generates embeddings from multimodal input (aptitude test questions and answers)"
@gr2.TudyMaintenanceService -> MultimodalEmbeddingsPipeline: "generates embeddings from multimodal input (case study and its baseline solution)"
@gr1.Date -> @gr3.DateTestingUi: "[...]"
@gr1.T -> @gr3.TGradingUi: "grades architecture solution, provides feedback"
@gr3.DateTestingUi -> @gr3.DateRegistrationService: "registers candidate for certification"
@gr3.DateTestingUi -> @gr3.UdeTestTaker: "takes aptitude test"
@gr3.UdeTestTaker -> @gr3.UdeManualCapture: "captures aptitude test short answers"
@gr3.UdeTestTaker -> @gr3.UdeAutoGrader: "grades aptitude test multiple choice answers"
@gr3.TGradingUi -> @gr3.UdeManualGrader: "grades aptitude test, provides feedback"
@gr3.UdeManualGrader -> @gr3.UdeManualCapture: "receives short answers of aptitude test"
@gr3.UdeManualGrader -> @gr3.UdeAutoGrader: "receives grade of aptitude test multiple choice"
@gr3.DateTestingUi -> @gr3.DateStatusService: "checks progress of certification attempt"
@gr3.UdeManualGrader -> @gr3.DateStatusService: "updates candidate' aptitude test status"
@gr3.UdeManualGrader -> @gr3.DateAptitudeNotification: "notifies candidate of test results, provides feedback, provides instructions on how to proceed"
@gr1.Date -> @gr4.FicationViewerUi: "views certificate"
@gr3.DateTestingUi -> @gr4.TudyRetrievalService: "retrieves case study"
@gr4.TudyRetrievalService -> @gr3.DateStatusService: "updates candidate' architecture solution status"
@gr3.DateTestingUi -> @gr4.TectureSubmissionService: "uploads architecture solution"
@gr4.TectureSubmissionService -> @gr3.DateStatusService: "updates candidate' architecture solution status"
@gr3.TGradingUi -> @gr4.TectureManualGrader: "grades architecture solution, provides feedback"
@gr4.TectureManualGrader -> @gr3.DateStatusService: "gets candidate' architecture solution status"
@gr4.TectureManualGrader -> @gr4.TectureSubmissionService: "gets architecture solution"
@gr4.TectureManualGrader -> @gr4.DateCertificationService: "generates and stores certificate"
@gr4.TectureManualGrader -> @gr4.DateArchitectureNotification: "notifies candidate of their grade for the architecture submission, provides feedback, provides instructions on how to proceed"
@gr4.FicationViewerUi -> @gr4.FicationViewerService: "views certificate"
@gr4.FicationViewerService -> @gr4.DateCertificationService: "gets certificate"
`;case"administrativeSystemContext":return`direction: down

CompanyAdminUi: {
  label: "companyAdminUi"
}
ExpertAdminUi: {
  label: "expertAdminUi"
}
UserMaintenanceService: {
  label: "userMaintenanceService"
}
AptitudeTestMaintenanceService: {
  label: "aptitudeTestMaintenanceService"
}
CaseStudyMaintenanceService: {
  label: "caseStudyMaintenanceService"
}
AptitudeTestAnalysisService: {
  label: "aptitudeTestAnalysisService"
}
MultimodalEmbeddingsPipeline: {
  label: "multimodalEmbeddingsPipeline"
}

CompanyAdminUi -> UserMaintenanceService: "manages expert software architects and their profiles"
ExpertAdminUi -> AptitudeTestMaintenanceService: "manages aptitude test questions"
ExpertAdminUi -> CaseStudyMaintenanceService: "manages case studies"
ExpertAdminUi -> AptitudeTestAnalysisService: "analyzes aptitude test results"
AptitudeTestMaintenanceService -> MultimodalEmbeddingsPipeline: "generates embeddings from multimodal input (aptitude test questions and answers)"
CaseStudyMaintenanceService -> MultimodalEmbeddingsPipeline: "generates embeddings from multimodal input (case study and its baseline solution)"
`;case"aptitudeTestSystemContext":return`direction: down

@gr1: {
  label: "Users"

  Date: {
    label: "candidate"
    shape: person
  }
  T: {
    label: "expert"
    shape: person
  }
}
@gr2: {
  label: "UI"

  DateTestingUi: {
    label: "candidateTestingUi"
  }
  TGradingUi: {
    label: "expertGradingUi"
  }
}
@gr3: {
  label: "Registration"

  DateRegistrationService: {
    label: "candidateRegistrationService"
  }
}
@gr4: {
  label: "Aptitude Test"

  UdeTestTaker: {
    label: "aptitudeTestTaker"
  }
}
@gr5: {
  label: "Grading"

  UdeManualGrader: {
    label: "aptitudeManualGrader"
  }
  UdeManualCapture: {
    label: "aptitudeManualCapture"
  }
  UdeAutoGrader: {
    label: "aptitudeAutoGrader"
  }
}
@gr6: {
  label: "Certification status"

  DateStatusService: {
    label: "candidateStatusService"
  }
}
@gr7: {
  label: "Notification"

  DateAptitudeNotification: {
    label: "candidateAptitudeNotification"
  }
}

@gr1.Date -> @gr2.DateTestingUi: "[...]"
@gr1.T -> @gr2.TGradingUi: "grades architecture solution, provides feedback"
@gr2.DateTestingUi -> @gr3.DateRegistrationService: "registers candidate for certification"
@gr2.DateTestingUi -> @gr4.UdeTestTaker: "takes aptitude test"
@gr4.UdeTestTaker -> @gr5.UdeManualCapture: "captures aptitude test short answers"
@gr4.UdeTestTaker -> @gr5.UdeAutoGrader: "grades aptitude test multiple choice answers"
@gr2.TGradingUi -> @gr5.UdeManualGrader: "grades aptitude test, provides feedback"
@gr5.UdeManualGrader -> @gr5.UdeManualCapture: "receives short answers of aptitude test"
@gr5.UdeManualGrader -> @gr5.UdeAutoGrader: "receives grade of aptitude test multiple choice"
@gr2.DateTestingUi -> @gr6.DateStatusService: "checks progress of certification attempt"
@gr5.UdeManualGrader -> @gr6.DateStatusService: "updates candidate' aptitude test status"
@gr5.UdeManualGrader -> @gr7.DateAptitudeNotification: "notifies candidate of test results, provides feedback, provides instructions on how to proceed"
`;case"architectureSolutionSystemContext":return`direction: down

@gr1: {
  label: "Users"

  Date: {
    label: "candidate"
    shape: person
  }
  T: {
    label: "expert"
    shape: person
  }
}
@gr2: {
  label: "UI"

  DateTestingUi: {
    label: "candidateTestingUi"
  }
  TGradingUi: {
    label: "expertGradingUi"
  }
  FicationViewerUi: {
    label: "certificationViewerUi"
  }
}
@gr3: {
  label: "Case Study"

  TudyRetrievalService: {
    label: "caseStudyRetrievalService"
  }
}
@gr5: {
  label: "Grading"

  TectureManualGrader: {
    label: "architectureManualGrader"
  }
}
@gr4: {
  label: "Submission"

  TectureSubmissionService: {
    label: "architectureSubmissionService"
  }
}
@gr7: {
  label: "Notification"

  DateArchitectureNotification: {
    label: "candidateArchitectureNotification"
  }
}
@gr6: {
  label: "Certification status"

  DateStatusService: {
    label: "candidateStatusService"
  }
  FicationViewerService: {
    label: "certificationViewerService"
  }
  DateCertificationService: {
    label: "candidateCertificationService"
  }
}

@gr1.Date -> @gr2.DateTestingUi: "[...]"
@gr1.T -> @gr2.TGradingUi: "grades architecture solution, provides feedback"
@gr1.Date -> @gr2.FicationViewerUi: "views certificate"
@gr2.DateTestingUi -> @gr3.TudyRetrievalService: "retrieves case study"
@gr2.DateTestingUi -> @gr4.TectureSubmissionService: "uploads architecture solution"
@gr2.TGradingUi -> @gr5.TectureManualGrader: "grades architecture solution, provides feedback"
@gr5.TectureManualGrader -> @gr4.TectureSubmissionService: "gets architecture solution"
@gr2.DateTestingUi -> @gr6.DateStatusService: "checks progress of certification attempt"
@gr3.TudyRetrievalService -> @gr6.DateStatusService: "updates candidate' architecture solution status"
@gr4.TectureSubmissionService -> @gr6.DateStatusService: "updates candidate' architecture solution status"
@gr5.TectureManualGrader -> @gr6.DateStatusService: "gets candidate' architecture solution status"
@gr5.TectureManualGrader -> @gr6.DateCertificationService: "generates and stores certificate"
@gr2.FicationViewerUi -> @gr6.FicationViewerService: "views certificate"
@gr6.FicationViewerService -> @gr6.DateCertificationService: "gets certificate"
@gr5.TectureManualGrader -> @gr7.DateArchitectureNotification: "notifies candidate of their grade for the architecture submission, provides feedback, provides instructions on how to proceed"
`;case"aptitudeManualGraderContainer":return`direction: down

@gr1: {
  label: "Actors"

  T: {
    label: "expert"
    shape: person
  }
}
@gr2: {
  label: "UI"

  TGradingUi: {
    label: "expertGradingUi"

    Ui: {
      label: "ui"
    }
  }
}
@gr4: {
  label: "New Containers"

  UdeManualGraderPromptOrchestrator: {
    label: "promptOrchestrator"
  }
  UdeManualGraderRetrievalService: {
    label: "retrievalService"
  }
  UdeManualGraderCandidateSubmissionGuardrail: {
    label: "candidateSubmissionGuardrail"
  }
  UdeManualGraderGenerationService: {
    label: "generationService"
  }
  UdeManualGraderEmbeddingsStore: {
    label: "embeddingsStore"
    shape: cylinder
  }
}
@gr3: {
  label: "Existing Containers"

  UdeManualCapture: {
    label: "aptitudeManualCapture"

    ShortAnswer: {
      label: "shortAnswer"
    }
  }
  UdeManualGraderShortAnswer: {
    label: "shortAnswer"
  }
  UdeManualGraderGradeConsolidation: {
    label: "gradeConsolidation"
  }
}

@gr2.TGradingUi.Ui -> @gr3.UdeManualGraderShortAnswer: "retrieves ungraded short answer questiions for the candidate"
@gr2.TGradingUi.Ui -> @gr3.UdeManualGraderGradeConsolidation: "retrieves graded short answer questions for the candidate"
@gr4.UdeManualGraderPromptOrchestrator -> @gr3.UdeManualCapture.ShortAnswer: "retrieves ungraded short answers for grading"
@gr1.T -> @gr2.TGradingUi: "grades architecture solution, provides feedback"
`;case"aptitudeTestMaintenanceContainer":return`direction: down

@gr1: {
  label: "Actors"

  NatedExpert: {
    label: "designatedExpert"
    shape: person
  }
}
@gr2: {
  label: "UI"

  TAdminUi: {
    label: "expertAdminUi"

    Ui: {
      label: "ui"
    }
  }
}
@gr3: {
  label: "Existing Containers"

  UdeTestMaintenanceServiceAptitudeTestMaintenance: {
    label: "aptitudeTestMaintenance"
  }
}
MultimodalEmbeddingsPipeline: {
  label: "multimodalEmbeddingsPipeline"

  Orchestrator: {
    label: "orchestrator"
  }
}

@gr2.TAdminUi.Ui -> @gr3.UdeTestMaintenanceServiceAptitudeTestMaintenance: "adds, removes or modifies aptitude test short questions"
@gr3.UdeTestMaintenanceServiceAptitudeTestMaintenance -> MultimodalEmbeddingsPipeline.Orchestrator: "generates embeddings from multimodal input (aptitude test questions and answers)"
@gr1.NatedExpert -> @gr2.TAdminUi: "[...]"
`;case"caseStudyMaintenanceContainer":return`direction: down

@gr1: {
  label: "Actors"

  NatedExpert: {
    label: "designatedExpert"
    shape: person
  }
}
@gr2: {
  label: "UI"

  TAdminUi: {
    label: "expertAdminUi"

    Ui: {
      label: "ui"
    }
  }
}
@gr3: {
  label: "Existing Containers"

  TudyMaintenanceServiceCaseStudyMaintenance: {
    label: "caseStudyMaintenance"
  }
}
MultimodalEmbeddingsPipeline: {
  label: "multimodalEmbeddingsPipeline"

  Orchestrator: {
    label: "orchestrator"
  }
}

@gr2.TAdminUi.Ui -> @gr3.TudyMaintenanceServiceCaseStudyMaintenance: "adds, removes or modifies case study and its baseline solution"
@gr3.TudyMaintenanceServiceCaseStudyMaintenance -> MultimodalEmbeddingsPipeline.Orchestrator: "generates embeddings from multimodal input (case study and its baseline solution)"
@gr1.NatedExpert -> @gr2.TAdminUi: "[...]"
`;case"multimodalEmbeddingsPipelineContainer":return`direction: down

MultimodalEmbeddingsPipelineOrchestrator: {
  label: "orchestrator"
}
@gr1: {
  label: "Text processing"

  ModalEmbeddingsPipelineTextExtractor: {
    label: "textExtractor"
  }
  ModalEmbeddingsPipelineTextPreprocessor: {
    label: "textPreprocessor"
  }
  ModalEmbeddingsPipelineTextTokenizer: {
    label: "textTokenizer"
  }
  ModalEmbeddingsPipelineTextEmbeddingsGenerator: {
    label: "textEmbeddingsGenerator"
  }
}
@gr2: {
  label: "Images processing"

  ModalEmbeddingsPipelineImagesExtractor: {
    label: "imagesExtractor"
  }
  ModalEmbeddingsPipelineImagePreprocessor: {
    label: "imagePreprocessor"
  }
  ModalEmbeddingsPipelineImageEmbeddingsGenerator: {
    label: "imageEmbeddingsGenerator"
  }
}
@gr3: {
  label: "Persistent Storage"

  ModalEmbeddingsPipelineEmbeddingsStore: {
    label: "embeddingsStore"
    shape: cylinder
  }
}

MultimodalEmbeddingsPipelineOrchestrator -> @gr1.ModalEmbeddingsPipelineTextExtractor: "extracts text from binary input files (PDF)"
@gr1.ModalEmbeddingsPipelineTextExtractor -> @gr1.ModalEmbeddingsPipelineTextPreprocessor: "preprocesses text input (aptitude test short questions and answers, case study)"
@gr1.ModalEmbeddingsPipelineTextPreprocessor -> @gr1.ModalEmbeddingsPipelineTextTokenizer: "tokenizes aptitude test short questions answers"
@gr1.ModalEmbeddingsPipelineTextTokenizer -> @gr1.ModalEmbeddingsPipelineTextEmbeddingsGenerator: "generates embeddings from tokenized short questions answers"
MultimodalEmbeddingsPipelineOrchestrator -> @gr2.ModalEmbeddingsPipelineImagesExtractor: "extracts images from binary input files (PDF)"
@gr2.ModalEmbeddingsPipelineImagesExtractor -> @gr2.ModalEmbeddingsPipelineImagePreprocessor: "preprocesses image input (case study)"
@gr2.ModalEmbeddingsPipelineImagePreprocessor -> @gr2.ModalEmbeddingsPipelineImageEmbeddingsGenerator: "generates embeddings from preprocessed images"
@gr1.ModalEmbeddingsPipelineTextEmbeddingsGenerator -> @gr3.ModalEmbeddingsPipelineEmbeddingsStore: "stores embeddings of valid short questions answers"
@gr2.ModalEmbeddingsPipelineImageEmbeddingsGenerator -> @gr3.ModalEmbeddingsPipelineEmbeddingsStore: "stores embeddings of valid short questions answers"
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    candidate [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate for certification</FONT></TD></TR></TABLE>>,
        likec4_id=candidate,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidatetestingui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateTestingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate Testing User Interface</FONT></TD></TR></TABLE>>,
        likec4_id=candidateTestingUi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidate -> candidatetestingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=if5hsw,
        style=dashed];
    certificationviewerui [height=2.5,
        label=<<FONT POINT-SIZE="19">certificationViewerUi</FONT>>,
        likec4_id=certificationViewerUi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidate -> certificationviewerui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">views certificate</FONT></TD></TR></TABLE>>,
        likec4_id="1ck6pup",
        style=dashed];
    designatedexpert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">designatedExpert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to add<BR/>or modify aptitude test questions or case<BR/>studies</FONT></TD></TR></TABLE>>,
        likec4_id=designatedExpert,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertadminui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expertAdminUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Admin User Interface</FONT></TD></TR></TABLE>>,
        likec4_id=expertAdminUi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    designatedexpert -> expertadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1jcxd9b",
        style=dashed];
    companyadminui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">companyAdminUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Company Admin User Interface</FONT></TD></TR></TABLE>>,
        likec4_id=companyAdminUi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    designatedexpert -> companyadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages own profile</FONT></TD></TR></TABLE>>,
        likec4_id=cnhkgm,
        style=dashed];
    expert [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to grade<BR/>candidate submissions</FONT></TD></TR></TABLE>>,
        likec4_id=expert,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertgradingui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expertGradingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Grading User Interface</FONT></TD></TR></TABLE>>,
        likec4_id=expertGradingUi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expert -> expertgradingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>,
        likec4_id=v207ly,
        style=dashed];
    expert -> companyadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages own profile</FONT></TD></TR></TABLE>>,
        likec4_id=ek8zow,
        style=dashed];
    companyadmin [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">companyAdmin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Company administrator</FONT></TD></TR></TABLE>>,
        likec4_id=companyAdmin,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    companyadmin -> companyadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages expert software architects and<BR/>their profiles</FONT></TD></TR></TABLE>>,
        likec4_id="1l728t2",
        minlen=1,
        style=dashed];
    casestudyretrievalservice [height=2.5,
        label=<<FONT POINT-SIZE="19">caseStudyRetrievalService</FONT>>,
        likec4_id=caseStudyRetrievalService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidatetestingui -> casestudyretrievalservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves case study</FONT></TD></TR></TABLE>>,
        likec4_id="1nnbm2d",
        style=dashed];
    candidateregistrationservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateRegistrationService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate Registration Service</FONT></TD></TR></TABLE>>,
        likec4_id=candidateRegistrationService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidatetestingui -> candidateregistrationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">registers candidate for certification</FONT></TD></TR></TABLE>>,
        likec4_id=fzpg30,
        minlen=1,
        style=dashed];
    aptitudetesttaker [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestTaker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Taker</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeTestTaker,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidatetestingui -> aptitudetesttaker [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">takes aptitude test</FONT></TD></TR></TABLE>>,
        likec4_id="7g57dy",
        style=dashed];
    architecturesubmissionservice [height=2.5,
        label=<<FONT POINT-SIZE="19">architectureSubmissionService</FONT>>,
        likec4_id=architectureSubmissionService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidatetestingui -> architecturesubmissionservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uploads architecture solution</FONT></TD></TR></TABLE>>,
        likec4_id="9oa53p",
        style=dashed];
    candidatestatusservice [height=2.5,
        label=<<FONT POINT-SIZE="19">candidateStatusService</FONT>>,
        likec4_id=candidateStatusService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    candidatetestingui -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks progress of certification attempt</FONT></TD></TR></TABLE>>,
        likec4_id=gbne89,
        style=dashed];
    certificationviewerservice [height=2.5,
        label=<<FONT POINT-SIZE="19">certificationViewerService</FONT>>,
        likec4_id=certificationViewerService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    certificationviewerui -> certificationviewerservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">views certificate</FONT></TD></TR></TABLE>>,
        likec4_id="536k0b",
        style=dashed];
    aptitudetestmaintenanceservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Maintenance Service</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeTestMaintenanceService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertadminui -> aptitudetestmaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages aptitude test questions</FONT></TD></TR></TABLE>>,
        likec4_id="1keg6ul",
        style=dashed];
    casestudymaintenanceservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">caseStudyMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Case Study Maintenance Service</FONT></TD></TR></TABLE>>,
        likec4_id=caseStudyMaintenanceService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertadminui -> casestudymaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages case studies</FONT></TD></TR></TABLE>>,
        likec4_id="177xi7g",
        style=dashed];
    aptitudetestanalysisservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestAnalysisService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Analysis Service</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeTestAnalysisService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertadminui -> aptitudetestanalysisservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">analyzes aptitude test results</FONT></TD></TR></TABLE>>,
        likec4_id="1msypvm",
        minlen=1,
        style=dashed];
    architecturemanualgrader [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">architectureManualGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Architecture Manual Grader</FONT></TD></TR></TABLE>>,
        likec4_id=architectureManualGrader,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertgradingui -> architecturemanualgrader [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>,
        likec4_id="19l2rr4",
        style=dashed];
    aptitudemanualgrader [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeManualGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Manual Grader</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeManualGrader,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertgradingui -> aptitudemanualgrader [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades aptitude test, provides feedback</FONT></TD></TR></TABLE>>,
        likec4_id=wdb7p5,
        style=dashed];
    usermaintenanceservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">userMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User Maintenance Service</FONT></TD></TR></TABLE>>,
        likec4_id=userMaintenanceService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    companyadminui -> usermaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages expert software architects and<BR/>their profiles</FONT></TD></TR></TABLE>>,
        likec4_id=m72vov,
        minlen=1,
        style=dashed];
    casestudyretrievalservice -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id="1qwo5jq",
        style=dashed];
    aptitudemanualcapture [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeManualCapture</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Manual Capture</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeManualCapture,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aptitudetesttaker -> aptitudemanualcapture [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">captures aptitude test short answers</FONT></TD></TR></TABLE>>,
        likec4_id="11v3qtn",
        style=dotted];
    aptitudeautograder [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeAutoGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Auto Grader</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeAutoGrader,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aptitudetesttaker -> aptitudeautograder [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades aptitude test multiple choice<BR/>answers</FONT></TD></TR></TABLE>>,
        likec4_id="1l1w27x",
        style=dotted];
    candidatecertificationservice [height=2.5,
        label=<<FONT POINT-SIZE="19">candidateCertificationService</FONT>>,
        likec4_id=candidateCertificationService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    certificationviewerservice -> candidatecertificationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets certificate</FONT></TD></TR></TABLE>>,
        likec4_id=uf0gzp,
        style=dashed];
    multimodalembeddingspipeline [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">multimodalEmbeddingsPipeline</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Generates embeddings from multimodal input<BR/>(text and images)</FONT></TD></TR></TABLE>>,
        likec4_id=multimodalEmbeddingsPipeline,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aptitudetestmaintenanceservice -> multimodalembeddingspipeline [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (aptitude test questions and<BR/>answers)</FONT></TD></TR></TABLE>>,
        likec4_id="1fctv8s",
        style=dashed];
    casestudymaintenanceservice -> multimodalembeddingspipeline [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (case study and its baseline<BR/>solution)</FONT></TD></TR></TABLE>>,
        likec4_id="1lgah65",
        style=dashed];
    architecturemanualgrader -> architecturesubmissionservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets architecture solution</FONT></TD></TR></TABLE>>,
        likec4_id="19ec1cy",
        style=dashed];
    architecturemanualgrader -> candidatecertificationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates and stores certificate</FONT></TD></TR></TABLE>>,
        likec4_id="1362bf6",
        style=dashed];
    candidatearchitecturenotification [height=2.5,
        label=<<FONT POINT-SIZE="19">candidateArchitectureNotification</FONT>>,
        likec4_id=candidateArchitectureNotification,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    architecturemanualgrader -> candidatearchitecturenotification [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies candidate of their grade for<BR/>the architecture submission, provides<BR/>feedback, provides instructions on how<BR/>to proceed</FONT></TD></TR></TABLE>>,
        likec4_id=yolxwv,
        minlen=1,
        style=dashed];
    architecturemanualgrader -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id=krb82m,
        style=dashed];
    aptitudemanualgrader -> aptitudemanualcapture [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">receives short answers of aptitude test</FONT></TD></TR></TABLE>>,
        likec4_id="3edyy1",
        style=dashed];
    aptitudemanualgrader -> aptitudeautograder [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">receives grade of aptitude test multiple<BR/>choice</FONT></TD></TR></TABLE>>,
        likec4_id=q4a63j,
        style=dashed];
    candidateaptitudenotification [height=2.5,
        label=<<FONT POINT-SIZE="19">candidateAptitudeNotification</FONT>>,
        likec4_id=candidateAptitudeNotification,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aptitudemanualgrader -> candidateaptitudenotification [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies candidate of test results,<BR/>provides feedback, provides instructions<BR/>on how to proceed</FONT></TD></TR></TABLE>>,
        likec4_id="1h1hghb",
        minlen=1,
        style=dashed];
    aptitudemanualgrader -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' aptitude test status</FONT></TD></TR></TABLE>>,
        likec4_id="1f1f9j",
        style=dashed];
    architecturesubmissionservice -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id="5e312u",
        style=dashed];
}
`;case"commonLandscape":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ACTORS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr1",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        designatedexpert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">designatedExpert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to add<BR/>or modify aptitude test questions or case<BR/>studies</FONT></TD></TR></TABLE>>,
            likec4_id=designatedExpert,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        expert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to grade<BR/>candidate submissions</FONT></TD></TR></TABLE>>,
            likec4_id=expert,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        companyadmin [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">companyAdmin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Company administrator</FONT></TD></TR></TABLE>>,
            likec4_id=companyAdmin,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        candidate [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate for certification</FONT></TD></TR></TABLE>>,
            likec4_id=candidate,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr2" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ADMINISTRATIVE</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr2",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        companyadminui [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">companyAdminUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Company Admin User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=companyAdminUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        expertadminui [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expertAdminUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Admin User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=expertAdminUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        usermaintenanceservice [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">userMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User Maintenance Service</FONT></TD></TR></TABLE>>,
            likec4_id=userMaintenanceService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudetestmaintenanceservice [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Maintenance Service</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeTestMaintenanceService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        casestudymaintenanceservice [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">caseStudyMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Case Study Maintenance Service</FONT></TD></TR></TABLE>>,
            likec4_id=caseStudyMaintenanceService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudetestanalysisservice [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestAnalysisService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Analysis Service</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeTestAnalysisService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr3" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>APTITUDE TEST</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr3",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        candidatetestingui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateTestingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate Testing User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=candidateTestingUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        expertgradingui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expertGradingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Grading User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=expertGradingUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        candidateregistrationservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateRegistrationService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate Registration Service</FONT></TD></TR></TABLE>>,
            likec4_id=candidateRegistrationService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudetesttaker [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestTaker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Taker</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeTestTaker,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudemanualgrader [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeManualGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Manual Grader</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeManualGrader,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudemanualcapture [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeManualCapture</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Manual Capture</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeManualCapture,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudeautograder [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeAutoGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Auto Grader</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeAutoGrader,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        candidateaptitudenotification [height=2.5,
            label=<<FONT POINT-SIZE="19">candidateAptitudeNotification</FONT>>,
            likec4_id=candidateAptitudeNotification,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        candidatestatusservice [height=2.5,
            label=<<FONT POINT-SIZE="19">candidateStatusService</FONT>>,
            likec4_id=candidateStatusService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr4" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CASE STUDY</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr4",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        certificationviewerui [group="@gr4",
            height=2.5,
            label=<<FONT POINT-SIZE="19">certificationViewerUi</FONT>>,
            likec4_id=certificationViewerUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        casestudyretrievalservice [height=2.5,
            label=<<FONT POINT-SIZE="19">caseStudyRetrievalService</FONT>>,
            likec4_id=caseStudyRetrievalService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        architecturemanualgrader [group="@gr4",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">architectureManualGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Architecture Manual Grader</FONT></TD></TR></TABLE>>,
            likec4_id=architectureManualGrader,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        certificationviewerservice [group="@gr4",
            height=2.5,
            label=<<FONT POINT-SIZE="19">certificationViewerService</FONT>>,
            likec4_id=certificationViewerService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        architecturesubmissionservice [group="@gr4",
            height=2.5,
            label=<<FONT POINT-SIZE="19">architectureSubmissionService</FONT>>,
            likec4_id=architectureSubmissionService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        candidatearchitecturenotification [group="@gr4",
            height=2.5,
            label=<<FONT POINT-SIZE="19">candidateArchitectureNotification</FONT>>,
            likec4_id=candidateArchitectureNotification,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        candidatecertificationservice [group="@gr4",
            height=2.5,
            label=<<FONT POINT-SIZE="19">candidateCertificationService</FONT>>,
            likec4_id=candidateCertificationService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    designatedexpert -> companyadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages own profile</FONT></TD></TR></TABLE>>,
        likec4_id=cnhkgm,
        style=dashed];
    designatedexpert -> expertadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id="1jcxd9b",
        style=dashed];
    expert -> companyadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages own profile</FONT></TD></TR></TABLE>>,
        likec4_id=ek8zow,
        style=dashed];
    expert -> expertgradingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>,
        likec4_id=v207ly,
        style=dashed];
    companyadmin -> companyadminui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages expert software architects and<BR/>their profiles</FONT></TD></TR></TABLE>>,
        likec4_id="1l728t2",
        minlen=1,
        style=dashed];
    candidate -> candidatetestingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=if5hsw,
        style=dashed];
    candidate -> certificationviewerui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">views certificate</FONT></TD></TR></TABLE>>,
        likec4_id="1ck6pup",
        style=dashed];
    companyadminui -> usermaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages expert software architects and<BR/>their profiles</FONT></TD></TR></TABLE>>,
        likec4_id=m72vov,
        minlen=1,
        style=dashed];
    expertadminui -> aptitudetestmaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages aptitude test questions</FONT></TD></TR></TABLE>>,
        likec4_id="1keg6ul",
        style=dashed];
    expertadminui -> casestudymaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages case studies</FONT></TD></TR></TABLE>>,
        likec4_id="177xi7g",
        style=dashed];
    expertadminui -> aptitudetestanalysisservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">analyzes aptitude test results</FONT></TD></TR></TABLE>>,
        likec4_id="1msypvm",
        minlen=1,
        style=dashed];
    candidatetestingui -> candidateregistrationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">registers candidate for certification</FONT></TD></TR></TABLE>>,
        likec4_id=fzpg30,
        minlen=1,
        style=dashed];
    candidatetestingui -> aptitudetesttaker [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">takes aptitude test</FONT></TD></TR></TABLE>>,
        likec4_id="7g57dy",
        style=dashed];
    candidatetestingui -> casestudyretrievalservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves case study</FONT></TD></TR></TABLE>>,
        likec4_id="1nnbm2d",
        style=dashed];
    candidatetestingui -> architecturesubmissionservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uploads architecture solution</FONT></TD></TR></TABLE>>,
        likec4_id="9oa53p",
        style=dashed];
    candidatetestingui -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks progress of certification attempt</FONT></TD></TR></TABLE>>,
        likec4_id=gbne89,
        style=dashed];
    expertgradingui -> aptitudemanualgrader [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades aptitude test, provides feedback</FONT></TD></TR></TABLE>>,
        likec4_id=wdb7p5,
        style=dashed];
    expertgradingui -> architecturemanualgrader [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>,
        likec4_id="19l2rr4",
        style=dashed];
    multimodalembeddingspipeline [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">multimodalEmbeddingsPipeline</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Generates embeddings from multimodal input<BR/>(text and images)</FONT></TD></TR></TABLE>>,
        likec4_id=multimodalEmbeddingsPipeline,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aptitudetestmaintenanceservice -> multimodalembeddingspipeline [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (aptitude test questions and<BR/>answers)</FONT></TD></TR></TABLE>>,
        likec4_id="1fctv8s",
        style=dashed];
    casestudymaintenanceservice -> multimodalembeddingspipeline [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (case study and its baseline<BR/>solution)</FONT></TD></TR></TABLE>>,
        likec4_id="1lgah65",
        style=dashed];
    aptitudetesttaker -> aptitudemanualcapture [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">captures aptitude test short answers</FONT></TD></TR></TABLE>>,
        likec4_id="11v3qtn",
        style=dotted];
    aptitudetesttaker -> aptitudeautograder [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades aptitude test multiple choice<BR/>answers</FONT></TD></TR></TABLE>>,
        likec4_id="1l1w27x",
        style=dotted];
    aptitudemanualgrader -> aptitudemanualcapture [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">receives short answers of aptitude test</FONT></TD></TR></TABLE>>,
        likec4_id="3edyy1",
        style=dashed];
    aptitudemanualgrader -> aptitudeautograder [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">receives grade of aptitude test multiple<BR/>choice</FONT></TD></TR></TABLE>>,
        likec4_id=q4a63j,
        style=dashed];
    aptitudemanualgrader -> candidateaptitudenotification [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies candidate of test results,<BR/>provides feedback, provides instructions<BR/>on how to proceed</FONT></TD></TR></TABLE>>,
        likec4_id="1h1hghb",
        minlen=1,
        style=dashed];
    aptitudemanualgrader -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' aptitude test status</FONT></TD></TR></TABLE>>,
        likec4_id="1f1f9j",
        style=dashed];
    certificationviewerui -> certificationviewerservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">views certificate</FONT></TD></TR></TABLE>>,
        likec4_id="536k0b",
        style=dashed];
    casestudyretrievalservice -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id="1qwo5jq",
        style=dashed];
    architecturemanualgrader -> architecturesubmissionservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets architecture solution</FONT></TD></TR></TABLE>>,
        likec4_id="19ec1cy",
        style=dashed];
    architecturemanualgrader -> candidatearchitecturenotification [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies candidate of their grade for<BR/>the architecture submission, provides<BR/>feedback, provides instructions on how<BR/>to proceed</FONT></TD></TR></TABLE>>,
        likec4_id=yolxwv,
        minlen=1,
        style=dashed];
    architecturemanualgrader -> candidatecertificationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates and stores certificate</FONT></TD></TR></TABLE>>,
        likec4_id="1362bf6",
        style=dashed];
    architecturemanualgrader -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id=krb82m,
        style=dashed];
    certificationviewerservice -> candidatecertificationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets certificate</FONT></TD></TR></TABLE>>,
        likec4_id=uf0gzp,
        style=dashed];
    architecturesubmissionservice -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id="5e312u",
        style=dashed];
}
`;case"administrativeSystemContext":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    companyadminui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">companyAdminUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Company Admin User Interface</FONT></TD></TR></TABLE>>,
        likec4_id=companyAdminUi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    usermaintenanceservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">userMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">User Maintenance Service</FONT></TD></TR></TABLE>>,
        likec4_id=userMaintenanceService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    companyadminui -> usermaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages expert software architects and<BR/>their profiles</FONT></TD></TR></TABLE>>,
        likec4_id=m72vov,
        style=dashed];
    expertadminui [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expertAdminUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Admin User Interface</FONT></TD></TR></TABLE>>,
        likec4_id=expertAdminUi,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aptitudetestmaintenanceservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Maintenance Service</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeTestMaintenanceService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertadminui -> aptitudetestmaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages aptitude test questions</FONT></TD></TR></TABLE>>,
        likec4_id="1keg6ul",
        style=dashed];
    casestudymaintenanceservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">caseStudyMaintenanceService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Case Study Maintenance Service</FONT></TD></TR></TABLE>>,
        likec4_id=caseStudyMaintenanceService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertadminui -> casestudymaintenanceservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages case studies</FONT></TD></TR></TABLE>>,
        likec4_id="177xi7g",
        style=dashed];
    aptitudetestanalysisservice [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestAnalysisService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Analysis Service</FONT></TD></TR></TABLE>>,
        likec4_id=aptitudeTestAnalysisService,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    expertadminui -> aptitudetestanalysisservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">analyzes aptitude test results</FONT></TD></TR></TABLE>>,
        likec4_id="1msypvm",
        minlen=1,
        style=dashed];
    multimodalembeddingspipeline [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">multimodalEmbeddingsPipeline</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Generates embeddings from multimodal input<BR/>(text and images)</FONT></TD></TR></TABLE>>,
        likec4_id=multimodalEmbeddingsPipeline,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    aptitudetestmaintenanceservice -> multimodalembeddingspipeline [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (aptitude test questions and<BR/>answers)</FONT></TD></TR></TABLE>>,
        likec4_id="1fctv8s",
        style=dashed];
    casestudymaintenanceservice -> multimodalembeddingspipeline [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (case study and its baseline<BR/>solution)</FONT></TD></TR></TABLE>>,
        likec4_id="1lgah65",
        style=dashed];
}
`;case"aptitudeTestSystemContext":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>USERS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr1",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        candidate [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate for certification</FONT></TD></TR></TABLE>>,
            likec4_id=candidate,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        expert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to grade<BR/>candidate submissions</FONT></TD></TR></TABLE>>,
            likec4_id=expert,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr2" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr2",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        candidatetestingui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateTestingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate Testing User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=candidateTestingUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        expertgradingui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expertGradingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Grading User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=expertGradingUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr3" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>REGISTRATION</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr3",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        candidateregistrationservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateRegistrationService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate Registration Service</FONT></TD></TR></TABLE>>,
            likec4_id=candidateRegistrationService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr4" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>APTITUDE TEST</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr4",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        aptitudetesttaker [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestTaker</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Taker</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeTestTaker,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr5" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>GRADING</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr5",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        aptitudemanualgrader [group="@gr5",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeManualGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Manual Grader</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeManualGrader,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudemanualcapture [group="@gr5",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeManualCapture</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Manual Capture</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeManualCapture,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        aptitudeautograder [group="@gr5",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeAutoGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Auto Grader</FONT></TD></TR></TABLE>>,
            likec4_id=aptitudeAutoGrader,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr6" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CERTIFICATION STATUS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr6",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        candidatestatusservice [height=2.5,
            label=<<FONT POINT-SIZE="19">candidateStatusService</FONT>>,
            likec4_id=candidateStatusService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr7" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NOTIFICATION</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr7",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        candidateaptitudenotification [height=2.5,
            label=<<FONT POINT-SIZE="19">candidateAptitudeNotification</FONT>>,
            likec4_id=candidateAptitudeNotification,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    candidate -> candidatetestingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=if5hsw,
        minlen=1,
        style=dashed];
    expert -> expertgradingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>,
        likec4_id=v207ly,
        minlen=1,
        style=dashed];
    candidatetestingui -> candidateregistrationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">registers candidate for certification</FONT></TD></TR></TABLE>>,
        likec4_id=fzpg30,
        minlen=1,
        style=dashed];
    candidatetestingui -> aptitudetesttaker [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">takes aptitude test</FONT></TD></TR></TABLE>>,
        likec4_id="7g57dy",
        style=dashed];
    candidatetestingui -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks progress of certification attempt</FONT></TD></TR></TABLE>>,
        likec4_id=gbne89,
        style=dashed];
    expertgradingui -> aptitudemanualgrader [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades aptitude test, provides feedback</FONT></TD></TR></TABLE>>,
        likec4_id=wdb7p5,
        style=dashed];
    aptitudetesttaker -> aptitudemanualcapture [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">captures aptitude test short answers</FONT></TD></TR></TABLE>>,
        likec4_id="11v3qtn",
        style=dotted];
    aptitudetesttaker -> aptitudeautograder [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades aptitude test multiple choice<BR/>answers</FONT></TD></TR></TABLE>>,
        likec4_id="1l1w27x",
        style=dotted];
    aptitudemanualgrader -> aptitudemanualcapture [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">receives short answers of aptitude test</FONT></TD></TR></TABLE>>,
        likec4_id="3edyy1",
        style=dashed];
    aptitudemanualgrader -> aptitudeautograder [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">receives grade of aptitude test multiple<BR/>choice</FONT></TD></TR></TABLE>>,
        likec4_id=q4a63j,
        style=dashed];
    aptitudemanualgrader -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' aptitude test status</FONT></TD></TR></TABLE>>,
        likec4_id="1f1f9j",
        style=dashed];
    aptitudemanualgrader -> candidateaptitudenotification [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies candidate of test results,<BR/>provides feedback, provides instructions<BR/>on how to proceed</FONT></TD></TR></TABLE>>,
        likec4_id="1h1hghb",
        minlen=1,
        style=dashed];
}
`;case"architectureSolutionSystemContext":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>USERS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr1",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        candidate [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidate</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate for certification</FONT></TD></TR></TABLE>>,
            likec4_id=candidate,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        expert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to grade<BR/>candidate submissions</FONT></TD></TR></TABLE>>,
            likec4_id=expert,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr2" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr2",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        candidatetestingui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateTestingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Candidate Testing User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=candidateTestingUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        expertgradingui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expertGradingUi</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Grading User Interface</FONT></TD></TR></TABLE>>,
            likec4_id=expertGradingUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        certificationviewerui [height=2.5,
            label=<<FONT POINT-SIZE="19">certificationViewerUi</FONT>>,
            likec4_id=certificationViewerUi,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr3" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CASE STUDY</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr3",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        casestudyretrievalservice [height=2.5,
            label=<<FONT POINT-SIZE="19">caseStudyRetrievalService</FONT>>,
            likec4_id=caseStudyRetrievalService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr5" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>GRADING</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr5",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        architecturemanualgrader [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">architectureManualGrader</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Architecture Manual Grader</FONT></TD></TR></TABLE>>,
            likec4_id=architectureManualGrader,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr4" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SUBMISSION</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr4",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        architecturesubmissionservice [height=2.5,
            label=<<FONT POINT-SIZE="19">architectureSubmissionService</FONT>>,
            likec4_id=architectureSubmissionService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr7" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NOTIFICATION</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr7",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        candidatearchitecturenotification [height=2.5,
            label=<<FONT POINT-SIZE="19">candidateArchitectureNotification</FONT>>,
            likec4_id=candidateArchitectureNotification,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr6" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CERTIFICATION STATUS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr6",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        candidatestatusservice [height=2.5,
            label=<<FONT POINT-SIZE="19">candidateStatusService</FONT>>,
            likec4_id=candidateStatusService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        certificationviewerservice [height=2.5,
            label=<<FONT POINT-SIZE="19">certificationViewerService</FONT>>,
            likec4_id=certificationViewerService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        candidatecertificationservice [height=2.5,
            label=<<FONT POINT-SIZE="19">candidateCertificationService</FONT>>,
            likec4_id=candidateCertificationService,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    candidate -> candidatetestingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>,
        likec4_id=if5hsw,
        style=dashed];
    candidate -> certificationviewerui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">views certificate</FONT></TD></TR></TABLE>>,
        likec4_id="1ck6pup",
        style=dashed];
    expert -> expertgradingui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>,
        likec4_id=v207ly,
        minlen=1,
        style=dashed];
    candidatetestingui -> casestudyretrievalservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves case study</FONT></TD></TR></TABLE>>,
        likec4_id="1nnbm2d",
        style=dashed];
    candidatetestingui -> architecturesubmissionservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uploads architecture solution</FONT></TD></TR></TABLE>>,
        likec4_id="9oa53p",
        style=dashed];
    candidatetestingui -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">checks progress of certification attempt</FONT></TD></TR></TABLE>>,
        likec4_id=gbne89,
        style=dashed];
    expertgradingui -> architecturemanualgrader [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>,
        likec4_id="19l2rr4",
        style=dashed];
    certificationviewerui -> certificationviewerservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">views certificate</FONT></TD></TR></TABLE>>,
        likec4_id="536k0b",
        style=dashed];
    casestudyretrievalservice -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id="1qwo5jq",
        style=dashed];
    architecturemanualgrader -> architecturesubmissionservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets architecture solution</FONT></TD></TR></TABLE>>,
        likec4_id="19ec1cy",
        style=dashed];
    architecturemanualgrader -> candidatearchitecturenotification [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">notifies candidate of their grade for<BR/>the architecture submission, provides<BR/>feedback, provides instructions on how<BR/>to proceed</FONT></TD></TR></TABLE>>,
        likec4_id=yolxwv,
        minlen=1,
        style=dashed];
    architecturemanualgrader -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id=krb82m,
        style=dashed];
    architecturemanualgrader -> candidatecertificationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates and stores certificate</FONT></TD></TR></TABLE>>,
        likec4_id="1362bf6",
        style=dashed];
    architecturesubmissionservice -> candidatestatusservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates candidate' architecture solution<BR/>status</FONT></TD></TR></TABLE>>,
        likec4_id="5e312u",
        style=dashed];
    certificationviewerservice -> candidatecertificationservice [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets certificate</FONT></TD></TR></TABLE>>,
        likec4_id=uf0gzp,
        minlen=0,
        style=dashed];
}
`;case"aptitudeManualGraderContainer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        clusterrank=global,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        newrank=true,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ACTORS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr1",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        expert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">expert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to grade<BR/>candidate submissions</FONT></TD></TR></TABLE>>,
            likec4_id=expert,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr2" {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI</B></FONT>>,
            likec4_depth=2,
            likec4_id="@gr2",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_expertgradingui {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXPERTGRADINGUI</B></FONT>>,
                likec4_depth=1,
                likec4_id=expertGradingUi,
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ui</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Grading User Interface</FONT></TD></TR></TABLE>>,
                likec4_id="expertGradingUi.ui",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph "cluster_@gr4" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>NEW CONTAINERS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr4",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        {
            graph [rank=same];
            retrievalservice [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">retrievalService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieves embeddings of valid answers from<BR/>the vector store</FONT></TD></TR></TABLE>>,
                likec4_id="aptitudeManualGrader.retrievalService",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            candidatesubmissionguardrail [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">candidateSubmissionGuardrail</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Validates submitted short answers against<BR/>plagiarism and AI-generated content</FONT></TD></TR></TABLE>>,
                likec4_id="aptitudeManualGrader.candidateSubmissionGuardrail",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
        }
        {
            graph [rank=same];
            generationservice [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">generationService</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Generates prompts for grading of candidate<BR/>provided short answers, using valid answers<BR/>as context</FONT></TD></TR></TABLE>>,
                likec4_id="aptitudeManualGrader.generationService",
                likec4_level=1,
                margin="0.223,0.223",
                width=4.445];
            embeddingsstore [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">embeddingsStore</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores embeddings of valid answers</FONT></TD></TR></TABLE>>,
                likec4_id="aptitudeManualGrader.embeddingsStore",
                likec4_level=1,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        promptorchestrator [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">promptOrchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Orchestrates the prompt generation and<BR/>retrieval services</FONT></TD></TR></TABLE>>,
            likec4_id="aptitudeManualGrader.promptOrchestrator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        retrievalservice -> generationservice [style=invis];
    }
    subgraph "cluster_@gr3" {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXISTING CONTAINERS</B></FONT>>,
            likec4_depth=2,
            likec4_id="@gr3",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_aptitudemanualcapture {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>APTITUDEMANUALCAPTURE</B></FONT>>,
                likec4_depth=1,
                likec4_id=aptitudeManualCapture,
                likec4_level=1,
                margin=32,
                style=filled
            ];
            shortanswer_1 [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">shortAnswer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Persists short answers for manual grading</FONT></TD></TR></TABLE>>,
                likec4_id="aptitudeManualCapture.shortAnswer",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        shortanswer [height=2.5,
            label=<<FONT POINT-SIZE="19">shortAnswer</FONT>>,
            likec4_id="aptitudeManualGrader.shortAnswer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        gradeconsolidation [height=2.5,
            label=<<FONT POINT-SIZE="19">gradeConsolidation</FONT>>,
            likec4_id="aptitudeManualGrader.gradeConsolidation",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    expert -> ui [lhead=cluster_expertgradingui,
        likec4_id=v207ly,
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">grades architecture solution, provides<BR/>feedback</FONT></TD></TR></TABLE>>];
    promptorchestrator -> shortanswer_1 [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves ungraded short answers for<BR/>grading</FONT></TD></TR></TABLE>>,
        likec4_id="1g3brnx",
        style=dashed,
        weight=3];
    ui -> shortanswer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves ungraded short answer<BR/>questiions for the candidate</FONT></TD></TR></TABLE>>,
        likec4_id=wh8qaz,
        minlen=1,
        style=dashed];
    ui -> gradeconsolidation [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">retrieves graded short answer questions<BR/>for the candidate</FONT></TD></TR></TABLE>>,
        likec4_id=k6ykuq,
        minlen=1,
        style=dashed];
    candidatesubmissionguardrail -> embeddingsstore [style=invis];
}
`;case"aptitudeTestMaintenanceContainer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ACTORS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr1",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        designatedexpert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">designatedExpert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to add<BR/>or modify aptitude test questions or case<BR/>studies</FONT></TD></TR></TABLE>>,
            likec4_id=designatedExpert,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr2" {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI</B></FONT>>,
            likec4_depth=2,
            likec4_id="@gr2",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_expertadminui {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXPERTADMINUI</B></FONT>>,
                likec4_depth=1,
                likec4_id=expertAdminUi,
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ui</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Admin User Interface</FONT></TD></TR></TABLE>>,
                likec4_id="expertAdminUi.ui",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph "cluster_@gr3" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXISTING CONTAINERS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr3",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        aptitudetestmaintenance [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">aptitudeTestMaintenance</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Aptitude Test Maintenance</FONT></TD></TR></TABLE>>,
            likec4_id="aptitudeTestMaintenanceService.aptitudeTestMaintenance",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_multimodalembeddingspipeline {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MULTIMODALEMBEDDINGSPIPELINE</B></FONT>>,
            likec4_depth=1,
            likec4_id=multimodalEmbeddingsPipeline,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        orchestrator [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, Ray or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Orchestrates the multimodal embeddings<BR/>pipeline</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.orchestrator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    designatedexpert -> ui [lhead=cluster_expertadminui,
        likec4_id="1jcxd9b",
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>];
    ui -> aptitudetestmaintenance [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">adds, removes or modifies aptitude test<BR/>short questions</FONT></TD></TR></TABLE>>,
        likec4_id="1l0rwie",
        style=dashed];
    aptitudetestmaintenance -> orchestrator [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (aptitude test questions and<BR/>answers)</FONT></TD></TR></TABLE>>,
        likec4_id="3wqmlh",
        minlen=1,
        style=dashed];
}
`;case"caseStudyMaintenanceContainer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ACTORS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr1",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        designatedexpert [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">designatedExpert</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert software architect designated to add<BR/>or modify aptitude test questions or case<BR/>studies</FONT></TD></TR></TABLE>>,
            likec4_id=designatedExpert,
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr2" {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>UI</B></FONT>>,
            likec4_depth=2,
            likec4_id="@gr2",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_expertadminui {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXPERTADMINUI</B></FONT>>,
                likec4_depth=1,
                likec4_id=expertAdminUi,
                likec4_level=1,
                margin=32,
                style=filled
            ];
            ui [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">ui</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Expert Admin User Interface</FONT></TD></TR></TABLE>>,
                likec4_id="expertAdminUi.ui",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
    }
    subgraph "cluster_@gr3" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>EXISTING CONTAINERS</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr3",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        casestudymaintenance [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">caseStudyMaintenance</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Case Study Maintenance</FONT></TD></TR></TABLE>>,
            likec4_id="caseStudyMaintenanceService.caseStudyMaintenance",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_multimodalembeddingspipeline {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MULTIMODALEMBEDDINGSPIPELINE</B></FONT>>,
            likec4_depth=1,
            likec4_id=multimodalEmbeddingsPipeline,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        orchestrator [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, Ray or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Orchestrates the multimodal embeddings<BR/>pipeline</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.orchestrator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    designatedexpert -> ui [lhead=cluster_expertadminui,
        likec4_id="1jcxd9b",
        minlen=1,
        style=dashed,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>];
    ui -> casestudymaintenance [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">adds, removes or modifies case study and<BR/>its baseline solution</FONT></TD></TR></TABLE>>,
        likec4_id=ib936e,
        style=dashed];
    casestudymaintenance -> orchestrator [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from multimodal<BR/>input (case study and its baseline<BR/>solution)</FONT></TD></TR></TABLE>>,
        likec4_id=p04tnp,
        minlen=1,
        style=dashed];
}
`;case"multimodalEmbeddingsPipelineContainer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph "cluster_@gr1" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>TEXT PROCESSING</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr1",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        textextractor [group="@gr1",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">textExtractor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, PyMuPDF or pdfplumber or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Extracts text from binary input files (PDF)</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.textExtractor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        textpreprocessor [group="@gr1",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">textPreprocessor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, NLTK or spacy or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Preprocesses text input (aptitude test short<BR/>questions and answers, case study): removes<BR/>unnecessary characters, normalizes<BR/>whitespace, and tokenizes into segments</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.textPreprocessor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        texttokenizer [group="@gr1",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">textTokenizer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe"></FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Converts aptitude test short questions<BR/>answers into numerical tokens</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.textTokenizer",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        textembeddingsgenerator [group="@gr1",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">textEmbeddingsGenerator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe"></FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Generates embeddings from tokenized short<BR/>questions answers</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.textEmbeddingsGenerator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr2" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>IMAGES PROCESSING</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr2",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        imagesextractor [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">imagesExtractor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, PyMuPDF or pdf2image or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Extracts images from binary input files (PDF)</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.imagesExtractor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        imagepreprocessor [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">imagePreprocessor</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, OpenCV or Pillow or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Preprocesses image input (case study):<BR/>resizes, normalizes, and converts to<BR/>grayscale</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.imagePreprocessor",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        imageembeddingsgenerator [group="@gr2",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">imageEmbeddingsGenerator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe"></FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Generates embeddings from preprocessed images</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.imageEmbeddingsGenerator",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph "cluster_@gr3" {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>PERSISTENT STORAGE</B></FONT>>,
            likec4_depth=1,
            likec4_id="@gr3",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        embeddingsstore [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">embeddingsStore</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Weviate or Pinecone or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores embeddings of valid short questions<BR/>answers</FONT></TD></TR></TABLE>>,
            likec4_id="multimodalEmbeddingsPipeline.embeddingsStore",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    orchestrator [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">orchestrator</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Python, Ray or similar</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Orchestrates the multimodal embeddings<BR/>pipeline</FONT></TD></TR></TABLE>>,
        likec4_id="multimodalEmbeddingsPipeline.orchestrator",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    orchestrator -> textextractor [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">extracts text from binary input files<BR/>(PDF)</FONT></TD></TR></TABLE>>,
        likec4_id=g2so7d,
        style=dashed];
    orchestrator -> imagesextractor [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">extracts images from binary input files<BR/>(PDF)</FONT></TD></TR></TABLE>>,
        likec4_id=xpcgsg,
        style=dashed];
    textextractor -> textpreprocessor [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">preprocesses text input (aptitude test<BR/>short questions and answers, case study)</FONT></TD></TR></TABLE>>,
        likec4_id="3uxex7",
        style=dashed];
    imagesextractor -> imagepreprocessor [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">preprocesses image input (case study)</FONT></TD></TR></TABLE>>,
        likec4_id="4nazg8",
        style=dashed];
    textpreprocessor -> texttokenizer [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">tokenizes aptitude test short questions<BR/>answers</FONT></TD></TR></TABLE>>,
        likec4_id="12ee3gk",
        style=dashed];
    imagepreprocessor -> imageembeddingsgenerator [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from preprocessed<BR/>images</FONT></TD></TR></TABLE>>,
        likec4_id=phla1g,
        style=dashed];
    texttokenizer -> textembeddingsgenerator [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">generates embeddings from tokenized<BR/>short questions answers</FONT></TD></TR></TABLE>>,
        likec4_id=cffumy,
        style=dashed];
    imageembeddingsgenerator -> embeddingsstore [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores embeddings of valid short<BR/>questions answers</FONT></TD></TR></TABLE>>,
        likec4_id="8ujtgh",
        style=dashed];
    textembeddingsgenerator -> embeddingsstore [color="#3b82f6",
        fontcolor="#60a5fa",
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">stores embeddings of valid short<BR/>questions answers</FONT></TD></TR></TABLE>>,
        likec4_id=dswdp7,
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+e)}}function i(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="5618pt" height="1619pt"
 viewBox="0.00 0.00 5618.14 1618.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1603.85)">
<!-- candidate -->
<g id="node1" class="node">
<title>candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1542.04,-1588.8 1222,-1588.8 1222,-1408.8 1542.04,-1408.8 1542.04,-1588.8"/>
<text text-anchor="start" x="1340.82" y="-1504.1" font-family="Arial" font-size="19.00" fill="#eff6ff">candidate</text>
<text text-anchor="start" x="1296.97" y="-1480.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate for certification</text>
</g>
<!-- candidatetestingui -->
<g id="node2" class="node">
<title>candidatetestingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1221.04,-909.6 901,-909.6 901,-729.6 1221.04,-729.6 1221.04,-909.6"/>
<text text-anchor="start" x="979.69" y="-824.9" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateTestingUi</text>
<text text-anchor="start" x="950.96" y="-801.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate Testing User Interface</text>
</g>
<!-- certificationviewerui -->
<g id="node3" class="node">
<title>certificationviewerui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1751.04,-1249.2 1431,-1249.2 1431,-1069.2 1751.04,-1069.2 1751.04,-1249.2"/>
<text text-anchor="start" x="1504.96" y="-1153.5" font-family="Arial" font-size="19.00" fill="#eff6ff">certificationViewerUi</text>
</g>
<!-- designatedexpert -->
<g id="node4" class="node">
<title>designatedexpert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4874.33,-1588.8 4545.71,-1588.8 4545.71,-1408.8 4874.33,-1408.8 4874.33,-1588.8"/>
<text text-anchor="start" x="4636.08" y="-1522.1" font-family="Arial" font-size="19.00" fill="#eff6ff">designatedExpert</text>
<text text-anchor="start" x="4565.77" y="-1498.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to add</text>
<text text-anchor="start" x="4575.36" y="-1480.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">or modify aptitude test questions or case</text>
<text text-anchor="start" x="4686.26" y="-1462.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">studies</text>
</g>
<!-- expertadminui -->
<g id="node5" class="node">
<title>expertadminui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5128.04,-1249.2 4808,-1249.2 4808,-1069.2 5128.04,-1069.2 5128.04,-1249.2"/>
<text text-anchor="start" x="4905.72" y="-1164.5" font-family="Arial" font-size="19.00" fill="#eff6ff">expertAdminUi</text>
<text text-anchor="start" x="4873.82" y="-1141.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Admin User Interface</text>
</g>
<!-- companyadminui -->
<g id="node6" class="node">
<title>companyadminui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4339.04,-1249.2 4019,-1249.2 4019,-1069.2 4339.04,-1069.2 4339.04,-1249.2"/>
<text text-anchor="start" x="4104.57" y="-1164.5" font-family="Arial" font-size="19.00" fill="#eff6ff">companyAdminUi</text>
<text text-anchor="start" x="4074.39" y="-1141.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Company Admin User Interface</text>
</g>
<!-- expert -->
<g id="node7" class="node">
<title>expert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3833,-1588.8 3491.04,-1588.8 3491.04,-1408.8 3833,-1408.8 3833,-1588.8"/>
<text text-anchor="start" x="3635.62" y="-1513.1" font-family="Arial" font-size="19.00" fill="#eff6ff">expert</text>
<text text-anchor="start" x="3511.1" y="-1489.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to grade</text>
<text text-anchor="start" x="3586.14" y="-1471.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">candidate submissions</text>
</g>
<!-- expertgradingui -->
<g id="node8" class="node">
<title>expertgradingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3740.04,-1249.2 3420,-1249.2 3420,-1069.2 3740.04,-1069.2 3740.04,-1249.2"/>
<text text-anchor="start" x="3510.85" y="-1164.5" font-family="Arial" font-size="19.00" fill="#eff6ff">expertGradingUi</text>
<text text-anchor="start" x="3480.39" y="-1141.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Grading User Interface</text>
</g>
<!-- companyadmin -->
<g id="node9" class="node">
<title>companyadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4344.04,-1588.8 4024,-1588.8 4024,-1408.8 4344.04,-1408.8 4344.04,-1588.8"/>
<text text-anchor="start" x="4118.55" y="-1504.1" font-family="Arial" font-size="19.00" fill="#eff6ff">companyAdmin</text>
<text text-anchor="start" x="4106.49" y="-1480.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Company administrator</text>
</g>
<!-- casestudyretrievalservice -->
<g id="node10" class="node">
<title>casestudyretrievalservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-536.4 430,-536.4 430,-356.4 750.04,-356.4 750.04,-536.4"/>
<text text-anchor="start" x="476.5" y="-440.7" font-family="Arial" font-size="19.00" fill="#eff6ff">caseStudyRetrievalService</text>
</g>
<!-- candidateregistrationservice -->
<g id="node11" class="node">
<title>candidateregistrationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-536.4 0,-536.4 0,-356.4 320.04,-356.4 320.04,-536.4"/>
<text text-anchor="start" x="36.45" y="-451.7" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateRegistrationService</text>
<text text-anchor="start" x="56.63" y="-428.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate Registration Service</text>
</g>
<!-- aptitudetesttaker -->
<g id="node12" class="node">
<title>aptitudetesttaker</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2079.04,-536.4 1759,-536.4 1759,-356.4 2079.04,-356.4 2079.04,-536.4"/>
<text text-anchor="start" x="1842.45" y="-451.7" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestTaker</text>
<text text-anchor="start" x="1853.57" y="-428.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Taker</text>
</g>
<!-- architecturesubmissionservice -->
<g id="node13" class="node">
<title>architecturesubmissionservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1649.04,-536.4 1329,-536.4 1329,-356.4 1649.04,-356.4 1649.04,-536.4"/>
<text text-anchor="start" x="1358.6" y="-440.7" font-family="Arial" font-size="19.00" fill="#eff6ff">architectureSubmissionService</text>
</g>
<!-- candidatestatusservice -->
<g id="node14" class="node">
<title>candidatestatusservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1649.04,-180 1329,-180 1329,0 1649.04,0 1649.04,-180"/>
<text text-anchor="start" x="1389.21" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateStatusService</text>
</g>
<!-- certificationviewerservice -->
<g id="node15" class="node">
<title>certificationviewerservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2043.04,-909.6 1723,-909.6 1723,-729.6 2043.04,-729.6 2043.04,-909.6"/>
<text text-anchor="start" x="1774.26" y="-813.9" font-family="Arial" font-size="19.00" fill="#eff6ff">certificationViewerService</text>
</g>
<!-- aptitudetestmaintenanceservice -->
<g id="node16" class="node">
<title>aptitudetestmaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5158.04,-909.6 4838,-909.6 4838,-729.6 5158.04,-729.6 5158.04,-909.6"/>
<text text-anchor="start" x="4859.66" y="-824.9" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestMaintenanceService</text>
<text text-anchor="start" x="4881.71" y="-801.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Maintenance Service</text>
</g>
<!-- casestudymaintenanceservice -->
<g id="node17" class="node">
<title>casestudymaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4728.04,-909.6 4408,-909.6 4408,-729.6 4728.04,-729.6 4728.04,-909.6"/>
<text text-anchor="start" x="4437.59" y="-824.9" font-family="Arial" font-size="19.00" fill="#eff6ff">caseStudyMaintenanceService</text>
<text text-anchor="start" x="4457.13" y="-801.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Case Study Maintenance Service</text>
</g>
<!-- aptitudetestanalysisservice -->
<g id="node18" class="node">
<title>aptitudetestanalysisservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5588.04,-909.6 5268,-909.6 5268,-729.6 5588.04,-729.6 5588.04,-909.6"/>
<text text-anchor="start" x="5308.69" y="-824.9" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestAnalysisService</text>
<text text-anchor="start" x="5326.73" y="-801.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Analysis Service</text>
</g>
<!-- architecturemanualgrader -->
<g id="node19" class="node">
<title>architecturemanualgrader</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2889.04,-909.6 2569,-909.6 2569,-729.6 2889.04,-729.6 2889.04,-909.6"/>
<text text-anchor="start" x="2618.66" y="-824.9" font-family="Arial" font-size="19.00" fill="#eff6ff">architectureManualGrader</text>
<text text-anchor="start" x="2636.9" y="-801.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Architecture Manual Grader</text>
</g>
<!-- aptitudemanualgrader -->
<g id="node20" class="node">
<title>aptitudemanualgrader</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3818.04,-536.4 3498,-536.4 3498,-356.4 3818.04,-356.4 3818.04,-536.4"/>
<text text-anchor="start" x="3563.49" y="-451.7" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeManualGrader</text>
<text text-anchor="start" x="3578.39" y="-428.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Manual Grader</text>
</g>
<!-- usermaintenanceservice -->
<g id="node21" class="node">
<title>usermaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4298.04,-909.6 3978,-909.6 3978,-729.6 4298.04,-729.6 4298.04,-909.6"/>
<text text-anchor="start" x="4033.46" y="-824.9" font-family="Arial" font-size="19.00" fill="#eff6ff">userMaintenanceService</text>
<text text-anchor="start" x="4050.06" y="-801.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">User Maintenance Service</text>
</g>
<!-- aptitudemanualcapture -->
<g id="node22" class="node">
<title>aptitudemanualcapture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3133.04,-180 2813,-180 2813,0 3133.04,0 3133.04,-180"/>
<text text-anchor="start" x="2874.26" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeManualCapture</text>
<text text-anchor="start" x="2890.05" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Manual Capture</text>
</g>
<!-- aptitudeautograder -->
<g id="node23" class="node">
<title>aptitudeautograder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2413.04,-180 2093,-180 2093,0 2413.04,0 2413.04,-180"/>
<text text-anchor="start" x="2170.1" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeAutoGrader</text>
<text text-anchor="start" x="2182.56" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Auto Grader</text>
</g>
<!-- candidatecertificationservice -->
<g id="node24" class="node">
<title>candidatecertificationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2509.04,-536.4 2189,-536.4 2189,-356.4 2509.04,-356.4 2509.04,-536.4"/>
<text text-anchor="start" x="2225.98" y="-440.7" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateCertificationService</text>
</g>
<!-- multimodalembeddingspipeline -->
<g id="node25" class="node">
<title>multimodalembeddingspipeline</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4954.82,-536.4 4611.22,-536.4 4611.22,-356.4 4954.82,-356.4 4954.82,-536.4"/>
<text text-anchor="start" x="4650.47" y="-460.7" font-family="Arial" font-size="19.00" fill="#eff6ff">multimodalEmbeddingsPipeline</text>
<text text-anchor="start" x="4631.28" y="-437.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Generates embeddings from multimodal input</text>
<text text-anchor="start" x="4725.08" y="-419.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">(text and images)</text>
</g>
<!-- candidatearchitecturenotification -->
<g id="node26" class="node">
<title>candidatearchitecturenotification</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3388.04,-536.4 3068,-536.4 3068,-356.4 3388.04,-356.4 3388.04,-536.4"/>
<text text-anchor="start" x="3089.14" y="-440.7" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateArchitectureNotification</text>
</g>
<!-- candidateaptitudenotification -->
<g id="node27" class="node">
<title>candidateaptitudenotification</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4141.04,-180 3821,-180 3821,0 4141.04,0 4141.04,-180"/>
<text text-anchor="start" x="3857.97" y="-84.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateAptitudeNotification</text>
</g>
<!-- candidate&#45;&gt;candidatetestingui -->
<g id="edge1" class="edge">
<title>candidate&#45;&gt;candidatetestingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1339.89,-1408.92C1279.84,-1282.24 1170.02,-1050.55 1107.61,-918.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1110.08,-917.98 1104.5,-912.33 1105.34,-920.23 1110.08,-917.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1263.87,-1147.8 1263.87,-1170.6 1290.86,-1170.6 1290.86,-1147.8 1263.87,-1147.8"/>
<text text-anchor="start" x="1266.87" y="-1156" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- candidate&#45;&gt;certificationviewerui -->
<g id="edge2" class="edge">
<title>candidate&#45;&gt;certificationviewerui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1436.93,-1409.1C1465.68,-1362.66 1500.95,-1305.69 1530.48,-1257.98"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1532.62,-1259.52 1534.34,-1251.76 1528.16,-1256.76 1532.62,-1259.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1492.79,-1317.6 1492.79,-1340.4 1597.59,-1340.4 1597.59,-1317.6 1492.79,-1317.6"/>
<text text-anchor="start" x="1495.79" y="-1324.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">views certificate</text>
</g>
<!-- candidatetestingui&#45;&gt;casestudyretrievalservice -->
<g id="edge8" class="edge">
<title>candidatetestingui&#45;&gt;casestudyretrievalservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M901.13,-757.68C851.8,-734.49 799.26,-704.97 756.52,-669.6 714.4,-634.73 676.91,-587.14 648.23,-544.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="650.47,-543.58 644.11,-538.82 646.12,-546.51 650.47,-543.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="756.52,-621.6 756.52,-644.4 887.02,-644.4 887.02,-621.6 756.52,-621.6"/>
<text text-anchor="start" x="759.52" y="-628.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">retrieves case study</text>
</g>
<!-- candidatetestingui&#45;&gt;candidateregistrationservice -->
<g id="edge9" class="edge">
<title>candidatetestingui&#45;&gt;candidateregistrationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M901.01,-799.42C772.05,-779.5 588.65,-740.88 441.81,-669.6 375.44,-637.38 310.17,-587.42 259.19,-543.03"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="261.1,-541.21 253.73,-538.24 257.64,-545.16 261.1,-541.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="441.81,-621.6 441.81,-644.4 661.02,-644.4 661.02,-621.6 441.81,-621.6"/>
<text text-anchor="start" x="444.81" y="-628.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">registers candidate for certification</text>
</g>
<!-- candidatetestingui&#45;&gt;aptitudetesttaker -->
<g id="edge10" class="edge">
<title>candidatetestingui&#45;&gt;aptitudetesttaker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1220.96,-768.7C1302.02,-741.94 1401.37,-706.84 1488.02,-669.6 1576.55,-631.55 1672.08,-583.11 1750.65,-541.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1751.61,-543.63 1756.99,-537.78 1749.14,-539 1751.61,-543.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1632.93,-621.6 1632.93,-644.4 1752.55,-644.4 1752.55,-621.6 1632.93,-621.6"/>
<text text-anchor="start" x="1635.93" y="-628.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">takes aptitude test</text>
</g>
<!-- candidatetestingui&#45;&gt;architecturesubmissionservice -->
<g id="edge11" class="edge">
<title>candidatetestingui&#45;&gt;architecturesubmissionservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1142.31,-729.64C1182.43,-687.54 1232.49,-637.59 1280.8,-596.4 1302.28,-578.08 1325.92,-559.68 1349.33,-542.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1350.67,-544.65 1355.15,-538.09 1347.56,-540.42 1350.67,-544.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1280.8,-621.6 1280.8,-644.4 1465.02,-644.4 1465.02,-621.6 1280.8,-621.6"/>
<text text-anchor="start" x="1283.8" y="-628.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">uploads architecture solution</text>
</g>
<!-- candidatetestingui&#45;&gt;candidatestatusservice -->
<g id="edge12" class="edge">
<title>candidatetestingui&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1025.87,-729.8C993.06,-631.52 958.33,-471.8 1025.25,-356.4 1088.32,-247.65 1214.58,-179.66 1319.45,-139.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1320.27,-142.25 1326.37,-137.16 1318.43,-137.34 1320.27,-142.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1025.25,-435 1025.25,-457.8 1274.02,-457.8 1274.02,-435 1025.25,-435"/>
<text text-anchor="start" x="1028.25" y="-442.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">checks progress of certification attempt</text>
</g>
<!-- certificationviewerui&#45;&gt;certificationviewerservice -->
<g id="edge13" class="edge">
<title>certificationviewerui&#45;&gt;certificationviewerservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1667.74,-1069.5C1708.16,-1022.77 1757.79,-965.38 1799.21,-917.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1801.15,-919.27 1804.07,-911.88 1797.18,-915.83 1801.15,-919.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1745.78,-978 1745.78,-1000.8 1850.58,-1000.8 1850.58,-978 1745.78,-978"/>
<text text-anchor="start" x="1748.78" y="-985.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">views certificate</text>
</g>
<!-- designatedexpert&#45;&gt;expertadminui -->
<g id="edge3" class="edge">
<title>designatedexpert&#45;&gt;expertadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4777.81,-1409.1C4813.44,-1362.47 4857.19,-1305.22 4893.75,-1257.39"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4895.71,-1259.14 4898.18,-1251.59 4891.54,-1255.96 4895.71,-1259.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4846.76,-1317.6 4846.76,-1340.4 4873.75,-1340.4 4873.75,-1317.6 4846.76,-1317.6"/>
<text text-anchor="start" x="4849.76" y="-1325.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- designatedexpert&#45;&gt;companyadminui -->
<g id="edge4" class="edge">
<title>designatedexpert&#45;&gt;companyadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4601.93,-1408.96C4559.73,-1375.97 4510.22,-1339.3 4463.02,-1309.2 4426.73,-1286.06 4386.46,-1263.31 4347.92,-1242.82"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4349.22,-1240.54 4341.37,-1239.35 4346.77,-1245.18 4349.22,-1240.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4519.41,-1317.6 4519.41,-1340.4 4654.59,-1340.4 4654.59,-1317.6 4519.41,-1317.6"/>
<text text-anchor="start" x="4522.41" y="-1324.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages own profile</text>
</g>
<!-- expertadminui&#45;&gt;aptitudetestmaintenanceservice -->
<g id="edge14" class="edge">
<title>expertadminui&#45;&gt;aptitudetestmaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4975.9,-1069.5C4979.99,-1023.54 4984.99,-967.27 4989.2,-919.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4991.8,-920.3 4989.84,-912.6 4986.57,-919.84 4991.8,-920.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4983.92,-978 4983.92,-1000.8 5191.5,-1000.8 5191.5,-978 4983.92,-978"/>
<text text-anchor="start" x="4986.92" y="-985.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages aptitude test questions</text>
</g>
<!-- expertadminui&#45;&gt;casestudymaintenanceservice -->
<g id="edge15" class="edge">
<title>expertadminui&#45;&gt;casestudymaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4862.66,-1069.28C4806.84,-1022.17 4738.24,-964.27 4681.28,-916.19"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4683.06,-914.26 4675.64,-911.43 4679.67,-918.27 4683.06,-914.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4780.01,-978 4780.01,-1000.8 4925.32,-1000.8 4925.32,-978 4780.01,-978"/>
<text text-anchor="start" x="4783.01" y="-985.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages case studies</text>
</g>
<!-- expertadminui&#45;&gt;aptitudetestanalysisservice -->
<g id="edge16" class="edge">
<title>expertadminui&#45;&gt;aptitudetestanalysisservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M5127.72,-1069.33C5158.39,-1050.52 5189.74,-1030.02 5218.02,-1009.2 5256.08,-981.18 5295.28,-947.5 5329.34,-916.4"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="5331,-918.44 5334.75,-911.44 5327.45,-914.58 5331,-918.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5266.64,-978 5266.64,-1000.8 5453.19,-1000.8 5453.19,-978 5266.64,-978"/>
<text text-anchor="start" x="5269.64" y="-985.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">analyzes aptitude test results</text>
</g>
<!-- companyadminui&#45;&gt;usermaintenanceservice -->
<g id="edge19" class="edge">
<title>companyadminui&#45;&gt;usermaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4168.25,-1069.5C4162.67,-1023.54 4155.83,-967.27 4150.08,-919.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4152.7,-919.72 4149.19,-912.59 4147.49,-920.35 4152.7,-919.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4159.75,-969.6 4159.75,-1009.2 4413.99,-1009.2 4413.99,-969.6 4159.75,-969.6"/>
<text text-anchor="start" x="4162.75" y="-993.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages expert software architects and</text>
<text text-anchor="start" x="4162.75" y="-976.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">their profiles</text>
</g>
<!-- expert&#45;&gt;companyadminui -->
<g id="edge6" class="edge">
<title>expert&#45;&gt;companyadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3798.19,-1408.88C3870.93,-1361.38 3960.46,-1302.92 4034.44,-1254.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4035.54,-1257.03 4040.38,-1250.73 4032.67,-1252.63 4035.54,-1257.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3936.02,-1317.6 3936.02,-1340.4 4071.21,-1340.4 4071.21,-1317.6 3936.02,-1317.6"/>
<text text-anchor="start" x="3939.02" y="-1324.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages own profile</text>
</g>
<!-- expert&#45;&gt;expertgradingui -->
<g id="edge5" class="edge">
<title>expert&#45;&gt;expertgradingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3587.55,-1409.06C3575.53,-1390.23 3564.89,-1369.7 3558.34,-1348.8 3549.43,-1320.39 3549.5,-1288.54 3553.34,-1259.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3555.91,-1259.76 3554.4,-1251.96 3550.72,-1259 3555.91,-1259.76"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3558.34,-1309.2 3558.34,-1348.8 3797.02,-1348.8 3797.02,-1309.2 3558.34,-1309.2"/>
<text text-anchor="start" x="3561.34" y="-1333.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="3561.34" y="-1316.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- expertgradingui&#45;&gt;architecturemanualgrader -->
<g id="edge17" class="edge">
<title>expertgradingui&#45;&gt;architecturemanualgrader</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3420.45,-1094.9C3271.61,-1035.85 3050.29,-948.05 2898.37,-887.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2899.67,-885.48 2891.73,-885.15 2897.74,-890.36 2899.67,-885.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3180.04,-969.6 3180.04,-1009.2 3418.72,-1009.2 3418.72,-969.6 3180.04,-969.6"/>
<text text-anchor="start" x="3183.04" y="-993.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="3183.04" y="-976.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- expertgradingui&#45;&gt;aptitudemanualgrader -->
<g id="edge18" class="edge">
<title>expertgradingui&#45;&gt;aptitudemanualgrader</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3589.78,-1069.26C3604.41,-935.97 3631.92,-685.29 3647.16,-546.38"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3649.74,-546.91 3647.95,-539.17 3644.52,-546.34 3649.74,-546.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3626.77,-808.2 3626.77,-831 3877.15,-831 3877.15,-808.2 3626.77,-808.2"/>
<text text-anchor="start" x="3629.77" y="-815.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades aptitude test, provides feedback</text>
</g>
<!-- companyadmin&#45;&gt;companyadminui -->
<g id="edge7" class="edge">
<title>companyadmin&#45;&gt;companyadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4182.71,-1409.1C4182.03,-1363.14 4181.19,-1306.87 4180.49,-1259.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4183.12,-1259.67 4180.38,-1252.21 4177.87,-1259.75 4183.12,-1259.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4181.67,-1309.2 4181.67,-1348.8 4435.91,-1348.8 4435.91,-1309.2 4181.67,-1309.2"/>
<text text-anchor="start" x="4184.67" y="-1333.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages expert software architects and</text>
<text text-anchor="start" x="4184.67" y="-1316.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">their profiles</text>
</g>
<!-- casestudyretrievalservice&#45;&gt;candidatestatusservice -->
<g id="edge20" class="edge">
<title>casestudyretrievalservice&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M587.93,-356.42C591.78,-315.58 603.73,-269.75 634.74,-240 730.33,-148.31 1098.1,-112.27 1318.73,-98.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1318.78,-101.33 1326.11,-98.25 1318.46,-96.09 1318.78,-101.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="634.74,-248.4 634.74,-288 887.02,-288 887.02,-248.4 634.74,-248.4"/>
<text text-anchor="start" x="637.74" y="-272.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; architecture solution</text>
<text text-anchor="start" x="637.74" y="-255.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- aptitudetesttaker&#45;&gt;aptitudemanualcapture -->
<g id="edge21" class="edge">
<title>aptitudetesttaker&#45;&gt;aptitudemanualcapture</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M2078.98,-377.41C2097.45,-370.09 2116.09,-362.93 2134.02,-356.4 2363.07,-272.94 2632.56,-190.41 2803.07,-140.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2803.79,-142.6 2810.24,-137.96 2802.31,-137.56 2803.79,-142.6"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2477.3,-256.8 2477.3,-279.6 2708.19,-279.6 2708.19,-256.8 2477.3,-256.8"/>
<text text-anchor="start" x="2480.3" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">captures aptitude test short answers</text>
</g>
<!-- aptitudetesttaker&#45;&gt;aptitudeautograder -->
<g id="edge22" class="edge">
<title>aptitudetesttaker&#45;&gt;aptitudeautograder</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M1955.64,-356.45C1974.32,-317.88 1999.67,-273.89 2030.56,-240 2048.26,-220.58 2068.99,-202.47 2090.55,-186.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2091.99,-188.24 2096.42,-181.64 2088.85,-184.03 2091.99,-188.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2030.56,-248.4 2030.56,-288 2256.02,-288 2256.02,-248.4 2030.56,-248.4"/>
<text text-anchor="start" x="2033.56" y="-272.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades aptitude test multiple choice</text>
<text text-anchor="start" x="2033.56" y="-255.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">answers</text>
</g>
<!-- architecturesubmissionservice&#45;&gt;candidatestatusservice -->
<g id="edge34" class="edge">
<title>architecturesubmissionservice&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1489.02,-356.43C1489.02,-305.78 1489.02,-242.21 1489.02,-189.99"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1491.65,-190.23 1489.02,-182.73 1486.4,-190.23 1491.65,-190.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1489.02,-248.4 1489.02,-288 1741.3,-288 1741.3,-248.4 1489.02,-248.4"/>
<text text-anchor="start" x="1492.02" y="-272.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; architecture solution</text>
<text text-anchor="start" x="1492.02" y="-255.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- certificationviewerservice&#45;&gt;candidatecertificationservice -->
<g id="edge23" class="edge">
<title>certificationviewerservice&#45;&gt;candidatecertificationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1880.64,-729.84C1884.08,-684.71 1895.93,-632.02 1928.76,-596.4 1993.18,-526.51 2044.37,-567.96 2134.02,-536.4 2148.93,-531.15 2164.31,-525.43 2179.66,-519.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2180.35,-522.05 2186.38,-516.88 2178.44,-517.15 2180.35,-522.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1928.76,-621.6 1928.76,-644.4 2025.02,-644.4 2025.02,-621.6 1928.76,-621.6"/>
<text text-anchor="start" x="1931.76" y="-628.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets certificate</text>
</g>
<!-- aptitudetestmaintenanceservice&#45;&gt;multimodalembeddingspipeline -->
<g id="edge24" class="edge">
<title>aptitudetestmaintenanceservice&#45;&gt;multimodalembeddingspipeline</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M4946.52,-729.69C4914.33,-674.11 4872.84,-602.48 4839.71,-545.28"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="4842.02,-544.02 4835.99,-538.85 4837.47,-546.65 4842.02,-544.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4909.78,-604.8 4909.78,-661.2 5161.68,-661.2 5161.68,-604.8 4909.78,-604.8"/>
<text text-anchor="start" x="4912.78" y="-645.6" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="4912.78" y="-628.8" font-family="Arial" font-size="14.00" fill="#60a5fa">input (aptitude test questions and</text>
<text text-anchor="start" x="4912.78" y="-612" font-family="Arial" font-size="14.00" fill="#60a5fa">answers)</text>
</g>
<!-- casestudymaintenanceservice&#45;&gt;multimodalembeddingspipeline -->
<g id="edge25" class="edge">
<title>casestudymaintenanceservice&#45;&gt;multimodalembeddingspipeline</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M4562.05,-729.65C4562.95,-686.95 4569.8,-636.49 4592.12,-596.4 4602.94,-576.97 4617.44,-559.21 4633.63,-543.25"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="4635.38,-545.21 4638.99,-538.14 4631.76,-541.41 4635.38,-545.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4592.12,-604.8 4592.12,-661.2 4844.02,-661.2 4844.02,-604.8 4592.12,-604.8"/>
<text text-anchor="start" x="4595.12" y="-645.6" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="4595.12" y="-628.8" font-family="Arial" font-size="14.00" fill="#60a5fa">input (case study and its baseline</text>
<text text-anchor="start" x="4595.12" y="-612" font-family="Arial" font-size="14.00" fill="#60a5fa">solution)</text>
</g>
<!-- architecturemanualgrader&#45;&gt;architecturesubmissionservice -->
<g id="edge26" class="edge">
<title>architecturemanualgrader&#45;&gt;architecturesubmissionservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2569.26,-779.5C2465.22,-752.42 2327.24,-713.46 2208.38,-669.6 2134.88,-642.48 2122.86,-619.59 2048.02,-596.4 1899.78,-550.47 1853.06,-579.67 1704.02,-536.4 1689,-532.04 1673.61,-526.96 1658.29,-521.48"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1659.57,-519.15 1651.62,-519.06 1657.77,-524.09 1659.57,-519.15"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2208.38,-621.6 2208.38,-644.4 2370.02,-644.4 2370.02,-621.6 2208.38,-621.6"/>
<text text-anchor="start" x="2211.38" y="-628.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets architecture solution</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatestatusservice -->
<g id="edge29" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2750.43,-729.73C2775.33,-602.05 2798.11,-367.99 2669.02,-240 2619.01,-190.41 2107.87,-188.97 2038.02,-180 1910.68,-163.64 1767.52,-140.27 1659.33,-121.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1659.79,-118.99 1651.95,-120.3 1658.89,-124.17 1659.79,-118.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2769.63,-426.6 2769.63,-466.2 2998.55,-466.2 2998.55,-426.6 2769.63,-426.6"/>
<text text-anchor="start" x="2772.63" y="-450.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets candidate&#39; architecture solution</text>
<text text-anchor="start" x="2772.63" y="-433.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatecertificationservice -->
<g id="edge27" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatecertificationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2569.15,-758.68C2524.55,-736.05 2478.97,-706.59 2444.69,-669.6 2412.58,-634.95 2390.21,-587.84 2375.23,-545.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2377.8,-545.31 2372.86,-539.09 2372.84,-547.04 2377.8,-545.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2444.69,-621.6 2444.69,-644.4 2646.02,-644.4 2646.02,-621.6 2444.69,-621.6"/>
<text text-anchor="start" x="2447.69" y="-628.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">generates and stores certificate</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatearchitecturenotification -->
<g id="edge28" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatearchitecturenotification</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2848.54,-729.69C2924.49,-673.19 3022.73,-600.11 3100.22,-542.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3101.73,-544.62 3106.18,-538.04 3098.6,-540.41 3101.73,-544.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3023.21,-596.4 3023.21,-669.6 3270.46,-669.6 3270.46,-596.4 3023.21,-596.4"/>
<text text-anchor="start" x="3026.21" y="-654" font-family="Arial" font-size="14.00" fill="#c6c6c6">notifies candidate of their grade for</text>
<text text-anchor="start" x="3026.21" y="-637.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">the architecture submission, provides</text>
<text text-anchor="start" x="3026.21" y="-620.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback, provides instructions on how</text>
<text text-anchor="start" x="3026.21" y="-603.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">to proceed</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;candidatestatusservice -->
<g id="edge33" class="edge">
<title>aptitudemanualgrader&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3498.01,-373.33C3479.71,-366.84 3461.13,-361 3443.02,-356.4 3196.77,-293.83 3114.36,-380.24 2874.51,-296.4 2830.49,-281.01 2830.24,-254.84 2786.02,-240 2469.83,-133.91 2369.12,-220.05 2038.02,-180 1910.57,-164.58 1767.41,-141.17 1659.25,-122.23"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1659.71,-119.65 1651.87,-120.94 1658.8,-124.82 1659.71,-119.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2874.51,-256.8 2874.51,-279.6 3119.02,-279.6 3119.02,-256.8 2874.51,-256.8"/>
<text text-anchor="start" x="2877.51" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; aptitude test status</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;aptitudemanualcapture -->
<g id="edge30" class="edge">
<title>aptitudemanualgrader&#45;&gt;aptitudemanualcapture</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3611.15,-356.56C3585.43,-315.64 3549.99,-269.68 3507.02,-240 3399.03,-165.4 3254.56,-128 3143.12,-109.33"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3143.6,-106.75 3135.77,-108.13 3142.75,-111.93 3143.6,-106.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3563.16,-256.8 3563.16,-279.6 3808.06,-279.6 3808.06,-256.8 3563.16,-256.8"/>
<text text-anchor="start" x="3566.16" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">receives short answers of aptitude test</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;aptitudeautograder -->
<g id="edge31" class="edge">
<title>aptitudemanualgrader&#45;&gt;aptitudeautograder</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3498.23,-376.94C3479.73,-369.7 3461.04,-362.7 3443.02,-356.4 3351.92,-324.56 3322.29,-336.12 3234.33,-296.4 3191.89,-277.23 3189.59,-256.44 3146.02,-240 2982.77,-178.39 2930.17,-208.48 2758.02,-180 2646.36,-161.53 2521.07,-139.46 2423.22,-121.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2423.76,-119.34 2415.91,-120.6 2422.83,-124.51 2423.76,-119.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3234.33,-248.4 3234.33,-288 3480.02,-288 3480.02,-248.4 3234.33,-248.4"/>
<text text-anchor="start" x="3237.33" y="-272.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">receives grade of aptitude test multiple</text>
<text text-anchor="start" x="3237.33" y="-255.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">choice</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;candidateaptitudenotification -->
<g id="edge32" class="edge">
<title>aptitudemanualgrader&#45;&gt;candidateaptitudenotification</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3801.22,-356.41C3824.75,-338.24 3847.72,-318 3867.02,-296.4 3895.26,-264.78 3919.36,-224.98 3938.03,-188.85"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3940.22,-190.33 3941.28,-182.45 3935.54,-187.95 3940.22,-190.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3905.58,-240 3905.58,-296.4 4160.6,-296.4 4160.6,-240 3905.58,-240"/>
<text text-anchor="start" x="3908.58" y="-280.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">notifies candidate of test results,</text>
<text text-anchor="start" x="3908.58" y="-264" font-family="Arial" font-size="14.00" fill="#c6c6c6">provides feedback, provides instructions</text>
<text text-anchor="start" x="3908.58" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">on how to proceed</text>
</g>
</g>
</svg>
`;case"commonLandscape":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="6293pt" height="1721pt"
 viewBox="0.00 0.00 6293.10 1720.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1705.85)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1200,-1401.6 1200,-1682.8 2920,-1682.8 2920,-1401.6 1200,-1401.6"/>
<text text-anchor="start" x="1208" y="-1669.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ACTORS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-704 8,-1334 1698,-1334 1698,-704 8,-704"/>
<text text-anchor="start" x="16" y="-1321.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ADMINISTRATIVE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1839,-347.6 1839,-1334 4058,-1334 4058,-347.6 1839,-347.6"/>
<text text-anchor="start" x="1847" y="-1321.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">APTITUDE TEST</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_@gr4</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="4535,-8 4535,-985.2 6255,-985.2 6255,-8 4535,-8"/>
<text text-anchor="start" x="4543" y="-972.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CASE STUDY</text>
</g>
<!-- designatedexpert -->
<g id="node1" class="node">
<title>designatedexpert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1568.31,-1621.6 1239.69,-1621.6 1239.69,-1441.6 1568.31,-1441.6 1568.31,-1621.6"/>
<text text-anchor="start" x="1330.06" y="-1554.9" font-family="Arial" font-size="19.00" fill="#eff6ff">designatedExpert</text>
<text text-anchor="start" x="1259.75" y="-1531.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to add</text>
<text text-anchor="start" x="1269.34" y="-1513.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">or modify aptitude test questions or case</text>
<text text-anchor="start" x="1380.24" y="-1495.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">studies</text>
</g>
<!-- expert -->
<g id="node2" class="node">
<title>expert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2449.98,-1621.6 2108.02,-1621.6 2108.02,-1441.6 2449.98,-1441.6 2449.98,-1621.6"/>
<text text-anchor="start" x="2252.6" y="-1545.9" font-family="Arial" font-size="19.00" fill="#eff6ff">expert</text>
<text text-anchor="start" x="2128.08" y="-1522.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to grade</text>
<text text-anchor="start" x="2203.12" y="-1504.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">candidate submissions</text>
</g>
<!-- companyadmin -->
<g id="node3" class="node">
<title>companyadmin</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1998.02,-1621.6 1677.98,-1621.6 1677.98,-1441.6 1998.02,-1441.6 1998.02,-1621.6"/>
<text text-anchor="start" x="1772.53" y="-1536.9" font-family="Arial" font-size="19.00" fill="#eff6ff">companyAdmin</text>
<text text-anchor="start" x="1760.47" y="-1513.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Company administrator</text>
</g>
<!-- candidate -->
<g id="node4" class="node">
<title>candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2880.02,-1621.6 2559.98,-1621.6 2559.98,-1441.6 2880.02,-1441.6 2880.02,-1621.6"/>
<text text-anchor="start" x="2678.8" y="-1536.9" font-family="Arial" font-size="19.00" fill="#eff6ff">candidate</text>
<text text-anchor="start" x="2634.95" y="-1513.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate for certification</text>
</g>
<!-- companyadminui -->
<g id="node5" class="node">
<title>companyadminui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1564.02,-1272.8 1243.98,-1272.8 1243.98,-1092.8 1564.02,-1092.8 1564.02,-1272.8"/>
<text text-anchor="start" x="1329.55" y="-1188.1" font-family="Arial" font-size="19.00" fill="#eff6ff">companyAdminUi</text>
<text text-anchor="start" x="1299.37" y="-1164.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Company Admin User Interface</text>
</g>
<!-- expertadminui -->
<g id="node6" class="node">
<title>expertadminui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-1272.8 477.98,-1272.8 477.98,-1092.8 798.02,-1092.8 798.02,-1272.8"/>
<text text-anchor="start" x="575.7" y="-1188.1" font-family="Arial" font-size="19.00" fill="#eff6ff">expertAdminUi</text>
<text text-anchor="start" x="543.8" y="-1164.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Admin User Interface</text>
</g>
<!-- usermaintenanceservice -->
<g id="node7" class="node">
<title>usermaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1658.02,-924 1337.98,-924 1337.98,-744 1658.02,-744 1658.02,-924"/>
<text text-anchor="start" x="1393.44" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">userMaintenanceService</text>
<text text-anchor="start" x="1410.04" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">User Maintenance Service</text>
</g>
<!-- aptitudetestmaintenanceservice -->
<g id="node8" class="node">
<title>aptitudetestmaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-924 47.98,-924 47.98,-744 368.02,-744 368.02,-924"/>
<text text-anchor="start" x="69.64" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestMaintenanceService</text>
<text text-anchor="start" x="91.69" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Maintenance Service</text>
</g>
<!-- casestudymaintenanceservice -->
<g id="node9" class="node">
<title>casestudymaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.02,-924 907.98,-924 907.98,-744 1228.02,-744 1228.02,-924"/>
<text text-anchor="start" x="937.57" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">caseStudyMaintenanceService</text>
<text text-anchor="start" x="957.11" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Case Study Maintenance Service</text>
</g>
<!-- aptitudetestanalysisservice -->
<g id="node10" class="node">
<title>aptitudetestanalysisservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="798.02,-924 477.98,-924 477.98,-744 798.02,-744 798.02,-924"/>
<text text-anchor="start" x="518.67" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestAnalysisService</text>
<text text-anchor="start" x="536.71" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Analysis Service</text>
</g>
<!-- candidatetestingui -->
<g id="node11" class="node">
<title>candidatetestingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3174.02,-1272.8 2853.98,-1272.8 2853.98,-1092.8 3174.02,-1092.8 3174.02,-1272.8"/>
<text text-anchor="start" x="2932.67" y="-1188.1" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateTestingUi</text>
<text text-anchor="start" x="2903.94" y="-1164.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate Testing User Interface</text>
</g>
<!-- expertgradingui -->
<g id="node12" class="node">
<title>expertgradingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3673.02,-1272.8 3352.98,-1272.8 3352.98,-1092.8 3673.02,-1092.8 3673.02,-1272.8"/>
<text text-anchor="start" x="3443.83" y="-1188.1" font-family="Arial" font-size="19.00" fill="#eff6ff">expertGradingUi</text>
<text text-anchor="start" x="3413.37" y="-1164.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Grading User Interface</text>
</g>
<!-- candidateregistrationservice -->
<g id="node13" class="node">
<title>candidateregistrationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3549.02,-924 3228.98,-924 3228.98,-744 3549.02,-744 3549.02,-924"/>
<text text-anchor="start" x="3265.43" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateRegistrationService</text>
<text text-anchor="start" x="3285.61" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate Registration Service</text>
</g>
<!-- aptitudetesttaker -->
<g id="node14" class="node">
<title>aptitudetesttaker</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3119.02,-924 2798.98,-924 2798.98,-744 3119.02,-744 3119.02,-924"/>
<text text-anchor="start" x="2882.43" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestTaker</text>
<text text-anchor="start" x="2893.55" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Taker</text>
</g>
<!-- aptitudemanualgrader -->
<g id="node15" class="node">
<title>aptitudemanualgrader</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2689.02,-924 2368.98,-924 2368.98,-744 2689.02,-744 2689.02,-924"/>
<text text-anchor="start" x="2434.47" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeManualGrader</text>
<text text-anchor="start" x="2449.37" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Manual Grader</text>
</g>
<!-- aptitudemanualcapture -->
<g id="node16" class="node">
<title>aptitudemanualcapture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2761.02,-567.6 2440.98,-567.6 2440.98,-387.6 2761.02,-387.6 2761.02,-567.6"/>
<text text-anchor="start" x="2502.24" y="-482.9" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeManualCapture</text>
<text text-anchor="start" x="2518.03" y="-459.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Manual Capture</text>
</g>
<!-- aptitudeautograder -->
<g id="node17" class="node">
<title>aptitudeautograder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3454.02,-567.6 3133.98,-567.6 3133.98,-387.6 3454.02,-387.6 3454.02,-567.6"/>
<text text-anchor="start" x="3211.08" y="-482.9" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeAutoGrader</text>
<text text-anchor="start" x="3223.54" y="-459.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Auto Grader</text>
</g>
<!-- candidateaptitudenotification -->
<g id="node18" class="node">
<title>candidateaptitudenotification</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2199.02,-567.6 1878.98,-567.6 1878.98,-387.6 2199.02,-387.6 2199.02,-567.6"/>
<text text-anchor="start" x="1915.95" y="-471.9" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateAptitudeNotification</text>
</g>
<!-- candidatestatusservice -->
<g id="node19" class="node">
<title>candidatestatusservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4018.02,-567.6 3697.98,-567.6 3697.98,-387.6 4018.02,-387.6 4018.02,-567.6"/>
<text text-anchor="start" x="3758.19" y="-471.9" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateStatusService</text>
</g>
<!-- certificationviewerui -->
<g id="node20" class="node">
<title>certificationviewerui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6215.02,-924 5894.98,-924 5894.98,-744 6215.02,-744 6215.02,-924"/>
<text text-anchor="start" x="5968.94" y="-828.3" font-family="Arial" font-size="19.00" fill="#eff6ff">certificationViewerUi</text>
</g>
<!-- casestudyretrievalservice -->
<g id="node21" class="node">
<title>casestudyretrievalservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4895.02,-924 4574.98,-924 4574.98,-744 4895.02,-744 4895.02,-924"/>
<text text-anchor="start" x="4621.48" y="-828.3" font-family="Arial" font-size="19.00" fill="#eff6ff">caseStudyRetrievalService</text>
</g>
<!-- architecturemanualgrader -->
<g id="node22" class="node">
<title>architecturemanualgrader</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5325.02,-924 5004.98,-924 5004.98,-744 5325.02,-744 5325.02,-924"/>
<text text-anchor="start" x="5054.64" y="-839.3" font-family="Arial" font-size="19.00" fill="#eff6ff">architectureManualGrader</text>
<text text-anchor="start" x="5072.88" y="-816.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Architecture Manual Grader</text>
</g>
<!-- certificationviewerservice -->
<g id="node23" class="node">
<title>certificationviewerservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="6215.02,-567.6 5894.98,-567.6 5894.98,-387.6 6215.02,-387.6 6215.02,-567.6"/>
<text text-anchor="start" x="5946.24" y="-471.9" font-family="Arial" font-size="19.00" fill="#eff6ff">certificationViewerService</text>
</g>
<!-- architecturesubmissionservice -->
<g id="node24" class="node">
<title>architecturesubmissionservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="4895.02,-228 4574.98,-228 4574.98,-48 4895.02,-48 4895.02,-228"/>
<text text-anchor="start" x="4604.58" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">architectureSubmissionService</text>
</g>
<!-- candidatearchitecturenotification -->
<g id="node25" class="node">
<title>candidatearchitecturenotification</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5325.02,-228 5004.98,-228 5004.98,-48 5325.02,-48 5325.02,-228"/>
<text text-anchor="start" x="5026.12" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateArchitectureNotification</text>
</g>
<!-- candidatecertificationservice -->
<g id="node26" class="node">
<title>candidatecertificationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="5896.02,-228 5575.98,-228 5575.98,-48 5896.02,-48 5896.02,-228"/>
<text text-anchor="start" x="5612.96" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateCertificationService</text>
</g>
<!-- multimodalembeddingspipeline -->
<g id="node27" class="node">
<title>multimodalembeddingspipeline</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="810.8,-567.6 467.2,-567.6 467.2,-387.6 810.8,-387.6 810.8,-567.6"/>
<text text-anchor="start" x="506.45" y="-491.9" font-family="Arial" font-size="19.00" fill="#eff6ff">multimodalEmbeddingsPipeline</text>
<text text-anchor="start" x="487.26" y="-468.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Generates embeddings from multimodal input</text>
<text text-anchor="start" x="581.06" y="-450.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">(text and images)</text>
</g>
<!-- designatedexpert&#45;&gt;companyadminui -->
<g id="edge1" class="edge">
<title>designatedexpert&#45;&gt;companyadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1404,-1441.74C1404,-1393.31 1404,-1333.23 1404,-1283.24"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1406.63,-1283.26 1404,-1275.76 1401.38,-1283.26 1406.63,-1283.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1404,-1350.4 1404,-1373.2 1539.19,-1373.2 1539.19,-1350.4 1404,-1350.4"/>
<text text-anchor="start" x="1407" y="-1357.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages own profile</text>
</g>
<!-- designatedexpert&#45;&gt;expertadminui -->
<g id="edge2" class="edge">
<title>designatedexpert&#45;&gt;expertadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1240.14,-1456.42C1112.69,-1398.71 936.45,-1318.92 807.57,-1260.57"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="808.66,-1258.18 800.74,-1257.48 806.49,-1262.96 808.66,-1258.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1066.86,-1350.4 1066.86,-1373.2 1093.86,-1373.2 1093.86,-1350.4 1066.86,-1350.4"/>
<text text-anchor="start" x="1069.86" y="-1358.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- expert&#45;&gt;companyadminui -->
<g id="edge3" class="edge">
<title>expert&#45;&gt;companyadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2126.67,-1441.62C2102.2,-1427.92 2077.02,-1414.16 2053,-1401.6 1998.46,-1373.08 1987.53,-1357.64 1928,-1342 1878.02,-1328.87 1862.53,-1344.81 1812,-1334 1731.47,-1316.77 1645.48,-1286.94 1573.3,-1258.39"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1574.42,-1256.01 1566.48,-1255.67 1572.48,-1260.89 1574.42,-1256.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2015.42,-1350.4 2015.42,-1373.2 2150.6,-1373.2 2150.6,-1350.4 2015.42,-1350.4"/>
<text text-anchor="start" x="2018.42" y="-1357.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages own profile</text>
</g>
<!-- expert&#45;&gt;expertgradingui -->
<g id="edge4" class="edge">
<title>expert&#45;&gt;expertgradingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2410.89,-1441.69C2440.69,-1425.55 2473.01,-1410.9 2505,-1401.6 2595.79,-1375.21 2835.95,-1391.27 2930,-1381.6 3063.86,-1367.84 3101.36,-1376.61 3229,-1334 3272.41,-1319.51 3317.16,-1298.88 3357.94,-1277.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3359.04,-1279.92 3364.45,-1274.1 3356.59,-1275.28 3359.04,-1279.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3200,-1342 3200,-1381.6 3438.68,-1381.6 3438.68,-1342 3200,-1342"/>
<text text-anchor="start" x="3203" y="-1366" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="3203" y="-1349.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- companyadmin&#45;&gt;companyadminui -->
<g id="edge5" class="edge">
<title>companyadmin&#45;&gt;companyadminui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1726.8,-1441.74C1664.54,-1391.99 1586.9,-1329.95 1523.36,-1279.18"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1525.15,-1277.25 1517.65,-1274.62 1521.87,-1281.35 1525.15,-1277.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1646.98,-1342 1646.98,-1381.6 1901.22,-1381.6 1901.22,-1342 1646.98,-1342"/>
<text text-anchor="start" x="1649.98" y="-1366" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages expert software architects and</text>
<text text-anchor="start" x="1649.98" y="-1349.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">their profiles</text>
</g>
<!-- candidate&#45;&gt;candidatetestingui -->
<g id="edge6" class="edge">
<title>candidate&#45;&gt;candidatetestingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2795.33,-1441.74C2837.08,-1392.5 2889.03,-1331.21 2931.82,-1280.73"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2933.81,-1282.46 2936.65,-1275.04 2929.8,-1279.06 2933.81,-1282.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2875.82,-1350.4 2875.82,-1373.2 2902.81,-1373.2 2902.81,-1350.4 2875.82,-1350.4"/>
<text text-anchor="start" x="2878.82" y="-1358.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- candidate&#45;&gt;certificationviewerui -->
<g id="edge7" class="edge">
<title>candidate&#45;&gt;certificationviewerui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2879.85,-1513.1C3135.71,-1483.85 3652.42,-1419.69 4085,-1334 4758.21,-1200.64 5545.75,-981.84 5885.19,-884.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="5885.71,-887.03 5892.19,-882.43 5884.26,-881.98 5885.71,-887.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5104.78,-1171.4 5104.78,-1194.2 5209.59,-1194.2 5209.59,-1171.4 5104.78,-1171.4"/>
<text text-anchor="start" x="5107.78" y="-1178.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">views certificate</text>
</g>
<!-- companyadminui&#45;&gt;usermaintenanceservice -->
<g id="edge8" class="edge">
<title>companyadminui&#45;&gt;usermaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1428.09,-1092.94C1441.27,-1044.31 1457.63,-983.92 1471.22,-933.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1473.68,-934.78 1473.1,-926.85 1468.61,-933.4 1473.68,-934.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1453.82,-993.2 1453.82,-1032.8 1708.06,-1032.8 1708.06,-993.2 1453.82,-993.2"/>
<text text-anchor="start" x="1456.82" y="-1017.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages expert software architects and</text>
<text text-anchor="start" x="1456.82" y="-1000.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">their profiles</text>
</g>
<!-- expertadminui&#45;&gt;aptitudetestmaintenanceservice -->
<g id="edge9" class="edge">
<title>expertadminui&#45;&gt;aptitudetestmaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M486.84,-1092.89C458.32,-1074.16 429.34,-1053.7 403.42,-1032.8 365.36,-1002.1 326.82,-964.73 294.14,-930.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="296.44,-929.37 289.36,-925.77 292.64,-933 296.44,-929.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="403.42,-1001.6 403.42,-1024.4 611,-1024.4 611,-1001.6 403.42,-1001.6"/>
<text text-anchor="start" x="406.42" y="-1008.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages aptitude test questions</text>
</g>
<!-- expertadminui&#45;&gt;casestudymaintenanceservice -->
<g id="edge10" class="edge">
<title>expertadminui&#45;&gt;casestudymaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M771.58,-1092.89C798.68,-1073.72 826.64,-1053.09 852,-1032.8 891.48,-1001.21 932.87,-964.33 968.74,-931.02"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="970.39,-933.07 974.09,-926.03 966.81,-929.22 970.39,-933.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="895.09,-1001.6 895.09,-1024.4 1040.39,-1024.4 1040.39,-1001.6 895.09,-1001.6"/>
<text text-anchor="start" x="898.09" y="-1008.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages case studies</text>
</g>
<!-- expertadminui&#45;&gt;aptitudetestanalysisservice -->
<g id="edge11" class="edge">
<title>expertadminui&#45;&gt;aptitudetestanalysisservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M638,-1092.94C638,-1044.51 638,-984.43 638,-934.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="640.63,-934.46 638,-926.96 635.38,-934.46 640.63,-934.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="638,-1001.6 638,-1024.4 824.54,-1024.4 824.54,-1001.6 638,-1001.6"/>
<text text-anchor="start" x="641" y="-1008.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">analyzes aptitude test results</text>
</g>
<!-- aptitudetestmaintenanceservice&#45;&gt;multimodalembeddingspipeline -->
<g id="edge19" class="edge">
<title>aptitudetestmaintenanceservice&#45;&gt;multimodalembeddingspipeline</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M316.2,-744.03C379.34,-692.11 458.98,-626.63 523.35,-573.69"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="524.66,-576.02 528.79,-569.22 521.33,-571.96 524.66,-576.02"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="449.3,-627.6 449.3,-684 701.21,-684 701.21,-627.6 449.3,-627.6"/>
<text text-anchor="start" x="452.3" y="-668.4" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="452.3" y="-651.6" font-family="Arial" font-size="14.00" fill="#60a5fa">input (aptitude test questions and</text>
<text text-anchor="start" x="452.3" y="-634.8" font-family="Arial" font-size="14.00" fill="#60a5fa">answers)</text>
</g>
<!-- casestudymaintenanceservice&#45;&gt;multimodalembeddingspipeline -->
<g id="edge20" class="edge">
<title>casestudymaintenanceservice&#45;&gt;multimodalembeddingspipeline</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M960.3,-744.03C897.45,-692.11 818.19,-626.63 754.11,-573.69"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="756.16,-571.98 748.71,-569.23 752.82,-576.03 756.16,-571.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="879.19,-627.6 879.19,-684 1131.09,-684 1131.09,-627.6 879.19,-627.6"/>
<text text-anchor="start" x="882.19" y="-668.4" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="882.19" y="-651.6" font-family="Arial" font-size="14.00" fill="#60a5fa">input (case study and its baseline</text>
<text text-anchor="start" x="882.19" y="-634.8" font-family="Arial" font-size="14.00" fill="#60a5fa">solution)</text>
</g>
<!-- candidatetestingui&#45;&gt;candidateregistrationservice -->
<g id="edge12" class="edge">
<title>candidatetestingui&#45;&gt;candidateregistrationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3067.71,-1093.03C3091.75,-1058.62 3122.43,-1020.92 3156.79,-993.2 3163.35,-987.9 3166.69,-989.41 3174,-985.2 3202.97,-968.52 3233,-949.06 3261.1,-929.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3262.59,-931.94 3267.27,-925.52 3259.6,-927.62 3262.59,-931.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3156.79,-1001.6 3156.79,-1024.4 3376,-1024.4 3376,-1001.6 3156.79,-1001.6"/>
<text text-anchor="start" x="3159.79" y="-1008.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">registers candidate for certification</text>
</g>
<!-- candidatetestingui&#45;&gt;aptitudetesttaker -->
<g id="edge13" class="edge">
<title>candidatetestingui&#45;&gt;aptitudetesttaker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2948.57,-1092.93C2937.77,-1073.96 2928.2,-1053.4 2922.37,-1032.8 2913.41,-1001.11 2916.02,-965.93 2922.89,-934.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2925.43,-934.78 2924.58,-926.88 2920.32,-933.59 2925.43,-934.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2922.37,-1001.6 2922.37,-1024.4 3042,-1024.4 3042,-1001.6 2922.37,-1001.6"/>
<text text-anchor="start" x="2925.37" y="-1008.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">takes aptitude test</text>
</g>
<!-- candidatetestingui&#45;&gt;candidatestatusservice -->
<g id="edge16" class="edge">
<title>candidatetestingui&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3173.84,-1126.71C3214.02,-1114.25 3257.3,-1102 3298,-1092.8 3483.21,-1050.94 3559.28,-1132.31 3721,-1032.8 3801.46,-983.29 3935.7,-774.13 3964,-684 3975.5,-647.36 3963.59,-609.41 3944.17,-576.25"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3946.53,-575.09 3940.37,-570.06 3942.06,-577.83 3946.53,-575.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3955.55,-822.6 3955.55,-845.4 4204.32,-845.4 4204.32,-822.6 3955.55,-822.6"/>
<text text-anchor="start" x="3958.55" y="-829.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">checks progress of certification attempt</text>
</g>
<!-- candidatetestingui&#45;&gt;casestudyretrievalservice -->
<g id="edge14" class="edge">
<title>candidatetestingui&#45;&gt;casestudyretrievalservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3173.71,-1126.1C3213.89,-1113.66 3257.21,-1101.57 3298,-1092.8 3516.39,-1045.87 3575.86,-1064.35 3797,-1032.8 3925.44,-1014.47 3957.73,-1010.4 4085,-985.2 4248.74,-952.78 4434.13,-909.26 4564.89,-877.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4565.4,-879.99 4572.06,-875.67 4564.15,-874.89 4565.4,-879.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4042.96,-1001.6 4042.96,-1024.4 4173.45,-1024.4 4173.45,-1001.6 4042.96,-1001.6"/>
<text text-anchor="start" x="4045.96" y="-1008.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">retrieves case study</text>
</g>
<!-- candidatetestingui&#45;&gt;architecturesubmissionservice -->
<g id="edge15" class="edge">
<title>candidatetestingui&#45;&gt;architecturesubmissionservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2854.01,-1173.8C2578,-1150.07 2021.7,-1056.06 1810.78,-684 1766.49,-605.87 1622.69,-553.88 1824,-347.6 2015.85,-151.02 3971.35,-137.8 4565.02,-138.35"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4564.84,-140.98 4572.34,-138.36 4564.85,-135.73 4564.84,-140.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1810.78,-644.4 1810.78,-667.2 1995,-667.2 1995,-644.4 1810.78,-644.4"/>
<text text-anchor="start" x="1813.78" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">uploads architecture solution</text>
</g>
<!-- expertgradingui&#45;&gt;aptitudemanualgrader -->
<g id="edge17" class="edge">
<title>expertgradingui&#45;&gt;aptitudemanualgrader</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3482.1,-1093.07C3464.07,-1055.33 3437.19,-1015.05 3399,-993.2 3367.41,-975.13 2778.65,-996.34 2744,-985.2 2706.79,-973.24 2670.37,-952.42 2638.38,-930.02"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2640.01,-927.95 2632.38,-925.74 2636.96,-932.23 2640.01,-927.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3443.5,-1001.6 3443.5,-1024.4 3693.88,-1024.4 3693.88,-1001.6 3443.5,-1001.6"/>
<text text-anchor="start" x="3446.5" y="-1008.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades aptitude test, provides feedback</text>
</g>
<!-- expertgradingui&#45;&gt;architecturemanualgrader -->
<g id="edge18" class="edge">
<title>expertgradingui&#45;&gt;architecturemanualgrader</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3672.77,-1169.46C3996.72,-1142.88 4719.68,-1075.3 4950,-985.2 4984.79,-971.59 5019.36,-951.28 5050.28,-929.96"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="5051.78,-932.11 5056.42,-925.66 5048.77,-927.81 5051.78,-932.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4910.09,-993.2 4910.09,-1032.8 5148.77,-1032.8 5148.77,-993.2 4910.09,-993.2"/>
<text text-anchor="start" x="4913.09" y="-1017.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="4913.09" y="-1000.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- aptitudetesttaker&#45;&gt;aptitudemanualcapture -->
<g id="edge21" class="edge">
<title>aptitudetesttaker&#45;&gt;aptitudemanualcapture</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M2984.09,-744.17C2989.77,-705.4 2988.59,-661.21 2966,-627.6 2921.98,-562.08 2843.55,-525.36 2770.65,-504.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2771.71,-502.35 2763.78,-502.9 2770.32,-507.41 2771.71,-502.35"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2985.59,-644.4 2985.59,-667.2 3216.48,-667.2 3216.48,-644.4 2985.59,-644.4"/>
<text text-anchor="start" x="2988.59" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">captures aptitude test short answers</text>
</g>
<!-- aptitudetesttaker&#45;&gt;aptitudeautograder -->
<g id="edge22" class="edge">
<title>aptitudetesttaker&#45;&gt;aptitudeautograder</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M3088.82,-744.02C3116.01,-728.6 3145.19,-714.26 3174,-704 3203.19,-693.6 3291.72,-707.43 3312,-684 3336.95,-655.18 3338.02,-614.8 3330.78,-577.46"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3333.42,-577.27 3329.28,-570.49 3328.29,-578.37 3333.42,-577.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3333.85,-636 3333.85,-675.6 3559.31,-675.6 3559.31,-636 3333.85,-636"/>
<text text-anchor="start" x="3336.85" y="-660" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades aptitude test multiple choice</text>
<text text-anchor="start" x="3336.85" y="-643.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">answers</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;aptitudemanualcapture -->
<g id="edge23" class="edge">
<title>aptitudemanualgrader&#45;&gt;aptitudemanualcapture</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2374.66,-744.09C2336.4,-710.31 2312.5,-669.75 2337.1,-627.6 2359.02,-590.06 2394.28,-561.23 2431.99,-539.4"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2433.2,-541.72 2438.46,-535.76 2430.63,-537.15 2433.2,-541.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2337.1,-644.4 2337.1,-667.2 2582,-667.2 2582,-644.4 2337.1,-644.4"/>
<text text-anchor="start" x="2340.1" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">receives short answers of aptitude test</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;aptitudeautograder -->
<g id="edge24" class="edge">
<title>aptitudemanualgrader&#45;&gt;aptitudeautograder</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2580.85,-744.15C2609.15,-702.96 2647.74,-656.78 2693.31,-627.6 2764.09,-582.27 2972.68,-536.7 3124.22,-508.11"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3124.26,-510.78 3131.14,-506.81 3123.29,-505.62 3124.26,-510.78"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2693.31,-636 2693.31,-675.6 2939,-675.6 2939,-636 2693.31,-636"/>
<text text-anchor="start" x="2696.31" y="-660" font-family="Arial" font-size="14.00" fill="#c6c6c6">receives grade of aptitude test multiple</text>
<text text-anchor="start" x="2696.31" y="-643.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">choice</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;candidateaptitudenotification -->
<g id="edge25" class="edge">
<title>aptitudemanualgrader&#45;&gt;candidateaptitudenotification</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2369,-804.44C2243.97,-778.54 2084.89,-736.43 2044.98,-684 2022.32,-654.23 2017.22,-614.37 2019.1,-577.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2021.7,-578.12 2019.6,-570.46 2016.46,-577.76 2021.7,-578.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2044.98,-627.6 2044.98,-684 2300,-684 2300,-627.6 2044.98,-627.6"/>
<text text-anchor="start" x="2047.98" y="-668.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">notifies candidate of test results,</text>
<text text-anchor="start" x="2047.98" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">provides feedback, provides instructions</text>
<text text-anchor="start" x="2047.98" y="-634.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">on how to proceed</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;candidatestatusservice -->
<g id="edge26" class="edge">
<title>aptitudemanualgrader&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2653,-744.03C2681.62,-727.73 2712.85,-713.03 2744,-704 2833.88,-677.95 3497.63,-714.79 3586,-684 3651.51,-661.18 3714.06,-616.18 3762.62,-574.11"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3764.11,-576.3 3768.02,-569.38 3760.65,-572.35 3764.11,-576.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3692.7,-644.4 3692.7,-667.2 3937.21,-667.2 3937.21,-644.4 3692.7,-644.4"/>
<text text-anchor="start" x="3695.7" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; aptitude test status</text>
</g>
<!-- certificationviewerui&#45;&gt;certificationviewerservice -->
<g id="edge27" class="edge">
<title>certificationviewerui&#45;&gt;certificationviewerservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M6055,-744.03C6055,-693.38 6055,-629.81 6055,-577.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="6057.63,-577.83 6055,-570.33 6052.38,-577.83 6057.63,-577.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="6055,-644.4 6055,-667.2 6159.81,-667.2 6159.81,-644.4 6055,-644.4"/>
<text text-anchor="start" x="6058" y="-651.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">views certificate</text>
</g>
<!-- casestudyretrievalservice&#45;&gt;candidatestatusservice -->
<g id="edge28" class="edge">
<title>casestudyretrievalservice&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4575.04,-814.88C4444.78,-795.5 4258.86,-757.1 4110.72,-684 4054.16,-656.09 3998.91,-613.51 3954.57,-574.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3956.59,-572.62 3949.24,-569.59 3953.09,-576.54 3956.59,-572.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4110.72,-636 4110.72,-675.6 4363,-675.6 4363,-636 4110.72,-636"/>
<text text-anchor="start" x="4113.72" y="-660" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; architecture solution</text>
<text text-anchor="start" x="4113.72" y="-643.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatestatusservice -->
<g id="edge32" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M5040.29,-744.14C5011.84,-727.94 4980.85,-713.25 4950,-704 4849.46,-673.85 4578.48,-714.61 4478.08,-684 4432.18,-670 4429.97,-646.83 4386,-627.6 4270.61,-577.13 4133.55,-539.04 4027.99,-514.01"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4028.72,-511.49 4020.82,-512.33 4027.52,-516.6 4028.72,-511.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4478.08,-636 4478.08,-675.6 4707,-675.6 4707,-636 4478.08,-636"/>
<text text-anchor="start" x="4481.08" y="-660" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets candidate&#39; architecture solution</text>
<text text-anchor="start" x="4481.08" y="-643.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- architecturemanualgrader&#45;&gt;architecturesubmissionservice -->
<g id="edge29" class="edge">
<title>architecturemanualgrader&#45;&gt;architecturesubmissionservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M5098.21,-744.02C5061,-693.23 5014.6,-627.86 4976.36,-567.6 4906.1,-456.87 4833.28,-324.76 4786.26,-236.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4788.64,-235.64 4782.79,-230.26 4784,-238.11 4788.64,-235.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4976.36,-466.2 4976.36,-489 5138,-489 5138,-466.2 4976.36,-466.2"/>
<text text-anchor="start" x="4979.36" y="-473.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets architecture solution</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatearchitecturenotification -->
<g id="edge30" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatearchitecturenotification</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M5165,-744.05C5165,-614.2 5165,-373.54 5165,-238.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="5167.63,-238.32 5165,-230.82 5162.38,-238.32 5167.63,-238.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5165,-441 5165,-514.2 5412.25,-514.2 5412.25,-441 5165,-441"/>
<text text-anchor="start" x="5168" y="-498.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">notifies candidate of their grade for</text>
<text text-anchor="start" x="5168" y="-481.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">the architecture submission, provides</text>
<text text-anchor="start" x="5168" y="-465" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback, provides instructions on how</text>
<text text-anchor="start" x="5168" y="-448.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">to proceed</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatecertificationservice -->
<g id="edge31" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatecertificationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M5266.04,-744.02C5319.92,-694.44 5385.87,-630.21 5439,-567.6 5529.84,-460.55 5619.62,-325.91 5676.28,-236.39"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="5678.43,-237.9 5680.21,-230.16 5673.99,-235.1 5678.43,-237.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5599.93,-466.2 5599.93,-489 5801.26,-489 5801.26,-466.2 5599.93,-466.2"/>
<text text-anchor="start" x="5602.93" y="-473.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">generates and stores certificate</text>
</g>
<!-- certificationviewerservice&#45;&gt;candidatecertificationservice -->
<g id="edge33" class="edge">
<title>certificationviewerservice&#45;&gt;candidatecertificationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M5971.19,-387.9C5926.94,-341.08 5872.58,-283.55 5827.28,-235.6"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="5829.22,-233.84 5822.16,-230.19 5825.41,-237.44 5829.22,-233.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="5905.06,-296.4 5905.06,-319.2 6001.33,-319.2 6001.33,-296.4 5905.06,-296.4"/>
<text text-anchor="start" x="5908.06" y="-303.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets certificate</text>
</g>
<!-- architecturesubmissionservice&#45;&gt;candidatestatusservice -->
<g id="edge34" class="edge">
<title>architecturesubmissionservice&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M4575.15,-200.53C4420.02,-260.25 4185.43,-350.55 4027.2,-411.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="4026.72,-408.84 4020.66,-413.98 4028.6,-413.74 4026.72,-408.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="4322.8,-288 4322.8,-327.6 4575.07,-327.6 4575.07,-288 4322.8,-288"/>
<text text-anchor="start" x="4325.8" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; architecture solution</text>
<text text-anchor="start" x="4325.8" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
</g>
</svg>
`;case"administrativeSystemContext":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1640pt" height="906pt"
 viewBox="0.00 0.00 1640.14 906.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 891.05)">
<!-- companyadminui -->
<g id="node1" class="node">
<title>companyadminui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-876 0,-876 0,-696 320.04,-696 320.04,-876"/>
<text text-anchor="start" x="85.57" y="-791.3" font-family="Arial" font-size="19.00" fill="#eff6ff">companyAdminUi</text>
<text text-anchor="start" x="55.39" y="-768.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Company Admin User Interface</text>
</g>
<!-- usermaintenanceservice -->
<g id="node2" class="node">
<title>usermaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-536.4 0,-536.4 0,-356.4 320.04,-356.4 320.04,-536.4"/>
<text text-anchor="start" x="55.46" y="-451.7" font-family="Arial" font-size="19.00" fill="#eff6ff">userMaintenanceService</text>
<text text-anchor="start" x="72.06" y="-428.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">User Maintenance Service</text>
</g>
<!-- expertadminui -->
<g id="node3" class="node">
<title>expertadminui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-876 860,-876 860,-696 1180.04,-696 1180.04,-876"/>
<text text-anchor="start" x="957.72" y="-791.3" font-family="Arial" font-size="19.00" fill="#eff6ff">expertAdminUi</text>
<text text-anchor="start" x="925.82" y="-768.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Admin User Interface</text>
</g>
<!-- aptitudetestmaintenanceservice -->
<g id="node4" class="node">
<title>aptitudetestmaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-536.4 430,-536.4 430,-356.4 750.04,-356.4 750.04,-536.4"/>
<text text-anchor="start" x="451.66" y="-451.7" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestMaintenanceService</text>
<text text-anchor="start" x="473.71" y="-428.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Maintenance Service</text>
</g>
<!-- casestudymaintenanceservice -->
<g id="node5" class="node">
<title>casestudymaintenanceservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1180.04,-536.4 860,-536.4 860,-356.4 1180.04,-356.4 1180.04,-536.4"/>
<text text-anchor="start" x="889.59" y="-451.7" font-family="Arial" font-size="19.00" fill="#eff6ff">caseStudyMaintenanceService</text>
<text text-anchor="start" x="909.13" y="-428.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Case Study Maintenance Service</text>
</g>
<!-- aptitudetestanalysisservice -->
<g id="node6" class="node">
<title>aptitudetestanalysisservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1610.04,-536.4 1290,-536.4 1290,-356.4 1610.04,-356.4 1610.04,-536.4"/>
<text text-anchor="start" x="1330.69" y="-451.7" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestAnalysisService</text>
<text text-anchor="start" x="1348.73" y="-428.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Analysis Service</text>
</g>
<!-- multimodalembeddingspipeline -->
<g id="node7" class="node">
<title>multimodalembeddingspipeline</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="975.82,-180 632.22,-180 632.22,0 975.82,0 975.82,-180"/>
<text text-anchor="start" x="671.47" y="-104.3" font-family="Arial" font-size="19.00" fill="#eff6ff">multimodalEmbeddingsPipeline</text>
<text text-anchor="start" x="652.28" y="-81.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Generates embeddings from multimodal input</text>
<text text-anchor="start" x="746.08" y="-63.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">(text and images)</text>
</g>
<!-- companyadminui&#45;&gt;usermaintenanceservice -->
<g id="edge1" class="edge">
<title>companyadminui&#45;&gt;usermaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-696.3C160.02,-650.34 160.02,-594.07 160.02,-546.67"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="162.65,-546.91 160.02,-539.41 157.4,-546.91 162.65,-546.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-596.4 160.02,-636 414.26,-636 414.26,-596.4 160.02,-596.4"/>
<text text-anchor="start" x="163.02" y="-620.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages expert software architects and</text>
<text text-anchor="start" x="163.02" y="-603.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">their profiles</text>
</g>
<!-- expertadminui&#45;&gt;aptitudetestmaintenanceservice -->
<g id="edge2" class="edge">
<title>expertadminui&#45;&gt;aptitudetestmaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M869.88,-696C841.12,-677.2 811.79,-656.74 785.44,-636 749.94,-608.06 713.64,-574.61 682.1,-543.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="683.96,-541.84 676.77,-538.44 680.27,-545.57 683.96,-541.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="785.44,-604.8 785.44,-627.6 993.02,-627.6 993.02,-604.8 785.44,-604.8"/>
<text text-anchor="start" x="788.44" y="-612" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages aptitude test questions</text>
</g>
<!-- expertadminui&#45;&gt;casestudymaintenanceservice -->
<g id="edge3" class="edge">
<title>expertadminui&#45;&gt;casestudymaintenanceservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1020.02,-696.3C1020.02,-650.34 1020.02,-594.07 1020.02,-546.67"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1022.65,-546.91 1020.02,-539.41 1017.4,-546.91 1022.65,-546.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1020.02,-604.8 1020.02,-627.6 1165.32,-627.6 1165.32,-604.8 1020.02,-604.8"/>
<text text-anchor="start" x="1023.02" y="-612" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages case studies</text>
</g>
<!-- expertadminui&#45;&gt;aptitudetestanalysisservice -->
<g id="edge4" class="edge">
<title>expertadminui&#45;&gt;aptitudetestanalysisservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1133.28,-696.08C1193.41,-648.87 1267.34,-590.83 1328.64,-542.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1330.16,-544.84 1334.44,-538.14 1326.92,-540.71 1330.16,-544.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1247.91,-604.8 1247.91,-627.6 1434.46,-627.6 1434.46,-604.8 1247.91,-604.8"/>
<text text-anchor="start" x="1250.91" y="-612" font-family="Arial" font-size="14.00" fill="#c6c6c6">analyzes aptitude test results</text>
</g>
<!-- aptitudetestmaintenanceservice&#45;&gt;multimodalembeddingspipeline -->
<g id="edge5" class="edge">
<title>aptitudetestmaintenanceservice&#45;&gt;multimodalembeddingspipeline</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M586.2,-356.58C588.16,-318.57 595.44,-274.99 615.12,-240 625.95,-220.74 640.37,-203.08 656.43,-187.18"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="658.14,-189.18 661.74,-182.09 654.51,-185.39 658.14,-189.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="615.12,-240 615.12,-296.4 867.02,-296.4 867.02,-240 615.12,-240"/>
<text text-anchor="start" x="618.12" y="-280.8" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="618.12" y="-264" font-family="Arial" font-size="14.00" fill="#60a5fa">input (aptitude test questions and</text>
<text text-anchor="start" x="618.12" y="-247.2" font-family="Arial" font-size="14.00" fill="#60a5fa">answers)</text>
</g>
<!-- casestudymaintenanceservice&#45;&gt;multimodalembeddingspipeline -->
<g id="edge6" class="edge">
<title>casestudymaintenanceservice&#45;&gt;multimodalembeddingspipeline</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M965.79,-356.43C934.66,-305.35 895.54,-241.15 863.56,-188.69"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="865.8,-187.32 859.66,-182.29 861.32,-190.06 865.8,-187.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="924.95,-240 924.95,-296.4 1176.85,-296.4 1176.85,-240 924.95,-240"/>
<text text-anchor="start" x="927.95" y="-280.8" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="927.95" y="-264" font-family="Arial" font-size="14.00" fill="#60a5fa">input (case study and its baseline</text>
<text text-anchor="start" x="927.95" y="-247.2" font-family="Arial" font-size="14.00" fill="#60a5fa">solution)</text>
</g>
</g>
</svg>
`;case"aptitudeTestSystemContext":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="2603pt" height="1366pt"
 viewBox="0.00 0.00 2603.10 1365.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1350.65)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1390,-1046.4 1390,-1327.6 2242,-1327.6 2242,-1046.4 1390,-1046.4"/>
<text text-anchor="start" x="1398" y="-1314.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">USERS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1398,-697.6 1398,-978.8 2228,-978.8 2228,-697.6 1398,-697.6"/>
<text text-anchor="start" x="1406" y="-965.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-373.6 8,-638.8 392,-638.8 392,-373.6 8,-373.6"/>
<text text-anchor="start" x="16" y="-625.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">REGISTRATION</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_@gr4</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="438,-373.6 438,-638.8 822,-638.8 822,-373.6 438,-373.6"/>
<text text-anchor="start" x="446" y="-625.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">APTITUDE TEST</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_@gr5</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="830,-8 830,-646.8 1676,-646.8 1676,-8 830,-8"/>
<text text-anchor="start" x="838" y="-633.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">GRADING</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_@gr6</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="2181,-16 2181,-281.2 2565,-281.2 2565,-16 2181,-16"/>
<text text-anchor="start" x="2189" y="-268.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CERTIFICATION STATUS</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_@gr7</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1698,-16 1698,-281.2 2082,-281.2 2082,-16 1698,-16"/>
<text text-anchor="start" x="1706" y="-268.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NOTIFICATION</text>
</g>
<!-- candidate -->
<g id="node1" class="node">
<title>candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1750.02,-1266.4 1429.98,-1266.4 1429.98,-1086.4 1750.02,-1086.4 1750.02,-1266.4"/>
<text text-anchor="start" x="1548.8" y="-1181.7" font-family="Arial" font-size="19.00" fill="#eff6ff">candidate</text>
<text text-anchor="start" x="1504.95" y="-1158.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate for certification</text>
</g>
<!-- expert -->
<g id="node2" class="node">
<title>expert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2201.98,-1266.4 1860.02,-1266.4 1860.02,-1086.4 2201.98,-1086.4 2201.98,-1266.4"/>
<text text-anchor="start" x="2004.6" y="-1190.7" font-family="Arial" font-size="19.00" fill="#eff6ff">expert</text>
<text text-anchor="start" x="1880.08" y="-1167.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to grade</text>
<text text-anchor="start" x="1955.12" y="-1149.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">candidate submissions</text>
</g>
<!-- candidatetestingui -->
<g id="node3" class="node">
<title>candidatetestingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1758.02,-917.6 1437.98,-917.6 1437.98,-737.6 1758.02,-737.6 1758.02,-917.6"/>
<text text-anchor="start" x="1516.67" y="-832.9" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateTestingUi</text>
<text text-anchor="start" x="1487.94" y="-809.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate Testing User Interface</text>
</g>
<!-- expertgradingui -->
<g id="node4" class="node">
<title>expertgradingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2188.02,-917.6 1867.98,-917.6 1867.98,-737.6 2188.02,-737.6 2188.02,-917.6"/>
<text text-anchor="start" x="1958.83" y="-832.9" font-family="Arial" font-size="19.00" fill="#eff6ff">expertGradingUi</text>
<text text-anchor="start" x="1928.37" y="-809.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Grading User Interface</text>
</g>
<!-- candidateregistrationservice -->
<g id="node5" class="node">
<title>candidateregistrationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-585.6 39.98,-585.6 39.98,-405.6 360.02,-405.6 360.02,-585.6"/>
<text text-anchor="start" x="76.43" y="-500.9" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateRegistrationService</text>
<text text-anchor="start" x="96.61" y="-477.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate Registration Service</text>
</g>
<!-- aptitudetesttaker -->
<g id="node6" class="node">
<title>aptitudetesttaker</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="790.02,-585.6 469.98,-585.6 469.98,-405.6 790.02,-405.6 790.02,-585.6"/>
<text text-anchor="start" x="553.43" y="-500.9" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestTaker</text>
<text text-anchor="start" x="564.55" y="-477.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Taker</text>
</g>
<!-- aptitudemanualgrader -->
<g id="node7" class="node">
<title>aptitudemanualgrader</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1550.02,-585.6 1229.98,-585.6 1229.98,-405.6 1550.02,-405.6 1550.02,-585.6"/>
<text text-anchor="start" x="1295.47" y="-500.9" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeManualGrader</text>
<text text-anchor="start" x="1310.37" y="-477.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Manual Grader</text>
</g>
<!-- aptitudemanualcapture -->
<g id="node8" class="node">
<title>aptitudemanualcapture</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1190.02,-228 869.98,-228 869.98,-48 1190.02,-48 1190.02,-228"/>
<text text-anchor="start" x="931.24" y="-143.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeManualCapture</text>
<text text-anchor="start" x="947.03" y="-120.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Manual Capture</text>
</g>
<!-- aptitudeautograder -->
<g id="node9" class="node">
<title>aptitudeautograder</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1620.02,-228 1299.98,-228 1299.98,-48 1620.02,-48 1620.02,-228"/>
<text text-anchor="start" x="1377.08" y="-143.3" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeAutoGrader</text>
<text text-anchor="start" x="1389.54" y="-120.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Auto Grader</text>
</g>
<!-- candidatestatusservice -->
<g id="node10" class="node">
<title>candidatestatusservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2533.02,-228 2212.98,-228 2212.98,-48 2533.02,-48 2533.02,-228"/>
<text text-anchor="start" x="2273.19" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateStatusService</text>
</g>
<!-- candidateaptitudenotification -->
<g id="node11" class="node">
<title>candidateaptitudenotification</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2050.02,-228 1729.98,-228 1729.98,-48 2050.02,-48 2050.02,-228"/>
<text text-anchor="start" x="1766.95" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateAptitudeNotification</text>
</g>
<!-- candidate&#45;&gt;candidatetestingui -->
<g id="edge1" class="edge">
<title>candidate&#45;&gt;candidatetestingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1592.05,-1086.54C1593.17,-1038.11 1594.55,-978.03 1595.71,-928.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1598.33,-928.11 1595.88,-920.56 1593.08,-927.99 1598.33,-928.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1594.24,-995.2 1594.24,-1018 1621.23,-1018 1621.23,-995.2 1594.24,-995.2"/>
<text text-anchor="start" x="1597.24" y="-1003.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- expert&#45;&gt;expertgradingui -->
<g id="edge2" class="edge">
<title>expert&#45;&gt;expertgradingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2030.23,-1086.54C2029.81,-1038.11 2029.29,-978.03 2028.86,-928.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2031.49,-928.03 2028.8,-920.56 2026.24,-928.08 2031.49,-928.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2029.68,-986.8 2029.68,-1026.4 2268.36,-1026.4 2268.36,-986.8 2029.68,-986.8"/>
<text text-anchor="start" x="2032.68" y="-1010.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="2032.68" y="-994" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- candidatetestingui&#45;&gt;candidateregistrationservice -->
<g id="edge3" class="edge">
<title>candidatetestingui&#45;&gt;candidateregistrationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1438.06,-812.3C1158.47,-785.67 593.23,-724.09 411,-646.8 377.61,-632.64 344.31,-612.49 314.36,-591.53"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="316.11,-589.55 308.47,-587.35 313.07,-593.83 316.11,-589.55"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="503.92,-654.8 503.92,-677.6 723.13,-677.6 723.13,-654.8 503.92,-654.8"/>
<text text-anchor="start" x="506.92" y="-662" font-family="Arial" font-size="14.00" fill="#c6c6c6">registers candidate for certification</text>
</g>
<!-- candidatetestingui&#45;&gt;aptitudetesttaker -->
<g id="edge4" class="edge">
<title>candidatetestingui&#45;&gt;aptitudetesttaker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1438.26,-813.61C1271.96,-794.92 1007.68,-750.43 803,-646.8 774.82,-632.53 747.48,-612.67 723.17,-592.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="725.07,-590.22 717.67,-587.31 721.64,-594.19 725.07,-590.22"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="862.65,-654.8 862.65,-677.6 982.27,-677.6 982.27,-654.8 862.65,-654.8"/>
<text text-anchor="start" x="865.65" y="-662" font-family="Arial" font-size="14.00" fill="#c6c6c6">takes aptitude test</text>
</g>
<!-- candidatetestingui&#45;&gt;candidatestatusservice -->
<g id="edge5" class="edge">
<title>candidatetestingui&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1743.29,-737.85C1963.14,-603.21 2355.94,-361.25 2365,-345.6 2383.45,-313.72 2388.4,-274.2 2387.7,-238.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2390.32,-238.2 2387.44,-230.8 2385.07,-238.38 2390.32,-238.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2323.94,-484.2 2323.94,-507 2572.72,-507 2572.72,-484.2 2323.94,-484.2"/>
<text text-anchor="start" x="2326.94" y="-491.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">checks progress of certification attempt</text>
</g>
<!-- expertgradingui&#45;&gt;aptitudemanualgrader -->
<g id="edge6" class="edge">
<title>expertgradingui&#45;&gt;aptitudemanualgrader</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1884.25,-737.75C1860.66,-723.92 1836.31,-710.09 1813,-697.6 1730.88,-653.59 1637.52,-608.7 1559.44,-572.55"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1560.65,-570.21 1552.75,-569.45 1558.45,-574.98 1560.65,-570.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1768.04,-654.8 1768.04,-677.6 2018.42,-677.6 2018.42,-654.8 1768.04,-654.8"/>
<text text-anchor="start" x="1771.04" y="-662" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades aptitude test, provides feedback</text>
</g>
<!-- aptitudetesttaker&#45;&gt;aptitudemanualcapture -->
<g id="edge7" class="edge">
<title>aptitudetesttaker&#45;&gt;aptitudemanualcapture</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M485.32,-405.65C463.51,-394.01 440.97,-382.91 419,-373.6 377.73,-356.1 349.05,-381.43 322.1,-345.6 307.04,-325.57 306.33,-308.68 322.1,-289.2 388.5,-207.24 672.34,-168.18 859.81,-151"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="859.81,-153.64 867.05,-150.35 859.34,-148.41 859.81,-153.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="322.1,-306 322.1,-328.8 553,-328.8 553,-306 322.1,-306"/>
<text text-anchor="start" x="325.1" y="-313.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">captures aptitude test short answers</text>
</g>
<!-- aptitudetesttaker&#45;&gt;aptitudeautograder -->
<g id="edge8" class="edge">
<title>aptitudetesttaker&#45;&gt;aptitudeautograder</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M680.26,-405.83C710.2,-362.22 752.52,-313.84 804.54,-289.2 826.66,-278.72 1221.63,-288.46 1245,-281.2 1278.99,-270.64 1312.6,-252.92 1342.8,-233.51"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1343.86,-235.95 1348.69,-229.65 1340.98,-231.56 1343.86,-235.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="804.54,-297.6 804.54,-337.2 1030,-337.2 1030,-297.6 804.54,-297.6"/>
<text text-anchor="start" x="807.54" y="-321.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades aptitude test multiple choice</text>
<text text-anchor="start" x="807.54" y="-304.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">answers</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;aptitudemanualcapture -->
<g id="edge9" class="edge">
<title>aptitudemanualgrader&#45;&gt;aptitudemanualcapture</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1230.21,-444.89C1178.89,-421.93 1125.87,-389.71 1089.1,-345.6 1063.89,-315.35 1049.42,-274.91 1041.12,-237.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1043.78,-237.75 1039.67,-230.95 1038.65,-238.83 1043.78,-237.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1089.1,-306 1089.1,-328.8 1334,-328.8 1334,-306 1089.1,-306"/>
<text text-anchor="start" x="1092.1" y="-313.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">receives short answers of aptitude test</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;aptitudeautograder -->
<g id="edge10" class="edge">
<title>aptitudemanualgrader&#45;&gt;aptitudeautograder</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1366.17,-405.66C1360.06,-369.06 1357.81,-326.57 1368.31,-289.2 1373.3,-271.46 1381.03,-253.74 1389.93,-237.01"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1392.21,-238.31 1393.52,-230.48 1387.61,-235.78 1392.21,-238.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1368.31,-297.6 1368.31,-337.2 1614,-337.2 1614,-297.6 1368.31,-297.6"/>
<text text-anchor="start" x="1371.31" y="-321.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">receives grade of aptitude test multiple</text>
<text text-anchor="start" x="1371.31" y="-304.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">choice</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;candidatestatusservice -->
<g id="edge11" class="edge">
<title>aptitudemanualgrader&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1549.96,-466.41C1673.03,-442 1846.02,-401.73 1991,-345.6 2002.8,-341.03 2107.37,-284.39 2204.11,-231.57"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2205.16,-233.99 2210.49,-228.09 2202.65,-229.38 2205.16,-233.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2093.3,-306 2093.3,-328.8 2337.81,-328.8 2337.81,-306 2093.3,-306"/>
<text text-anchor="start" x="2096.3" y="-313.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; aptitude test status</text>
</g>
<!-- aptitudemanualgrader&#45;&gt;candidateaptitudenotification -->
<g id="edge12" class="edge">
<title>aptitudemanualgrader&#45;&gt;candidateaptitudenotification</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1545,-405.71C1575.99,-386.66 1607.93,-366.08 1637,-345.6 1685.44,-311.47 1736.49,-270.78 1779.95,-234.57"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1781.58,-236.63 1785.65,-229.81 1778.21,-232.6 1781.58,-236.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1708.88,-289.2 1708.88,-345.6 1963.9,-345.6 1963.9,-289.2 1708.88,-289.2"/>
<text text-anchor="start" x="1711.88" y="-330" font-family="Arial" font-size="14.00" fill="#c6c6c6">notifies candidate of test results,</text>
<text text-anchor="start" x="1711.88" y="-313.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">provides feedback, provides instructions</text>
<text text-anchor="start" x="1711.88" y="-296.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">on how to proceed</text>
</g>
</g>
</svg>
`;case"architectureSolutionSystemContext":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="2505pt" height="1740pt"
 viewBox="0.00 0.00 2505.10 1740.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1725.05)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="644,-1420.8 644,-1702 1496,-1702 1496,-1420.8 644,-1420.8"/>
<text text-anchor="start" x="652" y="-1689.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">USERS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="644,-1072 644,-1353.2 1904,-1353.2 1904,-1072 644,-1072"/>
<text text-anchor="start" x="652" y="-1340.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-364.8 8,-630 392,-630 392,-364.8 8,-364.8"/>
<text text-anchor="start" x="16" y="-617.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CASE STUDY</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_@gr5</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1106,-739.2 1106,-1004.4 1490,-1004.4 1490,-739.2 1106,-739.2"/>
<text text-anchor="start" x="1114" y="-991.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">GRADING</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_@gr4</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="660,-364.8 660,-630 1044,-630 1044,-364.8 660,-364.8"/>
<text text-anchor="start" x="668" y="-617.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SUBMISSION</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_@gr7</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1090,-364.8 1090,-630 1474,-630 1474,-364.8 1090,-364.8"/>
<text text-anchor="start" x="1098" y="-617.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NOTIFICATION</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_@gr6</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1111,-8 1111,-289.2 2467,-289.2 2467,-8 1111,-8"/>
<text text-anchor="start" x="1119" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CERTIFICATION STATUS</text>
</g>
<!-- candidate -->
<g id="node1" class="node">
<title>candidate</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1004.02,-1640.8 683.98,-1640.8 683.98,-1460.8 1004.02,-1460.8 1004.02,-1640.8"/>
<text text-anchor="start" x="802.8" y="-1556.1" font-family="Arial" font-size="19.00" fill="#eff6ff">candidate</text>
<text text-anchor="start" x="758.95" y="-1532.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate for certification</text>
</g>
<!-- expert -->
<g id="node2" class="node">
<title>expert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1455.98,-1640.8 1114.02,-1640.8 1114.02,-1460.8 1455.98,-1460.8 1455.98,-1640.8"/>
<text text-anchor="start" x="1258.6" y="-1565.1" font-family="Arial" font-size="19.00" fill="#eff6ff">expert</text>
<text text-anchor="start" x="1134.08" y="-1541.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to grade</text>
<text text-anchor="start" x="1209.12" y="-1523.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">candidate submissions</text>
</g>
<!-- candidatetestingui -->
<g id="node3" class="node">
<title>candidatetestingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1004.02,-1292 683.98,-1292 683.98,-1112 1004.02,-1112 1004.02,-1292"/>
<text text-anchor="start" x="762.67" y="-1207.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateTestingUi</text>
<text text-anchor="start" x="733.94" y="-1184.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Candidate Testing User Interface</text>
</g>
<!-- expertgradingui -->
<g id="node4" class="node">
<title>expertgradingui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1434.02,-1292 1113.98,-1292 1113.98,-1112 1434.02,-1112 1434.02,-1292"/>
<text text-anchor="start" x="1204.83" y="-1207.3" font-family="Arial" font-size="19.00" fill="#eff6ff">expertGradingUi</text>
<text text-anchor="start" x="1174.37" y="-1184.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Grading User Interface</text>
</g>
<!-- certificationviewerui -->
<g id="node5" class="node">
<title>certificationviewerui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1864.02,-1292 1543.98,-1292 1543.98,-1112 1864.02,-1112 1864.02,-1292"/>
<text text-anchor="start" x="1617.94" y="-1196.3" font-family="Arial" font-size="19.00" fill="#eff6ff">certificationViewerUi</text>
</g>
<!-- casestudyretrievalservice -->
<g id="node6" class="node">
<title>casestudyretrievalservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-576.8 39.98,-576.8 39.98,-396.8 360.02,-396.8 360.02,-576.8"/>
<text text-anchor="start" x="86.48" y="-481.1" font-family="Arial" font-size="19.00" fill="#eff6ff">caseStudyRetrievalService</text>
</g>
<!-- architecturemanualgrader -->
<g id="node7" class="node">
<title>architecturemanualgrader</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1458.02,-951.2 1137.98,-951.2 1137.98,-771.2 1458.02,-771.2 1458.02,-951.2"/>
<text text-anchor="start" x="1187.64" y="-866.5" font-family="Arial" font-size="19.00" fill="#eff6ff">architectureManualGrader</text>
<text text-anchor="start" x="1205.88" y="-843.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Architecture Manual Grader</text>
</g>
<!-- architecturesubmissionservice -->
<g id="node8" class="node">
<title>architecturesubmissionservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1012.02,-576.8 691.98,-576.8 691.98,-396.8 1012.02,-396.8 1012.02,-576.8"/>
<text text-anchor="start" x="721.58" y="-481.1" font-family="Arial" font-size="19.00" fill="#eff6ff">architectureSubmissionService</text>
</g>
<!-- candidatearchitecturenotification -->
<g id="node9" class="node">
<title>candidatearchitecturenotification</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1442.02,-576.8 1121.98,-576.8 1121.98,-396.8 1442.02,-396.8 1442.02,-576.8"/>
<text text-anchor="start" x="1143.12" y="-481.1" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateArchitectureNotification</text>
</g>
<!-- candidatestatusservice -->
<g id="node10" class="node">
<title>candidatestatusservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1471.02,-228 1150.98,-228 1150.98,-48 1471.02,-48 1471.02,-228"/>
<text text-anchor="start" x="1211.19" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateStatusService</text>
</g>
<!-- certificationviewerservice -->
<g id="node11" class="node">
<title>certificationviewerservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2427.02,-228 2106.98,-228 2106.98,-48 2427.02,-48 2427.02,-228"/>
<text text-anchor="start" x="2158.24" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">certificationViewerService</text>
</g>
<!-- candidatecertificationservice -->
<g id="node12" class="node">
<title>candidatecertificationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1901.02,-228 1580.98,-228 1580.98,-48 1901.02,-48 1901.02,-228"/>
<text text-anchor="start" x="1617.96" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateCertificationService</text>
</g>
<!-- candidate&#45;&gt;candidatetestingui -->
<g id="edge1" class="edge">
<title>candidate&#45;&gt;candidatetestingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M844,-1460.94C844,-1412.51 844,-1352.43 844,-1302.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="846.63,-1302.46 844,-1294.96 841.38,-1302.46 846.63,-1302.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="844,-1369.6 844,-1392.4 870.99,-1392.4 870.99,-1369.6 844,-1369.6"/>
<text text-anchor="start" x="847" y="-1377.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- candidate&#45;&gt;certificationviewerui -->
<g id="edge2" class="edge">
<title>candidate&#45;&gt;certificationviewerui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M968.7,-1460.91C997.16,-1444.71 1028.14,-1430.03 1059,-1420.8 1110.88,-1405.28 1497.69,-1425.27 1546,-1400.8 1589.47,-1378.78 1624.92,-1338.73 1651.14,-1300.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1653.26,-1301.96 1655.25,-1294.27 1648.9,-1299.04 1653.26,-1301.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1595.96,-1369.6 1595.96,-1392.4 1700.77,-1392.4 1700.77,-1369.6 1595.96,-1369.6"/>
<text text-anchor="start" x="1598.96" y="-1376.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">views certificate</text>
</g>
<!-- expert&#45;&gt;expertgradingui -->
<g id="edge3" class="edge">
<title>expert&#45;&gt;expertgradingui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1282.18,-1460.94C1280.65,-1412.51 1278.74,-1352.43 1277.15,-1302.44"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1279.78,-1302.37 1276.92,-1294.95 1274.53,-1302.53 1279.78,-1302.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1280.16,-1361.2 1280.16,-1400.8 1518.84,-1400.8 1518.84,-1361.2 1280.16,-1361.2"/>
<text text-anchor="start" x="1283.16" y="-1385.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="1283.16" y="-1368.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- candidatetestingui&#45;&gt;casestudyretrievalservice -->
<g id="edge4" class="edge">
<title>candidatetestingui&#45;&gt;casestudyretrievalservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M684.28,-1183.01C564.71,-1161.02 406.24,-1112.26 312.5,-1004.4 211.2,-887.84 194.46,-701.35 194.89,-587.2"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="197.51,-587.27 194.95,-579.75 192.26,-587.23 197.51,-587.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="312.5,-849.8 312.5,-872.6 443,-872.6 443,-849.8 312.5,-849.8"/>
<text text-anchor="start" x="315.5" y="-857" font-family="Arial" font-size="14.00" fill="#c6c6c6">retrieves case study</text>
</g>
<!-- candidatetestingui&#45;&gt;architecturesubmissionservice -->
<g id="edge5" class="edge">
<title>candidatetestingui&#45;&gt;architecturesubmissionservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M845,-1112.11C846.5,-978.42 849.32,-726.41 850.89,-586.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="853.51,-587.24 850.97,-579.71 848.26,-587.18 853.51,-587.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="849.06,-849.8 849.06,-872.6 1033.28,-872.6 1033.28,-849.8 849.06,-849.8"/>
<text text-anchor="start" x="852.06" y="-857" font-family="Arial" font-size="14.00" fill="#c6c6c6">uploads architecture solution</text>
</g>
<!-- candidatetestingui&#45;&gt;candidatestatusservice -->
<g id="edge6" class="edge">
<title>candidatetestingui&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M776.82,-1112.12C710.42,-1018.23 613.28,-863.04 574.23,-711.2 545.66,-600.12 609.15,-391.42 633,-364.8 762.32,-220.48 986.23,-168.21 1141.16,-149.39"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1141.12,-152.04 1148.26,-148.55 1140.51,-146.83 1141.12,-152.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="574.23,-663.2 574.23,-686 823,-686 823,-663.2 574.23,-663.2"/>
<text text-anchor="start" x="577.23" y="-670.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">checks progress of certification attempt</text>
</g>
<!-- expertgradingui&#45;&gt;architecturemanualgrader -->
<g id="edge7" class="edge">
<title>expertgradingui&#45;&gt;architecturemanualgrader</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1280.27,-1112.43C1283.55,-1066.12 1287.58,-1009.3 1290.97,-961.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1293.57,-961.82 1291.49,-954.16 1288.34,-961.45 1293.57,-961.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1286.72,-1012.4 1286.72,-1052 1525.4,-1052 1525.4,-1012.4 1286.72,-1012.4"/>
<text text-anchor="start" x="1289.72" y="-1036.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="1289.72" y="-1019.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- certificationviewerui&#45;&gt;certificationviewerservice -->
<g id="edge8" class="edge">
<title>certificationviewerui&#45;&gt;certificationviewerservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1782.52,-1112.07C1873.9,-1004.56 2023.97,-814.96 2116,-630 2180.11,-501.15 2223.4,-339.64 2246.64,-237.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2249.13,-238.72 2248.23,-230.83 2244.01,-237.56 2249.13,-238.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2109.47,-663.2 2109.47,-686 2214.28,-686 2214.28,-663.2 2109.47,-663.2"/>
<text text-anchor="start" x="2112.47" y="-670.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">views certificate</text>
</g>
<!-- casestudyretrievalservice&#45;&gt;candidatestatusservice -->
<g id="edge9" class="edge">
<title>casestudyretrievalservice&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M171.08,-396.86C165.51,-362.02 167.4,-324.05 190.72,-297.2 252.07,-226.58 842.41,-173.46 1140.52,-150.9"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1140.7,-153.52 1147.98,-150.34 1140.31,-148.29 1140.7,-153.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="190.72,-297.2 190.72,-336.8 443,-336.8 443,-297.2 190.72,-297.2"/>
<text text-anchor="start" x="193.72" y="-321.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; architecture solution</text>
<text text-anchor="start" x="193.72" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- architecturemanualgrader&#45;&gt;architecturesubmissionservice -->
<g id="edge10" class="edge">
<title>architecturemanualgrader&#45;&gt;architecturesubmissionservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1176.52,-771.22C1151.04,-751.84 1124.57,-731.15 1100.36,-711.2 1051.28,-670.76 998.68,-623.97 954.58,-583.7"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="956.55,-581.94 949.24,-578.82 953.01,-585.82 956.55,-581.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1100.36,-663.2 1100.36,-686 1262,-686 1262,-663.2 1100.36,-663.2"/>
<text text-anchor="start" x="1103.36" y="-670.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets architecture solution</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatearchitecturenotification -->
<g id="edge11" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatearchitecturenotification</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1294.19,-771.47C1291.8,-715.87 1288.72,-644.11 1286.25,-586.67"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1288.89,-586.9 1285.94,-579.52 1283.64,-587.12 1288.89,-586.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1291.43,-638 1291.43,-711.2 1538.68,-711.2 1538.68,-638 1291.43,-638"/>
<text text-anchor="start" x="1294.43" y="-695.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">notifies candidate of their grade for</text>
<text text-anchor="start" x="1294.43" y="-678.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">the architecture submission, provides</text>
<text text-anchor="start" x="1294.43" y="-662" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback, provides instructions on how</text>
<text text-anchor="start" x="1294.43" y="-645.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">to proceed</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatestatusservice -->
<g id="edge12" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1457.87,-806.34C1500.48,-783.85 1541.44,-752.96 1566,-711.2 1659.75,-551.82 1516.5,-351.76 1409.7,-235.35"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1411.8,-233.75 1404.78,-230.03 1407.94,-237.31 1411.8,-233.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1596.38,-467 1596.38,-506.6 1825.3,-506.6 1825.3,-467 1596.38,-467"/>
<text text-anchor="start" x="1599.38" y="-491" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets candidate&#39; architecture solution</text>
<text text-anchor="start" x="1599.38" y="-474.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- architecturemanualgrader&#45;&gt;candidatecertificationservice -->
<g id="edge13" class="edge">
<title>architecturemanualgrader&#45;&gt;candidatecertificationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1457.74,-841.97C1588.47,-817.66 1765.43,-761.14 1852,-630 1931.06,-510.23 1863.02,-342.08 1804.07,-236.9"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1806.42,-235.73 1800.43,-230.5 1801.85,-238.32 1806.42,-235.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1887.83,-475.4 1887.83,-498.2 2089.16,-498.2 2089.16,-475.4 1887.83,-475.4"/>
<text text-anchor="start" x="1890.83" y="-482.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">generates and stores certificate</text>
</g>
<!-- architecturesubmissionservice&#45;&gt;candidatestatusservice -->
<g id="edge14" class="edge">
<title>architecturesubmissionservice&#45;&gt;candidatestatusservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M969.61,-396.94C1035.59,-347.09 1117.9,-284.9 1185.17,-234.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1186.48,-236.37 1190.88,-229.75 1183.32,-232.18 1186.48,-236.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1095.26,-297.2 1095.26,-336.8 1347.54,-336.8 1347.54,-297.2 1095.26,-297.2"/>
<text text-anchor="start" x="1098.26" y="-321.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates candidate&#39; architecture solution</text>
<text text-anchor="start" x="1098.26" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">status</text>
</g>
<!-- certificationviewerservice&#45;&gt;candidatecertificationservice -->
<g id="edge15" class="edge">
<title>certificationviewerservice&#45;&gt;candidatecertificationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2107.35,-138C2045.39,-138 1974.34,-138 1911.39,-138"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1911.49,-135.38 1903.99,-138 1911.49,-140.63 1911.49,-135.38"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1955.87,-141 1955.87,-163.8 2052.13,-163.8 2052.13,-141 1955.87,-141"/>
<text text-anchor="start" x="1958.87" y="-148.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets certificate</text>
</g>
</g>
</svg>
`;case"aptitudeManualGraderContainer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="2624pt" height="1081pt"
 viewBox="0.00 0.00 2623.78 1080.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1065.85)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="35.68,-769.6 35.68,-1034.8 441.68,-1034.8 441.68,-769.6 35.68,-769.6"/>
<text text-anchor="start" x="43.68" y="-1021.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ACTORS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#1a468d" stroke="#1c3979" points="14.68,-335.6 14.68,-686 462.68,-686 462.68,-335.6 14.68,-335.6"/>
<text text-anchor="start" x="22.68" y="-673.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_expertgradingui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="46.68,-367.6 46.68,-632.8 430.68,-632.8 430.68,-367.6 46.68,-367.6"/>
<text text-anchor="start" x="54.68" y="-619.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXPERTGRADINGUI</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_@gr4</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="1308.68,-359.6 1308.68,-1042.8 2585.68,-1042.8 2585.68,-359.6 1308.68,-359.6"/>
<text text-anchor="start" x="1316.68" y="-1029.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">NEW CONTAINERS</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#1a468d" stroke="#1c3979" points="470.68,-8 470.68,-694 1300.68,-694 1300.68,-8 470.68,-8"/>
<text text-anchor="start" x="478.68" y="-681.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXISTING CONTAINERS</text>
</g>
<g id="clust8" class="cluster">
<title>cluster_aptitudemanualcapture</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="876.68,-367.6 876.68,-632.8 1260.68,-632.8 1260.68,-367.6 876.68,-367.6"/>
<text text-anchor="start" x="884.68" y="-619.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">APTITUDEMANUALCAPTURE</text>
</g>
<!-- expert -->
<g id="node1" class="node">
<title>expert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="409.66,-981.6 67.71,-981.6 67.71,-801.6 409.66,-801.6 409.66,-981.6"/>
<text text-anchor="start" x="212.28" y="-905.9" font-family="Arial" font-size="19.00" fill="#eff6ff">expert</text>
<text text-anchor="start" x="87.76" y="-882.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to grade</text>
<text text-anchor="start" x="162.81" y="-864.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">candidate submissions</text>
</g>
<!-- ui -->
<g id="node2" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="398.7,-579.6 78.66,-579.6 78.66,-399.6 398.7,-399.6 398.7,-579.6"/>
<text text-anchor="start" x="231.29" y="-494.9" font-family="Arial" font-size="19.00" fill="#eff6ff">ui</text>
<text text-anchor="start" x="139.05" y="-471.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Grading User Interface</text>
</g>
<!-- retrievalservice -->
<g id="node3" class="node">
<title>retrievalservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2114.3,-981.6 1779.06,-981.6 1779.06,-801.6 2114.3,-801.6 2114.3,-981.6"/>
<text text-anchor="start" x="1881.22" y="-905.9" font-family="Arial" font-size="19.00" fill="#eff6ff">retrievalService</text>
<text text-anchor="start" x="1799.12" y="-882.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieves embeddings of valid answers from</text>
<text text-anchor="start" x="1894.99" y="-864.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">the vector store</text>
</g>
<!-- candidatesubmissionguardrail -->
<g id="node4" class="node">
<title>candidatesubmissionguardrail</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2545.23,-981.6 2224.14,-981.6 2224.14,-801.6 2545.23,-801.6 2545.23,-981.6"/>
<text text-anchor="start" x="2255.3" y="-905.9" font-family="Arial" font-size="19.00" fill="#eff6ff">candidateSubmissionGuardrail</text>
<text text-anchor="start" x="2244.19" y="-882.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Validates submitted short answers against</text>
<text text-anchor="start" x="2263.77" y="-864.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">plagiarism and AI&#45;generated content</text>
</g>
<!-- generationservice -->
<g id="node5" class="node">
<title>generationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2113.89,-579.6 1779.47,-579.6 1779.47,-399.6 2113.89,-399.6 2113.89,-579.6"/>
<text text-anchor="start" x="1870.11" y="-512.9" font-family="Arial" font-size="19.00" fill="#eff6ff">generationService</text>
<text text-anchor="start" x="1801.6" y="-489.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Generates prompts for grading of candidate</text>
<text text-anchor="start" x="1799.53" y="-471.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">provided short answers, using valid answers</text>
<text text-anchor="start" x="1912.5" y="-453.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">as context</text>
</g>
<!-- embeddingsstore -->
<g id="node6" class="node">
<title>embeddingsstore</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M2544.7,-563.24C2544.7,-572.27 2472.98,-579.6 2384.68,-579.6 2296.39,-579.6 2224.66,-572.27 2224.66,-563.24 2224.66,-563.24 2224.66,-415.96 2224.66,-415.96 2224.66,-406.93 2296.39,-399.6 2384.68,-399.6 2472.98,-399.6 2544.7,-406.93 2544.7,-415.96 2544.7,-415.96 2544.7,-563.24 2544.7,-563.24"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M2544.7,-563.24C2544.7,-554.21 2472.98,-546.87 2384.68,-546.87 2296.39,-546.87 2224.66,-554.21 2224.66,-563.24"/>
<text text-anchor="start" x="2310.22" y="-494.9" font-family="Arial" font-size="19.00" fill="#eff6ff">embeddingsStore</text>
<text text-anchor="start" x="2264.2" y="-471.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores embeddings of valid answers</text>
</g>
<!-- promptorchestrator -->
<g id="node7" class="node">
<title>promptorchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1668.7,-981.6 1348.66,-981.6 1348.66,-801.6 1668.7,-801.6 1668.7,-981.6"/>
<text text-anchor="start" x="1426.32" y="-905.9" font-family="Arial" font-size="19.00" fill="#eff6ff">promptOrchestrator</text>
<text text-anchor="start" x="1375.69" y="-882.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Orchestrates the prompt generation and</text>
<text text-anchor="start" x="1452.42" y="-864.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieval services</text>
</g>
<!-- shortanswer_1 -->
<g id="node8" class="node">
<title>shortanswer_1</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1228.8,-579.6 908.56,-579.6 908.56,-399.6 1228.8,-399.6 1228.8,-579.6"/>
<text text-anchor="start" x="1015.88" y="-494.9" font-family="Arial" font-size="19.00" fill="#eff6ff">shortAnswer</text>
<text text-anchor="start" x="928.62" y="-471.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Persists short answers for manual grading</text>
</g>
<!-- shortanswer -->
<g id="node9" class="node">
<title>shortanswer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="830.7,-228 510.66,-228 510.66,-48 830.7,-48 830.7,-228"/>
<text text-anchor="start" x="617.88" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">shortAnswer</text>
</g>
<!-- gradeconsolidation -->
<g id="node10" class="node">
<title>gradeconsolidation</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1260.7,-228 940.66,-228 940.66,-48 1260.7,-48 1260.7,-228"/>
<text text-anchor="start" x="1018.82" y="-132.3" font-family="Arial" font-size="19.00" fill="#eff6ff">gradeConsolidation</text>
</g>
<!-- expert&#45;&gt;ui -->
<g id="edge2" class="edge">
<title>expert&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M238.68,-801.83C238.68,-755.19 238.68,-696.73 238.68,-643.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="241.31,-643.33 238.68,-635.83 236.06,-643.33 241.31,-643.33"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="0,-717.11 0,-756.71 238.68,-756.71 238.68,-717.11 0,-717.11"/>
<text text-anchor="start" x="3" y="-741.11" font-family="Arial" font-size="14.00" fill="#c6c6c6">grades architecture solution, provides</text>
<text text-anchor="start" x="3" y="-724.31" font-family="Arial" font-size="14.00" fill="#c6c6c6">feedback</text>
</g>
<!-- ui&#45;&gt;shortanswer -->
<g id="edge4" class="edge">
<title>ui&#45;&gt;shortanswer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M348.53,-399.7C410.98,-349.17 489.18,-285.88 552.9,-234.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="554.46,-236.43 558.64,-229.67 551.16,-232.35 554.46,-236.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="480.55,-288 480.55,-327.6 687.32,-327.6 687.32,-288 480.55,-288"/>
<text text-anchor="start" x="483.55" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">retrieves ungraded short answer</text>
<text text-anchor="start" x="483.55" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">questiions for the candidate</text>
</g>
<!-- ui&#45;&gt;gradeconsolidation -->
<g id="edge5" class="edge">
<title>ui&#45;&gt;gradeconsolidation</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M398.69,-440.14C491.95,-410.49 611.21,-370.17 714.68,-327.6 786.98,-297.85 864.79,-260.85 931.47,-227.51"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="932.57,-229.9 938.1,-224.19 930.22,-225.21 932.57,-229.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="800.97,-288 800.97,-327.6 1055.99,-327.6 1055.99,-288 800.97,-288"/>
<text text-anchor="start" x="803.97" y="-312" font-family="Arial" font-size="14.00" fill="#c6c6c6">retrieves graded short answer questions</text>
<text text-anchor="start" x="803.97" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">for the candidate</text>
</g>
<!-- retrievalservice&#45;&gt;generationservice -->
<!-- candidatesubmissionguardrail&#45;&gt;embeddingsstore -->
<!-- promptorchestrator&#45;&gt;shortanswer_1 -->
<g id="edge3" class="edge">
<title>promptorchestrator&#45;&gt;shortanswer_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1403.78,-801.61C1365.05,-768.26 1321.02,-729.78 1281.68,-694 1243.81,-659.55 1202.98,-620.94 1167.29,-586.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1169.17,-584.84 1161.94,-581.54 1165.53,-588.63 1169.17,-584.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1330.7,-702 1330.7,-741.6 1564.7,-741.6 1564.7,-702 1330.7,-702"/>
<text text-anchor="start" x="1333.7" y="-726" font-family="Arial" font-size="14.00" fill="#c6c6c6">retrieves ungraded short answers for</text>
<text text-anchor="start" x="1333.7" y="-709.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">grading</text>
</g>
</g>
</svg>
`;case"aptitudeTestMaintenanceContainer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="514pt" height="1377pt"
 viewBox="0.00 0.00 514.00 1377.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1362.05)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="36,-1073.8 36,-1339 428,-1339 428,-1073.8 36,-1073.8"/>
<text text-anchor="start" x="44" y="-1326.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ACTORS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-686.4 8,-1036.8 456,-1036.8 456,-686.4 8,-686.4"/>
<text text-anchor="start" x="16" y="-1023.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_expertadminui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-718.4 40,-983.6 424,-983.6 424,-718.4 40,-718.4"/>
<text text-anchor="start" x="48" y="-970.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXPERTADMINUI</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-365.6 40,-630.8 424,-630.8 424,-365.6 40,-365.6"/>
<text text-anchor="start" x="48" y="-617.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXISTING CONTAINERS</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_multimodalembeddingspipeline</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-8 40,-273.2 424,-273.2 424,-8 40,-8"/>
<text text-anchor="start" x="48" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MULTIMODALEMBEDDINGSPIPELINE</text>
</g>
<!-- designatedexpert -->
<g id="node1" class="node">
<title>designatedexpert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="396.31,-1285.8 67.69,-1285.8 67.69,-1105.8 396.31,-1105.8 396.31,-1285.8"/>
<text text-anchor="start" x="158.06" y="-1219.1" font-family="Arial" font-size="19.00" fill="#eff6ff">designatedExpert</text>
<text text-anchor="start" x="87.75" y="-1195.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to add</text>
<text text-anchor="start" x="97.34" y="-1177.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">or modify aptitude test questions or case</text>
<text text-anchor="start" x="208.24" y="-1159.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">studies</text>
</g>
<!-- ui -->
<g id="node2" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-930.4 71.98,-930.4 71.98,-750.4 392.02,-750.4 392.02,-930.4"/>
<text text-anchor="start" x="224.61" y="-845.7" font-family="Arial" font-size="19.00" fill="#eff6ff">ui</text>
<text text-anchor="start" x="137.8" y="-822.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Admin User Interface</text>
</g>
<!-- aptitudetestmaintenance -->
<g id="node3" class="node">
<title>aptitudetestmaintenance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-577.6 71.98,-577.6 71.98,-397.6 392.02,-397.6 392.02,-577.6"/>
<text text-anchor="start" x="125.32" y="-492.9" font-family="Arial" font-size="19.00" fill="#eff6ff">aptitudeTestMaintenance</text>
<text text-anchor="start" x="142.78" y="-469.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Aptitude Test Maintenance</text>
</g>
<!-- orchestrator -->
<g id="node4" class="node">
<title>orchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-220 71.98,-220 71.98,-40 392.02,-40 392.02,-220"/>
<text text-anchor="start" x="181.31" y="-154.1" font-family="Arial" font-size="19.00" fill="#eff6ff">orchestrator</text>
<text text-anchor="start" x="168.43" y="-132.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, Ray or similar</text>
<text text-anchor="start" x="95.27" y="-111.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Orchestrates the multimodal embeddings</text>
<text text-anchor="start" x="206.15" y="-93.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline</text>
</g>
<!-- designatedexpert&#45;&gt;ui -->
<g id="edge1" class="edge">
<title>designatedexpert&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M232,-1106.08C232,-1072.04 232,-1032.16 232,-993.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="234.63,-994.13 232,-986.63 229.38,-994.13 234.63,-994.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="205.01,-1044.86 205.01,-1067.66 232,-1067.66 232,-1044.86 205.01,-1044.86"/>
<text text-anchor="start" x="208.01" y="-1053.06" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- ui&#45;&gt;aptitudetestmaintenance -->
<g id="edge2" class="edge">
<title>ui&#45;&gt;aptitudetestmaintenance</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M232,-750.42C232,-700.86 232,-639.02 232,-587.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="234.63,-588.01 232,-580.51 229.38,-588.01 234.63,-588.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="232,-638.8 232,-678.4 482.34,-678.4 482.34,-638.8 232,-638.8"/>
<text text-anchor="start" x="235" y="-662.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">adds, removes or modifies aptitude test</text>
<text text-anchor="start" x="235" y="-646" font-family="Arial" font-size="14.00" fill="#c6c6c6">short questions</text>
</g>
<!-- aptitudetestmaintenance&#45;&gt;orchestrator -->
<g id="edge3" class="edge">
<title>aptitudetestmaintenance&#45;&gt;orchestrator</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M232,-397.78C232,-346.87 232,-282.84 232,-230.27"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="234.63,-230.44 232,-222.94 229.38,-230.44 234.63,-230.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="232,-281.2 232,-337.6 483.9,-337.6 483.9,-281.2 232,-281.2"/>
<text text-anchor="start" x="235" y="-322" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="235" y="-305.2" font-family="Arial" font-size="14.00" fill="#60a5fa">input (aptitude test questions and</text>
<text text-anchor="start" x="235" y="-288.4" font-family="Arial" font-size="14.00" fill="#60a5fa">answers)</text>
</g>
</g>
</svg>
`;case"caseStudyMaintenanceContainer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="530pt" height="1377pt"
 viewBox="0.00 0.00 530.34 1377.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1362.05)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="36,-1073.8 36,-1339 428,-1339 428,-1073.8 36,-1073.8"/>
<text text-anchor="start" x="44" y="-1326.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ACTORS</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-686.4 8,-1036.8 456,-1036.8 456,-686.4 8,-686.4"/>
<text text-anchor="start" x="16" y="-1023.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">UI</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_expertadminui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-718.4 40,-983.6 424,-983.6 424,-718.4 40,-718.4"/>
<text text-anchor="start" x="48" y="-970.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXPERTADMINUI</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-365.6 40,-630.8 424,-630.8 424,-365.6 40,-365.6"/>
<text text-anchor="start" x="48" y="-617.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">EXISTING CONTAINERS</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_multimodalembeddingspipeline</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-8 40,-273.2 424,-273.2 424,-8 40,-8"/>
<text text-anchor="start" x="48" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MULTIMODALEMBEDDINGSPIPELINE</text>
</g>
<!-- designatedexpert -->
<g id="node1" class="node">
<title>designatedexpert</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="396.31,-1285.8 67.69,-1285.8 67.69,-1105.8 396.31,-1105.8 396.31,-1285.8"/>
<text text-anchor="start" x="158.06" y="-1219.1" font-family="Arial" font-size="19.00" fill="#eff6ff">designatedExpert</text>
<text text-anchor="start" x="87.75" y="-1195.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert software architect designated to add</text>
<text text-anchor="start" x="97.34" y="-1177.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">or modify aptitude test questions or case</text>
<text text-anchor="start" x="208.24" y="-1159.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">studies</text>
</g>
<!-- ui -->
<g id="node2" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-930.4 71.98,-930.4 71.98,-750.4 392.02,-750.4 392.02,-930.4"/>
<text text-anchor="start" x="224.61" y="-845.7" font-family="Arial" font-size="19.00" fill="#eff6ff">ui</text>
<text text-anchor="start" x="137.8" y="-822.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Expert Admin User Interface</text>
</g>
<!-- casestudymaintenance -->
<g id="node3" class="node">
<title>casestudymaintenance</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-577.6 71.98,-577.6 71.98,-397.6 392.02,-397.6 392.02,-577.6"/>
<text text-anchor="start" x="133.24" y="-492.9" font-family="Arial" font-size="19.00" fill="#eff6ff">caseStudyMaintenance</text>
<text text-anchor="start" x="148.2" y="-469.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Case Study Maintenance</text>
</g>
<!-- orchestrator -->
<g id="node4" class="node">
<title>orchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.02,-220 71.98,-220 71.98,-40 392.02,-40 392.02,-220"/>
<text text-anchor="start" x="181.31" y="-154.1" font-family="Arial" font-size="19.00" fill="#eff6ff">orchestrator</text>
<text text-anchor="start" x="168.43" y="-132.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, Ray or similar</text>
<text text-anchor="start" x="95.27" y="-111.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Orchestrates the multimodal embeddings</text>
<text text-anchor="start" x="206.15" y="-93.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline</text>
</g>
<!-- designatedexpert&#45;&gt;ui -->
<g id="edge1" class="edge">
<title>designatedexpert&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M232,-1106.08C232,-1072.04 232,-1032.16 232,-993.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="234.63,-994.13 232,-986.63 229.38,-994.13 234.63,-994.13"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="205.01,-1044.86 205.01,-1067.66 232,-1067.66 232,-1044.86 205.01,-1044.86"/>
<text text-anchor="start" x="208.01" y="-1053.06" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- ui&#45;&gt;casestudymaintenance -->
<g id="edge2" class="edge">
<title>ui&#45;&gt;casestudymaintenance</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M232,-750.42C232,-700.86 232,-639.02 232,-587.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="234.63,-588.01 232,-580.51 229.38,-588.01 234.63,-588.01"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="232,-638.8 232,-678.4 500.24,-678.4 500.24,-638.8 232,-638.8"/>
<text text-anchor="start" x="235" y="-662.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">adds, removes or modifies case study and</text>
<text text-anchor="start" x="235" y="-646" font-family="Arial" font-size="14.00" fill="#c6c6c6">its baseline solution</text>
</g>
<!-- casestudymaintenance&#45;&gt;orchestrator -->
<g id="edge3" class="edge">
<title>casestudymaintenance&#45;&gt;orchestrator</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M232,-397.78C232,-346.87 232,-282.84 232,-230.27"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="234.63,-230.44 232,-222.94 229.38,-230.44 234.63,-230.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="232,-281.2 232,-337.6 483.9,-337.6 483.9,-281.2 232,-281.2"/>
<text text-anchor="start" x="235" y="-322" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from multimodal</text>
<text text-anchor="start" x="235" y="-305.2" font-family="Arial" font-size="14.00" fill="#60a5fa">input (case study and its baseline</text>
<text text-anchor="start" x="235" y="-288.4" font-family="Arial" font-size="14.00" fill="#60a5fa">solution)</text>
</g>
</g>
</svg>
`;case"multimodalEmbeddingsPipelineContainer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1067pt" height="1968pt"
 viewBox="0.00 0.00 1067.10 1967.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1952.65)">
<g id="clust1" class="cluster">
<title>cluster_@gr1</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-340.8 8,-1650 512,-1650 512,-340.8 8,-340.8"/>
<text text-anchor="start" x="16" y="-1637.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">TEXT PROCESSING</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_@gr2</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="520,-340.8 520,-1301.2 1029,-1301.2 1029,-340.8 520,-340.8"/>
<text text-anchor="start" x="528" y="-1288.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">IMAGES PROCESSING</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_@gr3</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="297,-8 297,-273.2 687,-273.2 687,-8 297,-8"/>
<text text-anchor="start" x="305" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">PERSISTENT STORAGE</text>
</g>
<!-- textextractor -->
<g id="node1" class="node">
<title>textextractor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-1588.8 47.98,-1588.8 47.98,-1408.8 368.02,-1408.8 368.02,-1588.8"/>
<text text-anchor="start" x="154.68" y="-1513.9" font-family="Arial" font-size="19.00" fill="#eff6ff">textExtractor</text>
<text text-anchor="start" x="84.46" y="-1492.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, PyMuPDF or pdfplumber or similar</text>
<text text-anchor="start" x="71.3" y="-1471.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Extracts text from binary input files (PDF)</text>
</g>
<!-- textpreprocessor -->
<g id="node2" class="node">
<title>textpreprocessor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="392.21,-1240 47.79,-1240 47.79,-1060 392.21,-1060 392.21,-1240"/>
<text text-anchor="start" x="148.19" y="-1192.1" font-family="Arial" font-size="19.00" fill="#eff6ff">textPreprocessor</text>
<text text-anchor="start" x="125" y="-1170.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, NLTK or spacy or similar</text>
<text text-anchor="start" x="77.43" y="-1149.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Preprocesses text input (aptitude test short</text>
<text text-anchor="start" x="67.84" y="-1131.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">questions and answers, case study): removes</text>
<text text-anchor="start" x="99.95" y="-1113.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">unnecessary characters, normalizes</text>
<text text-anchor="start" x="83.25" y="-1095.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">whitespace, and tokenizes into segments</text>
</g>
<!-- texttokenizer -->
<g id="node3" class="node">
<title>texttokenizer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="380.02,-900.4 59.98,-900.4 59.98,-720.4 380.02,-720.4 380.02,-900.4"/>
</g>
<!-- textembeddingsgenerator -->
<g id="node4" class="node">
<title>textembeddingsgenerator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="380.02,-560.8 59.98,-560.8 59.98,-380.8 380.02,-380.8 380.02,-560.8"/>
</g>
<!-- imagesextractor -->
<g id="node5" class="node">
<title>imagesextractor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="897.85,-1240 560.15,-1240 560.15,-1060 897.85,-1060 897.85,-1240"/>
<text text-anchor="start" x="660.37" y="-1165.1" font-family="Arial" font-size="19.00" fill="#eff6ff">imagesExtractor</text>
<text text-anchor="start" x="607.62" y="-1143.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, PyMuPDF or pdf2image or similar</text>
<text text-anchor="start" x="580.21" y="-1122.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Extracts images from binary input files (PDF)</text>
</g>
<!-- imagepreprocessor -->
<g id="node6" class="node">
<title>imagepreprocessor</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="884.02,-900.4 563.98,-900.4 563.98,-720.4 884.02,-720.4 884.02,-900.4"/>
<text text-anchor="start" x="641.63" y="-843.5" font-family="Arial" font-size="19.00" fill="#eff6ff">imagePreprocessor</text>
<text text-anchor="start" x="620.69" y="-822.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, OpenCV or Pillow or similar</text>
<text text-anchor="start" x="592.27" y="-800.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Preprocesses image input (case study):</text>
<text text-anchor="start" x="604.37" y="-782.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">resizes, normalizes, and converts to</text>
<text text-anchor="start" x="691.9" y="-764.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">grayscale</text>
</g>
<!-- imageembeddingsgenerator -->
<g id="node7" class="node">
<title>imageembeddingsgenerator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="880.02,-560.8 559.98,-560.8 559.98,-380.8 880.02,-380.8 880.02,-560.8"/>
</g>
<!-- embeddingsstore -->
<g id="node8" class="node">
<title>embeddingsstore</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M655.47,-203.64C655.47,-212.67 582.2,-220 492,-220 401.8,-220 328.53,-212.67 328.53,-203.64 328.53,-203.64 328.53,-56.36 328.53,-56.36 328.53,-47.33 401.8,-40 492,-40 582.2,-40 655.47,-47.33 655.47,-56.36 655.47,-56.36 655.47,-203.64 655.47,-203.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M655.47,-203.64C655.47,-194.61 582.2,-187.27 492,-187.27 401.8,-187.27 328.53,-194.61 328.53,-203.64"/>
<text text-anchor="start" x="417.54" y="-154.1" font-family="Arial" font-size="19.00" fill="#eff6ff">embeddingsStore</text>
<text text-anchor="start" x="403.86" y="-132.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Weviate or Pinecone or similar</text>
<text text-anchor="start" x="348.58" y="-111.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores embeddings of valid short questions</text>
<text text-anchor="start" x="464.07" y="-93.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">answers</text>
</g>
<!-- orchestrator -->
<g id="node9" class="node">
<title>orchestrator</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="611.02,-1937.6 290.98,-1937.6 290.98,-1757.6 611.02,-1757.6 611.02,-1937.6"/>
<text text-anchor="start" x="400.31" y="-1871.7" font-family="Arial" font-size="19.00" fill="#eff6ff">orchestrator</text>
<text text-anchor="start" x="387.43" y="-1850.3" font-family="Arial" font-size="13.00" fill="#bfdbfe">Python, Ray or similar</text>
<text text-anchor="start" x="314.27" y="-1828.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Orchestrates the multimodal embeddings</text>
<text text-anchor="start" x="425.15" y="-1810.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">pipeline</text>
</g>
<!-- textextractor&#45;&gt;textpreprocessor -->
<g id="edge3" class="edge">
<title>textextractor&#45;&gt;textpreprocessor</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M211.07,-1408.94C212.75,-1360.51 214.83,-1300.43 216.56,-1250.44"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="219.18,-1250.54 216.82,-1242.95 213.94,-1250.36 219.18,-1250.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="214.36,-1309.2 214.36,-1348.8 477.94,-1348.8 477.94,-1309.2 214.36,-1309.2"/>
<text text-anchor="start" x="217.36" y="-1333.2" font-family="Arial" font-size="14.00" fill="#60a5fa">preprocesses text input (aptitude test</text>
<text text-anchor="start" x="217.36" y="-1316.4" font-family="Arial" font-size="14.00" fill="#60a5fa">short questions and answers, case study)</text>
</g>
<!-- textpreprocessor&#45;&gt;texttokenizer -->
<g id="edge5" class="edge">
<title>textpreprocessor&#45;&gt;texttokenizer</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M220,-1060.3C220,-1014.34 220,-958.07 220,-910.67"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="222.63,-910.91 220,-903.41 217.38,-910.91 222.63,-910.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="220,-960.4 220,-1000 464.14,-1000 464.14,-960.4 220,-960.4"/>
<text text-anchor="start" x="223" y="-984.4" font-family="Arial" font-size="14.00" fill="#60a5fa">tokenizes aptitude test short questions</text>
<text text-anchor="start" x="223" y="-967.6" font-family="Arial" font-size="14.00" fill="#60a5fa">answers</text>
</g>
<!-- texttokenizer&#45;&gt;textembeddingsgenerator -->
<g id="edge7" class="edge">
<title>texttokenizer&#45;&gt;textembeddingsgenerator</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M220,-720.7C220,-674.74 220,-618.47 220,-571.07"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="222.63,-571.31 220,-563.81 217.38,-571.31 222.63,-571.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="220,-620.8 220,-660.4 464.14,-660.4 464.14,-620.8 220,-620.8"/>
<text text-anchor="start" x="223" y="-644.8" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from tokenized</text>
<text text-anchor="start" x="223" y="-628" font-family="Arial" font-size="14.00" fill="#60a5fa">short questions answers</text>
</g>
<!-- textembeddingsgenerator&#45;&gt;embeddingsstore -->
<g id="edge9" class="edge">
<title>textembeddingsgenerator&#45;&gt;embeddingsstore</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M286.7,-380.81C310.85,-349.1 338.55,-313.3 364.45,-281.2 378.23,-264.11 393.12,-246.15 407.69,-228.84"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="409.58,-230.67 412.41,-223.24 405.57,-227.28 409.58,-230.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="364.45,-281.2 364.45,-320.8 572,-320.8 572,-281.2 364.45,-281.2"/>
<text text-anchor="start" x="367.45" y="-305.2" font-family="Arial" font-size="14.00" fill="#60a5fa">stores embeddings of valid short</text>
<text text-anchor="start" x="367.45" y="-288.4" font-family="Arial" font-size="14.00" fill="#60a5fa">questions answers</text>
</g>
<!-- imagesextractor&#45;&gt;imagepreprocessor -->
<g id="edge4" class="edge">
<title>imagesextractor&#45;&gt;imagepreprocessor</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M727.69,-1060.3C727.01,-1014.34 726.17,-958.07 725.47,-910.67"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="728.1,-910.87 725.36,-903.41 722.85,-910.95 728.1,-910.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="726.65,-968.8 726.65,-991.6 973.1,-991.6 973.1,-968.8 726.65,-968.8"/>
<text text-anchor="start" x="729.65" y="-976" font-family="Arial" font-size="14.00" fill="#60a5fa">preprocesses image input (case study)</text>
</g>
<!-- imagepreprocessor&#45;&gt;imageembeddingsgenerator -->
<g id="edge6" class="edge">
<title>imagepreprocessor&#45;&gt;imageembeddingsgenerator</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M722.95,-720.7C722.4,-674.74 721.74,-618.47 721.18,-571.07"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="723.8,-571.28 721.09,-563.81 718.55,-571.34 723.8,-571.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="722.12,-620.8 722.12,-660.4 991.16,-660.4 991.16,-620.8 722.12,-620.8"/>
<text text-anchor="start" x="725.12" y="-644.8" font-family="Arial" font-size="14.00" fill="#60a5fa">generates embeddings from preprocessed</text>
<text text-anchor="start" x="725.12" y="-628" font-family="Arial" font-size="14.00" fill="#60a5fa">images</text>
</g>
<!-- imageembeddingsgenerator&#45;&gt;embeddingsstore -->
<g id="edge8" class="edge">
<title>imageembeddingsgenerator&#45;&gt;embeddingsstore</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M660.39,-381.23C629.03,-334.62 590.49,-277.35 558.19,-229.36"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="560.5,-228.09 554.14,-223.33 556.15,-231.02 560.5,-228.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="619.65,-281.2 619.65,-320.8 827.2,-320.8 827.2,-281.2 619.65,-281.2"/>
<text text-anchor="start" x="622.65" y="-305.2" font-family="Arial" font-size="14.00" fill="#60a5fa">stores embeddings of valid short</text>
<text text-anchor="start" x="622.65" y="-288.4" font-family="Arial" font-size="14.00" fill="#60a5fa">questions answers</text>
</g>
<!-- orchestrator&#45;&gt;textextractor -->
<g id="edge1" class="edge">
<title>orchestrator&#45;&gt;textextractor</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M388.74,-1757.74C354.3,-1708.6 311.47,-1647.46 276.14,-1597.05"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="278.5,-1595.84 272.05,-1591.21 274.2,-1598.86 278.5,-1595.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="344.05,-1658 344.05,-1697.6 562.46,-1697.6 562.46,-1658 344.05,-1658"/>
<text text-anchor="start" x="347.05" y="-1682" font-family="Arial" font-size="14.00" fill="#60a5fa">extracts text from binary input files</text>
<text text-anchor="start" x="347.05" y="-1665.2" font-family="Arial" font-size="14.00" fill="#60a5fa">(PDF)</text>
</g>
<!-- orchestrator&#45;&gt;imagesextractor -->
<g id="edge2" class="edge">
<title>orchestrator&#45;&gt;imagesextractor</title>
<path fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,2" d="M546.4,-1757.62C562.41,-1739.03 577.53,-1718.65 589,-1697.6 667.52,-1553.5 703.22,-1363.93 718.53,-1250.11"/>
<polygon fill="#3b82f6" stroke="#3b82f6" stroke-width="2" points="721.13,-1250.45 719.51,-1242.68 715.92,-1249.77 721.13,-1250.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="690.12,-1479 690.12,-1518.6 931.09,-1518.6 931.09,-1479 690.12,-1479"/>
<text text-anchor="start" x="693.12" y="-1503" font-family="Arial" font-size="14.00" fill="#60a5fa">extracts images from binary input files</text>
<text text-anchor="start" x="693.12" y="-1486.2" font-family="Arial" font-size="14.00" fill="#60a5fa">(PDF)</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}function a(e){switch(e){case"index":return`---
title: "Landscape view"
---
graph TB
  Candidate[fa:fa-user candidate]
  DesignatedExpert[fa:fa-user designatedExpert]
  Expert[fa:fa-user expert]
  CompanyAdmin[fa:fa-user companyAdmin]
  CandidateTestingUi[candidateTestingUi]
  CertificationViewerUi[certificationViewerUi]
  ExpertAdminUi[expertAdminUi]
  ExpertGradingUi[expertGradingUi]
  CompanyAdminUi[companyAdminUi]
  CaseStudyRetrievalService[caseStudyRetrievalService]
  CandidateRegistrationService[candidateRegistrationService]
  AptitudeTestTaker[aptitudeTestTaker]
  CertificationViewerService[certificationViewerService]
  AptitudeTestMaintenanceService[aptitudeTestMaintenanceService]
  CaseStudyMaintenanceService[caseStudyMaintenanceService]
  AptitudeTestAnalysisService[aptitudeTestAnalysisService]
  ArchitectureManualGrader[architectureManualGrader]
  AptitudeManualGrader[aptitudeManualGrader]
  UserMaintenanceService[userMaintenanceService]
  MultimodalEmbeddingsPipeline[multimodalEmbeddingsPipeline]
  ArchitectureSubmissionService[architectureSubmissionService]
  CandidateCertificationService[candidateCertificationService]
  CandidateArchitectureNotification[candidateArchitectureNotification]
  AptitudeManualCapture[aptitudeManualCapture]
  AptitudeAutoGrader[aptitudeAutoGrader]
  CandidateAptitudeNotification[candidateAptitudeNotification]
  CandidateStatusService[candidateStatusService]
  Candidate -. "[...]" .-> CandidateTestingUi
  Candidate -. "views certificate" .-> CertificationViewerUi
  DesignatedExpert -. "manages own profile" .-> CompanyAdminUi
  DesignatedExpert -. "[...]" .-> ExpertAdminUi
  Expert -. "grades architecture solution, provides feedback" .-> ExpertGradingUi
  Expert -. "manages own profile" .-> CompanyAdminUi
  CompanyAdmin -. "manages expert software architects and their profiles" .-> CompanyAdminUi
  CandidateTestingUi -. "retrieves case study" .-> CaseStudyRetrievalService
  CandidateTestingUi -. "uploads architecture solution" .-> ArchitectureSubmissionService
  CandidateTestingUi -. "registers candidate for certification" .-> CandidateRegistrationService
  CandidateTestingUi -. "takes aptitude test" .-> AptitudeTestTaker
  CandidateTestingUi -. "checks progress of certification attempt" .-> CandidateStatusService
  ExpertGradingUi -. "grades architecture solution, provides feedback" .-> ArchitectureManualGrader
  ExpertGradingUi -. "grades aptitude test, provides feedback" .-> AptitudeManualGrader
  CertificationViewerUi -. "views certificate" .-> CertificationViewerService
  CaseStudyRetrievalService -. "updates candidate' architecture solution status" .-> CandidateStatusService
  ArchitectureSubmissionService -. "updates candidate' architecture solution status" .-> CandidateStatusService
  ArchitectureManualGrader -. "gets architecture solution" .-> ArchitectureSubmissionService
  ArchitectureManualGrader -. "generates and stores certificate" .-> CandidateCertificationService
  ArchitectureManualGrader -. "notifies candidate of their grade for the architecture submission, provides feedback, provides instructions on how to proceed" .-> CandidateArchitectureNotification
  ArchitectureManualGrader -. "gets candidate' architecture solution status" .-> CandidateStatusService
  CertificationViewerService -. "gets certificate" .-> CandidateCertificationService
  CompanyAdminUi -. "manages expert software architects and their profiles" .-> UserMaintenanceService
  ExpertAdminUi -. "manages aptitude test questions" .-> AptitudeTestMaintenanceService
  ExpertAdminUi -. "manages case studies" .-> CaseStudyMaintenanceService
  ExpertAdminUi -. "analyzes aptitude test results" .-> AptitudeTestAnalysisService
  AptitudeTestMaintenanceService -. "generates embeddings from multimodal input (aptitude test questions and answers)" .-> MultimodalEmbeddingsPipeline
  CaseStudyMaintenanceService -. "generates embeddings from multimodal input (case study and its baseline solution)" .-> MultimodalEmbeddingsPipeline
  AptitudeTestTaker -. "captures aptitude test short answers" .-> AptitudeManualCapture
  AptitudeTestTaker -. "grades aptitude test multiple choice answers" .-> AptitudeAutoGrader
  AptitudeManualGrader -. "receives short answers of aptitude test" .-> AptitudeManualCapture
  AptitudeManualGrader -. "receives grade of aptitude test multiple choice" .-> AptitudeAutoGrader
  AptitudeManualGrader -. "updates candidate' aptitude test status" .-> CandidateStatusService
  AptitudeManualGrader -. "notifies candidate of test results, provides feedback, provides instructions on how to proceed" .-> CandidateAptitudeNotification
`;case"commonLandscape":return`graph TB
  subgraph @gr1["Actors"]
    @gr1.NatedExpert[fa:fa-user designatedExpert]
    @gr1.T[fa:fa-user expert]
    @gr1.NyAdmin[fa:fa-user companyAdmin]
    @gr1.Date[fa:fa-user candidate]
  end
  subgraph @gr2["Administrative"]
    @gr2.NyAdminUi[companyAdminUi]
    @gr2.TAdminUi[expertAdminUi]
    @gr2.AintenanceService[userMaintenanceService]
    @gr2.UdeTestMaintenanceService[aptitudeTestMaintenanceService]
    @gr2.TudyMaintenanceService[caseStudyMaintenanceService]
    @gr2.UdeTestAnalysisService[aptitudeTestAnalysisService]
  end
  subgraph @gr3["Aptitude Test"]
    @gr3.DateTestingUi[candidateTestingUi]
    @gr3.TGradingUi[expertGradingUi]
    @gr3.DateRegistrationService[candidateRegistrationService]
    @gr3.UdeTestTaker[aptitudeTestTaker]
    @gr3.UdeManualGrader[aptitudeManualGrader]
    @gr3.UdeManualCapture[aptitudeManualCapture]
    @gr3.UdeAutoGrader[aptitudeAutoGrader]
    @gr3.DateAptitudeNotification[candidateAptitudeNotification]
    @gr3.DateStatusService[candidateStatusService]
  end
  subgraph @gr4["Case Study"]
    @gr4.FicationViewerUi[certificationViewerUi]
    @gr4.TudyRetrievalService[caseStudyRetrievalService]
    @gr4.TectureManualGrader[architectureManualGrader]
    @gr4.FicationViewerService[certificationViewerService]
    @gr4.TectureSubmissionService[architectureSubmissionService]
    @gr4.DateArchitectureNotification[candidateArchitectureNotification]
    @gr4.DateCertificationService[candidateCertificationService]
  end
  MultimodalEmbeddingsPipeline[multimodalEmbeddingsPipeline]
  @gr1.NatedExpert -. "manages own profile" .-> @gr2.NyAdminUi
  @gr1.T -. "manages own profile" .-> @gr2.NyAdminUi
  @gr1.NyAdmin -. "manages expert software architects and their profiles" .-> @gr2.NyAdminUi
  @gr1.NatedExpert -. "[...]" .-> @gr2.TAdminUi
  @gr2.NyAdminUi -. "manages expert software architects and their profiles" .-> @gr2.AintenanceService
  @gr2.TAdminUi -. "manages aptitude test questions" .-> @gr2.UdeTestMaintenanceService
  @gr2.TAdminUi -. "manages case studies" .-> @gr2.TudyMaintenanceService
  @gr2.TAdminUi -. "analyzes aptitude test results" .-> @gr2.UdeTestAnalysisService
  @gr2.UdeTestMaintenanceService -. "generates embeddings from multimodal input (aptitude test questions and answers)" .-> MultimodalEmbeddingsPipeline
  @gr2.TudyMaintenanceService -. "generates embeddings from multimodal input (case study and its baseline solution)" .-> MultimodalEmbeddingsPipeline
  @gr1.Date -. "[...]" .-> @gr3.DateTestingUi
  @gr1.T -. "grades architecture solution, provides feedback" .-> @gr3.TGradingUi
  @gr3.DateTestingUi -. "registers candidate for certification" .-> @gr3.DateRegistrationService
  @gr3.DateTestingUi -. "takes aptitude test" .-> @gr3.UdeTestTaker
  @gr3.UdeTestTaker -. "captures aptitude test short answers" .-> @gr3.UdeManualCapture
  @gr3.UdeTestTaker -. "grades aptitude test multiple choice answers" .-> @gr3.UdeAutoGrader
  @gr3.TGradingUi -. "grades aptitude test, provides feedback" .-> @gr3.UdeManualGrader
  @gr3.UdeManualGrader -. "receives short answers of aptitude test" .-> @gr3.UdeManualCapture
  @gr3.UdeManualGrader -. "receives grade of aptitude test multiple choice" .-> @gr3.UdeAutoGrader
  @gr3.DateTestingUi -. "checks progress of certification attempt" .-> @gr3.DateStatusService
  @gr3.UdeManualGrader -. "updates candidate' aptitude test status" .-> @gr3.DateStatusService
  @gr3.UdeManualGrader -. "notifies candidate of test results, provides feedback, provides instructions on how to proceed" .-> @gr3.DateAptitudeNotification
  @gr1.Date -. "views certificate" .-> @gr4.FicationViewerUi
  @gr3.DateTestingUi -. "retrieves case study" .-> @gr4.TudyRetrievalService
  @gr4.TudyRetrievalService -. "updates candidate' architecture solution status" .-> @gr3.DateStatusService
  @gr3.DateTestingUi -. "uploads architecture solution" .-> @gr4.TectureSubmissionService
  @gr4.TectureSubmissionService -. "updates candidate' architecture solution status" .-> @gr3.DateStatusService
  @gr3.TGradingUi -. "grades architecture solution, provides feedback" .-> @gr4.TectureManualGrader
  @gr4.TectureManualGrader -. "gets candidate' architecture solution status" .-> @gr3.DateStatusService
  @gr4.TectureManualGrader -. "gets architecture solution" .-> @gr4.TectureSubmissionService
  @gr4.TectureManualGrader -. "generates and stores certificate" .-> @gr4.DateCertificationService
  @gr4.TectureManualGrader -. "notifies candidate of their grade for the architecture submission, provides feedback, provides instructions on how to proceed" .-> @gr4.DateArchitectureNotification
  @gr4.FicationViewerUi -. "views certificate" .-> @gr4.FicationViewerService
  @gr4.FicationViewerService -. "gets certificate" .-> @gr4.DateCertificationService
`;case"administrativeSystemContext":return`graph TB
  CompanyAdminUi[companyAdminUi]
  ExpertAdminUi[expertAdminUi]
  UserMaintenanceService[userMaintenanceService]
  AptitudeTestMaintenanceService[aptitudeTestMaintenanceService]
  CaseStudyMaintenanceService[caseStudyMaintenanceService]
  AptitudeTestAnalysisService[aptitudeTestAnalysisService]
  MultimodalEmbeddingsPipeline[multimodalEmbeddingsPipeline]
  CompanyAdminUi -. "manages expert software architects and their profiles" .-> UserMaintenanceService
  ExpertAdminUi -. "manages aptitude test questions" .-> AptitudeTestMaintenanceService
  ExpertAdminUi -. "manages case studies" .-> CaseStudyMaintenanceService
  ExpertAdminUi -. "analyzes aptitude test results" .-> AptitudeTestAnalysisService
  AptitudeTestMaintenanceService -. "generates embeddings from multimodal input (aptitude test questions and answers)" .-> MultimodalEmbeddingsPipeline
  CaseStudyMaintenanceService -. "generates embeddings from multimodal input (case study and its baseline solution)" .-> MultimodalEmbeddingsPipeline
`;case"aptitudeTestSystemContext":return`graph TB
  subgraph @gr1["Users"]
    @gr1.Date[fa:fa-user candidate]
    @gr1.T[fa:fa-user expert]
  end
  subgraph @gr2["UI"]
    @gr2.DateTestingUi[candidateTestingUi]
    @gr2.TGradingUi[expertGradingUi]
  end
  subgraph @gr3["Registration"]
    @gr3.DateRegistrationService[candidateRegistrationService]
  end
  subgraph @gr4["Aptitude Test"]
    @gr4.UdeTestTaker[aptitudeTestTaker]
  end
  subgraph @gr5["Grading"]
    @gr5.UdeManualGrader[aptitudeManualGrader]
    @gr5.UdeManualCapture[aptitudeManualCapture]
    @gr5.UdeAutoGrader[aptitudeAutoGrader]
  end
  subgraph @gr6["Certification status"]
    @gr6.DateStatusService[candidateStatusService]
  end
  subgraph @gr7["Notification"]
    @gr7.DateAptitudeNotification[candidateAptitudeNotification]
  end
  @gr1.Date -. "[...]" .-> @gr2.DateTestingUi
  @gr1.T -. "grades architecture solution, provides feedback" .-> @gr2.TGradingUi
  @gr2.DateTestingUi -. "registers candidate for certification" .-> @gr3.DateRegistrationService
  @gr2.DateTestingUi -. "takes aptitude test" .-> @gr4.UdeTestTaker
  @gr4.UdeTestTaker -. "captures aptitude test short answers" .-> @gr5.UdeManualCapture
  @gr4.UdeTestTaker -. "grades aptitude test multiple choice answers" .-> @gr5.UdeAutoGrader
  @gr2.TGradingUi -. "grades aptitude test, provides feedback" .-> @gr5.UdeManualGrader
  @gr5.UdeManualGrader -. "receives short answers of aptitude test" .-> @gr5.UdeManualCapture
  @gr5.UdeManualGrader -. "receives grade of aptitude test multiple choice" .-> @gr5.UdeAutoGrader
  @gr2.DateTestingUi -. "checks progress of certification attempt" .-> @gr6.DateStatusService
  @gr5.UdeManualGrader -. "updates candidate' aptitude test status" .-> @gr6.DateStatusService
  @gr5.UdeManualGrader -. "notifies candidate of test results, provides feedback, provides instructions on how to proceed" .-> @gr7.DateAptitudeNotification
`;case"architectureSolutionSystemContext":return`graph TB
  subgraph @gr1["Users"]
    @gr1.Date[fa:fa-user candidate]
    @gr1.T[fa:fa-user expert]
  end
  subgraph @gr2["UI"]
    @gr2.DateTestingUi[candidateTestingUi]
    @gr2.TGradingUi[expertGradingUi]
    @gr2.FicationViewerUi[certificationViewerUi]
  end
  subgraph @gr3["Case Study"]
    @gr3.TudyRetrievalService[caseStudyRetrievalService]
  end
  subgraph @gr5["Grading"]
    @gr5.TectureManualGrader[architectureManualGrader]
  end
  subgraph @gr4["Submission"]
    @gr4.TectureSubmissionService[architectureSubmissionService]
  end
  subgraph @gr7["Notification"]
    @gr7.DateArchitectureNotification[candidateArchitectureNotification]
  end
  subgraph @gr6["Certification status"]
    @gr6.DateStatusService[candidateStatusService]
    @gr6.FicationViewerService[certificationViewerService]
    @gr6.DateCertificationService[candidateCertificationService]
  end
  @gr1.Date -. "[...]" .-> @gr2.DateTestingUi
  @gr1.T -. "grades architecture solution, provides feedback" .-> @gr2.TGradingUi
  @gr1.Date -. "views certificate" .-> @gr2.FicationViewerUi
  @gr2.DateTestingUi -. "retrieves case study" .-> @gr3.TudyRetrievalService
  @gr2.DateTestingUi -. "uploads architecture solution" .-> @gr4.TectureSubmissionService
  @gr2.TGradingUi -. "grades architecture solution, provides feedback" .-> @gr5.TectureManualGrader
  @gr5.TectureManualGrader -. "gets architecture solution" .-> @gr4.TectureSubmissionService
  @gr2.DateTestingUi -. "checks progress of certification attempt" .-> @gr6.DateStatusService
  @gr3.TudyRetrievalService -. "updates candidate' architecture solution status" .-> @gr6.DateStatusService
  @gr4.TectureSubmissionService -. "updates candidate' architecture solution status" .-> @gr6.DateStatusService
  @gr5.TectureManualGrader -. "gets candidate' architecture solution status" .-> @gr6.DateStatusService
  @gr5.TectureManualGrader -. "generates and stores certificate" .-> @gr6.DateCertificationService
  @gr2.FicationViewerUi -. "views certificate" .-> @gr6.FicationViewerService
  @gr6.FicationViewerService -. "gets certificate" .-> @gr6.DateCertificationService
  @gr5.TectureManualGrader -. "notifies candidate of their grade for the architecture submission, provides feedback, provides instructions on how to proceed" .-> @gr7.DateArchitectureNotification
`;case"aptitudeManualGraderContainer":return`---
title: "aptitudeManualGrader"
---
graph TB
  subgraph @gr1["Actors"]
    @gr1.T[fa:fa-user expert]
  end
  subgraph @gr2["UI"]
    subgraph @gr2.TGradingUi["expertGradingUi"]
      @gr2.TGradingUi.Ui[ui]
    end
  end
  subgraph @gr4["New Containers"]
    @gr4.UdeManualGraderPromptOrchestrator[promptOrchestrator]
    @gr4.UdeManualGraderRetrievalService[retrievalService]
    @gr4.UdeManualGraderCandidateSubmissionGuardrail[candidateSubmissionGuardrail]
    @gr4.UdeManualGraderGenerationService[generationService]
    @gr4.UdeManualGraderEmbeddingsStore[(embeddingsStore)]
  end
  subgraph @gr3["Existing Containers"]
    subgraph @gr3.UdeManualCapture["aptitudeManualCapture"]
      @gr3.UdeManualCapture.ShortAnswer[shortAnswer]
    end
    @gr3.UdeManualGraderShortAnswer[shortAnswer]
    @gr3.UdeManualGraderGradeConsolidation[gradeConsolidation]
  end
  @gr2.TGradingUi.Ui -. "retrieves ungraded short answer questiions for the candidate" .-> @gr3.UdeManualGraderShortAnswer
  @gr2.TGradingUi.Ui -. "retrieves graded short answer questions for the candidate" .-> @gr3.UdeManualGraderGradeConsolidation
  @gr4.UdeManualGraderPromptOrchestrator -. "retrieves ungraded short answers for grading" .-> @gr3.UdeManualCapture.ShortAnswer
  @gr1.T -. "grades architecture solution, provides feedback" .-> @gr2.TGradingUi
`;case"aptitudeTestMaintenanceContainer":return`---
title: "aptitudeTestMaintenanceService"
---
graph TB
  subgraph @gr1["Actors"]
    @gr1.NatedExpert[fa:fa-user designatedExpert]
  end
  subgraph @gr2["UI"]
    subgraph @gr2.TAdminUi["expertAdminUi"]
      @gr2.TAdminUi.Ui[ui]
    end
  end
  subgraph @gr3["Existing Containers"]
    @gr3.UdeTestMaintenanceServiceAptitudeTestMaintenance[aptitudeTestMaintenance]
  end
  subgraph MultimodalEmbeddingsPipeline["multimodalEmbeddingsPipeline"]
    MultimodalEmbeddingsPipeline.Orchestrator[orchestrator]
  end
  @gr2.TAdminUi.Ui -. "adds, removes or modifies aptitude test short questions" .-> @gr3.UdeTestMaintenanceServiceAptitudeTestMaintenance
  @gr3.UdeTestMaintenanceServiceAptitudeTestMaintenance -. "generates embeddings from multimodal input (aptitude test questions and answers)" .-> MultimodalEmbeddingsPipeline.Orchestrator
  @gr1.NatedExpert -. "[...]" .-> @gr2.TAdminUi
`;case"caseStudyMaintenanceContainer":return`---
title: "caseStudyMaintenance"
---
graph TB
  subgraph @gr1["Actors"]
    @gr1.NatedExpert[fa:fa-user designatedExpert]
  end
  subgraph @gr2["UI"]
    subgraph @gr2.TAdminUi["expertAdminUi"]
      @gr2.TAdminUi.Ui[ui]
    end
  end
  subgraph @gr3["Existing Containers"]
    @gr3.TudyMaintenanceServiceCaseStudyMaintenance[caseStudyMaintenance]
  end
  subgraph MultimodalEmbeddingsPipeline["multimodalEmbeddingsPipeline"]
    MultimodalEmbeddingsPipeline.Orchestrator[orchestrator]
  end
  @gr2.TAdminUi.Ui -. "adds, removes or modifies case study and its baseline solution" .-> @gr3.TudyMaintenanceServiceCaseStudyMaintenance
  @gr3.TudyMaintenanceServiceCaseStudyMaintenance -. "generates embeddings from multimodal input (case study and its baseline solution)" .-> MultimodalEmbeddingsPipeline.Orchestrator
  @gr1.NatedExpert -. "[...]" .-> @gr2.TAdminUi
`;case"multimodalEmbeddingsPipelineContainer":return`---
title: "multimodalEmbeddingsPipeline"
---
graph TB
  MultimodalEmbeddingsPipelineOrchestrator[orchestrator]
  subgraph @gr1["Text processing"]
    @gr1.ModalEmbeddingsPipelineTextExtractor[textExtractor]
    @gr1.ModalEmbeddingsPipelineTextPreprocessor[textPreprocessor]
    @gr1.ModalEmbeddingsPipelineTextTokenizer[textTokenizer]
    @gr1.ModalEmbeddingsPipelineTextEmbeddingsGenerator[textEmbeddingsGenerator]
  end
  subgraph @gr2["Images processing"]
    @gr2.ModalEmbeddingsPipelineImagesExtractor[imagesExtractor]
    @gr2.ModalEmbeddingsPipelineImagePreprocessor[imagePreprocessor]
    @gr2.ModalEmbeddingsPipelineImageEmbeddingsGenerator[imageEmbeddingsGenerator]
  end
  subgraph @gr3["Persistent Storage"]
    @gr3.ModalEmbeddingsPipelineEmbeddingsStore[(embeddingsStore)]
  end
  MultimodalEmbeddingsPipelineOrchestrator -. "extracts text from binary input files (PDF)" .-> @gr1.ModalEmbeddingsPipelineTextExtractor
  @gr1.ModalEmbeddingsPipelineTextExtractor -. "preprocesses text input (aptitude test short questions and answers, case study)" .-> @gr1.ModalEmbeddingsPipelineTextPreprocessor
  @gr1.ModalEmbeddingsPipelineTextPreprocessor -. "tokenizes aptitude test short questions answers" .-> @gr1.ModalEmbeddingsPipelineTextTokenizer
  @gr1.ModalEmbeddingsPipelineTextTokenizer -. "generates embeddings from tokenized short questions answers" .-> @gr1.ModalEmbeddingsPipelineTextEmbeddingsGenerator
  MultimodalEmbeddingsPipelineOrchestrator -. "extracts images from binary input files (PDF)" .-> @gr2.ModalEmbeddingsPipelineImagesExtractor
  @gr2.ModalEmbeddingsPipelineImagesExtractor -. "preprocesses image input (case study)" .-> @gr2.ModalEmbeddingsPipelineImagePreprocessor
  @gr2.ModalEmbeddingsPipelineImagePreprocessor -. "generates embeddings from preprocessed images" .-> @gr2.ModalEmbeddingsPipelineImageEmbeddingsGenerator
  @gr1.ModalEmbeddingsPipelineTextEmbeddingsGenerator -. "stores embeddings of valid short questions answers" .-> @gr3.ModalEmbeddingsPipelineEmbeddingsStore
  @gr2.ModalEmbeddingsPipelineImageEmbeddingsGenerator -. "stores embeddings of valid short questions answers" .-> @gr3.ModalEmbeddingsPipelineEmbeddingsStore
`;default:throw new Error("Unknown viewId: "+e)}}export{t as d2Source,n as dotSource,a as mmdSource,i as svgSource};
