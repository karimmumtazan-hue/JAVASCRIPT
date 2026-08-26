// 📦 Data Awal
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// ==========================================
// 🧩 PART 1 — 🧹 Clean the Name & Username
// ==========================================
const cleanName = studentName
  .trim()
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const username = cleanName
  .toLowerCase()
  .split(" ")
  .join(".");


// ==========================================
// 🧩 PART 2 — 🔍 Analyze the Name
// ==========================================
const containsAhmad = cleanName.includes("Ahmad");
const firstFiveChars = cleanName.slice(0, 5);
const replacedName = cleanName.replace("Ahmad", "Budi");


// ==========================================
// 🧩 PART 3 — 🎂 Process the Age
// ==========================================
const age = parseInt(ageText);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;


// ==========================================
// 🧩 PART 4 — 📊 Process the Score
// ==========================================
const score = parseFloat(scoreText);
const formattedScore = score.toFixed(2);
const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);


// ==========================================
// 🧩 PART 5 — 🏆 Determine the Grade
// ==========================================
let grade = "";
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score < 90) {
  grade = "B";
} else if (score >= 70 && score < 80) {
  grade = "C";
} else if (score >= 60 && score < 70) {
  grade = "D";
} else {
  grade = "E";
}


// ==========================================
// 🧩 PART 6 — 📅 Process Registration Date
// ==========================================
const dateParts = registrationText.split("-");
// Menggunakan indeks array [0, 1, 2] dan mengubahnya menjadi tipe Number
const regDay = Number(dateParts[0]);
const regMonth = Number(dateParts[1]);
const regYear = Number(dateParts[2]);


// ==========================================
// 🧩 PART 7 — ⏰ Current Date & Time
// ==========================================
const now = new Date();
const currentReportYear = now.getFullYear();
const currentReportMonth = now.getMonth() + 1;
const currentReportDate = now.getDate();
const currentReportDay = now.getDay();

// Menggunakan String() dan padStart() untuk jam dan menit internal laporan
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");


// ==========================================
// 🧩 PART 8 — 📅 Create Date Formatter
// ==========================================
function formatDate(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  
  return `${d}/${m}/${y}`;
}

// Format tanggal pendaftaran hasil pemrosesan PART 6
const formattedRegDate = `${String(regDay).padStart(2, "0")}/${String(regMonth).padStart(2, "0")}/${regYear}`;


// ==========================================
// 🧩 PART 9 — 🎲 Lucky Dice
// ==========================================
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult = "";

if (dice === 6) {
  diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
  diceResult = "💀 BAD LUCK!";
} else {
  diceResult = "😎 GOOD LUCK!";
}


// ==========================================
// 🧩 PART 10 — 🖥️ FINAL REPORT
// ==========================================
console.log("╔════════════════════════════════════╗");
console.log("║      🎓 STUDENT DATA PROCESSOR     ║");
console.log("╚════════════════════════════════════╝");
console.log("");
console.log("👤 STUDENT");
console.log("────────────────────────────────────");
console.log(`Original Name : "${studentName}"`);
console.log(`Clean Name    : ${cleanName}`);
console.log(`Username      : ${username}`);
console.log("");
console.log("🔎 NAME ANALYSIS");
console.log("────────────────────────────────────");
console.log(`Contains Ahmad : ${containsAhmad}`);
console.log(`First 5 chars  : ${firstFiveChars}`);
console.log(`Replacement    : ${replacedName}`);
console.log("");
console.log("🎂 AGE");
console.log("────────────────────────────────────");
console.log(`Age Text       : ${ageText}`);
console.log(`Age            : ${age}`);
console.log(`Birth Year     : ${birthYear}`);
console.log("");
console.log("📊 SCORE");
console.log("────────────────────────────────────");
console.log(`Original Score : ${scoreText}`);
console.log(`Formatted      : ${formattedScore}`);
console.log(`Round          : ${roundScore}`);
console.log(`Floor          : ${floorScore}`);
console.log(`Ceil           : ${ceilScore}`);
console.log(`Grade          : ${grade}`);
console.log("");
console.log("📅 REGISTRATION");
console.log("────────────────────────────────────");
console.log(`Date           : ${formattedRegDate}`);
console.log("");
console.log("🕐 REPORT GENERATED");
console.log("────────────────────────────────────");
console.log(`Date           : ${formatDate(now)}`);
console.log(`Time           : ${hours}:${minutes}`);
console.log("");
console.log("🎲 LUCKY DICE");
console.log("────────────────────────────────────");
console.log(`Dice           : ${dice}`);
console.log(`Result         : ${diceResult}`);
console.log("");
console.log("╔════════════════════════════════════╗");
console.log("║       🚀 PROCESS COMPLETE!         ║");
console.log("╚════════════════════════════════════╝");