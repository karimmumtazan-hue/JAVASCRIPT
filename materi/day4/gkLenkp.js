console.log("=========================")
console.log("MATERI PART 3 DATA MANIPUALTION")
console.log("=========================")
// string manipulation
const namaSultan = "Sri Sultan Hamengku Buwono X";
const namaKecil = namaSultan.toLowerCase();
const namaBesar = namaSultan.toUpperCase();
console.log({ namaSultan });
console.log({ namaKecil, namaBesar });
const gelar = namaSultan.slice(11, 26); //index awal, index akhir
const nomorGelar = namaSultan.replace("X", "XII"); // target timpaan
console.log({gelar, nomorGelar});
const cekSultan = namaSultan.includes("sultan");
if (cekSultan) {
    console.log(">> nama sultan valid")
} else {
    console.log(">> tidak ditemukan nama sultan")
}
// number manipulation
const hartaSultan = "35000000"
const konversiHarta = Number(hartaSultan);
console.log({ hartaSultan, konversiHarta});
const utangSultan = "25000.678"
const konversiUtang = Number(utangSultan);
const konversiUtangDuaKoma = konversiUtang.toFixed(2);
console.log({ konversiUtang, konversiUtangDuaKoma });
// Math function untuk perhitungan angka
// round(), flor(), ceil()
const konversiUtangPembulatan = Math.round(konversiUtang);
console.log({ konversiUtangPembulatan })
const saiki = new Date();
console.log({ saiki });
const tahunIni = saiki.getFullYear();
console.log({ tahunIni })