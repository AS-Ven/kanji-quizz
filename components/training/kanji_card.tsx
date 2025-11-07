'use client'

import { useSessionStorage } from '@/hooks/useSessionStorage';
import kanji_list from "@/data/data_1.json"

export const TrainingKanjiCard = () => {
	const [kanji, setKanji] = useSessionStorage();

  const updateKanji = () => {
    setKanji(kanji_list[Math.floor(Math.random() * kanji_list.length)]);
  };

  return (
    <div>
      <h2>{kanji.kanji}</h2>
      <h3>{kanji.meaning[0]}</h3>
      <button onClick={updateKanji}>Swap Kanji</button>
    </div>
  );
}