// Data awal tugas
const studentName = "  aHmAd fAuZaN  ";
const ageText = "17 tahun";
const scoreText = "85.678";
const registrationText = "21-08-2026";

// PART 1 - Bersihkan Nama & Buat Username
const namaTrim = studentName.trim().toLowerCase();
const namaSplit = namaTrim.split(" ");
const cleanName = namaSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

const username = cleanName.toLowerCase().split(" ").join(".");

// PART 2 - Analisis Nama
const containsAhmad = cleanName.includes("Ahmad");
const firstFiveChars = cleanName.slice(0, 5);
const replacedName = cleanName.replace("Ahmad", "Budi");

// PART 3 - Proses Umur
const age = parseInt(ageText);
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;

// PART 4 - Proses Nilai
const score = parseFloat(scoreText);
const formattedScore = score.toFixed(2);
const roundScore = Math.round(score);
const floorScore = Math.floor(score);
const ceilScore = Math.ceil(score);

// PART 5 - Logika Grade
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

// PART 6 - Pecah Tanggal Daftar
const dateParts = registrationText.split("-");
const regDay = Number(dateParts[0]);
const regMonth = Number(dateParts[1]);
const regYear = Number(dateParts[2]);
const formattedRegDate = `${String(regDay).padStart(2, "0")}/${String(regMonth).padStart(2, "0")}/${regYear}`;

// PART 7 & 8 - Waktu Sekarang & Fungsi Formatter
const now = new Date();
const currentReportYear = now.getFullYear();
const currentReportMonth = now.getMonth() + 1;
const currentReportDate = now.getDate();
const currentReportDay = now.getDay();

const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

function formatDate(date) {
  const d = String(date.getDate()).padStart(2, "0");
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

// PART 9 - Game Dadu Acak
const dice = Math.floor(Math.random() * 6) + 1;
let diceResult = "";
if (dice === 6) {
  diceResult = "🔥 JACKPOT!";
} else if (dice === 1) {
  diceResult = "💀 BAD LUCK!";
} else {
  diceResult = "😎 GOOD LUCK!";
}

// PART 10 - Cetak Laporan Akhir Sesuai Target Output
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
