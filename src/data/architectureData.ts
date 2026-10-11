import { ArchitectureLayer } from '../types';

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: "layer-env",
    name: "Environmental Input Layer (IoT & Cyber-Physical)",
    color: "#0284C7",
    description: "Captures physical classroom environmental metrics (ambient sunlight and soil moisture) via an ESP32-S3 sensing unit and streams telemetry to the cloud.",
    components: [
      {
        name: "Capacitive Soil Moisture Sensor",
        subsystem: "Hardware Sensing",
        role: "Physical Measurement",
        details: "Analog capacitive probe measuring volumetric water content in real plant potting soil without electrode oxidation."
      },
      {
        name: "LDR Photoresistor Module",
        subsystem: "Hardware Sensing",
        role: "Ambient Light Acquisition",
        details: "Measures ambient classroom lux / sunlight levels to determine if the seedling receives sufficient photosynthetic energy."
      },
      {
        name: "ESP32-S3 Microcontroller Unit",
        subsystem: "Embedded Firmware",
        role: "Analog Conversion & Telemetry Streaming",
        details: "Processes analog ADC readings, applies noise filtering, and packages sensor telemetry into JSON packets over 2.4 GHz Wi-Fi."
      },
      {
        name: "Wi-Fi / HTTPS Protocol",
        subsystem: "Network Transport",
        role: "Secure Cloud Transport",
        details: "Low-overhead asynchronous HTTPS and REST streaming updating telemetry payloads every 2–5 seconds."
      },
      {
        name: "Firebase Realtime Database",
        subsystem: "Cloud Backend",
        role: "Centralized Telemetry Store & Sync",
        details: "NoSQL cloud database maintaining live node data (lightLevel, soilMoisture, timestamp, batteryStatus) accessible by the mobile Unity client."
      }
    ]
  },
  {
    id: "layer-plant",
    name: "Plant State & Visualization Layer (Affective 3D)",
    color: "#54B987",
    description: "Ingests real-time environmental data, computes biological physiological condition, and renders emotionally expressive 3D plant postures and shaders.",
    components: [
      {
        name: "FirebaseIoTManager.cs",
        codeFile: "FirebaseIoTManager.cs",
        subsystem: "Client Telemetry Ingestion",
        role: "Data Stream Listener & Cache",
        details: "Subscribes to Firebase Realtime Database endpoints in Unity, parses incoming JSON payloads, and handles offline simulated fallback."
      },
      {
        name: "PlantHealthState.cs",
        codeFile: "PlantHealthState.cs",
        subsystem: "Biological State Machine",
        role: "State Evaluation & Transitions",
        details: "Calculates current physiological state (Thriving, Thirsty, Scorched, Wilted, Recovering) based on combined moisture and illumination indices."
      },
      {
        name: "3D Plant Procedural Mesh Controller",
        codeFile: "PlantShaderController.cs",
        subsystem: "Graphics & Shaders",
        role: "Dynamic 3D Plant Rendering",
        details: "Controls low-poly AR plant meshes with custom vertex displacement shaders for leaf drooping, stem turgor, and petal bloom states."
      },
      {
        name: "Affective Visual & Audio Stress Cues",
        codeFile: "AffectiveAudioVisualCue.cs",
        subsystem: "Multi-Sensory Feedback",
        role: "Emotional Feedback Generation",
        details: "Emits sparkle particles when healthy, drooping wilt animations when neglected, and joyful/worried non-verbal sound effects."
      }
    ]
  },
  {
    id: "layer-narrative",
    name: "Narrative & Pedagogical Layer (Gamification)",
    color: "#F59E0B",
    description: "Evaluates child decisions and plant physiological shifts to branch story chapters, award stewardship badges, and guide early science comprehension.",
    components: [
      {
        name: "StewardshipTracker.cs",
        codeFile: "StewardshipTracker.cs",
        subsystem: "Care Evaluation Engine",
        role: "Cumulative Care History & Empathy Metric",
        details: "Maintains persistent scores of child watering diligence, sunlight management, and care reaction time throughout the story."
      },
      {
        name: "StoryBranchController.cs",
        codeFile: "StoryBranchController.cs",
        subsystem: "Interactive Story Engine",
        role: "Non-Linear Chapter Branching",
        details: "Routes narrative nodes depending on plant health states, allowing for redemption rescue chapters if a plant wilts."
      },
      {
        name: "Narrative Audio & Stage 1 Vocabulary",
        codeFile: "AudioNarratorController.cs",
        subsystem: "Educational Audio",
        role: "Spoken Storytelling & Subtitle Sync",
        details: "Delivers age-appropriate spoken voiceovers reinforcing Cambridge Stage 1 science terminology (roots, stem, leaves, sunlight, soil)."
      },
      {
        name: "Gamified Badges & Stewardship Rewards",
        codeFile: "BadgeRewardSystem.cs",
        subsystem: "Motivational Feedback",
        role: "Digital Badges & Positive Reinforcement",
        details: "Unlocks celebratory badges ('Gentle Gardener', 'Sun Watcher', 'Plant Doctor') to reinforce positive environmental habits."
      }
    ]
  },
  {
    id: "layer-hci",
    name: "Hybrid Interaction & Ergonomic Layer (Child-Centered HCI)",
    color: "#7966E8",
    description: "Monitors physical tablet elevation, manages young child fine-motor interactions, and provides smooth dual-mode transitions between handheld AR and resting 2D.",
    components: [
      {
        name: "ErgonomicTimer.cs",
        codeFile: "ErgonomicTimer.cs",
        subsystem: "Musculoskeletal Fatigue Guard",
        role: "Elevation Tracking & Rest Intervals",
        details: "Tracks continuous device orientation and elevation duration, triggering a friendly rest prompt after 3 minutes of continuous handheld lifting."
      },
      {
        name: "InteractionManager.cs",
        codeFile: "InteractionManager.cs",
        subsystem: "Child-Adaptive Input Manager",
        role: "Touch Gesture Normalization",
        details: "Provides enlarged touch hitboxes (minimum 64×64 pt), tap magnetism, and prevents accidental double-tap gesture clashes."
      },
      {
        name: "ModalTransitionController.cs",
        codeFile: "ModalTransitionController.cs",
        subsystem: "Modality Switching",
        role: "Seamless AR-to-2D Story Transition",
        details: "Smoothly shifts rendering from 3D camera passthrough to an orthographic 2D storybook view when the child lays the tablet down on a desk."
      },
      {
        name: "Physical Page Anchor Stabilizer",
        codeFile: "AnchorStabilizer.cs",
        subsystem: "Computer Vision / AR Foundation",
        role: "Occlusion & Jitter Compensation",
        details: "Applies Kalman filter smoothing to Vuforia / AR Foundation image tracking, preventing sudden jumps when little fingers partially obscure the page."
      }
    ]
  }
];

export const ARCHITECTURE_DATA_FLOWS = [
  {
    id: "flow-1",
    from: "ESP32-S3 Environmental Station",
    to: "Firebase Realtime Database",
    label: "Raw Sensor Telemetry (LDR Lux + Soil Moisture VWC%)",
    protocol: "Wi-Fi HTTPS / JSON",
    layer: "IoT to Cloud"
  },
  {
    id: "flow-2",
    from: "Firebase Realtime Database",
    to: "FirebaseIoTManager.cs (Unity Client)",
    label: "Real-Time Telemetry Event Stream",
    protocol: "WebSocket / Firebase SDK",
    layer: "Cloud to Client"
  },
  {
    id: "flow-3",
    from: "FirebaseIoTManager.cs",
    to: "PlantHealthState.cs",
    label: "Hydration & Illumination Metric Payloads",
    protocol: "C# Event Action",
    layer: "Plant State Computation"
  },
  {
    id: "flow-4",
    from: "PlantHealthState.cs",
    to: "3D Plant Procedural Mesh Controller",
    label: "Physiological State -> Shader Displacement & Bone Rigs",
    protocol: "Material Property Blocks",
    layer: "Affective Visual Output"
  },
  {
    id: "flow-5",
    from: "PlantHealthState.cs",
    to: "StoryBranchController.cs",
    label: "Health State -> Narrative Branch Trigger",
    protocol: "Event Delegate",
    layer: "Narrative Conditioning"
  },
  {
    id: "flow-6",
    from: "Child Touch & Care Decisions",
    to: "StewardshipTracker.cs",
    label: "Watering / Sunlight Action Logging",
    protocol: "Interaction Manager Dispatcher",
    layer: "Stewardship Tracking"
  },
  {
    id: "flow-7",
    from: "ErgonomicTimer.cs",
    to: "ModalTransitionController.cs",
    label: "Fatigue Timeout Exceeded (3 min) -> Rest State",
    protocol: "HCI Modality Switch",
    layer: "Ergonomic Safeguard"
  }
];
