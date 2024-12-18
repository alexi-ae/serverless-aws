import { APIGatewayEvent, Context, Callback } from 'aws-lambda';
import swaggerSpec from '../config/swagger';

export const swaggerHandler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(swaggerSpec), // Devolvemos la especificación Swagger
  };

  callback(null, response); // Responde con la documentación Swagger
};
