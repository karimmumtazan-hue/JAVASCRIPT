console.log('==========================');
console.log('HSI STUDENT MANAGEMENT');
console.log('==========================');
let students = []; // nampung data siswa
localStorage.setItem('totalSiswa', 70); // akan jadi string
localStorage.setItem('namaKelas', 'XI CODERS 1');
const namaKelasStorage = localStorage.getItem('namaKelas');
const totalSiswaStorage = localStorage.getItem('totalSiswa');
console.log({ namaKelasStorage, totalSiswaStorage });
// localStorage.clear() = menghapus semua data localstorage
// localStorage.removeItem('namaKelas') = menghapus data localstorage dengan nama 'namaKelas'
localStorage.removeItem('namaKelas');
localStorage.removeItem('totalSiswa');

// data budi -> berupa object
const siswaBudi = {
  nama: 'Budi Siregar',
  score: 90,
};
students.push(siswaBudi); // menambahkan data budi ke array students
const siswaJohar = {
  nama: 'Johar Chan',
  score: 80,
};
students.push(siswaJohar);
console.log({ students });

// JSON.stringify() = mengubah object menjadi string
// jadi begini: "[{\"nama\":\"Budi Siregar\",\"score\":90}"
const studentData = JSON.stringify(students);
localStorage.setItem('hsiStudents', studentData);
// .clear() dan set students = [] untuk test uji gk ada data
// localStorage.clear();
// students = [];
console.log({ students });
const studentList = document.getElementById('studentList');
const studentForm = document.getElementById('studentForm');
const studentName = document.getElementById('studentName');
const studentScore = document.getElementById('studentScore');
studentForm.addEventListener('submit', (e) => {
  
})
// klo data gk ada data siswa munculkan pesan
if (students.length === 0) {
  studentList.innerHTML = '<div class="empty">📭 Belum ada data siswa.</div>';
} else {
    console.log('klo ada lanjut generate data siswa ke student list');
    // generate data siswa ke list
    studentList.innerHTML = `  
<div class="student-item">
      <div class="student-name">
        <span class="student-number">1.</span>
        Ujang
      </div>
      <div class="score">89</div>
      <div class="action-buttons">
        <button class="edit-btn" type="button">✏️ Ubah</button>
        <button class="delete-btn" type="button">🗑️ Hapus</button>
      </div>
    </div>`
}

