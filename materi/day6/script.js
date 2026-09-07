console.log("--------------")
console.log("JS DOM INTRO")
console.log("--------------")
console.log(document);
console.log(document.title);
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
const pageTitle = document.getElementById('title');
const pageTitleText = pageTitle.innerText;
console.log(pageTitle);
console.log(pageTitleText);
const kicauCat = document.querySelector('.kicau');
console.log(kicauCat);
const kicauCatImgUrl = kicauCat.src;
console.log(kicauCatImgUrl);
kicauCat.style.border = '2px solid gray'
const allparagraph = document.querySelectorAll('p');
console.log(allparagraph);
allparagraph[0].style.color = 'blue';
allparagraph[1].style.color = 'green';
const clickMeBtn = document.getElementById('clickMe');
clickMeBtn.addEventListener('click', function(){
    alert("Geser dikit lu cing !");
    kicauCat.style.border = '2px solid gray';
    kicauCat.style.marginLeft = '100px';
})