// TIER 1: The Highlight Reel (Interactive Main List)
export const projects = [
    {
        id: 1,
        title: "Voice of Customer",
        role: "Level AI",
        category: "Market Launch • +14% Conversion",
        description: "Launched the LLM-enabled topic discovery engine (Llama 3.1 8B) for millions of conversations. Drove +14% POC-to-paid conversion across ~110 accounts in 6 months.",
        visualType: "network-graph",
        isFeatured: true,
        hasCaseStudy: true,
        caseStudy: {
            problem: "Enterprise contact centers were drowning in millions of unstructured conversations with no way to extract actionable insights. Existing tools required manual tagging, couldn't scale, and missed the nuanced topics that actually drive customer behavior.",
            solution: "I envisioned and led the launch of an LLM-powered topic discovery engine built on Llama 3.1 8B. The system uses teacher-student distillation—a 70B model generates gold-standard classifications, which train a smaller 8B model for production inference. Custom topic hierarchies are created per tenant, and the model extracts specific 'evidence' phrases that triggered each classification, making results explainable and auditable.",
            impact: [
                "+14% POC-to-paid conversion across ~110 accounts in 6 months",
                "Root-cause analysis for millions of conversations at scale",
                "Configurable topic hierarchies per customer vertical",
                "Explainable AI: evidence highlighting for every classification"
            ],
            techStack: ["Llama 3.1 8B", "Llama 70B (teacher)", "Qwen 72B", "DPO fine-tuning", "Custom topic hierarchies"]
        }
    },
    {
        id: 2,
        title: "Core AI Platform",
        role: "Level AI",
        category: "Platform Architecture • 7 AI Models",
        description: "Owner of the platform brain: ASR, Intent Detection, Sentiment, AutoQA, Summarization, and zero-trust PII/PCI redaction. Powers automation for millions of conversations.",
        visualType: "neural-layers",
        hasCaseStudy: true,
        caseStudy: {
            problem: "Level AI needed a unified, production-grade AI stack that could handle speech recognition, intent detection, sentiment analysis, quality assurance, summarization, and data security—all at enterprise scale with strict compliance requirements.",
            solution: "I own the end-to-end AI platform comprising 7 specialized models: ASR (NVIDIA Conformer/Parakeet) for speech-to-text, Intent Detection (Llama 3.2 3B + Retrieve-Rerank), Sentiment/iCSAT (Llama 3.2 1B + DeBERTa), Redaction (Llama 3.2 3B for zero-trust PII/PCI masking), Summarization (Phi-3 Mini 4k), AutoQA (Mistral 7B + Gemma), and VoC (Llama 3.1 8B). Each model is fine-tuned for contact center conversations with explainability built in.",
            impact: [
                "Powers automation for millions of conversations daily",
                "Zero-trust PII/PCI redaction with dynamic entity recognition",
                "Led 45+ cross-functional stakeholders across 3 time zones",
                "Achieved quarterly OKRs in consecutive quarters"
            ],
            techStack: ["NVIDIA Conformer/Parakeet", "Llama 3.2 (1B, 3B)", "Llama 3.1 8B", "Mistral 7B", "Gemma", "Phi-3 Mini", "DeBERTa"]
        }
    },
    {
        id: 3,
        title: "Agentic RAG",
        role: "Level AI",
        category: "GenAI • 70% Adoption",
        description: "Shipped action-oriented chatbots using RAG pipelines. Achieved ~70% active customer usage within 3 months of launch.",
        visualType: "chat-stream",
        hasCaseStudy: true,
        caseStudy: {
            problem: "Customers needed a way to query their conversation data directly—asking questions and getting immediate, actionable answers rather than navigating dashboards and reports. Traditional search wasn't cutting it.",
            solution: "I shipped RAG-powered agentic chatbots that leverage millions of data points to answer user queries and take actions on their behalf. The system retrieves relevant conversation segments, grounds responses in actual data, and can trigger workflows based on user intent.",
            impact: [
                "~70% of customers actively using within first 3 months of launch",
                "Direct answers to user queries grounded in their own data",
                "Action-oriented: chatbots can trigger workflows, not just answer questions",
                "Reduced time-to-insight from hours to seconds"
            ],
            techStack: ["RAG pipeline", "Vector embeddings", "LLM orchestration", "Action frameworks"]
        }
    },
    {
        id: 4,
        title: "Intelligence Search",
        role: "Contify",
        category: "Scale • 5K DAUs • 2.3x Usage",
        description: "Scaled enterprise search to 5K DAUs with 2.3x search volume growth. Built the LLM pipeline that surfaced key business drivers, fueling +18% upsell revenue.",
        visualType: "search-focus"
    },
    {
        id: 5,
        title: "Text-to-Boolean Search",
        role: "Contify",
        category: "RAG + LLM • NPS -5 → +31",
        description: "Transformed complex boolean search into natural language queries using RAG + LLM. Drove NPS from -5 to +31, dramatically improving user satisfaction.",
        visualType: "search-focus",
        hasCaseStudy: true,
        caseStudy: {
            problem: "Contify's Advanced Search relied on complex boolean operators that most users couldn't master. Power users loved it, but the majority struggled—resulting in an NPS score of -5 for the feature. This was a major barrier to customer retention.",
            solution: "I spearheaded Text-to-Boolean Search using a RAG approach with an LLM and our Advanced Search Knowledge Base. Users type natural language queries like 'show me articles about Tesla from last week excluding earnings reports,' and the system translates it into precise boolean syntax. The LLM understands intent; the knowledge base ensures accuracy.",
            impact: [
                "NPS score jumped from -5 to +31",
                "Dramatically improved user satisfaction with search",
                "Contributed directly to customer retention metrics",
                "Made power-user features accessible to everyone"
            ],
            techStack: ["RAG", "LLM", "Advanced Search Knowledge Base", "Boolean query generation"]
        }
    },
    {
        id: 6,
        title: "LLM Insights Engine",
        role: "Contify",
        category: "GenAI • 8% Retention • 5% Upsell",
        description: "Built LLM-powered workflows to categorize qualitative data and generate actionable insights. Launched RAG chatbot for direct answers. Drove 8% retention lift and 5% upsell.",
        visualType: "chat-stream"
    },
    {
        id: 7,
        title: "Insightsfirst",
        role: "Evalueserve",
        category: "0→1 • 20+ Customers in Year 1",
        description: "Built Evalueserve's flagship B2B SaaS platform from ideation to launch. First enterprise customer in 3 months, 20+ in year one.",
        visualType: "network-graph",
        hasCaseStudy: true,
        caseStudy: {
            problem: "Evalueserve needed to transition from services to product. There was no existing platform—just a vision for a B2B SaaS insights tool. The challenge was to define, validate, and launch an MVP that could win enterprise customers.",
            solution: "I led the 0→1 development of 'Insightsfirst' from concept to launch. This involved collaborating with leadership to define the MVP, validating through internal and external testing, and partnering with design and engineering to build. Post-launch, I drove iteration based on customer feedback and coordinated cross-functional GTM (sales enablement, onboarding playbooks) to scale adoption.",
            impact: [
                "First enterprise customer secured in just 3 months post-launch",
                "20+ enterprise customers within the first 12 months",
                "Established product-market fit for Evalueserve's SaaS business",
                "Created GTM playbooks that accelerated new-logo acquisition"
            ],
            techStack: ["MVP definition", "UX design", "Enterprise SaaS", "GTM strategy"]
        }
    },
    {
        id: 8,
        title: "CRM Personalization",
        role: "Analec",
        category: "NPS 20s → 60s • +18% Usage",
        description: "Launched email personalization features for diverse cultural backgrounds. NPS jumped from 20s to 60s, with 18% increase in outbound email usage.",
        visualType: "neural-layers"
    }
];

// TIER 2: The History (Clean Archive List)
export const workHistory = [
    {
        year: "2025 — Present",
        company: "Level AI",
        role: "Senior AI Product Manager",
        impact: "Own the core AI stack: 7 models powering ASR, VoC, Intent, Sentiment, Redaction, Summarization & AutoQA. Launched Voice of Customer (+14% conversion) and Agentic RAG (70% adoption in 90 days). Led 45+ stakeholders across 3 time zones."
    },
    {
        year: "2022 — 2025",
        company: "Contify",
        role: "Head of Product",
        impact: "Scaled enterprise search to 5K DAUs with 2.3x usage growth. Built LLM content pipeline driving +18% upsell revenue. Launched 20+ integrations. Grew PM org from 1 to 7."
    },
    {
        year: "2020 — 2022",
        company: "Analec",
        role: "Product Manager",
        impact: "Instituted continuous discovery, lifting CSAT from 55% → 80%. Shipped CRM personalization (+18% usage, +30 NPS). Launched reporting module driving +12% new customer conversions."
    },
    {
        year: "2015 — 2020",
        company: "Evalueserve",
        role: "Product Owner",
        impact: "Built 'Insightsfirst' from 0→1: first enterprise customer in 3 months, 20+ in year one. Coordinated cross-functional GTM to scale adoption across early accounts."
    }
];

// Selected Achievements for About Page
export const achievements = [
    {
        company: "Level AI",
        items: [
            "Launched Voice of Customer: +14% POC-to-paid conversion across 110 accounts",
            "70% customer adoption of Agentic RAG in 90 days",
            "Own 7 AI models powering millions of conversations"
        ]
    },
    {
        company: "Contify",
        items: [
            "NPS -5 → +31 with Text-to-Boolean Search (RAG + LLM)",
            "Built PM org from 1 → 7; hired and mentored 3 APMs",
            "20+ integrations driving 10% retention boost"
        ]
    },
    {
        company: "Analec",
        items: [
            "CSAT 60% → 88% through structured customer discovery",
            "Email personalization NPS: 20s → 60s"
        ]
    },
    {
        company: "Evalueserve",
        items: [
            "0→1: First customer in 3 months, 20+ in year one"
        ]
    }
];
