/**
 * @description
 * Waits a certain time
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
