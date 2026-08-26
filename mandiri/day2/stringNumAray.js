let umurString = "25";
let umurAngka = Number(umurString);
console.log(umurAngka + 5); // Output: 30
 
let tinggiString = "170.5cm";
let tinggiAngkaInt = parseInt(tinggiString); // cuma ngambil "170"
let tinggiAngkaFloat = parseFloat(tinggiString); // ngambil "170.5"
console.log(tinggiAngkaInt);   // Output: 170
console.log(tinggiAngkaFloat); // Output: 170.5
 
console.log(Number("Halo"));   // Output: NaN
console.log(parseInt("100px20")); // Output: 100

// Array kosong
let namaKosong = [];
console.log(namaKosong); // Output: []
 
// Array berisi string (nama buah)
let buahBuahan = ["Apel", "Jeruk", "Mangga", "Pisang"];
console.log(buahBuahan); // Output: ["Apel", "Jeruk", "Mangga", "Pisang"]
 
// Array berisi angka (skor)
let skorGame = [100, 85, 92, 78];
console.log(skorGame); // Output: [100, 85, 92, 78]
 
// Array berisi tipe data campuran (gak terlalu disarankan tapi bisa)
let dataCampuran = ["Budi", 25, true, null];
console.log(dataCampuran); // Output: ["Budi", 25, true, null]
 
// Array di dalem array (array multi-dimensi)
let matriks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriks[0][1]); // Output: 2 (baris 0, kolom 1)

let bulan = ["Jan", "Mar", "Apr", "Jun"];
 
// Nambahin "Feb" di indeks 1, tanpa ngapus apa-apa
bulan.splice(1, 0, "Feb"); 
console.log(bulan); // Output: ["Jan", "Feb", "Mar", "Apr", "Jun"]
 
// Ngapus "Apr" (di indeks 3 sekarang)
let bulanDihapus = bulan.splice(3, 1);
console.log(bulan);        // Output: ["Jan", "Feb", "Mar", "Jun"]
console.log(bulanDihapus); // Output: ["Apr"]
 
// Ganti "Jun" (di indeks 3) dengan "Mei", "Jun"
bulan.splice(3, 1, "Mei", "Jun");
console.log(bulan); // Output: ["Jan", "Feb", "Mar", "Mei", "Jun"]