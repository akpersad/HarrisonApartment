'use strict';
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

var storage = (function () {
    var dynamodb = new AWS.DynamoDB.DocumentClient();
    return {
        saveListItems: function (groceryList, session, callback) {
            var params = {
                TableName: 'SteelWorks', //Change to travelTable
                Item: {
                    //TimeStamp: timeStamp,
                    UserId: session.user.userId,
                    GroceryArray: groceryList
                }
            };
            dynamodb.put(params, function (err, grocery) {
                callback(grocery);
            })
        }, 
        getListItems: function (session, callback) {
            var params = {
                TableName: 'SteelWorks', //Change to travelTable
                Key: {
                    UserId: session.user.userId
                }
            };
            dynamodb.get(params, function (err, data) {
                console.log(data);
                var hash = {
                    "GroceryArray": data.Item.GroceryArray
                };
                callback(hash);
            });
        }
    }
})();

module.exports = storage;