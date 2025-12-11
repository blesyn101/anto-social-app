import axios from 'axios' ;

const API_URL = "http://localhost:3000/api/dailyverse";

export async function getDailyVerse() {
    const today = new Date().toISOString().split('T')[0]; // This gives date formate as YYYY-MM-DD

    // 1 Check localStorage first
    const cached = localStorage.getItem('dailyVerse');
    if (cached) {
        const verseData = JSON.parse(cached);

        // if same day → return cache instantly
        if (verseData.date === today) {
            return verseData;
        }
    }

    // 2 No cache or new day → fetch from API
    try {
        const res = await axios.get(API_URL);
        const verseData = {
            ref: res.data?.ref || " ",
            text: res.data?.text || " ",
            date: today
        };

        // 3 Save new verse in cache
        localStorage.setItem('dailyVerse', JSON.stringify(verseData));
        return verseData;
    } catch (err) {
        console.error("Error fetching daily verse:", err);
        // fallback data
    return {
      ref: "John 3:16",
     text: "For God so loved the world that he gave his only begoten son that whosoever believeth in him should not perish but have everlasting life.",
      date: today,
    };
    }
}








// import axios from 'axios' ;

// const API_URL = "https://discoverybiblestudy.org/daily/api/";

// export async function getDailyVerse() {
//     try {
//         const res = await axios.get(API_URL);
//         return {
//             ref: res.data?.reference || "Unknown",
//             text: res.data?.text || " " ,
//             date: res.data?.date || " "
//         };
//     } catch (error) {
//         console.error("Error fetching daily verse:", error);
//         return {
//             ref: "John 3:16",
//             text: "For God so loved the world that he gave his only begoten son that whosoever believeth in him should not perish but have everlasting life.",
//             date: null
//         };
//     }

// }