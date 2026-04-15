export async function GET() {
  const res = await fetch(process.env.VERCEL_DEPLOY_HOOK!, {
    method: "POST",
  });

  return new Response("Rebuild triggered", { status: 200 });
}
