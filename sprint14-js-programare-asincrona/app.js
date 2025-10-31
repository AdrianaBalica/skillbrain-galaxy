window.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const navButtons = document.querySelectorAll("nav button");
    const destinationTabs = document.getElementById("destination-tabs");
  
    let data = {};
    let crewIndex = 0;
    let techIndex = 0;
  
    // Fetch JSON data
    fetch("data.json")
      .then((res) => res.json())
      .then((json) => {
        data = json;
        renderSection("home");
      })
      .catch((err) => {
        console.error("Error loading data.json:", err);
        content.textContent = "Failed to load data.";
      });
  
    // Function to change body background via class
    function setBodyClass(section) {
      document.body.className = section;
    }
  
    // Function to switch main section
    function renderSection(section) {
      content.textContent = "";
      destinationTabs.classList.add("hidden");
      setBodyClass(section);
  
      switch (section) {
        case "home":
          renderHome();
          break;
        case "destination":
          destinationTabs.classList.remove("hidden");
          renderPlanet("Moon");
          break;
        case "crew":
          renderCrew();
          break;
        case "technology":
          renderTechnology();
          break;
      }
  
      navButtons.forEach((btn) => btn.classList.remove("active"));
      document
        .querySelector(`nav button[data-section="${section}"]`)
        .classList.add("active");
    }
  
    // Navigation buttons
    navButtons.forEach((btn) => {
      btn.addEventListener("click", () => renderSection(btn.dataset.section));
    });
  
    // Destination tabs
    destinationTabs.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => renderPlanet(btn.dataset.planet));
    });
  
    // ============ HOME ============
    function renderHome() {
      const container = document.createElement("div");
      container.classList.add("fade-in");
  
      const textDiv = document.createElement("div");
      const h1 = document.createElement("h1");
      h1.textContent = "So, you want to travel to";
      const span = document.createElement("span");
      span.textContent = "SPACE";
      span.style.display = "block";
      span.style.fontSize = "5rem";
      span.style.fontFamily = "Bellefair";
      h1.appendChild(span);
  
      const p = document.createElement("p");
      p.textContent =
        "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not just hover kind of on the edge of it.";
  
      const exploreBtn = document.createElement("button");
      exploreBtn.classList.add("explore-btn");
      exploreBtn.textContent = "Explore";
      exploreBtn.addEventListener("click", () => renderSection("destination"));
  
      textDiv.append(h1, p);
      container.append(textDiv, exploreBtn);
      content.appendChild(container);
    }
  
    // ============ DESTINATION ============
    function renderPlanet(name) {
      const planet = data.destinations.find((p) => p.name === name);
      if (!planet) return;
  
      content.textContent = "";
      const container = document.createElement("div");
      container.classList.add("fade-in");
  
      const h2 = document.createElement("h2");
      h2.textContent = planet.name;
  
      const img = document.createElement("img");
      img.src = planet.images.png;
      img.alt = planet.name;
  
      const desc = document.createElement("p");
      desc.textContent = planet.description;
  
      const distance = document.createElement("p");
      distance.innerHTML = `<strong>Distance:</strong> ${planet.distance}`;
  
      const travel = document.createElement("p");
      travel.innerHTML = `<strong>Travel Time:</strong> ${planet.travel}`;
  
      container.append(h2, img, desc, distance, travel);
      content.appendChild(container);
  
      destinationTabs.querySelectorAll("button").forEach((btn) =>
        btn.classList.remove("active")
      );
      destinationTabs
        .querySelector(`button[data-planet="${name}"]`)
        .classList.add("active");
    }
  
    // ============ CREW ============
    function renderCrew() {
      const member = data.crew[crewIndex];
      content.textContent = "";
      const container = document.createElement("div");
      container.classList.add("fade-in");
  
      const role = document.createElement("h3");
      role.textContent = member.role;
  
      const name = document.createElement("h2");
      name.textContent = member.name;
  
      const img = document.createElement("img");
      img.src = member.images.png;
      img.alt = member.name;
  
      const bio = document.createElement("p");
      bio.textContent = member.bio;
  
      const dots = document.createElement("div");
      dots.className = "dot-nav";
      data.crew.forEach((_, index) => {
        const dot = document.createElement("input");
        dot.type = "radio";
        dot.name = "crew-nav";
        dot.className = "dot";
        dot.checked = index === crewIndex;
        dot.addEventListener("change", () => {
          crewIndex = index;
          renderCrew();
        });
        dots.appendChild(dot);
      });
  
      container.append(role, name, img, bio, dots);
      content.appendChild(container);
    }
  
    // ============ TECHNOLOGY ============
    function renderTechnology() {
      const item = data.technology[techIndex];
      if (!item) return;
  
      content.textContent = "";
      const container = document.createElement("div");
      container.classList.add("fade-in");
  
      const subtitle = document.createElement("h4");
      subtitle.textContent = "03 SPACE LAUNCH 101";
  
      const name = document.createElement("h2");
      name.textContent = item.name;
  
      const img = document.createElement("img");
      // ✅ corectă: landscape pe ecrane mici, portrait pe mari
      img.src =
        window.innerWidth < 768
          ? item.images.landscape
          : item.images.portrait;
      img.alt = item.name;
  
      const desc = document.createElement("p");
      desc.textContent = item.description;
  
      const dots = document.createElement("div");
      dots.className = "dot-nav";
      data.technology.forEach((_, index) => {
        const dot = document.createElement("input");
        dot.type = "radio";
        dot.name = "tech-nav";
        dot.className = "dot";
        dot.checked = index === techIndex;
        dot.addEventListener("change", () => {
          techIndex = index;
          renderTechnology();
        });
        dots.appendChild(dot);
      });
  
      container.append(subtitle, name, img, desc, dots);
      content.appendChild(container);
    }
  });
  