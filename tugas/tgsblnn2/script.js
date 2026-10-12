// Endpoint API DummyJSON Recipes
const API_URL = 'https://dummyjson.com/recipes';

// Elemen DOM
const recipeGrid = document.getElementById('recipe-grid');
const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const emptyState = document.getElementById('empty-state');
const recipeCount = document.getElementById('recipe-count');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const cuisineFilter = document.getElementById('cuisine-filter');
const difficultyFilter = document.getElementById('difficulty-filter');
const resetFilterButton = document.getElementById('reset-filter-button');
const favoriteButton = document.getElementById('favorite-button');
const favoriteCount = document.getElementById('favorite-count');
const recipeDialog = document.getElementById('recipe-dialog');
const dialogContent = document.getElementById('dialog-content');
const closeDialogButton = document.getElementById('close-dialog');

// State Aplikasi
let allRecipes = [];
let filteredRecipes = [];
let favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
let showOnlyFavorites = false;

// 1. Mengambil Data menggunakan Fetch API saat halaman dimuat
async function fetchRecipes() {
  try {
    showState('loading');
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server');
    }
    
    const data = await response.json();
    allRecipes = data.recipes;
    filteredRecipes = allRecipes;
    
    populateCuisineOptions(allRecipes);
    updateFavoriteCount();
    displayRecipes(filteredRecipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    showState('error');
  }
}

// 2. Menampilkan Daftar Resep ke Halaman Web
function displayRecipes(recipes) {
  if (recipes.length === 0) {
    showState('empty');
    recipeCount.textContent = '0 recipes';
    resetFilterButton.hidden = false;
    return;
  }

  showState('grid');
  recipeCount.textContent = `${recipes.length} recipes`;
  
  // Tampilkan tombol reset jika sedang melakukan filter/pencarian/mode favorit
  const isFiltered = searchInput.value.trim() !== '' || cuisineFilter.value !== '' || difficultyFilter.value !== '' || showOnlyFavorites;
  resetFilterButton.hidden = !isFiltered;

  recipeGrid.innerHTML = recipes.map(recipe => {
    const isFav = favorites.includes(recipe.id);
    return `
      <article class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" loading="lazy">
        <div class="recipe-body">
          <span class="recipe-cuisine">${recipe.cuisine}</span>
          <h3 class="recipe-title">${recipe.name}</h3>
          <div class="recipe-meta">
            <span>⏱️ ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins</span>
            <span>⭐ ${recipe.rating}</span>
            <span>📊 ${recipe.difficulty}</span>
          </div>
          <div class="recipe-actions">
            <button class="detail-button" onclick="openRecipeDetail(${recipe.id})">View Detail</button>
            <button class="like-button" onclick="toggleFavorite(${recipe.id})" aria-label="Favorite">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Mengisi opsi dropdown kategori cuisine secara dinamis
function populateCuisineOptions(recipes) {
  const cuisines = [...new Set(recipes.map(recipe => recipe.cuisine))].sort();
  cuisineFilter.innerHTML = '<option value="">All Cuisine</option>' + 
    cuisines.map(cuisine => `<option value="${cuisine}">${cuisine}</option>`).join('');
}

// 3. Pencarian dan Filtering
function applyFilters() {
  const keyword = searchInput.value.toLowerCase().trim();
  const selectedCuisine = cuisineFilter.value;
  const selectedDifficulty = difficultyFilter.value;

  filteredRecipes = allRecipes.filter(recipe => {
    const matchesFavorite = !showOnlyFavorites || favorites.includes(recipe.id);
    const matchesKeyword = recipe.name.toLowerCase().includes(keyword) || 
                           recipe.ingredients.some(ing => ing.toLowerCase().includes(keyword));
    const matchesCuisine = selectedCuisine === '' || recipe.cuisine === selectedCuisine;
    const matchesDifficulty = selectedDifficulty === '' || recipe.difficulty === selectedDifficulty;

    return matchesFavorite && matchesKeyword && matchesCuisine && matchesDifficulty;
  });

  displayRecipes(filteredRecipes);
}

// Event Listeners untuk Search & Filter
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  applyFilters();
});

searchInput.addEventListener('input', applyFilters);
cuisineFilter.addEventListener('change', applyFilters);
difficultyFilter.addEventListener('change', applyFilters);

resetFilterButton.addEventListener('click', () => {
  searchInput.value = '';
  cuisineFilter.value = '';
  difficultyFilter.value = '';
  showOnlyFavorites = false;
  document.getElementById('section-title').textContent = 'Explore Recipes';
  applyFilters();
});

// 4. Melihat Detail Recipe (Menggunakan Dialog/Modal)
async function openRecipeDetail(id) {
  const recipe = allRecipes.find(r => r.id === id);
  if (!recipe) return;

  const isFav = favorites.includes(recipe.id);

  dialogContent.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" class="dialog-image">
    <div class="dialog-body">
      <span class="recipe-cuisine">${recipe.cuisine}</span>
      <h2>${recipe.name}</h2>
      <div class="dialog-meta">
        <span>⏱️ Prep: ${recipe.prepTimeMinutes}m</span>
        <span>🔥 Cook: ${recipe.cookTimeMinutes}m</span>
        <span>🍽️ Servings: ${recipe.servings}</span>
        <span>⭐ ${recipe.rating} (${recipe.reviewCount} reviews)</span>
        <span>📊 ${recipe.difficulty}</span>
      </div>
      
      <h3>Ingredients</h3>
      <ul class="ingredients">
        ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
      </ul>

      <h3>Instructions</h3>
      <div class="instructions">
        ${recipe.instructions.map((step, index) => `<p><strong>Step ${index + 1}:</strong>${step}</p>`).join('')}
      </div>

      <div style="margin-top: 24px; display: flex; gap: 10px;">
        <button class="detail-button" onclick="toggleFavorite(${recipe.id}); openRecipeDetail(${recipe.id});" style="background: var(--red);">
          ${isFav ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>
      </div>
    </div>
  `;

  recipeDialog.showModal();
}

closeDialogButton.addEventListener('click', () => {
  recipeDialog.close();
});

recipeDialog.addEventListener('click', (e) => {
  const rect = recipeDialog.getBoundingClientRect();
  if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
    recipeDialog.close();
  }
});

// 5. LocalStorage & Favorite Management
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }
  
  localStorage.setItem('favoriteRecipes', JSON.stringify(favorites));
  updateFavoriteCount();
  applyFilters();
}

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
}

favoriteButton.addEventListener('click', () => {
  showOnlyFavorites = !showOnlyFavorites;
  
  if (showOnlyFavorites) {
    // Kosongkan input pencarian dan filter saat membuka menu Favorites agar tidak bentrok
    searchInput.value = '';
    cuisineFilter.value = '';
    difficultyFilter.value = '';
    
    document.getElementById('section-title').textContent = 'Favorite Recipes ❤️';
  } else {
    document.getElementById('section-title').textContent = 'Explore Recipes';
  }
  
  applyFilters();
});

// Helper untuk Mengatur Tampilan Status (Loading, Error, Empty, Grid)
function showState(state) {
  loadingState.hidden = state !== 'loading';
  errorState.hidden = state !== 'error';
  emptyState.hidden = state !== 'empty';
  
  // Pastikan grid resep hanya tampil jika statusnya 'grid'
  recipeGrid.hidden = state !== 'grid';
}

// Inisialisasi Aplikasi saat Pertama Kali Dijalankan
fetchRecipes();