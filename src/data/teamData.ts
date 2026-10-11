import { TeamMember } from '../types';

export const RESEARCHERS: TeamMember[] = [
  {
    id: "wijayarathne-kn",
    name: "Wijayarathne K.N.",
    preferredName: "Kavisha Wijayarathne",
    studentId: "IT22641410",
    role: "Lead HCI & Child-Centered Interaction Researcher",
    componentTitle: "Hybrid Interaction Framework",
    componentNumber: "Component 01",
    department: "Department of Interactive Media, Faculty of Computing",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    bio: "Specializing in child-computer interaction, musculoskeletal fatigue mitigation, and adaptive mobile AR modalities for young primary learners.",
    contributions: [
      "Engineered ErgonomicTimer.cs to detect sustained handheld tablet elevation and prevent Gorilla Arm fatigue.",
      "Formulated child-calibrated touch zones with dynamic button resizing and grip adaptive positioning.",
      "Devised seamless AR-to-2D modality transitions for desk-based resting reading intervals (45-second rest cycle).",
      "Implemented Kalman filter anchor stabilization for physical storybook pages under hand occlusion."
    ],
    email: "it22641410@my.sliit.lk",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    image: "/images/team/wijayarathne.jpg",
    isSupervisor: false
  },
  {
    id: "palliyaguruge-sn",
    name: "Palliyaguruge S.N.",
    preferredName: "Senuri Palliyaguruge",
    studentId: "IT22179258",
    role: "Lead 3D Visualization & Affective Feedback Researcher",
    componentTitle: "Affective Visualization Model",
    componentNumber: "Component 02",
    department: "Department of Interactive Media, Faculty of Computing",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    bio: "Focusing on real-time botanical 3D modeling, affective shader animation, and multi-sensory feedback systems for early science education.",
    contributions: [
      "Created low-drawcall AR-optimized stylized 3D plant models maintaining 60 FPS on mobile devices.",
      "Authored custom vertex displacement shaders simulating botanical turgor loss, leaf drooping, and stem recovery.",
      "Constructed PlantHealthState.cs finite state machine mapping biological health to emotional visual and audio cues.",
      "Developed responsive particle sparkle cues and non-verbal affective audio reactions for children."
    ],
    email: "it22179258@my.sliit.lk",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    image: "/images/team/palliyaguruge.jpg",
    isSupervisor: false
  },
  {
    id: "amarawardhane-as",
    name: "Amarawardhane A.S.",
    preferredName: "Ayesha Amarawardhane",
    studentId: "IT22237804",
    role: "Lead Narrative Architecture & Gamification Researcher",
    componentTitle: "Gamified Narrative Engine",
    componentNumber: "Component 03",
    department: "Department of Interactive Media, Faculty of Computing",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    bio: "Investigating pedagogical interactive storytelling, environmental stewardship mechanics, and moral responsibility agency in early childhood.",
    contributions: [
      "Architected StoryBranchController.cs supporting consequence-based, non-linear story branching.",
      "Built time-delta persistence algorithms reflecting continuous plant care and biological evolution across sessions.",
      "Designed redemption-oriented recovery mechanics allowing learners to nurse neglected plants back to health.",
      "Structured child-friendly rule-based dialogue reinforcing Cambridge Primary Science Stage 1 vocabulary."
    ],
    email: "it22237804@my.sliit.lk",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    image: "/images/team/amarawardhane.jpg",
    isSupervisor: false
  },
  {
    id: "dissanayaka-dmdd",
    name: "Dissanayaka D.M.D.D.",
    preferredName: "Dulakshi Dissanayake",
    studentId: "IT22626974",
    role: "Lead Embedded IoT & Environmental Systems Researcher",
    componentTitle: "Context-Aware Simulation Engine",
    componentNumber: "Component 04",
    department: "Department of Interactive Media, Faculty of Computing",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    bio: "Focusing on cyber-physical educational systems, embedded microcontroller telemetry, and cloud-synchronized real-time botanical simulation.",
    contributions: [
      "Fabricated compact ESP32-S3 IoT station integrating capacitive soil moisture, DHT22, and LDR light sensing.",
      "Established low-latency cloud synchronization pipeline via Google Firebase Realtime Database.",
      "Implemented flashlight-assisted artificial sunlight (PWM LED) and gyroscope-based wind simulation.",
      "Calibrated physical soil volumetric water content curves to biological plant vitality scales in Unity."
    ],
    email: "it22626974@my.sliit.lk",
    linkedin: "https://linkedin.com/in/",
    github: "https://github.com/",
    image: "/images/team/dissanayake.jpg",
    isSupervisor: false
  }
];

export const SUPERVISORS: TeamMember[] = [
  {
    id: "mr-aruna-ishara-gamage",
    name: "Mr. Aruna Ishara Gamage",
    role: "Academic Supervisor",
    department: "Department of Computer Science & Software Engineering / Interactive Media",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    bio: "Senior Lecturer at SLIIT with deep expertise in Interactive Media, Human–Computer Interaction, Virtual & Augmented Reality, and Educational Game Technologies. Providing principal academic direction, methodology guidance, and research governance.",
    contributions: [
      "Principal research supervisor providing strategic research direction and architectural governance.",
      "Guidance on child-centered experimental design, ethical protocols, and evaluation methodologies.",
      "Review and validation of academic contributions for publication and defense."
    ],
    email: "aruna.g@sliit.lk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/supervisor-aruna.svg",
    isSupervisor: true
  },
  {
    id: "mr-nushkan-nizmi",
    name: "Mr. Nushkan Nizmi",
    role: "Academic Co-Supervisor",
    department: "Department of Computer Science & Software Engineering / Interactive Media",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    bio: "Lecturer at SLIIT specializing in Interactive Systems, Game Development, Real-time Graphics, and Immersive Technologies. Providing technical mentorship on AR Foundation implementation, IoT integration, and user evaluation.",
    contributions: [
      "Technical co-supervisor guiding Unity AR Foundation pipeline, shader performance, and IoT integration.",
      "Advising on HCI evaluation frameworks with primary school participants in Sri Lankan international schools.",
      "Assistance in software engineering quality assurance and technical paper writing."
    ],
    email: "nushkan.n@sliit.lk",
    linkedin: "https://linkedin.com/in/",
    image: "/images/team/supervisor-nushkan.svg",
    isSupervisor: true
  }
];
