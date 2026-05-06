export async function onRequestPost(context) {
  // Geo-filter: solo Panama (y localhost para dev)
  const country = context.request.cf?.country;
  if (country && country !== 'PA') {
    return new Response(JSON.stringify({ error: 'Servicio disponible solo en Panamá.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const body = await context.request.json();
  const n8nUrl = context.env.N8N_WEBHOOK_URL;

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
      'X-Automatiza-Token': context.env.WEBHOOK_SECRET ?? '',
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
