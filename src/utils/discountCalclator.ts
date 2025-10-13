

/**
 * calculateDiscount()
 * --------------------
 * This function calculate how much money is to be discounted from the original price.
 * for example: if a product cost $100 and has a 10% discount, 
 * the function will retune 10 (which means $10 is the discount amount).
 * 
 * @param price - The original price of the product
 * @param discountPercentage - This discount rate (e.g., 10 mean 10%)
 * @returns number - The dolla amount of the discount
 */

export function calculateDiscount(price: number, discountPercentage: number): number {
    // this calculate the discount amount
    const discountedAmount = (price * discountPercentage) / 100;

    // this rounds up to 2 decimal place for cleaner display
    return Number(discountedAmount.toFixed(2));
}