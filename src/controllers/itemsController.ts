import { getItems, createItem } from '../services/itemsService';
import { Item } from '../models/item';

export const getItemsController = async (event: any): Promise<any> => {
  try {
    const items = await getItems();
    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';

    return {
      statusCode: 500,
      body: JSON.stringify({ error: errorMessage }),
    };
  }
};

//export const createItemController: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> =>{
export const createItemController = async (event: any): Promise<any> => {
  const requestBody: Item = JSON.parse(event.body!);

  try {
    const newItem = await createItem(requestBody);
    return {
      statusCode: 201,
      body: JSON.stringify(newItem),
    };
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    return {
      statusCode: 500,
      body: JSON.stringify({ error: errorMessage }),
    };
  }
};
