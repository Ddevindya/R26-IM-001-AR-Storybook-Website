export interface ResearchComponent {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  researcher: string;
  studentId: string;
  role: string;
  avatar?: string;
  summary: string;
  problem: string;
  objectives: string[];
  technicalApproach: string[];
  keyFeatures: string[];
  architectureNodes: string[];
  integrationPoints: string[];
  researchContribution: string;
  metricsOrFocus: string;
  color: {
    primary: string;
    light: string;
    badge: string;
    border: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  preferredName?: string;
  studentId?: string;
  role: string;
  componentTitle?: string;
  componentNumber?: string;
  department: string;
  institution: string;
  bio: string;
  contributions: string[];
  email?: string;
  linkedin?: string;
  github?: string;
  researchgate?: string;
  image: string;
  isSupervisor?: boolean;
}

export interface ResearchMilestone {
  id: string;
  phase: string;
  title: string;
  dateRange: string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  description: string;
  deliverables: string[];
  highlights?: string[];
}

export interface PublicationDocument {
  id: string;
  category: 'shared' | 'individual';
  componentNumber?: 'C1' | 'C2' | 'C3' | 'C4';
  authorMember?: string;
  studentId?: string;
  title: string;
  type: string;
  date: string;
  status: string; // e.g. "Approved by SLIIT Faculty of Computing", "Coming soon", "In preparation"
  description: string;
  authors: string[];
  downloadUrl?: string;
  fileSize?: string;
  previewAvailable: boolean;
  contentSummary?: string;
  isAvailable: boolean; // false if "Coming soon / File not yet available"
}

export interface PresentationRecord {
  id: string;
  code: 'PP' | 'PP1' | 'PP2';
  title: string;
  subtitle: string;
  date: string;
  status: string; // e.g. "Completed & Defended", "Scheduled for Review"
  format: 'PDF' | 'PowerPoint' | 'Slides';
  description: string;
  coverImage?: string;
  downloadUrl?: string;
  fileSize?: string;
  isAvailable: boolean; // false if file not yet uploaded by user
  presenters: string[];
}

export interface ArchitectureLayer {
  id: string;
  name: string;
  color: string;
  description: string;
  components: {
    name: string;
    codeFile?: string;
    subsystem: string;
    role: string;
    details: string;
  }[];
}

export interface ShowcaseItem {
  id: string;
  title: string;
  category: 'AR Storybook Experience' | '3D Plant Visualization' | 'Interactive Storytelling' | 'Sensor-Based Simulation' | 'Hybrid Interaction Features';
  description: string;
  keyAspects: string[];
  imagePlaceholder: {
    badge: string;
    accentColor: string;
    icon: string;
    caption: string;
  };
  demoDetails?: string;
}
