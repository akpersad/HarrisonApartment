'use strict';
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-1",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

var storage = (function () {
    var dynamodb = new AWS.DynamoDB.DocumentClient();
    return {
        saveTravelItems: function (transport, location, travelDate, session, callback) {
            var params = {
                TableName: 'dnexa', //Change to travelTable
                Item: {
                    //TimeStamp: timeStamp,
                    UserId: session.user.userId,
                    Transport: transport,
                    Location: location,
                    TravelDate: travelDate
                }
            };
            dynamodb.put(params, function (err, transport, location, travelDate) {
                callback(transport, location, travelDate);
            })
        }
    }
})();

module.exports = storage;