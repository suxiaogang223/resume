(() => {
  const html = document.documentElement;
  const themeBtn = document.getElementById("theme-toggle");
  const langBtn = document.getElementById("lang-toggle");
  const statusZone = document.getElementById("status-progress-zone");
  const statusSection = document.getElementById("status-progress-section");
  const statusPosition = document.getElementById("status-progress-position");
  const commandMessage = document.getElementById("command-message");
  const navLinks = Array.from(document.querySelectorAll("[data-nav-key]"));
  const panes = Array.from(document.querySelectorAll("[data-lang-panel]"));
  const descriptionMeta = document.querySelector('meta[name="description"]');

  if (!themeBtn || !langBtn || panes.length === 0) return;

  const titles = {
    zh: "苏艺腾 | 在线简历",
    en: "Yiteng Su | Resume"
  };

  const descriptions = {
    zh: "苏艺腾的在线简历",
    en: "Yiteng Su online resume"
  };

  const navLabels = {
    zh: {
      top: "顶部",
      education: "教育",
      skills: "技能",
      internship: "实习",
      projects: "项目",
      reading_default: "简历",
      pos_all: "全部",
      pos_top: "Top",
      pos_bot: "Bot"
    },
    en: {
      top: "Top",
      education: "Education",
      skills: "Skills",
      internship: "Internship",
      projects: "Projects",
      reading_default: "Resume",
      pos_all: "All",
      pos_top: "Top",
      pos_bot: "Bot"
    }
  };

  const navTargets = {
    zh: {
      top: "#zh-top",
      education: "#zh-education",
      skills: "#zh-skills",
      internship: "#zh-internship",
      projects: "#zh-projects"
    },
    en: {
      top: "#en-top",
      education: "#en-education",
      skills: "#en-skills",
      internship: "#en-internship",
      projects: "#en-projects"
    }
  };

  const commandText = {
    zh: "导出 PDF：按 Cmd/Ctrl+P，目标选择“另存为 PDF”",
    en: "Export PDF: press Cmd/Ctrl+P and choose Save as PDF"
  };

  const themeLabels = {
    light: "Theme: Light",
    dark: "Theme: Dark"
  };

  const languages = ["zh", "en"];
  const darkMql =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

  let themeMode = darkMql && darkMql.matches ? "dark" : "light";
  let userSwitchedTheme = false;

  const zoneSymbolForPercent = (percent) => {
    if (percent >= 75) return "●";
    if (percent >= 50) return "*";
    if (percent >= 25) return ":";
    return "·";
  };

  const getActiveSectionTitle = () => {
    if (!document.elementFromPoint) return null;
    const header = document.querySelector(".header-line");
    const headerH = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
    const x = Math.floor(window.innerWidth / 2);
    const y = Math.min(window.innerHeight - 1, headerH + 16);
    const el = document.elementFromPoint(x, y);
    if (!el || !el.closest) return null;
    const section = el.closest("main section[id]");
    if (!section) return null;
    const heading = section.querySelector("h1, h2");
    if (!heading) return null;
    const text = (heading.textContent || "").trim();
    return text || null;
  };

  const updateReadingStatus = () => {
    if (!statusZone && !statusSection && !statusPosition) return;
    const dict = navLabels[currentLang] || navLabels.zh;
    const doc = document.documentElement;
    const scrollTop = window.scrollY || doc.scrollTop || 0;
    const maxScroll = Math.max(0, doc.scrollHeight - doc.clientHeight);
    const percent = maxScroll ? Math.round((scrollTop / maxScroll) * 100) : 100;

    if (statusZone) statusZone.textContent = zoneSymbolForPercent(percent);

    if (statusPosition) {
      if (!maxScroll) statusPosition.textContent = dict.pos_all;
      else if (scrollTop <= 0) statusPosition.textContent = dict.pos_top;
      else if (scrollTop >= maxScroll - 1) statusPosition.textContent = dict.pos_bot;
      else statusPosition.textContent = `${percent}%`;
    }

    if (statusSection) {
      const title = getActiveSectionTitle() || dict.reading_default;
      statusSection.textContent = title;
      statusSection.setAttribute("title", title);
    }
  };

  const scheduleReadingStatusUpdate = () => {
    if (scheduleReadingStatusUpdate._pending) return;
    scheduleReadingStatusUpdate._pending = true;
    const run = () => {
      scheduleReadingStatusUpdate._pending = false;
      updateReadingStatus();
    };
    if (window.requestAnimationFrame) window.requestAnimationFrame(run);
    else window.setTimeout(run, 16);
  };

  const detectLanguage = () => {
    const browserLang = (navigator.language || "").toLowerCase();
    return browserLang.startsWith("en") ? "en" : "zh";
  };

  let currentLang = html.getAttribute("data-lang");
  if (!languages.includes(currentLang)) {
    currentLang = detectLanguage();
  }

  const applyLanguage = () => {
    html.setAttribute("data-lang", currentLang);
    html.lang = currentLang === "en" ? "en" : "zh-CN";

    panes.forEach((pane) => {
      pane.hidden = pane.dataset.langPanel !== currentLang;
    });

    const langText = `Lang: ${currentLang.toUpperCase()}`;
    langBtn.textContent = langText;
    langBtn.setAttribute("aria-label", langText);

    navLinks.forEach((link) => {
      const key = link.dataset.navKey;
      if (!key) return;
      if (navLabels[currentLang][key]) link.textContent = navLabels[currentLang][key];
      if (navTargets[currentLang][key]) link.setAttribute("href", navTargets[currentLang][key]);
    });

    if (commandMessage && commandText[currentLang]) {
      commandMessage.textContent = commandText[currentLang];
    }

    if (titles[currentLang]) {
      document.title = titles[currentLang];
    }

    if (descriptionMeta && descriptions[currentLang]) {
      descriptionMeta.setAttribute("content", descriptions[currentLang]);
    }

    scheduleReadingStatusUpdate();
  };

  const applyTheme = () => {
    html.setAttribute("data-theme", themeMode);
    const text = themeLabels[themeMode];
    themeBtn.textContent = text;
    themeBtn.setAttribute("aria-label", text);
  };

  themeBtn.addEventListener("click", () => {
    userSwitchedTheme = true;
    themeMode = themeMode === "light" ? "dark" : "light";
    applyTheme();
  });

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    applyLanguage();
  });

  if (darkMql) {
    const onSystemThemeChange = () => {
      if (userSwitchedTheme) return;
      themeMode = darkMql.matches ? "dark" : "light";
      applyTheme();
    };

    if (darkMql.addEventListener) {
      darkMql.addEventListener("change", onSystemThemeChange);
    } else if (darkMql.addListener) {
      darkMql.addListener(onSystemThemeChange);
    }
  }

  applyLanguage();
  applyTheme();
  updateReadingStatus();
  window.addEventListener("scroll", scheduleReadingStatusUpdate, { passive: true });
  window.addEventListener("resize", scheduleReadingStatusUpdate);
})();
