var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function remove_selection(x) {
    if (quantities[x] == 0 || totals[x] == 0) {
        display_all();
    }
    else {
        console.log(x);
        quantities[x] = quantities[x] - 1;
        totals[x] = prices[x] * quantities[x];
        totalOrderAmt -= prices[x];

        display_all();
    };

}

function checkOut() {
    // Display checkout information on the page
    document.getElementById("checkOutInfo").innerHTML = 
        "<p>Your total is: $" + totalOrderAmt.toFixed(2) + "</p>";
}

function display_all() {
    var myTable = "<table border='1' style='border-collapse: collapse;'>";
    myTable += "<tr><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th></tr>";

    for (var i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>$" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>$" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
        myTable += "</tr>";
    }

    myTable += "<tr><td colspan='5' style='text-align: right; font-weight: bold;'>Total: $" + totalOrderAmt + "</td>";
    myTable += "<td colspan='2' style='text-align: center;'>\
                <button onclick='checkOut()' \
                style='background-color: green; color: white; padding: 10px; border: none; cursor: pointer;'>\
                Check Out</button></td></tr>";

    myTable += "</table>";

    document.getElementById("demo").innerHTML = myTable;
}

window.onload = function() {
    display_all();
}