console.log('=== SKL 2 - RECIPE FINDER ===');
// awalan $ berarti dia elemen DOM
const $searchForm = document.getElementById('search-form'); // by id value
const $searchInput = document.querySelector('#search-input'); // by id (pke #)
const $heroTag = document.querySelector('.eyebrow'); // by class (pke .)
const $heroTitle = document.querySelector('h1'); // by tag
// mengganti konten teks di elemen DOM
$heroTag.textContent = '🔥 RECIPE FINDER APP';
$heroTitle.textContent = 'Find your favorite recipe all over the world';
// menambahkan style ke elemen DOM
$heroTag.style.color = '#000';
$heroTag.style.backgroundColor = '#fff';
$heroTitle.style.color = 'gold';

// targetkan element nya secara lebih spesifik 
// const $searchBtn = document.querySelector('button[type="submit"]');
const $searchBtn = document.querySelector('#search-form button');
// console.log($searchBtn);
// ada berbagai macam event semisal: click, change, input, submit
const searchValue = localStorage.getItem('searchValue');
const filters = { cuisine: '', difficulity: '', search: ''};
console.log({ searchValue });
$searchBtn.addEventListener('click', function (e) {
  e.preventDefault(); // mencegah halaman auto refresh atau submit
  const searchValue = $searchInput.value;
  console.log('tombol search di click');
  alert("Lakukan pencarian resep: " + searchValue);
  // menyimpan pencarian ke localStorage
  localStorage.setItem('searchValue', searchValue);
  filters.search = searchValue;
  const convertFilterDataToString = JSON.stringify(filters);
  localStorage.setItem('filters', convertFilterDataToString);
  console.log({ filters });
  // lakukan pencarian via js filter atau map untuk mencari resep yang sesuai value
  // render ulang UI card resep nya
});

function renderRecipes() {
  const $recipesGrid = document.querySelector('#recipe-grid');
  const $loadingState = document.querySelector('#loading-state');
  $loadingState.style.display = 'none';
  $recipesGrid.innerHTML = `<article class="recipe-card">
        <img class="recipe-image" src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="Classic Margherita Pizza">

        <div class="recipe-body">
          <span class="recipe-cuisine">Italian</span>
          <h3 class="recipe-title">Classic Margherita Pizza</h3>

          <div class="recipe-meta">
            <span>⭐ 4.6</span>
            <span>⏱ 35 min</span>
            <span>Easy</span>
          </div>

          <div class="recipe-actions">
            <button class="detail-button" onclick="showRecipeDetail(1)">
              View Detail
            </button>

            <button class="like-button" onclick="toggleFavorite(1)" title="Favorite">
              ♡
            </button>
          </div>
        </div>
      </article>`
}

function main() {
  renderRecipes();
}
// load main function
main();