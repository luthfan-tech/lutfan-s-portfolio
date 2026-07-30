// --- 0. Mouse-follow glow for cards and tags ---
const glowElements = document.querySelectorAll(".glass-card, .skill-tag");

glowElements.forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);
  });
});

// --- 1. Data Definitions ---

const projects = [
  {
    name: "NEXUS.FEED // Modern News Aggregator",
    description:
      "A modern news dashboard with a dual data pipeline using NewsAPI and RSS fallback. Includes glassmorphism UI, cross-tab bookmark sync, and localStorage persistence.",
    tech: ["HTML/CSS/JS", "NewsAPI", "localStorage"],
    status: "V1",
    github: "https://github.com/luthfan-tech",
  },
  {
    name: "SkillPro — Learning Management System",
    description:
      "A role-based LMS with student/instructor portals, curriculum builder, quiz engine, verifiable certificates, and an AI doubt solver.",
    tech: ["Full-Stack", "AI", "Databases"],
    status: "MVP",
    github: "https://github.com/luthfan-tech",
  },
  {
    name: "Atmosphere Weather App",
    description:
      "Live city search, 5-day forecast, dynamic accent tones based on weather, in-memory caching, and responsive Bento UI.",
    tech: ["API Integration", "JS", "Tailwind CSS"],
    status: "v1",
    github: "https://github.com/luthfan-tech",
  },
  {
    name: "Personal Finance Tracker",
    description:
      "Finance dashboard with income/expense overviews, ApexCharts donut graphs, smart search, and SQLite storage.",
    tech: ["Python", "SQLite", "ApexCharts"],
    status: "v1",
    github: "https://github.com/luthfan-tech",
  },
  {
    name: "NeuralDigest — Intelligence Suite",
    description:
      "An AI summarizer powered by Groq, with length/format controls, secure authentication, and SQLite history.",
    tech: ["Python", "Groq AI", "SQLite"],
    status: "v1.0",
    github: "https://github.com/luthfan-tech",
  },
  {
    name: "ApexPulse — Analytics Dashboard",
    description:
      "Full-stack dashboard with real-time KPIs, filterable telemetry, dynamic charting, and custom transaction logging.",
    tech: ["Full-Stack", "Data Viz", "Auth"],
    status: "In progress",
    github: "https://github.com/luthfan-tech",
  },
  {
    name: "ShopHub — E-Commerce Platform",
    description:
      "FastAPI + SQLAlchemy async platform with storefront, seller portal, cart, order management, and JWT auth.",
    tech: ["FastAPI", "SQLAlchemy", "JWT"],
    status: "MVP",
    github: "https://github.com/luthfan-tech",
  },
  {
    name: "Realtime Chat App",
    description:
      "Developer social platform with global directory, secure chat rooms, restricted DM, and mobile-native tools.",
    tech: ["WebSockets", "Full-Stack", "UI/UX"],
    status: "MVP",
    github: "https://github.com/luthfan-tech",
  },
];

const blogs = [
  {
    id: "python-journey",
    title: "My Python learning journey",
    date: "July 2026",
    readTime: "2 min read",
    tag: "Learning & Python",
    preview:
      "I started learning Python seriously after I passed 12th grade. Self-learning taught me more than I expected...",
    paragraphs: [
      "I started learning Python seriously after I passed 12th grade. We had already been taught Python in college, but at that time I honestly did not pay much attention to it. It felt confusing, and a lot of things did not make sense to me. But after I started learning on my own, everything slowly became easier to understand.",
      "When I began studying Python by myself, I realized that learning at my own pace made a huge difference. I could pause, repeat, experiment, and actually understand what each line of code was doing. That freedom made the subject feel much more practical and less intimidating. Now I can say that Python is one of the languages I am genuinely comfortable with.",
      "So far, I have completed the core Python concepts, and next I want to move deeper into Object-Oriented Programming, NumPy, Pandas, TensorFlow, and other useful libraries and frameworks. I want to understand not just the syntax, but also where and how to apply Python in real projects.",
      "I use Python in web development, backend systems, automation, and even model training. What I like most about Python is how flexible it is. It can be used in so many different areas, and that makes it a very powerful language to learn early.",
      "I want to learn where to implement my Python knowledge in practical ways, especially in areas that are both technical and useful. This journey is still going on, but I can already say that learning Python by myself has taught me more than I expected.",
    ],
  },
  {
    id: "building-while-learning",
    title: "Building projects while learning",
    date: "July 2026",
    readTime: "2 min read",
    tag: "Philosophy & Build",
    preview:
      "I've realized that one of the best ways to learn as a developer is not just by watching tutorials, but by actually building things...",
    paragraphs: [
      "I've realized that one of the best ways to learn as a developer is not just by watching tutorials, but by actually building things. For me, learning and building have become the same process. Every project I create teaches me something new, whether it is about logic, UI design, backend flow, database handling, or how to make an app feel smooth and usable.",
      "When I started building projects, I didn't always know how everything would come together. Some parts felt confusing at first, especially when I had to connect different features or fix bugs that I didn't understand immediately. But that is exactly what made the process valuable. Each project pushed me to think deeper, search better, and understand how real applications are structured.",
      "I like building projects because they force me to use what I learn in a practical way. A concept becomes much clearer when I use it in a real app instead of just reading about it. That is also why I keep uploading my work to GitHub. It helps me track my progress and keeps me consistent.",
      "Right now, I am still learning, but I am not waiting to 'be ready' before building. I believe every project, even the small ones, adds something important to my journey. They show me how far I've come, and they also show me what I need to improve next.",
      "For me, building while learning is the best way to grow.",
    ],
  },
  {
    id: "movies-and-coding",
    title: "Movies, creativity, and coding mindset",
    date: "July 2026",
    readTime: "2 min read",
    tag: "Cinema & Mindset",
    preview:
      "I've always been a big cinephile, and over time I've realized that watching films has influenced the way I think about software...",
    paragraphs: [
      "I've always been a big cinephile, and over time I've realized that watching films has influenced the way I think about creativity, detail, and storytelling. Movies train you to notice things like pacing, visuals, mood, structure, and how small details can completely change the experience. In a strange way, that mindset also helps me in coding.",
      "When I work on a project, I don't just think about whether it works. I also think about how it feels. Is the UI smooth? Does the flow make sense? Does the app feel enjoyable to use? That kind of thinking is similar to how I watch films. A movie is not just about the plot, and a project is not just about the code. Presentation matters too.",
      "Cinema also teaches patience. Some films take time to build momentum, and that reminds me that learning tech works the same way. You don't become strong in one day. You improve through repeated effort, mistakes, and small wins. That mindset helps me stay consistent when I'm learning something difficult or debugging a project that refuses to work.",
      "Creativity is important in tech because solving problems often needs more than just logic. You need imagination to design better layouts, think of better user flows, and build something that feels useful. For me, movies are not just entertainment — they are part of how I stay inspired and creative while building software.",
    ],
  },
];

// --- 2. Typewriter Effect ---

const typeText = "Builder & Developer.";
const typeSpeed = 70;
const typeElement = document.getElementById("typewriter");

let typeIndex = 0;

function typeWriter() {
  if (typeIndex < typeText.length) {
    typeElement.textContent += typeText.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, typeSpeed);
  }
}

setTimeout(typeWriter, 600);

// --- 3. Render Projects & Blogs ---

const projectsContainer = document.getElementById("projects-container");
if (projectsContainer) {
  projectsContainer.innerHTML = "";
  projects.forEach((project, idx) => {
    const techStack = project.tech
      .map(
        (t) =>
          `<span class="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">${t}</span>`,
      )
      .join("");

    const card = `
      <div class="glass-card project-card p-6 rounded-2xl group cursor-default reveal-card" data-delay="${idx * 0.08}">
        <div>
          <div class="flex justify-between items-start mb-4">
            <span class="text-xs font-semibold tracking-wider text-brand-cyan uppercase bg-brand-cyan/10 px-2 py-1 rounded border border-brand-cyan/20">${project.status}</span>
            <a href="${project.github}" target="_blank" class="text-gray-400 hover:text-white transition-colors" aria-label="GitHub Repository">
              <i class="ph ph-github-logo text-2xl"></i>
            </a>
          </div>
          <h3 class="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">${project.name}</h3>
          <p class="text-sm text-gray-400 mb-6 leading-relaxed">${project.description}</p>
        </div>
        <div class="flex flex-wrap gap-2 mt-auto">
          ${techStack}
        </div>
      </div>
    `;
    projectsContainer.innerHTML += card;
  });
}

const blogContainer = document.getElementById("blog-container");
if (blogContainer) {
  blogContainer.innerHTML = "";
  blogs.forEach((blog, index) => {
    const card = `
      <div onclick="openBlogModal(${index})" class="glass-card p-6 rounded-2xl flex flex-col justify-between group cursor-pointer reveal-card" data-delay="${index * 0.1}">
        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs font-semibold text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/20">${blog.tag}</span>
            <span class="text-xs text-gray-500 font-mono">${blog.readTime}</span>
          </div>
          <h3 class="text-xl font-display font-bold text-white group-hover:text-brand-cyan transition-colors mb-3">${blog.title}</h3>
          <p class="text-sm text-gray-400 line-clamp-3 leading-relaxed mb-4">${blog.preview}</p>
        </div>
        <div class="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-sm text-gray-400">
          <span class="text-xs text-gray-500">${blog.date}</span>
          <span class="text-xs font-medium text-brand-cyan flex items-center gap-1 group-hover:underline">
            Read post <i class="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </span>
        </div>
      </div>
    `;
    blogContainer.innerHTML += card;
  });
}

// --- 4. Interactive Blog Modal Reader ---

// Make sure this modal HTML exists in index.html before using these functions.
// If your old index.html already has it, keep it.

function openBlogModal(index) {
  const blog = blogs[index];
  if (!blog) return;

  document.getElementById("modal-tag").innerText = blog.tag;
  document.getElementById("modal-title").innerText = blog.title;
  document.getElementById("modal-date").innerText = blog.date;
  document.getElementById("modal-readtime").innerText = blog.readTime;

  const contentBox = document.getElementById("modal-content");
  contentBox.innerHTML = blog.paragraphs.map((p) => `<p>${p}</p>`).join("");

  const modal = document.getElementById("blog-modal");
  modal.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.remove("opacity-0");
  }, 10);
  document.body.style.overflow = "hidden";
}

function closeBlogModal() {
  const modal = document.getElementById("blog-modal");
  modal.classList.add("opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }, 300);
}

document.addEventListener("click", (e) => {
  const modal = document.getElementById("blog-modal");
  if (e.target === modal) {
    closeBlogModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeBlogModal();
  }
});

// --- 5. Scroll Reveal with Stagger ---

const revealSections = document.querySelectorAll(".reveal-section");
const revealOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const section = entry.target;
    section.classList.add("active");

    const cards = section.querySelectorAll(".reveal-card");
    cards.forEach((card, idx) => {
      const delay = parseFloat(card.dataset.delay || 0) + idx * 0.08;
      setTimeout(() => {
        card.classList.add("active");
      }, delay * 1000);
    });

    observer.unobserve(section);
  });
}, revealOptions);

revealSections.forEach((el) => revealOnScroll.observe(el));

const skillsContainer = document.getElementById("skills-container");
if (skillsContainer) {
  const skillTags = skillsContainer.querySelectorAll(".skill-tag");
  skillTags.forEach((tag, idx) => {
    tag.style.opacity = "0";
    tag.style.transform = "translateY(12px) scale(0.95)";
    tag.style.transition = "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    tag.style.transitionDelay = `${idx * 0.04}s`;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tag.style.opacity = "1";
          tag.style.transform = "translateY(0) scale(1)";
          observer.unobserve(tag);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(tag);
  });
}

// --- 6. Mobile Navigation Menu ---

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");
let menuOpen = false;

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.classList.remove("translate-x-full");
      mobileMenuBtn.innerHTML = '<i class="ph ph-x"></i>';
    } else {
      mobileMenu.classList.add("translate-x-full");
      mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
      mobileMenuBtn.innerHTML = '<i class="ph ph-list"></i>';
     
