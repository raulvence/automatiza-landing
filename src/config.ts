// Configuración centralizada del sitio
// Edita aquí cualquier dato y se propaga a todos los componentes

export const SITE = {
  url: 'https://automatiza.com.pa',
  name: 'Automatiza',
  tagline: 'Automatización con IA para PYMEs en Panamá',
  titleSeo: 'Automatización con IA para Empresas en Panamá | Automatiza',
  description:
    'Chatbots WhatsApp, automatización de procesos y desarrollo web con IA para PYMEs en Panamá. Implementación en días, no meses. Diagnóstico gratis. Ciudad de Panamá.',

  // Email
  email: 'hola@automatiza.com.pa',

  // WhatsApp Business — TODO: reemplazar cuando tengas el chip
  // Formato internacional sin + ni espacios. Panamá: 507XXXXXXXX
  whatsapp: '50763358201',
  whatsappMessage:
    'Hola, vengo de automatiza.com.pa, me interesa un diagnóstico gratis.',

  // Cal.com — TODO: crear cuenta gratis en cal.com y reemplazar este link
  calLink: 'https://cal.com/raul-vence-lj1cij/30min',
  calLinkShort: 'https://cal.com/raul-vence-lj1cij/15min',

  // Redes sociales — opcionales, mostrar en footer si existen
  linkedin: 'https://linkedin.com/company/automatiza-pa',
  instagram: 'https://instagram.com/automatiza.pa',

  // Ubicación
  location: 'Ciudad de Panamá, Panamá',

  // n8n webhook URL — reemplazar con la URL real de n8n Cloud una vez activo
  chatWebhook: 'https://automatizapa.app.n8n.cloud/webhook/automatiza-chat',
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
