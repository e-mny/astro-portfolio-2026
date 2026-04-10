import { useEffect, useState } from "react";
import type { HeroCard } from "@/types";

function Card({ card, index }: { card: HeroCard; index: number }) {
  return (
    <div className="card">
      <p>{card.label}</p>
      <p>{card.value}</p>
    </div>
  );
}

export default function DynamicCards() {
  const [cards, setCards] = useState<HeroCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cards.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data ?? []);
      })
      .catch((err) => {
        console.error("Failed to fetch dynamic cards", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null; // or skeleton

  return (
    <>
      {cards.map((card, i) => (
        <Card key={i} card={card} index={i} />
      ))}
    </>
  );
}
