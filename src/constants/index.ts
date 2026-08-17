import { backend, frontend, aiAutomation, workoutTracker, portfolioPreview } from '../assets';
import { python, sql, css, git, html, javascript, nodejs, reactjs, tailwind, typescript, wordpress, php, docker } from '../assets';
import { claude, mcp, n8n, obsidian, openai, notion, cloudflare } from '../assets';
import { michiganTownshipsShot, shumakerShot, allendaleShot, madisonShot, fiveStarShot, polishedShot, btGoShot } from '../assets';

// Served from public/ instead of Google Drive: no third party dependency, and
// it updates with a deploy rather than a manual upload. Regenerate the PDF from
// ~/Documents/Resume/matthew-nehrt-resume-ai-engineer.html.
export const resumeLink = "/resume.pdf";
export const resumeDownloadLink = "/resume.pdf";

export const aboutMe = `I am a software engineer who builds AI systems. Four years of production experience, currently at CareMetx, where I ship features on an enterprise healthcare platform that medical practices use to manage prior authorizations, benefit verifications, and patient enrollments.
What I care about now is the layer above the code. I design agents, automations, and workflows that take repetitive work off people's plates: agent systems that chain several tools together, MCP integrations, prompt architectures that hold up against real inputs, and pipelines that run start to finish without supervision. I use AI coding agents daily inside a regulated production codebase, which means I have had to build the discipline that goes with them, reviewing every generated change against architecture rules, security requirements, and isolation constraints before it merges.
Before that I delivered more than 20 custom sites and web applications at Shumaker Technology Group and kept hosting healthy for over 500 client sites. That is where I learned to think in systems instead of scripts, and it is still the foundation under everything I build: React and TypeScript at the front, PHP, Python, SQL, and serverless infrastructure behind it.
I am looking for a role where building with AI is the job itself rather than a side effect of it.`;

export const skills = [
    {title: "AI & Automation", icon: aiAutomation},
    {title: "Full Stack Web", icon: frontend},
    {title: "APIs & Integrations", icon: backend}
];

export const aiStack = [
    {title: 'Claude / Claude Code', icon: claude, invert: false },
    {title: 'Model Context Protocol', icon: mcp, invert: true },
    {title: 'n8n', icon: n8n, invert: false },
    {title: 'Obsidian', icon: obsidian, invert: false },
    {title: 'OpenAI / Whisper', icon: openai, invert: true },
    {title: 'Notion', icon: notion, invert: true }
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false },
    {title: 'Node.js', icon: nodejs, invert: true },
    {title: 'Tailwind', icon: tailwind, invert: false },
    {title: 'Cloudflare Workers', icon: cloudflare, invert: false },
    {title: 'Docker', icon: docker, invert: false },
    {title: 'Git', icon: git, invert: false },
    {title: 'Wordpress', icon: wordpress, invert: false }
];

export const languages = [
    {title: 'Python', icon: python, invert: false },
    {title: 'Javascript', icon: javascript, invert: false },
    {title: 'TypeScript', icon: typescript, invert: false },
    {title: 'PHP', icon: php, invert: true },
    {title: 'SQL', icon: sql, invert: true },
    {title: 'HTML', icon: html, invert: false },
    {title: 'CSS', icon: css, invert: false }
];

/**
 * AI and automation systems. `status` is deliberate: it separates what runs
 * every day from what exists as design work, so nothing on the page overstates
 * itself.
 */
export const aiProjects = [
    {
        title: "AIS-OS, a personal AI operating system",
        status: "Running daily",
        summary: "An agent based operating layer built on Claude Code that runs my engineering and operations work out of a single repository. The point of it is that context and routing live in version control instead of in my head.",
        highlights: [
            "Eleven custom skills that collapse a recurring multi step workflow into one command",
            "Task routing that resolves a request to the correct repository, then pulls the matching ticket and meeting notes before any work starts",
            "MCP server integrations for issue tracking, documents, calendar, and browser control",
            "Session lifecycle hooks that carry state across otherwise isolated agent sessions, so work done in one repository is visible from another",
            "State and decision files that survive a context window reset, which is what keeps a long running agent useful instead of amnesiac"
        ],
        stack: ["Claude Code", "MCP", "Agent skills", "Bash", "Git hooks"]
    },
    {
        title: "AI receptionist for service businesses",
        status: "Built and marketed",
        summary: "An inbound voice agent built for service businesses, plumbers and HVAC companies and remodelers, where a missed call is a lost job and nobody is free to answer the phone. I designed the conversation architecture, then productized it end to end: who it is for, how it is priced, and the marketing site that sells it.",
        highlights: [
            "Layered agent specification covering identity, objective, and what counts as a successful call",
            "Urgency triage ahead of everything else, with an emergency path that transfers to a human rather than booking",
            "A required fields gate so the agent cannot book without service address, callback number, and job details",
            "Tool calls for calendar booking, contact record updates, and call transfer",
            "Voice specific style constraints, one question at a time and no system vocabulary, because a prompt that reads well silently sounds robotic out loud",
            "Designed and built the product site that explains and sells the system"
        ],
        stack: ["Prompt engineering", "Conversation design", "Voice AI", "Tool calling"],
        link: "https://greatlakescreative.co",
        linkLabel: "See the product site"
    },
    {
        title: "Local meeting intelligence pipeline",
        status: "Running daily",
        summary: "Meeting capture, transcription, and summarization that runs entirely on my machine. Built on device because the alternative was sending a healthcare employer's calls to a third party note taker, which is not a tradeoff worth making.",
        highlights: [
            "A watcher that detects an active microphone and starts multi track capture on its own",
            "Whisper transcription with voice activity detection, which is what keeps silence from being hallucinated into text",
            "Speaker attribution across tracks to work out who actually said what",
            "Summaries generated into a fixed shape, leading with my action items and what other people owe me",
            "Any past meeting can be re summarized against a new question without re recording it"
        ],
        stack: ["Python", "Bash", "Whisper", "ffmpeg", "launchd", "Claude"]
    },
    {
        title: "Serverless intake and follow up backend",
        status: "In production across client sites",
        summary: "One Cloudflare Worker on D1 that handles form submissions for every site I run, separated by a tenant slug, with scheduled follow up email sequences on top of it. It replaced a per site third party form service.",
        highlights: [
            "Multiple tenants behind a single deployment, routed by a site identifier on the request",
            "D1 as the submission store so every lead is queryable rather than living only in an inbox",
            "Transactional email delivery through Resend, with spam placement verified per domain",
            "Cron triggered follow up sequences that fire on a schedule after a site goes live",
            "Runs inside the free tier, which is the constraint that shaped the whole design"
        ],
        stack: ["Cloudflare Workers", "D1", "Cron triggers", "Resend", "JavaScript"]
    }
];

export const websites = [
    {
        title: 'Five Star Renovations',
        context: 'Client project',
        description: 'Marketing site for an Indiana custom home builder and remodeler. Static build deployed on Cloudflare Workers, with the quote form posting into a shared serverless backend that stores the submission and emails the lead through.',
        stack: [html, css, javascript, cloudflare],
        link: 'https://fivestarrenovationsindiana.com/',
        media: fiveStarShot
    },
    {
        title: 'Polished Cleaning Co',
        context: 'Client project',
        description: 'Site for an Indianapolis cleaning company, built around one primary action. Every section routes to a quote request or a phone call, and the form runs through the same serverless intake backend.',
        stack: [html, css, javascript, cloudflare],
        link: 'https://polishedcleaningcollc.com/',
        media: polishedShot
    },
    {
        title: 'BT-Go Travel',
        context: 'Client project',
        description: 'Site for an independent travel advisor. The monthly deals and destination guide sections are driven by published Google Sheets fetched as CSV at page load, so the owner updates live content from a spreadsheet and never needs a developer. Consultations book through an embedded scheduler.',
        stack: [html, css, javascript, cloudflare],
        link: 'https://btgotravel.com/',
        media: btGoShot
    },
    {
        title: 'Michigan Townships Association',
        context: 'Shumaker Technology Group',
        description: 'Member facing work on the state association site, including the secure members portal and an API integration with Impexium, their membership management platform, so member records stay in sync between the two systems instead of being maintained twice.',
        stack: [php, sql, javascript, wordpress],
        link: 'https://michigantownships.org/',
        media: michiganTownshipsShot
    },
    {
        title: 'Allendale Charter Township',
        context: 'Shumaker Technology Group',
        description: 'Municipal site built around the handful of things residents actually arrive looking for: searchable meeting minutes, permit and license forms, payments, and department contacts. Custom WordPress build on PHP templates.',
        stack: [php, javascript, css, wordpress],
        link: 'https://allendalemi.gov/',
        media: allendaleShot
    },
    {
        title: 'Madison Charter Township',
        context: 'Shumaker Technology Group',
        description: 'Township site with a news feed, events calendar, and online forms for permits and services, structured so a resident landing from a search result finds the right page without hunting through navigation.',
        stack: [php, javascript, css, wordpress],
        link: 'https://madisontwpmi.gov/',
        media: madisonShot
    },
    {
        title: 'Shumaker Technology Group',
        context: 'Employer website',
        description: 'Company site for the agency, covering marketing pages, the project portfolio, and the inbound quote and contact flow. Built and maintained on WordPress with custom PHP templates.',
        stack: [php, javascript, css, wordpress],
        link: 'https://www.shumakergroup.com/',
        media: shumakerShot
    }
]

export const projects = [
    {
        title: "Custom Workout Generator",
        description: "A workout generation app that builds personalized training plans from a rule based engine, covering every experience level and whether someone is training in a gym or at home. Workouts persist client side through the LocalStorage API. Reached over 100 weekly users.",
        stack: [javascript, html, css, reactjs],
        link: 'https://workouttracket.netlify.app/',
        source: "https://github.com/nehrtmat/workout-tracker",
        media: workoutTracker
    },
    {
        title: 'This portfolio',
        description: 'Built with React, TypeScript, and Tailwind on Vite. Light and dark themes, a tilt reactive card layer, and the site previews above are build time captures rather than live embeds, since every host worth linking to blocks framing.',
        stack: [reactjs, tailwind, typescript],
        link: 'https://matthewnehrt.netlify.app/',
        source: "https://github.com/nehrtmat/Portfolio",
        media: portfolioPreview
    }
]
