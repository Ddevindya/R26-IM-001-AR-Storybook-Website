import { PublicationDocument } from '../types';

export const RESEARCH_DOCUMENTS: PublicationDocument[] = [
  // SECTION A: SHARED RESEARCH DOCUMENTS
  {
    id: "doc-shared-proposal",
    category: "shared",
    title: "Project Proposal Report: Augmented Reality Storybook for Primary Learners' Plant Growth Understanding & Stewardship",
    type: "Research Proposal",
    date: "March 2026",
    status: "Approved by SLIIT Faculty of Computing",
    description: "The primary collective academic proposal defining research motivation, problem domain, literature synthesis, four component scopes, methodology, and evaluation framework for Cambridge Primary Grade 1 learners.",
    authors: [
      "Wijayarathne K.N. (IT22641410)",
      "Palliyaguruge S.N. (IT22179258)",
      "Amarawardhane A.S. (IT22237804)",
      "Dissanayaka D.M.D.D. (IT22626974)"
    ],
    fileSize: "2.4 MB (PDF)",
    downloadUrl: "/documents/shared/R26-IM-001_Research_Proposal.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Comprehensive 50+ page collective proposal detailing the pedagogical foundation, Cambridge Primary Science Stage 1 alignment, HCI ergonomic problem formulation, and cross-component integration plan."
  },
  {
    id: "doc-shared-taf",
    category: "shared",
    title: "Topic Assessment Form (TAF) — Project Code R26-IM-001",
    type: "Topic Assessment Form",
    date: "June 2025",
    status: "Formally Approved",
    description: "Official institutional evaluation document submitted to the SLIIT Academic Board establishing research feasibility, individual component allocations, and formal supervisor appointments.",
    authors: [
      "Wijayarathne K.N.",
      "Palliyaguruge S.N.",
      "Amarawardhane A.S.",
      "Dissanayaka D.M.D.D."
    ],
    fileSize: "850 KB (PDF)",
    downloadUrl: "/documents/shared/R26-IM-001_Topic_Assessment_Form.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Official approval record establishing project identifier R26-IM-001 under the supervision of Mr. Aruna Ishara Gamage and Mr. Nushkan Nizmi."
  },
  {
    id: "doc-shared-arch",
    category: "shared",
    title: "Low-Level Integrated Component Architecture Specification",
    type: "Architecture Specification",
    date: "November 2025",
    status: "Technical Specification Document",
    description: "Comprehensive system design documentation mapping the Environmental Input Layer, Plant State Layer, Narrative Layer, and Hybrid Interaction Layer with C# class interfaces and IoT telemetry protocols.",
    authors: [
      "Dissanayaka D.M.D.D.",
      "Wijayarathne K.N.",
      "Palliyaguruge S.N.",
      "Amarawardhane A.S."
    ],
    fileSize: "1.8 MB (PDF)",
    downloadUrl: "/documents/shared/R26-IM-001_Architecture_Specification.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Technical architecture blueprint covering FirebaseIoTManager.cs, PlantHealthState.cs, StewardshipTracker.cs, and ErgonomicTimer.cs dataflow contracts."
  },
  {
    id: "doc-shared-poster",
    category: "shared",
    title: "Academic Research Showcase Poster (2026 Exhibition)",
    type: "Exhibition Poster",
    date: "March 2026",
    status: "Exhibition Ready",
    description: "Visual research exhibition poster summarizing core educational challenges, cyber-physical IoT architecture, child-adaptive ergonomics, and preliminary prototype demonstration captures.",
    authors: [
      "Research Team R26-IM-001"
    ],
    fileSize: "4.2 MB (PDF)",
    downloadUrl: "/documents/shared/R26-IM-001_Research_Poster.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Large-format research poster highlighting the transition from physical book pages to interactive 3D garden environments, designed for academic evaluation."
  },
  {
    id: "doc-shared-protocol",
    category: "shared",
    title: "Cambridge Primary Science Stage 1 Evaluation Protocol & Ethics Clearance",
    type: "Ethics & Evaluation Protocol",
    date: "February 2026",
    status: "Approved Protocol",
    description: "Methodological blueprint for evaluating science comprehension gains, musculoskeletal fatigue levels, and environmental stewardship empathy with 5–6-year-old participants.",
    authors: [
      "Wijayarathne K.N.",
      "Amarawardhane A.S."
    ],
    fileSize: "1.1 MB (PDF)",
    downloadUrl: "/documents/shared/R26-IM-001_Evaluation_Protocol.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Standardized testing procedures containing child-friendly pictorial questionnaires, observation checklists, and informed parental consent protocols."
  },

  // SECTION B: INDIVIDUAL RESEARCH DOCUMENTS
  {
    id: "doc-indiv-c1",
    category: "individual",
    componentNumber: "C1",
    authorMember: "Wijayarathne K.N.",
    studentId: "IT22641410",
    title: "Individual Proposal & Research Report: Hybrid Interaction Framework for an AR Storybook",
    type: "Individual Proposal Report",
    date: "March 2026",
    status: "Approved by Supervision",
    description: "Focuses on child-centered motor constraints, mitigating the 'Gorilla Arm Effect', 45-second ergonomic rest cycles, dynamic UI resizing, and occlusion handling for physical storybook interaction.",
    authors: ["Wijayarathne K.N. (IT22641410)"],
    fileSize: "1.9 MB (PDF)",
    downloadUrl: "/documents/individual/IT22641410_Wijayarathne_KN_Proposal.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Detailed individual thesis proposal on mitigating physical fatigue, Borg RPE scale emoji measurements, and adaptive touch bounding boxes for Grade 1 children."
  },
  {
    id: "doc-indiv-c2",
    category: "individual",
    componentNumber: "C2",
    authorMember: "Palliyaguruge S.N.",
    studentId: "IT22179258",
    title: "Individual Proposal & Research Report: Affective Visualization Model for AR Story Book",
    type: "Individual Proposal Report",
    date: "March 2026",
    status: "Approved by Supervision",
    description: "Focuses on state-based affective visualization, dynamic 3D plant assets for healthy, stressed, and recovering conditions, color transitions, glow effects, motion feedback, and supportive audio cues.",
    authors: ["Palliyaguruge S.N. (IT22179258)"],
    fileSize: "2.1 MB (PDF)",
    downloadUrl: "/documents/individual/IT22179258_Palliyaguruge_SN_Proposal.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Formal 56-page proposal submitted for B.Sc. (Hons) in IT Specialized in Interactive Media at SLIIT. Maps plant biological states to emotional cues."
  },
  {
    id: "doc-indiv-c3",
    category: "individual",
    componentNumber: "C3",
    authorMember: "Amarawardhane A.S.",
    studentId: "IT22237804",
    title: "Individual Proposal & Research Report: Gamified Narrative Engine for a Handheld AR Storybook",
    type: "Individual Proposal Report",
    date: "March 2026",
    status: "Approved by Supervision",
    description: "Focuses on stewardship-based narrative progression (caring over points), consequence-based non-linear branching, redemption and recovery mechanics, and time-delta persistence across sessions.",
    authors: ["Amarawardhane A.S. (IT22237804)"],
    fileSize: "2.3 MB (PDF)",
    downloadUrl: "/documents/individual/IT22237804_Amarawardhane_AS_Proposal.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Formal 60-page proposal submitted for B.Sc. (Hons) in IT Specialized in Interactive Media at SLIIT. Analyzes rule-based narrative AI and prosocial behavior."
  },
  {
    id: "doc-indiv-c4",
    category: "individual",
    componentNumber: "C4",
    authorMember: "Dissanayaka D.M.D.D.",
    studentId: "IT22626974",
    title: "Research Scope Expansion Draft: Context-Aware Simulation Engine (IoT & Cyber-Physical System)",
    type: "Scope Expansion Report",
    date: "March 2026",
    status: "Approved by Supervision",
    description: "Scope expansion detailing the ESP32-based micro-climate monitoring node (DHT22, LDR, SI1145 UV index, capacitive soil moisture), Firebase cloud synchronization, and flashlight-assisted photosynthesis.",
    authors: ["Dissanayaka D.M.D.D. (IT22626974)"],
    fileSize: "1.4 MB (PDF)",
    downloadUrl: "/documents/individual/IT22626974_Dissanayaka_DMDD_Scope_Expansion.pdf",
    previewAvailable: true,
    isAvailable: true,
    contentSummary: "Technical architecture and dataflow blueprint specifying ESP32 sensor node firmware, Google Firebase Realtime Database JSON trees, and Unity C# SDK integration."
  }
];
