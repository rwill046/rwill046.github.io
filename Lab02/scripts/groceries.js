//Rohaan Williams
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Onion",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.00
	},
	{
		name: "Rib Eye Steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 15.00
	},
	{
		name: "Eggs",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 5.00
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.00
	},
	{
		name: "Orange",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50
	},
	{
		name: "Lamb",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 7.50
	},
	{
		name: "Chocolate Cake",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 7.00
	},
	{
		name: "Cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 3.25
	},
	{
		name: "Bell Peppers",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.50
	},
	{
		name: "Pork Sausages",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 6.00
	}
];

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {	
		if (restriction.includes("All")){
			product_names.push(prods[i].name);
			document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: All Items]";
		}
		else{
			if (restriction.length == 3){
				if (prods[i].vegetarian && prods[i].glutenFree && prods[i].organic){
					product_names.push(prods[i].name);
					document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: Vegetarian, Gluten Free and Organic Items]";
				}
			}
			else if(restriction.length == 2){
				if ((restriction.includes("Vegetarian") && restriction.includes("GlutenFree")) && (prods[i].vegetarian && prods[i].glutenFree)){
					product_names.push(prods[i].name);
					document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: Vegetarian and Gluten Free Items]";
				}
				else if ((restriction.includes("Vegetarian") && restriction.includes("Organic")) && (prods[i].vegetarian && prods[i].organic)){
					product_names.push(prods[i].name);
					document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: Vegetarian and Organic Items]";
				}
				else if ((restriction.includes("GlutenFree") && restriction.includes("Organic")) && (prods[i].glutenFree && prods[i].organic)){
					product_names.push(prods[i].name);
					document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: Gluten Free and Organic Items]";
				}
			}
			else if(restriction.length == 1){
				if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
					product_names.push(prods[i].name);
					document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: Vegetarian Items]";
				}
				else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
					product_names.push(prods[i].name);
					document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: Gluten Free Items]";
				}
				else if ((restriction == "Organic") && (prods[i].organic == true)){
					product_names.push(prods[i].name);
					document.getElementById("nd").innerHTML = "Choose items to buy:   [Now Displaying: Organic Items]";
				}
			}
			else if(restriction.length < 1){
				document.getElementById("nd").innerHTML = "Please select at least one preference of viewing items!";
			}
		}
	}
	return product_names;
}

function productPrice(productName){
	for (let i = 0; i < products.length; i += 1) {
		if (products[i].name == productName) {
			return products[i].price;
		}
	}
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}