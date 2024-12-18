import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Serverless en AWS',
      version: '1.0.0',
      description: 'Documentación de la API Serverless usando Swagger',
    },
    servers: [
      {
        url: 'https://{apiId}.execute-api.{region}.amazonaws.com/{stage}',
        description: 'API Gateway en AWS',
      },
    ],
  },
  apis: ['./src/controllers/*.ts'], // Ruta a los archivos de tus controladores
};

// Genera la especificación Swagger
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
