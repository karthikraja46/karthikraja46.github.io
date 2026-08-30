export type Experience = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    title: "Software Development Engineer in Test (SDET)",
    company: "IMTF",
    companyUrl: "https://imtf.com/",
    location: "Bengaluru, Karnataka",
    start: "Jun 2026",
    end: "Present",
    current: true,
    bullets: [
      "Develop and maintain UI and API test automation frameworks using Playwright, TypeScript, and JavaScript, integrated as components within CI/CD pipelines.",
      "Automate REST API testing and maintain CI/CD pipeline integrations in GitHub Actions to support regression and release validation.",
      "Operate and maintain Docker- and Kubernetes-based test environments, applying containerization fundamentals to support pipeline execution.",
      "Monitor test-pipeline health and triage recurring failures through root cause analysis, improving CI/CD reliability and reducing false-positive escalations.",
      "Use Python, SQL, Linux, and Git/GitHub for day-to-day automation scripting, environment troubleshooting, and version control.",
    ],
    stack: ["Playwright", "TypeScript", "JavaScript", "GitHub Actions", "Docker", "Kubernetes", "Python", "SQL", "Linux"],
  },
  {
    title: "SDET / QA Automation Engineer",
    company: "Bluecopa",
    companyUrl: "https://www.bluecopa.com/",
    location: "Bengaluru, Karnataka",
    start: "Sep 2025",
    end: "Mar 2026",
    current: false,
    bullets: [
      "Designed, developed, and maintained automated test suites using Playwright (TypeScript) and Testsigma, covering end-to-end, regression, and cross-browser testing for critical user journeys.",
      "Built and executed REST API test automation for 15+ endpoints using Pytest, Postman, and JSON Schema validation, covering functional, negative, and edge-case scenarios.",
      "Implemented and maintained CI/CD pipeline integrations in GitHub Actions, reducing release regression issues by 25% and enabling parallel test execution.",
      "Debugged and stabilized flaky tests through root cause analysis, reducing false-positive failures by 40%.",
      "Collaborated with developers in Agile/Scrum teams for bug identification, reporting, validation, and early quality assurance.",
    ],
    stack: ["Playwright", "TypeScript", "Testsigma", "Pytest", "Postman", "GitHub Actions", "Agile/Scrum"],
  },
  {
    title: "Backend & Data Science Intern",
    company: "Tooliqa Innovations LLP",
    companyUrl: "https://www.tooli.qa/",
    location: "Gurugram, Haryana",
    start: "Feb 2025",
    end: "Aug 2025",
    current: false,
    bullets: [
      "Developed and validated 3+ production-grade REST APIs using FastAPI, SQLAlchemy, and Pydantic, improving data retrieval performance by 20%.",
      "Engineered an LLM-based document extraction pipeline (LangChain, Python) with hierarchical chunking and few-shot prompting, increasing data ingestion efficiency by 25%.",
      "Implemented structured schema validation and prompt templates to ensure consistent outputs for downstream analytics workflows, reducing manual data handling across teams.",
    ],
    stack: ["FastAPI", "SQLAlchemy", "Pydantic", "LangChain", "Python"],
  },
];
