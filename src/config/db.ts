import * as AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getDynamoDbInstance = () => {
  return dynamoDb;
};
