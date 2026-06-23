const site = {
  // --- Site Metadata ---
  meta: {
    title: "Enoch Mok",
    description: "My spot on the World Wide Web",
    author: "Enoch Mok",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
    // HTML lang attribute, affects page language and date formatting
    // Options: "zh-CN", "en", "ja", etc.
    lang: "en",
  },

  // --- Navigation ---
  // subtitle: decorative label shown below the name (uppercase, small text)
  navigation: [
    { name: "Home", subtitle: "Index", href: "/" },
    { name: "Writing", subtitle: "Blog", href: "/posts" },
    { name: "Projects", subtitle: "Works", href: "/projects" },
    { name: "About", subtitle: "Me", href: "/about" },
  ],

  // --- Social Links ---
  social: [
    { name: "GitHub", href: "https://github.com/e-mny", icon: "mdi:github" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/enochmok/",
      icon: "mdi:linkedin",
    },
    { name: "Email", href: "mailto:enochmokny@gmail.com", icon: "mdi:email" },
    {
      name: "Resume",
      href: "/resume/EnochMok_Resume.pdf",
      icon: "mdi:file-document",
    },
  ],

  // --- Homepage Hero ---
  hero: {
    greeting: "👋 Hey, I'm Enoch!",
    // Supports HTML. Use <span class="font-medium text-foreground underline decoration-primary/30"> to highlight keywords
    description:
      "I turn caffeine into predictive models, data insights, and web apps.",
    cards: [
      { icon: "mdi:explore", label: "Status", value: "Probably researching" },
      { icon: "mdi:location", label: "Location", value: "Singapore 🇸🇬" },
    ],
  },

  // --- Footer ---
  footer: {
    copyright: "© 2026 | Enoch Mok",
    builtWith: "Built with Astro and too much coffee ☕️.",
  },

  // --- Comments ---
  comments: {
    enabled: false,
    provider: "artalk" as const,
    artalk: {
      server: "https://your-artalk-server.com",
    },
  },

  // --- Feature Toggles ---
  features: {
    search: true,
    rss: false,
    // Auto-mark posts as "new" if published within this many days (0 to disable)
    newPostDays: 14,
  },

  // --- Status Colours ---
  statusStyles: {
    planning: "bg-yellow-100 text-yellow-800 border-yellow-200",
    "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
    completed: "bg-green-100 text-green-800 border-green-200",
    archived: "bg-gray-100 text-gray-800 border-gray-200",
  },

  // --- Tools Page Data ---
  tools: [
    {
      name: "development",
      items: [
        {
          name: "VS Code",
          link: "https://code.visualstudio.com",
          icon: "mdi:microsoft-visual-studio-code",
        },
        { name: "Terminal", icon: "mdi:terminal" },
        { name: "Git", link: "https://git-scm.com", icon: "mdi:git" },
        { name: "Docker", link: "https://www.docker.com", icon: "mdi:docker" },
        {
          name: "Cloudflare",
          link: "https://www.cloudflare.com",
          icon: "mdi:cloud-upload",
        },
        {
          name: "Vercel",
          link: "https://www.vercel.app",
          icon: "mdi:arrow-top-drop-circle",
        },
      ],
    },
    {
      name: "productivity",
      items: [
        { name: "Notion", link: "https://www.notion.so", icon: "mdi:notebook" },
        {
          name: "Obsidian",
          link: "https://obsidian.md",
          icon: "mdi:diamond-stone",
        },
        {
          name: "Raycast",
          link: "https://www.raycast.com",
          icon: "mdi:lightning-bolt",
        },
        { name: "Firefox", link: "https://firefox.com", icon: "mdi:firefox" },
      ],
    },
  ],

  // --- UI Labels ---
  // Customize these values to change the text displayed on pages
  labels: {
    postsTitle: "Writing",
    postsDescription: "Unhinged thoughts go here.",
    projectsTitle: "Projects",
    projectsDescription: "Small tools built for fun or to solve real problems.",
    friendsTitle: "Friends",
    friendsDescription: "Like-minded folks around the web.",
    toolsTitle: "My weapons",
    aboutTitle: "About",
    aboutDescription: "About this site and author",
    backToPosts: "Back to posts",
    goHome: "Go Home",
    notFoundTitle: "Page not found",
    notFoundDescription:
      "The page you're looking for may have been removed or the link is broken.",
    endOfPost: "End of Post",
    tableOfContents: "Table of Contents",
    searchPlaceholder: "Search anything!",
    searchNavigate: "Navigate",
    commentSuccess: "Comment submitted",
  },

  ogImage: "/og-image.png",
} as const;

export default site;
