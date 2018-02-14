'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
  const dt = JSON.parse(event.body);

  const params = {
    TableName:  'recipe-dev-RecipeDynamoDbTable-1EP715KL2J3QQ',
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#record_txt': 'desc',
    },
    ExpressionAttributeValues: {
      ':desc': dt.text,
    },
    UpdateExpression: 'SET #record_txt = :desc',
    ReturnValues: 'ALL_NEW',
  };

  dynamoDb.update(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Not able to update the item',
      });
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Attributes),
    };
    callback(null, response);
  });
};