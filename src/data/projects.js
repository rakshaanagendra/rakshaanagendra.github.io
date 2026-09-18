const projects = [
  {
    id: "rag-multi-agent",
    title: "Production RAG & Multi-Agent AI System",
    tagline:
      "A production-pattern RAG + multi-agent system engineered to solve what naive PDF → embed → search → LLM pipelines get wrong.",
    highlights: [
      "Hybrid dense (FAISS) + sparse (BM25) retrieval fused via 2-level Reciprocal Rank Fusion, with cross-encoder reranking (BAAI/bge-reranker-base) as a final precision pass.",
      "A dual-signal domain gate (relevance score + topic-fit embedding) rejects out-of-domain queries before generation — raised OOD detection from ~78% to 100% (52/52 test queries).",
      "A 3-node LangGraph pipeline (Research → Writer → Critic) with an LLM-as-Judge grounding check and a bounded retry/abstain loop, so no ungrounded answer ships.",
      "Confidence-aware routing and context compression cut unnecessary retrieval retries by 40% and improved retry effectiveness by 66%.",
      "Four independent evaluation harnesses (retrieval quality, critic reliability, tool-selection accuracy, agent loop-efficiency), served via FastAPI with SSE streaming, Dockerized, CI/CD'd to Docker Hub, traced in MLflow, and exposed as an MCP tool.",
    ],
    tech: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "FAISS",
      "BM25",
      "Cross-Encoder Reranking",
      "Docker",
      "GitHub Actions",
      "MLflow",
      "MCP",
      "Groq",
      "Ollama",
    ],
    metrics: [
      { label: "OOD Detection", value: "100%" },
      { label: "MRR (in-domain)", value: "0.754" },
      { label: "Retry Effectiveness", value: "+66%" },
      { label: "Critic Agreement", value: "92.9%" },
    ],
    github: "https://github.com/rakshaanagendra/Production-RAG-MultiAgentSystem",
  },
  {
    id: "ai-redteam-harness",
    title: "Autonomous Resilience Testing Engine",
    tagline:
      "A self-healing red-team harness that attacks its own target, proves a secret can never leave the wire, and patches the vulnerability it just found — automatically.",
    highlights: [
      "A closed LangGraph loop — probe → evaluate → patch → self-correct — attacks a bundled helpdesk assistant with an 11-vector probe catalogue of instruction-override, encoding-escape, and social-engineering techniques (OWASP LLM01-style).",
      "A deterministic Safe-Egress ASGI boundary scans every response and header against the live secret in exact, encoded, reversed, and fragment form — a compromised model reply is scrubbed before it ever reaches the wire.",
      "When a probe gets through, the healer rewrites the target's own defensive policy layer, then compiles, restarts, and re-runs a smoke suite in a closed loop, with bounded self-correction and rollback-to-last-known-good if a patch breaks the target.",
      "Hard runway guards — token/cost budget, iteration cap, and deadlock detection — checkpoint and halt the loop for human review rather than letting it run away.",
      "Ships a live Tailwind/Chart.js dashboard and an MCP server exposing the identical, safety-railed operations to external agents; a full mock mode runs the entire attack-to-heal loop for zero API spend.",
    ],
    tech: [
      "LangGraph",
      "FastAPI",
      "Anthropic Claude",
      "MCP",
      "WebSockets",
      "Pytest",
      "Uvicorn",
    ],
    metrics: [
      { label: "Probe Catalogue", value: "11 vectors" },
      { label: "Test Suite Spend", value: "$0 (mock mode)" },
      { label: "Egress Guarantee", value: "Deterministic" },
    ],
    github: "https://github.com/rakshaanagendra/ai-redteam-harness",
  },
  {
    id: "agent-chaos-mesh",
    title: "Agent Chaos Mesh",
    tagline:
      "If the tools an agent depends on start lying, stalling, or duplicating — does the system detect it, isolate the damage, and heal?",
    highlights: [
      "A 3-agent e-commerce order pipeline (Planner → Inventory → Shipping) talks to a warehouse MCP server over real JSON-RPC, orchestrated end-to-end by a LangGraph state machine.",
      "A chaos scheduler systematically injects 4 fault types — schema mutation, latency, packet drop, and message duplication — across every node and fault combination on the live transport.",
      "Per-node circuit breakers (CLOSED → OPEN → HALF_OPEN → CLOSED) trip on sliding failure/slow-call windows, reroute traffic to fallback agents, hot-patch timeouts and retries live, and self-heal through half-open recovery probes.",
      "Idempotency-aware MCP tools and gateway-level dedupe prevent double-booking even under concurrent duplicate delivery.",
      "A real-time FastAPI + WebSocket dashboard renders an animated network map, live fuse states, and a manual chaos console — fully deterministic and offline, validated by 15 passing async tests.",
    ],
    tech: [
      "LangGraph",
      "MCP",
      "FastAPI",
      "WebSockets",
      "Pydantic",
      "anyio",
      "Pytest",
    ],
    metrics: [
      { label: "Fault Types Modeled", value: "4" },
      { label: "Tests Passing", value: "15 / 15" },
      { label: "External API Calls", value: "0 — fully offline" },
    ],
    github: "https://github.com/rakshaanagendra/agent-chaos-mesh",
  },
];

export default projects;
