"use client";

import { useState, useEffect, useCallback } from "react";

const words = ["Link", "Koleksiyon", "Ürün", "Favorilerini", "İndirimleri"];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export function TypingRotator() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentWordIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      if (displayedText.length > 0) {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayedText, isDeleting, currentWord]);

  useEffect(() => {
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const delay = !isDeleting && displayedText.length === 0 ? PAUSE_AFTER_DELETE : speed;
    const timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, displayedText.length]);

  return (
    <span className="text-white italic font-['Cormorant_Garamond',serif] font-normal">
      {displayedText}
    </span>
  );
}
