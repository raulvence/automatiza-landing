export async function onRequestPost(context) {
  const { message } = await context.request.json();
  const apiKey = context.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key no configurada' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: `Eres el asistente de Automatiza, empresa de automatización con IA para PYMEs panameñas operada por Raul Vence desde Ciudad de Panamá.
Responde en español, de forma directa y concisa. Máximo 3 oraciones por respuesta.
Servicios: Chatbots WhatsApp con IA (desde $600 + mensualidad), Automatización de procesos n8n (desde $400/flujo), Webs & Plugins WordPress (desde $800), Generación de imágenes IA para WordPress (desde $500), Desarrollo de apps (desde $1,200).
Contacto: hola@automatiza.com.pa. Diagnóstico gratis de 30 min disponible.
Si preguntan por precios, dales los números exactos. Si quieren contratar, diles que escriban al email o WhatsApp.`,
      messages: [{ role: 'user', content: message }],
    }),
  });

  const data = await res.json();
  const reply = data.content?.[0]?.text ?? 'Error al procesar la respuesta.';

  return new Response(JSON.stringify({ reply }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
