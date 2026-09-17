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
// const siswaBudi = {
//   nama: 'Budi Simanjutak',
//   score: 90,
// };
// students.push(siswaBudi); // menambahkan data budi ke array students
// const siswaJohar = {
//   nama: 'Jhon Cena',
//   score: 80,
// };
// students.push(siswaJohar);
// console.log({ students });

// JSON.stringify() = mengubah object menjadi string
// jadi begini: "[{\"nama\":\"Budi Siregar\",\"score\":90}"
// const studentData = JSON.stringify(students);
// localStorage.setItem('hsiStudents', studentData);
// .clear() dan set students = [] untuk test uji gk ada data
// localStorage.clear();

const studentList = document.getElementById('studentList');
const studentForm = document.getElementById('studentForm');
const studentName = document.getElementById('studentName');
const studentScore = document.getElementById('studentScore');
studentForm.addEventListener('submit', (e) => {
  e.preventDefault(); // mencegah form submit ke server / reload page
  const newStudent = {
    nama: studentName.value,
    score: studentScore.value,
  };
  students.push(newStudent); // menambahkan data baru ke array students
  const studentData = JSON.stringify(students);
  localStorage.setItem('hsiStudents', studentData);
  generateStudentList(); // generate student list setelah selesai
});

function generateStudentList() {
  // perbarui data students ambil dari localstorage
  // JSON.parse() = mengubah string menjadi object
  // maksud  `|| []` adalah jika data localstorage kosong, maka set students = []
  students = JSON.parse(localStorage.getItem('hsiStudents')) || [];
  studentList.innerHTML = ''; // reset student list nya
  // klo data gk ada data siswa munculkan pesan
  if (students.length === 0) {
    studentList.innerHTML = '<div class="empty">📭 Belum ada data siswa.</div>';
  } else {
      console.log('klo ada lanjut generate data siswa ke student list');
      // generate data siswa ke student list
      for (let i = 0; i < students.length; i++) {
        const student = students[i]; // mengambil data siswa ke i (sesuai index)
        studentList.innerHTML += `
        <div class="student-item">
          <div class="student-name">
            <span class="student-number">${i+1}.</span>
            ${student.nama}
          </div>
          <div class="score">${student.score}</div>
          <div class="action-buttons">
            <button class="edit-btn" type="button">✏️ Ubah</button>
            <button class="delete-btn" type="button">🗑️ Hapus</button>
          </div>
        </div>
      `;
      }
  }
}
// generate student list saat pertama page di load
generateStudentList();
