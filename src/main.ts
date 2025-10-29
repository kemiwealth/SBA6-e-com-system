// // import { Product } from "./models/Product";
// // import { calculateTax } from "./utils/taxCalculator";
// // import { APIError, handleApiError } from "./utils/errorHandler";

// import { Product } from "./models/product";
// import { calculateTax } from "./utils/taxCalculator";
// import { calculateDiscount } from "./utils/discountcalclator";
// import { APIError } from "./utils/errorHandler";

// const BASE_URL = "https://dummyjson.com";

// // GET all the products
// async function fetchProducts() {
//   try {
//     // send the request to fetch the products
//     const response = await fetch(`${BASE_URL}/products?limit=5`);
//     console.log(response);

//     // check if the response is not ok
//     if (!response.ok) {
//       throw new Error("Error fetching products");
//     }

//     // parse the data
//     const data = await response.json();
//     const productList = data.products;
//     // const products = await response.json();
//     // console.log(products);

//        // Create Product objects
//     const productInstances = productList.map(
//       (p: any) => new Product(p.id, p.title, p.price, p.discountPercentage, p.category)
//     );

//     // Display product details
//     productInstances.forEach((product) => {
//       product.displayDetails();

//       const discountAmount = calculateDiscount(product.price, product.discountPercentage);
//       const taxAmount = calculateTax(product.price, product.category);
//       const finalPrice = product.getPriceWithDiscount() + taxAmount;

//       console.log(`Discount: $${discountAmount.toFixed(2)}`);
//       console.log(`Tax: $${taxAmount.toFixed(2)}`);
//       console.log(`Final Price After Discount & Tax: $${finalPrice.toFixed(2)}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchProducts();

// // GET a single product
// async function getProduct(id: number) {
//   try {
//     const response = await fetch(`${BASE_URL}/products/${id}`);

//     const product = await response.json();
//     console.log(product);
//   } catch (e) {
//     console.error(e);
//   }
// }

// getProduct(10);
// getProduct(20);
// getProduct(5);

// // POST or create a product
// async function createProduct(productObj: any) {
//   try {
//     const response = await fetch(`${BASE_URL}/products/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(productObj),
//     });

//     if (!response.ok) {
//       throw new Error("Error creating product");
//     }

//     const product = await response.json();
//     console.log(product);
//   } catch (e) {
//     console.error(e);
//   }
// }

// createProduct({ title: "keyboard", price: 50 });
// createProduct({ title: "mouse", price: 20 });

// /**
//  * Testing function that intentionally uses a wrong URL to trigger an error.
//  */
// async function testErrorHandling() {
//   try {
//     // WRONG URL to simulate an API error
//     const response = await fetch("https://dummyjson.com/invalid-endpoint");

//     if (!response.ok) {
//       // If API fails (e.g., 404), throw a custom AppError
//       throw new APIError(
//         `Failed to fetch products: ${response.statusText}`,
//         response.status
//       );
//     }

//     // If successful, parse and log data
//     const data = await response.json();
//     console.log("Products fetched successfully:", data);
//   } catch (error) {
//     // Handle and log the error
//     console.error(error);
//   }
// }

// // Run the test
// testErrorHandling();


import { Product } from "./models/Product"
import { calculateTax } from "./utils/taxCalculator";
import { calculateDiscount } from "./utils/discountCalclator"
import { APIError, handleApiError } from "./utils/errorHandler";

const BASE_URL = "https://dummyjson.com";

// GET all the products
async function fetchProducts() {
  try {
    const response = await fetch(`${BASE_URL}/products?limit=5`);

    if (!response.ok) {
      throw new APIError("Error fetching products", response.status);
    }

    const data = await response.json();
    const productList = data.products;

    // Create Product objects
    const productInstances: Product[] = productList.map(
      (p: any) => new Product(p.id, p.title, p.price, p.discountPercentage, p.category)
    );

    // Display product details
    productInstances.forEach((product) => {
      product.displayDetails();

      const discountAmount = calculateDiscount(product.price, product.discountPercentage);
      const taxAmount = calculateTax(product.price, product.category);
      const finalPrice = product.getPriceWithDiscount() + taxAmount;

      console.log(`Discount: $${discountAmount.toFixed(2)}`);
      console.log(`Tax: $${taxAmount.toFixed(2)}`);
      console.log(`Final Price After Discount & Tax: $${finalPrice.toFixed(2)}`);
    });
  } catch (error) {
    handleApiError(error);
  }
}

fetchProducts();

// GET a single product
async function getProduct(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const product = await response.json();
    console.log(product);
  } catch (e) {
    console.error(e);
  }
}

getProduct(10);
getProduct(20);
getProduct(5);

// POST or create a product
async function createProduct(productObj: any) {
  try {
    const response = await fetch(`${BASE_URL}/products/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObj),
    });

    if (!response.ok) {
      throw new Error("Error creating product");
    }

    const product = await response.json();
    console.log(product);
  } catch (e) {
    console.error(e);
  }
}

createProduct({ title: "keyboard", price: 50 });
createProduct({ title: "mouse", price: 20 });

// Test Error Handling
async function testErrorHandling() {
  try {
    const response = await fetch("https://dummyjson.com/invalid-endpoint");

    if (!response.ok) {
      throw new APIError(`Failed to fetch products: ${response.statusText}`, response.status);
    }

    const data = await response.json();
    console.log("Products fetched successfully:", data);
  } catch (error) {
    handleApiError(error);
  }
}

testErrorHandling();
