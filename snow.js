(() => {
  if (window.__christmasSnowInitialized) return;
  window.__christmasSnowInitialized = true;

  const FLAKES_PER_SECOND = 4;
  const MAX_ACTIVE_FLAKES = 120;

  const container = document.createElement("div");
  container.id = "christmas-snow-container";
  document.documentElement.appendChild(container);

  let activeFlakes = 0;

  function createSnowflake() {
    if (activeFlakes >= MAX_ACTIVE_FLAKES) return;

    const flake = document.createElement("div");
    flake.className = "christmas-snowflake";

    const symbols = ["✻", "✼", "✲", "✵"];
    flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    const size = 8 + Math.random() * 14;
    flake.style.fontSize = size + "px";

    const startLeft = Math.random() * 100;
    flake.style.left = startLeft + "vw";

    const drift = (Math.random() - 0.5) * 200;
    flake.style.setProperty("--x-drift", drift + "px");

    const duration = 6 + Math.random() * 6;
    flake.style.animationDuration = duration + "s";

    const delay = Math.random() * 3;
    flake.style.animationDelay = delay + "s";

    activeFlakes++;
    container.appendChild(flake);

    flake.addEventListener("animationend", () => {
      flake.remove();
      activeFlakes--;
    });
  }

  setInterval(() => {
    for (let i = 0; i < FLAKES_PER_SECOND; i++) {
      createSnowflake();
    }
  }, 1000);
})();
