//dates

let myDate = new Date();
console.log(myDate.toString()); // Wed Jun 26 2024 12:00:00 GMT+0000 (Coordinated Universal Time

console.log(myDate.toISOString()); // 2024-06-26T12:00:00.000Z (returns the date in ISO format)

console.log(myDate.toLocaleDateString()); // 6/26/2024 (returns the date in a localized format)