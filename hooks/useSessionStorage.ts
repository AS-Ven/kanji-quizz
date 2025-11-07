"use client";

import { useState, useEffect } from "react";
import kanji_list from "@/data/data_1.json"

export function useSessionStorage() {
  const key = "kanji"
  const [value, setValue] = useState(() => {
    const stored = sessionStorage.getItem(key);
    return stored ? JSON.parse(stored) : kanji_list[Math.floor(Math.random() * kanji_list.length)];
  });

  useEffect(() => {
    // Update sessionStorage whenever the value changes
    if (value !== undefined) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
