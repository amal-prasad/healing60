import {
  Therapist,
  Service,
  Testimonial,
  CorporateService,
  SiteSettings,
} from "./types";

// ─── Site Settings ───────────────────────────────────────────────
export const siteSettings: SiteSettings = {
  clinicName: "Healing60",
  tagline: "A space where healing begins.",
  phone: "+91-XXXXXXXXXX",
  email: "hello@healing60.com",
  whatsapp: "https://wa.me/91XXXXXXXXXX",
  address: "Indore, Madhya Pradesh, India",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0!2d75.85!3d22.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMjLCsDQyJzM2LjAiTiA3NcKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
  socialLinks: {
    instagram: "https://instagram.com/healing60",
    facebook: "https://facebook.com/healing60",
    linkedin: "https://linkedin.com/company/healing60",
  },
  stats: {
    livesTouched: 500,
    rating: 4.9,
    yearsExperience: 8,
  },
};

// ─── Therapists ──────────────────────────────────────────────────
export const therapists: Therapist[] = [
  {
    id: "therapist-1",
    name: "Dr. Priya Sharma",
    title: "Clinical Psychologist",
    specialization: "Anxiety & Depression",
    quote:
      "Every person carries the seeds of their own healing. My role is to help you water them.",
    image: "/images/therapists/therapist-1.jpg",
    credentials: ["RCI Licensed", "M.Phil Clinical Psychology", "CBT Certified"],
    yearsExperience: 10,
  },
  {
    id: "therapist-2",
    name: "Dr. Ankit Verma",
    title: "Counselling Psychologist",
    specialization: "Relationship & Marriage Counselling",
    quote:
      "Strong relationships are built one conversation at a time.",
    image: "/images/therapists/therapist-2.jpg",
    credentials: ["RCI Licensed", "MA Psychology", "EFT Trained"],
    yearsExperience: 7,
  },
  {
    id: "therapist-3",
    name: "Dr. Kavita Joshi",
    title: "Child & Adolescent Psychologist",
    specialization: "Child Counselling",
    quote:
      "Children speak through play. I listen in their language.",
    image: "/images/therapists/therapist-3.jpg",
    credentials: ["RCI Licensed", "M.Phil Clinical Psychology", "Play Therapy Certified"],
    yearsExperience: 6,
  },
];

// ─── Services ────────────────────────────────────────────────────
export const services: Service[] = [
  {
    slug: "depression-anxiety",
    title: "Depression & Anxiety",
    shortDescription:
      "Evidence-based therapy to help you navigate through the fog and find clarity.",
    description:
      "Depression and anxiety can feel overwhelming, but they are treatable. Our therapists use Cognitive Behavioural Therapy (CBT), mindfulness-based approaches, and personalized treatment plans to help you regain control of your mental health.",
    icon: "mind",
    symptoms: [
      "Persistent sadness or emptiness",
      "Excessive worry or restlessness",
      "Sleep disturbances",
      "Loss of interest in activities",
      "Difficulty concentrating",
      "Physical symptoms like headaches or fatigue",
    ],
    approach: [
      "Cognitive Behavioural Therapy (CBT)",
      "Mindfulness-Based Stress Reduction",
      "Acceptance and Commitment Therapy",
      "Personalized coping strategies",
    ],
    whatToExpect: [
      "A safe, non-judgmental space to share your feelings",
      "Structured sessions with clear goals",
      "Practical tools you can use between sessions",
      "Gradual, measurable progress",
    ],
    faq: [
      {
        question: "How many sessions will I need?",
        answer:
          "This varies per individual. Most clients see meaningful progress within 8-12 sessions, though some benefit from longer-term support.",
      },
      {
        question: "Do you prescribe medication?",
        answer:
          "As psychologists, we provide therapy, not medication. If medication is recommended, we collaborate with trusted psychiatrists in Indore.",
      },
    ],
    featured: true,
  },
  {
    slug: "relationship-counselling",
    title: "Relationship Counselling",
    shortDescription:
      "Rebuild communication, trust, and connection with the people who matter most.",
    description:
      "Whether you're navigating conflict, rebuilding trust, or seeking deeper connection, our relationship counselling provides a structured, empathetic space for growth.",
    icon: "heart",
    symptoms: [
      "Frequent arguments or communication breakdown",
      "Trust issues or infidelity recovery",
      "Feeling disconnected from your partner",
      "Difficulty resolving conflicts",
      "Co-dependency patterns",
    ],
    approach: [
      "Emotionally Focused Therapy (EFT)",
      "Gottman Method",
      "Communication skills training",
      "Conflict resolution strategies",
    ],
    whatToExpect: [
      "Joint and individual sessions as needed",
      "A neutral mediator who listens to both sides",
      "Practical communication exercises",
      "A path toward healthier dynamics",
    ],
    faq: [
      {
        question: "Does my partner need to attend?",
        answer:
          "While couples sessions are most effective with both partners present, individual sessions can also help you improve relationship dynamics.",
      },
    ],
  },
  {
    slug: "child-counselling",
    title: "Child Counselling",
    shortDescription:
      "Helping young minds navigate their world with confidence and resilience.",
    description:
      "Children express their emotions differently than adults. Our child psychologists use play therapy, art therapy, and age-appropriate techniques to help children process their feelings and build emotional resilience.",
    icon: "child",
    symptoms: [
      "Behavioral changes or aggression",
      "Academic difficulties",
      "Social withdrawal",
      "Excessive fears or anxiety",
      "Adjustment to family changes (divorce, relocation)",
      "Bullying — as victim or perpetrator",
    ],
    approach: [
      "Play Therapy",
      "Art & Expressive Therapy",
      "Cognitive Behavioural Therapy (adapted for children)",
      "Parent guidance and involvement",
    ],
    whatToExpect: [
      "A child-friendly, comfortable therapy room",
      "Sessions adapted to the child's age and needs",
      "Regular parent consultations",
      "Progress updates and home strategies",
    ],
    faq: [
      {
        question: "What age group do you work with?",
        answer: "We work with children aged 4-17, with techniques adapted to each developmental stage.",
      },
    ],
  },
  {
    slug: "career-counselling",
    title: "Career Counselling",
    shortDescription:
      "Find direction, purpose, and confidence in your professional journey.",
    description:
      "Whether you're a student choosing a path, a professional facing burnout, or someone seeking a career change, our career counselling combines psychometric assessments with guided exploration.",
    icon: "compass",
    symptoms: [
      "Uncertainty about career direction",
      "Work-related stress or burnout",
      "Difficulty making career decisions",
      "Lack of motivation or purpose",
      "Career transition anxiety",
    ],
    approach: [
      "Psychometric assessments (aptitude, interest, personality)",
      "Strengths-based counselling",
      "Goal-setting frameworks",
      "Work-life balance strategies",
    ],
    whatToExpect: [
      "Comprehensive career assessment",
      "Personalized career roadmap",
      "Decision-making frameworks",
      "Follow-up support",
    ],
    faq: [
      {
        question: "Is this only for students?",
        answer:
          "Not at all. Career counselling is valuable at any stage — from students to mid-career professionals to those approaching retirement.",
      },
    ],
  },
  {
    slug: "marriage-counselling",
    title: "Marriage Counselling",
    shortDescription:
      "Strengthen your partnership through structured, compassionate guidance.",
    description:
      "Marriage counselling at Healing60 provides a safe, structured environment for couples to address challenges, deepen understanding, and build a stronger foundation together.",
    icon: "rings",
    symptoms: [
      "Communication breakdown",
      "Intimacy issues",
      "Financial disagreements",
      "Parenting conflicts",
      "Pre-marital concerns",
      "Considering separation",
    ],
    approach: [
      "Gottman Method Couples Therapy",
      "Emotionally Focused Therapy",
      "Imago Relationship Therapy",
      "Pre-marital counselling programs",
    ],
    whatToExpect: [
      "Initial assessment of relationship dynamics",
      "Structured sessions with clear objectives",
      "Homework assignments to practice between sessions",
      "A path toward mutual understanding and growth",
    ],
    faq: [
      {
        question: "How is this different from relationship counselling?",
        answer:
          "Marriage counselling specifically addresses dynamics within a marriage or committed partnership, including legal, family, and long-term considerations.",
      },
    ],
  },
];

// ─── Corporate Services ──────────────────────────────────────────
export const corporateServices: CorporateService[] = [
  {
    slug: "employee-assistance",
    title: "Employee Assistance Program (EAP)",
    description:
      "Comprehensive mental health support for your employees — confidential, professional, and accessible.",
    icon: "shield",
    features: [
      "24/7 confidential counselling helpline",
      "On-site and virtual therapy sessions",
      "Crisis intervention support",
      "Manager training for mental health awareness",
      "Monthly wellness reports",
    ],
  },
  {
    slug: "mental-health-workshops",
    title: "Mental Health Workshops",
    description:
      "Interactive, expert-led workshops that equip your team with practical mental health skills.",
    icon: "workshop",
    features: [
      "Stress management & resilience building",
      "Work-life balance strategies",
      "Mindfulness & meditation sessions",
      "Communication & conflict resolution",
      "Custom topics based on organizational needs",
    ],
  },
  {
    slug: "corporate-counselling",
    title: "Corporate Counselling",
    description:
      "Dedicated counselling services tailored for your organization's specific needs and culture.",
    icon: "building",
    features: [
      "Needs assessment & program design",
      "Individual and group sessions",
      "Leadership coaching",
      "Team dynamics improvement",
      "ROI tracking & impact reporting",
    ],
  },
];

// ─── Testimonials ────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Ritika M.",
    rating: 5,
    text: "Healing60 transformed my understanding of myself. After months of struggling with anxiety, the team helped me find tools that actually work. I feel like myself again.",
    date: "2025-10",
  },
  {
    id: "t2",
    name: "Arjun & Sneha P.",
    rating: 5,
    text: "Marriage counselling here saved our relationship. The therapist created a space where we could finally hear each other. We're communicating better than ever.",
    date: "2025-08",
  },
  {
    id: "t3",
    name: "Priti D.",
    rating: 5,
    text: "My daughter was going through a very tough time at school. The child counsellor was incredibly patient and kind. The difference in my child's confidence is remarkable.",
    date: "2025-06",
  },
  {
    id: "t4",
    name: "Vikram S.",
    rating: 5,
    text: "As a corporate professional, I was burnt out and lost. The career counselling sessions gave me clarity and a real action plan. Highly recommend.",
    date: "2025-04",
  },
  {
    id: "t5",
    name: "Meera K.",
    rating: 4,
    text: "The atmosphere at Healing60 is so calming. From the moment you walk in, you feel safe. The therapists are warm, professional, and genuinely caring.",
    date: "2025-02",
  },
  {
    id: "t6",
    name: "Rahul T.",
    rating: 5,
    text: "I was skeptical about therapy, but Healing60 changed my mind. The approach is practical, evidence-based, and truly personalized. It's not one-size-fits-all.",
    date: "2024-12",
  },
];

// ─── Pricing ─────────────────────────────────────────────────────
export interface PricingTier {
  name: string;
  duration: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Individual Session",
    duration: "60 minutes",
    price: 1500,
    description: "One-on-one therapy session with a qualified psychologist.",
    features: [
      "Personalized treatment approach",
      "Evidence-based therapy",
      "Session notes & progress tracking",
      "Between-session support via chat",
    ],
    recommended: true,
  },
  {
    name: "Couples Session",
    duration: "90 minutes",
    price: 2500,
    description: "Joint therapy session for couples and partners.",
    features: [
      "Both partners attended",
      "Relationship assessment tools",
      "Communication exercises",
      "Follow-up action plan",
    ],
  },
  {
    name: "Child Session",
    duration: "45 minutes",
    price: 1200,
    description: "Age-appropriate therapy session for children (4-17).",
    features: [
      "Play & art therapy tools",
      "Parent consultation included",
      "Progress reports",
      "Home strategy guidance",
    ],
  },
  {
    name: "Corporate Package",
    duration: "Custom",
    price: 0,
    description: "Tailored mental health solutions for organizations.",
    features: [
      "Custom program design",
      "On-site & virtual options",
      "Employee wellness reports",
      "Dedicated account manager",
    ],
  },
];

// ─── Navigation ──────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

// ─── Concern Chips (for Philosophy section) ──────────────────────
export const concerns = [
  { label: "Anxiety", slug: "depression-anxiety" },
  { label: "Depression", slug: "depression-anxiety" },
  { label: "Relationships", slug: "relationship-counselling" },
  { label: "Parenting", slug: "child-counselling" },
  { label: "Career Stress", slug: "career-counselling" },
  { label: "Marriage", slug: "marriage-counselling" },
  { label: "Self-Esteem", slug: "depression-anxiety" },
  { label: "Burnout", slug: "career-counselling" },
];
