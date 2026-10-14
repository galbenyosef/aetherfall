// assets__fx3d-DiRK8ozf 09 — blending
// Lines 31053-31073 of readable/assets__fx3d-DiRK8ozf.pretty.js (statement-aligned).
function Of(e, t) {
  return new Da({
    glslVersion: Ze,
    vertexShader: Eu,
    fragmentShader: xf,
    defines: Tu(!0),
    uniforms: {
      uCam: { value: new $t() },
      uTime: t,
      uEnc: { value: 1 },
      uVtxSq: { value: 0.7 },
      uShock: { value: e.shock },
      uShim: { value: e.shim },
      uVtx: { value: e.vtx },
      uVtxB: { value: e.vtxB },
    },
    depthTest: !1,
    depthWrite: !1,
    blending: 0,
  });
}
