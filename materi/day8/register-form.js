console.log('>>>> JS EVENT FORMS <<<<');
const nameInput = document.getElementById('nameInput');
const nameInfo = document.getElementById('nameInfo');
// review area
const previewName = document.getElementById('previewName');
const previewClass = document.getElementById('previewClass');
const previewStatus = document.getElementById('previewStatus');
const previewInterest = document.getElementById('previewInterest');
const previewReason = document.getElementById('previewReason');
const message = document.getElementById('message');

console.log(nameInput);
nameInput.addEventListener('input', function() {
    const name = nameInput.value; // ambil inputan user ketik
    console.log(`User menginput nama: ${name}`);
    nameInfo.textContent = `👋 Halo, ${name}`;
    previewName.textContent = name;
});

const classSelect = document.getElementById('classSelect');
console.log(classSelect);
classSelect.addEventListener('change', function() {
    const className = classSelect.value;
    console.log(`User memilih kelas: ${className}`);
    previewClass.textContent = className;
});

const agreementCheckbox = document.getElementById('agreement');
console.log(agreementCheckbox);
agreementCheckbox.addEventListener('change', function() {
    const isChecked = agreementCheckbox.checked; // ambil status checknya
    console.log({ isChecked }); // boolean
    previewStatus.textContent = isChecked ? 'Siap' : 'Belum Siap';
    // if (isChecked) {
    //     previewStatus.textContent = 'Siap';
    // } else {
    //     previewStatus.textContent = 'Belum Siap';
    // }
});

// DOMContenLoaded adalah event yang dijalankan setelah seluruh elemen html ter load ( nanti kayak muncul notifikai )
// umumnya digunakan untuk menginisialisasi
document.addEventListener('DOMContentLoaded', function(){
    alert('WELCOME ini baru aja di refresh')
});