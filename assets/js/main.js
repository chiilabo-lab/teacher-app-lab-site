(() => {
  const mainScriptUrl = document.currentScript?.src ?? "";
  const siteRootUrl = mainScriptUrl ? new URL("../../", mainScriptUrl) : null;
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navigation = document.querySelector("[data-navigation]");

  const primaryEntries = [
    { label: "ホーム", path: "index.html", section: "home" },
    { label: "アプリ", path: "apps/index.html", section: "apps" },
    { label: "教材", path: "materials/index.html", section: "materials" },
    { label: "ノート", path: "notes/index.html", section: "notes" },
    { label: "エッセイ", path: "essays/index.html", section: "essays" },
    { label: "実験室", path: "labs/index.html", section: "labs" },
    { label: "プロフィール", path: "profile/index.html", section: "profile" },
  ];

  const currentSection = () => {
    const pathname = window.location.pathname.replace(/\\/g, "/");
    if (/\/(ai|lessons)\//.test(pathname)) return "notes";
    const match = pathname.match(/\/(apps|materials|notes|essays|labs|profile)\//);
    if (match) return match[1];
    const homePath = new URL("index.html", siteRootUrl).pathname;
    return pathname === homePath || pathname === homePath.replace(/index\.html$/, "") ? "home" : "";
  };

  const normalizePrimaryNavigation = () => {
    if (!navigation || !siteRootUrl) return;
    const activeSection = currentSection();
    const links = primaryEntries.map((entry) => {
      const link = document.createElement("a");
      link.href = new URL(entry.path, siteRootUrl).href;
      link.textContent = entry.label;
      if (entry.section === activeSection) link.setAttribute("aria-current", "page");
      return link;
    });
    navigation.replaceChildren(...links);
  };

  const normalizeFooterNavigation = () => {
    if (!siteRootUrl) return;
    document.querySelectorAll(".site-footer__grid").forEach((grid) => {
      const linkColumn = grid.children[1];
      if (!linkColumn) return;

      const heading = document.createElement("h3");
      heading.textContent = "5つの入口";
      const list = document.createElement("ul");
      list.className = "site-footer__links";
      primaryEntries.filter((entry) => entry.section !== "home" && entry.section !== "profile").forEach((entry) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = new URL(entry.path, siteRootUrl).href;
        link.textContent = entry.label;
        item.append(link);
        list.append(item);
      });
      linkColumn.replaceChildren(heading, list);
    });
  };

  normalizePrimaryNavigation();
  normalizeFooterNavigation();

  if (navToggle && navigation) {
    navToggle.addEventListener("click", () => {
      const isOpen = navigation.dataset.open === "true";
      navigation.dataset.open = String(!isOpen);
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.textContent = isOpen ? "メニュー" : "閉じる";
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        navigation.dataset.open = "false";
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.textContent = "メニュー";
      }
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const addFooterLinkRegions = () => {
    document.querySelectorAll(".site-footer > .container").forEach((container) => {
      if (container.querySelector('[data-site-links="footer"]')) return;

      const region = document.createElement("section");
      region.className = "site-footer__external";
      region.setAttribute("aria-labelledby", "footer-external-links-title");

      const heading = document.createElement("h3");
      heading.id = "footer-external-links-title";
      heading.textContent = "SNS・外部リンク";

      const description = document.createElement("p");
      description.className = "site-footer__external-note";
      description.textContent = "Instagram・YouTubeで、ちいラボの実践を紹介しています。";

      const links = document.createElement("div");
      links.dataset.siteLinks = "footer";
      links.setAttribute("aria-live", "polite");
      links.innerHTML = '<p class="external-links__fallback">リンク情報を準備しています。</p>';

      region.append(heading, description, links);
      const bottom = container.querySelector(".site-footer__bottom");
      container.insertBefore(region, bottom);
    });
  };

  const isSafeServiceUrl = (url) => /^(https:\/\/|mailto:)/i.test(url);

  const createServiceItem = (service, variant) => {
    const item = document.createElement("li");
    const isReady = service.status === "ready" && isSafeServiceUrl(service.url);
    const element = document.createElement(isReady ? "a" : "span");
    element.className = `external-link external-link--${isReady ? "ready" : "preparing"}`;

    if (isReady) {
      element.href = service.url;
      if (!service.url.toLowerCase().startsWith("mailto:")) {
        element.target = "_blank";
        element.rel = "noopener noreferrer";
      }
      element.setAttribute("aria-label", `${service.name}を開く`);
    } else {
      element.setAttribute("aria-disabled", "true");
    }

    const icon = document.createElement("span");
    icon.className = "external-link__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = service.iconText;

    const text = document.createElement("span");
    text.className = "external-link__text";

    const name = document.createElement("span");
    name.className = "external-link__name";
    name.textContent = service.name;
    text.append(name);

    if (variant === "profile") {
      const account = document.createElement("span");
      account.className = "external-link__account";
      account.textContent = service.account;
      text.append(account);
    }

    const status = document.createElement("span");
    status.className = "external-link__status";
    status.textContent = isReady
      ? "開く"
      : service.status === "undetermined"
        ? "未確定"
        : "準備中";

    element.append(icon, text, status);
    item.append(element);
    return item;
  };

  const renderSiteLinks = () => {
    const settings = window.CHII_LAB_SITE_LINKS;
    const targets = document.querySelectorAll("[data-site-links]");

    if (!settings?.services || !Array.isArray(settings.services)) {
      targets.forEach((target) => {
        target.innerHTML = '<p class="external-links__fallback">SNS・外部リンクは準備中です。</p>';
      });
      return;
    }

    targets.forEach((target) => {
      const variant = target.dataset.siteLinks ?? "footer";
      const list = document.createElement("ul");
      list.className = `external-link-list external-link-list--${variant}`;
      settings.services.filter((service) => service.visible !== false).forEach((service) => {
        list.append(createServiceItem(service, variant));
      });
      target.replaceChildren(list);
    });
  };

  const loadSiteLinkSettings = () => {
    addFooterLinkRegions();

    if (window.CHII_LAB_SITE_LINKS) {
      renderSiteLinks();
      return;
    }

    if (!mainScriptUrl) {
      renderSiteLinks();
      return;
    }

    const settingsScript = document.createElement("script");
    settingsScript.src = new URL("./site-links-config.js", mainScriptUrl).href;
    settingsScript.addEventListener("load", renderSiteLinks, { once: true });
    settingsScript.addEventListener("error", renderSiteLinks, { once: true });
    document.head.append(settingsScript);
  };

  loadSiteLinkSettings();

  const filterButtons = [...document.querySelectorAll("[data-filter-value]")];
  const filterItems = [...document.querySelectorAll("[data-filter-item]")];
  const searchInput = document.querySelector("[data-search-input]");
  const emptyMessage = document.querySelector("[data-empty-message]");
  let activeFilter = "all";

  const updateResults = () => {
    const query = searchInput?.value.trim().toLocaleLowerCase("ja") ?? "";
    let visibleCount = 0;

    filterItems.forEach((item) => {
      const categories = item.dataset.filterItem?.split(" ") ?? [];
      const text = item.textContent.toLocaleLowerCase("ja");
      const matchesFilter = activeFilter === "all" || categories.includes(activeFilter);
      const matchesSearch = query === "" || text.includes(query);
      const shouldShow = matchesFilter && matchesSearch;
      item.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    if (emptyMessage) {
      emptyMessage.hidden = visibleCount !== 0;
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filterValue ?? "all";
      filterButtons.forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      updateResults();
    });
  });

  searchInput?.addEventListener("input", updateResults);
})();
