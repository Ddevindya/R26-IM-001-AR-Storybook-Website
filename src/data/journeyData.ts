import { ResearchMilestone } from '../types';

export const RESEARCH_MILESTONES: ResearchMilestone[] = [
  {
    id: "m1-formulation",
    phase: "Phase 01",
    title: "Topic Assessment & Research Problem Formulation",
    dateRange: "June 2025",
    status: "Completed",
    description: "Conducted initial exploratory studies on Cambridge Primary Science curricula in Sri Lankan international schools. Identified key pedagogical gaps in abstract plant growth comprehension and physical fatigue limitations of handheld AR for 5–6-year-old learners.",
    deliverables: [
      "Topic Assessment Form (TAF) formally submitted and approved by Faculty of Computing Panel.",
      "Preliminary problem statement and research scope definition.",
      "Identification of 4 individual research components and research team allocation."
    ],
    highlights: [
      "Secured formal research project code: R26-IM-001",
      "Confirmed academic supervision under Mr. Aruna Ishara Gamage and Mr. Nushkan Nizmi"
    ]
  },
  {
    id: "m2-proposal",
    phase: "Phase 02",
    title: "Project Charter & Research Proposal Defense",
    dateRange: "August 2025",
    status: "Completed",
    description: "Prepared and defended the comprehensive Research Proposal document before the SLIIT Academic Review Board. Established concrete technical methodologies, experimental evaluation matrices, and ethical protocols for young children.",
    deliverables: [
      "Comprehensive Research Proposal document (R26-IM-001_Proposal.pdf).",
      "Low-Level Integrated Component Architecture Diagram definition.",
      "Evaluation methodology with Cambridge Primary Grade 1 learning objectives."
    ],
    highlights: [
      "Proposal successfully defended and approved with commendation for multi-disciplinary approach.",
      "Finalized hardware specifications (ESP32-S3, capacitive VWC probe, LDR sensor)."
    ]
  },
  {
    id: "m3-literature",
    phase: "Phase 03",
    title: "Comprehensive Literature Review & Design System",
    dateRange: "October – November 2025",
    status: "Completed",
    description: "Extensive systematic review of 48+ peer-reviewed HCI, AR education, and early childhood ergonomics publications. Synthesized guidelines for child-adaptive touch targets, affective botanical cues, and narrative agency.",
    deliverables: [
      "Literature Review Synthesis Chapter covering child HCI and handheld AR ergonomics.",
      "Design System specification for 'Sprout's Journey' physical storybook and UI tokens.",
      "Color palette, typography, and low-poly 3D plant art style guide."
    ],
    highlights: [
      "Established 3-minute ergonomic threshold for continuous handheld AR elevation in 5–6-year-olds.",
      "Drafted 4 affective plant physiological stages: Thriving, Thirsty, Sun-Starved, and Wilted."
    ]
  },
  {
    id: "m4-prototyping",
    phase: "Phase 04",
    title: "Component Implementation & Prototype Development",
    dateRange: "December 2025 – February 2026",
    status: "In Progress",
    description: "Parallel technical engineering of the four core research components: building the ESP32 IoT environmental station, developing Unity C# scripts, authoring shaders, crafting non-linear narrative branches, and coding ergonomic timers.",
    deliverables: [
      "ESP32-S3 firmware with calibrated soil moisture & light telemetry streaming to Firebase.",
      "Affective 3D plant model with custom vertex displacement turgor shader.",
      "Rule-based StoryBranchController.cs and StewardshipTracker.cs modules.",
      "ErgonomicTimer.cs and child-adaptive TouchTargetScaler.cs."
    ],
    highlights: [
      "Achieved stable 60 FPS rendering on target mobile hardware.",
      "Validated cloud telemetry latency under 150ms over standard school Wi-Fi."
    ]
  },
  {
    id: "m5-integration",
    phase: "Phase 05",
    title: "System Integration & Cross-Component Wiring",
    dateRange: "March – April 2026",
    status: "In Progress",
    description: "Unifying all four modules into a cohesive AR storybook prototype. Validating event bus dispatching, ensuring physical page tracking stability, and verifying automated AR-to-2D modality transitions.",
    deliverables: [
      "Integrated Unity build running on iOS and Android test devices.",
      "Physical printed prototype of 'Sprout's Journey' storybook pages with tracking markers.",
      "Cross-component communication verification test suite."
    ],
    highlights: [
      "Preserved exact component boundaries as designed in the architecture specification.",
      "Introduced simulated fallback sliders for testing without live IoT hardware."
    ]
  },
  {
    id: "m6-evaluation",
    phase: "Phase 06",
    title: "User Evaluation & Field Trials with Grade 1 Learners",
    dateRange: "May – June 2026",
    status: "Upcoming",
    description: "Conducting controlled classroom evaluation studies with Grade 1 primary learners (ages 5–6) in Sri Lankan international schools, comparing the integrated AR storybook against conventional textbook learning.",
    deliverables: [
      "Pre-test and post-test science comprehension score analysis (Cambridge Stage 1 objectives).",
      "Ergonomic assessment measuring physical fatigue and posture comfort.",
      "Stewardship empathy observation logs and teacher interview transcripts."
    ],
    highlights: [
      "Formal institutional ethics clearance and parental informed consent protocol.",
      "Target sample size: 40–50 Grade 1 primary learners across control and experimental groups."
    ]
  },
  {
    id: "m7-thesis",
    phase: "Phase 07",
    title: "Final Thesis Documentation, Defense & Publication",
    dateRange: "July – August 2026",
    status: "Upcoming",
    description: "Final dissertation compilation, peer-reviewed academic manuscript submission to leading EdTech / HCI conferences, and final oral defense before the SLIIT Board of Examiners.",
    deliverables: [
      "Final Research Thesis Dissertation (Faculty of Computing, SLIIT).",
      "Manuscript submission to IEEE / ACM international conferences on Human-Computer Interaction & Learning Technologies.",
      "Public project showcase and demonstration for academic and industry stakeholders."
    ],
    highlights: [
      "Culmination of 4th year research journey.",
      "Preparation of open research assets and future educational commercialization roadmap."
    ]
  }
];
