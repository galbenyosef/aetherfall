// index-BTsv3a2s 235 — math
// Lines 148360-157405 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var Zse = { r: 0.6, a: 0.35 },
  Qse = { quiet: 0.35, rite: 1, reclaim: 0.8, singing: 1.2, hollowed: 1 },
  $se = class {
    canvas;
    display;
    scene;
    sctx;
    lightC;
    lctx;
    depthC;
    dctx;
    stampC;
    stampCtx;
    vignette = null;
    ground;
    scenery;
    inView = [];
    warmTick = 0;
    minimap;
    miniTarget = null;
    api;
    myId;
    school;
    name;
    viewW = 480;
    viewH = 270;
    scale = 3;
    dens = Op();
    zoom = 1;
    story = null;
    townsfolk;
    quests;
    scenes;
    mods = bu();
    dome = { power: 0.35, target: 0.35, hits: [], cracks: [], breach: 0 };
    me = {
      x: 0,
      y: 0,
      dir: 0,
      moving: !1,
      anim: 0,
      castT: 0,
      flash: 0,
      castFx: null,
      blinkFx: null,
    };
    meDoc = null;
    mana = 100;
    cdUntil = {};
    lastSent = { x: 0, y: 0, moving: !1, dir: 0, t: 0 };
    deadSince = 0;
    remotes = new Map();
    drops = new Map();
    remains = new Map();
    wanted = new Map();
    slainBy = null;
    lastPvp = null;
    writLost = !1;
    writSeenAt = -1e9;
    wardSaidAt = -1e9;
    pickupWait = new Map();
    monsters = new Map();
    altars = new Map();
    channel = null;
    homeWalk = null;
    hearth = null;
    home;
    travelUntil = 0;
    travelFrom = null;
    lastRdt = 0;
    buffs = [];
    roadFx = [];
    seenFx = new Set();
    fxInit = !1;
    seenMsgs = new Set();
    msgInit = !1;
    particles = new JW();
    projectiles = [];
    fallingArrows = [];
    guardUntil = 0;
    guardFace = 0;
    blockFelt = new Map();
    guardPaid = new Set();
    domes = [];
    timers = [];
    beams = [];
    rings = [];
    rifts = [];
    floaters = [];
    telegraphs = [];
    decals = [];
    meteors = [];
    lights = [];
    enemy = new Q1();
    fx3d = null;
    hd = null;
    standIns = [];
    fx3dLoading = null;
    fx3dFailed = !1;
    frameMs = 1e3 / 60;
    frameDt = 0;
    stamping = !1;
    hdLast = !1;
    hdAim = null;
    hdHold = 0;
    roomGlows = [0, 0];
    hdHouse = null;
    houseArtLast = null;
    devNoLight = !1;
    hudToOverlay = !1;
    hpBars = [];
    liveAnim = new Noe();
    liveMages = new Foe();
    blinkGraceUntil = 0;
    veilUntil = 0;
    quiver = {};
    remoteAmmo = new Map();
    god = !1;
    chillUntil = 0;
    chillK = 0;
    felt = new Map();
    zoneMaxMana = 0;
    zoneSpeed = 1;
    stamina = de();
    zoneMaxStamina = 0;
    sprintK = 0;
    sprintSpent = !1;
    lastSpendAt = -99;
    cam = { x: 0, y: 0 };
    shake = 0;
    flash = { color: `#ffffff`, a: 0 };
    hurtFlash = 0;
    timeScale = 1;
    slowUntil = 0;
    slowScale = m8;
    time = 0;
    real = 0;
    combatAt = -99;
    keys = new Ri();
    taken = new WeakSet();
    mouse = { sx: 0, sy: 0, down: !1, right: !1 };
    aimSet = !1;
    lastWalk = { x: 0, y: 0, at: -99 };
    blinkHold = null;
    blinkView = null;
    camLead = { x: 0, y: 0 };
    blinkSpan = 0;
    touchMode = GG;
    stick = { x: 0, y: 0 };
    stickSprint = !1;
    padSprint = !1;
    pad = new yX();
    navRepeat = new SX();
    padMove = { x: 0, y: 0 };
    padLook = { x: 0, y: 0 };
    padHeld = new Set();
    padPick = null;
    aimCache = null;
    uiOpen = !1;
    askUp = !1;
    get mageMenuFor() {
      return this.menuFor;
    }
    set mageMenuFor(e) {
      (e === null &&
        this.menuFor !== null &&
        (this.mageMenuShut = performance.now()),
        (this.menuFor = e));
    }
    menuFor = null;
    mageMenuSince = 0;
    mageMenuShut = -1 / 0;
    plateHover = null;
    partyNames = new Set();
    mouseOnWorld = !1;
    ask = DX;
    hudRects = [];
    hudScreen = null;
    headPlaces = new Map();
    marksDrawn = [];
    meDrawn = null;
    moveIntent = { x: 0, y: 0 };
    wallProbe = new Map();
    momentum = new xse();
    netSteps = [];
    net = null;
    heldSlot = null;
    aimTouch = null;
    houseTouch = null;
    lastTouch = -1e9;
    bars = 0;
    barsTarget = 0;
    cine = null;
    sceneLast = -1 / 0;
    cineHintDrawn = null;
    banner = null;
    region = `sanctum`;
    hovered = null;
    room = null;
    dungeon = null;
    get solo() {
      return this.dungeon && !this.dungeon.hosted ? this.dungeon : null;
    }
    delves = null;
    fadeGoal = 0;
    leftRun = 0;
    transit = null;
    doorFade = 0;
    doorCd = 0;
    snapCam = !1;
    talkable = null;
    talkTurn = new Map();
    raf = 0;
    lastFrame = 0;
    disposed = !1;
    cleanup = [];
    constructor(e, t) {
      ((this.canvas = e),
        (this.display = e.getContext(`2d`)),
        (this.api = t.api),
        (this.myId = t.myId),
        (this.home = new bse(t.myId)),
        (this.school = t.school),
        (this.name = t.name),
        ([this.scene, this.sctx] = M(this.viewW, this.viewH)),
        ([this.lightC, this.lctx] = M(this.viewW, this.viewH)),
        ([this.depthC, this.dctx] = M(this.viewW, this.viewH)),
        ([this.stampC, this.stampCtx] = M(this.viewW, this.viewH)),
        (this.enemy.skip3d = (e, t) =>
          !!this.fx3d && this.fx3d.layer.on && $3(e, t)),
        (this.scenery = new HJ()),
        (this.ground = new qP(this.scenery.shadows)),
        (this.minimap = YP()),
        (this.townsfolk = new Z$(this)),
        (this.quests = new w$(this)),
        (this.scenes = new tY(this)),
        (this.mana = ze(1)),
        this.bindInput(),
        this.resize());
    }
    start() {
      this.lastFrame = performance.now();
      let e = (t) => {
        if (this.disposed) return;
        let n = Math.max(0, Math.min(0.05, (t - this.lastFrame) / 1e3));
        ((this.frameDt = (t - this.lastFrame) / 1e3),
          t > this.lastFrame &&
            (this.frameMs +=
              (Math.min(1e3, t - this.lastFrame) - this.frameMs) * 0.08),
          (this.lastFrame = t),
          this.update(n),
          this.render(),
          (this.raf = requestAnimationFrame(e)));
      };
      if (((this.raf = requestAnimationFrame(e)), v6())) this.loadFx3d();
      else if (e6()) {
        let e = setTimeout(() => void this.loadFx3d(), 1200);
        this.cleanup.push(() => clearTimeout(e));
      }
      (this.cleanup.push(xl(() => this.applyFx3d(!0))),
        this.cleanup.push(xl(() => this.hushIgnored())));
    }
    hushIgnored() {
      let e = _l().ignored;
      if (e.length)
        for (let t of this.remotes.values())
          t.bubble && Ks(e, t.doc.name) && (t.bubble = null);
    }
    applyFx3d(e = !1) {
      let t = _l(),
        n = this.fx3d;
      if (!n) {
        e && !this.fx3dLoading && e6() && this.loadFx3d();
        return;
      }
      (n.layer.configure({
        aa: Mc[t.fxAA],
        glow: t.fxGlow,
        light: t.fxLight,
        haze: t.fxHaze,
        fringe: t.fxFringe,
        particles: t.fxParticles,
      }),
        n.layer.choose(t.fxQuality));
    }
    gfxStatus() {
      let e = this.fx3d?.layer;
      return {
        fps: 1e3 / Math.max(1, this.frameMs),
        state: e
          ? e.lost
            ? `lost`
            : e.off
              ? e.choice === `off`
                ? `off`
                : `gave-up`
              : `on`
          : this.fx3dLoading
            ? this.fx3dFailed
              ? `none`
              : `loading`
            : `none`,
        quality: e?.quality ?? null,
        auto: !!e?.auto,
        software: !!e?.software,
        gpu: e?.gpu ?? null,
      };
    }
    loadFx3d() {
      let e = () =>
        a8(
          () =>
            import(`./fx3d-DiRK8ozf.js`).then((e) => {
              this.disposed ||
                this.fx3d ||
                (this.fx3d = e.createFx3D(this.scene, this.depthC));
            }),
          [],
        );
      return (
        (this.fx3dLoading ??= (
          v6()
            ? a8(
                () =>
                  import(`./hd2d-FOjpdF4f.js`).then((e) => {
                    this.disposed ||
                      this.fx3d ||
                      ((this.hd = e.createHd2d(this)),
                      (this.fx3d = this.hd.fx3d));
                  }),
                __vite__mapDeps([0, 1]),
              ).catch((t) => (console.warn(`HD-2D is off:`, t), e()))
            : e()
        )
          .then(() => this.applyFx3d())
          .catch((e) => {
            ((this.fx3dFailed = !0), console.warn(`3D attack FX are off:`, e));
          })),
        this.fx3dLoading
      );
    }
    get mage3d() {
      return this.fx3d && this.fx3d.layer.on ? this.fx3d.mage : null;
    }
    dispose() {
      ((this.disposed = !0), cancelAnimationFrame(this.raf));
      for (let e of this.cleanup) e();
      (this.hd ? this.hd.dispose() : this.fx3d?.layer.dispose(), g1());
    }
    resize() {
      let e = window.innerWidth,
        t = window.innerHeight,
        n = this.dens;
      ((this.scale = Math.max(2, Math.round(t / 250 / n) * n)),
        (this.viewW = Math.ceil(e / this.scale)),
        (this.viewH = Math.ceil(t / this.scale)),
        (this.canvas.width = this.viewW * this.scale),
        (this.canvas.height = this.viewH * this.scale),
        (this.canvas.style.width = `${this.viewW * this.scale}px`),
        (this.canvas.style.height = `${this.viewH * this.scale}px`),
        (this.scene.width = this.viewW * n),
        (this.scene.height = this.viewH * n),
        (this.lightC.width = this.viewW),
        (this.lightC.height = this.viewH),
        (this.depthC.width = this.stampC.width = this.viewW * n),
        (this.depthC.height = this.stampC.height = this.viewH * n),
        (this.stampCtx.imageSmoothingEnabled = !1),
        (this.sctx.imageSmoothingEnabled = !1),
        (this.display.imageSmoothingEnabled = !1));
      let [r, i] = M(this.viewW, this.viewH),
        a = i.createRadialGradient(
          this.viewW / 2,
          this.viewH / 2,
          this.viewH * 0.35,
          this.viewW / 2,
          this.viewH / 2,
          this.viewW * 0.72,
        );
      (a.addColorStop(0, `rgba(0,0,0,0)`),
        a.addColorStop(1, `rgba(5,2,15,0.72)`),
        (i.fillStyle = a),
        i.fillRect(0, 0, this.viewW, this.viewH),
        (this.vignette = r));
    }
    attachMinimap(e) {
      this.miniTarget = e;
    }
    typing() {
      let e = document.activeElement;
      return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement;
    }
    bindInput() {
      let e = () => this.typing(),
        t = (t) => {
          if (!e()) {
            if (this.dialogueTakes(t)) {
              this.taken.add(t);
              return;
            }
            t.key === `Escape` &&
              this.blinkHold?.by === `key` &&
              (this.cancelBlinkHold(),
              t.preventDefault(),
              t.stopImmediatePropagation());
          }
        },
        n = (t) => {
          if (e()) return;
          let n = nG(t);
          this.keys.down(t.code, n);
          let r = CG(t),
            i = EG(t);
          Li(t.key, i, r) && t.preventDefault();
          let a = this.story,
            o = this.keyScene();
          if (a) {
            if (Pi(n, o)) {
              (a.pick(Number(n) - 1), t.preventDefault());
              return;
            }
            if (n === `escape` && a.chatting) {
              (a.endChat(), t.preventDefault());
              return;
            }
            if (n === `escape` && !t.repeat && a.skipScene()) {
              t.preventDefault();
              return;
            }
            if (Fi(n, r === `interact`, o)) {
              (a.advance(), t.preventDefault());
              return;
            }
            if (a.locked) return;
          }
          if (this.cine && (n === `escape` || n === ` ` || n === `enter`)) {
            (t.repeat || this.skipCinematic(), t.preventDefault());
            return;
          }
          if (r === `mageMenu`) {
            (t.preventDefault(),
              !t.repeat && !a?.chatting && this.mageMenuNear(`cursor`));
            return;
          }
          if (r === `interact` && (this.room || this.talkable)) {
            if (t.repeat && this.talkable?.trades) return;
            this.talk();
            return;
          }
          if (r === `interact`) {
            let e = this.remainsHere();
            if (e) {
              this.api.remainsMenu?.(e.id);
              return;
            }
          }
          if (n === `alt`) {
            (t.repeat || yl({ lootLabels: !_l().lootLabels }),
              t.preventDefault());
            return;
          }
          if (i === QW && this.holdsBlink()) {
            if (t.repeat) return;
            (this.blinkHold?.by === `key` &&
              Qd(this.blinkHold, { code: t.code, key: n }) &&
              this.cancelBlinkHold(),
              this.beginBlinkHold(`key`, t.code, n));
            return;
          }
          i !== null && this.keyCast(i);
        },
        r = (t) => {
          let n = nG(t);
          this.keys.up(t.code, n);
          let r = this.blinkHold;
          r?.by === `key` &&
            Qd(r, { code: t.code, key: n }) &&
            (e() ? this.cancelBlinkHold() : this.releaseBlinkHold(`key`));
        },
        i = (e) => {
          let t = this.canvas.getBoundingClientRect();
          ((this.mouse.sx = (e.clientX - t.left) / this.scale),
            (this.mouse.sy = (e.clientY - t.top) / this.scale),
            (this.aimSet = !0),
            (this.mouseOnWorld = e.target === this.canvas));
        },
        a = (e = !0) => (
          q.init(),
          this.tapTakes(e)
            ? (this.story && (this.story.locked || this.story.dialogue)
                ? this.story.advance()
                : this.cine
                  ? this.skipCinematic()
                  : this.home.building(this.room)
                    ? e &&
                      (this.room?.kind === `house`
                        ? this.housePress()
                        : this.buildClick())
                    : this.talk(),
              !0)
            : !1
        ),
        o = (e) => {
          if (!this.api.mageMenu) return !1;
          let t =
              this.mouse.down ||
              this.mouse.right ||
              this.heldSlot !== null ||
              this.aimTouch !== null ||
              !!this.blinkHold,
            n = this.inCombat(),
            r = Ls({
              inCombat: n,
              casting: t,
              foeUnder: this.foeUnder(this.mouseWorld()),
            })
              ? Is(this.headPlaces, this.mouse.sx, this.mouse.sy, this.scale, e)
              : null,
            i = this.mageMenuFor,
            a =
              r !== null &&
              r.id === i &&
              performance.now() - this.mageMenuSince < 400,
            o = performance.now() - this.mageMenuShut < 400;
          switch (
            Rs({ hit: r?.id ?? null, open: i, fight: n, repeat: a, shut: o })
          ) {
            case `open`:
              return (this.openMageMenu(r.id) || this.closeMageMenu(), !0);
            case `keep`:
            case `drop`:
              return !0;
            case `close`:
              return (this.closeMageMenu(), !0);
            case `close-cast`:
              return (this.closeMageMenu(), !1);
            case `cast`:
              return !1;
          }
        },
        s = (e) => {
          if (
            e.target === this.canvas &&
            !(performance.now() - this.lastTouch < 800)
          ) {
            if (e.button === 2 && this.home.building(this.room)) {
              this.home.cancelStroke() || this.home.stopBuilding();
              return;
            }
            a(e.button === 0) ||
              (((e.button !== 0 && e.button !== 2) || !o(Ps.mouse)) &&
                (e.button === 0 && ((this.mouse.down = !0), this.keyCast(0)),
                e.button === 2 && ((this.mouse.right = !0), this.keyCast(1))));
          }
        },
        c = (e) => {
          (e.button === 0 && ((this.mouse.down = !1), this.houseRelease()),
            e.button === 2 && (this.mouse.right = !1));
        },
        l = (e) => {
          let t = this.canvas.getBoundingClientRect();
          ((this.mouse.sx = (e.clientX - t.left) / this.scale),
            (this.mouse.sy = (e.clientY - t.top) / this.scale),
            (this.aimSet = !0));
        },
        u = (e) => {
          if (
            e.pointerType !== `mouse` &&
            e.target === this.canvas &&
            (e.preventDefault(),
            (this.lastTouch = performance.now()),
            this.aimTouch === null)
          ) {
            if ((l(e), a())) {
              (this.home.building(this.room) &&
                this.room?.kind === `house` &&
                (this.houseTouch = e.pointerId),
                ZG(e, this.canvas));
              return;
            }
            o(Ps.touch) ||
              ((this.aimTouch = e.pointerId),
              (this.mouse.down = !0),
              this.castSlot(0));
          }
        },
        d = (e) => {
          (e.pointerId === this.aimTouch || e.pointerId === this.houseTouch) &&
            l(e);
        },
        f = (e) => {
          if (
            (e.pointerType !== `mouse` && (this.lastTouch = performance.now()),
            e.pointerId === this.houseTouch)
          ) {
            ((this.houseTouch = null), this.houseRelease());
            return;
          }
          e.pointerId === this.aimTouch &&
            ((this.aimTouch = null), (this.mouse.down = !1));
        },
        p = (e) => e.preventDefault(),
        m = () => {
          (this.keys.clear(),
            (this.mouse.down = !1),
            (this.mouse.right = !1),
            (this.stick = { x: 0, y: 0 }),
            (this.stickSprint = !1),
            (this.sprintSpent = !1),
            (this.heldSlot = null),
            (this.aimTouch = null),
            this.cancelBlinkHold(),
            this.padHeld.clear(),
            (this.padSprint = !1),
            g1());
        },
        h = () => this.resize();
      (window.addEventListener(`keydown`, t, !0),
        window.addEventListener(`keydown`, n),
        window.addEventListener(`keyup`, r),
        window.addEventListener(`mousemove`, i),
        window.addEventListener(`mousedown`, s),
        window.addEventListener(`mouseup`, c),
        window.addEventListener(`blur`, m),
        window.addEventListener(`resize`, h),
        window.addEventListener(`orientationchange`, h),
        this.canvas.addEventListener(`contextmenu`, p),
        this.canvas.addEventListener(`pointerdown`, u),
        window.addEventListener(`pointermove`, d),
        window.addEventListener(`pointerup`, f),
        window.addEventListener(`pointercancel`, f),
        this.cleanup.push(() => {
          (window.removeEventListener(`keydown`, t, !0),
            window.removeEventListener(`keydown`, n),
            window.removeEventListener(`keyup`, r),
            window.removeEventListener(`mousemove`, i),
            window.removeEventListener(`mousedown`, s),
            window.removeEventListener(`mouseup`, c),
            window.removeEventListener(`blur`, m),
            window.removeEventListener(`resize`, h),
            window.removeEventListener(`orientationchange`, h),
            this.canvas.removeEventListener(`contextmenu`, p),
            this.canvas.removeEventListener(`pointerdown`, u),
            window.removeEventListener(`pointermove`, d),
            window.removeEventListener(`pointerup`, f),
            window.removeEventListener(`pointercancel`, f));
        }));
    }
    took(e) {
      return this.taken.has(e);
    }
    dialogueTakes(e) {
      return Ii(nG(e), CG(e) === `interact`, this.keyScene());
    }
    keyScene() {
      let e = this.story;
      return {
        choice: !!e?.choice,
        chatting: !!e?.chatting,
        locked: !!e?.locked,
        dialogue: !!e?.dialogue,
        narration: !!e?.narration,
        cine: !!this.cine,
      };
    }
    held(e) {
      for (let t of aG(e)) if (t && this.keys.has(t)) return !0;
      return !1;
    }
    recordStep(e, t, n, r = !1, i = !1) {
      rf(this.netSteps, {
        dx: e,
        dy: t,
        ms: n * 1e3,
        x: this.me.x,
        y: this.me.y,
        sprint: r,
        guard: i,
      });
    }
    guarding() {
      return this.real < this.guardUntil && this.castGate();
    }
    guardAim() {
      return {
        x: this.me.x + Math.cos(this.guardFace) * 2,
        y: this.me.y + Math.sin(this.guardFace) * 2,
      };
    }
    guardSpell() {
      for (let e of this.arms()) {
        let t = w[e];
        if (t.kind === `guard`) return dd(ud(t, this.school), this.mods);
      }
    }
    arms() {
      return cd(this.meDoc?.look);
    }
    shieldTurns(e, t, n, r) {
      if (!this.guarding() || (n && !bp(n))) return !1;
      let i = this.guardSpell();
      if (!i || !xp(this.guardFace, i.arc ?? 140, e, t)) return !1;
      let a = r ?? `beat:${Math.floor(this.real / 0.4)}`;
      if (!this.guardPaid.has(a)) {
        if (!ge(this.stamina, i.stamina ?? 20, this.real)) return !1;
        (this.guardPaid.add(a),
          this.guardPaid.size > 64 &&
            this.guardPaid.delete(this.guardPaid.values().next().value));
      }
      return (
        this.blockFx(this.me.x, this.me.y, this.guardFace, !0),
        this.story?.onBlock(),
        !0
      );
    }
    turnAside(e, t, n, r) {
      return this.shieldTurns(n, r, t, e)
        ? (this.blockFelt.set(e, (this.blockFelt.get(e) ?? 0) + 1),
          this.blockFelt.size > 64 &&
            this.blockFelt.delete(this.blockFelt.keys().next().value),
          !0)
        : !1;
    }
    storyBlow(e, t) {
      return this.shieldTurns(e - this.me.x, t - this.me.y);
    }
    blockFx(e, t, n, r) {
      let i = (e + Math.cos(n) * 0.45) * 16,
        a = (t - 0.55 + Math.sin(n) * 0.3) * 16;
      (this.particles.burst(
        i,
        a,
        r ? 12 : 8,
        [`#fff6c8`, `#f5d66b`, `#ffffff`],
        70,
        { life: 0.3 },
      ),
        q.sfx(`hit`, r ? 0.6 : 0.25),
        r &&
          ((this.shake = Math.max(this.shake, 1.5)),
          (this.combatAt = this.real),
          this.floater(e * 16, t * 16 - 30, `Blocked`, `#f5d66b`, !1)));
    }
    zoneBlocked(e, t) {
      let n = e ? (this.blockFelt.get(e) ?? 0) : 0;
      (n > 0
        ? this.blockFelt.set(e, n - 1)
        : this.blockFx(this.me.x, this.me.y, this.guardFace, !0),
        (this.stamina.v = t));
    }
    inDome(e, t) {
      for (let n of this.domes)
        if (this.real < n.until && Math.hypot(e - n.x, (t - n.y) * 1.15) <= n.r)
          return !0;
      return !1;
    }
    setPlayers(e) {
      let t = this.real,
        n = new Set(),
        r = Date.now();
      for (let i of e) {
        if (i._id === this.myId) {
          this.syncMe(i);
          continue;
        }
        if ((i.phasedUntil ?? 0) > r) continue;
        n.add(i._id);
        let e = this.remotes.get(i._id);
        if (!e) {
          this.remotes.set(i._id, {
            doc: i,
            rx: i.x,
            ry: i.y,
            fx0: i.x,
            fy0: i.y,
            tx: i.x,
            ty: i.y,
            t0: t,
            anim: 0,
            flash: 0,
            castT: 0,
            bubble: null,
          });
          continue;
        }
        if (
          (i.hp < e.doc.hp && (e.flash = 0.15), i.x !== e.tx || i.y !== e.ty)
        ) {
          let n = Math.hypot(i.x - e.rx, i.y - e.ry) > 6;
          ((e.fx0 = n ? i.x : e.rx),
            (e.fy0 = n ? i.y : e.ry),
            (e.tx = i.x),
            (e.ty = i.y),
            (e.t0 = t));
        }
        e.doc = i;
      }
      for (let e of [...this.remotes.keys()])
        n.has(e) || this.remotes.delete(e);
    }
    syncMe(e) {
      let t = !this.meDoc,
        n = this.meDoc;
      ((this.meDoc = e),
        e.quiver !== n?.quiver && (this.quiver = { ...(e.quiver ?? {}) }));
      for (let t of [`main`, `off`]) {
        let r = e.look?.[t];
        n &&
          r?.broken &&
          !n.look?.[t]?.broken &&
          this.floater(
            this.me.x * 16,
            this.me.y * 16 - 44,
            `Your ${r.base} broke!`,
            `#ff9a8a`,
            !0,
          );
      }
      if (((this.buffs = e.buffs ?? []), this.refreshMods(), t)) {
        ((this.me.x = e.x),
          (this.me.y = e.y),
          (this.cam.x = e.x * 16),
          (this.cam.y = e.y * 16),
          (this.mana = this.maxMana()),
          (this.region = ri(e.x, e.y)));
        let t = qe(e);
        ((this.story = new zZ(this, e.dead ? Ke.DONE : t)),
          (t >= Ke.DONE || e.dead) && this.startIntro());
        return;
      }
      n &&
        (e.hp < n.hp && !e.dead && (this.me.flash = 0.15),
        (n.wanted?.writ ?? 0) > 0 && (this.writSeenAt = this.real),
        e.dead &&
          !n.dead &&
          (!this.slainBy &&
            this.lastPvp &&
            this.real - this.lastPvp.at < 15 &&
            (this.slainBy = this.lastPvp.by),
          (this.writLost = !!n.outlaw && this.real - this.writSeenAt < 5),
          (this.deadSince = this.real),
          (this.slowUntil = this.real + 1.2),
          this.particles.burst(
            this.me.x * 16,
            this.me.y * 16 - 8,
            50,
            [S[this.school].colors.glow, `#ffffff`],
            90,
            { gravity: 0 },
          ),
          q.sfx(`death`),
          (this.barsTarget = 1)),
        !e.dead &&
          n.dead &&
          ((this.me.x = e.x),
          (this.me.y = e.y),
          (this.mana = this.maxMana()),
          (this.slainBy = null),
          this.resurrection()),
        e.level > n.level && (this.mana = this.maxMana()));
    }
    refreshMods() {
      let e = this.meDoc,
        t = Tt(this.buffs, Date.now()),
        n = Qa(
          ad(this.school, e?.passives, t.attrs),
          this.buffs.length ? Et(e?.gear, t.stats) : e?.gear,
        );
      this.mods = this.dungeon ? this.dungeon.echoMods(n) : n;
    }
    maxMana() {
      return this.net && !this.solo && this.zoneMaxMana > 0
        ? this.zoneMaxMana
        : ze(this.meDoc?.level ?? 1) + this.mods.mana;
    }
    targetable(e) {
      return this.solo
        ? !e.doc.dead && !!e.local && !this.solo.hiddenMob(e)
        : !e.doc.dead && (!this.story?.phased || !!e.local);
    }
    canStand(e, t) {
      return this.dungeon
        ? this.dungeon.canStand(e, t)
        : (this.story?.sealed && Math.hypot(e - Ar, t - jr) > Pr - 0.7) ||
            (this.meDoc?.outlaw && !ii(this.me.x, this.me.y) && ii(e, t)) ||
            ((this.room?.kind === `homestead` || this.room?.kind === `house`) &&
              !this.home.clear(e, t) &&
              this.home.clear(this.me.x, this.me.y))
          ? !1
          : Jse(e, t);
    }
    setWanted(e) {
      this.wanted = new Map(
        e.map((e) => [e.name, { level: e.level, writ: e.writ }]),
      );
    }
    graveMarks() {
      return [...this.remains.values()]
        .filter((e) => e.grave && e.victimId === this.myId)
        .map((e) => ({ x: e.x, y: e.y, color: `#d8d0c0`, size: 3, blink: !0 }));
    }
    setRemains(e) {
      let t = new Set();
      for (let n of e) {
        t.add(n.id);
        let e = this.remains.get(n.id);
        this.remains.set(n.id, { ...n, born: e?.born ?? this.real });
      }
      for (let e of [...this.remains.keys()])
        t.has(e) || this.remains.delete(e);
    }
    remainsHere() {
      if (
        !this.meDoc ||
        this.meDoc.dead ||
        this.room ||
        this.dungeon ||
        this.story?.phased
      )
        return null;
      let e = null,
        t = 3;
      for (let n of this.remains.values()) {
        let r = Math.hypot(n.x - this.me.x, n.y - this.me.y);
        r <= t && ((e = n), (t = r));
      }
      return e;
    }
    pvpTarget(e) {
      let t = this.meDoc;
      return !t ||
        t.dead ||
        e.doc.dead ||
        !this.net ||
        this.dungeon ||
        this.story?.phased ||
        ii(this.me.x, this.me.y) ||
        ii(e.rx, e.ry) ||
        this.inParty(e)
        ? !1
        : !!e.doc.outlaw || !!t.hostile;
    }
    setParty(e) {
      ((this.partyNames = new Set(
        (e ?? [])
          .map((e) => Ws(e.name))
          .filter((e) => e !== Ws(this.meDoc?.name ?? this.name)),
      )),
        (this.partyOn = !!e));
    }
    partyOn = !1;
    partyOffers = [];
    setOffers(e) {
      this.partyOffers = e;
    }
    followCard = !1;
    setFollowCard(e) {
      this.followCard = e;
    }
    offerWaiting() {
      return ic(
        this.partyOffers,
        Date.now(),
        _l().ignored,
        this.partyOn,
        this.followCard,
      );
    }
    inParty(e) {
      return this.partyNames.size > 0 && this.partyNames.has(Ws(e.doc.name));
    }
    partyLive() {
      let e = {};
      if (this.partyNames.size === 0) return e;
      for (let t of this.remotes.values())
        this.inParty(t) &&
          (e[Ws(t.doc.name)] = {
            hp: t.doc.hp,
            maxHp: t.doc.maxHp,
            dead: !!t.doc.dead,
            level: t.doc.level,
          });
      return e;
    }
    mageMarks(e) {
      let t = Ws(e);
      for (let e of this.remotes.values())
        if (Ws(e.doc.name) === t && this.listed(e))
          return {
            level: e.doc.level,
            outlaw: !!e.doc.outlaw,
            hostile: !!e.doc.hostile,
            wanted: this.wanted.get(e.doc.name)?.level ?? 0,
          };
      return null;
    }
    partyMap = [];
    setPartyMap(e) {
      this.partyMap = e;
    }
    setDrops(e) {
      let t = new Set();
      for (let n of e) {
        t.add(n.id);
        let e = this.drops.get(n.id);
        this.drops.set(n.id, { ...n, born: e?.born ?? this.real });
      }
      for (let e of [...this.drops.keys()]) t.has(e) || this.drops.delete(e);
    }
    setAltars(e) {
      for (let t of e) this.altars.set(t.altarId, t);
    }
    nodeHere() {
      return this.room ||
        this.dungeon ||
        !this.meDoc ||
        this.meDoc.dead ||
        !this.story?.done
        ? null
        : cu(this.me.x, this.me.y);
    }
    startChannel(e) {
      !this.meDoc ||
        this.meDoc.dead ||
        this.channel ||
        this.hearth ||
        ((this.channel = { to: e, t: 0, hp: this.meDoc.hp }),
        q.sfx(`chime`, 0.5));
    }
    updateChannel(e, t) {
      let n = this.channel;
      if (n && this.meDoc) {
        if (t || this.meDoc.dead || this.meDoc.hp < n.hp || this.room) {
          ((this.channel = null),
            this.floater(
              this.me.x * 16,
              this.me.y * 16 - 30,
              `The note breaks`,
              `#ff9a8a`,
              !1,
            ));
          return;
        }
        if (((n.t += e), Math.random() < e * 30)) {
          let e = Math.random() * Math.PI * 2;
          this.particles.spawn({
            x: this.me.x * 16 + Math.cos(e) * 9,
            y: this.me.y * 16 + Math.sin(e) * 3,
            z: 1,
            vz: 30 + Math.random() * 40,
            life: 0.8,
            size: 1,
            color: Math.random() < 0.5 ? `#7ef9ff` : `#ffffff`,
            glow: !0,
          });
        }
        if (n.t >= 3) {
          let e = n.to;
          this.channel = null;
          let t = { x: this.me.x, y: this.me.y };
          this.api.travel(e).then((n) => {
            n &&
              this.roadArrive(
                t,
                n.x,
                n.y,
                e === Rl.id ? `Marizon` : Il[e].name,
                e === Rl.id ? `The Aether Crystal` : `The Chorus sets you down`,
              );
          });
        }
      }
    }
    roadArrive(e, t, n, r, i) {
      (this.roadFx.push({
        x: e.x,
        y: e.y,
        t0: this.real,
        kind: `depart`,
        school: this.school,
        sprite: this.mySprite(),
      }),
        (this.me.x = t),
        (this.me.y = n),
        (this.me.dir = 0),
        (this.snapCam = !0),
        (this.lastSent = { x: t, y: n, moving: !1, dir: 0, t: this.real }),
        this.roadFx.push({
          x: t,
          y: n,
          t0: this.real,
          kind: `arrive`,
          school: this.school,
        }),
        (this.flash = { color: `#bdfcff`, a: 0.45 }),
        q.sfx(`chime`, 0.8),
        (this.banner = {
          title: r,
          subtitle: i,
          t0: this.real,
          dur: 3,
          color: `#7ef9ff`,
        }));
    }
    hearthWhy() {
      let e = this.meDoc;
      if (!e) return null;
      let t = this.room?.kind,
        n = t === `homestead` || t === `house`;
      return ou({
        inPrologue: !this.story?.done,
        dead: !!e.dead,
        inRun: !!this.dungeon,
        homestead: n,
        instance: !1,
        phased: !!this.story?.phased,
        indoors: !!this.room && !n,
        outlaw: !!e.outlaw,
        atHome: cu(this.me.x, this.me.y) === Rl.id,
        cooldown: su(e.hearthAt ?? 0, Date.now()),
        sinceCombat: 1 / 0,
      });
    }
    onTheRoad() {
      return !!(
        this.channel ||
        this.homeWalk ||
        this.hearth ||
        this.travelUntil > this.real ||
        this.transit
      );
    }
    hearthBegin() {
      return this.moveIntent.x || this.moveIntent.y
        ? `Stand still first.`
        : this.onTheRoad()
          ? `You're already on the road.`
          : (this.momentum.stop(), null);
    }
    zoneFolk(e) {
      this.townsfolk.setPlans(e);
    }
    zoneFolkLine(e) {
      this.townsfolk.serverLine(e);
    }
    zoneFolkBodies(e) {
      this.townsfolk.setBodies(e);
    }
    zoneFolkAt(e) {
      return this.townsfolk.byEnt(e);
    }
    zoneFolkStruck(e, t, n) {
      this.townsfolk.struck(e, t, n);
    }
    zoneFolkCast(e, t, n, r) {
      this.townsfolk.cast(e, n, r);
    }
    zoneHearth(e) {
      if (e.state === `singing`) {
        ((this.hearth = {
          t0: this.real,
          secs: e.secs ?? tu.hearthChannelSeconds,
        }),
          q.sfx(`chime`, 0.5));
        return;
      }
      if (((this.hearth = null), e.state === `home`)) {
        e.x != null &&
          e.y != null &&
          this.roadArrive(
            { x: this.me.x, y: this.me.y },
            e.x,
            e.y,
            `Marizon`,
            `Hearthsong carries you home`,
          );
        return;
      }
      e.why &&
        this.floater(
          this.me.x * 16,
          this.me.y * 16 - 30,
          e.why,
          e.why === `You stop singing.` ? `#bdfcff` : `#ff9a8a`,
          !1,
        );
    }
    updateHearth(e) {
      let t = this.hearth;
      if (!t) return;
      let n = this.real - t.t0;
      if (n > t.secs + 3) {
        this.hearth = null;
        return;
      }
      if (Math.random() < e * (16 + n * 2)) {
        let e = Math.random() * Math.PI * 2,
          t = 5 + Math.random() * 7,
          n = Math.random();
        this.particles.spawn({
          x: this.me.x * 16 + Math.cos(e) * t,
          y: this.me.y * 16 + Math.sin(e) * t * 0.4,
          z: 1,
          vz: 16 + Math.random() * 28,
          life: 1,
          size: 1,
          color: n < 0.45 ? `#ffd98a` : n < 0.75 ? `#ffb36b` : `#fff6d8`,
          glow: !0,
        });
      }
    }
    setHome(e) {
      this.home.set(e);
    }
    startHomeWalk(e, t) {
      !this.meDoc ||
        this.meDoc.dead ||
        this.homeWalk ||
        this.channel ||
        this.hearth ||
        this.dungeon ||
        this.travelUntil > this.real ||
        ((this.homeWalk = { owner: e, name: t, t: 0, hp: this.meDoc.hp }),
        q.sfx(`chime`, 0.4));
    }
    updateHomeWalk(e, t) {
      let n = this.homeWalk;
      if (n && this.meDoc) {
        if (t || this.meDoc.dead || this.meDoc.hp < n.hp || this.dungeon) {
          ((this.homeWalk = null),
            this.floater(
              this.me.x * 16,
              this.me.y * 16 - 30,
              `You stop`,
              `#ff9a8a`,
              !1,
            ));
          return;
        }
        if (((n.t += e), Math.random() < e * 18)) {
          let e = Math.random() * Math.PI * 2;
          this.particles.spawn({
            x: this.me.x * 16 + Math.cos(e) * 8,
            y: this.me.y * 16 + Math.sin(e) * 3,
            z: 1,
            vz: 14 + Math.random() * 20,
            life: 0.9,
            size: 1,
            color: Math.random() < 0.5 ? `#ffd98a` : `#8fd46a`,
            glow: !0,
          });
        }
        n.t * 1e3 >= 3e3 &&
          ((this.homeWalk = null),
          this.api.home?.go(n.owner).then((e) => {
            e && this.travelOut();
          }));
      }
    }
    homeLeave() {
      let e = this.api.home;
      !e ||
        !this.home.on(this.room) ||
        this.travelUntil > this.real ||
        ((this.home.build = null),
        this.travelOut(),
        e.leave().then((e) => {
          e || ((this.travelUntil = 0), this.fadeTo(0));
        }));
    }
    travelOut() {
      ((this.travelUntil = this.real + 6),
        (this.travelFrom = {
          room: this.room,
          home: this.home.here?.room ?? null,
        }),
        this.fadeTo(1),
        q.sfx(`chime`, 0.6));
    }
    buildClick() {
      let e = this.home,
        t = e.local(this.mouseWorld().x, this.mouseWorld().y);
      if (!t || !e.build) return;
      let n = e.blocker(t.x, t.y, this.me);
      if (n) {
        let e = this.mouseWorld();
        this.floater(e.x * 16, e.y * 16 - 8, n, `#ff9a8a`, !1);
        return;
      }
      if (e.build === `pickup`) {
        let n = e.structureAt(t.x, t.y);
        n && this.api.home?.unbuild(n.id);
      } else this.api.home?.build(e.build, t.x, t.y);
      q.sfx(`click`, 0.5);
    }
    housePress() {
      let e = this.mouseWorld(),
        t = this.home.houseLocal(e.x, e.y);
      t && this.houseAct(this.home.houseDown(t.x, t.y));
    }
    houseRelease() {
      if (this.room?.kind !== `house` || !this.home.tool) return;
      let e = this.mouseWorld();
      this.houseAct(this.home.houseUp(this.home.houseLocal(e.x, e.y)));
    }
    houseAct(e) {
      if (e) {
        if (`why` in e) {
          let t = this.mouseWorld();
          this.floater(t.x * 16, t.y * 16 - 8, e.why, `#ff9a8a`, !1);
          return;
        }
        (this.api.home?.house(e), q.sfx(`click`, 0.5));
      }
    }
    mageStill(e, t, n) {
      return HK(AK(e, t ?? `m`, n)) ?? dh(e).frames[0][0];
    }
    mySprite() {
      return this.mageStill(this.school, this.meDoc?.hero, this.meDoc?.look);
    }
    riteHud() {
      let e = Date.now();
      for (let [t, n] of this.altars) {
        if (n.state !== `rite` && n.state !== `reclaim`) continue;
        let r = Il[t];
        if (
          Math.hypot(this.me.x - r.x - 0.5, this.me.y - r.y - 0.5) >
          Bl.creditRadius + 4
        )
          continue;
        let i = n.state === `reclaim`,
          a = Kl[r.tier] + +!!i,
          o = n.spawned < n.wave,
          s = 0,
          c = null;
        for (let n of this.monsters.values())
          n.doc.altar !== t ||
            n.doc.dead ||
            (s++,
            n.doc.kind === `cantor` &&
              (c = {
                hp: n.doc.hp,
                maxHp: n.doc.maxHp,
                song: n.doc.song
                  ? Math.min(1, (e - n.doc.song) / (Gl.songSeconds * 1e3))
                  : null,
                staggered: (n.doc.stagger ?? 0) > e,
                level: n.doc.lvl ?? r.level,
              }));
        let l = this.meDoc && !this.meDoc.dead ? 1 : 0;
        for (let e of this.remotes.values())
          !e.doc.dead &&
            Math.hypot(e.rx - r.x - 0.5, e.ry - r.y - 0.5) <= Bl.radius &&
            l++;
        return {
          id: t,
          name: r.name,
          reclaim: i,
          wave: n.wave,
          waves: a,
          timer: Math.max(
            0,
            Math.ceil(((o ? n.nextSpawnAt : n.waveEndsAt) - e) / 1e3),
          ),
          breather: o,
          resonance: n.resonance,
          holding: l,
          left: s,
          cantor: c,
        };
      }
      return null;
    }
    pickupNearby() {
      if (!(!this.meDoc || this.meDoc.dead || this.room || this.dungeon))
        for (let e of this.drops.values())
          Math.hypot(e.x - this.me.x, e.y - this.me.y) > 0.9 ||
            (this.pickupWait.get(e.id) ?? 0) > this.real ||
            (this.pickupWait.set(e.id, this.real + 1.5), this.api.pickup(e.id));
    }
    atCrystal() {
      return (
        !this.room &&
        !this.dungeon &&
        !!this.meDoc &&
        !this.meDoc.dead &&
        Math.hypot(this.me.x - Mr, this.me.y - Nr) < 6.5
      );
    }
    setMonsters(e) {
      let t = this.real;
      for (let n of e) {
        let e = this.monsters.get(n._id);
        if (!e) {
          let e =
            !!n.altar && (n.stagger ?? 0) > Date.now() && n.kind !== `cantor`;
          this.monsters.set(n._id, {
            doc: n,
            rx: n.x,
            ry: n.y,
            fx0: n.x,
            fy0: n.y,
            tx: n.x,
            ty: n.y,
            t0: t,
            flash: 0,
            lunge: 0,
            lungeDir: { x: 0, y: 0 },
            anim: Math.random() * 4,
            dying: 0,
            rise: e ? l8 : 0,
            lastUpd: t,
            glide: 500 / 1e3,
          });
          continue;
        }
        let r = e.doc;
        if (
          (n.hp < r.hp && !n.dead && (e.flash = Math.max(e.flash, 0.12)),
          n.dead &&
            !r.dead &&
            (this.enemy.cancel(n._id),
            n.hp > 0 ? this.monsterLeave(e) : this.monsterDeath(e)),
          !n.dead &&
            r.dead &&
            ((e.rx = e.fx0 = e.tx = e.lastX = n.x),
            (e.ry = e.fy0 = e.ty = e.lastY = n.y),
            (e.dying = 0),
            (e.sink = 0),
            (e.rise = Fe[n.kind]?.night && !Fe[n.kind]?.incursion ? l8 : 0)),
          n.x !== e.tx || n.y !== e.ty)
        ) {
          let r = t - (e.lastUpd ?? t - 500 / 1e3);
          ((e.glide = this.net
            ? this.net.glide
            : y8(b8(e.glide ?? 500 / 1e3, r, 0.35), 0.3, 0.9)),
            (e.lastUpd = t),
            (e.fx0 = e.rx),
            (e.fy0 = e.ry),
            (e.tx = n.x),
            (e.ty = n.y),
            (e.t0 = t));
        }
        e.doc = n;
      }
    }
    setFx(e) {
      if (!this.fxInit) {
        for (let t of e) this.seenFx.add(t._id);
        this.fxInit = !0;
        return;
      }
      let t = e.filter((e) => !this.seenFx.has(e._id)).reverse();
      for (let e of t) (this.seenFx.add(e._id), this.playFx(e));
      this.seenFx.size > 2e3 && (this.seenFx = new Set(e.map((e) => e._id)));
    }
    setMessages(e) {
      if (!this.msgInit) {
        for (let t of e) this.seenMsgs.add(t._id);
        this.msgInit = !0;
        return;
      }
      for (let t of e) {
        if (
          this.seenMsgs.has(t._id) ||
          (this.seenMsgs.add(t._id),
          t.system || !t.playerId || t.to || t.party) ||
          (t.playerId !== this.myId && Ks(_l().ignored, t.name)) ||
          (!t.near && t._creationTime < Date.now() - 1e4)
        )
          continue;
        let e = { text: t.text, until: this.real + 6 };
        if (t.playerId === this.myId) this.myBubble = e;
        else {
          let n =
            this.remotes.get(t.playerId) ??
            [...this.remotes.values()].find((e) => e.doc.name === t.name);
          n && (n.bubble = e);
        }
      }
    }
    myBubble = null;
    playFx(e) {
      let t = e.playerId === this.myId,
        n = e.school ?? `pyro`;
      if ((!this.story?.phased || t) && !this.playAltarFx(e, t))
        switch (e.kind) {
          case `cast`: {
            if (t) return;
            let r = e.spell ? Se(e.spell) : void 0;
            if (!r) return;
            let i = e.playerId ? this.remotes.get(e.playerId) : void 0;
            i &&
              ((i.castT = 0.3),
              (i.castFx = {
                kind: r.kind,
                dx: (e.tx ?? e.x) - e.x,
                dy: (e.ty ?? e.y) - e.y,
                t0: this.real,
                delay: r.delay ?? 0,
                spell: r.id,
                n: (i.castFx?.n ?? 0) + 1,
              }));
            let a = e.playerId ? this.remoteAmmo.get(e.playerId) : void 0;
            (e.playerId && this.remoteAmmo.delete(e.playerId),
              this.spellVisual(
                r,
                xe[r.id] ?? n,
                e.x,
                e.y,
                e.tx ?? e.x,
                e.ty ?? e.y,
                e.points ?? [],
                !1,
                0,
                r.needs === `bow` ? a : void 0,
              ));
            break;
          }
          case `blink`: {
            if (t) return;
            if (!ce(n)) {
              this.dashVisual(n, e.x, e.y, e.tx ?? e.x, e.ty ?? e.y);
              break;
            }
            this.blinkVisual(n, e.x, e.y, e.tx ?? e.x, e.ty ?? e.y);
            let r = e.playerId ? this.remotes.get(e.playerId) : void 0;
            r &&
              (r.blinkFx = {
                dx: (e.tx ?? e.x) - e.x,
                dy: (e.ty ?? e.y) - e.y,
                t0: this.real,
              });
            break;
          }
          case `mhit`: {
            if (e.delay && e.delay > 0) {
              this.timers.push({
                at: this.time + e.delay / 1e3,
                fn: () => this.playFx({ ...e, delay: 0 }),
              });
              return;
            }
            this.lungeAt(e.monsterId, e.tx ?? e.x, e.ty ?? e.y);
            let n = (e.tx ?? e.x) * 16,
              r = (e.ty ?? e.y) * 16 - 8,
              i = !!Fe[e.spell ?? ``]?.boss;
            if ((this.slash(n, r, i), t))
              ((this.shake = Math.max(this.shake, i ? 7 : 3)),
                (this.hurtFlash = 0.5),
                (this.combatAt = this.real),
                q.sfx(`hurt`),
                this.floater(
                  this.me.x * 16,
                  this.me.y * 16 - 26,
                  `-${e.value ?? 0}`,
                  `#ff5c5c`,
                  !1,
                ));
            else if (e.playerId) {
              let t = this.remotes.get(e.playerId);
              t &&
                this.floater(
                  t.rx * 16,
                  t.ry * 16 - 26,
                  `-${e.value ?? 0}`,
                  `#ff8a8a`,
                  !1,
                );
            }
            break;
          }
          case `matk`: {
            if (this.solo) return;
            (this.enemy.add(e), FQ(e, this.me) && (this.combatAt = this.real));
            let t = e.monsterId ? this.monsters.get(e.monsterId) : void 0;
            t &&
              e.tx !== void 0 &&
              Math.abs(e.tx - t.rx) > 0.05 &&
              (t.doc = { ...t.doc, facing: e.tx < t.rx ? -1 : 1 });
            break;
          }
          case `pstruck`: {
            if (t || !e.playerId) return;
            let n = this.remotes.get(e.playerId);
            n &&
              this.floater(
                n.rx * 16,
                n.ry * 16 - 26,
                `-${e.value ?? 0}`,
                `#ff8a8a`,
                !1,
              );
            break;
          }
          case `pblock`: {
            if (t || !e.playerId) return;
            let n = this.remotes.get(e.playerId);
            n &&
              this.blockFx(
                n.rx,
                n.ry,
                [Math.PI / 2, -Math.PI / 2, 0, Math.PI][n.doc.dir] ?? 0,
                !1,
              );
            break;
          }
          case `levelup`: {
            let n = t
                ? this.me
                : e.playerId
                  ? this.remotes.get(e.playerId)
                  : void 0,
              r = n ? (`rx` in n ? n.rx : n.x) : e.x,
              i = n ? (`ry` in n ? n.ry : n.y) : e.y;
            (this.lightPillar(r * 16, i * 16, `#ffd166`),
              t &&
                (q.sfx(`levelup`),
                (this.slowUntil = this.real + 0.7),
                (this.banner = {
                  title: `LEVEL ${e.value}`,
                  subtitle: `The Veil yields a little more of its power`,
                  t0: this.real,
                  dur: 4,
                  color: `#ffd166`,
                }),
                (this.flash = { color: `#fff3c4`, a: 0.5 })));
            break;
          }
          case `respawn`:
            t || this.lightPillar(e.x * 16, e.y * 16, S[n].colors.glow);
            break;
          case `pdeath`:
            t ||
              this.particles.burst(
                e.x * 16,
                e.y * 16 - 8,
                40,
                [S[n].colors.glow, `#ffffff`],
                80,
              );
            break;
          case `mspawn`: {
            let t = Fe[e.spell ?? ``];
            if (t?.incursion) {
              let n = pg[t.kind] ?? `#ff9a2a`;
              (this.particles.burst(
                e.x * 16,
                e.y * 16 - 16,
                90,
                [n, `#12050a`, `#b01a2a`],
                140,
                { glow: !0, life: 1.2 },
              ),
                this.rings.push({
                  x: e.x * 16,
                  y: e.y * 16,
                  r: 0,
                  max: 70,
                  life: 0,
                  dur: 1.2,
                  color: n,
                }),
                (this.banner = {
                  title: t.name.toUpperCase(),
                  subtitle: `leads an incursion from ${t.incursion.from}`,
                  t0: this.real,
                  dur: 5,
                  color: n,
                }),
                q.sfx(`boom`, 0.8),
                Math.hypot(e.x - this.me.x, e.y - this.me.y) < 20 &&
                  (this.shake = Math.max(this.shake, 8)));
            } else
              t?.night
                ? this.particles.burst(
                    e.x * 16,
                    e.y * 16 - 2,
                    22,
                    [`#5a4a38`, `#3a3024`, `#8c86a0`],
                    45,
                    { glow: !1, life: 0.9, gravity: 90 },
                  )
                : this.particles.burst(
                    e.x * 16,
                    e.y * 16 - 4,
                    18,
                    [`#cfc6e6`, `#8c86a0`],
                    40,
                    { glow: !1, life: 0.8 },
                  );
            break;
          }
        }
    }
    altarFoot(e) {
      let t = Il[e];
      return { x: t.x * 16 + 8, y: t.y * 16 + 14 };
    }
    shardAt(e, t) {
      let n = Il[e];
      if (E1()) {
        let t = N1(this.altarState(e), this.riteProgress(e), this.time),
          r = n.y * 16 + 8,
          i = r - 7 + (t?.bob ? O1(this.time) : 0),
          a = t ? t.ay : 50,
          o = i - a / 3;
        return { x: n.x * 16 + 8, y: o, footY: r, z: r - o, top: i - a };
      }
      let r = this.altarFoot(e),
        i = Bre(t),
        a = r.y - 55 + i.y;
      return { x: r.x - 20 + i.x, y: a, footY: r.y, z: 55 - i.y, top: a };
    }
    altarState(e) {
      return this.altars.get(e)?.state ?? `quiet`;
    }
    riteProgress(e) {
      let t = this.altars.get(e);
      if (!t) return 0;
      let n = Kl[Il[e].tier] + +(t.state === `reclaim`);
      return t.state === `rite` || t.state === `reclaim` ? t.wave / n : 1;
    }
    altarInView(e, t, n, r, i, a = 80) {
      let o = this.altarFoot(e);
      return (
        o.x > t - a && o.x < t + r + a && o.y > n - a && o.y < n + i + a * 2
      );
    }
    drawAltarGround(e, t, n, r, i) {
      let a = Math.floor(this.time * 8),
        o = E1();
      for (let s of Ll) {
        if (!this.altarInView(s, t, n, r, i, 200)) continue;
        let c = this.altarState(s);
        if (o) {
          this.drawAltarFloor(e, s, c, a, t, n);
          continue;
        }
        let l = this.altarFoot(s);
        if (c === `hollowed`)
          for (let r = 0; r < 9; r++) {
            let i = Je(r, 3, 71) * Math.PI * 2,
              a = 20 + Je(r, 4, 71) * 110;
            e.drawImage(
              eie(r),
              Math.round(l.x + Math.cos(i) * a - 24 - t),
              Math.round(l.y + Math.sin(i) * a * 0.55 - 12 - n),
            );
          }
        let u = RENDER_SCALE.decal === 1;
        if (
          (e.drawImage(
            Kre(c, this.riteProgress(s), a, u),
            Math.round(l.x - 48 - t),
            Math.round(l.y - (u ? 96 : 40) / 2 - 2 - n),
          ),
          c === `rite` || c === `reclaim`)
        )
          for (let [r, i] of Jl(Il[s]).entries())
            (e.drawImage(
              qre(1, a + r * 3),
              Math.round(i.x * 16 - 18 - t),
              Math.round(i.y * 16 + 4 - 11 - n),
            ),
              this.lights.push({
                x: i.x * 16 - t,
                y: i.y * 16 + 4 - n,
                r: 26,
                color: `#b01a2a`,
                a: 0.7,
              }));
      }
    }
    drawAltarFloor(e, t, n, r, i, a) {
      let o = Il[t],
        s = o.x * 16 + 8,
        c = o.y * 16 + 8,
        l = (t, n, r, o) => Pp(e, n, r - t.ax - i, o - t.ay - a),
        u = n === `hollowed` ? L1() : null;
      if (u)
        for (let e = 0; e < 9; e++) {
          let t = Je(e, 3, 71) * Math.PI * 2,
            n = 40 + Je(e, 4, 71) * 100;
          l(
            u,
            u.frames[(r + e * 3) % u.frames.length],
            s + Math.cos(t) * n,
            c + 8 + Math.sin(t) * n * 0.55,
          );
        }
      let d = j1(o.style, n);
      if (d) {
        l(d.dim, d.dim.c, s, c);
        let r =
          n === `singing`
            ? 1
            : n === `rite` || n === `reclaim`
              ? this.riteProgress(t)
              : 0;
        (d.lit &&
          r > 0 &&
          ((e.globalAlpha = r), l(d.lit, d.lit.c, s, c), (e.globalAlpha = 1)),
          (e.fillStyle = `rgba(12, 8, 24, 0.3)`),
          e.beginPath(),
          e.ellipse(s - i, c + 1 - a, 8, 3, 0, 0, Math.PI * 2),
          e.fill());
      }
      if (n === `rite` || n === `reclaim`) {
        let e = I1();
        for (let [t, n] of Jl(o).entries())
          (e &&
            l(
              e,
              e.frames[(r + t * 3) % e.frames.length],
              n.x * 16,
              n.y * 16 + 6,
            ),
            this.lights.push({
              x: n.x * 16 - i,
              y: n.y * 16 + 4 - a,
              r: 26,
              color: `#b01a2a`,
              a: 0.7,
            }));
      }
    }
    collectAltarPieces(e, t, n, r, i, a) {
      let o = Il[n],
        s = o.x * 16 + 8,
        c = o.y * 16 + 8,
        l = (n, r, o, s, c = s, l = 1) => {
          let u = Mp(r),
            d = [Math.max(n.ax, u - n.ax) + 8, n.ay + 8, Np(r) - n.ay + 8];
          e.push({
            y: c,
            x: o,
            fy: s,
            box: d,
            draw: () => {
              ((t.globalAlpha = l),
                Pp(t, r, o - n.ax - i, s - n.ay - a),
                (t.globalAlpha = 1));
            },
          });
        };
      for (let e of D1) {
        let t = M1(o.style, r, e.pos);
        t && l(t, t.c, s + e.dx, c + e.dy);
      }
      let u = N1(r, this.riteProgress(n), this.time);
      if (
        (u &&
          l(
            { ax: u.ax, ay: u.ay + 7 - (u.bob ? O1(this.time) : 0) },
            u.c,
            s,
            c,
          ),
        r === `rite` || r === `reclaim`)
      ) {
        let e = P1(),
          t = Math.floor(this.time * 12);
        e &&
          Je(t, n.length, 31) < 0.55 &&
          l(e, e.frames[t % e.frames.length], s, c, c + 0.5);
      }
      if (r === `singing`) {
        let e = F1();
        e &&
          l(
            { ax: e.ax, ay: e.ay + 7 },
            e.frames[1 + (Math.floor(this.time * 6) % 2)],
            s,
            c,
            c - 0.4,
            0.5,
          );
      }
    }
    collectAltars(e, t, n, r, i, a) {
      let o = Math.floor(this.time * 8);
      for (let s of Ll) {
        if (!this.altarInView(s, n, r, i, a)) continue;
        let c = this.altarState(s),
          l = this.altarFoot(s),
          u = this.hdNow(),
          d =
            c === `hollowed` && u?.covers(`altar:hollowed`)
              ? `altar:hollowed`
              : `altar`;
        if (u?.covers(d))
          this.standIns.push({
            target: d,
            x: l.x,
            y: l.y,
            w: 40,
            gain: Qse[c],
          });
        else if (E1()) this.collectAltarPieces(e, t, s, c, n, r);
        else {
          let i = Wre(Il[s].style, c, o, this.riteProgress(s)),
            a = [Math.max(20, i.width - 20) + 8, 63, i.height - 55 + 8];
          e.push({
            y: l.y - 6,
            x: l.x,
            fy: l.y,
            box: a,
            draw: () =>
              t.drawImage(
                i,
                Math.round(l.x - 20 - n),
                Math.round(l.y - 55 - r),
              ),
          });
        }
        let f = zre(c),
          p = this.shardAt(s, o),
          m = c === `rite` || c === `reclaim` ? 0.85 + Math.random() * 0.15 : 1;
        this.lights.push({
          x: p.x - n,
          y: p.y - r,
          r: f.radius * 16,
          color: f.color,
          a: f.intensity * m,
          z: p.z,
        });
      }
    }
    drawThreads(e, t, n) {
      let r = Math.floor(this.time * 10);
      for (let i of this.monsters.values()) {
        let a = i.doc.altar;
        if (!a || i.doc.dead) continue;
        let o = this.altarState(a);
        if (
          (o !== `rite` && o !== `reclaim`) ||
          !(
            i.doc.kind === `tether` ||
            (i.doc.kind === `gnawer` && i.doc.latched)
          )
        )
          continue;
        let s = this.shardAt(a, r);
        $re(
          e,
          s.x - t,
          s.y - n,
          i.rx * 16 - t,
          i.ry * 16 - (i.doc.kind === `tether` ? 38 : 6) - n,
          r + (i.doc._id.charCodeAt(0) % 5),
        );
      }
    }
    drawAltarAdditive(e, t, n, r, i) {
      let a = Math.floor(this.time * 10);
      for (let o of Ll) {
        let s = this.altarState(o);
        if (
          (s !== `rite` && s !== `reclaim`) ||
          !this.altarInView(o, t, n, r, i, 40)
        )
          continue;
        let c = this.shardAt(o, a),
          l = c.top - n;
        l <= 0 ||
          e.drawImage(zz(a, Math.round(l), s === `reclaim`), c.x - 8 - t, 0);
      }
      for (let r of this.roadFx) {
        let i = Math.min(7, Math.floor(((this.real - r.t0) / 1.2) * 8)),
          a = r.x * 16 - t,
          o = r.y * 16 - n;
        r.kind === `depart`
          ? (r.sprite &&
              ((e.globalCompositeOperation = `source-over`),
              e.drawImage(
                Uz(r.sprite, i / 7, i),
                Math.round(a - 10),
                Math.round(o - 26),
                20,
                28,
              ),
              (e.globalCompositeOperation = `lighter`)),
            e.drawImage(Vz(i), Math.round(a - 12), Math.round(o - 70)))
          : e.drawImage(Hz(i), Math.round(a - 24), Math.round(o - 70));
      }
    }
    playAltarFx(e, t) {
      let n = e.spell,
        r = n ? Il[n] : void 0,
        i = Math.hypot(e.x - this.me.x, e.y - this.me.y) < Bl.creditRadius + 6;
      switch (e.kind) {
        case `ritebegin`:
          return (
            this.lightPillar(
              e.x * 16,
              e.y * 16,
              e.value ? `#e0484e` : `#7ef9ff`,
            ),
            this.rings.push({
              x: e.x * 16,
              y: e.y * 16,
              r: 0,
              max: 90,
              life: 0,
              dur: 1.4,
              color: `#7ef9ff`,
            }),
            i &&
              r &&
              ((this.banner = {
                title: e.value ? `THE RECLAIMING` : `THE RITE`,
                subtitle: `${r.name} · hold it until the last wave falls`,
                t0: this.real,
                dur: 3.5,
                color: `#7ef9ff`,
              }),
              (this.shake = Math.max(this.shake, 4)),
              q.sfx(`boom`, 0.5)),
            !0
          );
        case `rift`:
          return (
            this.particles.burst(
              e.x * 16,
              e.y * 16,
              26,
              [`#b01a2a`, `#12050a`, `#e0484e`],
              60,
              { glow: !0, life: 0.9 },
            ),
            !0
          );
        case `wave`:
          if (i && r) {
            let t = Kl[r.tier] + +(this.altarState(r.id) === `reclaim`),
              n = (e.value ?? 0) >= t - 1;
            ((this.banner = {
              title: n ? `THE LAST WAVE` : `WAVE ${(e.value ?? 0) + 1}`,
              subtitle: n
                ? `A Hollow Cantor comes to sing the Hollowing`
                : `The shard sings a little louder`,
              t0: this.real,
              dur: 2.6,
              color: n ? `#e0484e` : `#7ef9ff`,
            }),
              q.sfx(`chime`, 0.5));
          }
          return !0;
        case `althit`:
          return e.delay && e.delay > 0
            ? (this.timers.push({
                at: this.time + e.delay / 1e3,
                fn: () => this.playAltarFx({ ...e, delay: 0 }, t),
              }),
              !0)
            : (this.lungeAt(e.monsterId, e.tx ?? e.x, e.ty ?? e.y),
              this.slash((e.tx ?? e.x) * 16, (e.ty ?? e.y) * 16 - 14, !1),
              !0);
        case `songbreak`:
          return (
            this.floater(e.x * 16, e.y * 16 - 44, `SONG BROKEN`, `#ffe08a`, !0),
            this.rings.push({
              x: e.x * 16,
              y: e.y * 16 - 20,
              r: 0,
              max: 30,
              life: 0,
              dur: 0.6,
              color: `#ffffff`,
            }),
            i && q.sfx(`boom`, 0.4),
            !0
          );
        case `ritewin`:
          return (
            this.lightPillar(e.x * 16, e.y * 16, `#7ef9ff`),
            this.rings.push({
              x: e.x * 16,
              y: e.y * 16,
              r: 0,
              max: 120,
              life: 0,
              dur: 1.8,
              color: `#bdfcff`,
            }),
            i &&
              r &&
              ((this.banner = {
                title: `${r.name.toUpperCase()} SINGS`,
                subtitle: `The Hollow sinks back down. Every altar on the road hears it.`,
                t0: this.real,
                dur: 4.5,
                color: `#7ef9ff`,
              }),
              (this.flash = { color: `#e6fdff`, a: 0.5 }),
              (this.slowUntil = this.real + 0.8),
              q.sfx(`levelup`, 0.8)),
            !0
          );
        case `ritelost`:
          return (
            this.particles.burst(
              e.x * 16,
              e.y * 16 - 20,
              80,
              [`#b01a2a`, `#12050a`, `#ffffff`],
              120,
              { glow: !0, life: 1.4 },
            ),
            i &&
              r &&
              ((this.banner = {
                title: `HOLLOWED`,
                subtitle: `The ${r.name} has fallen to the Hollow. The road ends in the dark.`,
                t0: this.real,
                dur: 5,
                color: `#e0484e`,
              }),
              (this.shake = Math.max(this.shake, 8)),
              q.sfx(`boom`, 0.9)),
            !0
          );
        case `gift`:
          if (t && r) {
            let [t, n, i] = (e.school ?? ``).split(`|`);
            this.api.gift({
              altar: r.id,
              grade: t,
              first: n === `first`,
              best: i,
              dust: e.value ?? 0,
              xp: e.tx ?? 0,
              crowns: e.ty ?? 0,
            });
          }
          return !0;
        case `attune`:
          return (
            this.rings.push({
              x: e.x * 16,
              y: e.y * 16,
              r: 0,
              max: 50,
              life: 0,
              dur: 1,
              color: `#7ef9ff`,
            }),
            t &&
              r &&
              ((this.banner = {
                title: `ATTUNED`,
                subtitle: `The ${r.name} holds your note. You can travel here, and rise here.`,
                t0: this.real,
                dur: 4,
                color: `#7ef9ff`,
              }),
              q.sfx(`levelup`, 0.6)),
            !0
          );
        case `depart`:
        case `arrive`:
          if (!t) {
            let t = e.playerId ? this.remotes.get(e.playerId) : void 0,
              n =
                e.kind === `depart` && t
                  ? this.mageStill(
                      t.doc.school ?? `pyro`,
                      t.doc.hero,
                      t.doc.look,
                    )
                  : void 0;
            this.roadFx.push({
              x: e.x,
              y: e.y,
              t0: this.real,
              kind: e.kind,
              school: e.school ?? `pyro`,
              sprite: n,
            });
          }
          return !0;
      }
      return !1;
    }
    startIntro() {
      let e = (Mr + 0.5) * 16,
        t = Nr * 16,
        n = e,
        r = t - 416;
      ((this.barsTarget = 1),
        (this.bars = 1),
        (this.cam.x = n),
        (this.cam.y = r),
        (this.cine = {
          t: 0,
          dur: 9,
          path: (i) => {
            let a = { x: this.me.x * 16, y: this.me.y * 16 };
            if (i < 5) return { x: n, y: b8(r, t + 10, x8(i / 5)) };
            if (i < 6.2) return { x: e, y: t + 10 };
            let o = x8((i - 6.2) / 2.3);
            return { x: b8(e, a.x, o), y: b8(t + 10, a.y, o) };
          },
          captions: [
            {
              text: `Marizon`,
              sub: `The Lumen Ward still holds.`,
              t0: 0.6,
              t1: 4.2,
            },
            {
              text: `Thirteen crystals still sing`,
              sub: `Five have fallen. Vespertine is silent.`,
              t0: 4.6,
              t1: 7.4,
            },
            {
              text: this.name,
              sub: `${S[this.school].name} — ${S[this.school].title}`,
              t0: 7.4,
              t1: 9,
            },
          ],
          onEnd: () => {
            ((this.banner = {
              title: Rr[this.region].name,
              subtitle: Rr[this.region].subtitle,
              t0: this.real,
              dur: 4,
              color: Rr[this.region].tint,
            }),
              q.sfx(`chime`));
          },
        }));
    }
    skippable() {
      return this.story?.locked
        ? this.story.skippable()
        : !!this.cine && this.cine.t >= 0.5;
    }
    skipScene() {
      return this.story?.locked
        ? this.story.skipScene()
        : this.skippable()
          ? (this.skipCinematic(), !0)
          : !1;
    }
    skipCinematic() {
      if (!this.cine) return;
      let e = this.cine.onEnd;
      ((this.cine = null), (this.barsTarget = 0), e?.());
    }
    resurrection() {
      let e = this.me.x * 16,
        t = this.me.y * 16,
        n = cu(this.me.x, this.me.y),
        r = n && n !== Rl.id ? Il[n].name : null;
      (r &&
        this.roadFx.push({
          x: this.me.x,
          y: this.me.y,
          t0: this.real,
          kind: `arrive`,
          school: this.school,
        }),
        (this.cam.x = e),
        (this.cam.y = t - 40),
        (this.barsTarget = 1),
        this.lightPillar(e, t, S[this.school].colors.glow),
        (this.flash = { color: `#ffffff`, a: 0.8 }),
        q.sfx(`chime`),
        qe(this.meDoc ?? {}) >= Ke.DONE && this.townsfolk.remember(),
        (this.cine = {
          t: 0,
          dur: 2.6,
          path: (n) => ({ x: e, y: b8(t - 40, t, x8(n / 2.2)) }),
          captions: [
            {
              text: `The Crystal remembers you`,
              sub: r
                ? `The Chorus sets you down at the ${r}.`
                : qe(this.meDoc ?? {}) >= Ke.DONE
                  ? `“Rise, mage.”  The voice is Idris's.`
                  : `Rise, mage.`,
              t0: 0.3,
              t1: 2.6,
            },
          ],
        }));
    }
    updateDoors(e, t, n) {
      let r = this.transit;
      if (r) {
        ((r.t += e),
          !r.jumped &&
            r.t >= 0.22 &&
            ((r.jumped = !0),
            (this.me.x = r.x),
            (this.me.y = r.y),
            (this.me.dir = r.dir),
            (this.snapCam = !0),
            (this.particles.list.length = 0),
            this.api.move(this.me.x, this.me.y, this.me.dir, !1),
            (this.lastSent = {
              x: this.me.x,
              y: this.me.y,
              moving: !1,
              dir: this.me.dir,
              t: this.real,
            })),
          (this.doorFade =
            r.t < 0.22 ? r.t / 0.22 : Math.max(0, 1 - (r.t - 0.22) / 0.3)),
          r.t >= 0.52 &&
            ((this.transit = null),
            (this.doorFade = 0),
            (this.doorCd = this.real + 0.35)));
        return;
      }
      let i = this.story;
      if (
        !i?.done ||
        this.cine ||
        i.locked ||
        this.real < this.doorCd ||
        this.meDoc?.dead ||
        (t === 0 && n === 0)
      )
        return;
      let a = this.me,
        o = (e, t, n, r, i, a) => {
          ((this.transit = { t: 0, x: e, y: t, dir: n, jumped: !1 }),
            q.sfx(`click`, 0.45),
            this.api.door?.(r, i, a));
        },
        s = this.room,
        c = (e) => {
          let t = this.home.houseRoom();
          if (!t || !this.api.home || !this.home.here) return;
          let n = e === `in` ? t.entry : t.outside;
          ((this.transit = {
            t: 0,
            x: n.x,
            y: n.y,
            dir: +(e === `in`),
            jumped: !1,
          }),
            q.sfx(`click`, 0.45),
            this.api.home.houseDoor(e));
        };
      if (s?.kind === `house`) {
        if (n > 0) {
          for (let e of s.exits)
            if (Math.abs(a.x - (e.tx + 0.5)) < 0.8 && a.y > e.ty - 0.5)
              return c(`out`);
        }
        return;
      }
      if (s?.kind === `homestead`) {
        let e = Dt.door;
        if (
          n < 0 &&
          this.home.here &&
          a.x > s.x0 + e.x &&
          a.x < s.x0 + e.x + e.w &&
          a.y < s.y0 + e.y + 0.6
        )
          return c(`in`);
        if (n > 0 && this.travelUntil <= this.real) {
          for (let e of s.exits)
            if (Math.abs(a.x - (e.tx + 0.5)) < 0.8 && a.y > e.ty - 0.5) {
              this.doorCd = this.real + 2;
              let e = this.api.home;
              if (!e) return;
              (this.travelOut(),
                e.leave().then((e) => {
                  e || ((this.travelUntil = 0), this.fadeTo(0));
                }));
              return;
            }
        }
        return;
      }
      if (s) {
        if (n > 0) {
          for (let e of s.exits)
            if (Math.abs(a.x - (e.tx + 0.5)) < 0.8 && a.y > e.ty - 0.5)
              return o(s.outside.x, s.outside.y, 0, s.id, `out`);
        }
        if (n < 0) {
          for (let e of s.doors)
            if (Math.abs(a.x - (e.tx + 0.5)) < 0.8 && a.y < e.ty + 1.5)
              return o(e.x, e.y, 1, s.id, `through`, e.to);
        }
        return;
      }
      if (!(n >= 0))
        for (let e of Zr()) {
          let t = e.door;
          if (!(
            !t ||
            Math.abs(a.x - (t.tx + 0.5)) > 0.75 ||
            a.y < t.ty + 1 ||
            a.y > t.ty + 1.5
          ))
            return o(e.entry.x, e.entry.y, 1, e.id, `in`);
        }
    }
    updateDoorways(e) {
      let t = this.me,
        n =
          !!this.story?.done &&
          !this.room &&
          !this.dungeon &&
          !this.cine &&
          !this.meDoc?.dead;
      for (let r of this.scenery.doors) {
        let i =
          n &&
          Math.abs(t.x - (r.tx + 0.5)) < 1.4 &&
          t.y > r.ty + 0.6 &&
          t.y < r.ty + 3.4;
        r.open = y8(r.open + (i ? e : -e) * 3, 0, 1);
      }
    }
    findTalkable(e) {
      if (e.kind === `house`) {
        let t =
          this.home.on(e) &&
          !this.meDoc?.dead &&
          !this.story?.chatting &&
          !this.home.tool
            ? this.home.nearestInHouse(this.me.x, this.me.y)
            : null;
        this.talkable = t
          ? {
              id: `home:${t.what.id}`,
              name: t.name,
              x: t.what.x,
              y: t.what.y,
              note: !0,
              out: { t: `home`, what: t.what },
              label: t.label,
              labelDy: 30,
            }
          : null;
        return;
      }
      if (e.kind === `homestead`) {
        let t =
          this.home.on(e) &&
          !this.meDoc?.dead &&
          !this.story?.chatting &&
          !this.home.build
            ? this.home.nearest(this.me.x, this.me.y)
            : null;
        this.talkable = t
          ? {
              id: `home:${t.what.id}`,
              name: t.name,
              x: t.what.x,
              y: t.what.y,
              note: !0,
              out: { t: `home`, what: t.what },
              label: t.label,
              labelDy: 26,
            }
          : null;
        return;
      }
      let t = null,
        n = 2.1,
        r = this.me;
      for (let i of e.folk) {
        let e = Math.hypot(i.x - r.x, i.y - r.y);
        e < n &&
          ((n = e), (t = { id: i.id, name: i.name, x: i.x, y: i.y, note: !1 }));
      }
      for (let i of e.notes) {
        let e = Math.hypot(i.x - r.x, i.y - r.y) + 0.2;
        e < Math.min(n, 1.7) &&
          ((n = e), (t = { id: i.id, name: i.name, x: i.x, y: i.y, note: !0 }));
      }
      (t &&
        !t.note &&
        this.keeperTrades(e, t.id) &&
        this.quests.fallsBack(m$(e, t.id)) &&
        ((t.label = `[E] Trade`), (t.trades = !0)),
        (this.talkable = t));
    }
    keeperTrades(e, t) {
      return (
        p$(e, t) &&
        !!e.trade &&
        !this.meDoc?.dead &&
        !!this.api.shopMenu &&
        !!this.api.shopsOpen?.()
      );
    }
    shopHud(e) {
      let t = this.room;
      return t?.kind !== `shop` || !t.trade || e
        ? null
        : {
            name: t.name,
            trade: t.trade,
            keeper: t.folk.find((e) => p$(t, e.id))?.name ?? ``,
          };
    }
    findTalkableOutdoors() {
      let e = this.story;
      if (!e?.done || e.chatting || e.locked || this.cine || this.meDoc?.dead) {
        this.talkable = null;
        return;
      }
      let t = this.me,
        n = null,
        r = 2.1;
      for (let i of e.npcs) {
        if (
          !i.visible ||
          i.alpha < 0.5 ||
          (i.kind !== `varra` &&
            i.kind !== `ysolde` &&
            i.kind !== `teodor` &&
            i.kind !== `oriel` &&
            i.kind !== `holloway`)
        )
          continue;
        let e = Math.hypot(i.x - t.x, i.y - t.y);
        e < r &&
          ((r = e),
          (n = {
            id: `circle:${i.kind}`,
            name: yZ[i.kind].name,
            x: i.x,
            y: i.y,
            note: !1,
            out: { t: `circle`, kind: i.kind },
          }));
      }
      for (let e of this.townsfolk.people()) {
        let i = Math.hypot(e.x - t.x, e.y - t.y);
        i < r &&
          ((r = i),
          (n = this.townsfolk.wounded(e.id)
            ? {
                id: `folk:${e.id}`,
                name: e.name,
                x: e.x,
                y: e.y,
                note: !0,
                out: { t: `folk` },
                label: `[E] Help up`,
                labelDy: 20,
              }
            : this.townsfolk.lost(e.id)
              ? {
                  id: `folk:${e.id}`,
                  name: e.name,
                  x: e.x,
                  y: e.y,
                  note: !0,
                  out: { t: `folk` },
                  label: `[E] Take them home`,
                }
              : {
                  id: `folk:${e.id}`,
                  name: e.name,
                  x: e.x,
                  y: e.y,
                  note: !1,
                  out: { t: `folk` },
                }));
      }
      let i = this.townsfolk.cureNear(t.x, t.y, r + 0.9);
      i &&
        (n = {
          id: `folk:cure:${i.id}`,
          name: `Frost moss`,
          x: i.x,
          y: i.y,
          note: !0,
          out: { t: `folk` },
          label: `[E] Gather frost moss`,
        });
      for (let e of Ll) {
        let i = pu(e),
          a = Math.hypot(i.x - t.x, i.y + 0.6 - t.y);
        a < 2.8 &&
          a < r + 0.6 &&
          ((r = a),
          (n = {
            id: `altar:${e}`,
            name: Il[e].name,
            x: i.x,
            y: i.y,
            note: !0,
            out: { t: `altar`, id: e },
            label: `[E] Altar`,
            labelDy: 52,
          }));
      }
      for (let e of So) {
        let i = $o[e];
        if (e === `folly` && !rs(this.delves?.notes ?? [])) continue;
        let a = Math.hypot(i.x - t.x, i.y + 0.5 - t.y);
        a < 3.5 &&
          a < r + 0.8 &&
          ((r = a),
          (n = {
            id: `entrance:${e}`,
            name: i.name,
            x: i.x,
            y: i.y,
            note: !0,
            out: { t: `entrance`, id: e },
            label: `[E] Go down`,
            labelDy: 44,
          }));
      }
      for (let e of this.quests.spotsNear(t.x, t.y)) {
        let i = Math.hypot(e.x - t.x, e.y - t.y) - 0.3;
        i < r &&
          ((r = i),
          (n = {
            id: `spot:${e.questId}/${e.index}`,
            name: e.name,
            x: e.x,
            y: e.y,
            note: !0,
            out: {
              t: `spot`,
              questId: e.questId,
              step: e.step,
              index: e.index,
            },
          }));
      }
      this.talkable = n;
    }
    talk() {
      let e = this.room,
        t = this.story,
        n = this.talkable;
      if (!t || !n || t.chatting || t.locked || this.transit) return;
      q.init();
      let r = (e, t) => {
          let n = this.talkTurn.get(e) ?? 0;
          return (this.talkTurn.set(e, n + 1), n % Math.max(1, t));
        },
        i = null,
        a = !1;
      if (n.out?.t === `home`) {
        (q.sfx(`click`, 0.5),
          this.faceToward(n.x - this.me.x, n.y - this.me.y),
          this.api.home?.use(n.out.what));
        return;
      }
      if (e) {
        let o = e.folk.find((e) => e.id === n.id),
          s = o ? null : e.notes.find((e) => e.id === n.id),
          c = o?.talks ?? s?.talks ?? [],
          l = o ? m$(e, o.id) : [`note:${e.id}/${s.id}`],
          u = o
            ? { name: o.name, title: o.title, color: o.color, art: o.look }
            : {
                name: s.name,
                title: s.title,
                color: `#e6d8bc`,
                art: `note:${s.icon}`,
              },
          d = !!o && this.keeperTrades(e, o.id),
          f = () => (c.length ? c[r(`${e.id}/${n.id}`, c.length)] : []);
        i = {
          ids: l,
          voice: u,
          fallback: d
            ? () => (
                (a = !0),
                this.api.shopMenu(() =>
                  f()
                    .map((e) => t.fmt(e))
                    .join(` `),
                ),
                []
              )
            : f,
          at: o ? { x: o.x, y: o.y } : null,
        };
      } else if (n.out?.t === `spot`) {
        this.quests.inspect(n.out.questId, n.out.step, n.out.index);
        return;
      } else if (n.out?.t === `altar`) {
        (q.sfx(`click`, 0.5), this.api.altarMenu(n.out.id));
        return;
      } else if (n.out?.t === `entrance`) {
        (q.sfx(`click`, 0.5), this.api.dungeonMenu(n.out.id));
        return;
      } else if (n.out?.t === `dungeon`) {
        this.dungeon?.interact();
        return;
      } else if (n.out?.t === `circle`) {
        let e = n.out.kind;
        i = {
          ids: [n.id],
          speaker: e,
          fallback: () => this.quests.circleLines(e, r(n.id, 99)),
          at: { x: n.x, y: n.y },
        };
      } else if (n.out?.t === `folk` && n.id.startsWith(`folk:cure:`)) {
        let e = n.id.slice(10),
          t = this.townsfolk.missing.find((t) => t.id === e);
        (q.sfx(`click`, 0.5),
          this.api.folkRescue &&
            t &&
            this.api.folkRescue(e).then((e) => {
              (e || this.townsfolk.carrying.add(`${t.id}|${t.since}`),
                this.floater(
                  this.me.x * 16,
                  this.me.y * 16 - 30,
                  e ?? `You gather the frost moss`,
                  e ? `#ff9a8a` : `#bdfcff`,
                  !1,
                ));
            }));
        return;
      } else if (n.out?.t === `folk`) {
        let e = n.id.slice(5),
          t = this.townsfolk.byId(e);
        if (!t) return;
        if (this.townsfolk.wounded(e) && this.api.folkHelp) {
          (q.sfx(`click`, 0.5),
            this.faceToward(t.x - this.me.x, t.y - this.me.y),
            this.api.folkHelp(e).then((e) => {
              this.floater(
                this.me.x * 16,
                this.me.y * 16 - 30,
                e ?? `You help ${t.name} up`,
                e ? `#ff9a8a` : `#bdfcff`,
                !1,
              );
            }));
          return;
        }
        if (this.townsfolk.lost(e) && this.api.folkRescue) {
          (q.sfx(`click`, 0.5),
            this.faceToward(t.x - this.me.x, t.y - this.me.y),
            this.api.folkRescue(e).then((e) => {
              this.floater(
                this.me.x * 16,
                this.me.y * 16 - 30,
                e ?? `${t.name} follows you`,
                e ? `#ff9a8a` : `#bdfcff`,
                !1,
              );
            }));
          return;
        }
        this.townsfolk.heard(e);
        let a = { name: t.name, title: t.title, color: t.color, art: t.art },
          o =
            this.story?.done && !this.story.chatting
              ? this.townsfolk.takePlea(e, a)
              : null;
        if (o) {
          (q.sfx(`click`, 0.5),
            this.faceToward(t.x - this.me.x, t.y - this.me.y),
            this.story.converse(o));
          return;
        }
        i = {
          ids: [n.id],
          voice: { name: t.name, title: t.title, color: t.color, art: t.art },
          fallback: () => {
            let i = this.townsfolk.takeLine(e);
            return i
              ? [i]
              : t.lines.length
                ? [t.lines[r(n.id, t.lines.length)]]
                : [`…`];
          },
          converse: (n) =>
            this.townsfolk.talk(
              e,
              { name: t.name, title: t.title, color: t.color, art: t.art },
              n,
            ),
          at: { x: t.x, y: t.y },
        };
      }
      i &&
        (this.quests.talkTo(i) || a) &&
        (q.sfx(`click`, 0.5),
        i.at && this.faceToward(i.at.x - this.me.x, i.at.y - this.me.y));
    }
    collectRoom(e, t, n, r, i, a, o = !1) {
      let s = e.kind === `house` ? this.houseArtOf(e) : null,
        c = g8(e),
        l = o && c === `room`,
        u = s
          ? { base: s.base, items: [], lights: [...s.lights] }
          : o && c === `homestead`
            ? dF(e, { hd: !0 })
            : UL(e, l ? { hd: !0 } : void 0),
        d = o && s ? this.hdHouse : null;
      if (d?.ground) {
        let e = [];
        (this.home.collectHouse(e, d.ground, r, i, u.lights),
          e.sort((e, t) => e.y - t.y));
        for (let t of e) t.draw();
      } else s && this.home.collectHouse(t, n, r, i, u.lights, d?.skip);
      if (
        (o || Pp(n, u.base, e.x0 * 16 - r, e.y0 * 16 - i),
        e.kind === `homestead`)
      ) {
        o || this.home.drawGround(n, r, i);
        let e = [
          this.me,
          ...[...this.remotes.values()]
            .filter((e) => !e.doc.dead)
            .map((e) => ({ x: e.rx, y: e.ry })),
        ];
        this.home.collect(
          t,
          n,
          r,
          i,
          this.time,
          e,
          this.lights,
          this.lastRdt,
          o,
        );
      }
      let f = this.lights.length,
        p = [];
      for (let e of u.items) {
        if (o) {
          e.gameKey &&
            this.objectLights(
              e.gameKey,
              e.tx * 16 + 8 - r,
              e.baseY - i,
              e.tx,
              e.ty,
            );
          continue;
        }
        let a = e.frames
          ? xA(
              e.frames,
              this.time * (e.fps ?? 8) + Je(e.tx, e.ty, 5) * e.frames.length,
            )
          : e.c;
        (t.push({ y: e.baseY, draw: () => Pp(n, a, e.x - r, e.y - i) }),
          e.gameKey &&
            this.objectLights(
              e.gameKey,
              e.tx * 16 + 8 - r,
              e.baseY - i,
              e.tx,
              e.ty,
            ));
      }
      let m = 1 - y8(a / 0.82, 0, 1);
      for (let t of u.lights) {
        let n = t.flicker
            ? 0.88 +
              Math.sin(this.real * 11 + t.x) * 0.06 +
              Math.random() * 0.06
            : 1,
          a = t.a * n * (t.day ? 0.25 + m * 0.75 : 1),
          s = t.r * (t.flicker ? 0.97 + n * 0.03 : 1);
        if (!o)
          this.lights.push({ x: t.x - r, y: t.y - i, r: s, color: t.color, a });
        else if (c === `homestead`)
          this.lights.push({
            x: t.x - r,
            y: t.y + Bse - i,
            r: s,
            color: t.color,
            a,
            z: t.z,
          });
        else if (t.day && !l)
          p.push({
            x: t.x - r,
            y: t.y + Vse - i,
            r: s,
            color: t.color,
            a: a * Hse,
            z: t.z,
          });
        else if (t.day) {
          let n = Roe({ x0: t.x, x1: t.x, y: e.y0 * 16 + Lse, z0: 8, z1: 23 });
          p.push({
            x: n.x - r,
            y: n.y - h8 - i,
            r: s,
            color: t.color,
            a: a * Rse,
            z: h8,
          });
        } else
          this.lights.push({
            x: t.x - r,
            y: t.y - i,
            r: s * zse,
            color: t.color,
            a,
            z: t.z,
            cast: t.flicker || void 0,
          });
      }
      o &&
        ((this.roomGlows = [f, c === `homestead` ? f : this.lights.length]),
        this.lights.push(...p));
      let h = this.me;
      for (let a of e.folk) {
        let e = tR(a.look),
          o = Math.hypot(a.x - h.x, a.y - h.y) < 2.8,
          s = a.dir;
        if (o) {
          let e = h.x - a.x,
            t = h.y - a.y;
          s = Math.abs(e) > Math.abs(t) * 1.2 ? (e > 0 ? 2 : 3) : t > 0 ? 0 : 1;
        }
        let c = Je(a.x * 7, a.y * 3, 11) * 9,
          l =
            !o && (this.real + c) % 9 < 0.7
              ? 6
              : Math.floor(this.real * 1.6 + c) % 2,
          u = a.x * 16,
          d = a.y * 16,
          f = sz(a.look);
        if (f) {
          t.push({
            y: d,
            x: u,
            box: gz(f),
            draw: () =>
              mz(n, f, u - r, d - i, { dir: s, t: this.real + c, working: !o }),
          });
          continue;
        }
        t.push({
          y: d,
          x: u,
          box: Ise,
          draw: () => {
            ((n.fillStyle = `rgba(0,0,0,0.3)`),
              n.beginPath(),
              n.ellipse(
                Math.round(u - r),
                Math.round(d - i),
                6 * NR,
                2.5 * NR,
                0,
                0,
                Math.PI * 2,
              ),
              n.fill(),
              IR(n, e.frames[s][l], u - r, d - i, 10, 26));
          },
        });
      }
    }
    inCombat() {
      return !!this.meDoc && IQ(this.real, this.combatAt, this.meDoc.dead);
    }
    threatNear() {
      for (let e of this.monsters.values()) {
        if (e.local || e.doc.dead) continue;
        let t = Fe[e.doc.kind]?.aggro;
        if (t !== void 0 && Math.hypot(e.rx - this.me.x, e.ry - this.me.y) <= t)
          return !0;
      }
      return !1;
    }
    update(e) {
      this.lastRdt = e;
      let t = this.hdNow();
      (setRenderScaleMode(t ? (y6().cal ? `hdcal` : `hd2d`) : `classic`),
        !t && this.hdLast && this.fx3d?.layer.obliqueView(),
        (this.real += e),
        this.real < this.slowUntil
          ? (this.timeScale = b8(this.timeScale, this.slowScale, 0.2))
          : ((this.timeScale = b8(this.timeScale, 1, 0.08)),
            (this.slowScale = m8)));
      let n = e * this.timeScale;
      if (((this.time += n), !this.meDoc)) return;
      let r = this.meDoc.dead;
      for (let e of this.monsters.values())
        if (!e.doc.dead && e.doc.target === this.myId) {
          this.combatAt = this.real;
          break;
        }
      (this.dungeon?.hunting() && (this.combatAt = this.real),
        q.setCombat(this.inCombat()),
        this.story?.update(e),
        this.townsfolk.update(e),
        this.quests.update(e),
        this.scenes.update(e));
      let i = this.dome;
      if (
        ((i.power = b8(i.power, i.target, 1 - 0.05 ** e)),
        (i.hits = i.hits.filter((e) => this.time - e.t0 < 1.6)),
        this.cine)
      ) {
        this.cine.t += e;
        let t = this.cine.path(this.cine.t);
        if (
          ((this.cam.x = t.x), (this.cam.y = t.y), this.cine.t >= this.cine.dur)
        ) {
          let e = this.cine.onEnd;
          ((this.cine = null), (this.barsTarget = +!!r), e?.());
        }
      }
      ((this.bars = b8(this.bars, this.barsTarget, 1 - 0.02 ** e)),
        (this.cine || this.story?.locked) && (this.sceneLast = this.real),
        this.applyPad(e));
      let a = 0,
        o = 0,
        s =
          !r &&
          !this.cine &&
          !this.story?.locked &&
          !this.transit &&
          !this.story?.chatting;
      s &&
        (this.held(`up`) && --o,
        this.held(`down`) && (o += 1),
        this.held(`left`) && --a,
        this.held(`right`) && (a += 1),
        a === 0 &&
          o === 0 &&
          Math.hypot(this.stick.x, this.stick.y) > 0.22 &&
          ((a = this.stick.x), (o = this.stick.y)),
        a === 0 &&
          o === 0 &&
          (this.padMove.x || this.padMove.y) &&
          ((a = this.padMove.x), (o = this.padMove.y)));
      let c = a !== 0 || o !== 0;
      ((this.moveIntent.x = a),
        (this.moveIntent.y = o),
        c &&
          ((this.lastWalk.x = a),
          (this.lastWalk.y = o),
          (this.lastWalk.at = this.real)));
      let l = Sse(
        {
          held:
            s &&
            (this.held(`sprint`) || this.stickSprint || this.padSprint) &&
            !this.guarding(),
          spent: this.sprintSpent,
          moving: c,
          gliding: !c && this.momentum.k > 0,
          maxStamina: this.zoneMaxStamina,
          busy: !!this.hearth || !!this.channel || !!this.homeWalk,
        },
        this.stamina,
      );
      ((this.sprintSpent = l.spent),
        l.outOfBreath &&
          this.floater(
            this.me.x * 16,
            this.me.y * 16 - 36,
            `Out of breath`,
            `#e3b341`,
            !1,
          ),
        s || this.momentum.stop());
      let u = this.momentum.step(n, a, o, l.sprinting);
      if (u) {
        let e = this.solo ? 0 : this.enemy.slowAt(this.me.x, this.me.y),
          t = Math.min(
            this.real < this.chillUntil ? 1 - this.chillK : 1,
            1 - e,
          ),
          r = !!this.net && !this.solo,
          i = r ? Pd(u.dx) : u.dx,
          a = r ? Pd(u.dy) : u.dy,
          o = Math.hypot(i, a) || 1,
          s = 1 + (ue.mult - 1) * u.sprint,
          c = this.guarding(),
          l =
            (r
              ? He * this.zoneSpeed
              : He * (1 + this.mods.speed) * (this.dungeon?.speedMult() ?? 1)) *
            t *
            u.k *
            s *
            n *
            (c ? he.slow : 1),
          d = this.me.x + (i / o) * l,
          f = this.me.y + (a / o) * l,
          p = this.me.x,
          m = this.me.y;
        if (
          (this.canStand(d, this.me.y) &&
            (this.solo || this.enemy.canPass(p, m, d, this.me.y)) &&
            (this.me.x = d),
          this.canStand(this.me.x, f) &&
            (this.solo || this.enemy.canPass(this.me.x, m, this.me.x, f)) &&
            (this.me.y = f),
          this.meDoc?.outlaw &&
            !ii(p, m) &&
            ii(d, f) &&
            this.real - this.wardSaidAt > 3 &&
            ((this.wardSaidAt = this.real),
            this.floater(
              this.me.x * 16,
              this.me.y * 16 - 36,
              `The Ward won't open to the Discordant`,
              E8,
              !1,
            )),
          this.me.x === p && this.me.y === m)
        )
          ((this.moveIntent.x = this.moveIntent.y = 0),
            this.momentum.stop(),
            (this.stamina.sprinting = !1),
            (this.sprintK = 0));
        else {
          let e = u.sprint > 0,
            i = e ? (n * t * u.k * s) / ue.mult : n * t * u.k;
          (r && this.recordStep(u.dx, u.dy, i, e, c),
            pe(this.stamina, i, e, this.real),
            (this.sprintK = u.sprint));
        }
      } else ((this.stamina.sprinting = !1), (this.sprintK = 0));
      (r || me(this.stamina, e, this.real, Mu(this.mods)),
        c
          ? ((this.me.anim += n * 9 * (1 + (ue.mult - 1) * this.sprintK)),
            this.me.castT <= 0 &&
              (Math.abs(a) > Math.abs(o) || (a !== 0 && o === 0)
                ? (this.me.dir = a > 0 ? _8.right : _8.left)
                : (this.me.dir = o > 0 ? _8.down : _8.up)),
            Math.random() < n * (8 + 16 * this.sprintK) &&
              this.particles.spawn({
                x: this.me.x * 16 + (Math.random() - 0.5) * 6,
                y: this.me.y * 16,
                z: 1,
                vz: 8,
                vx: -a * 6,
                life: 0.4,
                size: 1,
                color: this.groundDustColor(),
                glow: !1,
              }))
          : (this.me.anim += n * 2),
        (this.me.moving = c),
        this.updateChannel(e, c),
        this.updateHomeWalk(e, c),
        this.updateHearth(e),
        this.blinkHold &&
          (!this.holdsBlink() || !this.castGate()) &&
          this.cancelBlinkHold());
      let d = this.blinkHold;
      if (
        ((this.blinkView =
          d &&
          this.blinkCharging() &&
          this.real - d.since >= le.tapSecs + (d.by === `key` ? 0 : 0.13)
            ? this.previewBlink()
            : null),
        (this.roadFx = this.roadFx.filter((e) => this.real - e.t0 < 1.4)),
        this.dungeon || this.updateDoors(e, a, o),
        this.updateDoorways(e),
        this.transit ||
          (this.doorFade += y8(this.fadeGoal - this.doorFade, -e * 3, e * 3)),
        this.pickupNearby(),
        (this.me.castT -= n),
        (this.me.flash -= e),
        aZ().device === `pad` && s && !this.uiOpen && !y1()
          ? this.padReticle(e)
          : (this.padPick = null),
        s &&
          this.mouse.down &&
          (this.aimTouch === null ? this.keyCast(0) : this.castSlot(0)),
        s && this.mouse.right && this.keyCast(1),
        s && this.heldSlot !== null && this.touchCast(this.heldSlot),
        s)
      )
        for (let e of this.padHeld)
          this.castSlot(e, { aim: () => this.aimFor(e, `pad`).at });
      (r ||
        (this.mana = Math.min(
          this.maxMana(),
          this.mana + (Be(this.meDoc.level) + this.mods.regen) * e,
        )),
        this.god && (this.mana = this.maxMana()));
      let f = this.lastSent,
        p = this.dungeon;
      if (p) {
        if (p.hosted) {
          let e =
            Math.abs(f.x - this.me.x) > 0.01 ||
            Math.abs(f.y - this.me.y) > 0.01 ||
            f.moving !== c ||
            f.dir !== this.me.dir;
          !r &&
            ((e && this.real - f.t > 0.1) || this.real - f.t > 3) &&
            (this.api.move(this.me.x, this.me.y, this.me.dir, c),
            (this.lastSent = {
              x: this.me.x,
              y: this.me.y,
              moving: c,
              dir: this.me.dir,
              t: this.real,
            }));
        } else
          this.real - f.t > 4 &&
            (this.api.move(p.outside.x, p.outside.y, 0, !1),
            (this.lastSent = {
              x: p.outside.x,
              y: p.outside.y,
              moving: !1,
              dir: 0,
              t: this.real,
            }));
        (p.update(n), (this.room = null));
        let e = p.prompt();
        this.talkable =
          e && !this.story?.chatting
            ? {
                id: `dng:${e.label}`,
                name: e.label,
                x: e.x,
                y: e.y,
                note: !0,
                out: { t: `dungeon` },
                label: `[E] ${e.label}`,
                labelDy: 30,
              }
            : null;
      } else {
        let e =
          Math.abs(f.x - this.me.x) > 0.01 ||
          Math.abs(f.y - this.me.y) > 0.01 ||
          f.moving !== c ||
          f.dir !== this.me.dir;
        !r &&
          ((e && this.real - f.t > 0.1) || this.real - f.t > 3) &&
          (this.api.move(this.me.x, this.me.y, this.me.dir, c),
          (this.lastSent = {
            x: this.me.x,
            y: this.me.y,
            moving: c,
            dir: this.me.dir,
            t: this.real,
          }));
        let t = Qr(this.me.x, this.me.y);
        if (t !== this.room) {
          let e = this.room;
          if (
            ((this.room = t),
            (this.talkable = null),
            t?.kind !== `homestead` && (this.home.build = null),
            t?.kind !== `house` &&
              ((this.home.tool = null), this.home.cancelStroke()),
            t && !this.cine)
          ) {
            let n = t.kind === `homestead`,
              r = t.kind === `house`;
            ((this.banner = {
              title: n
                ? this.home.title()
                : r
                  ? this.home.houseTitle()
                  : t.name,
              subtitle: n ? this.home.subtitle() : r ? `Home` : t.subtitle,
              t0: this.real,
              dur: 3.2,
              color: n || r ? `#b8f08a` : `#ffd98a`,
            }),
              e || q.sfx(`chime`, 0.35));
          }
        }
        let i = this.travelFrom;
        (this.travelUntil > 0 &&
          (!i ||
            t !== i.room ||
            (this.home.here?.room ?? null) !== i.home ||
            this.real > this.travelUntil) &&
          ((this.travelUntil = 0), (this.travelFrom = null), this.fadeTo(0)),
          t ? this.findTalkable(t) : this.findTalkableOutdoors(),
          t || this.snowfall(n));
        let a = ri(this.me.x, this.me.y);
        a !== this.region &&
          ((this.region = a),
          !this.cine &&
            !this.story?.phased &&
            ((this.banner = {
              title: Rr[a].name,
              subtitle: Rr[a].subtitle,
              t0: this.real,
              dur: 4,
              color: Rr[a].tint,
            }),
            q.sfx(`chime`, 0.6)));
      }
      for (let t of this.remotes.values()) {
        let r = y8((this.real - t.t0) / 0.13, 0, 1);
        ((t.rx = b8(t.fx0, t.tx, r)),
          (t.ry = b8(t.fy0, t.ty, r)),
          (t.anim += n * (t.doc.moving ? 9 : 2)),
          (t.flash -= e),
          (t.castT -= n),
          t.doc.moving &&
            Math.random() < n * 6 &&
            this.particles.spawn({
              x: t.rx * 16,
              y: t.ry * 16,
              z: 1,
              vz: 8,
              life: 0.4,
              color: `#a89f8a`,
              glow: !1,
            }));
      }
      for (let t of this.monsters.values()) {
        if (!t.local) {
          let e = y8((this.real - t.t0) / (t.glide ?? 500 / 1e3), 0, 1);
          ((t.rx = b8(t.fx0, t.tx, e)), (t.ry = b8(t.fy0, t.ty, e)));
        }
        ((t.anim += n * FB(t.doc.kind).anim),
          (t.flash -= e),
          (t.lunge -= n),
          t.dying > 0 && (t.dying -= n),
          (t.rise &&= Math.max(0, t.rise - n)),
          t.sink &&
            ((t.sink = Math.max(0, t.sink - n)),
            Math.random() < n * 20 &&
              this.particles.spawn({
                x: t.rx * 16 + (Math.random() - 0.5) * 12,
                y: t.ry * 16,
                z: 1,
                vz: 14 + Math.random() * 14,
                vx: (Math.random() - 0.5) * 20,
                gravity: 80,
                life: 0.5,
                size: 1,
                color: Math.random() < 0.5 ? `#5a4a38` : `#3a3024`,
                glow: !1,
              })),
          Math.hypot(t.rx - (t.lastX ?? t.rx), t.ry - (t.lastY ?? t.ry)) >
            5e-4 && (t.moveT = this.real),
          (t.lastX = t.rx),
          (t.lastY = t.ry),
          t.doc.dead || this.monsterAmbient(t, n));
      }
      for (let e = this.projectiles.length - 1; e >= 0; e--) {
        let t = this.projectiles[e],
          r = Math.hypot(t.vx, t.vy) * n;
        ((t.x += t.vx * n),
          (t.y += t.vy * n),
          (t.traveled += r),
          this.projectileTrail(t, n));
        let i = null;
        for (let e of this.monsters.values())
          if (
            this.targetable(e) &&
            !t.pierced?.has(e.doc._id) &&
            Math.hypot(e.rx - t.x, e.ry - 0.4 - t.y) < t.radius + S8(e.doc.kind)
          ) {
            i = e;
            break;
          }
        if (!i && t.mine && !t.pierced) {
          let n = !1;
          for (let e of this.remotes.values())
            if (
              this.pvpTarget(e) &&
              Math.hypot(e.rx - t.x, e.ry - 0.4 - t.y) < t.radius + 0.4
            ) {
              n = !0;
              break;
            }
          if (n) {
            (this.projectiles.splice(e, 1),
              this.impact(t.x, t.y, t.school, !1, t.arrow));
            continue;
          }
        }
        i &&
          t.pierced &&
          (t.pierced.add(i.doc._id),
          this.impact(t.x, t.y, t.school, !1, t.arrow),
          t.mine && this.applyHit(i, t.spell),
          this.arrowHit(t, i),
          (i = null));
        let a = this.dungeon
          ? this.dungeon.solid(t.x, t.y + 0.4)
          : ni(t.x, t.y + 0.4);
        (i || t.traveled >= t.range || a) &&
          (this.projectiles.splice(e, 1),
          this.impact(t.x, t.y, t.school, !1, t.arrow),
          t.spell.burst
            ? this.burstAt(t)
            : i && t.mine && this.applyHit(i, t.spell),
          i && t.mine && this.boltCapstone(t, i),
          i && this.arrowHit(t, i));
      }
      if (!this.solo) {
        let e = this.dungeon;
        (this.enemy.update(n, {
          me: this.me,
          immune:
            r ||
            this.real < this.blinkGraceUntil ||
            this.veiled() ||
            !!this.story?.phased ||
            !!this.room ||
            !!this.transit ||
            this.god,
          solid: (t, n) => (e ? e.solid(t, n) : ni(t, n)),
          onHit: (e, t, n) => this.struckBy(e, t, n),
          guard: (e, t, n, r) => this.turnAside(e, t, n, r),
          domed: (e, t) => this.inDome(e, t),
          onLand: (e) => this.enemyLand(e),
          particles: (e, t, n) =>
            this.particles.burst(e * 16, t * 16, 8, [n, `#ffffff`], 45),
          monster: (e) => {
            let t = this.monsters.get(e);
            return t ? T8(e, t) : null;
          },
          monsters: () =>
            [...this.monsters]
              .filter(
                ([, e]) =>
                  Math.abs(e.rx - this.me.x) < 24 &&
                  Math.abs(e.ry - this.me.y) < 24,
              )
              .map(([e, t]) => T8(e, t)),
          others: () =>
            [...this.remotes.values()]
              .filter((e) => !e.doc.dead)
              .map((e) => ({ x: e.rx, y: e.ry })),
        }),
          this.fx3d &&
            this.fx3d.layer.on &&
            this.fx3d.golem.update(this.real, n, {
              live: this.enemy.live,
              shots: this.enemy.shots,
              body: (e) => {
                let t = this.monsters.get(e);
                return t ? T8(e, t) : null;
              },
              me: this.me,
              shake: (e) => (this.shake = Math.max(this.shake, e)),
            }));
      }
      for (let e = this.timers.length - 1; e >= 0; e--)
        if (this.time >= this.timers[e].at) {
          let t = this.timers[e];
          (this.timers.splice(e, 1), t.fn());
        }
      for (let e = this.rifts.length - 1; e >= 0; e--) {
        let t = this.rifts[e];
        if (
          (this.riftParticles(t, n),
          this.time >= t.next &&
            t.ticks > 0 &&
            (t.ticks--,
            (t.next = this.time + 0.5),
            this.mage3d ||
              this.rings.push({
                x: t.x * 16,
                y: t.y * 16,
                r: 0,
                max: (t.spell.radius ?? 2) * 16,
                life: 0,
                dur: 0.35,
                color: S[t.school].colors.glow,
              }),
            t.mine))
        )
          for (let e of this.monstersInRadius(t.x, t.y, t.spell.radius ?? 2))
            this.applyHit(e, t.spell);
        this.time >= t.end && this.rifts.splice(e, 1);
      }
      for (let e = this.meteors.length - 1; e >= 0; e--) {
        let t = this.meteors[e];
        t.t += n;
        let r = y8(t.t / t.dur, 0, 1),
          i = b8(t.x, t.tx, r * r),
          a = b8(t.y, t.ty, r * r);
        for (let e = 0; e < (this.mage3d ? 0 : 4); e++)
          this.particles.spawn({
            x: i + (Math.random() - 0.5) * 6,
            y: a + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 20,
            vy: -20 - Math.random() * 20,
            life: 0.5,
            size: 2 + Math.floor(Math.random() * 2),
            color: [`#ffd166`, `#ff7a1a`, `#b3261e`][e % 3],
            glow: !0,
          });
        (this.lights.push({ x: i, y: a, r: 60, color: `#ff7a1a`, a: 1 }),
          r >= 1 && this.meteors.splice(e, 1));
      }
      (this.mage3d?.update(this.real, n, {
        projectiles: this.projectiles.filter((e) => !e.arrow),
        rifts: this.rifts.filter((e) => e.spell.needs !== `bow`),
        meteors: this.meteors,
        time: this.time,
        me: this.me,
      }),
        (this.domes = this.domes.filter((e) => e.until > this.real)));
      for (let e = this.fallingArrows.length - 1; e >= 0; e--) {
        let t = this.fallingArrows[e];
        t.z > 0
          ? ((t.z = Math.max(0, t.z - 420 * n)),
            t.z === 0 &&
              ((t.t0 = this.real),
              Math.random() < 0.3 &&
                this.particles.burst(t.x, t.y, 3, [`#c9b48a`, `#8a7656`], 20, {
                  glow: !1,
                  life: 0.25,
                })))
          : this.real - t.t0 > 0.6 && this.fallingArrows.splice(e, 1);
      }
      for (let e of this.beams) e.life -= n;
      this.beams = this.beams.filter((e) => e.life > 0);
      for (let e of this.rings) e.life += n;
      this.rings = this.rings.filter((e) => e.life < e.dur);
      for (let t of this.floaters)
        ((t.life -= e), (t.y -= e * (t.big ? 18 : 24)));
      this.floaters = this.floaters.filter((e) => e.life > 0);
      for (let e of this.telegraphs) e.life -= n;
      this.telegraphs = this.telegraphs.filter((e) => e.life > 0);
      for (let e of this.decals) e.life -= n;
      ((this.decals = this.decals.filter((e) => e.life > 0)),
        this.dungeon || this.ambient(n),
        this.particles.update(n));
      let m = this.story?.cam;
      if (
        (m
          ? ((this.cam.x = m.x), (this.cam.y = m.y), (this.zoom = m.zoom))
          : ((this.zoom = b8(this.zoom, 1, 1 - 0.02 ** e)),
            Math.abs(this.zoom - 1) < 0.004 && (this.zoom = 1)),
        !this.cine && !m)
      ) {
        let t = this.room,
          n = !t && (!this.touchMode || aZ().device === `pad`),
          i = n && !r ? (this.mouse.sx - this.viewW / 2) * 0.12 : 0,
          a = n && !r ? (this.mouse.sy - this.viewH / 2) * 0.12 : 0,
          o = 1 - 0.004 ** e,
          s = { ...this.camLead };
        (!n || r || this.blinkHold?.by !== `key`) &&
          ((this.camLead.x = b8(this.camLead.x, i, o)),
          (this.camLead.y = b8(this.camLead.y, a, o)));
        let c = this.drawnMe(),
          l = c.x * 16,
          u = c.y * 16 - 8;
        if (t) {
          let e = (e, t, n, r) =>
              n - t <= r ? (t + n) / 2 : y8(e, t + r / 2, n - r / 2),
            n = this.hdReach(t);
          if (
            ((l =
              e(
                l + i,
                t.x0 * 16 - 8,
                (t.x0 + t.w) * 16 + 8,
                n ? n.wBot * 2 : this.viewW,
              ) - i),
            !n)
          )
            u =
              e(u + a, t.y0 * 16 - 24, (t.y0 + t.h) * 16 + 12, this.viewH) - a;
          else {
            let e = t.kind === `homestead`,
              r = t.y0 * 16 - 24 - (e ? Use : 0),
              i = (t.y0 + t.h) * 16 + 12 + (e ? Wse : 0);
            u =
              (i - r <= n.n + n.s
                ? qse(r, i, n, this.viewH)
                : y8(u + a, r + n.n, i - n.s)) - a;
          }
        }
        let d = b8(this.cam.x - s.x, l, o),
          f = b8(this.cam.y - s.y, u, o);
        ((this.cam.x = d + this.camLead.x),
          (this.cam.y = f + this.camLead.y),
          this.snapCam &&
            ((this.snapCam = !1),
            (this.camLead.x = i),
            (this.camLead.y = a),
            (this.cam.x = l + i),
            (this.cam.y = u + a)));
      }
      ((this.shake = Math.max(0, this.shake - e * 18)),
        (this.flash.a = Math.max(0, this.flash.a - e * 2.2)),
        (this.hurtFlash = Math.max(0, this.hurtFlash - e * 1.8)));
      let h = this.monsterAt(this.mouseWorld());
      if (
        (h
          ? (this.hovered = h)
          : this.hovered &&
            (!this.targetable(this.hovered) ||
              Math.hypot(
                this.hovered.rx - this.me.x,
                this.hovered.ry - this.me.y,
              ) > 12) &&
            (this.hovered = null),
        this.hovered &&
          this.monsters.get(this.hovered.doc._id) !== this.hovered &&
          (this.hovered = null),
        this.mageMenuFor !== null && !xc(this.mageMenuFor))
      ) {
        let e = this.remotes.get(this.mageMenuFor);
        (!e ||
          !this.listed(e) ||
          !this.headPlaces.has(`mage:${this.mageMenuFor}`)) &&
          this.closeMageMenu();
      }
      let g =
        this.mouseOnWorld &&
        !this.touchMode &&
        aZ().device === `keys` &&
        !!this.api.mageMenu &&
        !this.tapTakes() &&
        !this.otherPanelUp() &&
        Ls({
          inCombat: this.inCombat(),
          casting:
            this.mouse.down ||
            this.mouse.right ||
            this.heldSlot !== null ||
            !!this.blinkHold,
          foeUnder: this.foeUnder(this.mouseWorld()),
        });
      ((this.plateHover = g
        ? (Is(
            this.headPlaces,
            this.mouse.sx,
            this.mouse.sy,
            this.scale,
            Ps.mouse,
          )?.id ?? null)
        : null),
        this.drawMinimapThrottled());
    }
    groundDustColor() {
      switch (this.region) {
        case `frost`:
          return `#ffffff`;
        case `ash`:
          return `#6b5d63`;
        case `sanctum`:
          return `#b9b3c7`;
        default:
          return `#a89f8a`;
      }
    }
    monsterAmbient(e, t) {
      let n = FB(e.doc.kind);
      if (!n.motes || e.rise || e.sink) return;
      let r = e.rx * 16,
        i = e.ry * 16,
        a = e.doc.facing < 0 ? -1 : 1;
      for (let e of n.motes)
        Math.random() >= t * e.rate ||
          this.particles.spawn({
            x: r + (e.dx ?? 0) * a + (Math.random() - 0.5) * e.spread,
            y: i + e.dy + (Math.random() - 0.5) * Math.min(10, e.spread * 0.5),
            vz: e.rise ?? 12,
            life: 0.6 + Math.random() * 0.3,
            size: 1,
            color: e.color,
            glow:
              e.color !== `#3a0a18` &&
              e.color !== `#2a0a3a` &&
              e.color !== `#8c86a0`,
          });
    }
    ambient(e) {
      let t = this.cam.x - this.viewW / 2,
        n = this.cam.y - this.viewH / 2,
        r = () => t + Math.random() * this.viewW,
        i = () => n + Math.random() * this.viewH,
        a = this.darkness() > 0.3;
      switch (this.region) {
        case `frost`:
          for (let t = 0; t < 3; t++)
            Math.random() < e * 30 &&
              this.particles.spawn({
                x: r(),
                y: n - 4,
                vx: -10 - Math.random() * 12,
                vy: 22 + Math.random() * 18,
                life: 7,
                size: Math.random() < 0.2 ? 2 : 1,
                color: `#ffffff`,
                glow: !1,
                shrink: !1,
              });
          break;
        case `ash`:
          (Math.random() < e * 26 &&
            this.particles.spawn({
              x: r(),
              y: n + this.viewH + 4,
              vx: 6 + Math.random() * 6,
              vy: -18 - Math.random() * 18,
              life: 6,
              size: 1,
              color: Math.random() < 0.5 ? `#ff7a1a` : `#ffd166`,
              glow: !0,
              shrink: !1,
            }),
            Math.random() < e * 14 &&
              this.particles.spawn({
                x: r(),
                y: n - 4,
                vx: 8,
                vy: 12,
                life: 7,
                size: 1,
                color: `#8c7f86`,
                glow: !1,
                shrink: !1,
              }));
          break;
        case `woods`:
          (Math.random() < e * (a ? 24 : 5) &&
            this.particles.spawn({
              x: r(),
              y: i(),
              vx: (Math.random() - 0.5) * 10,
              vy: (Math.random() - 0.5) * 10,
              z: 4 + Math.random() * 14,
              vz: (Math.random() - 0.5) * 6,
              life: a ? 4.5 : 3,
              size: 1,
              color: `#e8ff8a`,
              glow: !0,
            }),
            Math.random() < e * 4 &&
              this.particles.spawn({
                x: r(),
                y: n - 4,
                vx: 10,
                vy: 16,
                life: 8,
                size: 1,
                color: `#6aa84f`,
                glow: !1,
                shrink: !1,
              }));
          break;
        case `glade`:
          Math.random() < e * (a ? 10 : 6) &&
            this.particles.spawn({
              x: r(),
              y: i(),
              vx: 6 + Math.random() * 6,
              vy: -2,
              z: 8,
              life: 4,
              size: 1,
              color: a ? `#e8ff8a` : `#fff6c4`,
              glow: a,
              shrink: !1,
            });
          break;
        case `sanctum`:
          if (
            Math.random() < e * 20 &&
            Math.hypot(this.me.x - Mr, this.me.y - Nr) < 24
          ) {
            let e = Math.random() * Math.PI * 2,
              t = Math.random() * 9 * 16;
            this.particles.spawn({
              x: (Mr + 0.5) * 16 + Math.cos(e) * t,
              y: Nr * 16 + Math.sin(e) * t * 0.8,
              vz: 10 + Math.random() * 12,
              life: 3,
              size: 1,
              color: Math.random() < 0.7 ? `#8ef6ff` : `#b58aff`,
              glow: !0,
            });
          }
      }
      if (Math.random() < e * 5 && this.meDoc && !this.meDoc.dead) {
        let e = this.drawnMe(),
          t = this.orbPos(e.x, e.y, e.dir, e.castT > 0, 0);
        this.particles.spawn({
          x: t.x,
          y: t.y,
          vz: 10,
          life: 0.8,
          size: 1,
          color: S[this.school].colors.spark,
          glow: !0,
        });
      }
    }
    snap(e) {
      return Math.round(e * this.dens) / this.dens;
    }
    mouseWorld() {
      let e = this.hdAimView(),
        t = e?.view.toGround(this.mouse.sx, this.mouse.sy);
      return e && t
        ? { x: (t.x + e.mx) / 16, y: (t.y + e.my) / 16 }
        : {
            x: (this.mouse.sx + this.snap(this.cam.x - this.viewW / 2)) / 16,
            y: (this.mouse.sy + this.snap(this.cam.y - this.viewH / 2)) / 16,
          };
    }
    hdAimView() {
      let e = this.hdLast ? this.hdAim : null,
        t = e && this.hdNow();
      if (!e || !t) return null;
      let n = y6().cal ? (e) => this.snap(e) : (e) => e;
      return {
        view: t.view,
        a: e,
        mx: n(this.cam.x - e.W / 2) - e.x,
        my: n(this.cam.y - e.H / 2) - e.y,
      };
    }
    touchCast(e) {
      if (
        !this.meDoc ||
        this.meDoc.dead ||
        this.cine ||
        this.story?.locked ||
        this.room ||
        this.transit ||
        this.real < (this.cdUntil[this.slotKey(e)] ?? 0) ||
        (e !== QW && !this.slotSpell(e))
      )
        return;
      let t = this.aimFor(e, `touch`);
      (this.aimMouseAt(t.at), this.castSlot(e, { aim: () => t.at }));
    }
    keyCast(e) {
      if (e === QW || !C1(`cursor`, _l())) return this.castSlot(e);
      this.castSlot(e, {
        aim: () => {
          let t = this.aimFor(e, `cursor`);
          return (t.foe && (this.hovered = t.foe), t.at);
        },
      });
    }
    monsterAt(e, t = b1.under) {
      let n = this.hdAimView() ? 0.4 / Math.tan((nse() * Math.PI) / 180) : 0.4,
        r = null,
        i = t;
      for (let t of this.monsters.values()) {
        if (!this.targetable(t)) continue;
        let a = Math.hypot(t.rx - e.x, t.ry - n - e.y);
        a < i && ((i = a), (r = t));
      }
      return r;
    }
    aimNow() {
      let e = this.aimCache;
      if (e && e.t === this.real) return e;
      let t = [];
      for (let e of this.monsters.values())
        this.targetable(e) && t.push({ id: e.doc._id, x: e.rx, y: e.ry - 0.4 });
      let n = [];
      for (let e of this.remotes.values())
        this.pvpTarget(e) && n.push({ x: e.rx, y: e.ry - 0.4 });
      return (
        (this.aimCache = { t: this.real, foes: t, mages: n }),
        this.aimCache
      );
    }
    tapTakes(e = !0) {
      if (
        (this.story && (this.story.locked || this.story.dialogue)) ||
        this.cine ||
        this.home.building(this.room)
      )
        return !0;
      if (!e || !this.room || !this.talkable) return !1;
      let t = this.mouseWorld();
      return (
        Math.hypot(t.x - this.talkable.x, t.y + 0.8 - this.talkable.y) < 1.4
      );
    }
    listed(e) {
      return e.doc.dead || this.story?.phased || this.solo
        ? !1
        : this.room
          ? Qr(e.rx, e.ry) === this.room
          : e.rx < Or;
    }
    magesNear(e, t) {
      let n = [];
      for (let [t, r] of this.remotes) {
        let i = Math.hypot(r.rx - this.me.x, r.ry - this.me.y);
        if (!this.listed(r) || i > e) continue;
        let a = r.doc;
        n.push({
          key: t,
          entity: zs(t),
          name: a.name,
          school: a.school,
          level: a.level,
          outlaw: !!a.outlaw,
          hostile: !!a.hostile,
          wanted: this.wanted.get(a.name)?.level ?? 0,
          partied: !!a.partied,
          dist: i,
        });
      }
      return n.sort((e, t) => e.dist - t.dist).slice(0, t);
    }
    foeUnder(e) {
      return !!this.monsterAt(e) || w1(e, this.aimNow().mages, null);
    }
    sceneOf(e, t = 0) {
      let n = this.hdAimView();
      return n
        ? n.view.toScreen(
            e.x * 16 - n.mx + n.a.shX,
            e.y * 16 - n.my + n.a.shY,
            t,
          )
        : {
            sx: e.x * 16 - this.snap(this.cam.x - this.viewW / 2),
            sy: e.y * 16 - this.snap(this.cam.y - this.viewH / 2) - t,
          };
    }
    plateBox(e) {
      let t = this.headPlaces.get(`mage:${e}`),
        n = this.remotes.get(e);
      if (!t || !n) return null;
      if (t.label) return t.label;
      let r = this.sceneOf({ x: n.rx, y: n.ry }, 30);
      return {
        x: r.sx * this.scale - 30,
        y: r.sy * this.scale - 14,
        w: 60,
        h: 14,
      };
    }
    mageMenuAt() {
      return this.mageMenuFor === null ? null : this.plateBox(this.mageMenuFor);
    }
    otherPanelUp() {
      return this.uiOpen && !this.askUp && this.mageMenuFor === null;
    }
    openMageMenu(e) {
      let t = this.remotes.get(e),
        n = this.plateBox(e);
      if (
        !t ||
        !n ||
        !this.listed(t) ||
        !this.api.mageMenu ||
        this.otherPanelUp()
      )
        return !1;
      let r = this.wanted.get(t.doc.name)?.level ?? 0,
        i = [];
      for (let [t, n] of this.headPlaces)
        n.label &&
          t.startsWith(`mage:`) &&
          t !== `mage:${e}` &&
          i.push(n.label);
      return (
        (this.mageMenuFor = e),
        (this.mageMenuSince = performance.now()),
        this.api.mageMenu({
          key: e,
          entity: zs(e),
          name: t.doc.name,
          school: t.doc.school,
          level: t.doc.level,
          outlaw: !!t.doc.outlaw,
          hostile: !!t.doc.hostile,
          wanted: r,
          partied: !!t.doc.partied,
          at: n,
          others: i,
        }),
        q.sfx(`click`, 0.5),
        !0
      );
    }
    closeMageMenu() {
      this.menuFor !== null &&
        ((this.menuFor = null), this.api.mageMenu?.(null));
    }
    mageMenuNear(e) {
      if (!this.api.mageMenu || !this.meDoc || this.otherPanelUp()) return;
      let t = [];
      for (let [e, n] of this.remotes)
        this.listed(n) &&
          this.headPlaces.has(`mage:${e}`) &&
          t.push({ id: e, x: n.rx, y: n.ry - 0.4 });
      let n = { x: this.me.x, y: this.me.y - 0.6 },
        r = null;
      e === `cursor`
        ? (r = S1(this.mouseWorld(), null, t, { reach: b1.under }))
        : (this.padLook.x || this.padLook.y) &&
          (r = S1(n, this.padLook, t, { reach: 8, cone: b1.cone }));
      let i = this.mageMenuFor;
      if (i !== null && (!r || r.id === i)) {
        this.closeMageMenu();
        return;
      }
      let a = r ?? S1(n, null, t, { reach: 8 });
      (a && this.openMageMenu(a.id)) ||
        this.floater(
          this.me.x * 16,
          this.me.y * 16 - 30,
          `No mage nearby.`,
          `#bdfcff`,
          !1,
        );
    }
    aimPoint(e, t, n) {
      let r = { x: this.me.x, y: this.me.y - 0.6 },
        i,
        a,
        o = null,
        s = null,
        c;
      if (e === `cursor`) {
        if (
          ((o = this.mouseWorld()),
          (i = x1(o.x - r.x, o.y - r.y)),
          (a = b1.cone),
          n)
        ) {
          let e = this.monsterAt(o);
          if (w1(o, this.aimNow().mages, e ? { x: e.rx, y: e.ry - 0.4 } : null))
            return { at: o, foe: null };
          s = e?.doc._id ?? null;
        }
        c = this.hovered?.doc._id ?? null;
      } else if (e === `pad` && (this.padLook.x || this.padLook.y))
        ((i = x1(this.padLook.x, this.padLook.y)),
          (a = b1.cone),
          (c = this.padPick));
      else {
        let t =
          Math.hypot(this.stick.x, this.stick.y) > 0.22
            ? x1(this.stick.x, this.stick.y)
            : null;
        ((i =
          (e === `pad` ? x1(this.padMove.x, this.padMove.y) : t) ??
          x1(this.moveIntent.x, this.moveIntent.y) ??
          this.facing()),
          (c = e === `pad` ? this.padPick : (this.hovered?.doc._id ?? null)));
      }
      if (n) {
        let e = this.aimNow(),
          n = S1(r, i, e.foes, { reach: t, cone: a, prev: c, pin: s }),
          o = n ? this.monsters.get(n.id) : void 0,
          l =
            !!n &&
            a !== void 0 &&
            !!i &&
            n.id !== s &&
            T1(r, i, e.mages, { reach: t, cone: a, pick: n });
        if (n && o && !l) return { at: { x: n.x, y: n.y }, foe: o };
      }
      let l = i ?? this.facing();
      return {
        at: o ?? { x: r.x + l.x * b1.ahead, y: r.y + l.y * b1.ahead },
        foe: null,
      };
    }
    aimFor(e, t) {
      if (e === QW) return { at: this.holdTarget(0), foe: null };
      let n = this.slotSpell(e);
      return !n || n.kind === `nova`
        ? this.aimPoint(t, b1.ahead, !1)
        : this.aimPoint(
            t,
            Math.max(b1.ahead, (n.range || 0) + 0.5),
            C1(t, _l()),
          );
    }
    padReticle(e) {
      let t = aZ().page,
        n = 0;
      for (let e of kX) {
        let r = VX(t, e),
          i = r === null ? void 0 : this.slotSpell(r);
        i &&
          i.kind !== `nova` &&
          (n = Math.max(n, b1.ahead, (i.range || 0) + 0.5));
      }
      let r = this.aimPoint(`pad`, n || b1.ahead, n > 0 && C1(`pad`, _l()));
      this.padPick = r.foe?.doc._id ?? null;
      let i = this.mouseWorld(),
        a = 1 - 5e-4 ** e;
      this.aimMouseAt({
        x: i.x + (r.at.x - i.x) * a,
        y: i.y + (r.at.y - i.y) * a,
      });
    }
    aHasUse() {
      return !!this.talkable || !!this.remainsHere() || this.atCrystal();
    }
    confirm() {
      let e = this.story;
      return e && (e.locked || e.dialogue || e.narration)
        ? (e.advance(), !0)
        : !!this.cine;
    }
    padStill() {
      ((this.padMove.x || this.padMove.y) && (this.padMove = { x: 0, y: 0 }),
        (this.padLook.x || this.padLook.y) && (this.padLook = { x: 0, y: 0 }),
        this.padHeld.clear(),
        (this.padSprint = !1),
        this.cancelBlinkHold(`pad`));
    }
    applyPad(e) {
      let t = this.pad.read(gZ());
      if ((t?.active && sZ(`pad`), !t || aZ().device !== `pad`)) {
        ((this.ask.rest || this.ask.ok) &&
          (this.ask = { ...this.ask, rest: 0, ok: !1 }),
          this.padStill(),
          this.navRepeat.step(null, e),
          g1());
        return;
      }
      if ((lZ(t.id), JX(t))) {
        (this.padStill(), this.padHeld.clear());
        return;
      }
      let n = (e) => t.pressed[oX[e]],
        r = this.story;
      (n(`MENU`) && (g1(), this.api.gameMenu?.() || XG(YX.settings)),
        n(`VIEW`) && !this.cine && !r?.locked && (g1(), XG(YX.help)),
        (this.ask = OX(this.ask, t, e, this.askUp, this.aHasUse())),
        this.askUp &&
          this.ask.ok &&
          n(`UP`) &&
          v1(`.party-cards .party-card`) &&
          (this.ask = { ...this.ask, ok: !1, wait: this.ask.wait * 2 }));
      let i = this.askUp && !this.ask.ok;
      if ((this.uiOpen && !i) || y1()) {
        if (
          (this.padStill(),
          n(`R3`) &&
            this.mageMenuFor !== null &&
            !r?.locked &&
            !r?.chatting &&
            !r?.dialogue &&
            !this.cine)
        ) {
          ((this.padLook = t.right),
            this.mageMenuNear(`pad`),
            (this.padLook = { x: 0, y: 0 }));
          return;
        }
        let i = this.navRepeat.step(CX(t), e);
        (i ? p1(i) : h1() || p1(null),
          n(`A`) && m1(),
          n(`B`) && (y1() && !this.uiOpen ? g1() : YG(`Escape`)));
        return;
      }
      (g1(),
        this.navRepeat.step(null, e),
        (this.padMove = x1(t.left.x, t.left.y) ?? { x: 0, y: 0 }),
        (this.padLook = t.right));
      let a = wX(this.padSprint, !!(this.padMove.x || this.padMove.y), n(`L3`));
      if (
        ((this.padSprint = a.latched),
        a.fresh && (this.sprintSpent = !1),
        n(`A`) && !this.confirm() && XG(YX.interact),
        n(`B`))
      ) {
        let e = document.activeElement,
          t = XX(this.keyScene(), this.real - this.sceneLast);
        e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
          ? e.blur()
          : t === `escape`
            ? YG(`Escape`)
            : t === `skip`
              ? this.skipScene()
              : t === `blink` &&
                (this.holdsBlink()
                  ? this.beginBlinkHold(`pad`)
                  : this.castSlot(QW, { aim: () => this.holdTarget(0) }));
      }
      (t.released[oX.B] && this.releaseBlinkHold(`pad`),
        n(`X`) &&
          XG(
            this.nodeHere()
              ? YX.road
              : this.room?.kind === `shop` && this.room.trade
                ? YX.market
                : YX.hearth,
          ),
        n(`R3`) &&
          !r?.locked &&
          !r?.chatting &&
          !r?.dialogue &&
          !this.cine &&
          this.mageMenuNear(`pad`),
        n(`Y`) &&
          (cZ(aZ().page + 1), this.padHeld.clear(), q.sfx(`click`, 0.5)),
        n(`UP`) && !_1(`.dh-draft`) && !_1(`.party-cards`) && XG(YX.journal),
        n(`DOWN`) && XG(YX.satchel),
        n(`LEFT`) && XG(YX.spellbook),
        n(`RIGHT`) && XG(YX.homestead));
      let o = Math.min(aZ().page, AX - 1);
      for (let e of kX) {
        let n = oX[e],
          r = VX(o, e);
        r !== null &&
          (t.pressed[n] && this.padHeld.add(r),
          t.released[n] && this.padHeld.delete(r));
      }
    }
    aimMouseAt(e) {
      let t = this.sceneOf(e);
      ((this.mouse.sx = t.sx), (this.mouse.sy = t.sy), (this.aimSet = !0));
    }
    facing() {
      return v8[this.me.dir] ?? v8[_8.down];
    }
    stickDir() {
      if (aZ().device === `pad`)
        return (
          x1(this.padLook.x, this.padLook.y) ??
          x1(this.padMove.x, this.padMove.y) ??
          this.facing()
        );
      let e = Math.hypot(this.stick.x, this.stick.y);
      return e > 0.22
        ? { x: this.stick.x / e, y: this.stick.y / e }
        : this.facing();
    }
    loadout() {
      let e = this.meDoc;
      return sd(this.school, e?.spells, e?.loadout);
    }
    slotSpell(e) {
      let t = e < 8 ? this.loadout()[e] : ``;
      return t ? Se(t) : void 0;
    }
    slotKey(e) {
      return e === QW ? `blink` : (this.loadout()[e] ?? ``);
    }
    blink() {
      return pd(le, this.mods);
    }
    castGate() {
      return (
        !!this.meDoc &&
        !this.meDoc.dead &&
        !this.cine &&
        !this.story?.locked &&
        !this.story?.chatting &&
        !this.room &&
        !this.transit
      );
    }
    castSlot(e, t = {}) {
      if (!this.castGate()) return;
      let n = this.slotKey(e);
      if (!n || this.real < (this.cdUntil[n] ?? 0)) return;
      if ((q.init(), e === QW))
        return ce(this.school)
          ? this.castBlink(t.held ?? 0, t.aim)
          : this.castDash(t.aim);
      let r = t.aim ? t.aim() : this.mouseWorld(),
        i = this.me.x,
        a = this.me.y - 0.6,
        o = r.x - i,
        s = r.y - a;
      this.faceToward(o, s);
      let c = this.slotSpell(e);
      if (!c) return;
      if (!ld(this.arms(), c)) return this.noWeapon(c);
      if (c.kind === `guard`) {
        ((this.guardUntil = this.real + 0.15),
          (this.guardFace = Math.atan2(r.y - this.me.y, r.x - this.me.x)));
        return;
      }
      if (this.guarding()) return;
      let l = dd(ud(c, this.school), this.mods);
      if (this.mana < l.mana) return this.noMana();
      if ((l.stamina ?? 0) > this.stamina.v) return this.noBreath();
      let u = r.x,
        d = r.y,
        f = [];
      if (l.kind === `strike` || l.kind === `rift`) {
        let e = Math.hypot(u - this.me.x, d - this.me.y);
        e > l.range &&
          ((u = this.me.x + ((u - this.me.x) / e) * l.range),
          (d = this.me.y + ((d - this.me.y) / e) * l.range));
      }
      if (l.kind === `chain`) {
        let e = this.chainTargets(l, r);
        if (e.length === 0) return this.noTarget();
        ((f = e.map((e) => ({ x: e.rx, y: e.ry - 0.4 }))),
          (u = f[0].x),
          (d = f[0].y));
        for (let t of e) this.applyHit(t, l);
      }
      if (l.kind === `drain`) {
        let e = this.drainTarget(l, r);
        if (!e) return this.noTarget();
        ((u = e.rx), (d = e.ry - 0.4), this.applyHit(e, l));
      }
      (l.kind !== `veil` && this.unveil(`broke`),
        (this.mana -= l.mana),
        l.stamina && ge(this.stamina, l.stamina, this.real),
        (this.lastSpendAt = this.real),
        this.closeMageMenu(),
        (this.cdUntil[l.id] = this.real + l.cd),
        (this.me.castT = 0.3),
        (this.me.castFx = {
          kind: l.kind,
          dx: u - this.me.x,
          dy: d - this.me.y,
          t0: this.real,
          delay: l.delay ?? 0,
          spell: l.id,
          n: (this.me.castFx?.n ?? 0) + 1,
        }));
      let p =
        l.needs === `bow` && l.kind === `bolt` && !this.solo
          ? Fa(this.quiver)
          : void 0;
      (p &&
        (this.quiver = {
          ...this.quiver,
          [p]: Math.max(0, (this.quiver[p] ?? 0) - 1),
        }),
        this.spellVisual(
          l,
          xe[l.id] ?? this.school,
          i,
          a,
          u,
          d,
          f,
          !0,
          this.mods.extra[l.id] ?? 0,
          p,
        ),
        this.api.cast(l.id, i, a, u, d, f.length ? f : void 0),
        this.story?.onCast(l));
    }
    castBlink(e, t) {
      if (this.mana < le.mana) return this.noMana();
      let { target: n, plan: r } = this.blinkPlan(e, t);
      if ((this.faceToward(n.x - this.me.x, n.y - (this.me.y - 0.6)), !r))
        return;
      let i = r.x,
        a = r.y;
      ((this.mana -= le.mana),
        (this.lastSpendAt = this.real),
        this.closeMageMenu(),
        (this.cdUntil.blink = this.real + r.cd),
        (this.blinkSpan = r.cd),
        (this.blinkGraceUntil = this.real + Dp),
        this.story?.onBlink(),
        this.blinkVisual(this.school, this.me.x, this.me.y, i, a),
        this.solo?.onBlink(i, a),
        this.solo ||
          this.enemy.onBlink(
            this.me.x,
            this.me.y,
            i,
            a,
            this.school === `void`,
          ),
        this.solo ||
          this.api.cast(`blink`, this.me.x, this.me.y, i, a, void 0, r.spent),
        (this.me.blinkFx = {
          dx: i - this.me.x,
          dy: a - this.me.y,
          t0: this.real,
        }),
        (this.me.x = i),
        (this.me.y = a),
        this.solo ||
          (this.api.move(i, a, this.me.dir, this.me.moving),
          (this.lastSent = {
            x: i,
            y: a,
            moving: this.me.moving,
            dir: this.me.dir,
            t: this.real,
          })));
    }
    castDash(e) {
      if (this.stamina.v < se.stamina) return this.noBreath();
      let t = { x: this.me.x, y: this.me.y - 0.6 },
        n = e
          ? e()
          : xq(
              t,
              this.aimSet ? this.mouseWorld() : null,
              bq(this.moveIntent, this.lastWalk, this.real),
              this.facing(),
              se.range,
            );
      this.faceToward(n.x - t.x, n.y - t.y);
      let r = { x: this.me.x, y: this.me.y },
        i = this.dungeon,
        a = this.solo,
        o = i
          ? (e, t, n, r) =>
              i.dashPasses(n, r) && (!!a || this.enemy.canPass(e, t, n, r))
          : (e, t, n, r) =>
              this.canStand(n, r) && this.enemy.canPass(e, t, n, r),
        s = nf(r, { x: n.x, y: n.y + 0.6 }, se.range, o, (e, t) =>
          this.canStand(e, t),
        );
      s &&
        (ge(this.stamina, se.stamina, this.real),
        (this.lastSpendAt = this.real),
        this.closeMageMenu(),
        (this.cdUntil.blink = this.real + se.cd),
        (this.blinkSpan = se.cd),
        (this.blinkGraceUntil = this.real + se.grace),
        this.story?.onBlink(),
        this.dashVisual(this.school, this.me.x, this.me.y, s.x, s.y),
        a || this.enemy.onBlink(this.me.x, this.me.y, s.x, s.y, !1),
        a || this.api.cast(`blink`, this.me.x, this.me.y, s.x, s.y, void 0, 0),
        (this.me.x = s.x),
        (this.me.y = s.y),
        a ||
          (this.api.move(s.x, s.y, this.me.dir, this.me.moving),
          (this.lastSent = {
            x: s.x,
            y: s.y,
            moving: this.me.moving,
            dir: this.me.dir,
            t: this.real,
          })));
    }
    dashVisual(e, t, n, r, i) {
      let a = S[e]?.colors ?? S.paladin.colors,
        o = Math.max(3, Math.round(Math.hypot(r - t, i - n) * 3));
      for (let e = 0; e <= o; e++) {
        let s = e / o;
        this.particles.burst(
          (t + (r - t) * s) * 16,
          (n + (i - n) * s) * 16,
          2,
          [`#c8b89a`, a.spark],
          18,
        );
      }
      this.particles.burst(t * 16, n * 16, 8, [`#a89878`, `#d8ccb0`], 30);
      let s = Math.hypot(this.me.x - t, this.me.y - n);
      q.sfx(`hit`, y8(1 - s / 18, 0, 0.4));
    }
    blinkPlan(e, t) {
      let n = { x: this.me.x, y: this.me.y - 0.6 },
        r = pd(le, this.mods, e / 255).range,
        i = t
          ? t()
          : xq(
              n,
              this.aimSet ? this.mouseWorld() : null,
              bq(this.moveIntent, this.lastWalk, this.real),
              this.facing(),
              r,
            );
      return {
        target: i,
        plan: Xd({ x: this.me.x, y: this.me.y }, n, i, e, this.mods, (e, t) =>
          this.canStand(e, t),
        ),
      };
    }
    holdsBlink() {
      return _l().holdBlink && !this.solo && ce(this.school);
    }
    blinkCharging() {
      return !!this.blinkHold && this.real >= (this.cdUntil.blink ?? 0);
    }
    beginBlinkHold(e, t = ``, n = ``) {
      !this.blinkHold &&
        this.holdsBlink() &&
        this.castGate() &&
        (q.init(),
        (this.blinkHold = { by: e, code: t, key: n, since: this.real }));
    }
    releaseBlinkHold(e) {
      let t = this.blinkHold;
      if (!t || t.by !== e) return;
      let n = this.heldNow();
      (this.cancelBlinkHold(),
        this.castSlot(
          QW,
          e === `key`
            ? { held: n }
            : { held: n, aim: () => this.holdTarget(n) },
        ));
    }
    cancelBlinkHold(e) {
      (e && this.blinkHold?.by !== e) ||
        ((this.blinkHold = null), (this.blinkView = null));
    }
    heldNow() {
      let e = this.blinkHold;
      return e
        ? Wd(
            e.since,
            this.cdUntil.blink ?? 0,
            this.real,
            e.by === `key` ? 0 : Ud,
          )
        : 0;
    }
    holdTarget(e) {
      let t = this.stickDir(),
        n = pd(le, this.mods, e / 255).range;
      return { x: this.me.x + t.x * n, y: this.me.y - 0.6 + t.y * n };
    }
    previewBlink() {
      let e = this.heldNow(),
        { plan: t } = this.blinkPlan(
          e,
          this.blinkHold?.by === `key` ? void 0 : () => this.holdTarget(e),
        );
      return { held: e, plan: t, poor: this.mana < le.mana };
    }
    drawBlinkHold(e, t, n) {
      let r = this.blinkView;
      if (!r) return;
      let i = r.poor ? `#8a8a9a` : S[this.school].colors.glow,
        a = Math.round(this.me.x * 16 - t),
        o = Math.round(this.me.y * 16 - n),
        s = r.held / 255;
      (e.save(),
        (e.strokeStyle = i),
        (e.fillStyle = i),
        (e.lineWidth = 1),
        (e.globalAlpha = 0.3),
        e.beginPath(),
        e.ellipse(a, o, 10, 4, 0, 0, Math.PI * 2),
        e.stroke(),
        s > 0 &&
          ((e.globalAlpha =
            s >= 1 && !y$() ? 0.7 + 0.3 * Math.sin(this.real * 10) : 0.95),
          (e.lineWidth = 2),
          e.beginPath(),
          e.ellipse(
            a,
            o,
            10,
            4,
            0,
            -Math.PI / 2,
            -Math.PI / 2 + Math.PI * 2 * s,
          ),
          e.stroke()));
      let c = r.plan;
      if (c) {
        let r = Math.round(c.x * 16 - t),
          s = Math.round(c.y * 16 - n);
        ((e.lineWidth = 1),
          (e.globalAlpha = 0.55),
          e.setLineDash([2, 3]),
          e.beginPath(),
          e.moveTo(a, o - 8),
          e.lineTo(r, s - 8),
          e.stroke(),
          e.setLineDash([]),
          (e.globalAlpha = 0.35),
          e.beginPath(),
          e.ellipse(r, s, 6, 2.5, 0, 0, Math.PI * 2),
          e.fill(),
          e.fillRect(r - 3, s - 15, 6, 14),
          (e.globalAlpha = 0.9),
          e.beginPath(),
          e.ellipse(r, s, 6, 2.5, 0, 0, Math.PI * 2),
          e.stroke(),
          this.lights.push({ x: r, y: s - 8, r: 14, color: i, a: 0.6 }));
      }
      e.restore();
    }
    faceToward(e, t) {
      Math.abs(e) > Math.abs(t)
        ? (this.me.dir = e > 0 ? _8.right : _8.left)
        : (this.me.dir = t > 0 ? _8.down : _8.up);
    }
    noMana() {
      this.floaters.some((e) => e.text === `Not enough mana` && e.life > 0.6) ||
        this.floater(
          this.me.x * 16,
          this.me.y * 16 - 34,
          `Not enough mana`,
          `#8ab4ff`,
          !1,
        );
    }
    noTarget() {
      this.floaters.some((e) => e.text === `No target` && e.life > 0.6) ||
        this.floater(
          this.me.x * 16,
          this.me.y * 16 - 34,
          `No target`,
          `#cccccc`,
          !1,
        );
    }
    noBreath() {
      this.floaters.some((e) => e.text === `Out of breath` && e.life > 0.6) ||
        this.floater(
          this.me.x * 16,
          this.me.y * 16 - 34,
          `Out of breath`,
          `#ffd166`,
          !1,
        );
    }
    noWeapon(e) {
      let t = this.meDoc?.look,
        n =
          e.needs &&
          [t?.main, t?.off].some((t) => t?.base === e.needs && !!t?.broken)
            ? `Your ${e.needs} is broken: mend it`
            : `You need ${e.needs ? x[e.needs] : `a weapon`}`;
      this.floaters.some((e) => e.text === n && e.life > 0.6) ||
        this.floater(this.me.x * 16, this.me.y * 16 - 34, n, `#cccccc`, !1);
    }
    chainTargets(e, t) {
      let n = [...this.monsters.values()].filter(
        (t) =>
          this.targetable(t) &&
          Math.hypot(t.rx - this.me.x, t.ry - this.me.y) <= e.range,
      );
      if (!n.length) return [];
      n.sort(
        (e, n) =>
          Math.hypot(e.rx - t.x, e.ry - t.y) -
          Math.hypot(n.rx - t.x, n.ry - t.y),
      );
      let r = [n[0]],
        i = [...this.monsters.values()].filter((e) => this.targetable(e));
      for (; r.length < (e.jumps ?? 3);) {
        let e = r[r.length - 1],
          t = null,
          n = 4;
        for (let a of i) {
          if (r.includes(a)) continue;
          let i = Math.hypot(a.rx - e.rx, a.ry - e.ry);
          i < n && ((n = i), (t = a));
        }
        if (!t) break;
        r.push(t);
      }
      return r;
    }
    drainTarget(e, t) {
      let n = null,
        r = 1 / 0;
      for (let i of this.monsters.values()) {
        if (
          !this.targetable(i) ||
          Math.hypot(i.rx - this.me.x, i.ry - this.me.y) > e.range
        )
          continue;
        let a = Math.hypot(i.rx - t.x, i.ry - t.y);
        a < r && ((r = a), (n = i));
      }
      return n;
    }
    monstersInRadius(e, t, n) {
      return [...this.monsters.values()].filter(
        (r) =>
          this.targetable(r) &&
          Math.hypot(r.rx - e, (r.ry - t) * 1.15) <= n + S8(r.doc.kind) - 0.15,
      );
    }
    monstersInSwing(e, t, n, r, i) {
      return this.monstersInRadius(e, t, r).filter((r) =>
        fd(r.rx - e, r.ry - t, n, i, S8(r.doc.kind)),
      );
    }
    applyHit(e, t) {
      ((e.flash = 0.12), (this.combatAt = this.real), q.sfx(`hit`, 0.7));
      let n = e.doc._id,
        r = e.rx * 16,
        i = e.ry * 16 - 20;
      if (e.local && e.immune) {
        this.floater(r, i, `Shielded`, `#b8a6d9`, !1);
        return;
      }
      if (e.local) {
        let n = Math.random() < hd(this.mods),
          a = 0.85 + Math.random() * 0.3,
          o = this.meDoc?.level ?? 1,
          s = Math.max(
            1,
            Math.round(t.dmg * Ve(o) * gd(this.mods, t.id) * a * (n ? 2 : 1)),
          );
        if (this.dungeon) {
          if (((s = this.dungeon.modifyHit(e, t, s)), s <= 0)) return;
          let n = _d(t, this.mods);
          n > 0 && this.api.dungeon.heal(s * n);
        }
        (this.floater(
          r + (Math.random() - 0.5) * 10,
          i,
          n ? `${s}!` : `${s}`,
          n ? `#ffd166` : `#ffffff`,
          n,
        ),
          n && (this.shake = Math.max(this.shake, 2)),
          e.doc.dead ||
            ((e.doc.hp -= s),
            e.doc.hp <= 0 &&
              ((e.doc.hp = 0),
              (e.doc.dead = !0),
              this.monsterDeath(e),
              this.dungeon?.onDeath(e, t))),
          this.story?.onLocalHit(e, t));
        return;
      }
      this.api
        .hitMonster(n, t.id)
        .then((t) => {
          if (
            t &&
            (this.floater(
              r + (Math.random() - 0.5) * 10,
              i,
              t.crit ? `${t.damage}!` : `${t.damage}`,
              t.crit ? `#ffd166` : `#ffffff`,
              t.crit,
            ),
            t.crit && (this.shake = Math.max(this.shake, 3)),
            t.killed)
          ) {
            this.floater(r, i - 12, `+${t.xpGained} XP`, `#c49bff`, !1);
            let n = Fe[e.doc.kind];
            if (n?.boss || n?.named) {
              this.slowUntil = this.real + 1.5;
              let e = n.incursion
                ? `${n.name} is driven back`
                : n.named
                  ? `${n.name} is laid to rest`
                  : `The ${n.name} crumbles`;
              this.banner = {
                title: `VICTORY`,
                subtitle: e,
                t0: this.real,
                dur: 4,
                color: `#ffd166`,
              };
            }
          }
        })
        .catch(() => {});
    }
    spellVisual(e, t, n, r, i, a, o, s, c = 0, l) {
      let u = S[t].colors,
        d = Math.hypot(this.me.x - n, this.me.y - r),
        f = s ? 1 : y8(1 - d / 18, 0, 0.6),
        p = this.mage3d,
        m =
          (ie(e.id) || !!ae(e.id)) && (e.kind === `bolt` || e.kind === `swing`);
      switch (
        (p
          ? p.cast(e, t, n, r, i, a, o, s)
          : m || this.particles.burst(n * 16, r * 16, 8, [u.glow, u.spark], 40),
        e.kind)
      ) {
        case `bolt`: {
          let o = Math.atan2(a - r, i - n),
            u = e.speed ?? 10,
            d = s && (this.mods.pierce[e.id] || e.pierce),
            p = e.needs === `bow`,
            m = (e.bolts ?? 1) + c;
          for (let i = 0; i < m; i++) {
            let a = e.ring
              ? o + (i * 2 * Math.PI) / m
              : o +
                (i === 0 ? 0 : (i % 2 == 1 ? 1 : -1) * Math.ceil(i / 2) * 0.22);
            this.projectiles.push({
              x: n,
              y: r,
              vx: Math.cos(a) * u,
              vy: Math.sin(a) * u,
              traveled: 0,
              range: e.range,
              radius: e.radius ?? 0.5,
              spell: e,
              school: t,
              mine: s,
              pierced: d ? new Set() : void 0,
              arrow: p,
              kind: l,
            });
          }
          q.sfx(
            t === `storm` ? `zap` : `bolt`,
            f * (t === `storm` ? 0.5 : p ? 0.6 : 1),
          );
          break;
        }
        case `ward`:
          (this.domes.push({
            x: n,
            y: r + 0.6,
            r: e.radius ?? 2,
            t0: this.real,
            until: this.real + (e.hold ?? 4),
          }),
            (this.flash = { color: u.spark, a: s ? 0.25 : 0.08 }),
            p ||
              this.particles.ring(
                n * 16,
                (r + 0.6) * 16,
                4,
                36,
                [u.glow, u.spark, u.orb],
                (e.radius ?? 2) * 16 * 2,
                { life: 0.4, drag: 3 },
              ),
            q.sfx(`chime`, f * 0.8));
          break;
        case `guard`:
          break;
        case `veil`:
          (s &&
            ((this.veilUntil = this.real + (e.hold ?? 3)),
            this.floater(
              this.me.x * 16,
              this.me.y * 16 - 40,
              `Veiled`,
              u.glow,
              !1,
            )),
            (s || d <= O.shimmer) &&
              this.particles.burst(
                n * 16,
                (r + 0.6) * 16,
                s ? 18 : 6,
                [u.glow, u.spark, u.robeDark],
                30,
              ),
            q.sfx(`chime`, f * 0.4));
          break;
        case `swing`: {
          let t = Math.atan2(a - (r + 0.6), i - n);
          if (s) {
            for (let i of this.monstersInSwing(
              n,
              r + 0.6,
              t,
              e.radius ?? 1.8,
              e.arc ?? 140,
            ))
              (this.applyHit(i, e),
                e.push &&
                  i.local &&
                  this.dungeon?.knockBack(i, this.me.x, this.me.y, e.push));
            this.shake = Math.max(this.shake, e.push ? 4 : 1.5);
          }
          q.sfx(`hit`, f * 0.45);
          break;
        }
        case `nova`: {
          let t = n * 16,
            i = (r + 0.6) * 16,
            a = (e.radius ?? 3) * 16;
          if (
            (p ||
              (this.rings.push({
                x: t,
                y: i,
                r: 0,
                max: a,
                life: 0,
                dur: 0.45,
                color: u.glow,
              }),
              this.rings.push({
                x: t,
                y: i,
                r: 0,
                max: a * 0.7,
                life: 0,
                dur: 0.35,
                color: u.spark,
              }),
              this.particles.ring(
                t,
                i,
                4,
                48,
                [u.glow, u.spark, u.orb],
                a * 2.2,
                { life: 0.45, drag: 3 },
              )),
            (this.flash = { color: u.glow, a: s ? 0.18 : 0.06 }),
            s)
          ) {
            this.shake = Math.max(this.shake, 4);
            for (let t of this.monstersInRadius(n, r + 0.6, e.radius ?? 3))
              this.applyHit(t, e);
          }
          q.sfx(`boom`, f * 0.6);
          break;
        }
        case `strike`: {
          let n = e.delay ?? 0.6,
            r = e.radius ?? 2;
          (this.telegraphs.push({
            x: i * 16,
            y: a * 16,
            r: r * 16,
            life: n,
            max: n,
            color: u.glow,
          }),
            q.sfx(`cast`, f),
            e.id === `meteor` &&
              this.meteors.push({
                x: i * 16 + 90,
                y: a * 16 - 220,
                tx: i * 16,
                ty: a * 16,
                t: 0,
                dur: n,
                school: t,
              }),
            this.timers.push({
              at: this.time + n,
              fn: () => {
                let n = i * 16,
                  o = a * 16,
                  c = this.mage3d;
                if (
                  (c
                    ? (c.land(e, t, i, a, s),
                      e.id === `thunder` &&
                        ((this.flash = { color: `#ffffff`, a: s ? 0.25 : 0.1 }),
                        q.sfx(`zap`, f)))
                    : e.id === `thunder`
                      ? (this.beams.push({
                          pts: [
                            { x: n + (Math.random() - 0.5) * 30, y: o - 260 },
                            { x: n, y: o },
                          ],
                          life: 0.3,
                          max: 0.3,
                          color: u.glow,
                          core: `#ffffff`,
                          wavy: !0,
                        }),
                        (this.flash = { color: `#ffffff`, a: s ? 0.55 : 0.2 }),
                        q.sfx(`zap`, f))
                      : e.id === `judgement`
                        ? (this.beams.push({
                            pts: [
                              { x: n, y: o - 260 },
                              { x: n, y: o },
                            ],
                            life: 0.4,
                            max: 0.4,
                            color: u.glow,
                            core: `#ffffff`,
                            wavy: !1,
                          }),
                          (this.flash = { color: u.spark, a: s ? 0.4 : 0.15 }))
                        : this.decals.push({
                            x: n,
                            y: o,
                            r: r * 16 * 0.8,
                            life: 6,
                            max: 6,
                            color: `#1a0d08`,
                          }),
                  c ||
                    (this.rings.push({
                      x: n,
                      y: o,
                      r: 0,
                      max: r * 16 * 1.2,
                      life: 0,
                      dur: 0.5,
                      color: u.glow,
                    }),
                    this.particles.burst(
                      n,
                      o,
                      70,
                      [u.glow, u.spark, u.orb, u.robe],
                      r * 16 * 2.5,
                      { life: 0.8, gravity: 0 },
                    ),
                    this.particles.burst(
                      n,
                      o,
                      24,
                      [`#3a3040`, `#5a5060`],
                      r * 16 * 1.5,
                      { glow: !1, life: 1.2, vz: 30, gravity: 60 },
                    )),
                  (this.shake = Math.max(this.shake, s ? 8 : 3)),
                  q.sfx(`boom`, f),
                  s)
                )
                  for (let t of this.monstersInRadius(i, a, r))
                    this.applyHit(t, e);
              },
            }));
          break;
        }
        case `chain`:
          if (!p) {
            let e = [
              { x: n * 16, y: r * 16 },
              ...o.map((e) => ({ x: e.x * 16, y: e.y * 16 })),
            ];
            this.beams.push({
              pts: e,
              life: 0.35,
              max: 0.35,
              color: u.glow,
              core: `#ffffff`,
              wavy: !0,
            });
            for (let t of e.slice(1))
              this.particles.burst(t.x, t.y, 14, [u.spark, `#ffffff`], 60);
          }
          ((this.flash = { color: u.glow, a: s ? 0.12 : 0.05 }),
            q.sfx(`zap`, f));
          break;
        case `drain`:
          p ||
            this.beams.push({
              pts: [
                { x: i * 16, y: a * 16 },
                { x: n * 16, y: r * 16 },
              ],
              life: 0.6,
              max: 0.6,
              color: u.glow,
              core: u.spark,
              wavy: !0,
            });
          for (let e = 0; e < (p ? 0 : 20); e++) {
            let t = Math.random();
            this.particles.spawn({
              x: b8(i, n, t) * 16,
              y: b8(a, r, t) * 16,
              vx: (n - i) * 16 * 1.5,
              vy: (r - a) * 16 * 1.5,
              life: 0.4,
              size: 2,
              color: e % 2 ? u.spark : `#ff5c8a`,
              glow: !0,
              drag: 1,
            });
          }
          q.sfx(`cast`, f);
          break;
        case `rift`: {
          let n = e.ticks ?? 4;
          (this.rifts.push({
            x: i,
            y: a,
            spell: e,
            school: t,
            mine: s,
            ticks: n,
            next: this.time + 0.35,
            end: this.time + n * 0.5 + 0.5,
          }),
            this.telegraphs.push({
              x: i * 16,
              y: a * 16,
              r: (e.radius ?? 2) * 16,
              life: n * 0.5 + 0.5,
              max: n * 0.5 + 0.5,
              color: u.glow,
            }),
            q.sfx(`cast`, f));
          break;
        }
      }
    }
    blinkVisual(e, t, n, r, i) {
      let a = S[e].colors,
        o = this.mage3d;
      if (o) {
        (o.blink(e, t, n, r, i),
          q.sfx(
            `blink`,
            Math.hypot(this.me.x - t, this.me.y - n) < 1 ? 1 : 0.4,
          ));
        return;
      }
      (this.particles.burst(
        t * 16,
        n * 16 - 10,
        26,
        [a.glow, a.spark, `#ffffff`],
        70,
      ),
        this.particles.burst(
          r * 16,
          i * 16 - 10,
          26,
          [a.glow, a.spark, `#ffffff`],
          70,
        ));
      for (let e = 0; e < 16; e++) {
        let o = e / 16;
        this.particles.spawn({
          x: b8(t, r, o) * 16,
          y: b8(n, i, o) * 16 - 10,
          life: 0.35,
          size: 2,
          color: a.glow,
          glow: !0,
        });
      }
      q.sfx(`blink`, Math.hypot(this.me.x - t, this.me.y - n) < 1 ? 1 : 0.4);
    }
    projectileTrail(e, t) {
      if (e.kind) {
        let n = Pa[e.kind];
        (Math.random() < t * 40 &&
          this.particles.spawn({
            x: e.x * 16,
            y: e.y * 16,
            vx: -e.vx * 1.5 + (Math.random() - 0.5) * 16,
            vy: -e.vy * 1.5 + (Math.random() - 0.5) * 16,
            life: 0.25,
            size: 1,
            drag: 4,
            color: Math.random() < 0.5 ? n.color : n.spark,
            glow: !0,
          }),
          this.lights.push({
            x: e.x * 16,
            y: e.y * 16,
            r: 20,
            color: n.color,
            a: 0.6,
          }));
      }
      if (e.arrow) return;
      let n = S[e.school].colors,
        r = e.x * 16,
        i = e.y * 16,
        a = this.mage3d ? 0 : Math.ceil(t * 90);
      for (let t = 0; t < a; t++) {
        let t = e.school === `storm` ? 5 : 2;
        this.particles.spawn({
          x: r + (Math.random() - 0.5) * t,
          y: i + (Math.random() - 0.5) * t,
          vx: -e.vx * 2 + (Math.random() - 0.5) * 20,
          vy: -e.vy * 2 + (Math.random() - 0.5) * 20,
          life: e.school === `void` ? 0.5 : 0.3,
          size: e.school === `pyro` ? 2 : 1,
          drag: 4,
          color: [n.glow, n.spark, n.robe][Math.floor(Math.random() * 3)],
          glow: !0,
        });
      }
      this.lights.push({ x: r, y: i, r: 36, color: n.glow, a: 1 });
    }
    burstAt(e) {
      let t = e.x,
        n = e.y + 0.4,
        r = (e.spell.burst ?? 1.5) * 16,
        i = this.mage3d;
      if (
        (i
          ? i.impact(e.x, e.y, `pyro`, !0)
          : (this.particles.burst(
              t * 16,
              n * 16,
              36,
              [`#ffd166`, `#ff7a1a`, `#b3261e`],
              r * 2.4,
              { life: 0.5 },
            ),
            this.particles.burst(
              t * 16,
              n * 16,
              14,
              [`#3a3040`, `#5a5060`],
              r * 1.4,
              { glow: !1, life: 0.9, vz: 30, gravity: 60 },
            ),
            this.rings.push({
              x: t * 16,
              y: n * 16,
              r: 0,
              max: r,
              life: 0,
              dur: 0.35,
              color: `#ffb238`,
            }),
            this.lights.push({
              x: t * 16,
              y: n * 16,
              r: r * 2,
              color: `#ff7a1a`,
              a: 1,
            })),
        (this.shake = Math.max(this.shake, e.mine ? 3 : 1)),
        q.sfx(`boom`, e.mine ? 0.6 : 0.25),
        e.mine)
      )
        for (let r of this.monstersInRadius(t, n, e.spell.burst ?? 1.5))
          this.applyHit(r, e.spell);
    }
    boltCapstone(e, t) {
      let n = this.mods.caps;
      if (n.pyro && e.spell.id === `fireball`) {
        let n = S.pyro.colors,
          r = this.mage3d;
        r
          ? r.impact(t.rx, t.ry - 0.4, `pyro`, !0)
          : (this.rings.push({
              x: t.rx * 16,
              y: t.ry * 16,
              r: 0,
              max: 25.6,
              life: 0,
              dur: 0.35,
              color: n.glow,
            }),
            this.particles.burst(
              t.rx * 16,
              t.ry * 16 - 6,
              30,
              [n.glow, n.spark, n.orb],
              110,
            ));
        for (let n of this.monstersInRadius(t.rx, t.ry, 1.6))
          n !== t && this.applyHit(n, e.spell);
      }
      if (n.storm && e.spell.id === `spark` && Math.random() < 0.3) {
        let n = [...this.monsters.values()]
          .filter(
            (e) =>
              e !== t &&
              this.targetable(e) &&
              Math.hypot(e.rx - t.rx, e.ry - t.ry) < 4,
          )
          .sort(
            (e, n) =>
              Math.hypot(e.rx - t.rx, e.ry - t.ry) -
              Math.hypot(n.rx - t.rx, n.ry - t.ry),
          )
          .slice(0, 2);
        if (n.length) {
          let r = S.storm.colors,
            i = [
              { x: t.rx * 16, y: (t.ry - 0.4) * 16 },
              ...n.map((e) => ({ x: e.rx * 16, y: (e.ry - 0.4) * 16 })),
            ],
            a = this.mage3d;
          a
            ? a.arcs(`storm`, [
                { x: t.rx, y: t.ry - 0.4 },
                ...n.map((e) => ({ x: e.rx, y: e.ry - 0.4 })),
              ])
            : this.beams.push({
                pts: i,
                life: 0.3,
                max: 0.3,
                color: r.glow,
                core: `#ffffff`,
                wavy: !0,
              });
          for (let t of n) this.applyHit(t, e.spell);
        }
      }
    }
    impact(e, t, n, r, i = !1) {
      if (i)
        return this.particles.burst(
          e * 16,
          t * 16,
          5,
          [`#c9b48a`, `#8a7656`],
          30,
          { glow: !1, life: 0.3 },
        );
      let a = this.mage3d;
      if (a) return a.impact(e, t, n, r);
      let o = S[n].colors;
      (this.particles.burst(
        e * 16,
        t * 16,
        r ? 40 : 16,
        [o.glow, o.spark, o.orb],
        r ? 120 : 70,
      ),
        this.rings.push({
          x: e * 16,
          y: t * 16,
          r: 0,
          max: 10,
          life: 0,
          dur: 0.2,
          color: o.spark,
        }));
    }
    riftParticles(e, t) {
      let n = S[e.school].colors,
        r = (e.spell.radius ?? 2) * 16,
        i = e.x * 16,
        a = e.y * 16;
      if (e.spell.needs === `bow`) {
        if (this.time < e.end - 0.4)
          for (let e = 0; e < Math.ceil(t * 26); e++) {
            let e = Math.random() * Math.PI * 2,
              t = r * Math.sqrt(Math.random()) * 0.95;
            this.fallingArrows.push({
              x: i + Math.cos(e) * t,
              y: a + Math.sin(e) * t * 0.7,
              z: 70 + Math.random() * 30,
              t0: this.real,
            });
          }
        return;
      }
      let o = this.mage3d ? 0 : Math.ceil(t * 70);
      for (let t = 0; t < o; t++) {
        let t = Math.random() * Math.PI * 2,
          o = r * (0.4 + Math.random() * 0.6);
        e.school === `void`
          ? this.particles.spawn({
              x: i + Math.cos(t) * o,
              y: a + Math.sin(t) * o * 0.7,
              vx: -Math.cos(t) * o * 1.6 - Math.sin(t) * 40,
              vy: (-Math.sin(t) * o * 1.6 + Math.cos(t) * 40) * 0.7,
              life: 0.55,
              size: 2,
              color: Math.random() < 0.5 ? n.glow : n.spark,
              glow: !0,
            })
          : this.particles.spawn({
              x: i + Math.cos(t) * o + 20,
              y: a + Math.sin(t) * o * 0.7 - 50,
              vx: -40,
              vy: 100,
              life: 0.5,
              size: Math.random() < 0.3 ? 2 : 1,
              color: Math.random() < 0.5 ? `#ffffff` : n.glow,
              glow: !0,
              shrink: !1,
            });
      }
      this.lights.push({ x: i, y: a, r: r * 1.4, color: n.glow, a: 0.9 });
    }
    struckBy(e, t, n) {
      if ((this.feelStruck(t), this.net)) {
        let t = this.felt.get(e);
        if (
          (this.felt.set(e, { n: (t?.n ?? 0) + 1, at: this.real }),
          this.felt.size > 64)
        )
          for (let [e, t] of this.felt)
            this.real - t.at > 3 && this.felt.delete(e);
        return;
      }
      let r = t.mult >= 1.4;
      this.api
        .struck(e, n)
        .then((e) => {
          e &&
            (this.floater(
              this.me.x * 16,
              this.me.y * 16 - 26,
              `-${e.dmg}`,
              `#ff5c5c`,
              r,
            ),
            e.mana > 0 &&
              ((this.mana = Math.max(0, this.mana - e.mana)),
              this.floater(
                this.me.x * 16,
                this.me.y * 16 - 38,
                `Mana burned`,
                `#8ab4ff`,
                !1,
              )),
            e.slow > 0 && this.chill(e.slow));
        })
        .catch(() => {});
    }
    feelStruck(e) {
      let t = e.mult >= 1.4;
      ((this.shake = Math.max(this.shake, t ? 7 : 3)),
        (this.hurtFlash = Math.max(this.hurtFlash, t ? 0.7 : 0.45)),
        (this.me.flash = 0.15),
        (this.combatAt = this.real),
        q.sfx(`hurt`, t ? 0.9 : 0.6),
        e.form === `swing` || e.form === `lunge`
          ? this.slash(this.me.x * 16, this.me.y * 16 - 8, t)
          : this.particles.burst(
              this.me.x * 16,
              this.me.y * 16 - 8,
              t ? 24 : 12,
              [e.color, `#ffffff`],
              t ? 80 : 50,
              { glow: !0 },
            ));
    }
    chill(e) {
      ((this.chillK = Math.max(
        this.real < this.chillUntil ? this.chillK : 0,
        e,
      )),
        (this.chillUntil = this.real + 1.6));
    }
    zoneStruck(e, t, n, r) {
      let i = t ? op(ap(t), n) : void 0;
      if (!i) {
        ((this.shake = Math.max(this.shake, 3)),
          (this.hurtFlash = Math.max(this.hurtFlash, 0.45)),
          (this.combatAt = this.real),
          q.sfx(`hurt`, 0.6),
          this.floater(
            this.me.x * 16,
            this.me.y * 16 - 26,
            `-${r}`,
            `#ff5c5c`,
            !1,
          ));
        return;
      }
      let a = e ? this.felt.get(e) : void 0,
        o = this.enemy.isTick(e);
      (a && a.n > 0
        ? a.n--
        : o
          ? ((this.hurtFlash = Math.max(this.hurtFlash, 0.25)),
            (this.combatAt = this.real),
            q.sfx(`hurt`, 0.3))
          : (this.feelStruck(i), e && this.enemy.removeShot(e, this.me)),
        o || this.enemy.struck(e, i),
        this.floater(
          this.me.x * 16,
          this.me.y * 16 - 26,
          `-${r}`,
          `#ff5c5c`,
          !o && i.mult >= 1.4,
        ),
        i.mana &&
          ((this.mana = Math.max(0, this.mana - Math.round((r / 0.35) * 1.6))),
          this.floater(
            this.me.x * 16,
            this.me.y * 16 - 38,
            `Mana burned`,
            `#8ab4ff`,
            !1,
          )),
        i.slow && this.chill(i.slow));
    }
    zoneSelf(e) {
      if (
        (e.speed > 0 && (this.zoneSpeed = e.speed / 1e3),
        (this.zoneMaxStamina = e.maxStamina ?? 0),
        this.solo ||
          (this.zoneMaxStamina > 0 &&
            Cse(this.stamina, e.stamina ?? 0, this.zoneMaxStamina, this.real),
          e.maxMana <= 0))
      )
        return;
      this.zoneMaxMana = e.maxMana;
      let t = e.mana - this.mana;
      (Math.abs(t) > 8 &&
        !(t > 0 && this.real - this.lastSpendAt < 1) &&
        (this.mana = e.mana),
        (this.mana = Math.min(this.mana, e.maxMana)));
    }
    zoneCooldowns(e) {
      for (let [t, n] of Object.entries(e))
        n > 0 &&
          (this.cdUntil[t] = Math.max(this.cdUntil[t] ?? 0, this.real + n));
      (e.blink ?? 0) > 0 &&
        (this.blinkSpan = Math.max(
          ce(this.school) ? this.blink().cd : se.cd,
          (this.cdUntil.blink ?? 0) - this.real,
        ));
    }
    arrowHit(e, t) {
      if (!e.kind) return;
      let n = Pa[e.kind],
        r = t.rx,
        i = t.ry - 0.4,
        a = e.mine && t.local,
        o = { ...e.spell, dmg: e.spell.dmg * n.share };
      switch (e.kind) {
        case `fire`:
          this.particles.burst(
            r * 16,
            i * 16,
            14,
            [n.color, n.spark, `#b3261e`],
            50,
          );
          for (let e = 1; e <= (n.ticks ?? 3); e++)
            this.timers.push({
              at: this.time + e * (n.every ?? 1),
              fn: () => {
                t.doc.dead ||
                  (this.particles.burst(
                    t.rx * 16,
                    (t.ry - 0.4) * 16,
                    6,
                    [n.color, n.spark],
                    30,
                  ),
                  a && this.applyHit(t, o));
              },
            });
          break;
        case `shock`: {
          let e = [...this.monsters.values()]
            .filter(
              (e) =>
                e !== t &&
                this.targetable(e) &&
                Math.hypot(e.rx - t.rx, e.ry - t.ry) < (n.range ?? 3),
            )
            .sort(
              (e, n) =>
                Math.hypot(e.rx - t.rx, e.ry - t.ry) -
                Math.hypot(n.rx - t.rx, n.ry - t.ry),
            )
            .slice(0, n.jumps ?? 2);
          for (let s of e) {
            for (let e = 0; e <= 6; e++)
              this.particles.burst(
                (r + ((s.rx - t.rx) * e) / 6) * 16,
                (i + ((s.ry - t.ry) * e) / 6) * 16,
                1,
                [n.color, n.spark],
                10,
              );
            a && s.local && this.applyHit(s, o);
          }
          this.particles.burst(r * 16, i * 16, 10, [n.color, n.spark], 60);
          break;
        }
        case `explosive`: {
          let s = n.radius ?? 1.5;
          if (
            (this.particles.burst(
              r * 16,
              i * 16,
              30,
              [n.color, n.spark, `#5a4a3a`],
              110,
            ),
            this.rings.push({
              x: r * 16,
              y: i * 16,
              r: 0,
              max: s * 16,
              life: 0,
              dur: 0.25,
              color: n.spark,
            }),
            (this.shake = Math.max(this.shake, e.mine ? 3 : 1)),
            a)
          )
            for (let e of this.monstersInRadius(t.rx, t.ry, s))
              e !== t && e.local && this.applyHit(e, o);
          break;
        }
      }
      q.sfx(e.kind === `shock` ? `zap` : `hit`, e.mine ? 0.5 : 0.2);
    }
    zoneAmmo(e, t) {
      this.remoteAmmo.set(e, t);
    }
    veiled() {
      return this.real < this.veilUntil;
    }
    unveil(e) {
      if (!this.veiled()) return;
      this.veilUntil = 0;
      let t = S.scout.colors;
      (this.particles.burst(
        this.me.x * 16,
        this.me.y * 16,
        12,
        [t.glow, t.spark],
        40,
      ),
        e === `torn` &&
          (this.floater(
            this.me.x * 16,
            this.me.y * 16 - 40,
            `The Veil tears!`,
            `#ff9a8a`,
            !0,
          ),
          (this.shake = Math.max(this.shake, 3))));
    }
    zoneUnveiled(e) {
      this.unveil(e);
    }
    zoneBroken(e) {
      this.enemy.cancel(e);
    }
    zoneChan(e, t, n) {
      this.enemy.chan(e, t, n);
      let r = this.monsters.get(e);
      r &&
        n !== `begun` &&
        n === `broken` &&
        Math.hypot(r.rx - this.me.x, r.ry - this.me.y) < 16 &&
        (this.floater(
          r.rx * 16,
          r.ry * 16 - (r.top ?? 30) - 8,
          `BROKEN`,
          `#7ef9ff`,
          !0,
        ),
        q.sfx(`chime`, 0.6));
    }
    zoneHit(e) {
      ((this.combatAt = this.real),
        e && (this.shake = Math.max(this.shake, 3)));
    }
    zoneKill(e) {
      let t = Fe[e];
      if (!t?.boss && !t?.named) return;
      this.slowUntil = this.real + 1.5;
      let n = t.incursion
        ? `${t.name} is driven back`
        : t.named
          ? `${t.name} is laid to rest`
          : `The ${t.name} crumbles`;
      this.banner = {
        title: `VICTORY`,
        subtitle: n,
        t0: this.real,
        dur: 4,
        color: `#ffd166`,
      };
    }
    enemyLand(e) {
      let t = e.monsterId ? this.monsters.get(e.monsterId) : void 0,
        n = Math.hypot(e.aim.x - this.me.x, e.aim.y - this.me.y) < 16;
      if (
        (t &&
          (e.moveTo
            ? e.a.form === `blink`
              ? (this.particles.burst(
                  t.rx * 16,
                  t.ry * 16 - 8,
                  16,
                  [e.a.color, `#ffffff`],
                  50,
                  { glow: !0 },
                ),
                (t.rx = t.fx0 = t.tx = e.moveTo.x),
                (t.ry = t.fy0 = t.ty = e.moveTo.y))
              : ((t.fx0 = t.rx),
                (t.fy0 = t.ry),
                (t.tx = e.moveTo.x),
                (t.ty = e.moveTo.y),
                (t.t0 = this.real),
                (t.glide = 0.16))
            : this.lungeAt(e.monsterId, e.aim.x, e.aim.y)),
        n)
      ) {
        if (e.a.form === `slam` || e.a.form === `rain`) {
          q.sfx(`boom`, e.a.form === `slam` ? 0.35 : 0.25);
          for (let t of e.shapes)
            t.t === `circle` &&
              this.rings.push({
                x: t.x * 16,
                y: t.y * 16,
                r: 0,
                max: t.r * 16,
                life: 0,
                dur: 0.35,
                color: e.a.color,
              });
        } else
          (e.a.form === `bolt` ||
            e.a.form === `spread` ||
            e.a.form === `ring`) &&
            q.sfx(`cast`, 0.25);
      }
    }
    slash(e, t, n) {
      for (let n = 0; n < 3; n++) {
        let r = (n - 1) * 4;
        this.beams.push({
          pts: [
            { x: e - 8 + r, y: t - 8 },
            { x: e + 8 + r, y: t + 8 },
          ],
          life: 0.18,
          max: 0.18,
          color: `#ff3355`,
          core: `#ffffff`,
          wavy: !1,
        });
      }
      this.particles.burst(
        e,
        t,
        n ? 30 : 12,
        [`#ff3355`, `#ffffff`, `#8a1020`],
        n ? 90 : 50,
        { glow: !0 },
      );
    }
    lightPillar(e, t, n) {
      for (let r = 0; r < 90; r++)
        this.particles.spawn({
          x: e + (Math.random() - 0.5) * 16,
          y: t,
          z: Math.random() * 30,
          vz: 60 + Math.random() * 120,
          life: 1.2 + Math.random() * 0.6,
          size: Math.random() < 0.4 ? 2 : 1,
          color: Math.random() < 0.5 ? n : `#ffffff`,
          glow: !0,
          drag: 0.5,
        });
      this.rings.push({
        x: e,
        y: t,
        r: 0,
        max: 40,
        life: 0,
        dur: 0.8,
        color: n,
      });
    }
    lungeAt(e, t, n) {
      let r = e ? this.monsters.get(e) : void 0;
      if (!r) return;
      let i = Math.hypot(t - r.rx, n - r.ry) || 1;
      ((r.lungeDir = { x: (t - r.rx) / i, y: (n - r.ry) / i }),
        (r.lunge = 0.25));
    }
    monsterDeath(e) {
      let t = cie(e.doc.kind);
      ((e.dying = t || 0.5), (e.dieFor = t || void 0));
      let n = Yse[e.doc.kind] ?? Die(e.doc.kind),
        r = Fe[e.doc.kind],
        i = !!r?.boss,
        a = e.rx * 16,
        o = e.ry * 16 - 8;
      this.particles.burst(a, o, i ? 120 : 36, n, i ? 160 : 80, {
        glow: !0,
        life: 0.9,
      });
      let s =
        r?.night ||
        e.doc.kind.startsWith(`hollow`) ||
        e.doc.kind === `blightslime` ||
        e.doc.kind === `blackfireimp`
          ? `#ff9a9a`
          : `#e6d8ff`;
      for (let e = 0; e < (i ? 24 : 10); e++)
        this.particles.spawn({
          x: a + (Math.random() - 0.5) * 10,
          y: o,
          vz: 30 + Math.random() * 30,
          z: 4,
          life: 1.4,
          size: 1,
          color: s,
          glow: !0,
          drag: 1,
        });
      i && (this.shake = Math.max(this.shake, r?.incursion ? 14 : 10));
    }
    monsterLeave(e) {
      let t = Fe[e.doc.kind],
        n = e.rx * 16,
        r = e.ry * 16;
      if (t?.incursion) {
        e.dying = 0.5;
        let t = pg[e.doc.kind] ?? `#b01a2a`;
        for (let e = 0; e < 60; e++) {
          let e = Math.random() * Math.PI * 2,
            i = 20 + Math.random() * 20;
          this.particles.spawn({
            x: n + Math.cos(e) * i,
            y: r - 16 + Math.sin(e) * i * 0.6,
            vx: -Math.cos(e) * i * 2,
            vy: -Math.sin(e) * i * 1.2,
            life: 0.5,
            size: Math.random() < 0.3 ? 2 : 1,
            color: Math.random() < 0.5 ? t : `#12050a`,
            glow: !0,
          });
        }
        return;
      }
      e.sink = u8;
    }
    floater(e, t, n, r, i) {
      this.floaters.push({
        x: e,
        y: t,
        text: n,
        color: r,
        life: i ? 1.3 : 1,
        max: i ? 1.3 : 1,
        big: i,
        words: qq(n),
      });
    }
    darkness() {
      if (this.story?.night != null) return this.story.night;
      let e = We(Date.now()),
        t = 0.72 * y8((0.25 - Math.cos((e - 0.5) * Math.PI * 2)) / 0.9, 0, 1);
      return (
        this.region === `woods` && (t += 0.18),
        this.region === `ash` && (t += 0.08),
        y8(t, 0, 0.82)
      );
    }
    orbPos(e, t, n, r, i) {
      let a = n === 2 ? 12 : n === 1 ? 2 : n === 3 ? 3 : 13,
        o = e * 16 - 10 + 2 + a,
        s = t * 16 - 26 + 2 + 7 + (r ? -3 : 0) + i - 3;
      return { x: o + 0.5, y: s };
    }
    render() {
      let e = this.sctx,
        t = this.scale * this.zoom,
        n = Math.ceil(this.canvas.width / t),
        r = Math.ceil(this.canvas.height / t),
        i = this.dens;
      if (
        ((this.scene.width < n * i || this.scene.height < r * i) &&
          ((this.scene.width = Math.max(n * i, this.scene.width)),
          (this.scene.height = Math.max(r * i, this.scene.height)),
          (this.sctx.imageSmoothingEnabled = !1)),
        (this.lightC.width < n || this.lightC.height < r) &&
          ((this.lightC.width = Math.max(n, this.lightC.width)),
          (this.lightC.height = Math.max(r, this.lightC.height))),
        (this.depthC.width !== this.scene.width ||
          this.depthC.height !== this.scene.height) &&
          ((this.depthC.width = this.stampC.width = this.scene.width),
          (this.depthC.height = this.stampC.height = this.scene.height),
          (this.stampCtx.imageSmoothingEnabled = !1)),
        this.sctx.setTransform(i, 0, 0, i, 0, 0),
        this.dctx.setTransform(i, 0, 0, i, 0, 0),
        this.stampCtx.setTransform(i, 0, 0, i, 0, 0),
        (this.lights.length = Math.min(this.lights.length, 400)),
        !this.meDoc)
      ) {
        ((this.display.fillStyle = `#07040f`),
          this.display.fillRect(0, 0, this.canvas.width, this.canvas.height));
        return;
      }
      let a = Xc(this.shake, _l().shake),
        o = (Math.random() - 0.5) * a,
        s = (Math.random() - 0.5) * a,
        c = this.snap(this.cam.x - n / 2 + o),
        l = this.snap(this.cam.y - r / 2 + s),
        u = this.hdNow(),
        d = y6().cal;
      if ((setRenderScaleMode(u ? (d ? `hdcal` : `hd2d`) : `classic`), u)) {
        let e = d ? this.snap(this.cam.x - n / 2) : this.cam.x - n / 2,
          i = d ? this.snap(this.cam.y - r / 2) : this.cam.y - r / 2;
        if (this.renderHd(u, t, n, r, d ? c : e + o, d ? l : i + s, e, i))
          return;
        setRenderScaleMode(`classic`);
      }
      this.hdLast &&
        ((this.hdLast = !1),
        this.fx3d?.layer.invalidateSize(),
        this.fx3d?.layer.capQuality(null),
        this.fx3d?.layer.obliqueView());
      let f =
        this.fx3d && this.fx3d.layer.on && this.fx3d.layer.active(this.real)
          ? this.fx3d
          : null;
      (this.fx3d?.layer.tick(this.lastRdt, !!f),
        (this.stamping = !!f && f.layer.settings.occlusion),
        this.stamping &&
          this.dctx.clearRect(0, 0, this.depthC.width, this.depthC.height));
      let p = this.room,
        m = this.dungeon,
        h = this.darkness();
      ((e.fillStyle = p || m ? `#07040f` : `#0b0714`),
        e.fillRect(0, 0, n, r),
        m
          ? m.drawGround(e, c, l, n, r)
          : p ||
            (this.ground.drawWater(e, c, l, n, r, this.time),
            this.ground.draw(e, c, l, n, r)),
        !m &&
          ++this.warmTick % 3 == 0 &&
          this.ground.warm(this.cam.x, this.cam.y));
      let g = Math.max(0, Math.floor(c / 16) - 2),
        _ = Math.max(0, Math.floor(l / 16) - 2),
        v = Math.min(Or - 1, Math.ceil((c + n) / 16) + 2),
        y = Math.min(kr - 1, Math.ceil((l + r) / 16) + 4),
        b = Vr(),
        x = zN(),
        S = sM(`tile/lava`)?.frames,
        C = S ? S[Math.floor(this.time * Ese) % S.length] : null;
      for (let t = _; t <= (m ? -1 : y); t++)
        for (let n = g; n <= v; n++) {
          let r = b.tiles[t * Or + n],
            i = n * 16 - c,
            a = t * 16 - l;
          if ((r === A.Water || r === A.DeepWater) && !x) {
            let o = Je(n, t, 8) * 6.28,
              s = Math.sin(this.time * 1.6 + o);
            if (s > 0.2) {
              e.fillStyle =
                r === A.Water
                  ? `rgba(190,230,255,0.55)`
                  : `rgba(150,190,240,0.4)`;
              let o = Math.floor(Je(n, t, 9) * 10),
                c = Math.floor(Je(n, t, 10) * 12) + 2;
              e.fillRect(i + o + Math.round(s * 2), a + c, 4, 1);
            }
          } else if (r === A.Lava) {
            let r = (Math.sin(this.time * 2 + Je(n, t, 8) * 6.28) + 1) / 2;
            if (C) {
              let r = (e, t) =>
                  e < 0 ||
                  t < 0 ||
                  e >= Or ||
                  t >= kr ||
                  b.tiles[t * Or + e] === A.Lava,
                o = r(n - 1, t) ? 0 : 2,
                s = r(n + 1, t) ? 0 : 2,
                c = r(n, t - 1) ? 0 : 2,
                l = r(n, t + 1) ? 0 : 2,
                u = C.width / 16;
              e.drawImage(
                C,
                o * u,
                c * u,
                (16 - o - s) * u,
                (16 - c - l) * u,
                i + o,
                a + c,
                16 - o - s,
                16 - c - l,
              );
            } else
              ((e.fillStyle = `rgba(255,${200 + Math.floor(r * 55)},90,${0.25 + r * 0.35})`),
                e.fillRect(
                  i + Math.floor(Je(n, t, 9) * 10),
                  a + Math.floor(Je(n, t, 10) * 10),
                  3 + Math.floor(r * 3),
                  2,
                ));
            ((n + t) % 2 == 0 &&
              this.lights.push({
                x: i + 8,
                y: a + 8,
                r: 26,
                color: `#ff6a1a`,
                a: 0.55 + r * 0.3,
              }),
              Math.random() < 0.004 &&
                this.particles.spawn({
                  x: n * 16 + Math.random() * 16,
                  y: t * 16 + Math.random() * 16,
                  vz: 30,
                  gravity: 40,
                  life: 0.8,
                  size: 1,
                  color: `#ffd166`,
                  glow: !0,
                }));
          } else
            r === A.Ice &&
              (n * 7 + t * 3 + Math.floor(this.time * 0.8)) % 23 == 0 &&
              ((e.fillStyle = `rgba(255,255,255,0.8)`),
              e.fillRect(i + 7, a + 7, 1, 1));
        }
      this.drawGroundOverlays(e, c, l, n, r);
      let w = [];
      (this.collectDrawables(w, e, c, l, n, r, !1, h),
        w.sort((e, t) => e.y - t.y));
      for (let e of w) e.draw();
      (this.blinkView && !p && !m && this.drawBlinkHold(e, c, l),
        p?.kind === `homestead` &&
          this.home.build &&
          this.home.drawBuild(e, c, l, this.mouseWorld(), this.real, this.me),
        p?.kind === `house` && this.home.tool
          ? this.home.drawHouseBuild(e, c, l, this.mouseWorld(), this.real)
          : (this.home.cursorNote = null),
        this.drawLoose(e, c, l),
        this.particles.draw(e, c, l, !1),
        this.devNoLight && (this.lights.length = 0));
      let T = this.devNoLight
          ? 0
          : m
            ? m.darkness()
            : p && p.kind !== `homestead`
              ? 0.34 + h * 0.3
              : h,
        E = this.lctx;
      ((E.globalCompositeOperation = `source-over`),
        E.clearRect(0, 0, n, r),
        (E.fillStyle = `rgba(10,6,34,${T})`),
        E.fillRect(0, 0, n, r),
        (E.globalCompositeOperation = `destination-out`));
      for (let e of this.lights) {
        let t = Bp(`#ffffff`, e.r);
        ((E.globalAlpha = y8(e.a, 0, 1)), E.drawImage(t, e.x - e.r, e.y - e.r));
      }
      ((E.globalAlpha = 1),
        e.drawImage(this.lightC, 0, 0),
        (e.globalCompositeOperation = `lighter`));
      let D = 0.25 + T * 0.5;
      for (let t of this.lights) {
        let n = Bp(t.color, t.r * 0.8);
        ((e.globalAlpha = y8(t.a * D, 0, 1)),
          e.drawImage(n, t.x - n.width / 2, t.y - n.height / 2));
      }
      if (
        ((e.globalAlpha = 1),
        this.drawUprightAdditive(e, c, l, n, r, !0),
        this.drawRings(e, c, l),
        (e.globalCompositeOperation = `source-over`),
        (this.lights.length = 0),
        m && m.drawAfterLight(e, c, l, n, r),
        !p && !m && (this.region === `woods` || this.region === `frost`))
      ) {
        let t = this.region === `woods` ? `#cfe8dc` : `#e8f4ff`;
        for (let i = 0; i < 7; i++) {
          let a = ((Je(i, 0, 3) * 2e3 + this.time * (6 + i)) % (n + 240)) - 120,
            o = (Je(i, 1, 3) * r * 1.2 - l * 0.2) % r,
            s = Bp(t, 90);
          ((e.globalAlpha = 0.08),
            e.drawImage(s, a - 90, o - 90 + r * 0.1, 260, 140));
        }
        e.globalAlpha = 1;
      }
      ((e.globalCompositeOperation = `soft-light`),
        (e.globalAlpha = m ? 0 : 0.28),
        (e.fillStyle = p
          ? p.kind === `homestead`
            ? `#e8f0a0`
            : `#ffcf8a`
          : Rr[this.region].tint),
        e.fillRect(0, 0, n, r),
        (e.globalAlpha = 1),
        (e.globalCompositeOperation = `source-over`),
        this.drawScreenFx(e, n, r, new ClassicCamera(c, l)));
      let O = this.display;
      O.imageSmoothingEnabled = !1;
      let k = this.meDoc.dead
        ? y8((this.real - this.deadSince) / 1.5, 0, 1)
        : 0;
      if (
        (k > 0 && (O.filter = `grayscale(${k}) brightness(${1 - k * 0.35})`), f)
      ) {
        (f.layer.resize(this.canvas.width, this.canvas.height, t, i),
          f.layer.frame(c, l, this.real));
        let e = f.layer.outScale;
        O.drawImage(
          f.layer.canvas,
          0,
          0,
          f.layer.canvas.width * e,
          f.layer.canvas.height * e,
        );
      } else O.drawImage(this.scene, 0, 0, n * i, r * i, 0, 0, n * t, r * t);
      O.filter = `none`;
      let ee = new ClassicCamera(c, l);
      (this.drawOverlayText(ee, t),
        this.story?.drawCard(
          O,
          this.canvas.width,
          this.canvas.height,
          this.scale,
        ),
        this.drawCinematic(),
        this.story?.drawText(
          O,
          this.canvas.width,
          this.canvas.height,
          this.scale,
          Math.round(this.canvas.height * KJ.bars * this.bars),
          ee,
          t,
        ));
    }
    uprightsHd(e) {
      let t = [];
      if (this.room) return t;
      if (this.dungeon)
        return (
          this.dungeon.uprightsHd(t, e.gx0, e.gy0, e.fw, e.fh),
          this.dungeon.boss?.uprightsHd(t),
          t
        );
      this.story?.columnsHd(t);
      let { gx0: n, gy0: r, fw: i, fh: a } = e,
        o = Math.floor(this.time * 10);
      for (let e of Ll) {
        let s = this.altarState(e);
        if (
          (s !== `rite` && s !== `reclaim`) ||
          !this.altarInView(e, n, r, i, a, 40)
        )
          continue;
        let c = this.shardAt(e, o),
          l = zz(o, Math.max(360, Math.round(a)), s === `reclaim`),
          u = c.footY - c.top;
        t.push({
          img: l,
          x0: Math.round(c.x - 8),
          y: c.footY,
          w: l.width,
          z0: u,
          z1: u + l.height,
          a: 1,
          add: !0,
        });
      }
      for (let e of this.roadFx) {
        let n = Math.min(7, Math.floor(((this.real - e.t0) / 1.2) * 8)),
          r = Math.round(e.x * 16),
          i = e.y * 16;
        if (e.kind === `depart`) {
          if (e.sprite) {
            let a = Uz(e.sprite, n / 7, n);
            t.push({
              img: a,
              x0: r - 10,
              y: i,
              w: 20,
              z0: -2,
              z1: 26,
              a: 1,
              add: !1,
            });
          }
          let a = Vz(n);
          t.push({
            img: a,
            x0: r - 12,
            y: i,
            w: a.width,
            z0: 70 - a.height,
            z1: 70,
            a: 1,
            add: !0,
          });
        } else {
          let e = Hz(n);
          t.push({
            img: e,
            x0: r - 24,
            y: i,
            w: e.width,
            z0: 70 - e.height,
            z1: 70,
            a: 1,
            add: !0,
          });
        }
      }
      return t;
    }
    linesHd(e) {
      let t = [];
      return (e.boss?.linesHd(t), t);
    }
    hdNow() {
      let e = this.hd;
      return !e || !e.ok || !e.wantNow()
        ? null
        : this.dungeon
          ? e.supports(`dungeon`)
            ? e
            : null
          : !this.room || e.supports(g8(this.room))
            ? e
            : null;
    }
    houseArtOf(e) {
      let t = this.home.house(),
        n = O6(),
        r = this.houseArtLast;
      if (r && r.room === e && r.house === t && r.look === n) return r.art;
      let i = dse(e, t);
      return ((this.houseArtLast = { room: e, house: t, look: n, art: i }), i);
    }
    hdReach(e) {
      let t = this.hd;
      return t && t.ok && t.wantNow() && t.supports(g8(e)) ? t.reach() : null;
    }
    get hdActive() {
      return !!this.hdNow();
    }
    renderHd(e, t, n, r, i, a, o, s) {
      let c = this.dungeon ? `dungeon` : this.room ? g8(this.room) : null;
      try {
        return this.drawHd(e, t, n, r, i, a, o, s);
      } catch (t) {
        return (
          c
            ? e.unsupport(c, `the engine's ${c} frame threw`, t)
            : e.fail(`the engine's frame threw`, t),
          (this.hudToOverlay = !1),
          (this.lights.length = 0),
          !1
        );
      }
    }
    drawHd(e, t, n, r, i, a, o, s) {
      let c = this.sctx,
        l = this.dungeon,
        u;
      if (l) {
        let t = cy[l.f.theme].grade;
        u = {
          kind: `dungeon`,
          key: e.dungeonKit(l.f).key,
          look: {
            dark: this.devNoLight ? 0 : l.darkness(),
            sun: !1,
            bg: 459791,
            tint: null,
            tintA: 0,
            night: 0,
            grade: { tint: t.tint, alpha: t.alpha },
          },
          floor: l.f,
          ground: l.hdGround(),
          ready: l.hdReady(),
          gp: l.groundPhase(),
          phase: l.phase(),
        };
      } else if (this.room && g8(this.room) === `room`) {
        let e = this.room,
          t = this.darkness();
        u = {
          kind: `room`,
          key: `room:${e.id}`,
          look: {
            dark: this.devNoLight ? 0 : 0.34 + t * 0.3,
            sun: !1,
            bg: 459791,
            tint: `#ffcf8a`,
            tintA: Fse,
            night: 0,
          },
          room: e,
          art: UL(e, { hd: !0 }),
          daylight: 1 - y8(t / 0.82, 0, 1),
        };
      } else if (this.room?.kind === `homestead`) {
        let e = this.room,
          t = dF(e, { hd: !0 }),
          n = this.home.statics();
        u = {
          kind: `homestead`,
          key: Yoe(t, n.key, yA(), Gse),
          place: `homestead:${this.home.here?.owner ?? ``}`,
          look: Zoe(this.darkness(), this.devNoLight),
          room: e,
          art: t,
          skirt: t.skirt,
          statics: n.items,
        };
      } else if (this.room?.kind === `house`) {
        let e = this.room,
          t = this.home.house(),
          n = this.houseArtOf(e).base,
          r = this.home.tool != null,
          i = (r ? null : this.home.houseBlocks())?.list ?? [];
        u = {
          kind: `house`,
          key: Xoe(n, t, r, i),
          place: `house:${this.home.here?.owner ?? ``}`,
          look: Qoe(this.darkness(), this.devNoLight),
          room: e,
          base: n,
          house: t,
          flat: r,
          blocks: i,
        };
      }
      if (u && !e.spaceReady(u))
        return (
          e.ok &&
            e.supports(u.kind) &&
            this.hdHold++ < p8 &&
            (this.doorFade = Math.max(this.doorFade, 1)),
          !1
        );
      let d = e.footprint(i, a, n, r),
        { gx0: f, gy0: p, fw: m, fh: h } = d,
        g = this.darkness(),
        _ = e.overlay.begin(d);
      u?.kind === `house` &&
        (this.hdHouse = u.flat
          ? { skip: Kse, ground: _.ground }
          : { skip: this.home.houseBlocks().ids, ground: null });
      let v = l ? { ...e.dungeonKit(l.f), flat: _.ground, lights: 0 } : null;
      if (l) {
        for (let e of this.lights) ((e.x += l.camX - f), (e.y += l.camY - p));
        l.drawGround(_.ground, f, p, m, h, !1, _.glow);
      }
      (this.room?.kind === `homestead` && this.home.drawGround(_.ground, f, p),
        this.drawGroundOverlays(_.ground, f, p, m, h),
        this.drawRings(_.glow, f, p));
      let y = [];
      ((this.hpBars.length = 0), (this.hudToOverlay = !0));
      try {
        this.collectDrawables(y, e.stage.ctx, f, p, m, h, !0, g, v ?? void 0);
        let t = this.room,
          n = { ds: y, ctx: e.stage.ctx };
        if (
          (t?.kind === `homestead` &&
            this.home.build &&
            this.home.drawBuild(
              _.glow,
              f,
              p,
              this.mouseWorld(),
              this.real,
              this.me,
              _.ground,
              n,
            ),
          t?.kind === `house` && this.home.tool)
        ) {
          let e = [];
          this.home.drawHouseBuild(
            _.glow,
            f,
            p,
            this.mouseWorld(),
            this.real,
            _.ground,
            { ds: e, ctx: _.ground },
          );
          for (let t of e) t.draw();
        } else this.home.cursorNote = null;
        (l &&
          (l.collectLobs(y, e.stage.ctx, f, p),
          l.boss?.collectHd(y, e.stage.ctx, f, p)),
          y.sort((e, t) => e.y - t.y),
          e.stage.run(y, d));
      } finally {
        ((this.hudToOverlay = !1), (this.hdHouse = null));
      }
      (this.drawLoose(_.loose, f, p),
        this.blinkView && !this.room && !l && this.drawBlinkHold(_.loose, f, p),
        this.drawUprightAdditive(_.looseAdd, f, p, m, h, !1, !0));
      let b;
      (l &&
        v &&
        ((b = []),
        l.drawAfterLightHd(_, b, f, p, m, h),
        l.ambientHd(
          b,
          { x: f, y: p, w: m, h },
          { relief: v.relief, loose: _.loose },
        )),
        this.devNoLight && (this.lights.length = 0),
        u && v
          ? this.glowsHd(_.looseAdd, e, f, p, 0, v.lights, u.look.dark)
          : (u?.kind === `room` || u?.kind === `house`) &&
            this.glowsHd(
              _.looseAdd,
              e,
              f,
              p,
              this.roomGlows[0],
              this.roomGlows[1],
              u.look.dark,
            ));
      let x = this.drawnMe(),
        S = {
          now: this.real,
          real: this.frameDt || this.lastRdt,
          W: n,
          H: r,
          S: t,
          scale: this.scale,
          camX: i,
          camY: a,
          aimCamX: o,
          aimCamY: s,
          fp: d,
          me: { x: x.x * 16, y: x.y * 16 },
          dark: this.devNoLight ? 0 : g,
          region: this.region,
          lights2d: this.lights,
          lines2d: l?.boss ? this.linesHd(l) : void 0,
          particles: this.particles.list,
          uprights: this.uprightsHd(d),
          standIns: this.standIns,
          space: u,
          air: b,
        },
        C = e.frame(S);
      if (((this.lights.length = 0), (this.standIns.length = 0), !C))
        return (
          u &&
            e.ok &&
            e.supports(u.kind) &&
            this.hdHold++ < p8 &&
            (this.doorFade = Math.max(this.doorFade, 1)),
          !1
        );
      ((this.hdHold = 0),
        (this.hdLast = !0),
        (this.hdAim = { x: o, y: s, shX: 0, shY: 0, W: n, H: r }),
        (this.hdAim.shX = i - this.hdAim.x),
        (this.hdAim.shY = a - this.hdAim.y),
        c.clearRect(0, 0, n, r),
        l && l.screenHd(c, n, r),
        this.drawScreenFx(c, n, r, e.view));
      let w = this.display;
      w.imageSmoothingEnabled = !1;
      let T = this.meDoc?.dead
        ? y8((this.real - this.deadSince) / 1.5, 0, 1)
        : 0;
      return (
        T > 0 && (w.filter = `grayscale(${T}) brightness(${1 - T * 0.35})`),
        w.drawImage(e.canvas, 0, 0, n * t, r * t),
        w.drawImage(
          this.scene,
          0,
          0,
          n * this.dens,
          r * this.dens,
          0,
          0,
          n * t,
          r * t,
        ),
        (w.filter = `none`),
        this.drawOverlayText(e.view, t),
        this.story?.drawCard(
          w,
          this.canvas.width,
          this.canvas.height,
          this.scale,
        ),
        this.drawCinematic(),
        this.story?.drawText(
          w,
          this.canvas.width,
          this.canvas.height,
          this.scale,
          Math.round(this.canvas.height * KJ.bars * this.bars),
          e.view,
          t,
        ),
        !0
      );
    }
    glowsHd(e, t, n, r, i, a, o) {
      let s = t.view,
        c = (0.25 + o * 0.5) * Pse;
      for (let t = i; t < Math.min(a, this.lights.length); t++) {
        let i = this.lights[t],
          a = i.z ?? 12,
          o = i.x + n,
          l = i.y + r + a,
          u = s.toScreen(o, l, 0).sy,
          d = Math.max(0.1, u - s.toScreen(o, l - 1, 0).sy),
          f = (u - s.toScreen(o, l, a).sy) / d,
          p = Bp(i.color, i.r * Nse),
          m = p.height / d;
        ((e.globalAlpha = y8(i.a * c, 0, 1)),
          e.drawImage(p, i.x - p.width / 2, i.y + a - f - m / 2, p.width, m));
      }
      e.globalAlpha = 1;
    }
    drawGroundOverlays(e, t, n, r, i) {
      let a = this.room,
        o = this.dungeon,
        s = !!this.story?.phased;
      for (let r of this.decals)
        ((e.globalAlpha = 0.45 * (r.life / r.max)),
          (e.fillStyle = r.color),
          e.beginPath(),
          e.ellipse(r.x - t, r.y - n, r.r, r.r * RENDER_SCALE.decal, 0, 0, Math.PI * 2),
          e.fill());
      e.globalAlpha = 1;
      for (let r of this.telegraphs) {
        let i = 1 - r.life / r.max;
        (this.pixelEllipse(
          e,
          r.x - t,
          r.y - n,
          r.r,
          r.r * RENDER_SCALE.aoe,
          r.color,
          0.35 + 0.4 * Math.abs(Math.sin(this.time * 12)),
        ),
          this.pixelEllipse(
            e,
            r.x - t,
            r.y - n,
            r.r * i,
            r.r * RENDER_SCALE.aoe * i,
            r.color,
            0.5,
          ));
      }
      if (
        (!a && !s && !o && this.drawAltarGround(e, t, n, r, i), !a && !s && !o)
      )
        for (let r of this.townsfolk.taken()) {
          if (!r.need || this.townsfolk.carrying.has(`${r.id}|${r.since}`))
            continue;
          let i = 0.4 + 0.3 * Math.abs(Math.sin(this.time * 2.5));
          this.pixelEllipse(
            e,
            r.x * 16 - t,
            r.y * 16 - n,
            14.4,
            14.4 * RENDER_SCALE.aoe,
            `#bff5ff`,
            i,
          );
        }
      let c = this.townsfolk.hole;
      if (!a && !s && !o && c && !c.over) {
        let r = 0.35 + 0.25 * Math.abs(Math.sin(this.time * 3));
        (this.pixelEllipse(
          e,
          c.x * 16 - t,
          c.y * 16 - n,
          c.r * 16,
          c.r * 16 * RENDER_SCALE.aoe,
          `#ff4d3a`,
          r * 0.35,
        ),
          this.pixelEllipse(
            e,
            c.x * 16 - t,
            c.y * 16 - n,
            25.6,
            25.6 * RENDER_SCALE.aoe,
            `#ff4d3a`,
            r,
          ),
          c.seal &&
            this.pixelEllipse(
              e,
              c.x * 16 - t,
              c.y * 16 - n,
              25.6 * c.seal,
              25.6 * RENDER_SCALE.aoe * c.seal,
              `#8ef6ff`,
              0.8,
            ));
      }
      !a && !this.solo && this.enemy.drawGround(e, t, n);
    }
    collectDrawables(e, t, n, r, i, a, o, s = this.darkness(), c) {
      let l = this.room,
        u = this.dungeon,
        d = !!this.story?.phased,
        f = this.stamping && !o,
        p = this.drawnMe(),
        m = p.x * 16,
        h = p.y * 16;
      (l && this.collectRoom(l, e, t, n, r, s, o),
        u && u.collect(e, t, n, r, i, a, c?.flat, c?.relief),
        c && (c.lights = this.lights.length));
      for (let s of l || u
        ? []
        : this.scenery.collect(n, r, i, a, this.inView)) {
        let i = s.x,
          a = s.y,
          c = s.door
            ? s.door.frames[
                Math.min(
                  s.door.frames.length - 1,
                  Math.floor(s.door.open * s.door.frames.length),
                )
              ]
            : s.frames
              ? xA(
                  s.frames,
                  this.time * (s.fps ?? 8) +
                    Je(s.tx, s.ty, 5) * s.frames.length,
                )
              : s.c,
          l = s.gameKey === `crystal`,
          u = s.parent ?? s;
        if (
          (o ||
            e.push({
              y: s.baseY,
              draw: () => {
                let e =
                  u.baseY > h &&
                  m > u.x &&
                  m < u.x + Mp(u.c) &&
                  h > u.y + 4 &&
                  Np(u.c) > 24
                    ? 0.55
                    : 1;
                if (l) {
                  let e = Math.round(Math.sin(this.time * 1.5) * 1.5);
                  Pp(t, c, i - n, a - r + e);
                } else
                  ((t.globalAlpha = e),
                    Pp(t, c, i - n, a - r),
                    (t.globalAlpha = 1));
              },
            }),
          s.door &&
            s.door.open > 0 &&
            this.lights.push({
              x: i + 8 - n,
              y: a + 9 - r,
              r: 24,
              color: `#ffd98a`,
              a: 0.75 * s.door.open,
              z: 9,
            }),
          s.gameKey)
        )
          this.objectLights(
            s.gameKey,
            s.tx * 16 + 8 - n,
            s.baseY - r,
            s.tx,
            s.ty,
            s.glow,
          );
        else if (s.lights)
          for (let e of s.lights)
            this.lights.push({
              x: i + e.x - n,
              y: a + e.y - r,
              r: e.r,
              color: e.color,
              a: e.a ?? 0.75,
              z: Math.max(0, s.baseY - (a + e.y)),
            });
      }
      (!l && !u && this.collectAltars(e, t, n, r, i, a),
        !l && !u && !d && this.collectEntrances(e, t, n, r, i, a));
      let g = [];
      for (let o of l ? [] : this.monsters.values()) {
        if (
          (o.doc.dead && o.dying <= 0 && !o.sink) ||
          (d && !o.local) ||
          o.ghost ||
          (this.solo && !o.local) ||
          (!u && String(o.doc._id).startsWith(`d:`))
        )
          continue;
        let s = o.rx * 16,
          c = o.ry * 16;
        if (s < n - 40 || s > n + i + 40 || c < r - 40 || c > r + a + 60)
          continue;
        g.push({ id: String(o.doc._id), kind: o.doc.kind, x: s, y: c });
        let l = Math.max(104, (o.top ?? 0) + 24);
        if (f && Loe(o.doc.kind))
          e.push({
            y: c,
            draw: () =>
              this.stampDepth(
                c,
                s - n,
                c - r,
                Math.max(60, l * 0.6),
                l,
                26,
                r,
                (e) => this.drawMonster(e, o, n, r),
              ),
          });
        else {
          let i = {
            y: c,
            x: s,
            box: (o.top ?? 0) > 96 ? [o.top * 0.75, o.top + 24, 32] : Mse,
            draw: () => this.drawMonster(t, o, n, r, i),
          };
          e.push(i);
        }
      }
      (this.liveAnim.plan(g, m, h, this.real),
        !l &&
          !u &&
          (this.story?.collect(e, t, n, r),
          this.townsfolk.collect(e, t, n, r, i, a)));
      for (let o of l || d || u ? [] : this.drops.values()) {
        let s = o.x * 16,
          c = o.y * 16;
        if (s < n - 20 || s > n + i + 20 || c < r - 10 || c > r + a + 90)
          continue;
        e.push({ y: c, x: s, box: f8, draw: () => this.drawDrop(t, o, n, r) });
        let l = _a[o.item.rarity];
        (l.beam || o.item.hollowed) &&
          this.lights.push({
            x: s - n,
            y: c - r - 10,
            r: 22,
            color: o.item.hollowed ? va.color : l.color,
            a: 0.7,
            z: 10,
          });
      }
      for (let o of l || d || u ? [] : this.remains.values()) {
        let s = o.x * 16,
          c = o.y * 16;
        if (s < n - 20 || s > n + i + 20 || c < r - 10 || c > r + a + 90)
          continue;
        e.push({
          y: c,
          x: s,
          box: f8,
          draw: () => this.drawRemains(t, o, n, r),
        });
        let l = A8(o.items);
        this.lights.push({
          x: s - n,
          y: c - r - 10,
          r: 26,
          color: l ? _a[l.rarity].color : `#ffd166`,
          a: 0.6,
          z: 10,
        });
      }
      let _ = [];
      for (let o of this.remotes.values()) {
        let s = o.rx * 16,
          c = o.ry * 16;
        if (
          o.doc.dead ||
          d ||
          this.solo ||
          (l ? Qr(o.rx, o.ry) !== l : o.rx >= Or)
        )
          continue;
        let u = !!o.doc.veiled;
        if (u && Math.hypot(o.rx - p.x, o.ry - p.y) > O.shimmer) continue;
        s > n - 30 &&
          s < n + i + 30 &&
          c > r - 10 &&
          c < r + a + 40 &&
          _.push({ id: String(o.doc._id), x: s, y: c });
        let m = c8(u ? jse : 1, (e) =>
          this.drawMage(
            e,
            o.doc.school,
            o.rx,
            o.ry,
            o.doc.dir,
            o.doc.moving,
            o.anim,
            o.castT > 0,
            o.flash > 0,
            n,
            r,
            o.doc.look,
            {
              id: String(o.doc._id),
              flash: o.flash,
              cast: o.castFx,
              blink: o.blinkFx,
              sprint: +!!o.doc.sprinting,
              hero: o.doc.hero,
              guard: !!o.doc.blocking,
            },
          ),
        );
        (e.push({
          y: c,
          x: s,
          box: d8,
          remote: !0,
          draw: f
            ? () => this.stampDepth(c, s - n, c - r, 32, 64, 16, r, m)
            : () => m(t),
        }),
          u ||
            this.lights.push({
              x: s - n,
              y: c - r - 18,
              r: 34,
              color: S[o.doc.school]?.colors.glow ?? `#ffffff`,
              a: 0.8,
              z: 18,
            }));
      }
      if (this.meDoc && !this.meDoc.dead) {
        let i = p === this.me ? this.sprintK : 0,
          a = c8(p === this.me && this.veiled() ? Ase : 1, (e) =>
            this.drawMage(
              e,
              this.school,
              p.x,
              p.y,
              p.dir,
              p.moving,
              p.anim,
              p.castT > 0,
              p.flash > 0,
              n,
              r,
              this.meDoc?.look,
              {
                id: String(this.myId),
                flash: p.flash,
                me: !0,
                cast: p.castFx,
                blink: p.blinkFx,
                sprint: i,
                hero: this.meDoc?.hero,
                guard: p === this.me && this.guarding(),
              },
            ),
          );
        (e.push({
          y: h,
          x: m,
          front: !0,
          box: d8,
          draw: f
            ? () => this.stampDepth(h, m - n, h - r, 32, 64, 16, r, a)
            : () => a(t),
        }),
          this.lights.push({
            x: m - n,
            y: h - r - 16,
            r: 58,
            color: S[this.school].colors.glow,
            a: 1,
            z: 16,
          }));
      }
      (this.liveMages.plan(_, m, h, this.real),
        !l && !this.solo && this.enemy.collect(e, t, n, r));
    }
    drawLoose(e, t, n) {
      let r = this.room,
        i = this.dungeon,
        a = !!this.story?.phased;
      !r && !a && !i && this.drawThreads(e, t, n);
      for (let r of this.projectiles) {
        if (
          (r.arrow &&
            dq(e, r.x * 16 - t, r.y * 16 - n, Math.atan2(r.vy, r.vx))) ||
          this.mage3d
        )
          continue;
        let i = S[r.school].colors,
          a = Math.round(r.x * 16 - t),
          o = Math.round(r.y * 16 - n);
        ((e.fillStyle = i.glow),
          e.fillRect(a - 2, o - 2, 5, 5),
          (e.fillStyle = i.spark),
          e.fillRect(a - 1, o - 1, 3, 3),
          (e.fillStyle = `#ffffff`),
          e.fillRect(a, o, 1, 1));
      }
      for (let r of this.domes) {
        let i = r.until - this.real;
        if (i <= 0) continue;
        let a = Math.min(1, (this.real - r.t0) / 0.25, i / 0.4),
          o = r.x * 16 - t,
          s = r.y * 16 - n,
          c = r.r * 16,
          l = 0.5 + 0.5 * Math.sin(this.real * 6);
        (e.save(),
          (e.globalAlpha = 0.14 * a),
          (e.fillStyle = `#f5d66b`),
          e.beginPath(),
          e.ellipse(o, s, c, c / 1.15, 0, 0, Math.PI * 2),
          e.fill(),
          (e.globalAlpha = (0.07 + 0.04 * l) * a),
          e.beginPath(),
          e.ellipse(o, s, c, c * 1.05, 0, Math.PI, Math.PI * 2),
          e.ellipse(o, s, c, c / 1.15, 0, 0, Math.PI),
          e.fill(),
          e.restore(),
          this.pixelEllipse(e, o, s, c, c / 1.15, `#fff4c8`, 0.85 * a),
          this.pixelEllipse(
            e,
            o,
            s - c * 0.55,
            c * 0.84,
            c * 0.2,
            `#f5d66b`,
            (0.25 + 0.2 * l) * a,
          ),
          (e.globalAlpha = (0.55 + 0.25 * l) * a),
          (e.fillStyle = `#fff4c8`));
        let u = Math.max(16, Math.floor(c * 1.6));
        for (let t = 0; t <= u; t++) {
          let n = Math.PI + (t / u) * Math.PI;
          e.fillRect(
            Math.round(o + Math.cos(n) * c),
            Math.round(s + Math.sin(n) * c * 1.05),
            1,
            1,
          );
        }
        e.globalAlpha = 1;
      }
      for (let r of this.fallingArrows) {
        let i = this.real - r.t0;
        ((e.globalAlpha = r.z > 0 ? 1 : y8(1 - (i - 0.25) / 0.35, 0, 1)),
          dq(e, r.x - t, r.y - r.z - n, Math.PI / 2));
      }
      ((e.globalAlpha = 1),
        !r &&
          !this.solo &&
          this.enemy.drawShots(e, t, n, this.lights, this.me));
    }
    drawUprightAdditive(e, t, n, r, i, a = !1, o = !1) {
      let s = this.room,
        c = this.dungeon;
      (!s && !c && !o && this.drawDome(e, t, n, r, i),
        c || this.story?.drawAdditive(e, t, n, !o),
        a && this.particles.draw(e, t, n, !0),
        !s && !c && !o && this.drawAltarAdditive(e, t, n, r, i));
      for (let r of this.beams) this.drawBeam(e, r, t, n);
    }
    drawRings(e, t, n) {
      for (let r of this.rings) {
        let i = r.life / r.dur;
        this.pixelEllipse(
          e,
          r.x - t,
          r.y - n,
          r.max * x8(i),
          r.max * x8(i) * RENDER_SCALE.cos,
          r.color,
          1 - i,
        );
      }
    }
    reticleShown() {
      return (
        !this.cine &&
        !this.meDoc?.dead &&
        !this.story?.locked &&
        this.zoom === 1 &&
        (!this.touchMode || this.aimTouch !== null || aZ().device === `pad`)
      );
    }
    drawScreenFx(e, t, n, r) {
      (this.hurtFlash > 0 &&
        ((e.strokeStyle = `rgba(255,20,40,${this.hurtFlash * 0.6})`),
        (e.lineWidth = 10),
        e.strokeRect(0, 0, t, n)),
        this.vignette && e.drawImage(this.vignette, 0, 0, t, n),
        this.doorFade > 0 &&
          ((e.globalAlpha = y8(this.doorFade, 0, 1)),
          (e.fillStyle = `#07040f`),
          e.fillRect(0, 0, t, n),
          (e.globalAlpha = 1)),
        this.flash.a > 0 &&
          ((e.globalAlpha = this.flash.a),
          (e.fillStyle = this.flash.color),
          e.fillRect(0, 0, t, n),
          (e.globalAlpha = 1)));
      let i = aZ().device === `pad`;
      if (this.reticleShown()) {
        let t = S[this.school].colors.spark,
          n = Math.round(this.mouse.sx),
          a = Math.round(this.mouse.sy);
        ((e.fillStyle = t),
          e.fillRect(n - 4, a, 3, 1),
          e.fillRect(n + 2, a, 3, 1),
          e.fillRect(n, a - 4, 1, 3),
          e.fillRect(n, a + 2, 1, 3));
        let o =
          i && this.padPick && C1(`pad`, _l())
            ? this.monsters.get(this.padPick)
            : void 0;
        if (o && this.targetable(o)) {
          let t = r.toScreen(o.rx * 16, o.ry * 16, 6.4),
            n = Math.round(t.sx),
            i = Math.round(t.sy),
            a = Math.round(S8(o.doc.kind) * 16) + 4;
          for (let [t, r] of [
            [-1, -1],
            [1, -1],
            [-1, 1],
            [1, 1],
          ]) {
            let o = n + t * a,
              s = i + r * a;
            (e.fillRect(t < 0 ? o : o - 2, s, 3, 1),
              e.fillRect(o, r < 0 ? s : s - 2, 1, 3));
          }
        }
      }
    }
    objectLights(e, t, n, r, i, a) {
      switch (e) {
        case `crystal`: {
          let e = 0.85 + Math.sin(this.time * 2) * 0.15,
            r = this.hdNow() ? Zse : { r: 1, a: 1 };
          (this.lights.push({
            x: t,
            y: n - 26,
            r: 150 * r.r,
            color: `#44c9f0`,
            a: e * r.a,
            z: 26,
          }),
            this.lights.push({
              x: t,
              y: n - 30,
              r: 50 * r.r,
              color: `#b58aff`,
              a: 0.8 * r.a,
              z: 30,
            }));
          break;
        }
        case `brazier`: {
          let e = 0.8 + Math.random() * 0.2;
          (this.lights.push({
            x: t,
            y: n - 14,
            r: 58,
            color: a ?? `#ff8a2a`,
            a: e,
            z: 14,
          }),
            Math.random() < 0.3 &&
              this.particles.spawn({
                x: r * 16 + 8 + (Math.random() - 0.5) * 6,
                y: i * 16 + 14,
                z: 14,
                vz: 26 + Math.random() * 16,
                vx: (Math.random() - 0.5) * 6,
                life: 0.6,
                size: Math.random() < 0.5 ? 2 : 1,
                color: a
                  ? Math.random() < 0.5
                    ? `#bff0ff`
                    : a
                  : Math.random() < 0.5
                    ? `#ffb238`
                    : `#ff5a1a`,
                glow: !0,
              }));
          break;
        }
        case `mushroom`:
          this.lights.push({
            x: t,
            y: n - 4,
            r: 22,
            color: `#35d3e8`,
            a: 0.8,
            z: 4,
          });
          break;
        case `pillar`:
          this.lights.push({
            x: t,
            y: n - 16,
            r: 16,
            color: `#7ef9ff`,
            a: 0.6,
            z: 16,
          });
          break;
        case `obsidian`:
          (r + i) % 3 == 0 &&
            this.lights.push({
              x: t,
              y: n - 6,
              r: 14,
              color: `#ff5a1f`,
              a: 0.5,
              z: 6,
            });
          break;
        case `lamp`:
          this.lights.push({
            x: t,
            y: n - 24,
            r: 46,
            color: a ?? `#ffd98a`,
            a: 0.9,
            z: 24,
          });
      }
    }
    drawDome(e, t, n, r, i) {
      let a = this.dome,
        o = Ar * 16,
        s = jr * 16,
        c = Pr * 16,
        l = y8(o, t, t + r),
        u = y8(s, n, n + i),
        d = Math.max(
          Math.hypot(t - o, n - s),
          Math.hypot(t + r - o, n - s),
          Math.hypot(t - o, n + i - s),
          Math.hypot(t + r - o, n + i - s),
        );
      if (Math.hypot(l - o, u - s) > c + 70 || d < c - 4) return;
      let f = Xse(),
        p = Math.floor((Math.PI * 2 * c) / 2),
        m = this.time;
      for (let l = 0; l < p; l++) {
        let u = (l / p) * Math.PI * 2,
          d = Math.round(o + Math.cos(u) * c - t),
          h = Math.round(s + Math.sin(u) * c - n);
        if (d < -4 || d > r + 4 || h < -4 || h > i + 70) continue;
        let g = 0;
        for (let e of a.hits) {
          let t = m - e.t0,
            n = w8(u, e.a),
            r = Math.abs(n) * Pr;
          g +=
            e.p *
            Math.max(0, 1 - t / 1.6) *
            (Math.exp(-n * n * 900) +
              0.7 * Math.exp(-((r - t * 9) ** 2) * 0.6));
        }
        a.breach > 0.05 &&
          (g +=
            a.breach *
            Math.exp(-(w8(u, 0) ** 2) * 600) *
            (0.6 + 0.4 * Math.sin(m * 13)));
        let _ =
            0.55 +
            0.25 * Math.sin(u * 60 + m * 2.2) +
            0.2 * Math.sin(u * 13 - m * 1.3),
          v = l % 14 == 0 ? 1.7 : 1,
          y = y8(a.power * _ * v * 0.5 + g * 0.8, 0, 1),
          b = Math.round(28 + 8 * Math.sin(u * 7 + m) + Math.min(40, g * 22));
        ((e.globalAlpha = y * 0.55),
          e.drawImage(f, d, h - b, 2, b),
          (e.globalAlpha = Math.min(1, y * 1.3)),
          (e.fillStyle = g > 0.4 ? `#ffffff` : `#7ef9ff`),
          e.fillRect(d, h, 2, 1));
      }
      for (let l of a.cracks) {
        let a = { x: o + Math.cos(l.a) * c - t, y: s + Math.sin(l.a) * c - n };
        if (a.x < -60 || a.x > r + 60 || a.y < -60 || a.y > i + 80) continue;
        let u = a.x,
          d = a.y,
          f = l.seed,
          p = () => ((f = (f * 16807) % 2147483647), (f % 1e3) / 1e3);
        e.globalAlpha = 0.65 + 0.35 * Math.sin(m * 11 + l.seed);
        for (let t = 0; t < 7; t++) {
          let n = u + (p() - 0.5) * 12,
            r = d - l.len / 7;
          (this.pixelLine(e, u, d, n, r, t % 2 ? `#ff9cf5` : `#ffffff`, 1),
            p() < 0.4 &&
              this.pixelLine(
                e,
                n,
                r,
                n + (p() - 0.5) * 14,
                r + p() * 6,
                `#b84dff`,
                1,
              ),
            (u = n),
            (d = r));
        }
      }
      e.globalAlpha = 1;
    }
    drawRemains(e, t, n, r) {
      let i = Math.floor(this.real * 20),
        a = Math.round(t.x * 16 - n),
        o = Math.round(t.y * 16 - r),
        s = this.real - t.born,
        c = A8(t.items);
      if (c) {
        let t = _a[c.rarity];
        ((e.globalAlpha = Math.min(1, s * 2) * (t.beam ? 1 : 0.55)),
          e.drawImage(qY(t.color, i, 72, c.hollowed), a - 6, o - 70),
          (e.globalAlpha = 1));
      }
      let l = s < 0.5 ? Math.round(-Math.sin((s / 0.5) * Math.PI) * 10) : 0;
      if (t.grave) {
        let n = WY(t.school),
          r = Math.min(1, s * 2);
        e.drawImage(
          n,
          0,
          0,
          n.width,
          Math.ceil(n.height * r),
          a - Math.floor(n.width / 2),
          o - Math.ceil(n.height * r) + 2,
          n.width,
          Math.ceil(n.height * r),
        );
        return;
      }
      let u = UY(t.school),
        d = a - Math.floor(u.width / 2),
        f = o - u.height + 2 + l;
      (e.drawImage(u, d, f),
        i % 40 < 4 &&
          ((e.fillStyle = `#ffffff`),
          e.fillRect(d + 9 + (i % 40 < 2 ? 0 : 1), f + 7, 1, 1)));
    }
    drawDrop(e, t, n, r) {
      let i = Math.floor(this.real * 20),
        a = Math.round(t.x * 16 - n),
        o = Math.round(t.y * 16 - r),
        s = this.real - t.born,
        c = s < 0.4 ? Math.round(-Math.sin((s / 0.4) * Math.PI) * 12) : 0,
        l = _a[t.item.rarity];
      ((l.beam || t.item.hollowed) &&
        ((e.globalAlpha = Math.min(1, s * 2)),
        e.drawImage(qY(l.color, i, 64, t.item.hollowed), a - 6, o - 62),
        (e.globalAlpha = 1)),
        e.drawImage(XY(t.item, i), a - 9, o - 21 + c));
    }
    drawMage(e, t, n, r, i, a, o, s, c, l, u, d, f) {
      let p = UK() ? { sex: f?.hero ?? `m`, school: t } : null;
      if (p) {
        let t = AK(p.school, p.sex, d),
          m = f?.cast,
          h =
            m?.spell && oq(m.spell)
              ? {
                  id: m.spell,
                  t: this.real - m.t0,
                  n: m.n ?? 0,
                  dir: iq(m.dx, m.dy),
                }
              : null,
          g = !!m && this.real - m.t0 < kse,
          _ = !!f?.guard,
          v =
            _ && f?.me
              ? iq(Math.cos(this.guardFace), Math.sin(this.guardFace))
              : i,
          y = s && (!a || !m || this.real - m.t0 < 0.12);
        (aq(e, t, n * 16 - l, r * 16 - u, {
          dir: v,
          moving: a,
          cast: y,
          flash: c,
          t: o / 9,
          art: h,
          armed: g,
          guard: _,
        }),
          m?.kind === `swing` &&
            !sq(m.spell ?? ``, t.kit) &&
            lq(
              e,
              n * 16 - l,
              r * 16 - u,
              iq(m.dx, m.dy),
              this.real - m.t0,
              m.spell === `thrust` || m.spell === `stab`,
            ));
        return;
      }
      if (f) {
        let o = f.cast,
          p = (o && Math.hypot(o.dx, o.dy)) || 1,
          m = o
            ? {
                kind: o.kind,
                ax: o.dx / p,
                ay: o.dy / p,
                age: this.real - o.t0,
                delay: o.delay,
              }
            : null,
          h = f.blink,
          g = h
            ? { dx: h.dx * 16, dy: h.dy * 16, age: this.real - h.t0 }
            : null,
          _ = this.liveMages.get(
            {
              id: f.id,
              school: t,
              look: d,
              x: n * 16,
              y: r * 16,
              dir: i,
              cast: s,
              flash: f.flash,
              me: !!f.me,
              gesture: m,
              blink: g,
              walls: () => this.wallsNear(f.id, n, r, !!f.me),
              walking: a,
              sprint: f.sprint,
            },
            this.real,
          );
        if (_) {
          for (let e of _.events.splice(0))
            this.particles.burst(
              n * 16 + e.dx,
              r * 16 + e.dy,
              6,
              [`#8a7f6a`, `#a89f8a`],
              24,
              { glow: !1 },
            );
          ((e.fillStyle = `rgba(0,0,0,0.3)`),
            e.beginPath(),
            e.ellipse(
              Math.round(n * 16 - l),
              Math.round(r * 16 - u),
              6,
              2.5,
              0,
              0,
              Math.PI * 2,
            ),
            e.fill(),
            this.liveMages.draw(
              _,
              e,
              Math.round(n * 16 - l),
              Math.round(r * 16 - u),
              c,
            ));
          return;
        }
      }
      let m =
          d && (d.hat || d.robe)
            ? iX(t, { hat: d.hat && eo(d.hat), robe: d.robe && eo(d.robe) })
            : dh(t),
        h;
      h = s ? 6 : a ? 2 + (Math.floor(o) % 4) : Math.floor(o) % 2;
      let g = (c ? m.flash : m.frames)[i][h],
        _ = Math.round(n * 16 - 10 - l),
        v = Math.round(r * 16 - 26 - u);
      ((e.fillStyle = `rgba(0,0,0,0.3)`),
        e.beginPath(),
        e.ellipse(
          Math.round(n * 16 - l),
          Math.round(r * 16 - u),
          6,
          2.5,
          0,
          0,
          Math.PI * 2,
        ),
        e.fill(),
        e.drawImage(g, _, v));
    }
    wallsNear(e, t, n, r) {
      let i = this.wallProbe.get(e);
      if (
        i &&
        !r &&
        this.real - i.t < 0.2 &&
        Math.hypot(i.x - t, i.y - n) < 0.25
      )
        return i.walls;
      let a = [1 / 0, 1 / 0, 1 / 0, 1 / 0],
        o = [1, 0, -1, 0, 0, -1, 0, 1];
      for (let e = 0; e < 4; e++)
        for (let r = 1; r <= 16; r++)
          if (
            this.wallAt(t + (o[e * 2] * r) / 16, n + (o[e * 2 + 1] * r) / 16)
          ) {
            a[e] = r;
            break;
          }
      return (
        this.wallProbe.size > 64 && this.wallProbe.clear(),
        this.wallProbe.set(e, { t: this.real, x: t, y: n, walls: a }),
        a
      );
    }
    wallAt(e, t) {
      return this.dungeon
        ? this.dungeon.solid(e, t)
        : ((this.room?.kind === `homestead` || this.room?.kind === `house`) &&
            !this.home.clear(e, t)) ||
            ni(e, t);
    }
    snowDue = 0;
    snowfall(e) {
      let t = this.viewW,
        n = this.viewH,
        r = this.cam.x,
        i = this.cam.y,
        a = 0;
      for (let [e, o] of o8)
        ri((r + e * t) / 16, (i + o * n) / 16) === `frost` && a++;
      if (a)
        for (
          this.snowDue += (Dse * a * e) / o8.length;
          this.snowDue >= 1;
          this.snowDue--
        ) {
          let e = 40 + Math.random() * 70,
            a = -(14 + Math.random() * 10);
          this.particles.spawn({
            x: r + (Math.random() - 0.6) * t * 1.2,
            y: i + (Math.random() - 0.5) * n * 1.2,
            z: e,
            vz: a,
            vx: 7 + Math.random() * 6,
            vy: 1 + Math.random() * 2,
            life: e / -a,
            size: Math.random() < 0.18 ? 2 : 1,
            color: Math.random() < 0.6 ? `#ffffff` : `#d8eef8`,
            glow: !1,
            shrink: !1,
          });
        }
    }
    monsterPose(e) {
      return {
        anim: e.anim,
        flip: e.doc.facing < 0,
        moving: this.real - (e.moveT ?? -9) < 0.35,
        attacking: e.lunge > 0 || (!this.solo && this.enemy.casting(e.doc._id)),
        engaged: !!e.doc.target,
        flash: e.flash > 0,
      };
    }
    drawMonster(e, t, n, r, i) {
      if (!this.solo && !t.doc.dead && this.enemy.hidden(t.doc._id)) return;
      let a = t.doc.kind,
        o = FB(a),
        s = Fe[a],
        c = this.monsterPose(t),
        l = t.rx * 16,
        u = t.ry * 16,
        d = t.sink ? t.sink / u8 : t.rise ? 1 - t.rise / l8 : 1,
        f = null;
      if (d >= 1 && !o.rise) {
        let e = this.solo ? null : this.enemy.windupOf(t.doc._id),
          n = e
            ? {
                id: e.id,
                k: e.k,
                landed: e.landed,
                hold: e.hold,
                aimX: e.aim.x * 16,
                aimY: e.aim.y * 16,
              }
            : null,
          r = t.doc.target,
          i = r ? (r === this.myId ? this.me : this.remotes.get(r)) : null,
          o = i
            ? {
                x: (`rx` in i ? i.rx : i.x) * 16,
                y: (`ry` in i ? i.ry : i.y) * 16,
              }
            : null;
        f = this.liveAnim.get(
          {
            id: String(t.doc._id),
            kind: a,
            x: l,
            y: u,
            facing: t.doc.facing < 0 ? -1 : 1,
            engaged: !!t.doc.target,
            windup: n,
            look: o,
            flash: t.flash,
            lunge: t.lunge,
            lungeDir: t.lungeDir,
            dead: !!t.doc.dead,
            fromX: this.me.x * 16,
          },
          this.real,
        );
      }
      if (f) {
        ((l = f.x), (u = f.y), i && ((i.ax = l), (i.ay = u)));
        for (let e of f.events.splice(0))
          e.t === `stomp` &&
            (this.particles.burst(
              l + e.dx,
              u + e.dy,
              Math.round(3 + e.power * 4),
              [`#8a7f6a`, `#6f6a7a`, `#a89f8a`],
              20 + e.power * 12,
              { glow: !1 },
            ),
            e.power >= 2 &&
              Math.hypot(t.rx - this.me.x, t.ry - this.me.y) < 10 &&
              (this.shake = Math.max(this.shake, 1.5 * e.power)));
      } else if (t.lunge > 0) {
        let e = Math.sin((t.lunge / 0.25) * Math.PI) * 5;
        ((l += t.lungeDir.x * e), (u += t.lungeDir.y * e));
      }
      let p =
          !f && o.float && d >= 1
            ? Math.sin(this.time * 3 + t.anim) * o.float.amp + o.float.base
            : 0,
        m = !f && !!tB(a);
      if (m) {
        let e = this.solo ? null : this.enemy.windupOf(t.doc._id);
        e && !e.landed
          ? (c.windup = e.k)
          : t.lunge > 0
            ? (c.strike = 1 - t.lunge / 0.25)
            : (t.doc.latched || t.doc.song) && (c.attacking = !0);
      }
      let h =
          m && t.dieFor && t.dying > 0
            ? wie(a, t.dieFor - t.dying, c.flip)
            : null,
        g = f
          ? null
          : h ||
            (d < 1 && Eie(a, d, c.flip)) ||
            (!m && Tie(a, t.doc, c, Date.now())) ||
            BB(a, c),
        _ = f ? f.top : g.ay;
      t.top = _ - p;
      let v =
        o.shadow * (0.4 + 0.6 * d) * (f ? 1 - Math.min(0.45, f.lift / 22) : 1);
      ((e.fillStyle = `rgba(0,0,0,0.3)`),
        e.beginPath(),
        e.ellipse(
          Math.round(l - n),
          Math.round(u - r),
          v,
          Math.max(2, v * 0.36),
          0,
          0,
          Math.PI * 2,
        ),
        e.fill());
      let y =
        t.dying > 0
          ? t.dieFor
            ? Math.min(1, t.dying / nB)
            : t.dying / 0.5
          : 1;
      if (
        (o.flicker &&
          (y *=
            0.7 +
            0.3 *
              Math.abs(Math.sin(this.time * 2.3 + Math.sin(this.time * 7.1)))),
        (e.globalAlpha = y),
        f)
      )
        this.liveAnim.draw(f, e, Math.round(l - n), Math.round(u - r), c.flash);
      else if (g && d < 1 && !o.rise) {
        let t = Math.round(l - g.ax - n),
          i = Math.round(u - g.ay - r + p),
          a = Math.round((1 - d) * (g.ay - 2)),
          o = g.ay - a,
          s = Ap(g.img);
        (o > 0 &&
          e.drawImage(
            g.img,
            0,
            0,
            g.img.width,
            o * s,
            t,
            i + a,
            g.img.width / s,
            o,
          ),
          (e.fillStyle = `#3a3024`),
          e.beginPath(),
          e.ellipse(
            Math.round(l - n),
            Math.round(u - r),
            7,
            2,
            0,
            0,
            Math.PI * 2,
          ),
          e.fill());
      } else
        g &&
          Pp(e, g.img, Math.round(l - g.ax - n), Math.round(u - g.ay - r + p));
      if (
        ((e.globalAlpha = 1),
        (o.lights ?? []).forEach((e, t) => {
          let i = f && t === 0 ? f.glow : null,
            a = l - n + (i ? i.dx : (e.dx ?? 0) * (c.flip ? -1 : 1)),
            o = Math.min(
              1,
              e.a *
                d *
                y *
                (e.flicker ? 0.85 + Math.random() * 0.15 : 1) *
                (i && f ? f.glowK : 1),
            );
          this.lights.push({
            x: a,
            y: u - r + (i ? i.dy : e.dy) + p,
            r: e.r,
            color: e.color,
            a: o,
            z: Math.max(0, -((i ? i.dy : e.dy) + p)),
          });
        }),
        !t.doc.dead &&
          d >= 1 &&
          (t.doc.hp < t.doc.maxHp || s?.boss || s?.named || this.hovered === t))
      ) {
        let i = s?.incursion ? 40 : s?.boss ? 30 : s?.elite ? 22 : 16;
        this.hpBar(
          e,
          l,
          u,
          _,
          i,
          t.doc.hp / t.doc.maxHp,
          s?.boss ? `#ff9a2a` : s?.named ? `#ffd166` : `#e03a4a`,
          n,
          r,
          p,
        );
      }
    }
    hpBar(e, t, n, r, i, a, o, s, c, l = 0) {
      if (this.hudToOverlay) {
        this.hpBars.push({ x: t, y: n, z: r + 4 - l, w: i, frac: a, color: o });
        return;
      }
      let u = Math.round(t - i / 2 - s),
        d = Math.round(n - r - c - 4 + l);
      ((e.fillStyle = `#12091c`),
        e.fillRect(u - 1, d - 1, i + 2, 4),
        (e.fillStyle = `#4a1020`),
        e.fillRect(u, d, i, 2),
        (e.fillStyle = o),
        e.fillRect(u, d, Math.ceil(i * a), 2));
    }
    stampDepth(e, t, n, r, i, a, o, s) {
      let c = this.stampCtx,
        l = this.dens,
        u = Math.max(0, Math.floor(t - r)),
        d = Math.max(0, Math.floor(n - i)),
        f = Math.min(this.stampC.width / l, Math.ceil(t + r)) - u,
        p = Math.min(this.stampC.height / l, Math.ceil(n + a)) - d;
      if (f <= 0 || p <= 0) {
        s(this.sctx);
        return;
      }
      (c.clearRect(u, d, f, p),
        s(c),
        this.sctx.drawImage(
          this.stampC,
          u * l,
          d * l,
          f * l,
          p * l,
          u,
          d,
          f,
          p,
        ));
      let m = y8(Math.round(e - o + 512), 0, 2047);
      ((c.globalCompositeOperation = `source-in`),
        (c.fillStyle = `rgb(${m >> 8},${m & 255},255)`),
        c.fillRect(u, d, f, p),
        (c.globalCompositeOperation = `source-over`),
        this.dctx.drawImage(
          this.stampC,
          u * l,
          d * l,
          f * l,
          p * l,
          u,
          d,
          f,
          p,
        ),
        c.clearRect(0, 0, this.stampC.width, this.stampC.height));
    }
    drawBeam(e, t, n, r) {
      let i = t.life / t.max;
      e.globalAlpha = i;
      for (let a = 0; a < t.pts.length - 1; a++) {
        let o = t.pts[a],
          s = t.pts[a + 1],
          c = t.wavy
            ? Math.max(3, Math.floor(Math.hypot(s.x - o.x, s.y - o.y) / 10))
            : 1,
          l = o.x,
          u = o.y;
        for (let i = 1; i <= c; i++) {
          let a = i / c,
            d = t.wavy && i < c ? 7 : 0,
            f = b8(o.x, s.x, a) + (Math.random() - 0.5) * d,
            p = b8(o.y, s.y, a) + (Math.random() - 0.5) * d;
          (this.pixelLine(e, l - n, u - r, f - n, p - r, t.color, 3),
            this.pixelLine(e, l - n, u - r, f - n, p - r, t.core, 1),
            (l = f),
            (u = p));
        }
        this.lights.push({
          x: (o.x + s.x) / 2 - n,
          y: (o.y + s.y) / 2 - r,
          r: 50,
          color: t.color,
          a: i,
        });
      }
      e.globalAlpha = 1;
    }
    pixelLine(e, t, n, r, i, a, o) {
      e.fillStyle = a;
      let s = Math.max(Math.abs(r - t), Math.abs(i - n)),
        c = Math.max(1, Math.ceil(s)),
        l = Math.floor(o / 2);
      for (let a = 0; a <= c; a++) {
        let s = a / c;
        e.fillRect(
          Math.round(b8(t, r, s)) - l,
          Math.round(b8(n, i, s)) - l,
          o,
          o,
        );
      }
    }
    pixelEllipse(e, t, n, r, i, a, o) {
      if (r < 1) return;
      ((e.globalAlpha = y8(o, 0, 1)), (e.fillStyle = a));
      let s = Math.max(12, Math.floor(r * 2.2));
      for (let a = 0; a < s; a++) {
        let o = (a / s) * Math.PI * 2;
        e.fillRect(
          Math.round(t + Math.cos(o) * r),
          Math.round(n + Math.sin(o) * i),
          1,
          1,
        );
      }
      e.globalAlpha = 1;
    }
    planHeads(e, t, n) {
      let r = this.display,
        i = n.small,
        a = this.story,
        o = this.me,
        s = new Map(),
        c = (e, t, n) => {
          let r = s.get(e);
          return (
            r ||
              s.set(
                e,
                (r = {
                  t: { key: e, boxes: [] },
                  d: Math.hypot(t / 16 - o.x, n / 16 - o.y),
                }),
              ),
            r.t
          );
        },
        l = (e) =>
          e.x + e.w < -40 ||
          e.y + e.h < -40 ||
          e.x > r.canvas.width + 40 ||
          e.y > r.canvas.height + 40,
        u = (t, n) => {
          let i = e(t, n);
          return (
            i.sx > -40 &&
            i.sx < r.canvas.width + 40 &&
            i.sy > 0 &&
            i.sy < r.canvas.height + 40
          );
        },
        d = (t, n, r) => {
          let i = e(n, r).sy;
          t.floor = t.floor === void 0 ? i : Math.max(t.floor, i);
        },
        f = (i, a, o, s, f, p, m) => {
          r.font = n.body(p);
          let h =
              Math.max(...f.map((e) => r.measureText(e).width)) +
              Math.max(2, t) +
              2,
            g = p * (f.length > 1 ? 2.25 : 1) + 2,
            _ = e(a, o, s),
            v = { x: _.sx - h / 2, y: _.sy - g + 1, w: h, h: g };
          if (l(v) && !u(a, o)) return null;
          let y = c(i, a, o);
          return (
            (y.label = y.boxes.length),
            y.boxes.push(v),
            d(y, a, o),
            m && (y.group = m),
            y
          );
        },
        p = (i, a, o, s, l, u = 0) => {
          r.font = n.body(n.promptPx);
          let f = Yq(l, n.promptPx, (e) => r.measureText(e).width),
            p = e(a, o, s),
            m = c(i, a, o);
          return (
            m.boxes.push(Vq(p.sx, p.sy + u - n.rise, f.w, n.promptPx, 2 * t)),
            d(m, a, o),
            f.h
          );
        },
        m = !this.cine && !a?.locked;
      if (
        this.meDoc &&
        !this.meDoc.dead &&
        m &&
        !(this.room && this.talkable)
      ) {
        let e = f(
          `me`,
          o.x * 16,
          o.y * 16,
          30,
          k8(this.meDoc.name, this.meDoc.level, this.meDoc),
          i,
        );
        e && (e.fixed = !0);
      }
      for (let [e, t] of this.remotes)
        m &&
          this.listed(t) &&
          f(
            `mage:${e}`,
            t.rx * 16,
            t.ry * 16,
            30,
            k8(t.doc.name, t.doc.level, {
              ...t.doc,
              wanted: this.wanted.get(t.doc.name),
              party: this.inParty(t),
            }),
            i,
          );
      let h = null,
        g = this.talkable;
      if (this.room) {
        if (m && !a?.chatting) {
          for (let e of this.room.folk)
            Math.hypot(e.x - o.x, e.y - o.y) < 4 &&
              f(
                `room:${this.room.id}/${e.id}`,
                e.x * 16,
                e.y * 16,
                PR(30),
                [e.name],
                i,
                `room:${e.name}`,
              );
          g &&
            ((h = g.id.includes(`:`)
              ? `prompt`
              : `${g.note ? `note` : `room`}:${this.room.id}/${g.id}`),
            p(
              h,
              g.x * 16,
              g.y * 16,
              g.labelDy === void 0 ? (g.note ? 16 : PR(38)) : g.labelDy,
              dZ(g.label ?? (g.note ? `[E] Look` : `[E] Talk`)),
            ));
        }
      } else {
        if (
          (m &&
            !a?.chatting &&
            g &&
            ((h =
              g.id.startsWith(`circle:`) || g.id.startsWith(`folk:`)
                ? g.id
                : `prompt`),
            p(
              h,
              g.x * 16,
              g.y * 16,
              g.labelDy ?? (g.note ? 16 : PR(42)),
              dZ(g.label ?? (g.note ? `[E] Look` : `[E] Talk`)),
            )),
          m && !a?.chatting && !g && this.atCrystal())
        ) {
          h = `crystal`;
          let e = p(h, Mr * 16, Nr * 16, 44, dZ(`[E] Kindle`));
          p(h, Mr * 16, Nr * 16, 44, dZ(`[R] Chorus Road`), e + 4);
        }
        if (m && !this.dungeon)
          for (let e of this.townsfolk.labels())
            f(`folk:${e.id}`, e.x, e.y, PR(30), [e.name], i, `folk:${e.name}`);
        if (a && !a.locked) {
          let e = rl(this.scale, n.size);
          for (let t of a.npcs)
            !t.visible ||
              t.alpha < 0.5 ||
              t.kind === `lillith` ||
              t.fallen ||
              f(`circle:${t.kind}`, t.x * 16, t.y * 16, PR(30), [t.name], e);
        }
      }
      let _ = [];
      if (!this.cine && !a?.locked && !this.dungeon) {
        let r = 2 * t;
        for (let t of this.quests.headMarks()) {
          let i = Mq(n.marks, t.scale),
            a = Pq(t.m.kind, i),
            o = e(t.x, t.y, t.z),
            f = o.sx,
            p = Hq(Iq(f, o.sy, a, r), s.get(t.key)?.t.boxes ?? [], 2);
          if (l(p) && !u(t.x, t.floor)) continue;
          let m = c(t.key, t.x, t.y),
            h = m.label === void 0 ? null : m.boxes[m.label],
            g = h ? [!1, !0].map((e) => Uq(p, h, m.boxes, 2, e)) : [];
          (g.length && (m.compact = g.map((e) => [...m.boxes, e])),
            m.boxes.push(p),
            d(m, t.x, t.floor),
            _.push({
              key: t.key,
              sx: f,
              sy: p.y + a + r,
              side: g.map((e) => ({ sx: e.x + a, sy: e.y + a + r })),
              m: t.m,
              R: i,
            }));
        }
      }
      let v = (e) => (e.t.fixed ? 0 : e.t.key === h ? 1 : 2),
        y = [...s.values()]
          .sort((e, t) => v(e) - v(t) || e.d - t.d)
          .map((e) => e.t),
        b = this.hudScreen?.safe.y ?? 0,
        x = [...this.hudRects, { x: -1e5, y: b - 1e5, w: 2e5, h: 1e5 }];
      return {
        places: Gq(y, { step: i + 4, steps: 3, gap: 2, keepOut: x }),
        marks: _,
        prompt: h,
      };
    }
    drawOverlayText(e, t) {
      let n = this.display,
        r = _l(),
        i = el(this.scale, r.textSize),
        a = tl(this.scale, r.textSize),
        o = nl(this.scale, r.textSize),
        s = (e) => $c(e, r.readableFont),
        c = s(a),
        l = aZ().device === `pad` && (this.uiOpen || y1()),
        u = !!this.story?.phased;
      ((n.textAlign = `center`), (n.textBaseline = `alphabetic`));
      let d = (n, r, i = 0) => {
        let a = e.toScreen(n, r, i);
        return { sx: a.sx * t, sy: a.sy * t };
      };
      n.lineJoin = r.readableFont ? `round` : `miter`;
      let f = y6().cal ? (e) => Math.round(e) * t : (e) => Math.round(e * t);
      for (let r of e.kind === `hd2d` ? this.hpBars : []) {
        let i = e.toScreen(r.x, r.y, r.z),
          a = f(i.sx - r.w / 2),
          o = f(i.sy);
        ((n.fillStyle = `#12091c`),
          n.fillRect(a - t, o - t, (r.w + 2) * t, 4 * t),
          (n.fillStyle = `#4a1020`),
          n.fillRect(a, o, r.w * t, 2 * t),
          (n.fillStyle = r.color),
          n.fillRect(a, o, Math.ceil(r.w * r.frac) * t, 2 * t));
      }
      let p = el(this.scale, `normal`),
        m = i - p,
        h = this.planHeads(d, t, {
          small: i,
          promptPx: a,
          body: s,
          size: r.textSize,
          marks: p,
          rise: m,
        });
      this.headPlaces = h.places;
      let g = (e, t, n, r) => {
          let i = h.places.get(e);
          if (!i) {
            let e = d(t, n, r);
            return { x: e.sx, y: e.sy };
          }
          return i.label
            ? { x: i.label.x + i.label.w / 2, y: i.label.y + i.label.h - 1 }
            : null;
        },
        _ = h.prompt ? (h.places.get(h.prompt)?.lift ?? 0) : 0,
        v = (e, r, a, o, c, l, u, d, f) => {
          let p = g(e, r, a, o);
          if (!p) return;
          let m = p.x,
            h = p.y;
          n.font = s(i);
          let [_, v] = k8(c, l, f);
          if (
            ((n.lineWidth = Math.max(2, t)),
            (n.strokeStyle = f?.outlaw
              ? `rgba(60,0,8,0.95)`
              : `rgba(10,5,20,0.9)`),
            n.strokeText(_, m, h),
            (n.fillStyle = f?.outlaw
              ? E8
              : f?.party
                ? O8
                : f?.hostile
                  ? D8
                  : d
                    ? `#ffffff`
                    : (S[u]?.colors.trim ?? `#fff`)),
            n.fillText(_, m, h),
            e === `mage:${this.plateHover}`)
          ) {
            let e = Math.round(n.measureText(_).width),
              r = Math.max(1, Math.round(t / 2)),
              i = Math.round(m - e / 2),
              a = Math.round(h + r + 1),
              o = n.fillStyle;
            ((n.fillStyle = `rgba(10,5,20,0.9)`),
              n.fillRect(i - 1, a - 1, e + 2, r + 2),
              (n.fillStyle = o),
              n.fillRect(i, a, e, r));
          }
          if (v) {
            let e = h - i * 1.25;
            ((n.strokeStyle = `rgba(10,5,20,0.9)`),
              n.strokeText(v, m, e),
              (n.fillStyle = ece),
              n.fillText(v, m, e));
          }
        },
        y = (e, r, a, o) => {
          n.font = s(i);
          let c = o.split(` `),
            l = [],
            u = ``;
          for (let e of c)
            (u + ` ` + e).trim().length > 26
              ? (l.push(u.trim()), (u = e))
              : (u += ` ` + e);
          u.trim() && l.push(u.trim());
          let f = i + 4,
            p = Math.max(...l.map((e) => n.measureText(e).width)) + i,
            m = l.length * f + i * 0.6,
            h = d(e, r, a),
            g = h.sx,
            _ = h.sy - m;
          ((n.fillStyle = `rgba(245,240,255,0.95)`),
            n.fillRect(g - p / 2, _, p, m),
            n.fillRect(g - t, _ + m, t * 2, t * 2),
            (n.strokeStyle = `#1b1030`),
            (n.lineWidth = t),
            n.strokeRect(g - p / 2, _, p, m),
            (n.fillStyle = `#1b1030`),
            l.forEach((e, t) => n.fillText(e, g, _ + f * (t + 1))));
        },
        b = !!this.cine || !!this.story?.locked;
      for (let [e, t] of this.remotes)
        t.doc.dead ||
          u ||
          this.solo ||
          b ||
          (this.room ? Qr(t.rx, t.ry) !== this.room : t.rx >= Or) ||
          (v(
            `mage:${e}`,
            t.rx * 16,
            t.ry * 16,
            30,
            t.doc.name,
            t.doc.level,
            t.doc.school,
            !1,
            {
              ...t.doc,
              wanted: this.wanted.get(t.doc.name),
              party: this.inParty(t),
            },
          ),
          t.bubble &&
            t.bubble.until > this.real &&
            y(t.rx * 16, t.ry * 16, 36, t.bubble.text));
      if (
        this.room &&
        !this.cine &&
        !this.story?.chatting &&
        !this.story?.locked
      ) {
        let e = (e, r, a, o) => {
          e &&
            ((n.globalAlpha = o),
            (n.font = s(i)),
            (n.lineWidth = Math.max(2, t)),
            (n.strokeStyle = `rgba(10,5,20,0.9)`),
            n.strokeText(r, e.x, e.y),
            (n.fillStyle = a),
            n.fillText(r, e.x, e.y),
            (n.globalAlpha = 1));
        };
        for (let t of this.room.folk) {
          let n = Math.hypot(t.x - this.me.x, t.y - this.me.y);
          n < 4 &&
            e(
              g(`room:${this.room.id}/${t.id}`, t.x * 16, t.y * 16, PR(30)),
              t.name,
              t.color,
              y8((4 - n) / 1.2, 0, 1),
            );
        }
        let r = this.talkable;
        if (r && !l) {
          let e = Math.round(Math.sin(this.real * 4) * 1.5),
            t = r.labelDy === void 0 ? (r.note ? 16 : PR(38)) : r.labelDy,
            i = d(r.x * 16, r.y * 16, t - e);
          Zq(
            n,
            dZ(r.label ?? (r.note ? `[E] Look` : `[E] Talk`)),
            i.sx,
            Xq(i.sy - _ - m, a),
            `#ffe08a`,
            a,
            c,
          );
        }
      }
      if (
        !this.room &&
        !this.cine &&
        !this.story?.chatting &&
        !this.story?.locked &&
        this.talkable &&
        !l
      ) {
        let e = this.talkable,
          t = Math.round(Math.sin(this.real * 4) * 1.5),
          r = d(e.x * 16, e.y * 16, (e.labelDy ?? (e.note ? 16 : PR(42))) - t),
          i = r.sx,
          o = r.sy - _;
        Zq(
          n,
          dZ(e.label ?? (e.note ? `[E] Look` : `[E] Talk`)),
          i,
          Xq(o - m, a),
          `#ffe08a`,
          a,
          c,
        );
      }
      !this.cine &&
        !this.story?.locked &&
        !this.dungeon &&
        this.quests.drawOverlay(n, e, t, i);
      let x = y$() ? 0 : Math.sin(this.real * 3.2) * 2 * t;
      for (let e of h.marks) {
        let t = h.places.get(e.key),
          r = (t?.compact !== void 0 && e.side[t.compact]) || e;
        b$(n, r.sx, r.sy + x - (t?.lift ?? 0), e.m, e.R, this.real);
      }
      if (
        ((n.textAlign = `center`),
        this.meDoc &&
          !this.meDoc.dead &&
          !this.cine &&
          !this.story?.locked &&
          ((this.room && this.talkable) ||
            v(
              `me`,
              this.me.x * 16,
              this.me.y * 16,
              30,
              this.meDoc.name,
              this.meDoc.level,
              this.school,
              !0,
              this.meDoc,
            ),
          this.myBubble &&
            this.myBubble.until > this.real &&
            y(this.me.x * 16, this.me.y * 16, 36, this.myBubble.text)),
        _l().lootLabels && !this.room && !u)
      ) {
        let e = [
            `plain`,
            `kindled`,
            `runed`,
            `resonant`,
            `remembered`,
            `skyfallen`,
          ],
          t = [...this.drops.values()].sort(
            (t, n) => e.indexOf(t.item.rarity) - e.indexOf(n.item.rarity),
          ),
          r = [];
        n.font = s(i);
        for (let e of t) {
          let t = Xa(e.item) + (e.item.enchant ? ` +${e.item.enchant}` : ``),
            a = n.measureText(t).width + i * 0.8,
            o = i + 6,
            s = d(e.x * 16, e.y * 16, 26),
            c = s.sx,
            l = s.sy;
          for (
            let e = 0;
            e < 6 &&
            r.some(
              (e) =>
                c - a / 2 < e.x1 &&
                c + a / 2 > e.x0 &&
                l - o < e.y1 &&
                l > e.y0,
            );
            e++
          )
            l -= o + 2;
          r.push({ x0: c - a / 2, x1: c + a / 2, y0: l - o, y1: l });
          let u = e.item.hollowed ? va.color : _a[e.item.rarity].color;
          ((n.fillStyle = `rgba(6,3,12,0.82)`),
            n.fillRect(c - a / 2, l - o, a, o),
            (e.item.rarity === `remembered` || e.item.rarity === `skyfallen`) &&
              ((n.strokeStyle = u),
              (n.lineWidth = 1),
              n.strokeRect(c - a / 2 + 0.5, l - o + 0.5, a - 1, o - 1)),
            (n.fillStyle = u),
            n.fillText(t, c, l - 4));
        }
      }
      let C = this.home.cursorNote;
      if (C && this.room?.kind === `house`) {
        ((n.font = s(i)), (n.lineWidth = Math.max(2, t)));
        let { sx: e, sy: r } = d(C.x, C.y);
        ((n.strokeStyle = `rgba(10,5,20,0.9)`),
          n.strokeText(C.text, e, r),
          (n.fillStyle = C.color),
          n.fillText(C.text, e, r));
      }
      if (!this.room && !u && !this.dungeon) {
        ((n.font = s(i)), (n.lineWidth = Math.max(2, t)));
        let e = this.remainsHere(),
          r = Date.now();
        for (let o of this.remains.values()) {
          let { sx: s, sy: u } = d(o.x * 16, o.y * 16, 24);
          if (
            s < -200 ||
            s > n.canvas.width + 200 ||
            u < -50 ||
            u > n.canvas.height + 50
          )
            continue;
          let f = o.claimUntil > r && s8(o) !== this.myId,
            p = Math.ceil((o.claimUntil - r) / 1e3),
            m = o.grave
              ? (o.victimId === this.myId
                  ? `Your grave`
                  : `${o.victim}'s grave`) +
                (o.claimUntil > r
                  ? ` · ${p >= 60 ? `${Math.ceil(p / 60)}m` : `${p}s`}`
                  : ``)
              : `${o.victim}'s Leavings` + (f ? ` · ${o.killer}'s ${p}s` : ``);
          if (
            ((n.strokeStyle = `rgba(10,5,20,0.9)`),
            n.strokeText(m, s, u),
            (n.fillStyle = f
              ? `#c9a0a0`
              : (S[o.school]?.colors.trim ?? `#ffffff`)),
            n.fillText(m, s, u),
            e?.id === o.id &&
              !this.talkable &&
              !this.cine &&
              !this.story?.locked &&
              !l)
          ) {
            let e = Math.round(Math.sin(this.real * 4) * 1.5);
            Zq(
              n,
              dZ(`[E] Search`),
              s,
              u - i - 3 - Bq(a) / 2 + e * t,
              `#ffe08a`,
              a,
              c,
            );
          }
        }
      }
      if (
        this.atCrystal() &&
        !this.talkable &&
        !this.cine &&
        !this.story?.locked &&
        !this.story?.chatting &&
        !l
      ) {
        let e = Math.round(Math.sin(this.real * 4) * 1.5),
          t = d(Mr * 16, Nr * 16, 44 - e),
          r = t.sx,
          i = Xq(t.sy - (h.places.get(`crystal`)?.lift ?? 0) - m, a),
          o = Zq(n, dZ(`[E] Kindle`), r, i, `#7ef9ff`, a, c);
        Zq(n, dZ(`[R] Chorus Road`), r, i + o + 4, `#bdfcff`, a, c);
      }
      for (let r of this.dungeon?.labels() ?? []) {
        ((n.font = s(i)),
          (n.strokeStyle = `rgba(10,5,20,0.9)`),
          (n.lineWidth = Math.max(2, t)));
        let { sx: a, sy: o } =
          e.kind === `hd2d` ? d(r.x, r.y + (r.z ?? 0), r.z ?? 0) : d(r.x, r.y);
        ((n.globalAlpha = r.a),
          n.strokeText(r.text, a, o),
          (n.fillStyle = r.color),
          n.fillText(r.text, a, o),
          (n.globalAlpha = 1));
      }
      for (let e of this.monsters.values()) {
        if (this.solo && !e.local) continue;
        let r = this.dungeon ? this.dungeon.label(e) : null,
          a = r ?? Fe[e.doc.kind];
        if (
          !a ||
          e.doc.dead ||
          (u && !r) ||
          e.rise ||
          (r && e.ghost && e.doc.kind !== `lillith`)
        )
          continue;
        let o = null;
        if (
          (a.incursion
            ? (o = pg[a.kind] ?? `#ff9a2a`)
            : a.boss
              ? (o = `#ff9a2a`)
              : a.named
                ? (o = `#ffd166`)
                : a.elite &&
                  (this.hovered === e ||
                    Math.hypot(e.rx - this.me.x, e.ry - this.me.y) < 9) &&
                  (o = `#d9b8ff`),
          !o)
        )
          continue;
        ((n.font = s(i)),
          (n.strokeStyle = `rgba(10,5,20,0.9)`),
          (n.lineWidth = Math.max(2, t)));
        let { sx: c, sy: l } = d(e.rx * 16, e.ry * 16, (e.top ?? 30) + 8);
        (n.strokeText(a.name, c, l),
          (n.fillStyle = o),
          n.fillText(a.name, c, l));
      }
      for (let e of this.room || this.dungeon || b
        ? []
        : this.townsfolk.labels()) {
        let r = g(`folk:${e.id}`, e.x, e.y, PR(30));
        (r &&
          ((n.font = s(i)),
          (n.strokeStyle = `rgba(10,5,20,0.9)`),
          (n.lineWidth = Math.max(2, t)),
          n.strokeText(e.name, r.x, r.y),
          (n.fillStyle = e.color),
          n.fillText(e.name, r.x, r.y)),
          e.bubble && y(e.x, e.y, PR(36), e.bubble));
      }
      let w = this.blinkView;
      if (w?.plan && !this.room && !this.dungeon && !this.cine) {
        let e = $d(w.plan.s, w.plan.cd),
          r = w.poor ? `#9a9aa8` : `#e8f6ff`;
        ((n.font = s(i)), (n.textAlign = `center`));
        let a = n.measureText(e).width / 2 + 4,
          o =
            n.canvas.height -
            4 -
            (this.touchMode
              ? 0
              : wq(window.innerWidth, window.innerHeight, !1) *
                Eq(window.innerWidth, window.innerHeight, !1)),
          c = d(w.plan.x * 16, w.plan.y * 16),
          l = d(this.me.x * 16, this.me.y * 16),
          u = ef(
            { x: c.sx, y: c.sy },
            { x: l.sx, y: l.sy },
            n.canvas.width,
            n.canvas.height,
            o,
            t,
            i,
            a,
          );
        if (u.arrow) {
          let e = 4 * t;
          (n.save(),
            n.translate(u.arrow.x, u.arrow.y),
            n.rotate(u.arrow.a),
            n.beginPath(),
            n.moveTo(e, 0),
            n.lineTo(-e, -e * 0.8),
            n.lineTo(-e * 0.5, 0),
            n.lineTo(-e, e * 0.8),
            n.closePath(),
            (n.lineWidth = Math.max(2, t)),
            (n.strokeStyle = `rgba(10,5,20,0.9)`),
            n.stroke(),
            (n.fillStyle = r),
            n.fill(),
            n.restore());
        }
        ((n.lineWidth = Math.max(2, t)),
          (n.strokeStyle = `rgba(10,5,20,0.9)`),
          n.strokeText(e, u.x, u.y),
          (n.fillStyle = r),
          n.fillText(e, u.x, u.y));
      }
      for (let e of this.floaters) {
        let a = e.life / e.max;
        ((n.font = Jq(e, i, o, r.readableFont)),
          (n.globalAlpha = Math.min(1, a * 2.5)));
        let { sx: s, sy: c } = d(e.x, e.y);
        ((n.lineJoin = e.words && r.readableFont ? `round` : `miter`),
          (n.lineWidth = Math.max(3, t * 1.3)),
          (n.strokeStyle = `#12091c`),
          n.strokeText(e.text, s, c),
          (n.fillStyle = e.color),
          n.fillText(e.text, s, c));
      }
      ((n.globalAlpha = 1), (n.lineJoin = `miter`));
    }
    drawCinematic() {
      let e = this.display,
        t = this.canvas.width,
        n = this.canvas.height,
        r = Math.round(n * KJ.bars * this.bars);
      r > 0 &&
        ((e.fillStyle = `#000`),
        e.fillRect(0, 0, t, r),
        e.fillRect(0, n - r, t, r));
      let i = this.scale;
      if (((e.textAlign = `center`), this.cine)) {
        let a = this.cine.t;
        for (let o of this.cine.captions) {
          if (a < o.t0 || a > o.t1) continue;
          let s = a - o.t0,
            c = o.t1 - o.t0,
            l = y8(Math.min(s / 0.5, (c - s) / 0.5), 0, 1),
            u = Math.floor(s * 32);
          e.globalAlpha = l;
          let d = Math.round(i * 5);
          ((e.font = `${d}px "Press Start 2P", monospace`),
            (e.fillStyle = `#f4ecff`),
            (e.shadowColor = `rgba(140,90,255,0.8)`),
            (e.shadowBlur = 16),
            e.fillText(o.text.slice(0, u), t / 2, n - r - d * 2.2),
            (e.shadowBlur = 0),
            o.sub &&
              ((e.font = `${Math.round(i * 4)}px Silkscreen, monospace`),
              (e.fillStyle = `#e4dcf7`),
              e.fillText(o.sub, t / 2, n - r - d * 0.9)),
            (e.globalAlpha = 1));
        }
        let o = this.skippable() ? fZ(`cinematic`) : null,
          s = al(i, _l().textSize);
        o &&
          ((e.font = `${s}px Silkscreen, monospace`),
          (e.fillStyle = `rgba(255,255,255,0.45)`),
          (e.textAlign = `right`),
          e.fillText(o, t - 20, n - Math.max(r / 2 - i * 2, 16)),
          (e.textAlign = `center`));
      }
      if (this.banner) {
        let r = this.banner,
          a = this.real - r.t0;
        if (a > r.dur) this.banner = null;
        else {
          let o = y8(Math.min(a / 0.6, (r.dur - a) / 0.8), 0, 1),
            s = n * 0.26,
            c = Math.round(i * 6);
          ((e.globalAlpha = o),
            (e.font = `${c}px "Press Start 2P", monospace`),
            (e.shadowColor = r.color),
            (e.shadowBlur = 24),
            (e.fillStyle = `#ffffff`),
            e.fillText(r.title, t / 2, s),
            (e.shadowBlur = 0));
          let l =
            Math.min(t * 0.5, e.measureText(r.title).width + c * 4) *
            y8(a / 0.8, 0, 1);
          ((e.fillStyle = r.color),
            e.fillRect(t / 2 - l / 2, s + c * 0.6, l, Math.max(2, i / 2)),
            (e.font = `${Math.round(i * 3.4)}px Silkscreen, monospace`),
            (e.fillStyle = `#e6dcff`),
            e.fillText(r.subtitle, t / 2, s + c * 1.8),
            (e.globalAlpha = 1));
        }
      }
    }
    miniT = 0;
    drawMinimapThrottled() {
      if (!this.miniTarget || this.real - this.miniT < 0.2) return;
      this.miniT = this.real;
      let e = this.miniTarget,
        t = e.getContext(`2d`);
      t.imageSmoothingEnabled = !1;
      let n = e.width;
      if (this.dungeon) {
        this.dungeon.drawMinimap(t, n);
        return;
      }
      let r = n / 2,
        i = this.outdoorPos(),
        a = y8(i.x - r / 2, 0, Or - r),
        o = y8(i.y - r / 2, 0, kr - r);
      ((t.fillStyle = `#07040f`),
        t.fillRect(0, 0, n, n),
        t.drawImage(this.minimap, a, o, r, r, 0, 0, n, n));
      let s = (e, n, r, i = 3) => {
        ((t.fillStyle = r),
          t.fillRect(
            Math.round((e - a) * 2 - i / 2),
            Math.round((n - o) * 2 - i / 2),
            i,
            i,
          ));
      };
      for (let e of this.monsters.values()) {
        if (!this.targetable(e)) continue;
        let t = Fe[e.doc.kind];
        t?.incursion
          ? s(e.rx, e.ry, pg[t.kind] ?? `#ff9a2a`, 6)
          : t?.boss
            ? s(e.rx, e.ry, `#ff9a2a`, 5)
            : t?.named
              ? s(e.rx, e.ry, `#ffd166`, 4)
              : s(e.rx, e.ry, `#e03a4a`, 2);
      }
      let c = new Set(this.meDoc?.attuned ?? []);
      for (let e of Ll) {
        let t = this.altarState(e),
          n = Il[e],
          r =
            t === `hollowed` || t === `reclaim`
              ? `#e0484e`
              : t === `rite`
                ? Math.floor(this.real * 4) % 2
                  ? `#ffb347`
                  : `#7ef9ff`
                : t === `singing`
                  ? `#ffffff`
                  : c.has(e)
                    ? `#7ef9ff`
                    : `#8c86a0`;
        (s(n.x + 0.5, n.y + 0.5, `#07040f`, 7), s(n.x + 0.5, n.y + 0.5, r, 5));
      }
      if (!this.story?.phased)
        for (let e of this.remotes.values())
          e.rx < Or &&
            !this.inParty(e) &&
            s(
              e.rx,
              e.ry,
              e.doc.outlaw ? E8 : e.doc.hostile ? D8 : `#8ef6ff`,
              e.doc.outlaw ? 5 : 4,
            );
      this.drawPartyMap(t, a, o, 2, n);
      for (let e of this.remains.values()) s(e.x, e.y, `#ffd166`, 3);
      if (this.story?.done)
        for (let e of So) {
          if (e === `folly` && !rs(this.delves?.notes ?? [])) continue;
          let n = $o[e],
            r = Hy(e);
          t.drawImage(
            r,
            Math.round((n.x - a) * 2 - r.width / 2),
            Math.round((n.y - o) * 2 - r.height / 2),
          );
        }
      let l = this.story?.marker;
      l && Math.floor(this.real * 4) % 2 == 0 && s(l.x, l.y, `#ffd166`, 5);
      for (let e of [...this.quests.minimapMarks(), ...this.graveMarks()])
        (!e.blink || Math.floor(this.real * 4) % 2 == 0) &&
          s(e.x, e.y, e.color, e.size);
      let u = Math.floor(this.real * 3) % 2 == 0;
      s(i.x, i.y, u ? `#ffffff` : S[this.school].colors.trim, 4);
    }
    drawPartyMap(e, t, n, r, i) {
      let a = new Map();
      for (let e of this.remotes.values())
        this.inParty(e) && a.set(Ws(e.doc.name), e);
      let o = this.partyMap.map((e) => ({
        key: Ws(e.name),
        x: e.x,
        y: e.y,
        here: e.here,
      }));
      for (let [e, t] of a)
        o.some((t) => t.key === e) ||
          o.push({ key: e, x: t.rx, y: t.ry, here: !0 });
      for (let s of o) {
        let o = a.get(s.key),
          c = this.outdoorOf(o ? o.rx : s.x, o ? o.ry : s.y),
          l = s.here || !!o,
          u = y8(Math.round((c.x - t) * r), 4, i - 3 - 1),
          d = y8(Math.round((c.y - n) * r), 4, i - 3 - 1),
          f = (t, n) => {
            e.fillStyle = n;
            for (let n = -t; n <= t; n++) {
              let r = t - Math.abs(n);
              e.fillRect(u - r, d + n, 2 * r + 1, 1);
            }
          };
        (f(4, `#07040f`), f(3, O8), l || f(1, `#07040f`));
      }
    }
    outdoorOf(e, t) {
      if (e < Or) return { x: e, y: t };
      let n = Qr(e, t);
      return n
        ? (n.door ||
            (n = Zr().find((e) => e.doors.some((e) => e.to === n.id)) ?? n),
          n.door
            ? { x: n.door.tx + 0.5, y: n.door.ty + 1 }
            : { x: n.outside.x, y: n.outside.y })
        : { x: Mr, y: Nr + 6 };
    }
    outdoorPos() {
      let e = this.room;
      if (!e) return { x: this.me.x, y: this.me.y };
      if (e.kind === `homestead` || e.kind === `house`) {
        let t = this.meDoc?.away;
        if (!t) return { x: Mr, y: Nr + 3 };
        if (((e = Qr(t.x, t.y)), !e)) return { x: t.x, y: t.y };
      }
      return (
        e.door ||
          (e = Zr().find((t) => t.doors.some((t) => t.to === e.id)) ?? e),
        e.door
          ? { x: e.door.tx + 0.5, y: e.door.ty + 1 }
          : { x: e.outside.x, y: e.outside.y }
      );
    }
    setDelves(e) {
      this.delves = e;
      let t = e?.run ?? null;
      if (
        (t && t.startedAt === this.leftRun && (t = null),
        t?.hosted || this.dungeon?.hosted)
      ) {
        let n = !!t && e?.room === zae(t);
        t && n && !this.dungeon
          ? this.startDungeon(t)
          : t && n && this.dungeon && !this.dungeon.over
            ? this.dungeon.sync(t)
            : !t && this.dungeon && !Bae(e?.room)
              ? this.endDungeon()
              : !t &&
                this.dungeon &&
                !this.dungeon.over &&
                this.dungeon.emberOut();
        return;
      }
      t && !this.dungeon && this.meDoc && !this.meDoc.dead
        ? this.startDungeon(t)
        : t && this.dungeon && !this.dungeon.over
          ? this.dungeon.sync(t)
          : !t && this.dungeon && !this.dungeon.over && this.endDungeon();
    }
    inDungeon() {
      return !!this.solo;
    }
    zoneDungeonPaid(e) {
      this.dungeon?.paid(e);
    }
    zoneDungeonFx(e) {
      this.dungeon?.hosted && this.dungeon.hostFx(e);
    }
    inDoorway() {
      return !!this.transit;
    }
    devJump(e, t) {
      this.dungeon ||
        ((this.channel = null),
        (this.transit = { t: 0, x: e, y: t, dir: 1, jumped: !1 }),
        q.sfx(`click`, 0.45));
    }
    startDungeon(e) {
      ((this.channel = null),
        (this.room = null),
        (this.talkable = null),
        (this.projectiles = []),
        (this.fallingArrows = []),
        (this.domes = []),
        (this.doorFade = 1),
        (this.fadeGoal = 0),
        (this.dungeon = new Gae(this, e)),
        this.enemy.clear(),
        this.refreshMods(),
        q.sfx(`chime`, 0.6));
    }
    endDungeon() {
      let e = this.dungeon;
      e &&
        ((this.leftRun = e.run.startedAt),
        e.dispose(),
        (this.dungeon = null),
        e.summary && this.api.dungeon.cleared(e.summary),
        this.refreshMods(),
        (this.projectiles = []),
        (this.fallingArrows = []),
        (this.domes = []),
        (this.telegraphs = []),
        (this.me.x = e.outside.x),
        (this.me.y = e.outside.y + 0.6),
        (this.me.dir = 0),
        (this.snapCam = !0),
        (this.doorFade = 1),
        (this.fadeGoal = 0),
        (this.region = ri(this.me.x, this.me.y)),
        (this.banner = {
          title: $o[e.run.dungeon].name,
          subtitle: `You come back up into the light.`,
          t0: this.real,
          dur: 3,
          color: `#ffd98a`,
        }),
        this.api.move(this.me.x, this.me.y, 0, !1),
        (this.lastSent = {
          x: this.me.x,
          y: this.me.y,
          moving: !1,
          dir: 0,
          t: this.real,
        }));
    }
    snapCamNow() {
      this.snapCam = !0;
    }
    drawnMe() {
      return this.story?.hero ?? this.me;
    }
    slowTo(e, t) {
      ((this.slowScale = e), (this.slowUntil = this.real + t));
    }
    fadeTo(e) {
      this.fadeGoal = e;
    }
    cisterns = new W1();
    collectCisterns(e, t, n, r, i, a) {
      let o = $o.cisterns,
        s = o.x * 16 + 8,
        c = (o.y - 2) * 16,
        l =
          !!this.story?.done &&
          !this.room &&
          !this.dungeon &&
          Math.hypot(this.me.x - (o.x + 0.5), this.me.y - (o.y + 0.5)) <= 5;
      if (
        (this.cisterns.update(this.real, l),
        s < n - 120 || s > n + i + 120 || c < r - 20 || c > r + a + 140)
      )
        return;
      let u = this.cisterns;
      e.push({
        y: c,
        x: s,
        fy: c,
        box: u.box(),
        draw: () => u.draw(t, s - n, c - r, this.time),
      });
      for (let i of [0, 1]) {
        let a = u.river(i, s, c);
        a &&
          e.push({
            y: a.top,
            x: s + H1[i],
            fy: a.top,
            box: a.box,
            draw: () => a.draw(t, this.time, n, r),
          });
      }
      u.open > 0 &&
        this.lights.push({
          x: s - n,
          y: c - r - 20,
          r: 40,
          color: `#9fd8ff`,
          a: 0.5 * u.open,
          z: 20,
        });
    }
    collectEntrances(e, t, n, r, i, a) {
      if ((U1() && this.collectCisterns(e, t, n, r, i, a), !this.story?.done))
        return;
      let o = Math.floor(this.real * 3) % 4;
      for (let s of So) {
        if (s === `cisterns` && U1()) continue;
        let c = $o[s],
          l = c.x * 16 + 8,
          u = c.y * 16 + 16;
        if (l < n - 100 || l > n + i + 100 || u < r - 20 || u > r + a + 100)
          continue;
        let d = s === `folly` && !rs(this.delves?.notes ?? []);
        if (!d && this.hdNow()?.covers(`dungeon:${s}`)) {
          this.lights.push({
            x: l - n,
            y: u - r - 20,
            r: 46,
            color: `#ffd98a`,
            a: 0.55,
            z: 20,
          });
          continue;
        }
        let f = V1(s, d, this.real);
        if (f) {
          let i = [
            Math.max(f.ax, Mp(f.c) - f.ax) + 8,
            f.ay + 8,
            Np(f.c) - f.ay + 8,
          ];
          e.push({
            y: u,
            x: l,
            box: i,
            draw: () => Pp(t, f.c, l - f.ax - n, u - f.ay - r),
          });
        } else {
          let i = Oy(s, o, d),
            a = [
              Math.max(i.ax, i.c.width - i.ax) + 8,
              i.ay + 8,
              i.c.height - i.ay + 8,
            ];
          e.push({
            y: u,
            x: l,
            box: a,
            draw: () =>
              t.drawImage(
                i.c,
                Math.round(l - i.ax - n),
                Math.round(u - i.ay - r),
              ),
          });
        }
        d ||
          this.lights.push({
            x: l - n,
            y: u - r - 20,
            r: 46,
            color: `#ffd98a`,
            a: 0.55,
            z: 20,
          });
      }
    }
    getHud() {
      let e = this.meDoc,
        t = e?.level ?? 1,
        n = this.loadout(),
        r = (e, t) =>
          e && t > 0 ? y8(((this.cdUntil[e] ?? 0) - this.real) / t, 0, 1) : 0,
        i = [
          ...n.map((e) => {
            let t = e ? Se(e) : void 0;
            return t ? r(e, dd(t, this.mods).cd) : 0;
          }),
          r(`blink`, this.blinkSpan || this.blink().cd),
        ],
        a = We(Date.now()),
        o = Math.floor(a * 24),
        s = Math.floor((a * 24 * 60) % 60),
        c = this.hovered,
        l = c ? Fe[c.doc.kind] : null,
        u = c && this.dungeon ? this.dungeon.nameOf(c) : null;
      return {
        ready: !!e,
        hp: e?.hp ?? 0,
        maxHp: e?.maxHp ?? 1,
        mana: this.mana,
        maxMana: this.maxMana(),
        calm: !this.inCombat(),
        padAsk: this.ask.ok,
        partyLive: this.partyLive(),
        stamina:
          this.zoneMaxStamina > 0
            ? {
                v: Math.max(0, this.stamina.v),
                max: this.zoneMaxStamina,
                winded: !this.stamina.sprinting && this.stamina.v < ue.start,
                sprinting: this.sprintK > 0,
              }
            : null,
        arrows: ((e) =>
          e ? { kind: e, n: this.quiver[e] ?? 0, color: Pa[e].color } : null)(
          Fa(this.quiver),
        ),
        level: t,
        xp: e?.xp ?? 0,
        xpNext: Le(t),
        kills: e?.kills ?? 0,
        cooldowns: i,
        blinkLeft: Math.max(0, (this.cdUntil.blink ?? 0) - this.real),
        region: this.region,
        place: this.dungeon
          ? this.dungeon.f.name
          : this.room?.kind === `homestead`
            ? this.home.title()
            : this.room?.kind === `house`
              ? this.home.houseTitle()
              : (this.room?.name ?? null),
        dead: e?.dead ?? !1,
        cinematic: !!this.cine || !!this.story?.locked,
        skip: this.skippable(),
        online: this.remotes.size + 1,
        clock: `${String(o).padStart(2, `0`)}:${String(s).padStart(2, `0`)}`,
        target:
          c && u && !c.doc.dead
            ? {
                name: u.name,
                hp: c.doc.hp,
                maxHp: c.doc.maxHp,
                level: u.level,
                boss: u.boss,
              }
            : c && l && !c.doc.dead && !this.dungeon
              ? {
                  name: l.name,
                  hp: c.doc.hp,
                  maxHp: c.doc.maxHp,
                  level: c.doc.lvl ?? l.level,
                  boss: !!l.boss,
                }
              : null,
        story: this.story?.hud() ?? null,
        loadout: n,
        spells: od(this.school, e?.spells),
        arms: this.arms(),
        passives: e?.passives ?? [],
        attrPoints: Zu(t, e?.passives),
        atCrystal: this.atCrystal(),
        quests: this.quests.hud(),
        node: this.nodeHere(),
        channel: this.channel
          ? { to: this.channel.to, k: Math.min(1, this.channel.t / 3) }
          : null,
        homeWalk: this.homeWalk
          ? {
              name: this.homeWalk.name,
              k: Math.min(1, (this.homeWalk.t * 1e3) / wn),
            }
          : null,
        hearth:
          e && this.story?.done
            ? {
                k: this.hearth
                  ? Math.min(1, (this.real - this.hearth.t0) / this.hearth.secs)
                  : null,
                cooldown: su(e.hearthAt ?? 0, Date.now()),
                why: this.hearth ? null : this.hearthWhy(),
              }
            : null,
        home: this.home.on(this.room)
          ? {
              title: this.home.title(),
              mine: this.home.mine(),
              inHouse: this.room?.kind === `house`,
              build: this.home.build,
              tool: this.home.tool,
            }
          : null,
        shop: this.shopHud(!!e?.dead),
        rite: this.meDoc && !this.dungeon ? this.riteHud() : null,
        dungeon: this.dungeon?.hud() ?? null,
        pvp: {
          hostile: !!e?.hostile,
          outlaw: e?.outlaw
            ? Math.max(1, Math.ceil(((e.outlawUntil ?? 0) - Date.now()) / 1e3))
            : 0,
          exposed:
            !!e &&
            !this.room &&
            !this.dungeon &&
            !this.story?.phased &&
            !ii(this.me.x, this.me.y),
          remains: this.remainsHere()?.id ?? null,
          slainBy: e?.dead ? this.slainBy : null,
          writLost: !!e?.dead && !!this.slainBy && this.writLost,
          wanted:
            e?.wanted && (e.wanted.level > 0 || e.wanted.writ > 0)
              ? {
                  level: e.wanted.level,
                  name: Ose[e.wanted.level] ?? ``,
                  writ: e.wanted.writ,
                }
              : null,
        },
      };
    }
    zonePvpHit(e, t, n) {
      (this.zoneFolkHit(t, n), (this.lastPvp = { by: e, at: this.real }));
    }
    zoneFolkHit(e, t) {
      ((this.shake = Math.max(this.shake, t ? 4 : 2)),
        (this.hurtFlash = Math.max(this.hurtFlash, t ? 0.5 : 0.35)),
        (this.combatAt = this.real),
        (this.me.flash = 0.15),
        q.sfx(`hurt`, t ? 0.8 : 0.55),
        this.floater(
          this.me.x * 16 + (Math.random() - 0.5) * 8,
          this.me.y * 16 - 26,
          t ? `-${e}!` : `-${e}`,
          `#ff5c5c`,
          t,
        ));
    }
    zoneSlainBy(e) {
      this.slainBy = e;
    }
    zoneSlew(e) {
      ((this.banner = {
        title: `SLAIN`,
        subtitle: `${e} falls by your hand`,
        t0: this.real,
        dur: 3,
        color: E8,
      }),
        q.sfx(`death`, 0.5));
    }
  },
  E8 = `#ff4d5e`,
  D8 = `#ffa040`,
  ece = `#ffd166`,
  O8 = `#7dff8a`;
