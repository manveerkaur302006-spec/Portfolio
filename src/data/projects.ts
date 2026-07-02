export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  sourceUrl?: string;
  image?: string;
  highlights: string[];
  accent: string; // tailwind gradient classes
}

export const projects: Project[] = [
  {
    title: "RepoLens AI",
    tagline: "AI-driven code intelligence for any GitHub repository.",
    description:
      "A scalable AI platform that indexes large GitHub repositories in under 2 minutes and answers deep technical questions about the codebase using a multi-modal RAG pipeline.",
    stack: ["FastAPI", "Python", "Neo4j", "ChromaDB", "Tree-sitter", "React", "TypeScript"],
    liveUrl: "https://repo-lens-red.vercel.app/",
    sourceUrl: "https://github.com/manveerkaur302006-spec/repo-lens",
    highlights: [
      "Asynchronous FastAPI backend indexes large repos in under 2 minutes",
      "Tree-sitter AST parsing + Neo4j dependency graphs + ChromaDB semantic search",
      "Custom embedding service chunks code by functional hierarchy (Classes / Methods)",
      "Glassmorphism React/TypeScript UI with interactive dependency visualisation",
    ],
    accent: "from-violet-500 via-fuchsia-500 to-rose-500",
  },
  {
    title: "Project Manager",
    tagline: "Full-stack multi-workspace project & team collaboration platform.",
    description:
      "An end-to-end project management platform with multi-workspace collaboration, task lifecycle management, and unified team communication.",
    stack: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "JWT"],
    liveUrl: "https://project-manager-frontend-1.onrender.com",
    sourceUrl: "https://github.com/manveerkaur302006-spec/project-manager",
    highlights: [
      "30+ RESTful endpoints with role-based access control",
      "Workspace invitations, email verification & password recovery",
      "Task lifecycle with subtasks, comments, activity logs, assignees & watchers",
      "Designed for scalable cross-team collaboration",
    ],
    accent: "from-sky-500 via-cyan-500 to-emerald-500",
  },
  {
    title: "Live Trading Dashboard",
    tagline: "Real-time crypto market dashboard powered by Binance WebSockets.",
    description:
      "A low-latency cryptocurrency trading dashboard streaming live prices, order book updates, and trade history from Binance.",
    stack: ["React.js", "Vite", "WebSocket", "Binance API"],
    liveUrl: "https://trading-dashboard-omega-ebon.vercel.app/",
    sourceUrl: "https://github.com/manveerkaur302006-spec/trading-dashboard",
    highlights: [
      "Resilient WebSocket connection management with auto-reconnect",
      "Dynamic trading pair subscriptions for uninterrupted data delivery",
      "Optimised rendering for high-frequency market updates via React Hooks",
    ],
    accent: "from-amber-400 via-orange-500 to-rose-500",
  },
  {
    title: "CNN Fashion Classifier",
    tagline: "Convolutional Neural Network served as a REST API.",
    description:
      "A trained CNN on Fashion-MNIST exposed through a Flask REST API for real-time apparel classification across 10 categories.",
    stack: ["TensorFlow", "Flask", "Python", "NumPy"],
    sourceUrl: "https://github.com/manveerkaur302006-spec/Fashion_Classifier",
    highlights: [
      "Trained CNN achieving multi-class classification across 10 apparel categories",
      "Image preprocessing & inference pipeline with normalisation",
      "Flask REST API exposing predictions with confidence scores",
    ],
    accent: "from-emerald-500 via-teal-500 to-sky-500",
  },
];
