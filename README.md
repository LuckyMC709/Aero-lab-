# Aero Lab

Laboratorio web interactivo para explorar aerodinámica, envolvente de vuelo y casos de investigación con parámetros y supuestos identificados por separado. Sitio estático, sin dependencias de ejecución, preparado para GitHub Pages.

## Ejecutar localmente

Serví esta carpeta con cualquier servidor estático (por ejemplo, `python -m http.server 8000`) y abrí `http://localhost:8000`. Los módulos ES de JavaScript no funcionan de forma consistente si se abre `index.html` directamente con `file://`.

## Publicar

1. Creá el repositorio público `aero-lab`.
2. Subí el contenido de esta carpeta a la rama `main`.
3. En **Settings → Pages → Build and deployment**, seleccioná **GitHub Actions**.
4. El workflow `.github/workflows/pages.yml` publica el sitio al hacer push a `main`.
5. La dirección del proyecto es `https://luckymc709.github.io/Aero-lab-/`; comprobá el valor final en **Settings → Pages**.

## Estructura

- `index.html`: estructura común y navegación.
- `styles.css`: sistema visual adaptable a móvil y escritorio.
- `src/data/aircraft.js`: ficha del Learjet 60, valores iniciales y referencias. Agregar una aeronave empieza por crear una ficha con el mismo esquema.
- `src/physics/models.js`: atmósfera ISA y ecuaciones reutilizables.
- `src/app.js`: páginas, gráficos SVG y controles.
- `.github/workflows/pages.yml`: despliegue estático.

La separación entre datos del avión, modelos físicos y vistas permite reutilizar módulos con nuevas aeronaves. Antes de incorporar otra ficha, añadí una fuente verificable y etiquetá cada parámetro como publicado, supuesto o calculado.

## Modelos incluidos

- Carga alar y sustentación a CL fijo.
- Coffin corner ilustrativo: Vs de 1 g según ISA comparada con el MMO del tipo.
- Engelamiento: reducción editable e hipotética de CLmáx.
- Factor de carga en viraje coordinado, nivelado y sostenido.
- Comparación entre dos escenarios y exportación JSON.
- Cronología del caso Learjet 60 N722BD en Palm Beach, con estado preliminar del NTSB.

## Exactitud y límites

El área alar (24,57 m²), envergadura (13,36 m) y MMO (M 0,81) se presentan como valores publicados del tipo, sujetos a las limitaciones del AFM aprobado para cada avión/serie. La masa de referencia y límites opcionales dependen de serie, configuración y aprobaciones.

CLmáx, degradación por hielo, las curvas CL-α y los valores modificables son **supuestos pedagógicos**, no datos de ensayos del Learjet 60. Las salidas son **simulaciones simplificadas**, no datos registrados del accidente. El análisis de Palm Beach permanece abierto; no se asigna causa probable.

Aero Lab es material educativo. No se debe usar para operación, planificación de vuelo, mantenimiento ni determinación de causas.

## Fuentes iniciales

- [FAA Type Certificate Data Sheet A10CE](https://drs.faa.gov/browse/excelExternalWindow/91C0A163E9A8409D85256CC20058E5E9.0001)
- [EASA TCDS EASA.IM.A.212 — Learjet M60](https://www.easa.europa.eu/en/downloads/7238/en)
- [AOPA Pilot — Learjet 60XR: Bring It On](https://www.aopa.org/news-and-media/all-news/2008/november/01/turbine-pilot-learjet-60xr-bring-it-on) (área alar y características publicadas)
- [NTSB — ERA27MA026](https://www.ntsb.gov/investigations/Pages/ERA27MA026.aspx)
- [FAA — guía para localizar TCDS](https://www.faa.gov/faq/how-can-i-locate-type-certificate-data-sheet-tcds-aircraft)
