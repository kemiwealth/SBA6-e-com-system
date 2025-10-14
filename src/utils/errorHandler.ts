
/**
 * Custom Error class to represent app specific errors.
 * This helps differentiate between the different error types
 * (e.g., API errors vs validation errors).
 */

// export class AppError extends Error {
//   statusCode: number;

//   constructor(message: string, statusCode = 505) {
//     super(message);
//     this.name = "AppError"; // Label the error type
//     this.statusCode = statusCode; // HTTP-like status code for consistency


//     // // Maintains proper stack trace (for debugging)
//     // if (typeof (Error as any).captureStackTrace === "function") {
//     //   (Error as any).captureStackTrace(this, this.constructor);
//     // } else {
//     //   // Browser fallback for stack trace
//     //   this.stack = new Error(message).stack;
//     // }
//   }
// }

export class APIError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

}

export function handleAPIError(error: APIError) {
    if (error instanceof APIError) {
        console.error('API Error:', error.message, 'Status Code:', error.statusCode);
    } else {
        console.error('An unexpected error occurred:', error);
    }
}


/**
 * Handle and log API or network errors in a user-friendly way.
 * This function could later be expanded to display alerts or UI messages.
 */
export function handleApiError(error: unknown) {
  if (error instanceof APIError) {
    console.error(`API Error [${error.statusCode}]: ${error.message}`);
  // } else if (error instanceof Error) {
  //   console.error(`Unexpected Error: ${error.message}`);
  } else {
    console.error("An unknown error occurred.");
  }
}

