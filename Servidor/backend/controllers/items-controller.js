// Database connection
var db = require('../routes/conn');
const { v4: uuidv4 } = require('uuid');

// Controller responsible for the Item section in the side menu (Navigation Two)
// CRUD

// CREATE
// Save new item
module.exports.createItem = function(req, res) {

    // New item with respective settings
    var item = {
        "id": uuidv4(),
        "name": req.body.name,
        "numero": req.body.numero,
        "stock": req.body.stock,
        "notas": req.body.notas
    }
    //New item information
    console.log("New item information", item);
    //Database query to save item
    db.query('INSERT INTO item  SET?', item, function(error, results, fields){
        if(error) {
            res.json({
                status:false,
                //message: req
            })
        } else {
            res.json({
                status: true,
                results
            })
        }
    });
}


// READ
// Table with item in Navigation Two Menu (Name and Description)
module.exports.itemTable = function(req, res, next) {
    //Database query to select all dashboards
    db.query('SELECT item.id AS id, item.name AS name, item.numero AS numero, item.stock AS stock, item.notas AS notas FROM item', function (error, results, rows) {
    if(error) {
            console.log("There are some error with query");
            console.log(error)
        } 
        else {

            console.log("Database results: ", results);
            res.json(
                results
            );        
        }
    });
}

// READ
// Individual information for each item (Eye button)
module.exports.itemInfo = function(req, res, next) {
    // ID
    var id = req.params;
    console.log("Id to be consulted", id);
    // Database query to select item to edit
    db.query('SELECT * FROM item WHERE id = ?', [id.itemId], function (error, results, fields) {
    if(error) {
            console.log("There are some error with query");
        } 
        else {
            res.json(
                results                
            );        
        }
    });
}

// UPDATE
// Update item
module.exports.updateItem = function(req, res) {
    // New item with respective settings
    const id = req.params
    const name = req.body.name
    const numero = req.body.numero
    const stock = req.body.stock
    const notas = req.body.notas
    //New item information
    let data = [name, numero, stock, notas, id.itemId];
    //Database query to save item
    db.query('UPDATE item SET name = ?, numero = ?, stock = ?, notas = ?  WHERE id = ?', data, function(error, results, fields){
        if(error) {
            res.json({
                status:false,
                message: 'There are some error with query'
            })
        } else {
            res.json({
                status: true,
                results
            })
            console.log("Updated item");
        }
    });
}

// DELETE
// Individual information for each item (Remove button)
module.exports.removeItem = function(req, res, next) {

    //ID
    var id = req.params;
    console.log("Id to be removed", id);
    
    // Database query to select item to remove
    db.query('DELETE FROM item WHERE id = ?', [id.itemId], function (error, results, fields) {
    if(error) {
            console.log("There are some error with query");
        } 
        else {
            console.log("Removed");
            res.json({
                results
            });
        }
    });
}


