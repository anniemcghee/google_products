

// Write your solutions below

// 1.) The `kind` of results you're are dealing  are `shopping#products`. Go through the `items` and find all results that have `kind` of `shopping#product`. How many are there? Where else is this count information stored in the search results?

//25 items. Also stored in  "currentItemCount" at the top of the page. 
// ---------------------
/*
var arr = [];

// console.log(data.items.length); was successful at 25

for (var i = 0; i < data.items.length; i+=1) {
	if (data.items[i].kind = "shopping#product") {
		arr.push(data.items[i]);
	}
}

console.log(arr);

console.log(arr.length);*/

// 2.) Find all items with a `backorder` availability in `inventories`.

/* We found two backordered items - the Sony Alpha DSLR SLT-A77 and the Fujifilm FinePix REAL 3D W3. 
We found and printed the title of our results using the following code:

var data = require("./products.json")
var backorderCount = [];

for (var i=0; i < data.items.length; i+=1) {
	if (data.items[i].product.inventories[0].availability === "backorder") {
		backorderCount.push(data.items[i].product.title);
	}
} 

console.log("There are " + backorderCount.length + " items on backorder. They are as follows: " + backorderCount); */

// console.log(backorderCount);
//availability is the key and backorder is the value - not inStock
//inventories is a key with an array of values, availability is another key and we're looking for the value "backorder
/* After using a for loop to loop through the items in data, we specified a condition of "backorder" 
when it looped through data.items[i].product.inventories[0].availability
we then pushed it into a new array (left blank at the beginning) and printed some text along with the length 
of our returned items to assist the display of our results. */
// ------------
// 3.) Find all items with more than one image link.

// var data = require("./products.json")

// var multiImageItems = [];

// for (var i=0; i < data.items.length; i+=1) {
// 	if (data.items[i].product.images.length > 1) {
// 		multiImageItems.push([data.items[i].product.googleId, data.items[i].product.images.length]);
// 	}
// } 

// console.log("There are " + multiImageItems.length + " with multiple image links. They are as follows: " + multiImageItems);




// ------------
// 4.) Find all `canon` products in the items (careful with case sensitivity).

// var data = require("./products.json")

// var brandCanon = [];

// for (var i=0; i < data.items.length; i+=1) {
// 	if (data.items[i].product.brand.toLowerCase() === "canon") {
// 		brandCanon.push([data.items[i].product.googleId, data.items[i].product.brand]);
// 	}
// } 

// console.log(brandCanon);


//search in a loop for all items - then specify a condition of "Canon" and push the results to a new array with a listing
//we used previous codes and made sure the path of objects was accurate and reflected what we were hunting for. 
//it was important to lowercase everything that return to be sure we were accurate.
// ----------------------

// 5.) Find all `items` that have **product** **author** **name** of "eBay" and are brand "Canon".

// var data = require("./products.json")

// var ebayCanon = [];

// for (var i=0; i < data.items.length; i+=1) {
// 	if (data.items[i].product.brand.toLowerCase() === "canon" && data.items[i].product.author.name.toLowerCase() === "ebay") {
// 		ebayCanon.push([data.items[i].product.googleId, data.items[i].product.brand, data.items[i].product.author.name]);
// 	}
// } 

// console.log(ebayCanon);


// 6.) Print all the products with their **brand**, **price**, and a **image link**

/*we want to print every PRODUCT but not every object inside of product
product 
	inventories
		-price-
	-images-
	author 
		-brand- */


var data = require("./products.json")

var productList = [];

for (var i=0; i < data.items.length; i+=1) {
	productList[i] = [data.items[i].product.brand, data.items[i].product.inventories[0].price, data.items[i].product.images[0].link];
}


console.log(productList);



// var newArray = []; //we are going to push all items that have a value of shopping product in their kind key into this array

// for (var k in data) {
// 	if ()
// }

//if value = shopping#product then push into our new array

// object - kind is they key, shopping#product is the value


// console.log(data["items"]);