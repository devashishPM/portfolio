// TIER 1: The Highlight Reel (Interactive Main List)
export const projects = [
    {
        id: 1,
        title: "Voice of Customer",
        role: "Level AI",
        category: "Market Launch • +14% Conversion",
        description: "Launched VoC 2.0: an LLM-powered insight discovery engine (8B LLM) with dual-persona UX for leaders and analysts. +14% POC-to-paid conversion across ~110 accounts in 6 months.",
        visualType: "network-graph",
        isFeatured: true,
        hasCaseStudy: true,
        hasVoCPipeline: true,
        caseStudy: {
            problem: "Enterprise contact centers were drowning in millions of unstructured conversations with no way to extract actionable insights. Industry-standard survey sampling only captured 2-5% of interactions, missing the vast majority of customer signals. Existing tools required manual tagging, couldn't scale, and delivered raw metrics without explaining *what* was happening or *why*—leaving leaders without the narrative intelligence needed to drive decisions.",
            solution: "I envisioned and led the launch of VoC 2.0, an LLM-powered insight discovery engine built on an 8B parameter model that analyzes 100% of conversations. The system uses teacher-student distillation—a 70B model generates gold-standard classifications, which train a smaller 8B model for production inference. I designed a 4-level taxonomy architecture (Head Topics → Subtopics → Concern Themes → Customer Concerns) that structures unstructured data into actionable hierarchies. The UX was explicitly bifurcated for two personas: 'Discoverers' (leadership) get story-first dashboards with AI-generated narrative summaries explaining trends and root causes, while 'Navigators' (analysts) get deep data grids for slicing by metadata and metrics. The model extracts specific 'evidence' phrases that triggered each classification, making results explainable and auditable.",
            impact: [
                "+14% POC-to-paid conversion across ~110 accounts in 6 months",
                "Root-cause analysis for millions of conversations at scale",
                "Configurable topic hierarchies per customer vertical",
                "Explainable AI: evidence highlighting for every classification",
                "Dual-persona UX serving leadership 'Discoverers' and analyst 'Navigators'",
                "AI-generated narrative summaries moving from raw metrics to 'so-what' insights"
            ],
            techStack: ["8B LLM", "70B Teacher LLM", "72B LLM", "DPO fine-tuning", "Custom topic hierarchies", "Teacher-student distillation", "Semantic clustering"]
        }
    },
    {
        id: 2,
        title: "Core AI Platform",
        role: "Level AI",
        category: "Platform Architecture • 6 AI Models",
        description: "Owner of the platform brain: ASR, Intent Detection, iCSAT, AutoQA, Summarization, and zero-trust PII/PCI redaction. Processing 20M+ calls monthly across enterprise contact centers.",
        visualType: "neural-layers",
        hasCaseStudy: true,
        hasInteractivePipeline: true,
        caseStudy: {
            problem: "Enterprise contact centers needed a unified, production-grade AI stack that could handle speech recognition, intent detection, customer satisfaction inference, quality assurance, summarization, and compliance—all at massive scale with strict accuracy requirements.",
            solution: "I own the end-to-end AI platform comprising 6 specialized models, each fine-tuned for contact center conversations with explainability built in. From defining requirements and collaborating with MLEs on model architecture, to owning evaluation frameworks and shipping production UX—I drove the full lifecycle. A key innovation: I invented the Inferred CSAT methodology, achieving 0.71 correlation with actual survey scores while expanding coverage from 5% to 100% of conversations.",
            impact: [
                "20M+ calls processed monthly across 6 specialized AI models",
                "Invented iCSAT: 0.71 correlation with surveys, 20× coverage lift (5% → 100%)",
                "97% recall on PII/PCI redaction with dynamic entity recognition",
                "88% accuracy on automated QA across all rubrics",
                "8-10% Word Error Rate on 7M hours of audio monthly",
                "Led 10+ MLEs and engineers; partnered with leadership and GTM for customer evangelism"
            ],
            techStack: ["Conformer-based ASR", "Small Language Models (1B–4B)", "Instruction-tuned LLMs (7B)", "Transformer Encoders", "Preference Optimization", "Retrieve-Rerank Pipelines"]
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
        id: 6,
        title: "LLM Insights Engine",
        role: "Contify",
        category: "GenAI • 85% Adoption • 8% Retention Lift",
        description: "Built Knowledge Graph + LLM system to extract insights from millions of news articles. Launched Ask Athena, a RAG chatbot for instant answers. 85% customer adoption, 8% retention lift, 5% upsell.",
        visualType: "chat-stream",
        isFeatured: true,
        hasCaseStudy: true,
        caseStudy: {
            problem: "Enterprise customers were spending hours manually reading articles to extract competitive intelligence. They demanded faster summaries and answers, but the team couldn't deliver at scale. Generic AI tools like ChatGPT hallucinated and fabricated sources—unusable for enterprise intelligence where accuracy is non-negotiable.",
            solution: "I led the vision and launch of Contify Insights, later evolving into Athena—an Agentic AI insights engine. Built a Knowledge Graph mapping relationships between companies, topics, and 30+ business event types (which I defined based on customer research). Orchestrated a multi-model LLM strategy using frontier model families for different tasks. Launched 'Ask Athena,' a RAG chatbot querying both the customer's curated newsfeed and the Knowledge Graph, delivering grounded, hallucination-free answers. Led a team of 20+ engineers and designers, and partnered with GTM for launch.",
            impact: [
                "85% of customers actively using Insights within 6 months of launch",
                "8% retention lift in the first 6 months post-launch",
                "5% upsell revenue from customers upgrading to access Insights/Athena",
                "Defined 30+ business event types powering automated extraction"
            ],
            techStack: ["Knowledge Graphs", "Frontier LLMs", "RAG pipeline", "Multi-model orchestration", "Agentic workflows"]
        }
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

