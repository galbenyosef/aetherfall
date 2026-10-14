// index-BTsv3a2s 118 — ctx
// Lines 55072-55408 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
var q = new (class {
    ctx = null;
    master = null;
    musicGain = null;
    musicBus = null;
    sfxBus = null;
    musicTimer = null;
    step = 0;
    trackGain = null;
    track = null;
    combat = !1;
    buffers = new Map();
    prefetched = new Map();
    constructor() {
      xl(() => this.applySettings());
    }
    init() {
      if (this.ctx) {
        this.ctx.state !== `running` && this.ctx.resume().catch(() => {});
        return;
      }
      let e = navigator.audioSession;
      (e && (e.type = `playback`), this.installUnlock());
      try {
        this.ctx = new AudioContext();
      } catch {
        return;
      }
      let t = Yc(_l());
      ((this.master = this.ctx.createGain()),
        (this.master.gain.value = t.master),
        this.master.connect(this.ctx.destination),
        (this.musicBus = this.ctx.createGain()),
        (this.musicBus.gain.value = t.music),
        this.musicBus.connect(this.master),
        (this.sfxBus = this.ctx.createGain()),
        (this.sfxBus.gain.value = t.effects),
        this.sfxBus.connect(this.master),
        (this.musicGain = this.ctx.createGain()),
        (this.musicGain.gain.value = 0.22));
      let n = this.ctx.createDelay();
      n.delayTime.value = 0.38;
      let r = this.ctx.createGain();
      ((r.gain.value = 0.35),
        this.musicGain.connect(this.musicBus),
        this.musicGain.connect(n),
        n.connect(r),
        r.connect(n),
        n.connect(this.musicBus),
        (this.trackGain = this.ctx.createGain()),
        (this.trackGain.gain.value = Cre),
        this.trackGain.connect(this.musicBus));
    }
    installUnlock() {
      let e = () => {
        this.ctx &&
          this.ctx.state !== `running` &&
          this.ctx.resume().catch(() => {});
      };
      for (let t of [`pointerup`, `touchend`, `click`, `keydown`])
        window.addEventListener(t, e, { capture: !0, passive: !0 });
    }
    applySettings() {
      if (!this.ctx || !this.master || !this.musicBus || !this.sfxBus) return;
      let e = Yc(_l()),
        t = this.ctx.currentTime;
      (pA(this.master.gain, e.master, t, 0.05),
        pA(this.musicBus.gain, e.music, t, 0.05),
        pA(this.sfxBus.gain, e.effects, t, 0.05));
    }
    tone(e, t, n, r, i, a, o = 0) {
      if (!this.ctx || !this.sfxBus || r <= 0) return;
      let s = this.ctx.currentTime + o,
        c = this.ctx.createOscillator(),
        l = this.ctx.createGain();
      ((c.type = n),
        c.frequency.setValueAtTime(e, s),
        i && c.frequency.exponentialRampToValueAtTime(i, s + t),
        l.gain.setValueAtTime(1e-4, s),
        l.gain.exponentialRampToValueAtTime(r, s + 0.01),
        l.gain.exponentialRampToValueAtTime(1e-4, s + t),
        c.connect(l),
        l.connect(a ?? this.sfxBus),
        c.start(s),
        c.stop(s + t + 0.05));
    }
    noise(e, t, n, r = 0) {
      if (!this.ctx || !this.sfxBus) return;
      let i = this.ctx.currentTime + r,
        a = Math.floor(this.ctx.sampleRate * e),
        o = this.ctx.createBuffer(1, a, this.ctx.sampleRate),
        s = o.getChannelData(0);
      for (let e = 0; e < a; e++) s[e] = (Math.random() * 2 - 1) * (1 - e / a);
      let c = this.ctx.createBufferSource();
      c.buffer = o;
      let l = this.ctx.createBiquadFilter();
      ((l.type = `lowpass`), (l.frequency.value = n));
      let u = this.ctx.createGain();
      ((u.gain.value = t),
        c.connect(l),
        l.connect(u),
        u.connect(this.sfxBus),
        c.start(i));
    }
    sfx(e, t = 1) {
      if (!(!this.ctx || t <= 0))
        switch (e) {
          case `cast`:
            this.tone(300, 0.25, `triangle`, 0.12 * t, 900);
            break;
          case `bolt`:
            (this.tone(700, 0.15, `square`, 0.05 * t, 200),
              this.noise(0.15, 0.08 * t, 3e3));
            break;
          case `boom`:
            (this.tone(120, 0.6, `sine`, 0.35 * t, 30),
              this.noise(0.6, 0.35 * t, 900));
            break;
          case `zap`:
            (this.noise(0.25, 0.2 * t, 8e3),
              this.tone(1400, 0.2, `sawtooth`, 0.04 * t, 300));
            break;
          case `hit`:
            (this.tone(220, 0.1, `square`, 0.08 * t, 90),
              this.noise(0.08, 0.1 * t, 2e3));
            break;
          case `hurt`:
            this.tone(160, 0.25, `sawtooth`, 0.12 * t, 60);
            break;
          case `blink`:
            (this.tone(1200, 0.2, `sine`, 0.1 * t, 2400),
              this.tone(600, 0.25, `triangle`, 0.08 * t, 1200, void 0, 0.05));
            break;
          case `levelup`:
            [523, 659, 784, 1047].forEach((e, n) =>
              this.tone(e, 0.6, `triangle`, 0.14 * t, void 0, void 0, n * 0.09),
            );
            break;
          case `death`:
            [392, 330, 262, 196].forEach((e, n) =>
              this.tone(e, 0.9, `sine`, 0.14 * t, void 0, void 0, n * 0.25),
            );
            break;
          case `click`:
            this.tone(880, 0.06, `square`, 0.05 * t);
            break;
          case `chime`:
            [784, 1175].forEach((e, n) =>
              this.tone(e, 1.2, `sine`, 0.08 * t, void 0, void 0, n * 0.12),
            );
        }
    }
    load(e) {
      let t = this.buffers.get(e);
      if (!t && this.ctx) {
        let n = this.ctx,
          r = async (t) => {
            let r = t === `.webm` ? this.prefetched.get(e) : void 0;
            return n.decodeAudioData(await (r ?? this.fetchFile(e + t)));
          };
        ((t = r(`.webm`)
          .catch(() => r(`.m4a`))
          .catch((t) => (console.warn(`audio: could not load`, e, t), null))),
          this.buffers.set(e, t));
      }
      return t ?? Promise.resolve(null);
    }
    async fetchFile(e) {
      let t = await fetch(`/audio/${e}`);
      if (!t.ok) throw Error(`${t.status} ${e}`);
      return t.arrayBuffer();
    }
    preload(...e) {
      for (let t of e)
        for (let e of fA[t].files)
          if (!this.prefetched.has(e) && !this.buffers.has(e)) {
            let t = this.fetchFile(e + `.webm`);
            (t.catch(() => {}), this.prefetched.set(e, t));
          }
    }
    play(e, t = 1) {
      if (!this.ctx || !this.sfxBus || t <= 0) return Promise.resolve(null);
      let n = this.ctx,
        r = this.sfxBus,
        i = fA[e].files,
        a = i[Math.floor(Math.random() * i.length)];
      return this.load(a).then((e) => {
        if (!e) return null;
        let i = n.createBufferSource();
        i.buffer = e;
        let a = n.createGain();
        ((a.gain.value = t), i.connect(a), a.connect(r));
        let o = n.currentTime;
        return (i.start(o), { start: o, duration: e.duration });
      });
    }
    loopSource(e, t, n) {
      let r = e.createBufferSource();
      if (((r.buffer = t), n.loop && ((r.loop = !0), n.bpm && n.bars))) {
        let e = ((n.beatsPerBar ?? 4) * 60) / n.bpm;
        ((r.loopStart = (n.introBars ?? 0) * e),
          (r.loopEnd = Math.min(t.duration, r.loopStart + n.bars * e)));
      }
      return r;
    }
    playTrack(e, { fadeIn: t = 1.5, at: n, fight: r } = {}) {
      let i = r ? `${e}+${r}` : e;
      if (!this.ctx || !this.trackGain || this.track?.key === i) return;
      (this.stopMusic(), this.stopTrack(Math.max(t, 0.5)));
      let a = this.ctx,
        o = a.createGain();
      ((o.gain.value = 0), o.connect(this.trackGain));
      let s = this.combat && !!r,
        c = a.createGain();
      ((c.gain.value = +!s), c.connect(o));
      let l = r ? a.createGain() : null;
      l && ((l.gain.value = +!!s), l.connect(o));
      let u = { key: i, srcs: [], gain: o, calm: c, fight: l, restart: null };
      this.track = u;
      let d = [[e, c]];
      (r && l && d.push([r, l]),
        Promise.all(d.map(([e]) => this.load(fA[e].files[0]))).then((r) => {
          if (!r[0] || this.track !== u) return;
          let i = Math.max(n ?? 0, a.currentTime + 0.05),
            c = fA[e];
          (r.forEach((e, t) => {
            if (!e) return;
            let n = fA[d[t][0]];
            if (t > 0 && n.bpm !== c.bpm) {
              ((u.restart = { buf: e, entry: n, src: null, g: null }),
                s && this.restartFight(u, i));
              return;
            }
            let r = this.loopSource(a, e, fA[d[t][0]]);
            (r.connect(d[t][1]), r.start(i), u.srcs.push(r));
          }),
            t > 0
              ? (o.gain.setValueAtTime(0, i),
                o.gain.linearRampToValueAtTime(1, i + t))
              : o.gain.setValueAtTime(1, i));
        }));
    }
    setCombat(e) {
      if (e === this.combat) return;
      this.combat = e;
      let t = this.track;
      if (!t?.fight || !this.ctx) return;
      let n = this.ctx.currentTime,
        r = e ? 0.15 : 0.9;
      (e && t.restart && t.fight.gain.value < 0.3 && this.restartFight(t, n),
        pA(t.calm.gain, +!e, n, r),
        pA(t.fight.gain, +!!e, n, r));
    }
    restartFight(e, t) {
      if (!this.ctx || !e.restart || !e.fight) return;
      let n = e.restart;
      (n.src && n.g && (pA(n.g.gain, 0, t, 0.05), n.src.stop(t + 0.4)),
        (n.g = this.ctx.createGain()),
        n.g.connect(e.fight),
        (n.src = this.loopSource(this.ctx, n.buf, n.entry)),
        n.src.connect(n.g),
        n.src.start(t));
    }
    stopTrack(e = 1.5) {
      let t = this.track;
      if (!t || ((this.track = null), !this.ctx)) return;
      let n = this.ctx.currentTime;
      (t.gain.gain.cancelScheduledValues(n),
        t.gain.gain.setValueAtTime(t.gain.gain.value, n),
        t.gain.gain.linearRampToValueAtTime(0, n + e));
      for (let r of t.srcs) r.stop(n + e + 0.05);
      (t.restart?.src?.stop(n + e + 0.05),
        window.setTimeout(() => t.gain.disconnect(), (e + 0.2) * 1e3));
    }
    startMusic() {
      if ((this.stopTrack(2), !this.ctx || this.musicTimer !== null)) return;
      let e = [
          [220, 261.6, 329.6],
          [174.6, 220, 261.6],
          [196, 246.9, 293.7],
          [164.8, 207.7, 246.9],
        ],
        t = [440, 493.9, 523.3, 587.3, 659.3, 784, 880],
        n = () => {
          if (!this.ctx || !this.musicGain) return;
          let n = e[Math.floor(this.step / 8) % e.length];
          if (this.step % 8 == 0)
            for (let e of n)
              (this.tone(e / 2, 5.5, `triangle`, 0.09, void 0, this.musicGain),
                this.tone(e, 5.5, `sine`, 0.05, void 0, this.musicGain));
          if (Math.random() < 0.55) {
            let e = t[Math.floor(Math.random() * t.length)];
            this.tone(e, 1.4, `sine`, 0.05, void 0, this.musicGain);
          }
          this.step++;
        };
      (n(), (this.musicTimer = window.setInterval(n, 700)));
    }
    stopMusic() {
      (this.musicTimer !== null && window.clearInterval(this.musicTimer),
        (this.musicTimer = null));
    }
  })(),
  wre = 2048;
function mA(e, t, n, r, i, a, o, s, c, l, u, d = 1, f = {}) {
  let p = Math.hypot(i - t, a - n, o - r),
    m = Math.min(wre, Math.max(1, Math.ceil(p / Math.max(0.25, d)))),
    h = f.bow ?? 0,
    g = f.size ?? 1;
  for (let d = 0; d <= m; d++) {
    let p = d / m;
    e.push({
      x: t + (i - t) * p,
      y: n + (a - n) * p,
      z: r + (o - r) * p + (h ? Math.sin(p * Math.PI) * h : 0),
      color: f.colorAt ? f.colorAt(p) : s,
      size: g,
      glow: l,
      a: c,
      unlit: u,
      shrink: !1,
    });
  }
}
function hA(e, t, n, r, i, a, o, s, c = 1) {
  e.push({
    x: t,
    y: n,
    z: r,
    color: i,
    size: c,
    glow: o,
    a,
    unlit: s,
    shrink: !1,
  });
}
