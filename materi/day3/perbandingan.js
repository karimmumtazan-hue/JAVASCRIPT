// operator perbandingan
const umurujang = 17;
const umurbudi = 20;
// == membandingkan data tidak dengan tipe nya
// === membandingkan data dengan tipe nya
const cekumur = umurujang === umurbudi; // false
console.log({ cekumur });
// cek umur sama enggak
if (cekumur) {
    console.log("umur ujang sama budi sama nggak sih");
} else {
    console.log("nggak cok beda!");
}

// > : lebih dari , < kurang dari, >= : lebih dari sama dengan, <= : kurang dari sama dengan
const umursumanto = 30;
if (umursumanto > umurbudi) {
    console.log("sumanto tua ya");
} else {
    console.log("sumanto masih muda ya");
}

// tidak sama dengan != , !== tidak sama dengan dengan tipe data
const umurcahyono = "25";// string
if (umurcahyono != umursumanto) {
    console.log("umur cahyono tidak sama dengan sumanto");
}

// ARRAY = LIST DATA DALAM SATU VARIABLE # dimulai dari index 0
const daftarkereta = ["gaja wong", "prameks", "fajar utama", "bengawan"];
console.log(daftarkereta);
console.log(daftarkereta[0]); // data 1
console.log(daftarkereta[1]); // data 2
console.log(daftarkereta[2]); // data 3
console.log(daftarkereta[3]); // data 4

// FOR LOOPING ATAU PERULANGAN => FOR ....
//for (let i = 1; i <= 4 ; i++) {
for (let i = 4 ; i >= 1 ; i--) {
    console.log(`halo kaka ke-${i}`);
}


const jumlahkereta = daftarkereta.length; // jumlah data di array
console.log(`jumlah kereta ada ${jumlahkereta} kereta`);
for (let x = 0; x < daftarkereta.length; x++) {
    const namaKereta = daftarkereta[x];
    console.log(`kereta   ${namaKereta}`);
}



const profilesantri = {
    nama: "Ujang",
    umur: 17,
    kelas: 11,
    status: "aktif",
    asrama: "ibnu qoyyim",
        alamat: {
            jalan: "Jl. Jenderal Gatot Subroto",
            kelurahan: "Krajan",
            desa: "Baledono",
            kecamatan: "Kec. Purworejo",
            kabupaten: "Kabupaten Purworejo",
            provinsi: "Jawa Tengah",
            kodepos: "54118"
            }
        };
        console.log(profilesantri);
        console.log('INFO SANTRI')
console.log('--------------')
console.log(`nama santri : ${profilesantri.nama} `);
console.log(`umur santri : ${profilesantri.umur} `);
console.log(`kelas santri : ${profilesantri.kelas} `);
console.log(`status santri : ${profilesantri.status} `);
console.log(`asrama santri : ${profilesantri.asrama} `);
console.log(`alamat kota : ${profilesantri.alamat.jalan}, ${profilesantri.alamat.kelurahan}, ${profilesantri.alamat.desa}, ${profilesantri.alamat.kecamatan}, ${profilesantri.alamat.kabupaten}, ${profilesantri.alamat.provinsi} ${profilesantri.alamat.kodepos}`);


// date = fitur object pengelolahan waktu

const tanggalbaru = new Date();
console.log({ tanggalbaru });
console.log(`tanggal baru.tostring()`);
console.log(tanggalbaru.toLocaleString());