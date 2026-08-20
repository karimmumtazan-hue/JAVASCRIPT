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

const reportDate = new Date();

let totalLulus = 0;
let totalBelumLulus = 0;
let tertinggiNama = "";
let tertinggiRataRata = 0;

console.log("HSI STUDENT REPORT CARD");
console.log(`Tanggal : ${reportDate}\n`);

for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    
    let totalScore = 0;
    for (let j = 0; j < currentStudent.scores.length; j++) {
        totalScore += currentStudent.scores[j];
    }
    
    let averageScore = totalScore / currentStudent.scores.length;
    averageScore = Math.round(averageScore * 100) / 100; 

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

    let status = "";
    if (averageScore >= 75 && currentStudent.attendance >= 80 && !currentStudent.hasViolation) {
        status = "LULUS 🎉";
        totalLulus++; 
    } else {
        status = "BELUM LULUS ❌";
        totalBelumLulus++; 
    }

    if (averageScore > tertinggiRataRata) {
        tertinggiRataRata = averageScore;
        tertinggiNama = currentStudent.name;
    }

    console.log(`Student #${i + 1}`);
    console.log(`Nama       : ${currentStudent.name}`);
    console.log(`Kelas      : ${currentStudent.className}`);
    console.log(`Nilai      : ${currentStudent.scores}`); 
    console.log(`Total      : ${totalScore}`);
    console.log(`Rata-rata  : ${averageScore}`);
    console.log(`Grade      : ${grade}`);
    console.log(`Kehadiran  : ${currentStudent.attendance}%`);
    console.log(`Pelanggaran: ${currentStudent.hasViolation ? "Ya ⚠️" : "Tidak ✅"}`);
    console.log(`Status     : ${status}`);
    console.log("------------------------------------------\n");
}

console.log("=== RINGKASAN STATISTIK KELAS ===");
console.log(`Jumlah Siswa LULUS       : ${totalLulus} siswa`);
console.log(`Jumlah Siswa BELUM LULUS : ${totalBelumLulus} siswa`);
console.log(`Rata-rata Tertinggi      : ${tertinggiNama} (${tertinggiRataRata})`);
console.log("=================================");
