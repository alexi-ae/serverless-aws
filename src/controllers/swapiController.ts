import { APIGatewayProxyHandler } from 'aws-lambda';
import { SwapiService } from '../services/swapiService';

const swapiService = new SwapiService();

export const getPeopleByIdController: APIGatewayProxyHandler = async (
  event,
) => {
  try {
    const id = event.pathParameters?.id;
    const data = await swapiService.getPeopleById(id);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
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

export const getFilmByIdController: APIGatewayProxyHandler = async (event) => {
  try {
    const id = event.pathParameters?.id;
    const data = await swapiService.getFilmById(id);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
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
