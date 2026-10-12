// Array untuk menyimpan data siswa (Array of Objects)
let students = [];

// Seleksi Elemen DOM
const studentForm = document.getElementById('student-form');
const studentIndexInput = document.getElementById('student-index');
const studentNameInput = document.getElementById('student-name');
const studentScoreInput = document.getElementById('student-score');
const studentList = document.getElementById('student-list');
const formTitle = document.getElementById('form-title');
const btnSubmit = document.getElementById('btn-submit');
const btnCancel = document.getElementById('btn-cancel');
const alertBox = document.getElementById('alert-box');
const totalStudentsEl = document.getElementById('total-students');
const averageScoreEl = document.getElementById('average-score');

// Inisialisasi Aplikasi ketika halaman dimuat
function init() {
  loadDataFromLocalStorage();
  renderStudents();
}

// Mengambil data dari LocalStorage
function loadDataFromLocalStorage() {
  const data = localStorage.getItem('HSI_STUDENTS');
  if (data) {
    students = JSON.parse(data);
  }
}

// Menyimpan data ke LocalStorage
function saveDataToLocalStorage() {
  localStorage.setItem('HSI_STUDENTS', JSON.stringify(students));
}

// Menampilkan alert notifikasi
function showAlert(message, type) {
  alertBox.innerText = message;
  alertBox.className = `alert alert-${type}`;

  setTimeout(function() {
    alertBox.className = 'alert hidden';
  }, 3000);
}

// Menghitung statistik Total & Rata-rata
function updateStatistics() {
  const total = students.length;
  totalStudentsEl.innerText = total;

  if (total === 0) {
    averageScoreEl.innerText = '0';
    return;
  }

  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore += Number(students[i].score);
  }

  const average = totalScore / total;
  averageScoreEl.innerText = Number.isInteger(average) ? average : average.toFixed(1);
}

// Render daftar siswa ke DOM
function renderStudents() {
  studentList.innerHTML = '';

  if (students.length === 0) {
    studentList.innerHTML = '<p class="empty-state">Belum ada data siswa.</p>';
    updateStatistics();
    return;
  }

  for (let i = 0; i < students.length; i++) {
    const student = students[i];

    // Menggunakan Template Literal untuk render komponen item
    const itemHTML = `
      <div class="student-item">
        <div class="student-info">
          <span class="index">${i + 1}.</span>
          <span>${student.name}</span>
        </div>
        <div class="student-actions-wrapper">
          <span class="score-badge">${student.score}</span>
          <div class="btn-action-group">
            <button class="btn-edit" onclick="editStudent(${i})">✏️ Ubah</button>
            <button class="btn-delete" onclick="deleteStudent(${i})">🗑️ Hapus</button>
          </div>
        </div>
      </div>
    `;

    studentList.innerHTML += itemHTML;
  }

  updateStatistics();
}

// Reset Formulir ke mode awal (Tambah Siswa)
function resetForm() {
  studentForm.reset();
  studentIndexInput.value = '';
  formTitle.innerText = '➕ Tambah Siswa';
  btnSubmit.innerText = '➕ Tambah Siswa';
  btnCancel.classList.add('hidden');
}

// Event Handler: Submit Form
studentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = studentNameInput.value;
  const score = studentScoreInput.value;
  const index = studentIndexInput.value;

  const studentData = {
    name: name,
    score: score
  };

  if (index === '') {
    // Tambah Data Siswa Baru
    students.push(studentData);
    showAlert('Data siswa berhasil ditambahkan!', 'success');
  } else {
    // Update Data Siswa
    students[index] = studentData;
    showAlert('Data siswa berhasil diperbarui!', 'success');
  }

  saveDataToLocalStorage();
  renderStudents();
  resetForm();
});

// Mode Edit Data Siswa (Dipicu saat tombol UBAH diklik)
function editStudent(index) {
  const student = students[index];

  studentIndexInput.value = index;
  studentNameInput.value = student.name;
  studentScoreInput.value = student.score;

  // Sesuaikan visual formulir untuk mode edit
  formTitle.innerText = '✏️ Edit Siswa';
  btnSubmit.innerText = '💾 Simpan Perubahan';
  btnCancel.classList.remove('hidden');
}

// Hapus Data Siswa (Dipicu saat tombol HAPUS diklik)
function deleteStudent(index) {
  if (confirm('Apakah Anda yakin ingin menghapus data siswa ini?')) {
    students.splice(index, 1);
    saveDataToLocalStorage();
    renderStudents();
    showAlert('Data siswa berhasil dihapus!', 'danger');

    // Jika sedang diedit lalu dihapus bersamaan
    if (studentIndexInput.value === String(index)) {
      resetForm();
    }
  }
}

// Event Handler: Tombol Batal
btnCancel.addEventListener('click', function() {
  resetForm();
});

// Jalankan script
init();