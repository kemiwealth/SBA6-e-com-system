

const BASE_URL = 'https://dummyjson.com'

// GET all the products
async function fetchProducts() {
  try {
    // send the request to fetch the products
    const response = await fetch(`${BASE_URL}/products?limit=5`);
    console.log(response);

    // check if the response is not ok
    if (!response.ok) {
      throw new Error("Error fetching products");
    }

    // parse the data
    const products = await response.json();
    console.log(products);
  } catch (e) {
    console.error();
  }
}

fetchProducts();