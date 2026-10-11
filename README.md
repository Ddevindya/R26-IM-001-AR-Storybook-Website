# R26-IM-001 Research Showcase Platform

> **Project Title:** Design and Evaluation of an Augmented Reality Storybook for Primary Learners’ Plant Growth Understanding & Stewardship  
> **Project Identifier:** R26-IM-001  
> **Academic Institution:** Sri Lanka Institute of Information Technology (SLIIT), Faculty of Computing  
> **Department:** Department of Computer Science & Software Engineering / Interactive Media Specialization  
> **Target Audience:** Cambridge Primary Science Grade 1 Learners (Ages 5–6), Sri Lankan International Schools  
> **Academic Year:** 2025 / 2026  

---

## 📖 Executive Summary

This repository houses the public-facing research exhibition website for **R26-IM-001**, an undergraduate research thesis exploring how physical illustrated storybooks can be augmented with child-centered Augmented Reality (AR), real-world Internet of Things (IoT) sensor telemetry, affective botanical 3D visualizations, and consequence-driven narrative branching to teach early primary learners about plant growth and environmental stewardship.

---

## 🏛️ Academic Supervision & Research Team

### Academic Supervision
- **Principal Supervisor:** **Mr. Aruna Ishara Gamage** (Senior Lecturer, Department of Computer Science & Software Engineering / Interactive Media, SLIIT)
- **Co-Supervisor:** **Mr. Nushkan Nizmi** (Lecturer, Department of Computer Science & Software Engineering / Interactive Media, SLIIT)

### Research Component Leads
1. **Component 01 — Hybrid Interaction Framework**  
   *Lead Researcher:* **Wijayarathne K.N.**  
   *Focus:* Musculoskeletal fatigue mitigation, adaptive touch bounding boxes, Kalman filter page anchor stabilization, and seamless AR-to-2D modality transitions (`ErgonomicTimer.cs`, `InteractionManager.cs`).
2. **Component 02 — Affective Visualization Model**  
   *Lead Researcher:* **Palliyaguruge S.N.**  
   *Focus:* Anthropomorphic 3D botanical health postures, custom vertex displacement shaders for plant turgor pressure, chlorophyll color ramps, and multi-sensory audio-visual cues (`PlantHealthState.cs`, `PlantShaderController.cs`).
3. **Component 03 — Gamified Narrative Engine**  
   *Lead Researcher:* **Amarawardhane A.S.**  
   *Focus:* Non-linear narrative chapter branching, persistent stewardship quotient tracking, redemption rescue quests, and Cambridge Stage 1 science spoken dialogue synchronization (`StewardshipTracker.cs`, `StoryBranchController.cs`).
4. **Component 04 — Context-Aware Simulation Engine**  
   *Lead Researcher:* **Dissanayaka D.M.D.D.**  
   *Focus:* ESP32-S3 cyber-physical microcontroller sensing station with capacitive soil moisture and LDR ambient lux detection, streaming telemetry to Firebase Realtime Database with offline fallback modes (`FirebaseIoTManager.cs`).

---

## 🌐 Website Architecture & Structure

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Hero section, physical-to-AR book transformation visual, 4 component cards, live interactive plant simulator, 5-step user journey, SDG 4/13/15 impact. |
| `/research` | **About Research** | Cambridge Primary Science Stage 1 curriculum alignment, textbook limitations, handheld AR fatigue analysis, problem statement, research aim & specific objectives. |
| `/components` | **Components** | Deep-dive into Components 01–04, C# classes, code architecture, integration contracts, and embedded interactive widgets. |
| `/architecture` | **Architecture** | Low-Level Integrated Component Architecture Diagram with interactive node inspector and dataflow table. |
| `/showcase` | **Showcase** | Prototype gallery, 3D shader captures, IoT hardware photos, mobile AR HUD, and category filters. |
| `/documents` | **Documents** | Research Proposal, Topic Assessment Form (TAF), Architecture Specification, and Exhibition Poster with preview modal & citation copy. |
| `/team` | **Team** | Detailed profiles of all 4 student researchers and 2 academic supervisors with roles, contributions, and contact links. |
| `/journey` | **Journey** | Interactive research milestone timeline from initial proposal defense to classroom trials and final thesis defense. |
| `/future` | **Future Vision** | Scalability to primary schools, 'Sprout & Friends' storybook universe, educational technology partnerships, and licensing potential. |
| `/contact` | **Contact** | Official SLIIT Faculty of Computing contacts, validated enquiry form, and functional mailto gateway. |

---

## 🛠️ Technology Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom design tokens
- **Animations:** Motion for React / Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (v7)
- **Interactive Demonstrations:** HTML5 Canvas, SVG Procedural Shaders, `canvas-confetti`

---

## 🚀 Local Development Setup

### 1. Prerequisites
Ensure **Node.js** (v18+ or v20+) and **npm** are installed on your machine.

### 2. Installation
Clone or navigate to the repository folder:
```bash
cd R26-IM-001-Research-Website
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
To generate an optimized production bundle:
```bash
npm run build
```
The compiled static assets will be output to the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📦 Deployment Guidance

### Deploying to Firebase Hosting (Recommended for SLIIT Showcase)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Authenticate: `firebase login`
3. Initialize: `firebase init hosting` (set public directory to `dist` and configure as a single-page app)
4. Build & Deploy:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### Deploying to Vercel / Netlify
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Root Directory:** `./`

---

## 📝 Document & Asset Replacement Instructions

- **PDF Documents:** Place updated research documents in `public/documents/` (e.g., `R26-IM-001_Research_Proposal.pdf`). Update references in [src/data/publicationsData.ts](file:///c:/Users/lenovo/Desktop/Research%20Thesis/R26-IM-001-Research-Website/src/data/publicationsData.ts).
- **Prototype Screenshots:** Add real prototype photos to `public/images/showcase/`. Update card metadata in [src/data/showcaseData.ts](file:///c:/Users/lenovo/Desktop/Research%20Thesis/R26-IM-001-Research-Website/src/data/showcaseData.ts).
- **Researcher Profiles:** Update student emails and LinkedIn handles in [src/data/teamData.ts](file:///c:/Users/lenovo/Desktop/Research%20Thesis/R26-IM-001-Research-Website/src/data/teamData.ts).

---

## ⚖️ Academic Citation & Attribution

When citing or referencing this project, please use the following citation:

```bibtex
@misc{R26IM001_2026,
  author = {Wijayarathne, K.N. and Palliyaguruge, S.N. and Amarawardhane, A.S. and Dissanayaka, D.M.D.D.},
  title = {Design and Evaluation of an Augmented Reality Storybook for Primary Learners' Plant Growth Understanding & Stewardship},
  institution = {Sri Lanka Institute of Information Technology (SLIIT)},
  year = {2026},
  note = {Supervised by Mr. Aruna Ishara Gamage and Mr. Nushkan Nizmi, Project ID: R26-IM-001}
}
```
