import { getStravaCard, getSpotifyCard } from "@/utils/get-dynamic-cards";

export async function GET() {
  try {
    const cards = await Promise.all([getStravaCard(), getSpotifyCard()]);

    return new Response(JSON.stringify(cards.filter(Boolean)), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
