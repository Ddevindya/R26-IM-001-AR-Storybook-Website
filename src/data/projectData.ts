export const PROJECT_INFO = {
  id: "R26-IM-001",
  title: "Design and Evaluation of an Augmented Reality Storybook for Primary Learners' Plant Growth Understanding & Stewardship",
  shortTitle: "AR Plant Storybook",
  institution: "Sri Lanka Institute of Information Technology (SLIIT)",
  faculty: "Faculty of Computing",
  department: "Department of Interactive Media",
  location: "Malabe, Sri Lanka",
  academicYear: "2025/2026",
  status: "Active Undergraduate Research Project",
  
  heroHeadline: "Where Nature Meets Augmented Reality.",
  heroSubheadline: "Helping young primary learners explore plant growth and cultivate environmental stewardship through a tangible storybook, interactive augmented reality, and real-world contextual feedback.",
  
  targetAudience: {
    group: "Cambridge Primary Science Grade 1 Learners",
    ageRange: "6 years old (approx. 5–6 / 6–8 years)",
    setting: "Sri Lankan International Schools & Primary Classrooms",
    subjectDomain: "Plants & Living Things: What plants need to grow, dynamic plant responses to light and moisture, and environmental responsibility"
  },
  
  researchAreas: [
    "Augmented Reality (AR)",
    "Interactive Media",
    "Educational Technology (EdTech)",
    "Human–Computer Interaction (HCI)",
    "Environmental Education & Stewardship"
  ],
  
  curriculumAlignment: {
    framework: "Cambridge Primary Science (Stage 1)",
    strand: "Biology / Thinking and Working Scientifically",
    learningObjectives: [
      "Identify the basic parts of a flowering plant (roots, stem, leaves, flower).",
      "Recognize that plants need water, light, and warmth to grow healthily.",
      "Observe and record plant health changes over time.",
      "Develop positive stewardship attitudes and empathy for living organisms."
    ]
  },
  
  sdgImpact: [
    {
      goal: "SDG 4",
      title: "Quality Education",
      target: "Target 4.7",
      color: "#166534",
      bg: "#F0FDF4",
      description: "Enhancing primary scientific literacy through immersive, developmentally appropriate experiential learning that bridges physical printed books and digital augmented reality."
    },
    {
      goal: "SDG 13",
      title: "Climate Action",
      target: "Target 13.3",
      color: "#22A06B",
      bg: "#DCFCE7",
      description: "Cultivating early awareness of environmental conditions, human impact, and weather vulnerability through real-time IoT sensor feedback and consequence-driven narrative."
    },
    {
      goal: "SDG 15",
      title: "Life on Land",
      target: "Target 15.5",
      color: "#14532D",
      bg: "#F7FBF8",
      description: "Fostering habitual stewardship and empathy toward plant life and terrestrial ecosystems through longitudinal care tracking and plant emotional cues."
    }
  ],
  
  problemStatement: {
    coreChallenge: "How can primary learners studying the Cambridge Grade 1 Science module in Sri Lanka be better supported in understanding plant growth and environmental changes that are difficult to learn through traditional text-based teaching methods alone?",
    keyPainPoints: [
      {
        title: "Abstract Temporal Processes",
        desc: "Plant growth, transpiration, and moisture absorption happen gradually over days and weeks. Grade 1 children lack the temporal patience to correlate episodic watering with long-term survival from flat textbook diagrams."
      },
      {
        title: "Handheld AR 'Gorilla Arm' Fatigue",
        desc: "Children's developing musculoskeletal systems experience deltoid and shoulder fatigue during continuous handheld tablet holding, causing discomfort without automated rest cycles."
      },
      {
        title: "Cognitive Split-Attention & Motor Variability",
        desc: "Simultaneously tracking physical markers, managing small adult-sized UI buttons, and processing dense visuals overburdens young working memory."
      },
      {
        title: "Disconnection from Real-World Environments",
        desc: "Purely virtual simulation apps feel detached from the child's living classroom surroundings, missing physical sensory connections to real soil and light."
      }
    ]
  },
  
  proposedSolution: {
    concept: "A child-centered cyber-physical AR storybook ecosystem that couples a physical printed storybook with an ESP32 environmental IoT sensor station, an emotionally expressive 3D plant affective model, a branching stewardship narrative engine, and an ergonomic hybrid interaction framework.",
    howItWorksSteps: [
      {
        step: "01",
        title: "Open the Physical Storybook",
        subtitle: "Tangible Reading Experience",
        desc: "The child turns the pages of an illustrated storybook following 'Sprout's Journey'. Tangible paper pages provide a grounded, distraction-free foundation."
      },
      {
        step: "02",
        title: "Scan Page with Mobile Device",
        subtitle: "Instant Camera Tracking",
        desc: "Pointing the tablet or phone camera at the page instantly anchors an animated 3D plant garden directly on top of the physical paper."
      },
      {
        step: "03",
        title: "Explore & Interact with AR Elements",
        subtitle: "Child-Adaptive Controls",
        desc: "The learner interacts through enlarged touch buttons, guided prompts, and ambient sensor influences like classroom sunlight or flashlight interaction."
      },
      {
        step: "04",
        title: "Observe Responses & Learn Plant Care",
        subtitle: "Affective Feedback & Stewardship",
        desc: "The 3D plant perks up, blooms, or droops based on care decisions, providing immediate emotional cues that teach responsible environmental stewardship."
      }
    ]
  }
};
