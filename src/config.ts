// Configuración centralizada del sitio
// Edita aquí cualquier dato y se propaga a todos los componentes

export const SITE = {
  url: 'https://automatiza.com.pa',
  name: 'Automatiza',
  tagline: 'Automatización con IA para PYMEs en Panamá',
  description:
    'Implemento flujos automáticos, chatbots con IA, webs, apps y plugins de WordPress para PYMEs panameñas. Sin contratos largos. Resultados medibles desde el primer mes.',

  // Email
  email: 'hola@automatiza.com.pa',

  // WhatsApp Business — TODO: reemplazar cuando tengas el chip
  // Formato internacional sin + ni espacios. Panamá: 507XXXXXXXX
  whatsapp: '50760000000',
  whatsappMessage:
    'Hola, vengo de automatiza.com.pa, me interesa un diagnóstico gratis.',

  // Cal.com — TODO: crear cuenta gratis en cal.com y reemplazar este link
  calLink: 'https://cal.com/automatiza/diagnostico',

  // Redes sociales — opcionales, mostrar en footer si existen
  linkedin: 'https://linkedin.com/company/automatiza-pa',
  instagram: 'https://instagram.com/automatiza.pa',

  // Ubicación
  location: 'Ciudad de Panamá, Panamá',

  // n8n webhook URL — reemplazar con la URL real de n8n Cloud una vez activo
  chatWebhook: '/api/chat',
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
