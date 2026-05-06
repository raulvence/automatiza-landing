import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, locals }) => {
  const cf = (request as any).cf;
  const country = cf?.country;

  if (country && country !== 'PA') {
    return new Response(JSON.stringify({ error: 'Servicio disponible solo en Panamá.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await request.json();
  const n8nUrl = (locals.runtime?.env?.N8N_WEBHOOK_URL) as string;
  const secret = (locals.runtime?.env?.WEBHOOK_SECRET) as string;

  if (!n8nUrl) {
    return new Response(JSON.stringify({ error: 'Webhook no configurado.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = await fetch(n8nUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Automatiza-Token': secret ?? '',
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
};
