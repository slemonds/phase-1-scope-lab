// Write your solution in this file!

//customerName: Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

//upperCaseCustomerName(): Write a function that accesses that golbal customerName variable, and uppercases it.
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

//setBestCustomer(): Write a function that when called, declares a variable call bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
    bestCustomer = 'not bob';
}

//overwriteBestCustomer(): write a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
//leastFavortieCustomer and changeLeastFavoriteCustomer(): Declare a constant (using const) in global scope called leastFavoriteCustomer
//be sure to assign it some initial value. Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
const leastFavoriteCustomer = 'sam'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'sam';
}