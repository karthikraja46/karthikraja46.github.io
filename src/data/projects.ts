export type Project = {
  id: string;
  title: string;
  tag: string;
  status: "prod" | "shipped" | "exploring";
  description: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "playwright-framework",
    title: "Playwright + TypeScript Automation Framework",
    tag: "Advanced framework architecture",
    status: "prod",
    description:
      "An advanced Playwright + TypeScript automation framework built for end-to-end, regression, and cross-browser coverage, with designed CI/CD pipelines and containerized test environments.",
    problem:
      "Manual regression cycles were slow and inconsistent across browsers, and release validation depended heavily on repeated human execution of the same journeys.",
    solution:
      "Architected a Playwright + TypeScript suite using the Page Object Model, reusable fixtures, and shared utilities. Designed CI/CD pipelines and containerized test environments so consistent regression runs execute on every change instead of before every release.",
    features: [
      "Page Object Model with reusable, composable page components",
      "Advanced framework architecture with shared fixtures and utilities",
      "Cross-browser end-to-end and regression coverage",
      "CI/CD pipeline design with parallel test execution",
      "Containerized test environments for consistent local and CI runs",
      "Flaky-test triage that cut false-positive failures by 40%",
    ],
    stack: ["Playwright", "TypeScript", "Page Object Model", "GitHub Actions", "Docker"],
    github: "https://github.com/karthikraja46",
  },
  {
    id: "rest-api-suite",
    title: "REST API Test Automation Suite",
    tag: "API & schema validation",
    status: "prod",
    description:
      "A structured API test suite covering 15+ REST endpoints with functional, negative, and edge-case coverage, backed by JSON Schema validation.",
    problem:
      "API regressions were surfacing late in the release cycle, and validation coverage across endpoints was inconsistent between functional and edge-case paths.",
    solution:
      "Automated request/response validation with Pytest and Postman, layering JSON Schema checks on top of functional tests so contract breaks and edge-case failures surface before release.",
    features: [
      "15+ endpoints covered across functional, negative, and edge-case scenarios",
      "JSON Schema validation for response contracts",
      "CI-integrated runs supporting regression and release validation",
      "Contributed to a 25% reduction in release regression issues",
    ],
    stack: ["Pytest", "Postman", "JSON Schema", "GitHub Actions"],
    github: "https://github.com/karthikraja46",
  },
];
