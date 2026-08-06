
(function () {
  const grid = document.getElementById("grid");
  const overlay = document.getElementById("overlay");
  const dossier = document.getElementById("dossier");
  const sortButtons = document.querySelectorAll(".sort-tabs button");

  const ROLE_ORDER = ["근접 딜러", "탱커", "암살자", "저격수", "마법사", "서포터", "컨트롤러"];

  const ROLE_META = {
    "근접 딜러": { color: "#eb2e57", icon: "icons/melee.png" },
    "탱커": { color: "#37b2ba", icon: "icons/tank.png" },
    "암살자": { color: "#c99a9a", icon: "icons/assassin.png" },
    "저격수": { color: "#14c45a", icon: "icons/sniper.png" },
    "마법사": { color: "#6f4ef0", icon: "icons/mage.png" },
    "서포터": { color: "#91e570", icon: "icons/support.png" },
    "컨트롤러": { color: "#ffb820", icon: "icons/controller.png" }
  };

  let currentSort = "order";

  /* ---------------- sorting ---------------- */

  function sortCharacters(list, mode) {
    const visible = list.filter((c) => !c.hidden);
    const hidden = list.filter((c) => c.hidden);

    let sorted;
    switch (mode) {
      case "role":
        sorted = [...visible].sort((a, b) => {
          const ra = ROLE_ORDER.indexOf(a.role);
          const rb = ROLE_ORDER.indexOf(b.role);
          const ia = ra === -1 ? ROLE_ORDER.length : ra;
          const ib = rb === -1 ? ROLE_ORDER.length : rb;
          if (ia !== ib) return ia - ib;
          return a.order - b.order;
        });
        break;
      case "alpha":
        sorted = [...visible].sort((a, b) => a.name.localeCompare(b.name, "ko"));
        break;
      case "release":
        sorted = [...visible].sort((a, b) => a.releaseDate - b.releaseDate);
        break;
      case "order":
      default:
        sorted = [...visible].sort((a, b) => a.order - b.order);
        break;
    }
    return sorted.concat(hidden);
  }

  /* ---------------- rendering ---------------- */

  function renderGrid() {
    const sorted = sortCharacters(CHARACTERS, currentSort);
    grid.innerHTML = "";

    let lastRole = null;
    sorted.forEach((c) => {
      if (currentSort === "role" && !c.hidden && c.role !== lastRole) {
        lastRole = c.role;
        const divider = document.createElement("div");
        divider.className = "group-divider";
        divider.textContent = c.role;
        if (ROLE_META[c.role]) {
          divider.style.setProperty("--role-color", ROLE_META[c.role].color);
        }
        grid.appendChild(divider);
      }
      grid.appendChild(buildCard(c));
    });
  }

  function buildCard(c) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card" + (c.hidden ? " card--locked" : "");
    card.setAttribute("aria-label", c.hidden ? "미공개 캐릭터" : c.name + " 상세 정보 열기");
    if (!c.hidden && ROLE_META[c.role]) {
      card.style.setProperty("--role-color", ROLE_META[c.role].color);
    }

    const portraitInner = c.hidden
      ? '<span class="lock-mark">?</span>'
      : c.portrait
      ? `<img src="${c.portrait}" alt="${c.name} 초상화" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'card__noimg\\'>NO<br>IMAGE</div>'">`
      : '<div class="card__noimg">NO<br>IMAGE</div>';

    const meta = ROLE_META[c.role];
    const roleIconHTML =
      !c.hidden && meta && meta.icon
        ? `<img class="card__role-icon" src="${meta.icon}" alt="${c.role}" loading="lazy">`
        : "";

    card.innerHTML = `
      <div class="card__portrait">${portraitInner}</div>
      <div class="card__label">
        <div class="card__id">
          ${roleIconHTML}
          <span class="card__name">${c.hidden ? "???" : c.name}</span>
        </div>
      </div>
    `;

    if (!c.hidden) {
      card.addEventListener("click", () => openDossier(c));
    }
    return card;
  }

  /* ---------------- dossier popup ---------------- */

  function openDossier(c) {
    dossier.innerHTML = buildDossierHTML(c);
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    const closeBtn = dossier.querySelector(".dossier__close");
    if (closeBtn) closeBtn.addEventListener("click", closeDossier);
    dossier.scrollTop = 0;
  }

  function closeDossier() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function buildDossierHTML(c) {
    const keywordsHTML = c.keywords.length
      ? `<div class="keywords">${c.keywords
          .map((k) => `<span class="keyword"><span class="keyword__emoji">${k.emoji}</span>${k.text}</span>`)
          .join("")}</div>`
      : "";

    const passiveHTML =
      c.passive && c.passive.name
        ? `<div class="passive-block"><div class="passive-name">${c.passive.name}</div><div class="passive-desc">${c.passive.description}</div></div>`
        : '<div class="passive-empty">등록된 패시브 효과가 없습니다.</div>';

    const portraitInner = c.portrait
      ? `<img src="${c.portrait}" alt="${c.name} 초상화" onerror="this.parentElement.innerHTML='<div class=\\'dossier__noimg\\'>NO<br>IMAGE</div>'">`
      : '<div class="dossier__noimg">NO<br>IMAGE</div>';

    const roleMeta = ROLE_META[c.role];
    const roleColor = roleMeta ? roleMeta.color : "var(--text-faint)";
    const roleIconHTML = roleMeta && roleMeta.icon
      ? `<img class="dossier__role-icon" src="${roleMeta.icon}" alt="">`
      : "";

    const hpPercent = ((c.hp - 15) / (50 - 15)) * 100;

    const abilityBlocksHTML = buildAbilityBlocksHTML(c);

    return `
      <div class="dossier__head" style="--role-color:${roleColor}">
        <button type="button" class="dossier__close" aria-label="닫기">✕</button>
        <div class="dossier__portrait"><div class="dossier__portrait-frame">${portraitInner}</div></div>
        <div class="dossier__headtext">
          <div class="dossier__eyebrow" style="color:${roleColor}">${roleIconHTML}${c.role || "-"}</div>
          <div class="dossier__name">${c.name}</div>
          <div class="dossier__meta">
            <span>제작자&nbsp;<b>${c.creator || "-"}</b></span>
          </div>
          <div class="keyword-hp-row">
            ${keywordsHTML}
            <div class="hp-mini">
              <span class="hp-mini__label">체력</span>
              <div class="hp-bar-wrapper hp-bar-wrapper--mini">
                <div class="hp-bar-fill" style="width:${hpPercent}%"></div>
              </div>
              <span class="hp-mini__value">${c.hp}</span>
            </div>
          </div>
          <p class="story-text story-text--compact">${c.story || "등록된 스토리가 없습니다."}</p>
        </div>
      </div>
      <div class="dossier__body">

        <div class="section">
          <div class="ability-table">
            ${abilityBlocksHTML}
          </div>
        </div>

        <div class="section">
          <div class="section__title">패시브</div>
          ${passiveHTML}
        </div>

      </div>
    `;
  }

  /* 무기 / 스킬 / 궁극기를 4열 고정 표에 배치한다.
     - 열은 항상 [기본무기] [스킬] [스킬] [궁극기] 4개로 고정.
     - weapon, ultimate: 객체(기본) 또는 배열(특수 케이스, 예: 무기 2개)을 모두 허용.
     - skills: 배열이며 2개씩 한 줄에 채워지고, 4개면 두 번째 줄의 스킬칸을 채운다.
     - 무기/궁극기가 한 줄 더 있으면 해당 칸 아래로 한 줄이 늘어나고,
       그 줄의 나머지 칸(스킬 등)에 데이터가 없으면 비워둔다 (표 전체가 아니라 그 칸만 늘어남).
     - 각 항목에 label을 직접 지정하면 ("인간 - 기본 무기" 등) 자동 번호 대신 그 텍스트를 쓴다. */
  function buildAbilityBlocksHTML(c) {
    const weapons = Array.isArray(c.weapon) ? c.weapon : [c.weapon];
    const skills = Array.isArray(c.skills) ? c.skills : [];
    const ultimates = Array.isArray(c.ultimate) ? c.ultimate : [c.ultimate];

    const rowCount = Math.max(weapons.length, Math.ceil(skills.length / 2), ultimates.length, 1);

    let html = "";

    for (let r = 0; r < rowCount; r++) {
      const w = weapons[r];
      const s1 = skills[r * 2];
      const s2 = skills[r * 2 + 1];
      const u = ultimates[r];

      html += cell(
        w,
        w && (w.label || (weapons.length > 1 ? `기본 무기 ${r + 1}` : "기본 무기")),
        w && w.type,
        w && w.description,
        "ability-col--weapon"
      );
      html += cell(
        s1,
        s1 && (s1.label || `스킬 ${r * 2 + 1}`),
        s1 && s1.cooldown,
        s1 && s1.description,
        "ability-col--skill"
      );
      html += cell(
        s2,
        s2 && (s2.label || `스킬 ${r * 2 + 2}`),
        s2 && s2.cooldown,
        s2 && s2.description,
        "ability-col--skill"
      );
      html += cell(
        u,
        u && (u.label || (ultimates.length > 1 ? `궁극기 ${r + 1}` : "궁극기")),
        u && u.gauge,
        u && u.description,
        "ability-col--ultimate"
      );
    }

    return html;

    function cell(data, label, tag, desc, typeClass) {
      if (!data) return `<div class="ability-col ability-col--empty"></div>`;
      return `
        <div class="ability-col ${typeClass}">
          <div class="ability-col__head">${label}</div>
          <div class="ability-col__body">
            <div class="ability-col__name">${data.name} <span class="ability-col__tag">${tag || ""}</span></div>
            <div class="ability-col__desc">${desc || ""}</div>
          </div>
        </div>
      `;
    }
  }

  /* ---------------- events ---------------- */

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeDossier();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDossier();
  });

  sortButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      sortButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentSort = btn.dataset.sort;
      renderGrid();
    });
  });

  /* ---------------- init ---------------- */
  renderGrid();
})();
