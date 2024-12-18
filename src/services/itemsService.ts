import { getDynamoDbInstance } from '../config/db';
import { Item } from '../models/item';
const { v4: uuidv4 } = require('uuid');

const dynamoDb = getDynamoDbInstance();

export const getItems = async (): Promise<Item[]> => {
  const params = {
    TableName: process.env.ITEMS_TABLE!,
  };

  try {
    const result = await dynamoDb.scan(params).promise();
    return result.Items as Item[];
  } catch (error) {
    throw new Error('Could not fetch items');
  }
};

export const createItem = async (item: Item): Promise<Item> => {
  item.id = item.id || uuidv4();
  const params = {
    TableName: process.env.ITEMS_TABLE!,
    Item: item,
  };

  try {
    await dynamoDb.put(params).promise();
    return item;
  } catch (error) {
    throw new Error('Could not create item');
  }
};
