const G = 9.80665;
const R = 287.05287;
const GAMMA = 1.4;
export const KNOT_TO_MS = 0.514444;

export function isa(altitudeFt) {
  const h = Math.max(0, altitudeFt) * 0.3048;
  const t = h <= 11000 ? 288.15 - 0.0065 * h : 216.65;
  const p = h <= 11000
    ? 101325 * (t / 288.15) ** 5.2558797
    : 22632.06 * Math.exp(-G * (h - 11000) / (R * t));
  return {temperatureK:t, pressurePa:p, densityKgM3:p/(R*t), speedOfSoundMS:Math.sqrt(GAMMA*R*t)};
}

export function stallSpeedMs({massKg, wingAreaM2, clMax, densityKgM3}) {
  if (massKg <= 0 || wingAreaM2 <= 0 || clMax <= 0 || densityKgM3 <= 0) return NaN;
  return Math.sqrt((2 * massKg * G) / (densityKgM3 * wingAreaM2 * clMax));
}
export function stallSpeedKts(params) { return stallSpeedMs(params) / KNOT_TO_MS; }
export function liftN({densityKgM3, speedMs, wingAreaM2, cl}) { return 0.5*densityKgM3*speedMs**2*wingAreaM2*cl; }
export function wingLoadingKgM2(massKg, wingAreaM2) { return massKg/wingAreaM2; }
export function loadFactorFromBank(bankDeg) { return 1/Math.cos(Math.min(85,Math.max(0,bankDeg))*Math.PI/180); }
export function machFromSpeed(speedMs, altitudeFt) { return speedMs/isa(altitudeFt).speedOfSoundMS; }
export function stallMach({massKg, wingAreaM2, clMax, altitudeFt, loadFactor=1}) {
  const air = isa(altitudeFt);
  return stallSpeedMs({massKg:massKg*loadFactor,wingAreaM2,clMax,densityKgM3:air.densityKgM3})/air.speedOfSoundMS;
}
export function gLoadAt(bankDeg) { return loadFactorFromBank(bankDeg); }
export function icedClMax(cleanClMax, lossPct) { return cleanClMax*(1-Math.min(0.8,Math.max(0,lossPct)/100)); }
export function fmt(value, digits=0) { return Number(value).toLocaleString('es-AR',{minimumFractionDigits:digits,maximumFractionDigits:digits}); }
export function chartText(x,y,text,opts={}) {
  const {fill='#789093',size=10,anchor='start'}=opts;
  return `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" text-anchor="${anchor}" font-family="DM Mono,monospace">${text}</text>`;
}

export function exportSnapshot(snapshot) {
  const blob = new Blob([JSON.stringify({...snapshot, exportedAt:new Date().toISOString(), format:'Aero Lab scenario v1'},null,2)],{type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download='aero-lab-escenario.json'; a.click();
  URL.revokeObjectURL(url);
}
