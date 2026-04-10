import type { TokenData } from "@/types";

// Cache for access tokens (in-memory, resets on server restart; use Redis/DB for persistence)
const tokenCache: Record<string, { token: string; expiry: number }> = {};

async function refreshToken(
  provider: "spotify" | "strava",
  refreshToken: string,
): Promise<TokenData | null> {
  const clientId = import.meta.env[`${provider.toUpperCase()}_CLIENT_ID`];
  const clientSecret = import.meta.env[
    `${provider.toUpperCase()}_CLIENT_SECRET`
  ];

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const auth = btoa(`${clientId}:${clientSecret}`);
  const url =
    provider === "spotify"
      ? "https://accounts.spotify.com/api/token"
      : "https://www.strava.com/api/v3/oauth/token";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    if (!res.ok) return null;
    const data: TokenData = await res.json();

    // Cache the new token
    const expiry = Date.now() + data.expires_in * 1000;
    tokenCache[provider] = { token: data.access_token, expiry };

    return data;
  } catch {
    return null;
  }
}

export async function getValidAccessToken(
  provider: "spotify" | "strava",
): Promise<string | null> {
  const oldRefreshToken = import.meta.env[
    `${provider.toUpperCase()}_REFRESH_TOKEN`
  ];
  if (!oldRefreshToken) return null;

  const cached = tokenCache[provider];
  if (cached && Date.now() < cached.expiry - 60000) {
    // Refresh 1 min early
    return cached.token;
  }

  // Token expired or not cached, refresh it
  const newTokens = await refreshToken(provider, oldRefreshToken);
  console.log(newTokens);
  return newTokens?.access_token || null;
}
