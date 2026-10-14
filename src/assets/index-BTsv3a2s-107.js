// index-BTsv3a2s 107 — storm
// Lines 51898-51937 of readable/assets/index-BTsv3a2s.pretty.js (statement-aligned).
function Mne() {
  let [e, t] = Tm(236, 160, `void`, 47),
    n = [
      [60, 70, !1],
      [128, 52, !0],
      [186, 96, !1],
      [96, 128, !1],
    ];
  for (let [e, r, i] of n)
    if (!i)
      for (let n = 0; n < 3; n++)
        OO(t, e + 10, e + 40, r - 30 + n * 10, 0.8, e + n, 1);
  (n.forEach(([e, n, r], i) => {
    if (r) Em(t, xg(`unseen`)[0], 15, 44, e, n, 8);
    else if (i === 3) {
      let r = MO()[2];
      t.drawImage(r, e - 21, n - 44);
    } else
      Em(
        t,
        AO(0, (e) => L(e, i, 61) > 0.3, { hem: !1, tint: SO[3], tintA: 0.2 }),
        15,
        44,
        e,
        n,
        0,
      );
  }),
    QE(t, `storm`, 48, 136, 1, !0),
    QE(t, `cryo`, 206, 140, 3));
  let r = M(236, 160);
  return (
    z(r[1], 54, 112, 93, 102, rm.storm[3]),
    V(r[1], 96, 100, 6, 6, rm.storm, 2),
    bm(t, r[0], 0, 0, 2, 0.8),
    t.drawImage(r[0], 0, 0),
    Dm(t, 236, 160, 0.6),
    e
  );
}
