/**
 * calculateTax()
 * -------------
 * This function calculate the tax amount for a product
 * Most products use a standard tax ate of 4.75%
 * however,if the product category is "groceries", 
 * a reduced tax rate of 3% is applied.
 * 
 * for eexample:
 * if a product cost $100, and it is not groceries
 * tax will be = $100 * 4.75/ 100 = $4.75
 * 
 * @param price - The original price of the prodcut
 * @param category - The category of the product(e.g, groceries, laptops)
 * @returns number - The dollar amoutn of the tax
 * 
 */

export function calculateTax(price: number, category: string): number {
    // defining the default tax rates
    const standard_tax_rate = 4.75;
    const groceries_tax_rate = 3

    // determine which tax rate to apply
    const taxRate = category.toLowerCase() === "groceries" ? groceries_tax_rate : standard_tax_rate;

    // calculate the tax amount
    const taxAmount = (price * taxRate) / 100;

    //Rounding up to 2 decimal place
    return Number (taxAmount.toFixed(2));
}