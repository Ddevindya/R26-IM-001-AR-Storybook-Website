import { ResearchComponent } from '../types';

export const RESEARCH_COMPONENTS: ResearchComponent[] = [
  {
    id: "component-01",
    number: "01",
    title: "Hybrid Interaction Framework",
    shortTitle: "Hybrid Interaction",
    researcher: "Wijayarathne K.N.",
    studentId: "IT22641410",
    role: "Lead HCI & Child-Centered Interaction Researcher",
    summary: "Mitigates the 'Gorilla Arm Effect', fine-motor touch inaccuracies, and split-attention cognitive load in Grade 1 learners through adaptive UI zones, physical page anchoring, and timed AR-to-2D modality transitions.",
    problem: "Grade 1 motor constraints lead to rapid physical fatigue (the 'Gorilla Arm Effect') and touch inaccuracy during continuous handheld AR tracking. Young children tire after holding tablets upright, and split-attention between book and screen increases extraneous mental workload.",
    objectives: [
      "Mitigate musculoskeletal fatigue through automated 45-second AR-to-2D resting cycles.",
      "Implement child-friendly adaptive UI touch zones with dynamic button resizing and grip localization.",
      "Deploy physical book page anchoring and occlusion handling to ensure 3D overlays remain locked even when little hands cover pages.",
      "Minimize cognitive split-attention by using sequential guided digital signposts."
    ],
    technicalApproach: [
      "Custom ErgonomicTimer.cs tracking continuous device pitch and elevation duration, switching to stable 2D mode after short bursts.",
      "Child-adaptive dynamic button resizing responding to touch variability and device shake (minimum 64pt targets).",
      "Kalman filter stabilization for image target tracking, compensating for physical book curvature and hand occlusion.",
      "Cognitive workload validation utilizing simplified emoji-based Borg RPE scales and facilitator-assisted observation."
    ],
    keyFeatures: [
      "Automated Ergonomic Interventions (Seamless 45-second AR-to-2D resting modality transition)",
      "Adaptive UI Touch Zones (Dynamic button enlargement to 64px with tactile visual ripples)",
      "Stable Physical Page Anchoring & Occlusion Tolerance",
      "Split-Attention Reduction via Sequential Guided Prompts",
      "Objective Fatigue Tracking (Borg RPE scale & Arm Drop Count metrics)"
    ],
    architectureNodes: [
      "ErgonomicTimer.cs",
      "InteractionManager.cs",
      "ModalTransitionController.cs",
      "TouchTargetScaler.cs"
    ],
    integrationPoints: [
      "Coordinates with Component 03 (Narrative Engine) to trigger story rest pauses during ergonomic breaks.",
      "Signals Component 02 (Affective Visualization) to adjust 3D plant viewing angle during 2D desk-resting mode.",
      "Supplies telemetry status indicators from Component 04 (IoT Simulation) for non-intrusive UI toasts."
    ],
    researchContribution: "A novel child-centered hybrid interaction architecture that reduces physical muscle fatigue and cognitive overload in handheld AR learning for primary school children.",
    metricsOrFocus: "Ergonomics, Motor Accessibility & Split-Attention Reduction",
    color: {
      primary: "#166534",
      light: "#DCFCE7",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      border: "border-emerald-200"
    }
  },
  {
    id: "component-02",
    number: "02",
    title: "Affective Visualization Model",
    shortTitle: "Affective Visualization",
    researcher: "Palliyaguruge S.N.",
    studentId: "IT22179258",
    role: "Lead 3D Visualization & Affective Feedback Researcher",
    summary: "Translates abstract botanical health conditions into emotionally readable, anthropomorphic 3D plant gestures, procedural vertex shaders, glow effects, and supportive audio cues for 6-year-old learners.",
    problem: "Understanding plant growth and environmental stress is difficult for 6-year-olds when limited to static diagrams. Most AR plant tools only display rigid anatomy rather than helping children emotionally interpret dynamic biological states like health, stress, and recovery.",
    objectives: [
      "Design AR-optimized stylized 3D plant models across multiple developmental growth stages.",
      "Create dynamic shader animations representing plant hydration (vibrant green, dull yellow, visibly wilted posture).",
      "Implement motion and environmental responsiveness (leaves gently turning toward sunlight).",
      "Incorporate supportive audio cues and glow particle bursts to communicate health, stress, and recovery."
    ],
    technicalApproach: [
      "PlantHealthState.cs finite state machine mapping biological plant states to emotional visual and audio cues.",
      "Custom vertex displacement shader simulating turgor pressure loss and stem wilting without heavy skeletal overhead.",
      "Visual Cue Mapping Engine processing interpreted plant condition to trigger color transitions, glows, and audio.",
      "Optimized polygon meshes maintaining stable 60 FPS mobile rendering on standard ARCore/ARKit devices."
    ],
    keyFeatures: [
      "Emotionally Readable Plant States (Healthy vibrant turgor, stressed dull wilt, gradual recovery lift)",
      "Phototropism Simulation (Leaves gently orienting toward detected light sources)",
      "Multi-Sensory Feedback (Glow cues, sparkle bursts, and supportive audio chimes)",
      "Four Growth Stage Visualizations (Seed, seedling, growing plant, blooming mature plant)",
      "Cause-and-Effect Clarity (Immediate visual response to child care actions)"
    ],
    architectureNodes: [
      "PlantHealthState.cs",
      "VisualCueMappingEngine.cs",
      "PlantShaderController.cs",
      "AffectiveAudioCueController.cs"
    ],
    integrationPoints: [
      "Consumes interpreted moisture and light metrics from Component 04 (IoT Simulation) to update physiological state.",
      "Reports emotional health shifts to Component 03 (Narrative Engine) to drive character dialogue reactions.",
      "Responds to placement and interaction events provided by Component 01 (Hybrid Interaction Framework)."
    ],
    researchContribution: "A state-based affective botanical visualization paradigm that translates complex physiological plant states into intuitive, empathetic visual feedback for early primary education.",
    metricsOrFocus: "Affective Resonance, Turgor Shaders & Emotional Readability",
    color: {
      primary: "#22A06B",
      light: "#DCFCE7",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      border: "border-emerald-200"
    }
  },
  {
    id: "component-03",
    number: "03",
    title: "Gamified Narrative Engine",
    shortTitle: "Gamified Narrative",
    researcher: "Amarawardhane A.S.",
    studentId: "IT22237804",
    role: "Lead Narrative Architecture & Gamification Researcher",
    summary: "Drives non-linear, consequence-based story branching, longitudinal time-delta persistence, and redemption recovery mechanics that foster genuine environmental stewardship and accountability.",
    problem: "Traditional educational games rely on shallow point/badge gamification (PBL) that fails to internalize sustainable care attitudes. Furthermore, episodic AR sessions lack the longitudinal persistence required to reflect the continuous nature of biological life cycles.",
    objectives: [
      "Architect a rule-based intelligent story branching engine where progress depends on caring for the plant, not collecting points.",
      "Implement time-delta narrative persistence so the virtual plant evolves across inactive periods between sessions.",
      "Design redemption-oriented recovery mechanics allowing learners to actively correct mistakes through later care actions.",
      "Reinforce Cambridge Primary Science Stage 1 vocabulary through synchronized spoken audio dialogues."
    ],
    technicalApproach: [
      "StoryBranchController.cs managing dynamic script nodes and rule-based decision logic based on plant condition and prior choices.",
      "Time-delta persistence module calculating elapsed real-world time to simulate plant growth, decay, or recovery across sessions.",
      "Redemption and restoration mechanics: neglect triggers a 'Rescue Quest' rather than a punitive game-over screen.",
      "Non-point intrinsic gamification model grounded in Self-Determination Theory (SDT) to cultivate empathy."
    ],
    keyFeatures: [
      "Stewardship-Based Narrative Progression (Story advancement tied directly to biological care)",
      "Consequence-Driven Story Branching with Non-Linear Pathways",
      "Longitudinal Time-Delta Persistence (Virtual plant evolves across days and sessions)",
      "Redemption & Recovery Quests (Teaches that mistakes can be remedied with attentive care)",
      "Age-Appropriate Spoken Audio Dialogues with Cambridge Stage 1 Vocabulary"
    ],
    architectureNodes: [
      "StoryBranchController.cs",
      "TimeDeltaPersistenceModule.cs",
      "DialogueRuleEngine.cs",
      "RedemptionManager.cs"
    ],
    integrationPoints: [
      "Queries Component 02 (Affective Visualization) for current plant emotional state before selecting dialogue trees.",
      "Receives physical environmental triggers from Component 04 (IoT Simulation) to comment on real classroom lighting and moisture.",
      "Listens to Component 01 (Hybrid Interaction) to pause narration smoothly during ergonomic rest cycles."
    ],
    researchContribution: "A persistent, redemption-oriented pedagogical narrative model that bridges intrinsic gamification, moral agency, and environmental stewardship in early childhood.",
    metricsOrFocus: "Stewardship Empathy, Time-Delta Persistence & Narrative Agency",
    color: {
      primary: "#166534",
      light: "#DCFCE7",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      border: "border-emerald-200"
    }
  },
  {
    id: "component-04",
    number: "04",
    title: "Context-Aware Simulation Engine",
    shortTitle: "Context-Aware Simulation",
    researcher: "Dissanayaka D.M.D.D.",
    studentId: "IT22626974",
    role: "Lead Embedded IoT & Environmental Systems Researcher",
    summary: "Integrates real-world ambient conditions into digital AR plant simulation using an ESP32 microcontroller sensing node, real-time Firebase cloud synchronization, and flashlight-assisted photosynthesis.",
    problem: "Conventional AR educational apps use environmental sensors only for visual tracking, leaving virtual organisms detached from the real physical world. As a result, digital plants fail to respond dynamically to real classroom sunlight, temperature, and soil conditions.",
    objectives: [
      "Develop a custom ESP32 IoT environmental monitoring node integrating LDR, DHT22 (temp/humidity), and capacitive soil moisture sensors.",
      "Engineer a low-latency real-time synchronization pipeline between the ESP32 node, Firebase Realtime Database, and Unity AR.",
      "Implement flashlight-assisted artificial sunlight simulation allowing PWM LED light to influence virtual photosynthesis.",
      "Map mobile gyroscope/accelerometer physical movement to structural wind forces on the virtual plant."
    ],
    technicalApproach: [
      "ESP32-S3 microcontroller running FreeRTOS with ADC sensor calibration streaming JSON payloads over Wi-Fi.",
      "Google Firebase Realtime Database providing low-latency (<150ms) event-driven cloud data sync.",
      "Unity C# FirebaseIoTManager.cs client module constantly listening to cloud node changes.",
      "Mathematical photosynthesis model dynamically calculating light intensity and distance from the mobile flashlight."
    ],
    keyFeatures: [
      "Custom ESP32-S3 Cyber-Physical Sensing Station",
      "Multi-Sensor Ingestion (Capacitive soil moisture, LDR lux, DHT22 temp & humidity)",
      "Low-Latency Firebase Realtime Database Cloud Sync (<150ms)",
      "Flashlight-Based Artificial Photosynthesis Simulation (PWM LED Growth Lamp effect)",
      "Device Movement-to-Wind Simulation (Accelerometer/gyroscope wind forces)"
    ],
    architectureNodes: [
      "FirebaseIoTManager.cs",
      "EnvironmentalDataParser.cs",
      "PhotosynthesisModel.cs",
      "ESP32FirmwareMain"
    ],
    integrationPoints: [
      "Provides real-time moisture & light telemetry to Component 02 (Affective Model) to calculate physiological health.",
      "Triggers narrative context events in Component 03 (Narrative Engine) when physical sensor thresholds change.",
      "Supplies telemetry status indicators to Component 01 (Interaction Framework) for non-intrusive UI toasts."
    ],
    researchContribution: "A contextual cyber-physical bridge that links tangible classroom environmental science with real-time augmented reality biological simulation.",
    metricsOrFocus: "IoT Micro-Climate Sensing, Cyber-Physical Sync & Photosynthesis Logic",
    color: {
      primary: "#22A06B",
      light: "#DCFCE7",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      border: "border-emerald-200"
    }
  }
];
