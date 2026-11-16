import { OpportunityCategory, AICapability, CommunityFeature, JourneyStep } from '../types';

export const OPPORTUNITY_CATEGORIES: OpportunityCategory[] = [
  {
    id: 'funding',
    title: 'Funding & Grants',
    badge: 'Seed & Grants',
    iconName: 'Coins',
    shortDesc: 'Discover startup funding, government schemes, and innovation grants tailored for student creators and early founders.',
    details: {
      description: 'Find curated non-dilutive innovation grants, institutional seed funding, and student entrepreneurship capital programs.',
      highlights: [
        'National and regional student grant tracking',
        'Direct links to application portals and eligibility checklists',
        'AI guidance to draft and review grant proposals',
        'Micro-grants for hardware prototyping and software cloud credits'
      ],
      sampleItems: [
        {
          title: 'Student Innovation Micro-Grant',
          provider: 'Campus Venture Initiative',
          awardOrType: 'Up to $5,000 Equity-free',
          deadline: 'Rolling Submissions',
          tags: ['Hardware', 'Software', 'Student-Led']
        },
        {
          title: 'Youth GreenTech Seed Grant',
          provider: 'Clean Innovation Foundation',
          awardOrType: '$15,000 Development Grant',
          deadline: 'Next Cycle: 45 Days',
          tags: ['Sustainability', 'CleanTech', 'Early Prototype']
        },
        {
          title: 'AI & Data Innovation Fellowship',
          provider: 'Future Tech Alliance',
          awardOrType: '$10,000 + Cloud Credits',
          deadline: 'Spring Cohort',
          tags: ['AI/ML', 'Cloud', 'Research to Product']
        }
      ]
    }
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    badge: 'Competitions',
    iconName: 'Trophy',
    shortDesc: 'Find innovation challenges, startup contests, and university hackathons to showcase your skills and win prizes.',
    details: {
      description: 'Test your solutions against real-world challenges, build cross-disciplinary teams, and gain national recognition.',
      highlights: [
        'Curated university and open-tech innovation contests',
        'Team-finding board to pair engineers with business designers',
        'Judging rubric preparation and pitch deck templates',
        'Prize pools and direct exposure to industry scouts'
      ],
      sampleItems: [
        {
          title: 'National Collegiate Innovation Challenge',
          provider: 'Inter-University Tech Council',
          awardOrType: '$25,000 Prize Pool',
          deadline: 'Registration Open',
          tags: ['National', 'Multi-Track', 'All Majors']
        },
        {
          title: 'Smart Health & MedTech Hackathon',
          provider: 'HealthCare Innovators Forum',
          awardOrType: '$12,000 + Pilot Testing',
          deadline: '3 Weeks Remaining',
          tags: ['HealthTech', 'IoT', 'Bio-engineering']
        },
        {
          title: 'Campus Sustainability Sprint',
          provider: 'EcoCampus Coalition',
          awardOrType: '$8,000 Campus Implementation',
          deadline: 'Open for Teams',
          tags: ['Social Impact', 'Circularity', 'Campus Demo']
        }
      ]
    }
  },
  {
    id: 'mentorship',
    title: 'Mentorship',
    badge: 'Expert Guidance',
    iconName: 'Users',
    shortDesc: 'Connect with experienced professionals, alumni founders, and startup mentors for actionable 1-on-1 advice.',
    details: {
      description: 'Bridge the experience gap with structured mentor matchmaking across engineering, product design, legal, and business.',
      highlights: [
        'Domain-specific matching by industry and technology focus',
        'Office hours for pitch critique, architecture review, and go-to-market',
        'Alumni founder network dedicated to student startups',
        'Preparation roadmaps before every mentor session'
      ],
      sampleItems: [
        {
          title: 'Product Strategy & Validation Track',
          provider: 'Startup Founders Network',
          awardOrType: '1-on-1 Bi-weekly Sessions',
          deadline: 'Matching Weekly',
          tags: ['Product-Market Fit', 'UX', 'Discovery']
        },
        {
          title: 'DeepTech & Hardware Advisory',
          provider: 'Engineering Alumni Council',
          awardOrType: 'Technical Architecture Review',
          deadline: 'Open Schedule',
          tags: ['Embedded Systems', 'Patenting', 'Robotics']
        },
        {
          title: 'Fundraising & Investor Readiness',
          provider: 'Angel Advisors Circle',
          awardOrType: 'Pitch Deck & Financial Modeling',
          deadline: 'Cohort Selection',
          tags: ['Term Sheets', 'Valuation', 'Pitch Training']
        }
      ]
    }
  },
  {
    id: 'incubation',
    title: 'Incubation & Programs',
    badge: 'Accelerate',
    iconName: 'Rocket',
    shortDesc: 'Explore university startup incubators, regional accelerators, and pre-seed entrepreneurship development programs.',
    details: {
      description: 'Transition from campus project to registered startup with incubation infrastructure, legal support, and maker spaces.',
      highlights: [
        'Campus incubator pipeline and mutual credit transfers',
        'Co-working spaces, laboratory access, and prototype workshops',
        'Legal incorporation guidance and intellectual property safeguards',
        'Demo Day access with angel investors and industry partners'
      ],
      sampleItems: [
        {
          title: 'University Venture Launchpad (UVL)',
          provider: 'Campus Entrepreneurship Cell',
          awardOrType: '6-Month Structured Program',
          deadline: 'Fall & Spring Admissions',
          tags: ['Co-Working', 'Legal Aid', 'Seed Pathway']
        },
        {
          title: 'Student Pre-Accelerator Cohort',
          provider: 'Regional Innovation Park',
          awardOrType: '12-Week Intensive Sprint',
          deadline: 'Upcoming Cohort',
          tags: ['Customer Validation', 'Demo Day', 'Mentors']
        },
        {
          title: 'Hardware & IoT Maker Residency',
          provider: 'Advanced FabLab Network',
          awardOrType: 'Full Lab & 3D Prototyping Access',
          deadline: 'Rolling Review',
          tags: ['Rapid Prototyping', 'CAD', 'PCB Fabrication']
        }
      ]
    }
  }
];

export const AI_CAPABILITIES: AICapability[] = [
  {
    id: 'idea-evaluator',
    name: 'Idea Evaluator',
    shortDesc: 'Analyze feasibility, uniqueness, and market viability of your concept.',
    iconName: 'Scale',
    sampleQuestion: 'How can I turn my college project into a startup?',
    sampleResponse: {
      overview: 'Transforming a college project into a commercial startup requires shifting focus from technical implementation to customer problem-solving.',
      steps: [
        {
          title: '1. Validate Problem & Target Customer',
          desc: 'Interview 15-20 potential users outside your university. Confirm whether the pain point you solved for class is urgent enough that people will actively use or pay for it.'
        },
        {
          title: '2. Check Intellectual Property (IP)',
          desc: 'Review your college IP policy if you built the project using campus grants or specialized university equipment. Ensure you have clear ownership or an incubation agreement.'
        },
        {
          title: '3. Build a Minimum Viable Prototype (MVP)',
          desc: 'Strip down the academic project to its single core feature that delivers immediate value. Deploy a working demo that real users can test within 2 minutes.'
        },
        {
          title: '4. Leverage Student Grant Competitions',
          desc: 'Apply to student hackathons, innovation challenges, and campus entrepreneurship grants to secure initial non-dilutive funding without giving away equity.'
        }
      ],
      aiTip: 'Recommendation: Apply to the "Campus Venture Initiative" grant on Innovator X Hub to secure initial prototyping support.'
    }
  },
  {
    id: 'idea-generator',
    name: 'Idea Generator',
    shortDesc: 'Discover high-impact ideas at the intersection of your skills and real-world needs.',
    iconName: 'Sparkles',
    sampleQuestion: 'What are impactful problem areas for computer engineering students in sustainability?',
    sampleResponse: {
      overview: 'Here are 3 validated problem areas where engineering students can build high-impact, contest-ready solutions:',
      steps: [
        {
          title: '1. Smart Campus Energy Optimization',
          desc: 'IoT-enabled sensor arrays that analyze real-time HVAC and lighting loads across campus lecture halls to reduce wasted kilowatt-hours.'
        },
        {
          title: '2. AI Waste Sorting & Circularity Assistant',
          desc: 'Computer vision on edge devices (Raspberry Pi/NVIDIA Jetson) mounted over campus sorting bins to guide students and improve recycling purity.'
        },
        {
          title: '3. Urban Microgrid Monitoring Platform',
          desc: 'Decentralized telemetry system providing solar micro-producers with predictive maintenance and peer-to-peer excess energy sharing analytics.'
        }
      ],
      aiTip: 'All three concepts qualify for CleanTech innovation grants currently listed in our Opportunities directory.'
    }
  },
  {
    id: 'business-model',
    name: 'Business Model Assistant',
    shortDesc: 'Explore sustainable business models, pricing strategies, and revenue opportunities.',
    iconName: 'TrendingUp',
    sampleQuestion: 'What business model works best for a student-focused educational tool?',
    sampleResponse: {
      overview: 'For student tools, balancing low student purchasing power with sustainable revenue is key. The two most successful models are:',
      steps: [
        {
          title: '1. B2C Freemium with Campus Ambassador Virality',
          desc: 'Offer essential productivity or collaboration features 100% free. Gate premium team workspaces or advanced AI tokens behind an affordable student tier ($3-$5/month).'
        },
        {
          title: '2. B2B / B2Institution (University Department Licensing)',
          desc: 'Package the tool as an institutional platform for professors, labs, or career centers. Universities pay via annual departmental software budgets.'
        },
        {
          title: '3. Sponsor-Supported Industry Challenges',
          desc: 'Partner with enterprise tech companies looking to recruit top engineering talent by hosting sponsored challenges on your tool.'
        }
      ],
      aiTip: 'Pro Tip: Begin with B2C to build rapid campus adoption, then use user metrics to pitch university administrators for departmental licensing.'
    }
  },
  {
    id: 'startup-roadmap',
    name: 'Startup Roadmap',
    shortDesc: 'Generate a step-by-step 90-day execution milestone plan.',
    iconName: 'Map',
    sampleQuestion: 'What should my team achieve in the first 90 days of our student startup?',
    sampleResponse: {
      overview: 'Here is a balanced 90-day sprint designed to fit alongside your university class schedule:',
      steps: [
        {
          title: 'Days 1–30: Customer Discovery & Alignment',
          desc: 'Conduct 20 user discovery interviews, draft the value proposition canvas, and establish team equity/contribution agreements.'
        },
        {
          title: 'Days 31–60: Working Prototype & User Testing',
          desc: 'Build the V1 MVP with no-code or core code. Onboard 15 pilot testers from your campus and gather qualitative feedback logs.'
        },
        {
          title: 'Days 61–90: Showcase & Pre-Seed Application',
          desc: 'Refine product based on pilot usage. Publish your project on Innovator X Hub showcase, enter 2 hackathons, and apply for student incubator cohorts.'
        }
      ],
      aiTip: 'Milestone goal: Reach 50 active weekly users or secure your first incubation interview by Day 90.'
    }
  }
];

export const COMMUNITY_FEATURES: CommunityFeature[] = [
  {
    id: 'share-ideas',
    title: 'Share Your Ideas',
    description: 'Post early-stage concepts, request structured feedback, and brainstorm with ambitious peers across universities.',
    iconName: 'Lightbulb',
    bulletPoints: [
      'Interactive idea canvas with community feedback tags',
      'Constructive peer reviews from students across disciplines',
      'Early validation poll features to gauge campus demand'
    ]
  },
  {
    id: 'showcase-projects',
    title: 'Showcase Your Projects',
    description: 'Build a verified digital portfolio of your hardware prototypes, software apps, and research innovations.',
    iconName: 'Layers',
    bulletPoints: [
      'Visual project profile with demo videos, repos, and live links',
      'Showcase badges for hackathon wins and verified grants',
      'Direct discovery by industry scouts, mentors, and program heads'
    ]
  },
  {
    id: 'collaborate-innovators',
    title: 'Collaborate With Innovators',
    description: 'Assemble your dream team. Find technical co-founders, UI/UX designers, and business operators on campus.',
    iconName: 'UserPlus',
    bulletPoints: [
      'Filter candidates by skills (AI/ML, React, CAD, Business Strategy)',
      'Cross-campus team formation for national hackathons',
      'Safe collaboration agreements and milestone tracking'
    ]
  }
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: '01',
    name: 'IDEA',
    title: 'Spark & Conceptualize',
    description: 'Start with a raw problem. Use Innovator AI to explore angles, brainstorm solutions, and formulate clear hypotheses.',
    actionItem: 'AI Brainstorming & Problem Definition'
  },
  {
    stepNumber: '02',
    name: 'DISCOVER',
    title: 'Explore Opportunities',
    description: 'Scan student grants, upcoming university hackathons, and accelerator programs tailored to your specific domain.',
    actionItem: 'Grant & Challenge Matching'
  },
  {
    stepNumber: '03',
    name: 'VALIDATE',
    title: 'Test & Evaluate',
    description: 'Evaluate technical feasibility, run target audience interviews, and gauge community sentiment on your concept.',
    actionItem: 'Feasibility Scoring & Peer Feedback'
  },
  {
    stepNumber: '04',
    name: 'CONNECT',
    title: 'Mentors & Collaborators',
    description: 'Pair with experienced mentors for domain guidance and recruit student teammates to round out missing skills.',
    actionItem: '1-on-1 Mentorship & Co-founder Pairing'
  },
  {
    stepNumber: '05',
    name: 'DEVELOP',
    title: 'Build the Prototype',
    description: 'Turn your design into a working MVP with cloud credits, maker lab access, and structured execution milestones.',
    actionItem: 'Prototyping & Incubation Support'
  },
  {
    stepNumber: '06',
    name: 'LAUNCH',
    title: 'Showcase & Scale',
    description: 'Present your verified startup at Demo Days, submit to investor pools, and launch into the regional startup ecosystem.',
    actionItem: 'Showcase Launch & Pre-Seed Pathway'
  }
];
