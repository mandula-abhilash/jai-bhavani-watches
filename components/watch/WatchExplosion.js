"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Exploded mechanical watch animation. Built in the browser from SVG parts.
// No libraries, images or fonts. Internal construction is illustrative.
// Ref API: setProgress(0..1), play(), pause(), isPlaying().
const WatchExplosion = forwardRef(function WatchExplosion({ className = "", onState }, ref) {
  const rootRef = useRef(null);
  const apiRef = useRef(null);

  useImperativeHandle(ref, () => ({
    setProgress: (v) => apiRef.current && apiRef.current.setProgress(v),
    play: () => apiRef.current && apiRef.current.play(),
    pause: () => apiRef.current && apiRef.current.pause(),
    isPlaying: () => (apiRef.current ? apiRef.current.isPlaying() : false),
  }));

  useEffect(() => {
    const root = rootRef.current;
    const watch = root.querySelector(".we-watch");

    // Unique SVG IDs prevent collisions with other illustrations.
    const uid = "we-" + Math.random().toString(36).slice(2);
    const paint = (name) => `url(#${uid}-${name})`;
    const steel = paint("steel");
    const gold = paint("gold");

    const definitions = `
    <defs>
      <linearGradient id="${uid}-steel" x1="0%" y1="0%" x2="100%" y2="80%">
        <stop stop-color="#586b7e"/>
        <stop offset=".18" stop-color="#e7edf1"/>
        <stop offset=".33" stop-color="#8393a2"/>
        <stop offset=".50" stop-color="#f1f4f5"/>
        <stop offset=".65" stop-color="#596d80"/>
        <stop offset=".83" stop-color="#bdc8d0"/>
        <stop offset="1" stop-color="#344a60"/>
      </linearGradient>
      <linearGradient id="${uid}-gold">
        <stop stop-color="#7d6230"/>
        <stop offset=".30" stop-color="#e6cf94"/>
        <stop offset=".60" stop-color="#b89c5b"/>
        <stop offset="1" stop-color="#fae4ab"/>
      </linearGradient>
      <radialGradient id="${uid}-blue">
        <stop stop-color="#2462a3"/>
        <stop offset=".65" stop-color="#124b88"/>
        <stop offset="1" stop-color="#092d59"/>
      </radialGradient>
      <linearGradient id="${uid}-glass">
        <stop stop-color="#a9d7ed" stop-opacity=".15"/>
        <stop offset=".40" stop-color="#fff" stop-opacity=".01"/>
        <stop offset=".65" stop-color="#fff" stop-opacity=".06"/>
        <stop offset="1" stop-color="#b3dbef" stop-opacity=".20"/>
      </linearGradient>
    </defs>`;

    const defsHost = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    defsHost.setAttribute("width", "0");
    defsHost.setAttribute("height", "0");
    defsHost.style.position = "absolute";
    defsHost.setAttribute("aria-hidden", "true");
    defsHost.innerHTML = definitions;
    root.prepend(defsHost);

    // z: assembled depth. Exploded positions are set afterwards so parts spread
    // evenly along the watch axis and never cross each other.
    const parts = [];
    function part(name, svg, z, label, sub) {
      const element = document.createElement("div");
      element.className = "we-part";
      element.dataset.part = name;
      element.innerHTML = `<svg viewBox="0 0 340 340" aria-hidden="true">${svg}</svg>`;
      watch.appendChild(element);
      parts.push({ element, z, label, sub });
      return element;
    }

    function screw(x, y) {
      return `
      <g transform="translate(${x} ${y})">
        <circle r="4.8" fill="#27568e" stroke="#8cadd2" stroke-width=".7"/>
        <path d="M-3 0H3" stroke="#091c37" stroke-width="1.4"/>
      </g>`;
    }

    function screws(points) {
      return points.map(([x, y]) => screw(x, y)).join("");
    }

    function gear(x, y, radius, teeth = 24, material = gold) {
      let svg = `<g transform="translate(${x} ${y})"><g class="we-gear" data-speed="${radius > 25 ? 1 : -1.6}">`;
      for (let i = 0; i < teeth; i++) {
        svg += `<rect x="-2" y="${-radius - 3}" width="4" height="7" rx=".5" transform="rotate(${(i * 360) / teeth})" fill="${material}"/>`;
      }
      svg += `<circle r="${radius}" fill="${material}" stroke="#6f633d" stroke-width=".8"/><circle r="${radius * 0.77}" fill="#0b1a2b"/>`;
      for (let i = 0; i < 5; i++) {
        svg += `<path d="M0 0V${-radius * 0.85}" transform="rotate(${i * 72})" stroke="${material}" stroke-width="${radius * 0.15}"/>`;
      }
      return (
        svg +
        `<circle r="${radius * 0.2}" fill="${material}"/>
         <circle r="2.3" fill="#881a46" stroke="#eab0cb" stroke-width=".5"/>
        </g></g>`
      );
    }

    function concentric(cx, cy, start, step, count, color, opacity = 1) {
      return Array.from(
        { length: count },
        (_, i) => `<circle cx="${cx}" cy="${cy}" r="${start + i * step}" fill="none" stroke="${color}" stroke-width=".7" opacity="${opacity}"/>`
      ).join("");
    }

    // 01. Leather strap.
    let stitching = "";
    for (let y = -150; y < 510; y += 11) {
      stitching += `<path d="M127 ${y}v5 M213 ${y}v5" stroke="#6680a1" stroke-width="1.3"/>`;
    }
    part(
      "Leather strap",
      `
      <path d="M119 47L116 -155Q170 -174 224 -155L221 47 M119 292L122 503Q170 529 218 503L221 292" fill="#132a48" stroke="#39506b" stroke-width="3"/>
      <path d="M126 -155Q150 -163 170 -158L211 -150L213 39H127Z M127 301H212L211 493Q170 513 129 494Z" fill="#172f4f"/>
      ${stitching}
      <path d="M145 421h50m-50 20h50m-50 20h50" stroke="#081322" stroke-width="3"/>`,
      -5
    );

    // 02. Exhibition caseback.
    part(
      "Exhibition caseback",
      `
      <circle cx="170" cy="170" r="137" fill="none" stroke="${steel}" stroke-width="16"/>
      <circle cx="170" cy="170" r="123" fill="#8cc1db" fill-opacity=".06" stroke="#8da0b5" stroke-width="2"/>
      <text x="170" y="282" text-anchor="middle" font-size="6" letter-spacing="3" fill="#c2cbd3">JAI BHAVANI · SANGAREDDY</text>
      ${screws([[91, 82], [249, 82], [91, 258], [249, 258]])}`,
      -36, "Case back", "Opened with care"
    );

    // 03. Sealing gasket.
    part(
      "Sealing gasket",
      `
      <circle cx="170" cy="170" r="126" fill="none" stroke="#141b25" stroke-width="6"/>
      <circle cx="170" cy="170" r="128" fill="none" stroke="#445466" stroke-width=".7"/>`,
      -31
    );

    // 04. Automatic winding rotor.
    part(
      "Automatic winding rotor",
      `
      <g transform="rotate(28 170 170)">
        <path d="M52 170A118 118 0 0 0 288 170 L258 164A88 88 0 0 1 82 164Z" fill="${gold}" stroke="#f0d4a0" stroke-width="1.5"/>
        <path d="M68 174A103 103 0 0 0 272 174" fill="none" stroke="#775e33"/>
        <path d="M170 170L91 245L119 265L179 187 L228 266L254 247L184 164Z" fill="${gold}"/>
        <circle cx="170" cy="170" r="18" fill="${steel}" stroke="#45576c" stroke-width="3"/>
        <circle cx="170" cy="170" r="7" fill="#182f4c"/>
        ${screw(170, 170)}
        <text x="170" y="267" text-anchor="middle" font-size="7" letter-spacing="2" fill="#66502b">SERVICED BY DEEPU</text>
      </g>`,
      -26, "Automatic rotor", "Checked and oiled"
    );

    // 05. Winding bridge.
    part(
      "Automatic winding bridge",
      `
      <path d="M64 107Q97 49 177 53L235 86L211 127L171 105 L119 131L97 189L56 174Z" fill="${steel}" stroke="#53667c" stroke-width="2"/>
      <path d="M105 215L140 198L200 218L230 188L267 211 L232 266L155 280L99 252Z" fill="${steel}" stroke="#53667c" stroke-width="2"/>
      ${gear(103, 105, 18, 18)}
      ${gear(144, 87, 15, 16)}
      ${screws([[76, 130], [180, 75], [127, 239], [232, 233]])}`,
      -22
    );

    // 06. Mainspring barrel.
    part(
      "Mainspring barrel",
      `
      <circle cx="124" cy="111" r="40" fill="${gold}" stroke="#80653b" stroke-width="3"/>
      <circle cx="124" cy="111" r="31" fill="#344258" stroke="#d8c08a" stroke-width="2"/>
      ${concentric(124, 111, 4, 2.7, 9, "#a49c82")}
      <path d="M124 111V78" stroke="#d5bc7e" stroke-width="3"/>
      ${screw(124, 111)}
      ${gear(228, 210, 30, 28)}`,
      -17, "Mainspring barrel", "Replaced when worn"
    );

    // 07. Going train.
    part(
      "Going train wheels",
      `
      ${gear(170, 164, 36, 30)}
      ${gear(219, 136, 26, 26)}
      ${gear(234, 180, 18, 20)}
      ${gear(194, 216, 23, 24)}
      ${gear(149, 223, 14, 16)}`,
      -12, "Gear train", "Chemical wash, fresh oil"
    );

    // 08. Balance and hairspring.
    part(
      "Balance wheel and hairspring",
      `
      <g transform="translate(90 220)">
        <circle r="33" fill="none" stroke="${gold}" stroke-width="5"/>
        <circle r="28" fill="none" stroke="#b4a88b" stroke-width=".7"/>
        ${concentric(0, 0, 3, 2.2, 9, "#a3b3c9")}
        <path d="M-30 0H30M0 -30V30" stroke="${gold}" stroke-width="2.5"/>
        <circle r="4" fill="#b62f57"/>
      </g>
      <path d="M63 246L93 228L132 240L139 263L104 273L66 266Z" fill="${steel}" stroke="#5b6d82" stroke-width="2"/>
      ${screws([[78, 258], [126, 252]])}
      <path d="M114 209L134 188L146 197L127 220Z" fill="${gold}"/>`,
      -8, "Balance and hairspring", "Repaired or replaced"
    );

    // 09. Chronograph clutch and levers.
    part(
      "Chronograph clutch and levers",
      `
      ${gear(169, 150, 27, 26, steel)}
      ${gear(212, 202, 21, 22)}
      ${gear(122, 170, 18, 20, steel)}
      <path d="M77 105L127 123L177 99L248 117L238 132 L181 117L130 142L73 122Z" fill="${steel}" stroke="#53667c" stroke-width="2"/>
      <path d="M250 132L268 148L232 214L197 234L180 218L220 202Z" fill="${steel}" stroke="#53667c" stroke-width="2"/>
      ${gear(243, 103, 15, 10, "#3b73b0")}
      ${screws([[91, 114], [182, 109], [252, 152]])}`,
      -4
    );

    // 10. Skeleton chronograph bridge.
    part(
      "Chronograph bridge",
      `
      <path d="M68 77Q115 37 164 54L181 82L154 108L104 105L79 155L57 151Z M191 72L239 67L270 116L250 156L224 143L237 113L204 104Z M141 245L170 215L199 239L243 226L266 245L228 280L165 286Z" fill="${steel}" stroke="#53667c" stroke-width="2"/>
      ${screws([[90, 85], [237, 90], [173, 258], [236, 251]])}
      <circle cx="134" cy="80" r="5" fill="#9f244c" stroke="#e7a0bd"/>
      <circle cx="220" cy="111" r="4" fill="#9f244c"/>`,
      0, "Bridges and jewels", "Every jewel cleaned"
    );

    // 11. Perforated mainplate.
    part(
      "Mainplate and dial supports",
      `
      <path fill-rule="evenodd" d="M170 49A121 121 0 1 1 169.9 49Z M124 80A35 35 0 1 0 124.1 80Z M211 126A36 36 0 1 0 211.1 126Z M88 190A31 31 0 1 0 88.1 190Z M166 202A26 26 0 1 0 166.1 202Z" fill="${steel}" stroke="#5a6d80" stroke-width="1.5"/>
      ${screws([[170, 65], [263, 191], [161, 273], [68, 151]])}`,
      3, "Main plate", "Taken apart and cleaned"
    );

    // 12. Case, crown and pushers.
    let crownGrooves = "";
    for (let i = 0; i < 7; i++) crownGrooves += `<path d="M${315 + i * 2.7} 156V184" stroke="#415368"/>`;
    part(
      "Steel case, crown, and pushers",
      `
      <path d="M75 68L99 12L131 17L126 69 M213 69L209 17L240 12L264 68 M75 272L99 328L131 323L126 271 M213 271L209 323L240 328L264 272" fill="${steel}" stroke="#65778c" stroke-width="2"/>
      <circle cx="170" cy="176" r="143" fill="none" stroke="#4e6177" stroke-width="20"/>
      <circle cx="170" cy="170" r="143" fill="none" stroke="${steel}" stroke-width="16"/>
      <rect x="311" y="154" width="25" height="32" rx="5" fill="${steel}"/>
      ${crownGrooves}
      <g transform="rotate(-29 170 170)"><rect x="306" y="158" width="26" height="24" rx="3" fill="${steel}" stroke="#475970" stroke-width="2"/></g>
      <g transform="rotate(29 170 170)"><rect x="306" y="158" width="26" height="24" rx="3" fill="${steel}" stroke="#475970" stroke-width="2"/></g>`,
      7, "Case, crown and pushers", "Buffed, polished, new crown"
    );

    // 13. Blue dial and cream counters.
    let sunburst = "";
    let dialTicks = "";
    for (let i = 0; i < 120; i++) {
      sunburst += `<path d="M170 170V43" transform="rotate(${i * 3} 170 170)" stroke="#aac9ff" stroke-opacity=".05"/>`;
    }
    for (let i = 0; i < 60; i++) {
      const major = i % 5 === 0;
      dialTicks += `<path d="M170 51v${major ? 15 : 4}" transform="rotate(${i * 6} 170 170)" stroke="${major ? "#e1dfcb" : "#bac9df"}" stroke-width="${major ? 3.8 : 1}"/>`;
    }
    function subdial(x, y, radius) {
      let ticks = "";
      for (let i = 0; i < 30; i++) {
        ticks += `<path d="M0 ${-radius + 3}v${i % 5 === 0 ? 5 : 2}" transform="rotate(${i * 12})" stroke="#3d4447" stroke-width=".7"/>`;
      }
      return `
      <g transform="translate(${x} ${y})">
        <circle r="${radius}" fill="#d1cdb8" stroke="#ede8d5"/>
        ${concentric(0, 0, radius - 3, -2, 9, "#a7a58f", 0.25)}
        ${ticks}
        <text y="${-radius + 12}" text-anchor="middle" font-size="5" fill="#283140">30</text>
        <text x="${radius - 10}" y="2" text-anchor="middle" font-size="5" fill="#283140">10</text>
        <text y="${radius - 6}" text-anchor="middle" font-size="5" fill="#283140">20</text>
      </g>`;
    }
    part(
      "Blue chronograph dial",
      `
      <circle cx="170" cy="170" r="127" fill="${paint("blue")}" stroke="#adb6bd" stroke-width="2"/>
      ${sunburst}
      <circle cx="170" cy="170" r="112" fill="none" stroke="#a0bdd4" stroke-width=".6"/>
      ${dialTicks}
      ${subdial(101, 167, 33)}
      ${subdial(239, 167, 33)}
      ${subdial(170, 235, 32)}
      <text x="170" y="104" fill="#e0e4dd" font-family="Arial" font-size="9" text-anchor="middle" letter-spacing=".8">JAI BHAVANI</text>
      <text x="170" y="116" fill="#c4d0d9" font-size="6.5" text-anchor="middle" letter-spacing="1.8">SANGAREDDY</text>
      <path d="M166 85L170 78L174 85L170 92Z" fill="none" stroke="#e1e7e0"/>
      <text x="170" y="186" fill="#e6e4d0" font-size="6.5" text-anchor="middle" font-style="italic" letter-spacing="2">AUTOMATIC</text>
      <text x="170" y="61" text-anchor="middle" font-size="4.5" fill="#d6e0e9" letter-spacing="1.5">TELEMETER</text>`,
      15, "Dial", "Fresh luminous compound"
    );

    // 14. Main hands and counter hands.
    const counterHands = [
      [101, 167, -10],
      [239, 167, 30],
      [170, 235, 8],
    ]
      .map(
        ([x, y, angle]) => `
      <g transform="rotate(${angle} ${x} ${y})">
        <path d="M${x} ${y + 5}V${y - 25}" stroke="#26313b" stroke-width="2"/>
        <circle cx="${x}" cy="${y}" r="2.5" fill="${steel}"/>
      </g>`
      )
      .join("");
    part(
      "Hands",
      `
      <path d="M167 180L165 124L157 126L170 102L183 126L175 124L173 180Z" transform="rotate(-55 170 170)" fill="${steel}" stroke="#e6e6d9"/>
      <path d="M168 184L167 92L159 94L170 67L181 94L173 92L172 184Z" transform="rotate(45 170 170)" fill="${steel}" stroke="#f1eee0"/>
      <path d="M170 195V67" transform="rotate(168 170 170)" stroke="#deddd0"/>
      <circle cx="170" cy="170" r="5" fill="${steel}"/>
      ${counterHands}`,
      20, "Hands", "Lume and enamel redone"
    );

    // 15. Countdown bezel.
    let bezelMarks = "";
    for (let i = 0; i < 60; i++) {
      bezelMarks += `<path d="M170 25v${i % 5 === 0 ? 10 : 5}" transform="rotate(${i * 6} 170 170)" stroke="#e0e3d6" stroke-width="${i % 5 === 0 ? 2 : 1}"/>`;
    }
    for (let i = 1; i < 12; i++) {
      bezelMarks += `<text x="170" y="40" transform="rotate(${i * 30} 170 170)" text-anchor="middle" fill="#e0e3d6" font-family="Arial" font-size="10">${60 - i * 5}</text>`;
    }
    part(
      "Countdown bezel",
      `
      <circle cx="170" cy="170" r="143" fill="none" stroke="${steel}" stroke-width="16"/>
      <circle cx="170" cy="170" r="139" fill="none" stroke="#143858" stroke-width="24"/>
      ${bezelMarks}
      <path d="M164 26H176L170 37Z" fill="#e5e4d9"/>`,
      25, "Bezel", "Scratches buffed out"
    );

    // 16. Sapphire crystal.
    part(
      "Sapphire crystal",
      `
      <circle cx="170" cy="170" r="126" fill="${paint("glass")}" stroke="#b7d8ed" stroke-opacity=".45" stroke-width="1.7"/>
      <path d="M67 123Q96 52 187 49" fill="none" stroke="#f1f7ff" stroke-opacity=".35" stroke-width="2.5"/>
      <path d="M77 99Q129 66 202 65" fill="none" stroke="#f2f7ff" stroke-opacity=".08" stroke-width="12"/>`,
      31, "Crystal glass", "Sapphire, mineral or acrylic"
    );

    // Exploded layout: every part except the strap gets an evenly spaced slot
    // along the watch axis (pure Z movement), so nothing overlaps when open.
    const GAP = 58;
    const stack = parts.filter((p) => p.element.dataset.part !== "Leather strap").sort((a, b) => a.z - b.z);
    const mid = (stack.length - 1) / 2;
    stack.forEach((p, i) => {
      p.element.style.cssText = `--z:${p.z}px;--dz:${((i - mid) * GAP - p.z).toFixed(1)}px`;
    });
    parts.find((p) => p.element.dataset.part === "Leather strap").element.style.cssText = "--z:-5px;--dz:0px";
    parts.find((p) => p.element.dataset.part === "Leather strap").element.classList.add("we-strap");

    // Labels live inside their part, on its right rim, turned to face the viewer.
    const labelled = stack.filter((p) => p.label);
    const total = labelled.length;
    labelled.forEach((p, i) => {
      const n = String(total - i).padStart(2, "0");
      const a = (27 * Math.PI) / 180; // local angle that faces screen right after rotateZ(-27deg)
      const R = 152;
      const el = document.createElement("div");
      el.className = "we-label";
      el.style.left = `${(170 + Math.cos(a) * R).toFixed(1)}px`;
      el.style.top = `${(170 + Math.sin(a) * R).toFixed(1)}px`;
      el.innerHTML = `<span class="we-line"></span><span class="we-text"><b>${n}</b> / ${p.label}<small>${p.sub}</small></span>`;
      p.element.appendChild(el);
    });

    // Animation controller.
    const gears = [...root.querySelectorAll(".we-gear")];

    let progress = 0;
    let target = 0;
    let phase = 0;
    let playing = true;
    let visible = true;
    let destroyed = false;
    let previousTime = null;
    let gearTime = 0;
    let frameId;

    const clamp = (value) => Math.max(0, Math.min(1, value));
    const emit = () => onState && onState({ playing, progress: target });

    // Holds assembled briefly, separates, holds exploded, reassembles.
    function timeline(t) {
      const ease = (x) => x * x * (3 - 2 * x);
      if (t < 0.12) return 0;
      if (t < 0.46) return ease((t - 0.12) / 0.34);
      if (t < 0.62) return 1;
      if (t < 0.96) return 1 - ease((t - 0.62) / 0.34);
      return 0;
    }

    function fit() {
      const scale = Math.min(root.clientWidth / 620, root.clientHeight / 720);
      root.style.setProperty("--fit", scale);
    }

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(root);
    fit();

    const visibilityObserver = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      previousTime = null;
    });
    visibilityObserver.observe(root);

    let lastEmit = 0;
    function animate(now) {
      if (destroyed) return;
      const dt = previousTime === null ? 0 : Math.min((now - previousTime) / 1000, 0.05);
      previousTime = now;

      if (visible) {
        if (playing) {
          phase = (phase + dt / 14) % 1;
          target = timeline(phase);
        }
        // Always eased, whatever the OS animation setting, so scroll and slider never snap.
        progress = progress + (target - progress) * (1 - Math.exp(-7 * dt));
        root.style.setProperty("--explode", progress.toFixed(5));

        gearTime += dt * 4;
        for (const gearElement of gears) {
          gearElement.setAttribute("transform", `rotate(${gearTime * Number(gearElement.dataset.speed)})`);
        }
        if (playing && now - lastEmit > 120) {
          lastEmit = now;
          emit();
        }
      }
      frameId = requestAnimationFrame(animate);
    }

    apiRef.current = {
      setProgress(value) {
        playing = false;
        const number = Number(value);
        target = Number.isFinite(number) ? clamp(number) : 0;
        // keep the loop in step so Play continues from here
        phase = 0.12 + target * 0.34;
        emit();
      },
      play() {
        playing = true;
        emit();
      },
      pause() {
        playing = false;
        target = progress;
        emit();
      },
      isPlaying: () => playing,
    };
    emit();
    frameId = requestAnimationFrame(animate);

    return () => {
      destroyed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      watch.replaceChildren();
      defsHost.remove();
      apiRef.current = null;
    };
  }, [onState]);

  return (
    <div ref={rootRef} className={`watch-explosion ${className}`} role="img" aria-label="Exploded mechanical chronograph animation">
      <div className="we-stage">
        <div className="we-shadow" />
        <div className="we-watch" />
      </div>
    </div>
  );
});

export default WatchExplosion;
