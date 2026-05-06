# Automatiza — contexto del proyecto

> Este archivo es la memoria persistente del proyecto. Léelo completo antes de cualquier cambio.

---

## Negocio

**Automatiza** es la marca operativa de Chief (Raul Vence), dev solo basado en Ciudad de Panamá. Vende servicios de automatización con IA a PYMEs panameñas.

**Audiencia objetivo**: dueños de pymes en Panamá, 35–55 años, no muy técnicos, que pierden horas semanales en procesos repetitivos y no saben que se pueden automatizar. Hablan español, valoran la confianza personal y necesitan ver señales claras de que el proveedor sabe lo que hace.

**Servicios y precios actuales**:

1. **Chatbots con IA por WhatsApp** — desde $600 + mensualidad. Stack: WhatsApp Business API, Claude API, n8n.
2. **Automatización de procesos** — desde $400 por flujo. Stack: n8n, Python, AWS Lambda.
3. **Facturación electrónica DGI** — desde $500 implementación. Stack: DGI SOAP (feDescFE/feConsFE), zeep, Python.
4. **Soporte mensual opcional** — desde $150/mes (retainer).

**Posicionamiento**: NO vende "transformación digital". Vende automatizaciones específicas con resultados medibles desde el primer mes. Sin contratos largos, pago por avance.

---

## Estado actual

| Elemento | Estado |
|---|---|
| Dominio `automatiza.com.pa` | ✅ Comprado, 2 años |
| DNS | ✅ Cloudflare (registrar requirió nameservers antes de la compra) |
| Email `hola@automatiza.com.pa` | ✅ Cloudflare Email Routing configurado |
| WhatsApp Business | ⏳ Pendiente (Chief debe comprar chip) |
| Cal.com | ⏳ Pendiente (cuenta gratis por crear) |
| Repo GitHub | ⏳ Pendiente |
| Cloudflare Pages deploy | ⏳ Pendiente |
| OG image | ⏳ Pendiente |
| Handles redes (`@automatiza.pa` IG, FB, LinkedIn) | ⏳ Pendientes — reservar antes de que alguien los tome |

**Donde está editable todo el contenido cambiable**: `src/config.ts`. WhatsApp, Cal.com link, email, redes — todo centralizado ahí. NO tocar componentes para cambiar datos.

---

## Stack técnico

- **Framework**: Astro 4.16 (estable, evitar Astro 5 hasta que pase un tiempo)
- **CSS**: Tailwind CSS 3.4 con tokens custom en OKLCH
- **Hosting**: Cloudflare Pages (gratis, mismo dashboard que el DNS, permite uso comercial)
- **Build**: `npm run build` → `dist/`. Auto-detectado por Cloudflare Pages.
- **Node**: 20+ recomendado.
- **Fuentes**: Google Fonts (Bricolage Grotesque, Geist, Geist Mono) — todas free comercial.

---

## Identidad visual

**Concepto rector**: "Live System". La página entera debe sentirse como un sistema corriendo en vivo, no como un sitio con animaciones decorativas. La forma comunica el fondo: "yo automatizo cosas, mira mi propia página automática". Esto es defensible conceptualmente y diferenciado en el mercado panameño donde casi todo el B2B usa azul corporativo y diseño plano.

**Paleta OKLCH (modo oscuro cálido)**:

```css
--bg: oklch(15% 0.012 90)        /* fondo casi negro cálido */
--surface: oklch(20% 0.014 90)   /* secciones / cards */
--elevated: oklch(24% 0.014 90)  /* hover states */
--ink: oklch(96% 0.005 90)       /* texto principal */
--muted: oklch(62% 0.014 90)     /* texto secundario */
--dim: oklch(45% 0.014 90)       /* texto terciario */
--line: oklch(28% 0.014 90)      /* bordes */
--accent: oklch(85% 0.22 130)    /* lima eléctrico — único acento vibrante */
--warn: oklch(78% 0.16 50)       /* naranja para detalles secundarios */
```

**Tipografía**:
- **Bricolage Grotesque** (display, variable) — headlines y títulos. Pesos 300–800.
- **Geist** (sans, body) — cuerpo de texto y UI. Pesos 300–700.
- **Geist Mono** (mono) — labels técnicos, métricas, terminal-like text.

**Reglas de diseño que NO violar**:
- Cero `Inter`, `Roboto`, `Arial`, `system-ui` como fuente principal.
- Cero gradientes morados/cyan estilo SaaS.
- Cero glassmorphism, blur cards, glassy effects.
- Cero `cards inside cards`.
- Cero `gray text on colored backgrounds`.
- Negro NO puro (`#000`) — siempre con tinta cálida.
- Easing: usar `cubic-bezier(0.16, 1, 0.3, 1)` (preferido). Evitar bounce/elastic.
- Respetar `prefers-reduced-motion`.

---

## Voz y copy

**Estilo de comunicación con el usuario y en marketing**:
- Directo, conciso, sin filler.
- Español neutro panameño (no españolizado, no mexicano).
- Confiado sin ser arrogante. "En días, no en meses." vs "Te ayudaremos a lograr la transformación digital".
- Específico vs vago. Precios claros, plazos claros, qué hace y qué no hace.
- Evitar palabras vacías: "sinergia", "transformación", "potenciar", "soluciones", "innovación".
- Preferir verbos concretos: implemento, monto, integro, automatizo.

**Headline actual del hero**: "Tu operación, en piloto automático. En días, no en meses."

**Tagline corto**: "Automatización con IA para PYMEs en Panamá."

---

## Estructura del proyecto

```
src/
├── config.ts          ← TODO lo editable (WhatsApp, email, Cal.com, etc.)
├── components/
│   ├── Nav.astro
│   ├── Hero.astro     ← Live system viz: counters, workflow SVG, terminal
│   ├── Services.astro ← 3 cards "máquinas"
│   ├── Proof.astro    ← Terminal-style, proyectos reales en producción
│   ├── Process.astro  ← Timeline horizontal animada
│   ├── FinalCTA.astro
│   └── Footer.astro   ← Status bar inferior tipo IDE
├── layouts/
│   └── Layout.astro   ← Metadata SEO + structured data ProfessionalService
├── pages/
│   └── index.astro
└── styles/
    └── global.css     ← Tokens OKLCH, animaciones, utilidades
```

---

## Cómo trabajar en este proyecto

**Antes de hacer cambios**:
1. Lee este archivo completo.
2. Lee `src/config.ts` y `src/styles/global.css` para entender los tokens.
3. Si el cambio toca diseño, pregúntate: ¿esto refuerza el concepto "live system" o lo diluye?

**Cuando agregues secciones nuevas**:
- Mantén el border-top en `border-line` para separar de la anterior.
- Header de sección con `<p class="label-mono">§ NN · Nombre</p>` y luego un h2 con tipo display gigante (clamp 2.25rem → 5.5vw → 4.5rem).
- Si hay un acento, una sola palabra/frase corta en `text-accent-dim` itálica.

**Al ajustar copy**:
- Headlines en 2–3 líneas máximo.
- La línea destacada en italic + accent + font-medium (no bold). Es un detalle editorial intencional.
- Subheadlines cortos, punzantes. Body más largo en muted color.

**Al implementar interacciones**:
- Hover: nunca solo `opacity` o `bg color`. Combinar al menos 2 propiedades (translate + border-color, etc.).
- Stagger reveals con `reveal-1` a `reveal-6` para entradas de hero.
- Motion sutil pero presente. No estático, no ruidoso.

---

## Pendientes priorizados

1. **Crear handles de redes**: `@automatiza.pa` en Instagram, página en LinkedIn, `Automatiza Panamá` en Facebook. Reservar antes de que alguien los tome.
2. **Cuenta Cal.com**: crear gratis, slug `/automatiza/diagnostico`. Link a poner en `src/config.ts`.
3. **WhatsApp Business**: comprar chip, activar, número va en `src/config.ts` formato `507XXXXXXXX`.
4. **Subir a GitHub** y conectar a Cloudflare Pages siguiendo el README.
5. **Pulir sección Proof** con métricas reales (uptime medido, posts/mes contados, etc.) cuando estén disponibles.
6. **OG image** (`public/og-image.png`, 1200×630) para previews de WhatsApp/redes. Usar la misma paleta y tipografía Bricolage para consistencia.
7. **Google Search Console**: submit del sitio una vez en producción.

---

## Plan de negocio (contexto, no para tocar la web)

El proyecto Automatiza es una respuesta a una situación económica difícil. Objetivo: facturar dentro de las próximas 4 semanas. La estrategia priorizada:

- **Servicios con menor ciclo de venta primero**: automatización n8n y DGI (no apps a la medida).
- **Mercado local panameño** (no Fiverr/Upwork) — mejor pago, menos competencia capaz.
- **Outreach diario en LinkedIn + grupos FB de emprendedores + Cámara de Comercio**.
- **Diagnóstico gratis 30 min como gancho** — el calendario y WhatsApp son los dos puntos de conversión clave de la landing.
- **Producción pasiva**: si Chief tiene tiempo entre proyectos, completar Accountathing (app de facturación DGI propia) para Play Store, pero NO como prioridad principal.

---

## Notas de Chief para los siguientes pasos en Claude Code

- Estilo de respuesta preferido: **directo, sin filler, sin opciones múltiples cuando hay una decisión clara**.
- Si una decisión es obvia, tomarla y avanzar. Si hay que preguntar, una sola pregunta concreta.
- En Spanish para conversación, código y comentarios en inglés es OK pero copy en pantalla siempre en español neutro.
- El NAB6 (Windows 11, 32GB RAM) es el server local — útil para correr el dev server y para self-hosting de herramientas internas, NO para hostear la landing pública.
