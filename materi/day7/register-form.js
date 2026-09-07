console.log('>>>> JS EVENT FORMS <<<<');
const nameInput = document.getElementById('nameInput');
const nameInfo = document.getElementById('nameInfo');
const previewName = document.getElementById('previewName');
console.log(nameInput);
nameInput.addEventListener('input', function() {
    const name = nameInput.value; // ambil inputan user ketik
    console.log(`User menginput nama: ${name}`);
    nameInfo.textContent = `👋 Halo, ${name}`;
    previewName.textContent = name;
});

const classSelect = document.getElementById('classSelect');
const previewClass = document.getElementById('previewClass');
console.log(classSelect);
classSelect.addEventListener('change', function() {
    const className = classSelect.value;
    console.log(`User memilih kelas: ${className}`);
    previewClass.textContent = className;
});

const agreementCheckbox = document.getElementById('agreement');
const previewStatus = document.getElementById('previewStatus');
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