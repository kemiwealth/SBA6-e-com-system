// the 'export' keyword makes this class available for import in other files (like main.ts)

export class Product {
    // These are the properties each  Product object will have
    id: number;                       //--> this is a unique identifier for each product
    title: string;                   //--> this is the Product name
    price: number;                  //--> this is the 0riginal price of the product 
    discountPercentage: number;     //---> Discont rate (e.g, 10 means 10%)


    // The constructor runs automatically when we create a new product object.
    // It assigns the values we pass into the class to the product's properties. 
    constructor(id: number, title: string, price: number, discountPercentage: number) {
        this.id = id;                  // 'this.id' refers to the object's 'id' property
        this.title = title;            // Assign title 
        this.price = price;            // Assign price
        this.discountPercentage = discountPercentage; // Assign dicount rate
    }

    // Method to display product details in the console
    // (for now, this will help us verify that the data is loading correctly)
    displayDetails(): void {
        console.log(`Product: ${this.title}`);                  // This show the product title
        console.log(`Price: $${this.price}`);                   // This show the product price
        console.log(`Discounted Price: $${this.getPriceWithDiscount()}`); // This shows discountted price
    }

    // Method to calculate the product price after discount.
    // Formula: discounted price = original price -(price * discountPercentage / 100)
    getPriceWithDiscount(): number {
        const discountedPrice = this.price - (this.price * this.discountPercentage) / 100;
        return Number(discountedPrice.toFixed(2)); // (2)-- means to Rounds to decimal places.
    }
}