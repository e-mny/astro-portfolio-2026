export interface HeadProps {
  title: string;
  description: string;
  image?: string;
}

export type HeroCard = {
  icon: string;
  label: string;
  value: string;
  image?: {
    url: string;
    height: number;
    width: number;
  };
};

export interface TokenData {
  access_token: string;
  expires_in: number; // Seconds until expiry
  refresh_token?: string;
}

export type Track = {
  name: string;
  artists: { name: string }[];
  album: {
    images: [
      {
        url: string;
        height: number;
        width: number;
      },
    ];
  };
};
