var mysql = require('mysql');
var inquirer = require('inquirer');
require("dotenv").config()
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: 'bamazon_db',
    port: 3306

});

connection.connect(function (error) {
    if (error) throw error;
    displayProducts();

});
function displayProducts() {
    connection.query('SELECT * FROM products', function (error, results, fields) {
        if (error) throw error;
        for (let i = 0; i < results.length; i++) {
            console.log(`
        ___________________________________ 
        id: ${results[i].id} 
        product name: ${results[i].product}
        deparment name: ${results[i].department}
        Price: $${results[i].price}
        Stock: ${results[i].stockQuantity}
        ___________________________________`);
        }
        ///// here we call our prompt function///
        chooseProduct();
    });



}
function chooseProduct() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the ID of the product you wish to buy?",
                name: "productID"
            },
            {
                type: "input",
                message: "How many itmes do you wish to buy?",
                name: "numberOfItems"
            },
            {
                type: "confirm",
                message: "Are sure you want to buy this item?",
                name: "confirmItem",
                default: true

            }
        ])
        .then(answers => {
            if (answers.confirmItem === true) {
                processOrder(answers.productID, answers.numberOfItems);
            } else {
                console.log('Thank you, see you later')
            }

        });


}
function processOrder(id, quantity) {
    connection.query('SELECT * FROM products WHERE id=?', [id], function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        if (quantity < results[0].stockQuantity) {
            console.log("Your purchase can be completed");
            var price = quantity * results[0].price;
            var currentQuantity = results[0].stockQuantity - quantity;
            updateDatabase(currentQuantity, id);
            console.log('Your total is going to be $' + price);
            console.log('The current stock quantity for this item is ' + currentQuantity);
            console.log('Thank you for shopping with us, if you wish buy to other items, run the app again, bye :)')
            connection.end()
        } else {
            console.log('We dont have enough product to complete your order');
            chooseProduct();
        }
    });

}
function updateDatabase(quantity, id) {
    connection.query('UPDATE products SET stockQuantity=? WHERE id=?', [quantity, id], function (error) {
        if (error) throw error;


    })


}



