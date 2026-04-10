import type { HeroCard, Track } from "@/types";
import { getValidAccessToken } from "./oauth";

async function fetchJson<T>(
  url: string,
  options?: { headers?: Record<string, string> },
): Promise<T | null> {
  try {
    const res = await fetch(url, options);
    if (!res.ok) console.log(res);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

// Server-side
export async function getStravaCard(): Promise<HeroCard | null> {
  const token = await getValidAccessToken("strava");
  const id = import.meta.env.PROD
    ? process.env["STRAVA_ATHLETE_ID"]
    : import.meta.env["STRAVA_ATHLETE_ID"];
  console.log("STRAVA: ", token, id);
  if (!token) return null;

  const data = await fetchJson<{
    recent_run_totals: { distance: number };
    ytd_run_totals: { distance: number };
  }>(`https://www.strava.com/api/v3/athletes/${id}/stats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const distance_this_month = data
    ? (data.recent_run_totals.distance / 1000).toFixed(2)
    : null;
  const distance_ytd = data
    ? (data.ytd_run_totals.distance / 1000).toFixed(2)
    : null;
  if (!data) return null;
  return {
    icon: "mdi:run",
    label: "Running (Strava)",
    value: `This month: ${distance_this_month} km | This year: ${distance_ytd} km`,
  };
}

export async function getMonkeytypeCard(): Promise<HeroCard | null> {
  const ape_key = import.meta.env.PROD
    ? process.env["MONKEYTYPE_APE_KEY"]
    : import.meta.env["MONKEYTYPE_APE_KEY"];
  type MonkeytypeData = {
    [duration: string]: { wpm: number; acc?: number }[]; // index signature
  };

  const data = await fetchJson<{ data: MonkeytypeData }>(
    "https://api.monkeytype.com/users/personalBests?mode=time",
    {
      headers: {
        Authorization: `ApeKey ${ape_key}`,
      },
    },
  );
  if (!data) return null;

  const entries = ["30", "60"] // 15, 30, 60
    .map((key) => {
      const item = data.data[key]?.[0];
      return item ? `${key}s: ${item.wpm.toFixed(2)}wpm` : null;
    })
    .filter(Boolean)
    .join(" | ");

  return {
    icon: "mdi:keyboard",
    label: "Monkeytype",
    value: entries || "No data",
  };
}

export async function getSpotifyCard(): Promise<HeroCard | null> {
  const token = await getValidAccessToken("spotify");
  console.log("Spotify: ", token);

  if (!token) return null;

  const data = await fetchJson<{ items: Track[] }>(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1",
    { headers: { Authorization: `Bearer ${token}` } },
  );

  const track = data?.items[0];

  if (!track) {
    return {
      icon: "mdi:spotify",
      label: "Spotify",
      value: "No favourites this month",
    };
  }

  return {
    icon: "mdi:spotify",
    label: "On Repeat (Spotify)",
    value: `${track.name} - ${track.artists.map((a) => a.name).join(", ")}`,
    image: {
      url: track.album?.images?.[0]?.url,
      height: track.album?.images?.[0]?.height,
      width: track.album?.images?.[0]?.width,
    },
  };
}

// Client-side
export async function getUltiscoreCard(): Promise<HeroCard | null> {
  const data = await fetchJson<{
    stats: { games: number; wins: number; goals: number; assists: number };
    data: [];
  }>("https://api.ultiscore.com/api/players/enoch.99/profile-stats");

  if (!data) return null;
  const winRate =
    data.stats.games > 0
      ? ((data.stats.wins / data.stats.games) * 100).toFixed(1)
      : "0";
  return {
    icon: "mdi:disc",
    label: "Competitve Frisbee",
    value: `Games: ${data.stats.games}, Wins: ${data.stats.wins} | Goals: ${data.stats.goals}, Assists: ${data.stats.assists} | Win Rate: ${winRate}%`,
  };
}
