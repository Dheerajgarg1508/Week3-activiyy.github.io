// 01. Calculate the average marks of the class
const marks = [85, 97, 44, 37, 76, 60];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
console.log("Average Marks:", averageMarks); // Output: Average marks

// 02. Update the prices array after applying a 10% discount
const prices = [250, 645, 300, 900, 50];
const discountedPrices = prices.map(price => price - (price * 0.10));
console.log("Discounted Prices:", discountedPrices); // Output: Discounted prices

// 03. Modify the array of companies
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company
companies.shift();

// b. Remove Uber and add Ola in its place
const indexOfUber = companies.indexOf("Uber");
if (indexOfUber !== -1) {
  companies.splice(indexOfUber, 1, "Ola");
}

// c. Add Amazon at the end
companies.push("Amazon");

console.log("Updated Companies:", companies); // Output: Updated company array
