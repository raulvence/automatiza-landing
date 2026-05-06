# automatiza.com.pa

Landing page de Automatiza — automatización con IA para PYMEs en Panamá.

Stack: **Astro 4 + Tailwind CSS + Cloudflare Pages**.

---

## 🚀 Quickstart

Necesitas Node 18+ instalado.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar dev server (http://localhost:4321)
npm run dev

# 3. Build de producción (genera ./dist)
npm run build

# 4. Preview del build
npm run preview
```

---

## ✏️ Configuración rápida

**Todo lo editable está centralizado en `src/config.ts`.** No tienes que tocar componentes.

Ahí editas:
- `whatsapp` — el número con código país (Panamá: `507XXXXXXXX`). **Pendiente cuando compres el chip.**
- `email` — `hola@automatiza.com.pa` (ya configurado)
- `calLink` — link de Cal.com (pendiente de crear cuenta)
- Redes sociales — opcional

El componente `Proof.astro` (sección "Trabajo") tiene los proyectos definidos arriba como un array. Edita ahí cuando quieras agregar/cambiar casos.

---

## 🌐 Deploy en Cloudflare Pages

### Paso 1: Subir a GitHub
```bash
git init
git add .
git commit -m "Initial commit: automatiza landing"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/automatiza-landing.git
git push -u origin main
```

### Paso 2: Conectar Cloudflare Pages
1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Selecciona el repo `automatiza-landing`
3. Configuración del build:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version** (opcional, en Environment variables): `NODE_VERSION = 20`
4. **Save and Deploy**

### Paso 3: Conectar el dominio
1. Una vez deployado, en el proyecto de Cloudflare Pages: **Custom domains** → **Set up a custom domain**
2. Agrega `automatiza.com.pa`
3. Cloudflare detecta automáticamente que el DNS está en la misma cuenta y configura todo solo
4. Repite con `www.automatiza.com.pa` (recomendado para redirección)

SSL se activa automáticamente en minutos.

---

## 🎨 Sistema de diseño

- **Paleta**: blanco hueso + negro carbón + acento verde lima
- **Tipografía**: Cabinet Grotesk (display), Satoshi (body), JetBrains Mono (técnico) — todas desde Fontshare
- **Filosofía**: editorial técnico, no SaaS startup. Mucho whitespace, tipografía dramática, asimetría sutil.

Todos los tokens están en `tailwind.config.mjs` y `src/styles/global.css`.

---

## 📂 Estructura

```
src/
├── components/        # Componentes Astro reutilizables
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── Proof.astro
│   ├── Process.astro
│   ├── FinalCTA.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro   # HTML wrapper con SEO + structured data
├── pages/
│   └── index.astro    # Página principal (combina componentes)
├── styles/
│   └── global.css     # CSS global + variables + utilidades custom
└── config.ts          # 👈 Edita aquí WhatsApp, email, Cal.com, etc.
```

---

## 📋 Checklist post-deploy

- [ ] WhatsApp Business activo y número actualizado en `src/config.ts`
- [ ] Cuenta de Cal.com creada y link en `src/config.ts`
- [ ] Email `hola@automatiza.com.pa` enrutado en Cloudflare Email Routing
- [ ] Pulir copy de la sección "Trabajo" con métricas concretas
- [ ] Crear handles de redes (`@automatiza.pa` en Instagram, página en LinkedIn)
- [ ] Submit del sitio a Google Search Console
- [ ] Generar OG image (`og-image.png` en `/public`) para compartir en WhatsApp/redes
