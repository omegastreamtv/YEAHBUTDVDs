import { useState } from 'react';
import { Emote } from '@/util/types';

export function useEmote(emotes: Emote[]): [Emote | null, () => void] {
  const [currentEmote, setCurrentEmote] = useState<Emote | null>(null);

  const changeEmote = () => {
    const selectedEmotes = emotes.filter((e: Emote) => e.selected);
    const randomIndex = Math.floor(Math.random() * selectedEmotes.length);
    const randomEmote = selectedEmotes[randomIndex];

    setCurrentEmote(randomEmote);
  };

  return [currentEmote, changeEmote];
}