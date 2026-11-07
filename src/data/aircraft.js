export const aircraft = {
  id: 'learjet-60',
  name: 'Learjet 60',
  variant: 'Serie base · Bombardier / Learjet',
  category: 'Jet ejecutivo',
  wingAreaM2: 24.57,
  wingspanM: 13.36,
  maxTakeoffMassKg: 10659,
  maxOperatingMach: 0.81,
  maxOperatingAltitudeFt: 51000,
  wingAreaStatus: 'published',
  massStatus: 'published',
  maxMachStatus: 'published',
  sources: [
    {label:'FAA Type Certificate Data Sheet A10CE',url:'https://drs.faa.gov/browse/excelExternalWindow/91C0A163E9A8409D85256CC20058E5E9.0001',kind:'Certificación'},
    {label:'EASA TCDS EASA.IM.A.212 · Learjet M60',url:'https://www.easa.europa.eu/en/downloads/7238/en',kind:'Limitaciones certificadas'},
    {label:'AOPA Pilot · Learjet 60XR: Bring It On',url:'https://www.aopa.org/news-and-media/all-news/2008/november/01/turbine-pilot-learjet-60xr-bring-it-on',kind:'Características publicadas · área alar'},
    {label:'NTSB · investigación ERA27MA026',url:'https://www.ntsb.gov/investigations/Pages/ERA27MA026.aspx',kind:'Caso Palm Beach'}
  ]
};

export const scenarioDefaults = { massKg: 9500, wingAreaM2: aircraft.wingAreaM2, clMax: 1.5, speedKts: 155, altitudeFt: 35000, mach: 0.78, bankDeg: 45, iceLossPct: 20 };

export const dataQuality = {
  documented: 'Dato técnico publicado',
  educational: 'Supuesto editable para explorar tendencias',
  simulated: 'Resultado calculado por Aero Lab',
  preliminary: 'Información preliminar de la investigación'
};
