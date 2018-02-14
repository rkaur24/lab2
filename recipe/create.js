'use strict';

const AWS = require('aws-sdk'); 
const uuid = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {;
  const dt = JSON.parse(event.body);

  const params = {
    TableName: 'recipe-dev-RecipeDynamoDbTable-1EP715KL2J3QQ',
    Item: {
      id: uuid.v1(),
      name: dt.name,
      desc: dt.text,
    },
  };

  // write to the database
  dynamoDb.put(params, (error) => {
    if (error) {
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Not able to create new Item',
      });
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};