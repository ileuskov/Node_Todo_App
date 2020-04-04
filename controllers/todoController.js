// var bodyParser = require("body-parser");

// var data = [{item: "learn Front end"}, {item: "learn Back end"}, {item: "become a full stack developer"}];
// var urlencodedParser = bodyParser.urlencoded({extended: false});

// module.exports = function (app) {

//     // handling the get requests
//     app.get("/todo", function (req, res) {
//         res.render("todo", {todos: data});
//     });

//     // handling the post requests
//     app.post("/todo", urlencodedParser, function (req, res) {
//         data.push(req.body);
//         res.json(data);
//     });

//     // handling the post requests
//     app.delete("/todo", function (req, res) {
//         data = data.filter(function(todo){
//             return todo.item.replace(/ /g, "-") !== req.params.item;
//         });
//         res.json({todos: data});
//     });
// }

// In this controller we'd be setting up routing and some other basic functionalities of our app.

// Importing body-parser
var bodyParser = require('body-parser');

//Setting up initial dummy data
var data = [{item: "learn Front end"}, {item: "learn Back end"}, {item: "become a full stack developer"}];

var urlencodedParser = bodyParser.urlencoded({ extended: false });


// This functions returns to the call in app.js or rather it exports to the line of code where it is required in app.js
module.exports = function(app){

    // Setting up routes (handling get, post and delete requests)
    app.get('/todo', (req, res) => {
        res.render('todo', {todos: data});
    });

    // When user submits a form
    app.post('/todo', urlencodedParser, (req, res) => {
        // Adding the items to the top of the list instead :P
        data.unshift(req.body);
        res.json(data);
        // res.render('todo', {todos: data});
    });

    // For when a user sends a delete request
    app.delete('/todo/:item', (req, res) => {
        data = data.filter(todo => {
            // For some insecure reasons I just had to convert everything to lowercase
            return todo.item.toLowerCase().replace(/ /g, '-') !== req.params.item.toLowerCase();
        });
        res.json(data);
    });

};