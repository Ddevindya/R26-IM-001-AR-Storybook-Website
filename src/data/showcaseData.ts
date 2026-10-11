import { ShowcaseItem } from '../types';

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "showcase-ar-book",
    title: "Physical Storybook Augmented Holographic Anchor",
    category: "AR Storybook Experience",
    description: "Camera feed detects the illustrated page 'Sprout Finds Soil' and anchors a 3D animated garden directly on top of the printed page using image target recognition.",
    keyAspects: [
      "Sub-pixel marker stabilization to prevent jitter when children hold the book",
      "Dynamic shadow casting onto the paper plane for realistic spatial presence",
      "Tactile reading combined with 360-degree holographic inspection"
    ],
    imagePlaceholder: {
      badge: "AR Tracking",
      accentColor: "#7966E8",
      icon: "BookOpen",
      caption: "Augmented Reality tracking anchoring a living seedling directly onto page 4 of the physical storybook."
    },
    demoDetails: "Demonstrates how young learners interact with the physical printed book while viewing real-time 3D plant models superimposed on the page."
  },
  {
    id: "showcase-3d-affective",
    title: "Affective Plant Health & Emotional Shading",
    category: "3D Plant Visualization",
    description: "The 3D plant responds to simulated and real sensor variables: vibrant green leaves when hydrated, drooping posture and dull tones when thirsty, and joyful blooming upon recovery.",
    keyAspects: [
      "Custom vertex displacement shader for real-time biological turgor pressure",
      "Child-friendly anthropomorphic cues (cheerful bounce vs. sad droop)",
      "Optimized polygon count (<12,000 vertices) maintaining 60 FPS on mobile"
    ],
    imagePlaceholder: {
      badge: "3D Shader & Mesh",
      accentColor: "#54B987",
      icon: "Sparkles",
      caption: "Real-time shader comparison showing healthy vibrant turgor versus water-stressed drooping posture."
    },
    demoDetails: "Exhibits the custom shaders and state transitions implemented in PlantHealthState.cs."
  },
  {
    id: "showcase-narrative-branch",
    title: "Consequence-Driven Story Branching & Rescue Quest",
    category: "Interactive Storytelling",
    description: "The story adapts to the child's care actions. Neglecting water triggers a 'Rescue Quest' where the child can nurse the seedling back to health, reinforcing resilience.",
    keyAspects: [
      "Cambridge Stage 1 science terminology integrated into spoken audio narration",
      "Stewardship quotient calculation logging empathy and diligence",
      "Positive reinforcement with 'Master Gardener' digital badge unlock"
    ],
    imagePlaceholder: {
      badge: "Narrative Engine",
      accentColor: "#F59E0B",
      icon: "Compass",
      caption: "Visual branching node showing chapter path diversion based on soil moisture levels and child decisions."
    },
    demoDetails: "Illustrates how StoryBranchController.cs dynamically routes dialogues and awards stewardship badges."
  },
  {
    id: "showcase-iot-station",
    title: "ESP32-S3 Cyber-Physical Sensing Station",
    category: "Sensor-Based Simulation",
    description: "Hardware sensing unit with a capacitive soil moisture sensor and LDR light detector reading physical conditions in real potting soil and streaming to Firebase.",
    keyAspects: [
      "Corrosion-resistant capacitive probe for reliable volumetric moisture readings",
      "Calibrated lux curve to measure real classroom window sunlight",
      "Sub-150ms cloud latency to Unity mobile client via Firebase Realtime Database"
    ],
    imagePlaceholder: {
      badge: "IoT Hardware",
      accentColor: "#0284C7",
      icon: "Cpu",
      caption: "ESP32-S3 microcontroller station with analog capacitive moisture probe inserted into live potting soil."
    },
    demoDetails: "Shows the physical prototype station communicating wirelessly with the cloud and Unity app."
  },
  {
    id: "showcase-hybrid-fatigue",
    title: "Fatigue-Aware AR-to-2D Modality Transition",
    category: "Hybrid Interaction Features",
    description: "Ergonomic timer detects when a 5–6-year-old has held the tablet upright for 3 minutes. The system smoothly offers a resting 2D storybook mode to protect young muscles.",
    keyAspects: [
      "Non-intrusive character chime inviting the child to rest their arms",
      "Instant camera blend into flat 2D reading canvas on table surface",
      "Child-calibrated magnetic touch targets (64×64 pt) for emergent motor skills"
    ],
    imagePlaceholder: {
      badge: "Ergonomics / HCI",
      accentColor: "#7966E8",
      icon: "ShieldAlert",
      caption: "Visual comparison of 3D upright AR mode transitioning to flat 2D desk-resting storybook mode."
    },
    demoDetails: "Highlights how ErgonomicTimer.cs mitigates deltoid fatigue and preserves educational continuity."
  },
  {
    id: "showcase-unity-hud",
    title: "Child-Adaptive Touch HUD & Visual Feedback",
    category: "Hybrid Interaction Features",
    description: "Simplified interface design specifically tailored for emergent motor control, featuring large pictorial buttons and zero confusing text menus.",
    keyAspects: [
      "Pictorial watering can, sunlight loupe, and story bookmark icons",
      "Audio confirmations replacing dense textual instruction",
      "Visual ripple effects providing unmistakable tactile touch feedback"
    ],
    imagePlaceholder: {
      badge: "Mobile UI / HUD",
      accentColor: "#54B987",
      icon: "Smartphone",
      caption: "Child-centered mobile AR HUD with high-contrast, enlarged touch affordances."
    },
    demoDetails: "Demonstrates the user interface built according to early childhood HCI heuristics."
  }
];
