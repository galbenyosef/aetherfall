// index-BTsv3a2s 204 — dir
// Lines 127645-127803 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function gZ() {
  if (vZ) return [vZ];
  try {
    let e = typeof navigator < `u` ? navigator.getGamepads?.() : null;
    return e ? Array.from(e) : [];
  } catch {
    return [];
  }
}
function _Z() {
  return gZ().some((e) => !!e && e.connected);
}
if (hZ) {
  (window.addEventListener(`gamepadconnected`, (e) => lZ(e.gamepad?.id ?? ``)),
    window.addEventListener(`gamepaddisconnected`, () => uZ(_Z())));
  let e = () => sZ(tZ);
  (window.addEventListener(`keydown`, (t) => t.isTrusted && e(), !0),
    window.addEventListener(`pointerdown`, (t) => t.isTrusted && e(), !0),
    window.addEventListener(
      `pointermove`,
      (t) =>
        t.isTrusted &&
        t.pointerType === `mouse` &&
        (t.movementX || t.movementY) &&
        e(),
      { capture: !0, passive: !0 },
    ));
}
var vZ = null,
  yZ = {
    idris: {
      name: `Master Idris Calloway`,
      title: `Senior of Marizon's Circle`,
      color: `#e6e0f5`,
      portrait: `idris`,
    },
    varra: {
      name: `Varra Kest`,
      title: `High Mage · Pyromancer`,
      color: S.pyro.colors.glow,
      portrait: `varra`,
    },
    ysolde: {
      name: `Ysolde Maren`,
      title: `High Mage · Cryomancer`,
      color: S.cryo.colors.glow,
      portrait: `ysolde`,
    },
    teodor: {
      name: `Teodor Brask`,
      title: `High Mage · Stormcaller`,
      color: S.storm.colors.glow,
      portrait: `teodor`,
    },
    oriel: {
      name: `Oriel Duskwright`,
      title: `High Mage · Voidweaver`,
      color: S.void.colors.trim,
      portrait: `oriel`,
    },
    holloway: {
      name: `Captain Bram Holloway`,
      title: `Marizon Watch`,
      color: `#d8c49a`,
      portrait: `holloway`,
    },
    watchman: {
      name: `Watchman Pell`,
      title: `Marizon Watch`,
      color: `#b9c4d6`,
      portrait: `watchman`,
    },
    lillith: {
      name: `Lillith Highmore`,
      title: `The First Key`,
      color: `#ff4d6a`,
      portrait: `lillith`,
    },
    crystal: {
      name: `The Aether Crystal`,
      title: `in Idris's voice`,
      color: `#8ef6ff`,
      portrait: `crystal`,
    },
  },
  bZ = Mr + 0.5,
  xZ = Nr,
  SZ = { x: Ar + 96, y: jr + 0.4 },
  CZ = { x: bZ, y: jr + 34 },
  wZ = {
    idris: { x: bZ + 12, y: xZ + 0.6, dir: 2 },
    varra: { x: bZ, y: xZ + 9.2, dir: 0 },
    ysolde: { x: bZ, y: xZ - 5.5, dir: 1 },
    teodor: { x: bZ + 12, y: xZ + 0.6, dir: 2 },
    oriel: { x: bZ - 12, y: xZ + 0.6, dir: 3 },
    holloway: { x: bZ + 2.1, y: xZ + 31.2, dir: 0 },
    watchman: { x: SZ.x - 1.6, y: SZ.y + 1.1, dir: 2 },
    lillith: { x: SZ.x + 5.5, y: SZ.y - 0.8, dir: 0 },
  },
  TZ = { hero: { x: bZ, y: xZ + 2.5 }, idris: { x: bZ + 1.4, y: xZ + 2.1 } },
  EZ = { x: SZ.x - 4.2, y: SZ.y + 0.4, dir: 2 },
  DZ = { x: SZ.x - 0.4, y: SZ.y + 0.2 },
  OZ = { x: SZ.x - 1.8, y: SZ.y - 0.8, dir: 2 },
  kZ = { x: bZ, y: xZ - 3.5 },
  AZ = 1e3,
  jZ = [
    { name: `Aldmere`, x: 0.45, y: 0.38 },
    { name: `Marizon`, x: 0.53, y: 0.46 },
    { name: `Highmore`, x: 0.42, y: 0.53 },
    { name: `Pellandor`, x: 0.6, y: 0.36 },
    { name: `Cindergate`, x: 0.46, y: 0.84 },
    { name: `Solmara`, x: 0.57, y: 0.88 },
    { name: `Brassdeep`, x: 0.36, y: 0.78 },
    { name: `Redcairn`, x: 0.62, y: 0.75 },
    { name: `Stillhold`, x: 0.42, y: 0.15 },
    { name: `Nethermere`, x: 0.55, y: 0.2 },
    { name: `Skarn`, x: 0.65, y: 0.1 },
    { name: `Hearthholm`, x: 0.5, y: 0.06 },
    { name: `Thunderspire`, x: 0.84, y: 0.36 },
    { name: `Slatebridge`, x: 0.77, y: 0.52 },
    { name: `Highwind`, x: 0.9, y: 0.54 },
    { name: `Corvane`, x: 0.74, y: 0.27 },
    { name: `Vespertine`, x: 0.16, y: 0.44 },
    { name: `Duskford`, x: 0.24, y: 0.6 },
    { name: `Saltmarrow`, x: 0.09, y: 0.62 },
    { name: `Farlight`, x: 0.08, y: 0.3 },
  ],
  MZ = { name: `Old Carthis`, x: 0.5, y: 0.64 },
  NZ = [
    { name: `THE RIME MARCHES`, x: 0.53, y: -0.05 },
    { name: `EMBERREACH`, x: 0.5, y: 0.97 },
    { name: `STORMCROWN`, x: 0.83, y: 0.2 },
    { name: `DUSKVEIL`, x: 0.15, y: 0.2 },
    { name: `HEARTLANDS`, x: 0.5, y: 0.3 },
  ],
  PZ = [
    `Marizon`,
    `Highmore`,
    `Cindergate`,
    `Nethermere`,
    `Slatebridge`,
    `Duskford`,
    `Vespertine`,
  ];
function FZ(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function IZ(e, t, n) {
  return e + (t - e) * n;
}
function LZ(e) {
  return (
    (e = FZ(e, 0, 1)),
    e < 0.5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2
  );
}
function RZ(e) {
  return { x: (Ar + Math.cos(e) * Pr) * 16, y: (jr + Math.sin(e) * Pr) * 16 };
}
