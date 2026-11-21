export interface DomainFocus {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  summary: string;
  relatedSection: 'skills' | 'projects';
}

export interface EducationEntry {
  period: string;
  institution: string;
  program: string;
  location: string;
}

export interface ToolItem {
  index: string;
  id: string;
  name: string;
  category: string;
  dotColorClass: string;
  hoverColorClass: string;
  description: string;
  usageExamples: string[];
}

export interface HardSkill {
  index: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  blueprintLabel: string;
  categoryTag: string;
  categoryFilter: 'python' | 'ai';
  metaLine: string;
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
  blueprintType: 'flowchart' | 'cybernetic';
  architectureSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  codeTitle: string;
  codeLanguage: string;
  codeSnippet: string;
  deliverables: string[];
}

export interface ServiceMode {
  modeLabel: string;
  location: string;
  title: string;
  description: string;
  tags: string[];
  ctaLabel: string;
}

export const NAV_ITEMS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'services', label: 'SERVICES' },
  { id: 'contact', label: 'CONTACT' },
] as const;

export const TELEMETRY_BAR = [
  { label: 'LOC // MADIUN — JAKARTA, ID', isStatus: false },
  { label: 'FOCUS // PYTHON · ALGO · AI AGENTS', isStatus: false },
  { label: 'INSTITUTION // ITPLN INFORMATICS', isStatus: false },
  { label: 'STATUS // OPEN FOR COLLABORATION', isStatus: true },
] as const;

export const DOMAIN_FOCUSES: DomainFocus[] = [
  {
    id: 'data-science',
    label: 'DOMAIN 01',
    title: 'Data Science',
    subtitle: 'Analytical thinking & data structuring',
    summary:
      'Organizing structured datasets in Python and MS Excel, cleaning inputs, and translating raw information into clear analytical outputs.',
    relatedSection: 'skills',
  },
  {
    id: 'ai-automation',
    label: 'DOMAIN 02',
    title: 'AI Automation',
    subtitle: 'Intelligent workflows & AI agents',
    summary:
      'Prototyping prompt-driven task routing, structured agent instructions, and repeatable automation blueprints for daily productivity.',
    relatedSection: 'projects',
  },
  {
    id: 'software-eng',
    label: 'DOMAIN 03',
    title: 'Software Eng',
    subtitle: 'Clean algorithms & system flowcharts',
    summary:
      'Decomposing engineering problems into visual system flowcharts before implementing modular, verifiable Python logic.',
    relatedSection: 'projects',
  },
];

export const EDUCATION_LOG: EducationEntry[] = [
  {
    period: '2026 — EXPECTED GRADUATION',
    institution: 'Institut Teknologi PLN (ITPLN)',
    program: 'S1 Teknik Informatika (Informatics Engineering)',
    location: 'Jakarta, Indonesia',
  },
  {
    period: '2023 — 2026',
    institution: 'SMAN 3 Taruna Angkasa Jawa Timur',
    program: 'Senior High School',
    location: 'Madiun, Jawa Timur',
  },
];

export const TOOLKIT_ITEMS: ToolItem[] = [
  {
    index: '01',
    id: 'python',
    name: 'Python',
    category: 'PROGRAMMING',
    dotColorClass: 'bg-primary animate-pulse',
    hoverColorClass: 'group-hover:text-primary',
    description:
      'Primary language for algorithmic exercises, control flow validation, modular functions, and data manipulation scripts.',
    usageExamples: [
      'Modular logic & validation functions',
      'Algorithmic problem decomposition',
      'Structured input/output processing',
    ],
  },
  {
    index: '02',
    id: 'excel',
    name: 'MS Excel',
    category: 'DATA & SPREADSHEET',
    dotColorClass: 'bg-emerald-400',
    hoverColorClass: 'group-hover:text-emerald-400',
    description:
      'Spreadsheet structuring, formula logic, tabular reporting, and clean dataset organization for academic and operational tasks.',
    usageExamples: [
      'Structured tables & lookup formulas',
      'Schedule & budget tracking sheets',
      'Summary matrices for reporting',
    ],
  },
  {
    index: '03',
    id: 'word',
    name: 'MS Word',
    category: 'DOCUMENTATION',
    dotColorClass: 'bg-sky-400',
    hoverColorClass: 'group-hover:text-sky-400',
    description:
      'Technical reporting, academic paper formatting, structured SOPs, and clean project documentation.',
    usageExamples: [
      'Academic lab reports & specifications',
      'Structured workflow documentation',
      'Event proposals & formal briefs',
    ],
  },
  {
    index: '04',
    id: 'powerpoint',
    name: 'PowerPoint',
    category: 'PRESENTATION',
    dotColorClass: 'bg-amber-400',
    hoverColorClass: 'group-hover:text-amber-400',
    description:
      'Clear presentation architecture for technical walkthroughs, academic pitches, and team briefings.',
    usageExamples: [
      'Technical architecture slide decks',
      'Algorithmic concept walkthroughs',
      'Extracurricular event briefings',
    ],
  },
  {
    index: '05',
    id: 'canva',
    name: 'Canva',
    category: 'VISUAL DESIGN',
    dotColorClass: 'bg-cyan-400',
    hoverColorClass: 'group-hover:text-cyan-400',
    description:
      'Visual layout composition for posters, event graphics, presentation assets, and clean digital collateral.',
    usageExamples: [
      'Organization event posters & announcements',
      'Clean visual diagrams & slide graphics',
      'Consistent typography & layout templates',
    ],
  },
];

export const HARD_SKILLS: HardSkill[] = [
  {
    index: '01',
    title: 'Basic Python Programming',
    description:
      'Writing structured scripts, data handling, and foundational programming logic.',
  },
  {
    index: '02',
    title: 'Algorithm Design',
    description:
      'Decomposing problems into clear, step-by-step computational procedures.',
  },
  {
    index: '03',
    title: 'System Flowcharting',
    description:
      'Designing visual logic diagrams and control flows prior to code implementation.',
  },
];

export const SOFT_SKILLS: string[] = [
  'Communication',
  'Teamwork',
  'Creativity',
  'Problem Solving',
  'Adaptability',
  'Time Mgmt',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'python-algorithms',
    blueprintLabel: '[ MODULE BLUEPRINT // 01 ]',
    categoryTag: 'PYTHON & ALGORITHMS',
    categoryFilter: 'python',
    metaLine: '2026 · ACADEMIC',
    title: 'Python Algorithmic & Logic Exercises',
    summary:
      'Collection of structured Python programs and flowchart-driven problem-solving modules.',
    bullets: [
      'Translated problem statements into formal flowcharts before coding.',
      'Implemented modular Python functions for data processing and logic validation.',
    ],
    tags: ['Python', 'Flowchart', 'Algorithms'],
    blueprintType: 'flowchart',
    architectureSteps: [
      {
        step: '01',
        title: 'Problem Decomposition',
        detail: 'Identify input constraints, edge cases, and expected output invariants before writing a single line of code.',
      },
      {
        step: '02',
        title: 'Flowchart Blueprinting',
        detail: 'Map decision branches, loop boundaries, and validation gates into a formal control-flow diagram.',
      },
      {
        step: '03',
        title: 'Modular Implementation',
        detail: 'Translate each flowchart block into pure, testable Python functions with deterministic return states.',
      },
    ],
    codeTitle: 'logic_validator.py',
    codeLanguage: 'python',
    codeSnippet: `def validate_and_score(records: list[dict]) -> dict:
    """Validate structured input records using deterministic control flow."""
    passed, flagged = [], []

    for item in records:
        value = item.get("metric", 0)
        if isinstance(value, (int, float)) and 0 <= value <= 100:
            passed.append(item)
        else:
            flagged.append(item.get("id", "UNKNOWN"))

    return {
        "valid_count": len(passed),
        "flagged_ids": flagged,
        "status": "NOMINAL" if not flagged else "REVIEW_REQUIRED",
    }`,
    deliverables: [
      'Formal control-flow diagrams',
      'Modular Python exercise suite',
      'Input edge-case validation matrix',
    ],
  },
  {
    id: 'ai-agent-workflow',
    blueprintLabel: '[ MODULE BLUEPRINT // 02 ]',
    categoryTag: 'AI & AUTOMATION',
    categoryFilter: 'ai',
    metaLine: '2026 · SELF-INITIATED',
    title: 'AI Agent & Workflow Exploration',
    summary:
      'Early-stage research and prototyping on prompt-driven automation and data workflows.',
    bullets: [
      'Explored structured prompting and automated task routing.',
      'Documented reproducible workflow blueprints for productivity.',
    ],
    tags: ['AI Agents', 'Automation', 'Data Science'],
    blueprintType: 'cybernetic',
    architectureSteps: [
      {
        step: '01',
        title: 'Task Signal Intake',
        detail: 'Capture unstructured notes or academic briefs and normalize them into explicit JSON-like task payloads.',
      },
      {
        step: '02',
        title: 'Prompt Routing Layer',
        detail: 'Classify intent and dispatch tasks across specialized instruction templates (summarization, structuring, review).',
      },
      {
        step: '03',
        title: 'Reproducible Output Spec',
        detail: 'Enforce consistent markdown/tabular schemas so outputs plug directly into spreadsheets or documentation.',
      },
    ],
    codeTitle: 'agent_router_spec.json',
    codeLanguage: 'json',
    codeSnippet: `{
  "workflow": "academic-research-router",
  "version": "1.0",
  "stages": [
    { "id": "ingest", "action": "normalize_notes", "format": "markdown" },
    { "id": "classify", "routes": ["algorithm_design", "data_summary", "study_brief"] },
    { "id": "verify", "constraint": "strict_factual_citations" }
  ],
  "output_target": "structured_study_log"
}`,
    deliverables: [
      'Structured prompt routing templates',
      'Workflow architecture schematics',
      'Productivity automation playbook',
    ],
  },
];

export const SERVICE_MODES: ServiceMode[] = [
  {
    modeLabel: 'MODE 01',
    location: 'Jakarta · Madiun · Remote',
    title: 'Programming & Algorithm Collaboration',
    description:
      'Open for collaborative Python coding projects, flowchart logic design, and Informatics study groups.',
    tags: ['Python', 'Algorithms', 'Flowchart'],
    ctaLabel: 'COLLABORATE VIA EMAIL →',
  },
  {
    modeLabel: 'MODE 02',
    location: 'Remote · Flexible',
    title: 'Data & Documentation Support',
    description:
      'Structured spreadsheet organization, presentation deck design, and clear technical documentation.',
    tags: ['Excel', 'PowerPoint', 'Canva'],
    ctaLabel: 'DISCUSS A TASK →',
  },
];

export const CONTACT_INFO = {
  email: 'hafidzbustomi75@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-hafidz-bustomi-646a93334/',
  instagram: 'https://www.instagram.com/atomic_mii/',
  instagramHandle: '@ATOMIC_MII',
};
