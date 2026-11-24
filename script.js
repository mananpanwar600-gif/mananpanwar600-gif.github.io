/* =====================================================================
   EDIT YOUR CONTENT HERE. Everything on the site is rendered from `DATA`.
   Leave a link as "" to hide its button. Items marked [ADD ...] are placeholders.
   ===================================================================== */
const DATA = {
  name: "Manan Singh Panwar",
  roles: ["AI/ML Developer", "GenAI Enthusiast", "Computer Science Undergraduate"],
  intro: "I build practical AI applications and explore emerging technologies in machine learning, generative AI and computer vision.",
  avatar: "assets/images/profile.jpg",           // put your photo here (falls back to a placeholder)
  resume: "assets/resume.pdf",
  formEndpoint: "https://formspree.io/f/xkjrjyna",                              // paste your Formspree URL here (see README)
  contact: { email: "mananpanwar600@gmail.com", linkedin: "https://www.linkedin.com/in/manan-singh-panwar", github: "https://github.com/mananpanwar600-gif", location: "Dehradun, India" },

  about: [
    "I'm a B.Tech Computer Science and Engineering (AI & ML) student at UPES, Dehradun, with a strong interest in Artificial Intelligence and Generative AI.",
    "I enjoy building real-world ML and AI applications, from conversational assistants and RAG pipelines to computer vision systems, and I'm curious about new technologies.",
    "I love continuous learning and solving problems end to end."
  ],

  education: [   // add more objects to add more entries
    { college: "UPES, Dehradun", degree: "B.Tech Computer Science and Engineering (AI & ML)", duration: "2024-Present", extra: "CGPA: 8.82 (current)" },
    { college: "New Doon Blossoms School, Dehradun", degree: "Class 10", duration: "2020-2021", extra: "Percentage: 94%" },
    { college: "New Doon Blossoms School, Dehradun", degree: "Class 12", duration: "2022-2023", extra: "Percentage: 87.5%" },
  ],

  experience: [
    { org: "Aanchal", position: "Internship: AI Tools and Multimedia Content Creation", duration: "June 2026 - July 2026", description: "Assisted with marketing activities, created social media posts and promotional videos using AI tools and multimedia software for digital content creation.", proof: "" },
    { org: "Neo Vision NGO", position: "Teaching Internship", duration: "June 2025 - July 2025", description: "Contributed to community education initiatives, demonstrating teamwork, communication, and social responsibility.", proof: "assets/certificates/NGO Internship.png" }
  ],

  projects: [    // image: put thumbnails in assets/projects/ (placeholder used if missing)
    // { name: "WeatherGPT", description: "AI-powered conversational weather platform with multilingual voice interaction.", tech: [], image: "", github: "", demo: "" },

    { name: "AI Video Assistant -- VISTA AI ", description: "Developed a Python-based AI meeting assistant that transcribes YouTube videos and local media using Whisper/Sarvam, generating summaries, action items, decisions, and key insights. Integrated LangChain-based RAG with Groq, HuggingFace, and Chroma for transcript-based Q&A through Streamlit.", tech: ["Python", "Groq", "LangChain", "HuggingFace", "Chroma", "RAG", "Streamlit"], image: "assets/images/vis.png", github: "https://github.com/mananpanwar600-gif/AI-Video-Assistant", demo: "" },

    { name: "Network Security System", description: "Built and deployed an end-to-end Network Security ML project using industry-standard practices, implementing modular data pipelines, ETL pipelines, validation, preprocessing, model training, and evaluation. Applied MLOps concepts, including artifact management in AWS S3 bucket, cloud deployment, Docker implementation, data drift detection, pipeline modularity, and reproducible model workflows.", tech: ["Python", "MongoDB", "Machine Learning", "MLOps", "FastAPI", "Numpy", "Pandas"], image: "assets/images/ns.png", github: "https://github.com/mananpanwar600-gif/Network-Security-System", demo: "" },
    
    { name: "Image Search Engine", description: "This project automates the process by detecting objects in images, storing their metadata, and retrieving relevant images based on the user's search query. The system provides object class labels, confidence scores, and bounding-box coordinates to help users inspect and validate predictions.", tech: ["Python", "YOLOv11", "OpenCV", "Streamlit"], image: "assets/images/ise.png", github: "https://github.com/mananpanwar600-gif/Image-Search-Engine", demo: "" },


    { name: "Student Performance Prediction", description: "College Project SEM 4, This repository implements an end-to-end machine learning solution to predict student performance on a math exam using demographic and academic features.", tech: ["Scikit-learn","Python","Pandas","Numpy"], image: "assets/images/spp.png", github: "https://github.com/mananpanwar600-gif/Student-Performance-Predictor", demo: "" },

    { name: "Customer Churn Prediction", description: "Mini Project, Machine Learning and Deep Learning project that predicts whether a bank customer is likely to churn (leave the bank) based on customer demographic and account information. The project includes data preprocessing, ANN model training using TensorFlow/Keras, and a Streamlit web application for real-time predictions.", tech: ["Python","TensorFlow / Keras","Scikit-learn","Pandas","NumPy","Streamlit"], image: "assets/images/cc.png", github: "https://github.com/mananpanwar600-gif/Customer-Churn-Prediction", demo: "" },

    { name: "IronPulse (Vibe Coded)", description: "College Project, IronPulse is a Java OOP gym management project built on Spring Boot, with a MongoDB-backed REST API and a lightweight web dashboard for operations. My Contribution: Handled Docker containerization and deployment of the project on Render, ensuring application accessibility. Also prepared and formatted project documentation using Overleaf (LaTeX).", tech: ["Java 21","Spring Boot 3","Spring Data" ,"MongoDB","Maven","Vanilla" ,"HTML", "CSS", "JavaScript", "Docker" , "Render deployment"], image: "assets/images/ip.png", github: "https://github.com/Pranvkumar/IronPluse", demo: "" },

    { name: "AI Trip Planner -- MakeMyJourney", description: "Agentic AI-powered travel planning application.Developed an AI-powered travel planning application using Groq LLM, Streamlit, and FastAPI to generate personalized, structured itineraries. Integrated live travel research, weather, location services, and currency conversion for itemized trip budgeting. Implemented itinerary validation, SQLite persistence, and streaming AI follow-ups grounded in saved trip plans.", tech: ["LangGraph","LangChain","Python","FatsAPI","SQLite","GroqAI"], image: "assets/images/tp.png", github: "https://github.com/mananpanwar600-gif/AI-Trip-Planner", demo: "" }
  ],

  hackathons: [
    { name: "Smart India Hackathon (SIH)", org: "UPES", year: "2026", achievement: "Cleared the internal hackathon round and secured a place among the top 50 teams.", project: "WeatherGPT", proof: "assets/images/sih.jpeg" }
  ],

  achievements: [
    { title: "Top 10 in Class 10", description: "Top 10 academic performance in Class 10 (94%).", proof: "" },
    { title: "2nd Place in Mathematics Olympiad", description: "Secured 2nd position in inter state mathematics olympiad organized by Siksha Darshan Foundation.", proof: "assets/images/olym.jpeg" }
  ],

  certificates: [
    { name: "Complete Data Science,Machine Learning,DL,NLP Bootcamp", issuer: "UDEMY, Instructors: Krish Naik, KRISHAI Technologies Private Limited", year: "2026", description: "Completed a comprehensive bootcamp covering Data Science, Machine Learning, Deep Learning, and Natural Language Processing (NLP), gaining practical knowledge of data preprocessing, model development, neural networks, and text processing techniques.", proof: "assets/certificates/ML DL bootcamp.pdf" },

    { name: "Python Bootcamp", issuer: "UDEMY, Instructors: Haris Ali Khan", year: "2025", description: "Completed a comprehensive Python Bootcamp covering Python fundamentals, data structures, object-oriented programming, file handling, libraries, and practical coding exercises to strengthen programming and problem-solving skills.", proof: "assets/certificates/Python Bootcamp.jpg" },

    { name: "Advanced Prompt Engineering", issuer: "Simplilearn", year: "2025", description: "Completed Advanced Prompt Engineering training, covering prompt design, context optimization, zero-shot and few-shot prompting, chain-of-thought techniques, and strategies for improving LLM accuracy and response quality.", proof: "assets/certificates/Prompt Engineering.pdf" },

    { name: "ChatGPT Advanced Course", issuer: "Simplilearn", year: "2025", description: "Completed an advanced ChatGPT course covering effective AI interaction, prompt engineering, content generation, productivity workflows, problem-solving, and practical applications of generative AI across various domains.", proof: "assets/certificates/Chat GPT Advance.pdf" },

    { name: "Gemini for Google Workspace", issuer: "Simplilearn / Google Cloud", year: "2025", description: "Completed training on Gemini for Google Workspace, learning to leverage generative AI for productivity, content creation, data analysis, and workflow automation across Google Docs, Sheets, Slides, Gmail, and other Workspace applications.", proof: "assets/certificates/Gemini for Google Workspace.pdf" },

    { name: "GitHub Copilot Fundamentals", issuer: "Simplilearn / Microsoft", year: "2025", description: "Completed GitHub Copilot Fundamentals training, covering AI-assisted coding, code completion, generating functions, debugging, understanding code, and improving developer productivity using GitHub Copilot.", proof: "assets/certificates/Github Copilot Fundamentals.pdf" },

    { name: "HANDLING DIFFICULT CONVERSATIONS", issuer: "Future Learn", year: "2026", description: "Completed training on handling difficult conversations, focusing on effective communication, active listening, conflict resolution, emotional intelligence, and constructive feedback in challenging situations.", proof: "assets/certificates/handling-difficult-conversations_certificate_of_achievement_m1amhni.pdf" },

  ],

  skills: {
    "Programming": ["Python", "C++", "SQL"],
    "AI/ML": ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn"],
    "Generative AI": ["LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering"],
    "Computer Vision": ["OpenCV", "YOLO", "Image Processing"],
    "Tools": ["Git", "GitHub", "Docker", "FastAPI", "Streamlit", "AWS"]
  }
};

/* ---------------- Rendering helpers (no need to edit) ---------------- */
const $ = id => document.getElementById(id);
const asArray = value => Array.isArray(value) ? value : [];
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = a => {
  const items = asArray(a);
  return items.length ? `<div class="tags">${items.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>` : "";
};
const link = (href, label, cls = "") => href ? `<a class="btn sm ${cls}" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>` : "";
const evidenceLink = (href, label, kind) => href
  ? `<a class="btn sm evidence-link ${kind}" href="${esc(href)}" target="_blank" rel="noopener noreferrer"><span>${label}</span><svg aria-hidden="true" viewBox="0 0 16 16"><path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10M8 2h6v6M14 2 7 9"/></svg></a>`
  : "";
const btns = (...l) => { const h = l.join(""); return h ? `<div class="btns">${h}</div>` : ""; };
const card = (html, cls = "card") => `<article class="${cls} reveal">${html}</article>`;
const fill = (id, arr, fn) => {
  const el = $(id);
  if (!el) return;
  el.innerHTML = asArray(arr).map(fn).join("");
};
const thumb = p => p.image || "data:image/svg+xml," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360'><defs><linearGradient id='g'><stop stop-color='#16254a'/><stop offset='1' stop-color='#2a1d52'/></linearGradient></defs><rect width='640' height='360' fill='url(#g)'/><text x='320' y='190' font-size='28' fill='#8d9ac0' text-anchor='middle' font-family='sans-serif'>${esc(p.name)}</text></svg>`);

const renderProject = p => card(`<img src="${esc(thumb(p))}" alt="${esc(p.name)} thumbnail" loading="lazy"><div class="body"><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p>${tags(p.tech)}${btns(link(p.github, "GitHub", "primary"), link(p.demo, "Live demo"))}</div>`, "card proj");
const renderExperience = e => card(`<h3>${esc(e.position)}</h3><p>${esc(e.org)} · ${esc(e.duration)}</p><p>${esc(e.description)}</p>${btns(evidenceLink(e.proof || e.link, "Open certificate", "certificate"))}`);
const renderEducation = e => card(`<h3>${esc(e.college)}</h3><p>${esc(e.degree)}</p><p>${esc(e.duration)} · ${esc(e.extra)}</p>`);
const renderHackathon = h => card(`<h3>${esc(h.name)}</h3><p>${esc(h.org)} · ${esc(h.year)}</p><p><b>${esc(h.achievement)}</b></p><p>Project: ${esc(h.project)}</p>${btns(evidenceLink(h.proof, "View achievement proof", "proof"))}`);
const renderAchievement = a => card(`<h3>${esc(a.title)}</h3><p>${esc(a.description)}</p>${btns(evidenceLink(a.proof, "View achievement proof", "proof"))}`);
const renderCertificate = c => card(`<h3>${esc(c.name)}</h3><p>${esc(c.issuer)} · ${esc(c.year)}</p><p>${esc(c.description)}</p>${btns(evidenceLink(c.proof, "Open certificate", "certificate"))}`);
const renderStat = s => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`;

/* ---------------- Page setup ---------------- */
const SECTIONS = ["home", "about", "education", "experience", "projects", "hackathons", "achievements", "certificates", "skills", "contact"];
$("menu").innerHTML = SECTIONS.map(s => `<a href="#${s}">${s[0].toUpperCase() + s.slice(1)}</a>`).join("");
$("name").textContent = DATA.name;
$("intro").textContent = DATA.intro;
$("heroStats").innerHTML = (DATA.stats || []).map(renderStat).join("");
$("year").textContent = new Date().getFullYear();
const av = $("avatar");
if (av) {
  av.src = DATA.avatar;
  av.onerror = () => { av.onerror = null; av.src = thumb({ name: "Add your photo" }); };
}
if ($("resumeBtn")) $("resumeBtn").href = DATA.resume;
$("aboutText").innerHTML = DATA.about.map(t => `<p>${esc(t)}</p>`).join("");
$("heroSocials").innerHTML = [["GitHub", DATA.contact.github], ["LinkedIn", DATA.contact.linkedin]]
  .map(([n, u]) => `<a href="${esc(u || "#contact")}" ${u ? 'target="_blank" rel="noopener"' : ""}>${n}</a>`).join("");

fill("educationList", DATA.education, renderEducation);
fill("experienceList", DATA.experience, renderExperience);
fill("projectList", DATA.projects, renderProject);
fill("hackathonList", DATA.hackathons, renderHackathon);
fill("achievementList", DATA.achievements, renderAchievement);
fill("certificateList", DATA.certificates, renderCertificate);
$("skillList").innerHTML = Object.entries(DATA.skills).map(([k, v]) => card(`<h3>${esc(k)}</h3>${tags(v)}`)).join("");

const c = DATA.contact;
$("contactInfo").innerHTML = `<h3>Let's connect</h3><ul><li>Email: ${esc(c.email)}</li><li>${c.linkedin ? `<a href="${esc(c.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : "LinkedIn: [ADD LINK]"}</li><li>${c.github ? `<a href="${esc(c.github)}" target="_blank" rel="noopener">GitHub</a>` : "GitHub: [ADD LINK]"}</li><li>Location: ${esc(c.location)}</li></ul>`;

/* Contact form: posts to your form service once DATA.formEndpoint is set */
const form = $("form"), note = $("formNote");
if (form) {
  if (DATA.formEndpoint) form.action = DATA.formEndpoint;
  else if (note) note.textContent = "The form is not connected yet. Add a form service URL (see README).";
  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!DATA.formEndpoint || !note) return;
    try {
      const r = await fetch(DATA.formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      note.textContent = r.ok ? "Message sent. Thank you!" : "Sending failed. Please email me directly.";
      if (r.ok) form.reset();
    } catch { note.textContent = "Network error. Please try again."; }
  });
}

/* ---------------- Typing animation ---------------- */
(() => {
  const el = $("typed"); let r = 0, i = 0, del = false;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return el.textContent = DATA.roles[0];
  (function tick() {
    const w = DATA.roles[r];
    el.textContent = w.slice(0, del ? --i : ++i);
    let t = del ? 40 : 80;
    if (!del && i === w.length) { del = true; t = 1400; }
    else if (del && i === 0) { del = false; r = (r + 1) % DATA.roles.length; t = 300; }
    setTimeout(tick, t);
  })();
})();

/* ---------------- Nav: hamburger, active indicator, reveal ---------------- */
const burger = $("burger"), menu = $("menu"), ind = $("indicator");
if (burger && menu) {
  burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
  menu.onclick = e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } };
}
const links = menu ? [...menu.querySelectorAll("a")] : [];
function setActive(id) {
  links.forEach(a => {
    const on = a.hash === "#" + id;
    a.classList.toggle("active", on);
    if (on && ind && menu) { ind.style.left = a.offsetLeft + menu.offsetLeft + "px"; ind.style.width = a.offsetWidth + "px"; }
  });
}
if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
  SECTIONS.forEach(s => { const el = $(s); if (el) spy.observe(el); });
  const rev = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); rev.unobserve(e.target); } }), { threshold: .1 });
  document.querySelectorAll(".reveal").forEach(el => rev.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach(el => el.classList.add("show"));
}

/* ---------------- Light background: drifting dots ---------------- */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv = $("bg"), ctx = cv.getContext("2d"); let w, h, dots = [];
  const size = () => { w = cv.width = innerWidth; h = cv.height = innerHeight; dots = Array.from({ length: Math.min(45, w / 30 | 0) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 })); };
  size(); addEventListener("resize", size);
  (function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const d of dots) {
      d.x = (d.x + d.vx + w) % w; d.y = (d.y + d.vy + h) % h;
      ctx.fillStyle = "rgba(79,140,255,.45)"; ctx.fillRect(d.x, d.y, 2, 2);
    }
    if (!document.hidden) requestAnimationFrame(draw); else setTimeout(draw, 500);
  })();
})();
