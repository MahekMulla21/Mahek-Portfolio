// ============================================================
// MAHEK ASIF MULLA — PORTFOLIO  (Project version of App.jsx)
// ============================================================
// USE THIS when running as a proper Vite/CRA project.
// Put your photo at:  src/assets/mahek.jpeg
// Then run:  npm install && npm run dev
// ============================================================

import { useState, useEffect, useRef } from "react";
import mahekPhoto from "./assets/mahek.jpeg"; // ← your photo here

// ── DATA ─────────────────────────────────────────────────────
const meta = {
  name: "Mahek Asif Mulla",
  firstName: "Mahek",
  middleName: "Asif",
  lastName: "Mulla",
  role: "Full-Stack Developer & AI Enthusiast",
  tagline:
    "crafting AI-powered web products with React, FastAPI and modern LLMs.",
  bio: "I build production-grade web applications that quietly weave large language models into real business workflows — from procure-to-pay automation to data-rich dashboards. Currently pursuing my B.E. in Computer Engineering (GPA 8.50/10), shipping with React, FastAPI, and modern LLMs.",
  location: "Pune, Maharashtra · India",
  email: "mahekmulla491@gmail.com",
  github: "https://github.com/", // ← your GitHub URL
  linkedin: "https://linkedin.com/in/", // ← your LinkedIn URL
  cgpa: "8.50",
  availability: "Open to internships & freelance",
  availabilityPeriod: "Available · Q1 2026",
};

const skills = [
  {
    category: "Languages",
    items: [
      "Python",
      "JavaScript",
      "Java",
      "C++",
      "SQL",
      "Node.js",
      "React.js",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: ["MERN Stack", "FastAPI", "Express.js", "Pandas", "NumPy"],
  },
  {
    category: "AI & Data",
    items: [
      "LLMs",
      "Llama 3",
      "Prompt Engineering",
      "OCR / Data Extraction",
      "REST APIs",
      "JSON Processing",
    ],
  },
  {
    category: "Databases & Tools",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Power BI", "MS Excel"],
  },
  {
    category: "Platforms",
    items: [
      "VS Code",
      "GitHub",
      "Git",
      "Postman",
      "Jupyter Notebook",
      "Google Colab",
      "XAMPP",
    ],
  },
  {
    category: "Concepts",
    items: [
      "DSA",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "Backend Dev",
      "Workflow Automation",
    ],
  },
];

const projects = [
  {
    year: "2024",
    name: "AI-Powered Procure-to-Pay Automation Platform",
    description:
      "Full-stack enterprise app automating end-to-end P2P workflows across 5+ document types (MSA, SOW, PR, PO, Invoice). Integrated Llama 3 via Ollama for intelligent document classification and structured data extraction.",
    stats: [
      "~60% manual review reduction",
      "10+ REST API endpoints",
      "6+ procurement entities",
      "5+ document types",
    ],
    tech: ["React.js", "FastAPI", "PostgreSQL", "Llama 3", "Ollama", "Python"],
    link: "",
  },
  {
    year: "2024",
    name: "Client Mood Tracker App",
    description:
      "Real-time mood tracking platform with JWT-based authentication, timestamped mood logging, and interactive trend dashboards to visualize sentiment over time.",
    stats: [
      "8+ RESTful API endpoints",
      "Sub-second response times",
      "Concurrent user support",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    link: "",
  },
  {
    year: "2024",
    name: "Payment Transaction Analytics System",
    description:
      "Normalized relational database simulating real-world digital payment processing. Analyzed 1,000+ transaction records to surface success/failure rates, peak activity windows, and user behavior patterns.",
    stats: [
      "1,000+ transaction records",
      "4 normalized tables",
      "Actionable business insights",
    ],
    tech: ["Python", "MySQL", "Pandas"],
    link: "",
  },
  {
    year: "2023",
    name: "MovieOra — Movie Booking System",
    description:
      "End-to-end online ticket booking platform with real-time seat selection across 3+ screens, movie search, and simulated payment processing.",
    stats: ["3+ screens", "5+ relational entities", "Full auth system"],
    tech: ["JavaScript", "PHP", "MySQL", "HTML", "CSS", "XAMPP"],
    link: "",
  },
];

const experience = [
  {
    title: "Remote Web Developer Intern",
    company: "Oasis Infobyte",
    period: "Sep 2025 – Oct 2025",
    points: [
      "Designed and deployed 3 production-ready web projects within a 4-week internship: Landing Page, Portfolio, and Temperature Converter.",
      "Strengthened proficiency in responsive front-end development across all deliverables.",
    ],
  },
];

const education = [
  {
    period: "Aug 2023 – Present",
    degree: "B.E. Computer Engineering",
    school: "Indira College of Engineering and Management, Pune",
    grade: "8.50",
    gradeLabel: "/ 10 GPA",
  },
  {
    period: "Jul 2021 – Jul 2023",
    degree: "Higher Secondary Certificate — Science",
    school: "State Board HSC, Pune",
    grade: "68.17",
    gradeLabel: "%",
  },
  {
    period: "Jul 2020 – Jul 2021",
    degree: "Secondary School Certificate — Science",
    school: "State Board SSC, Pune",
    grade: "86.60",
    gradeLabel: "%",
  },
];

const achievements = [
  {
    icon: "🏆",
    title: "Smart India Hackathon 2025",
    description:
      "Selected to represent college at ICEM Internal Hackathon. Built an AI-driven Train Induction Planning & Scheduling system for Kochi Metro Rail Limited. Awarded Certificate of Participation.",
  },
  {
    icon: "🗃️",
    title: "21 Days SQL Challenge — Indian Data Club",
    description:
      "Earned Certificate of Appreciation for completing 21 consecutive days of SQL problem-solving — complex queries, multi-table joins, subqueries, and real-world data analysis scenarios.",
  },
];

const certifications = [
  {
    name: "SQL Certification",
    issuer: "TestDome",
    detail:
      "Proctored real-time technical assessment in SQL querying, joins, and data analysis.",
  },
  {
    name: "Python for Data Science",
    issuer: "Reliance Foundation",
    detail:
      "Structured training in Python, NumPy, and Pandas for data analysis.",
  },
  {
    name: "Full Stack Development",
    issuer: "NoviTech",
    detail:
      "Intensive masterclass covering front-end (HTML, CSS, JS) and back-end (Node.js, databases).",
  },
];

// ── GLOBAL CSS (injected into <head>) ────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --black: #0a0a0a; --card: #161616; --border: rgba(255,255,255,0.08);
    --white: #f5f0eb; --accent: #d4967a; --muted: rgba(245,240,235,0.45); --green: #4ade80;
    --serif: 'DM Serif Display', serif; --sans: 'Inter', sans-serif; --mono: 'JetBrains Mono', monospace;
  }
  html { scroll-behavior: smooth; }
  body { background: var(--black); color: var(--white); font-family: var(--sans); font-size: 16px; line-height: 1.6; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
  a { color: inherit; text-decoration: none; }
  ::selection { background: var(--accent); color: #0a0a0a; }
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .visible { opacity: 1 !important; transform: translateY(0) !important; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @media (prefers-reduced-motion:reduce) { .reveal { opacity:1; transform:none; } }
  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr !important; padding: 110px 24px 80px !important; }
    .hero-photo { max-width: 340px !important; margin: 0 auto !important; }
    .exp-grid { grid-template-columns: 1fr !important; }
    .section-pad { padding: 80px 24px !important; }
    .nav-wrap { padding: 0 20px !important; }
    footer { flex-direction: column !important; gap: 8px !important; text-align: center !important; padding: 24px !important; }
  }
`;

// ── HOOKS ─────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("visible");
          io.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ── PRIMITIVES ────────────────────────────────────────────────
const Tag = ({ children }) => (
  <span
    style={{
      background: "rgba(255,255,255,0.05)",
      border: "1px solid var(--border)",
      borderRadius: 6,
      padding: "4px 11px",
      fontSize: "0.78rem",
      color: "var(--muted)",
    }}
  >
    {children}
  </span>
);

const SectionHeader = ({ eyebrow, title }) => (
  <div style={{ marginBottom: 48 }}>
    <span
      style={{
        display: "block",
        fontFamily: "var(--mono)",
        fontSize: "0.68rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--accent)",
        marginBottom: 12,
      }}
    >
      {eyebrow}
    </span>
    <h2
      style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.9rem,3.8vw,2.9rem)",
        fontWeight: 400,
        lineHeight: 1.1,
      }}
    >
      {title}
    </h2>
  </div>
);

const Divider = () => (
  <hr
    style={{
      border: "none",
      borderTop: "1px solid var(--border)",
      maxWidth: 1200,
      margin: "0 auto",
    }}
  />
);

const R = ({ children, delay = 0, style = {} }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};

const BtnPrimary = ({ href, children }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: h ? "var(--accent)" : "var(--white)",
        color: "#0a0a0a",
        padding: "13px 28px",
        borderRadius: 100,
        fontSize: "0.88rem",
        fontWeight: 500,
        textDecoration: "none",
        transform: h ? "translateY(-2px)" : "none",
        transition: "background 0.2s, transform 0.15s",
      }}
    >
      {children}
    </a>
  );
};

const BtnGhost = ({ href, children, target, rel }) => {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "transparent",
        color: "var(--white)",
        border: `1px solid ${h ? "rgba(212,150,122,0.6)" : "var(--border)"}`,
        padding: "13px 28px",
        borderRadius: 100,
        fontSize: "0.88rem",
        textDecoration: "none",
        transform: h ? "translateY(-2px)" : "none",
        transition: "border-color 0.2s, transform 0.15s",
      }}
    >
      {children}
    </a>
  );
};

// ── NAVBAR ────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      let cur = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) cur = s.id;
      });
      setActive("#" + cur);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="nav-wrap"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        height: 64,
        background: scrolled ? "rgba(10,10,10,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "var(--serif)",
          fontSize: "1.4rem",
          letterSpacing: "-0.01em",
        }}
      >
        mahek<span style={{ color: "var(--accent)" }}>.</span>
      </a>
      <ul style={{ display: "flex", gap: 36, listStyle: "none" }}>
        {[
          ["#skills", "Skills"],
          ["#work", "Work"],
          ["#path", "Path"],
          ["#contact", "Contact"],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color: active === href ? "var(--white)" : "var(--muted)",
                fontSize: "0.85rem",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="hero-grid"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 400px",
        alignItems: "center",
        gap: 64,
        maxWidth: 1200,
        margin: "0 auto",
        padding: "100px 48px 80px",
      }}
    >
      <div>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: "var(--mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 28,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 32,
              height: 1,
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
          Computer Engineering Student · Pune, India
        </p>
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(3rem,6vw,5.8rem)",
            lineHeight: 1.0,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          {meta.firstName}{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            {meta.middleName}
          </em>
          <br />
          {meta.lastName}
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "1.02rem",
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: 12,
          }}
        >
          <strong style={{ color: "var(--white)", fontWeight: 500 }}>
            Full-Stack Developer &amp; AI Enthusiast
          </strong>{" "}
          — {meta.tagline}
        </p>
        <p
          style={{
            color: "rgba(245,240,235,0.32)",
            fontSize: "0.9rem",
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: 44,
          }}
        >
          {meta.bio}
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 44,
          }}
        >
          <BtnPrimary href="#work">View selected work ↘</BtnPrimary>
          <BtnGhost href="#contact">✉ Get in touch</BtnGhost>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          <a
            href={meta.github}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--muted)",
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--muted)",
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <span
            style={{
              color: "var(--muted)",
              fontSize: "0.82rem",
              display: "flex",
              alignItems: "center",
              gap: 5,
              marginLeft: "auto",
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            </svg>
            {meta.location}
          </span>
        </div>
      </div>

      <div className="hero-photo" style={{ position: "relative" }}>
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 16,
              left: -16,
              background: "rgba(14,14,14,0.92)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(10px)",
              borderRadius: 12,
              padding: "12px 18px",
              display: "flex",
              alignItems: "baseline",
              gap: 6,
              zIndex: 2,
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                color: "var(--muted)",
              }}
            >
              CGPA
            </span>
            <span
              style={{
                fontFamily: "var(--serif)",
                fontSize: "2rem",
                color: "var(--white)",
              }}
            >
              {meta.cgpa}
            </span>
            <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>
              /10
            </span>
          </div>
          <img
            src={mahekPhoto}
            alt="Mahek Asif Mulla"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
          <div
            style={{
              padding: "18px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  marginBottom: 3,
                }}
              >
                {meta.availabilityPeriod}
              </div>
              <div
                style={{
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "var(--white)",
                }}
              >
                {meta.availability}
              </div>
            </div>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--green)",
                boxShadow: "0 0 8px var(--green)",
                display: "inline-block",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────
function Skills() {
  const ref = useReveal();
  return (
    <section
      id="skills"
      className="section-pad"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 48px" }}
    >
      <div ref={ref} className="reveal">
        <SectionHeader eyebrow="Expertise" title="Skills & Tools" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 18,
        }}
      >
        {skills.map((s, i) => {
          const r = useReveal();
          return (
            <div
              key={s.category}
              ref={r}
              className="reveal"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 28,
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.66rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                {s.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {s.items.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── WORK ──────────────────────────────────────────────────────
function Work() {
  const ref = useReveal();
  return (
    <section
      id="work"
      className="section-pad"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 48px" }}
    >
      <div ref={ref} className="reveal">
        <SectionHeader eyebrow="Selected Projects" title="What I've built" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {projects.map((p, i) => {
          const r = useReveal();
          const [hov, setHov] = useState(false);
          const Wrap = p.link ? "a" : "div";
          const wp = p.link
            ? { href: p.link, target: "_blank", rel: "noreferrer" }
            : {};
          return (
            <Wrap
              key={p.name}
              ref={r}
              {...wp}
              className="reveal"
              onMouseEnter={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "start",
                background: hov ? "#191919" : "var(--card)",
                border: `1px solid ${hov ? "rgba(212,150,122,0.35)" : "var(--border)"}`,
                borderRadius: 16,
                padding: "32px 36px",
                textDecoration: "none",
                color: "inherit",
                cursor: p.link ? "pointer" : "default",
                transition:
                  "border-color 0.25s, background 0.25s, opacity 0.65s ease, transform 0.65s ease",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "0.68rem",
                    color: "var(--muted)",
                    marginBottom: 10,
                  }}
                >
                  {p.year}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    marginBottom: 18,
                    maxWidth: 640,
                  }}
                >
                  {p.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 20,
                    marginBottom: 16,
                  }}
                >
                  {p.stats.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "0.7rem",
                        color: "var(--accent)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
              <span
                style={{
                  fontSize: "1.4rem",
                  color: hov ? "var(--accent)" : "var(--muted)",
                  transform: hov ? "translate(3px,-3px)" : "none",
                  transition: "color 0.2s, transform 0.2s",
                  flexShrink: 0,
                }}
              >
                ↗
              </span>
            </Wrap>
          );
        })}
      </div>
    </section>
  );
}

// ── PATH ──────────────────────────────────────────────────────
function Path() {
  return (
    <section
      id="path"
      className="section-pad"
      style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 48px" }}
    >
      <R>
        <SectionHeader eyebrow="Experience" title="Where I've worked" />
      </R>
      {experience.map((e) => (
        <R key={e.title}>
          <div
            className="exp-grid"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: 36,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 24,
              alignItems: "start",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                {e.title}
              </h3>
              <p
                style={{
                  color: "var(--accent)",
                  fontSize: "0.9rem",
                  marginBottom: 14,
                }}
              >
                {e.company}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {e.points.map((pt, i) => (
                  <li
                    key={i}
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      paddingLeft: 18,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                        fontSize: "0.75rem",
                      }}
                    >
                      →
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "0.7rem",
                color: "var(--muted)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                padding: "6px 14px",
                borderRadius: 100,
                whiteSpace: "nowrap",
              }}
            >
              {e.period}
            </span>
          </div>
        </R>
      ))}

      <div style={{ height: 56 }} />
      <R>
        <SectionHeader eyebrow="Education" title="Academic path" />
      </R>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))",
          gap: 18,
        }}
      >
        {education.map((ed, i) => (
          <R key={ed.degree} delay={i * 80}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 28,
                height: "100%",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                {ed.period}
              </p>
              <h3
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  marginBottom: 4,
                }}
              >
                {ed.degree}
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.85rem",
                  marginBottom: 14,
                  lineHeight: 1.5,
                }}
              >
                {ed.school}
              </p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "2.1rem",
                  lineHeight: 1,
                }}
              >
                {ed.grade}
                <span
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    marginLeft: 2,
                  }}
                >
                  {ed.gradeLabel}
                </span>
              </p>
            </div>
          </R>
        ))}
      </div>

      <div style={{ height: 56 }} />
      <R>
        <SectionHeader eyebrow="Achievements" title="Highlights" />
      </R>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: 18,
        }}
      >
        {achievements.map((a, i) => (
          <R key={a.title} delay={i * 80}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 30,
                height: "100%",
              }}
            >
              <span
                style={{
                  fontSize: "1.6rem",
                  display: "block",
                  marginBottom: 14,
                }}
              >
                {a.icon}
              </span>
              <h3
                style={{ fontSize: "1rem", fontWeight: 500, marginBottom: 10 }}
              >
                {a.title}
              </h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.87rem",
                  lineHeight: 1.7,
                }}
              >
                {a.description}
              </p>
            </div>
          </R>
        ))}
      </div>

      <div style={{ height: 56 }} />
      <R>
        <SectionHeader eyebrow="Certifications" title="Credentials" />
      </R>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {certifications.map((c, i) => (
          <R key={c.name} delay={i * 60}>
            <div
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                  marginTop: 5,
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  {c.name}
                </p>
                <p
                  style={{
                    color: "var(--muted)",
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                  }}
                >
                  {c.issuer} — {c.detail}
                </p>
              </div>
            </div>
          </R>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────
function Contact() {
  const ref = useReveal();
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "100px 48px 120px",
        textAlign: "center",
      }}
    >
      <div
        ref={ref}
        className="reveal"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 20,
          }}
        >
          Get in touch
        </span>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            marginBottom: 28,
          }}
        >
          Let's build something
          <br />
          together.
        </h2>
        <a
          href={`mailto:${meta.email}`}
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.3rem,2.8vw,2.2rem)",
            color: "var(--accent)",
            textDecoration: "none",
            marginBottom: 24,
          }}
        >
          {meta.email}
        </a>
        <p
          style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          Currently open to internships and freelance projects. Always excited
          to collaborate on AI-powered products and full-stack applications.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <BtnGhost href={meta.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </BtnGhost>
          <BtnGhost href={meta.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </BtnGhost>
          <BtnPrimary href={`mailto:${meta.email}`}>✉ Send email</BtnPrimary>
        </div>
      </div>
    </section>
  );
}

// ── APP ───────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = GLOBAL_CSS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Skills />
        <Divider />
        <Work />
        <Divider />
        <Path />
        <Divider />
        <Contact />
      </main>
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "28px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "var(--muted)",
          fontSize: "0.8rem",
        }}
      >
        <span>© {new Date().getFullYear()} Mahek Asif Mulla</span>
        <span>Built with React · No UI libraries</span>
      </footer>
    </>
  );
}
