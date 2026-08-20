// =================================================================
// 📦 DATA SISWA (Array + Object)
// =================================================================
const students = [
    {
        name: "Andi Wijaya",
        className: "X-RPL 1",
        scores:[80, 100, 100],
        attendance: 95,
        hasViolation: false
    },
    {
        name: "Siti Rahma",
        className: "X-RPL 1",
        scores:[100, 95, 98],
        attendance: 100,
        hasViolation: false
    },
    {
        name: "Budi Santoso",
        className: "X-RPL 1",
        scores:[75, 90, 85],
        attendance: 65,
        hasViolation: true
    },
    {
        name: "Dewi Lestari",
        className: "X-RPL 1",
        scores:[90, 80, 80],
        attendance: 90,
        hasViolation: false
    }
];

// =================================================================
// 📅 TANGGAL LAPORAN
// =================================================================
const reportDate = new Date();
const formattedDate = reportDate.toLocaleDateString("id-ID", {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
});

// =================================================================
// 📈 VARIABEL BONUS (Statistik & Ranking)
// =================================================================
let totalLulus = 0;
let totalBelumLulus = 0;

let tertinggiNama = "";
let tertinggiRataRata = 0; // Nilai awal untuk pembanding mencari yang tertinggi

// Variabel penampung teks detail siswa untuk dicetak nanti
let studentDetailsOutput = "";

// =================================================================
// 🔄 PENGOLAHAN DATA SISWA (For Loop Biasa)
// =================================================================
for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    
    // 🧮 Hitung Total Nilai menggunakan For Loop Biasa
    let totalScore = 0;
    for (let j = 0; j < currentStudent.scores.length; j++) {
        totalScore += currentStudent.scores[j];
    }
    
    // 🧮 Hitung Rata-rata Nilai
    let averageScore = totalScore / currentStudent.scores.length;
    averageScore = Math.round(averageScore * 100) / 100; // Pembulatan desimal

    // 🧮 Tentukan Grade (If / Else If / Else)
    let grade = "";
    if (averageScore >= 90 && averageScore <= 100) {
        grade = "A";
    } else if (averageScore >= 80 && averageScore < 90) {
        grade = "B";
    } else if (averageScore >= 70 && averageScore < 80) {
        grade = "C";
    } else {
        grade = "D";
    }

    // 🎓 Tentukan Status Kelulusan (Comparison + Logical Operator && + !)
    let status = "";
    if (averageScore >= 75 && currentStudent.attendance >= 80 && !currentStudent.hasViolation) {
        status = "🎉 LULUS";
        totalLulus++; // Akumulasi Bonus 1
    } else {
        status = "❌ BELUM LULUS";
        totalBelumLulus++; // Akumulasi Bonus 2
    }

    // 🏆 Cari Siswa dengan Rata-rata Tertinggi (Bonus 3)
    if (averageScore > tertinggiRataRata) {
        tertinggiRataRata = averageScore;
        tertinggiNama = currentStudent.name;
    }

    // 🖥️ Susun Tampilan Kreatif per Siswa ke Variabel Penampung
    studentDetailsOutput += `┌──────────────────────────────────────────────────┐\n`;
    studentDetailsOutput += `│  👨‍🎓 STUDENT #${i + 1} : ${currentStudent.name.toUpperCase().padEnd(28)} │\n`;
    studentDetailsOutput += `├──────────────────────────────────────────────────┤\n`;
    studentDetailsOutput += `│ 🏫 Kelas       : ${currentStudent.className.padEnd(31)} │\n`;
    studentDetailsOutput += `│ 📝 Nilai       : [${currentStudent.scores.join(", ")}]`.padEnd(51) + `│\n`;
    studentDetailsOutput += `│ 📊 Total       : ${totalScore.toString().padEnd(31)} │\n`;
    studentDetailsOutput += `│ 📈 Rata-rata   : ${averageScore.toString().padEnd(31)} │\n`;
    studentDetailsOutput += `│ 🌟 Grade       : ${grade.padEnd(31)} │\n`;
    studentDetailsOutput += `│ 📅 Kehadiran   : ${(currentStudent.attendance + "%").padEnd(31)} │\n`;
    studentDetailsOutput += `│ ⚠️ Pelanggaran : ${(currentStudent.hasViolation ? "Ada" : "Tidak Ada").padEnd(31)} │\n`;
    studentDetailsOutput += `│ 🎓 Status      : ${status.padEnd(30)} │\n`;
    studentDetailsOutput += `└──────────────────────────────────────────────────┘\n\n`;
}

// =================================================================
// 🖥️ OUTPUT AKHIR - TAMPILAN REPORT KREATIF (Bonus 4)
// =================================================================
console.log(`====================================================`);
console.log(`🎯              HSI STUDENT REPORT CARD             `);
console.log(`====================================================`);
console.log(`📅 Tanggal Cetak : ${formattedDate}`);
console.log(`====================================================\n`);

// Cetak daftar data semua siswa
console.log(studentDetailsOutput);

// Cetak bagian ringkasan statistik kelas di bawah laporan siswa
console.log(`====================================================`);
console.log(`📊             RINGKASAN STATISTIK KELAS            `);
console.log(`====================================================`);
console.log(`✅ Jumlah Siswa LULUS       : ${totalLulus} siswa`);
console.log(`❌ Jumlah Siswa BELUM LULUS : ${totalBelumLulus} siswa`);
console.log(`🏆 Rata-rata Tertinggi      : ${tertinggiNama} (${tertinggiRataRata})`);
console.log(`====================================================`);
