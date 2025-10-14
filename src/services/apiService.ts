
import { handleApiError } from "../utils/errorHandler";

/**
 * apiService.ts
 * ------------
 * This file is responsible for vommunitcating with DummyJSON API.
 * It will conatin reusable async function that will fetch the product data
 * and also handle any errors that may occur during the request.
 */

const API_URL = "https://dummyjson.com";

/**
 * fetchProducts()
 * --------------
 * Fetches a list of product from the API
 * 
 * @param limit - Number of products to retrieve (defualt is 10)
 * @param skip - Number of product to skip (for pagination, default is 0)
 * @returns An array of product data from the API
 */

export async function fetchProducts(limit: number = 10, skip: number = 0) {
  try {
    // this build the API URL with query parameters
    const response = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);

    // if the response is not OK (status not betweeen 200-299), then throw an error
    if (!response.ok) {
        throw new Error('HTTP ERROR: ${response.status}');
    }

    // convert the respose to JSON (this returns a Javascript object)
    const data = await response.json();

    // Return the array of products from the API response
    return data.products;
  }  catch (error) {
    // if any error happens (e.g network issue, bad url), we log it
    console.error("Error fetching products:", error);
    // return an empty array to prevent the app from crashing
    return [];
  }
}

/**
 * fetchProductById()
 * ---------------
 * Fetches a single product based on its ID.
 * 
 * @param id - The ID of the product to retrieve
 * @return A single product object or  null if not found
 */

export async function fetchProductById(id: number)   {
    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const product = await response.json();
        return product;
    }   catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null;
    }
}