document.documentElement.classList.add("has-js");

const canAnimateGrid =
  window.matchMedia("(pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (canAnimateGrid) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frameId = null;

  const updateGrid = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    document.documentElement.style.setProperty("--grid-x", `${currentX.toFixed(2)}px`);
    document.documentElement.style.setProperty("--grid-y", `${currentY.toFixed(2)}px`);

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      frameId = requestAnimationFrame(updateGrid);
    } else {
      frameId = null;
    }
  };

  window.addEventListener("mousemove", (event) => {
    const xRatio = event.clientX / window.innerWidth - 0.5;
    const yRatio = event.clientY / window.innerHeight - 0.5;

    targetX = xRatio * 12;
    targetY = yRatio * 12;

    if (frameId === null) {
      frameId = requestAnimationFrame(updateGrid);
    }
  });
}

const transitionLinks = document.querySelectorAll('a[data-transition]');
const transitionDurations = {
  novel: 920,
  seversk: 880,
  home: 720,
};

transitionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }

    const url = new URL(link.href, window.location.href);
    const isExternal = url.origin !== window.location.origin;

    if (isExternal || link.target === "_blank" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();

    if (prefersReducedMotion) {
      window.location.href = link.href;
      return;
    }

    const transitionType = link.dataset.transition;
    document.documentElement.classList.add("is-transitioning");

    if (transitionType) {
      document.documentElement.classList.add(`transition-${transitionType}`);
    }

    window.setTimeout(() => {
      window.location.href = link.href;
    }, transitionDurations[transitionType] ?? 620);
  });
});

const modalBackdrop = document.querySelector("[data-modal-backdrop]");
const modalTriggers = document.querySelectorAll("[data-modal-target]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
let activeModalTrigger = null;

const openModal = (trigger) => {
  if (!modalBackdrop) {
    return;
  }

  activeModalTrigger = trigger;
  modalBackdrop.hidden = false;
  document.body.classList.add("is-modal-open");

  requestAnimationFrame(() => {
    modalBackdrop.classList.add("is-open");
    modalBackdrop.querySelector("[data-modal-close]")?.focus();
  });
};

const closeModal = () => {
  if (!modalBackdrop || modalBackdrop.hidden) {
    return;
  }

  modalBackdrop.classList.remove("is-open");
  document.body.classList.remove("is-modal-open");

  window.setTimeout(
    () => {
      modalBackdrop.hidden = true;
      activeModalTrigger?.focus();
      activeModalTrigger = null;
    },
    prefersReducedMotion ? 0 : 360
  );
};

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(trigger);
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (event) => {
    if (event.target === modalBackdrop) {
      closeModal();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });
}

const revealItems = document.querySelectorAll(".section-reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
