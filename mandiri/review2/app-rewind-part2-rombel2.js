console.log('Bismillah, Hello World!');
const fullName = 'Muhammad Hadi'; //  camelCase
console.log(fullName);
// const = variabel yg tidak bisa diubah
// let = variabel yg bisa diubah
let firstName = 'Bagus';
firstName = 'Abdullah';
firstName = 10000; // number
console.log(firstName);
const attendStatus = true;
console.log(attendStatus);
// OPERATOR ARITMETIC
const totalScoreA = 10 + 20;
const accumulatedScoreA = totalScoreA * 10;
let randomScore = 50;
const newScore = randomScore + 10;
randomScore += 10; // randomScore = randomScore + 10
randomScore *= 20; // randomScore = randomScore * 10
console.log({ totalScoreA, accumulatedScoreA, newScore, randomScore });

let helloMessage = "Welcome Team...";
let newMessage = helloMessage + " to the Galaxy";
helloMessage += " to the World of Code!";
newMessage += " Skuy!";
console.log({ newMessage, helloMessage });
// OPERATOR PERBANDINGAN (cek nilai boolean)
const ujangAge = 17;
const bagusAge = "17"; // ujicoba ke string
const isUjangOlder = ujangAge > bagusAge;
if (isUjangOlder) {
  console.log('Ujang is older than Bagus');
} else {
  console.log('Ujang is younger than Bagus');
}
// perbedaan == dan === (untuk cek tipe data)
// != ATAU !== (tidak sama dengan)
const isEqualAge = ujangAge === bagusAge;
const isNotEqualAge = ujangAge !== bagusAge;
console.log({ isEqualAge, isNotEqualAge });

// OPERATOR LOGICAL
const ageStatus = ujangAge > 13;
const raportStatus = 90;
const marriedStatus = "duda";
if (ageStatus && raportStatus > 60 && marriedStatus === "lajang") {
  console.log('Lolos berkas');
} else {
  console.log('Tidak lolos berkas');
}
const isOlyimpiad = false;
if (isOlyimpiad || raportStatus > 95) {
  console.log('Boleh lolos unggulan lah');
} else {
  console.log('Tidak lolos unggulan lah');
}

// PERULANGAN -> LOOPING
console.log('=== FOR LOOPING ===');
// 3 struktur for (index awal, syarat, langkah) {...}
for (let i = 1; i <= 5; i++) {
  console.log(`Loop ke-${i}`);
  console.log(`... akhir loop ke-${i} ...`);
}
// negative loop
for (let i = 5; i >= 1; i--) {
  console.log(`Negative Loop ke-${i}`);
  console.log(`... akhir negative loop ke-${i} ...`);
}
const equipments = ['knife', 'fork', 'spoon', 'plate', 'bowl', 'cup'];
// indeksnya ini dari [0, 1, 2, 3, 4, 5]
// manual akses data lewat index
console.log(equipments[0]);
console.log(equipments[1]);
const totalEquipments = equipments.length; // hitung total item di array
console.log({ totalEquipments });
for (let i = 0; i < totalEquipments; i++) {
  console.log(`Item ke-${i} adalah ${ equipments[i]}`);
  console.log(`-----end item ke-${i}-----`);
}

console.log('=== RECIPES LOOP ===');
const recipes = [
    { name: 'Martabak', ingredients: ['flour', 'water', 'salt', 'duck eggs'] },
    { name: 'Fried Rice', ingredients: ['rice', 'onion', 'garlic', 'chili', 'palm oil'] },
    { name: 'Carbonara', ingredients: ['spaghetti', 'eggs', 'bacon', 'parmesan', 'olive oil'] },
]
for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i]; // 1 objek resep per index
    // langsung pake index juga bisa => recipes[i].name;
    console.log(`Recipe ke-${i}: ${ recipe.name}`);
    console.log(`Daftar bahan baku: `);
    for (let j = 0; j < recipe.ingredients.length; j++) {
        const no = j+1;
        const itemIngredient = recipe.ingredients[j];
        console.log(`${no} - ${itemIngredient}`);
    }
    console.log(`-- resep ke-${i} selesai --`);
}

// fungsi = kumpulan kode yg bisa di panggil berulang kali
// bisa menerim parameters semisal fn(panjang, lebar){..}
function hitungPersegi(panjang, lebar) {
    return panjang * lebar;
}

const luasKamar = hitungPersegi(20, 30);
const luasKardus = hitungPersegi(2, 4);
console.log({ luasKamar, luasKardus });
