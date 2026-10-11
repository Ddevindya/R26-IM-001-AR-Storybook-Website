import { PresentationRecord } from '../types';

export const RESEARCH_PRESENTATIONS: PresentationRecord[] = [
  {
    id: "presentation-pp",
    code: "PP",
    title: "Project Proposal Defense Presentation",
    subtitle: "Formal Research Formulation & Problem Scope Defense",
    date: "March 2026",
    status: "Completed & Defended",
    format: "PowerPoint",
    description: "Initial research defense presented before the SLIIT Academic Review Board, defining the 4 core components, curriculum alignment for Cambridge Stage 1, and the Design Science Research methodology.",
    coverImage: "/images/presentations/cover-pp.png",
    downloadUrl: "/presentations/R26-IM-001_Proposal_Presentation.pptx",
    fileSize: "4.8 MB",
    isAvailable: false, // File to be added by user to public/presentations/
    presenters: [
      "Wijayarathne K.N. (IT22641410)",
      "Palliyaguruge S.N. (IT22179258)",
      "Amarawardhane A.S. (IT22237804)",
      "Dissanayaka D.M.D.D. (IT22626974)"
    ]
  },
  {
    id: "presentation-pp1",
    code: "PP1",
    title: "Progress Presentation 1 (Core Prototype Review)",
    subtitle: "First-Stage Implementation & Module Architecture Check",
    date: "May 2026",
    status: "Completed & Reviewed",
    format: "PowerPoint",
    description: "Detailed progress review addressing examiner feedback: clarifying cognitive workload logic, separating AVM 3D visual rendering from HIF interaction tracking, and demonstrating early IoT sensor data streaming.",
    coverImage: "/images/presentations/cover-pp1.png",
    downloadUrl: "/presentations/R26-IM-001_Progress_Presentation_1.pptx",
    fileSize: "6.2 MB",
    isAvailable: false, // File to be added by user
    presenters: [
      "Wijayarathne K.N. (IT22641410)",
      "Palliyaguruge S.N. (IT22179258)",
      "Amarawardhane A.S. (IT22237804)",
      "Dissanayaka D.M.D.D. (IT22626974)"
    ]
  },
  {
    id: "presentation-pp2",
    code: "PP2",
    title: "Progress Presentation 2 (System Integration & Trial Readiness)",
    subtitle: "Cross-Component Pipeline & Pre-Evaluation Verification",
    date: "August 2026",
    status: "Scheduled for Review",
    format: "PowerPoint",
    description: "Comprehensive demonstration of the integrated handheld AR storybook prototype running on mobile hardware, validating sensor synchronization, ergonomic rest cycles, and narrative branching.",
    coverImage: "/images/presentations/cover-pp2.png",
    downloadUrl: "/presentations/R26-IM-001_Progress_Presentation_2.pptx",
    fileSize: "7.5 MB",
    isAvailable: false, // File to be added by user
    presenters: [
      "Wijayarathne K.N. (IT22641410)",
      "Palliyaguruge S.N. (IT22179258)",
      "Amarawardhane A.S. (IT22237804)",
      "Dissanayaka D.M.D.D. (IT22626974)"
    ]
  }
];
