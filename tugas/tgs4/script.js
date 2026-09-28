console.log('=== MATERI 5 - CONSUME API & INTERACTIVE ===');
const API_URL = 'https://dummyjson.com/products';

// Global State
let allProducts = []; // Menyimpan master data produk dari API

// DOM Elements
const loadingState = document.getElementById('loading-state');
const errorState = document.getElementById('error-state');
const emptyState = document.getElementById('empty-state');
const productGrid = document.getElementById('product-grid');
const resultSummary = document.getElementById('result-summary');
const categorySelect = document.getElementById('category-select');
const sortSelect = document.getElementById('sort-select');
const searchInput = document.getElementById('search-input');
const resetBtn = document.getElementById('reset-btn');
const reloadBtn = document.getElementById('reload-btn');
const retryBtn = document.getElementById('retry-btn');

// Modal Elements
const productDialog = document.getElementById('product-dialog');
const dialogClose = document.getElementById('dialog-close');
const dialogContent = document.getElementById('dialog-content');

// 1. Fungsi Utama Mengambil Data dari API
const fetchProducts = async () => {
  try {
    // Tampilkan loading, sembunyikan state lain
    loadingState.hidden = false;
    errorState.hidden = true;
    emptyState.hidden = true;
    productGrid.hidden = true;
    productGrid.innerHTML = '';

    const response = await fetch(`${API_URL}?limit=0`); // Ambil semua produk (limit 0 atau max)
    if (!response.ok) {
      throw new Error('Gagal mengambil data dari server.');
    }
    
    const data = await response.json();
    allProducts = data.products; // Simpan ke master data

    // Jalankan filter/search/sort pertama kali
    applyFiltersAndRender();

  } catch (error) {
    console.error(error);
    loadingState.hidden = true;
    errorState.hidden = false;
  }
};

// 2. Fungsi Mengambil Kategori untuk Dropdown
const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) return;
    const categories = await response.json();
    
    categorySelect.innerHTML = '<option value="all">Semua kategori</option>';
    categories.forEach((item) => {
      // DummyJSON categories bisa berupa array of string atau array of object {slug, name}
      const slug = typeof item === 'string' ? item : item.slug;
      const name = typeof item === 'string' ? item : item.name;
      
      categorySelect.innerHTML += `
        <option value="${slug}">${name}</option>
      `;
    });
  } catch (error) {
    console.error('Gagal memuat kategori:', error);
  }
};

// 3. Render Produk ke DOM
const renderProducts = (productsToRender) => {
  productGrid.innerHTML = '';

  if (productsToRender.length === 0) {
    loadingState.hidden = true;
    productGrid.hidden = true;
    emptyState.hidden = false;
    resultSummary.textContent = `0 dari ${allProducts.length} product ditampilkan.`;
    return;
  }

  emptyState.hidden = true;
  loadingState.hidden = true;
  productGrid.hidden = false;

  // Update Product Counter
  resultSummary.textContent = `${productsToRender.length} dari ${allProducts.length} product ditampilkan.`;

  productsToRender.forEach((product) => {
    const { id, title, price, category, thumbnail, rating } = product;
    
    productGrid.innerHTML += `
      <article class="product-card">
        <div class="product-image-wrap">
          <img class="product-image" src="${thumbnail}" alt="${title}" loading="lazy">
        </div>

        <div class="product-body">
          <span class="product-category">
            ${category}
          </span>

          <h3 class="product-title">
            ${title}
          </h3>

          <div class="product-meta">
            <span class="product-price">
              $${price}
            </span>

            <span class="product-rating">
              ⭐ ${rating}
            </span>
          </div>

          <button type="button" class="detail-btn" data-id="${id}">
            Lihat Detail
          </button>
        </div>
      </article>
    `;
  });

  // Pasang event listener ke setiap tombol "Lihat Detail"
  document.querySelectorAll('.detail-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const productId = Number(e.target.getAttribute('data-id'));
      openDetailModal(productId);
    });
  });
};

// 4. Logika Gabungan: Search, Filter Category, & Sorting
const applyFiltersAndRender = () => {
  let result = [...allProducts];

  // A. Filter berdasarkan Search (berdasarkan title)
  const keyword = searchInput.value.toLowerCase().trim();
  if (keyword) {
    result = result.filter((item) => 
      item.title.toLowerCase().includes(keyword)
    );
  }

  // B. Filter berdasarkan Category
  const selectedCategory = categorySelect.value;
  if (selectedCategory !== 'all') {
    result = result.filter((item) => item.category === selectedCategory);
  }

  // C. Sorting Product
  const selectedSort = sortSelect.value;
  if (selectedSort === 'price-asc') {
    result.sort((a, b) => a.price - b.price);
  } else if (selectedSort === 'price-desc') {
    result.sort((a, b) => b.price - a.price);
  } else if (selectedSort === 'rating-desc') {
    result.sort((a, b) => b.rating - a.rating);
  } else if (selectedSort === 'name-asc') {
    result.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Render hasil akhir ke UI
  renderProducts(result);
};

// 5. Fitur Detail Product (Modal)
const openDetailModal = (id) => {
  const product = allProducts.find((item) => item.id === id);
  if (!product) return;

  const { thumbnail, category, title, description, price, rating, stock, brand } = product;

  dialogContent.innerHTML = `
    <div class="dialog-detail">
      <img class="dialog-image" src="${thumbnail}" alt="${title}">
      <div class="dialog-copy">
        <span class="product-category">${category}</span>
        <h2>${title}</h2>
        <p>${description}</p>
        
        <div class="detail-list">
          <div class="detail-row">
            <span>Harga</span>
            <strong>$${price}</strong>
          </div>
          <div class="detail-row">
            <span>Rating</span>
            <strong>⭐ ${rating}</strong>
          </div>
          <div class="detail-row">
            <span>Stok</span>
            <strong>${stock} pcs</strong>
          </div>
          <div class="detail-row">
            <span>Brand</span>
            <strong>${brand || 'Tidak ada brand'}</strong>
          </div>
        </div>
      </div>
    </div>
  `;

  productDialog.showModal();
};

// Tutup modal
dialogClose.addEventListener('click', () => {
  productDialog.close();
});

productDialog.addEventListener('click', (e) => {
  const dialogDimensions = productDialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    productDialog.close();
  }
});

// 6. Event Listeners untuk Kontrol Interaktif
searchInput.addEventListener('input', applyFiltersAndRender);
categorySelect.addEventListener('change', applyFiltersAndRender);
sortSelect.addEventListener('change', applyFiltersAndRender);

// Reset Filter
resetBtn.addEventListener('click', () => {
  searchInput.value = '';
  categorySelect.value = 'all';
  sortSelect.value = 'default';
  applyFiltersAndRender();
});

// Reload & Retry Buttons
reloadBtn.addEventListener('click', fetchProducts);
retryBtn.addEventListener('click', fetchProducts);

// Inisialisasi Awal
fetchCategories();
fetchProducts();