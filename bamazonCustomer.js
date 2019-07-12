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
        chooseProduct();
    });

    ///// here we call our prompt function///

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
            console.log(answers);
            processOrder(answers.productID, answers.numberOfItems);
        });


}


