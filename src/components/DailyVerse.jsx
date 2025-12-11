import React, { useEffect, useState } from "react";
import { getDailyVerse } from "../services/bibleService";

export default function DailyVerse() {
    const [verse, setVerse] = useState(null);

    useEffect(() => {
        getDailyVerse().then(setVerse)
    }, 
     []);

     if(!verse) return <p className="text-white/70">Loading verse...</p>;

     // Function to decode HTML entities
     function decodeHTMLEntities(text) {
    const parser = new DOMParser();
    return parser.parseFromString(text, 'text/html').documentElement.textContent;
}
    

  return (
    <div className="daily-scriptures bg-primary/20 rounded-xl p-3 mb-2">
        <h2 className="title font-semibold mb-1">Today's Scripture {verse.date}</h2>
        <div className="scripture">
          <p className="font-semibold text-lg">{verse.ref}</p>
      <p className="opacity-90 mt-1">{decodeHTMLEntities(verse.text)}</p>

        </div>
       </div>
  )
}
