export type Certification =
  | "PMP"
  | "AWS"
  | "CCNA"
  | "CISM"
  | "PRINCE2"
  | "ITIL"
  | "Help Me Choose";

export interface Course {
  id: string;
  certification: Certification;
  label: string;
  fullName: string;
  description: string;
  topics: string[];
  cta: string;
}

export const courses: Course[] = [
  {
    id: "pmp",
    certification: "PMP",
    label: "PROJECT MANAGEMENT",
    fullName: "Project Management Professional",
    description:
      "Develop the knowledge and skills to lead projects, manage stakeholders, navigate risks, and deliver meaningful business outcomes.",
    topics: [
      "Project planning and delivery",
      "Scope, schedule, and risk management",
      "Stakeholder engagement",
      "Predictive, agile, and hybrid approaches",
    ],
    cta: "Explore PMP Training",
  },
  {
    id: "aws",
    certification: "AWS",
    label: "CLOUD COMPUTING",
    fullName: "AWS Certification Preparation",
    description:
      "Build a foundation in cloud computing and explore the AWS services, architectures, and deployment concepts relevant to your target certification.",
    topics: [
      "Cloud fundamentals",
      "Core AWS services",
      "Security and identity fundamentals",
      "Cloud architecture and deployment concepts",
    ],
    cta: "Explore AWS Training",
  },
  {
    id: "ccna",
    certification: "CCNA",
    label: "NETWORKING",
    fullName: "Cisco Certified Network Associate",
    description:
      "Strengthen your networking fundamentals and prepare to understand, configure, and troubleshoot modern network environments.",
    topics: [
      "Network fundamentals",
      "IP connectivity and services",
      "Network access",
      "Security fundamentals and automation concepts",
    ],
    cta: "Explore CCNA Training",
  },
  {
    id: "cism",
    certification: "CISM",
    label: "CYBERSECURITY & LEADERSHIP",
    fullName: "Certified Information Security Manager",
    description:
      "Explore information security governance, risk management, security programs, and incident management from a managerial perspective.",
    topics: [
      "Information security governance",
      "Information security risk management",
      "Information security program development",
      "Incident management",
    ],
    cta: "Explore CISM Training",
  },
  {
    id: "prince2",
    certification: "PRINCE2",
    label: "PROJECT GOVERNANCE",
    fullName: "PRINCE2 Project Management",
    description:
      "Learn a structured approach to project management through principles, practices, processes, roles, and controlled project delivery.",
    topics: [
      "Project governance and organization",
      "Business justification",
      "Planning and progress control",
      "Risk, quality, and change management",
    ],
    cta: "Explore PRINCE2 Training",
  },
  {
    id: "itil",
    certification: "ITIL",
    label: "IT SERVICE MANAGEMENT",
    fullName: "ITIL IT Service Management",
    description:
      "Understand modern IT service management, service value, continual improvement, and the practices used to deliver effective technology services.",
    topics: [
      "Service management concepts",
      "Service value and value streams",
      "Continual improvement",
      "IT service management practices",
    ],
    cta: "Explore ITIL Training",
  },
];
