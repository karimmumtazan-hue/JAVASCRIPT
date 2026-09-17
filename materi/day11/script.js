console.log('=== MATERI 5 - CONSUME API ===');
const API_URL = 'https://dummyjson.com/products';

const loadingState = document.getElementById('loading-state');
const productGrid = document.getElementById('product-grid');
function renderProduct(dataProduct) {
    // console.log(dataProduct);
    const { id, title, price, category, thumbnail, rating } = dataProduct;
    loadingState.hidden = true; // sembunyikan area loading
    productGrid.hidden = false; // munculkan area product grid
    productGrid.innerHTML = `
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
}

// function di variable disebut juga anonymous function
const getProductsApi = async () => {
  const response = await fetch(API_URL); // mengambil response dari API
  const data = await response.json(); // data dijadikan object javascript
  const { products, total, limit } = data; // destructuring assignment
  console.log({ products, total, limit }); 
  // data products dalam bentuk array objects
  // return products;
  // generate 1 product berdasarkan index
  renderProduct(products[10]);
}

getProductsApi();
