# Serverless Framework Project

Este proyecto utiliza el **Serverless Framework** para implementar servicios en AWS, con soporte para **TypeScript** y pruebas unitarias. A continuación, se describen los pasos necesarios para configurar AWS, desplegar el servicio y ejecutar pruebas.

---

## Requisitos previos

1. **Instalar Node.js**  
   - Descarga e instala Node.js desde [nodejs.org](https://nodejs.org).
   - Verifica la instalación con:
     ```bash
     node -v
     npm -v
     ```

2. **Instalar Serverless Framework**  
   - Instala el paquete globalmente:
     ```bash
     npm install -g serverless
     ```

3. **Configurar credenciales de AWS**  
   - Crea un usuario en **IAM** con permisos de acceso programático:
     - Ve a la consola de **IAM** en AWS.
     - Crea un usuario con permisos de acceso programático.
     - Asigna una política con permisos como `AdministratorAccess` (recomendado para desarrollo).  
   - Configura las credenciales utilizando AWS CLI:
     ```bash
     aws configure
     ```
     Ingresa las credenciales generadas:
     - **Access Key ID**  
     - **Secret Access Key**  
     - **Región** por defecto (por ejemplo: `us-east-1`).

---

## Configuración del proyecto


1. **Configurar proyecto** `serverless.yml`
El archivo `serverless.yml` define los servicios, funciones y recursos necesarios para tu proyecto. Asegúrate de incluir:
- La región de AWS (`provider.region`).
- Los roles y políticas necesarias en `iamRoleStatements`.

Ejemplo de `serverless.yml`:
```yaml

service: camvia-serverless-api

custom:
  itemsTableName: camvia-items  

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-2 # Escoge la región que prefieras
  profile: default
  stage: dev
  role: arn:aws:iam::908027414392:role/rol_serverless
  environment:
    ITEMS_TABLE: ${self:custom.itemsTableName}  # Referencia al nombre de la tabla DynamoDB desde una variable

functions:
  getItems:
    handler: src/handlers/itemsHandler.getItems  # Ruta al handler para el GET
    events:
      - http:
          path: items  # Endpoint de la API
          method: get  # Método HTTP GET        
  createItem:
    handler: src/handlers/itemsHandler.createItem  # Ruta al handler para el POST
    events:
      - http:
          path: items  # Endpoint de la API
          method: post  # Método HTTP POST
  getPeopleById:
    handler: src/handlers/swapiHandler.getPeopleById  # Ruta al handler para el GET
    events:
      - http:
          path: swapi/spanish/people/{id}
          method: get
  getFilmById:
    handler: src/handlers/swapiHandler.getFilmById  # Ruta al handler para el GET
    events:
      - http:
          path: swapi/spanish/film/{id}
          method: get
  swagger:
    handler: src/handlers/swaggerHandler.swaggerHandler
    events:
      - http:
          path: api/v1/swagger  # Endpoint donde se expondrá la documentación Swagger
          method: get  # Método HTTP GET
          cors: true

resources:
  Resources:
    ItemsTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: ${self:custom.itemsTableName}  # Nombre de la tabla DynamoDB
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
        ProvisionedThroughput:
          ReadCapacityUnits: 5
          WriteCapacityUnits: 5

```


## Instalación

## 1. Clonar el repositorio

Para comenzar, clona este repositorio en tu máquina local utilizando el siguiente comando:

```bash
git clone https://github.com/alexi-ae/serverless-aws.git
```

## 2. Instalar dependencias y framework

Ingresa a la carpeta donde clonaste el proyecto e instala las dependencias del proyecto utilizando el siguiente comando:

```bash
npm install -g serverless
```

```bash
npm install
```

## 3. Configura tu aws cli

Con las credenciales programaticas de aws, procede a configurar tu cli aws, puedes iniciar la configuración con el siguiente comando.

```bash
aws configure
```

## 4. Incia sesión en serverless framework

Inicia sessión en serverless framework para poder ejecutar los comandos de despliegue, en el caso no tengas procede a crearte una cuenta. https://www.serverless.com/

```bash
serverless login
```

## 5. Incia sesión en serverless framework
```bash
serverless login
```

## 6. Ejecutar pruebas unitarias
Como buena practica ejecuta pruebas unitarias antes del despliegue.
```bash
npx jest --coverage
```

## 7. Desploy

```bash
serverless deploy
```
or (informativo) 
```bash
serverless deploy --verbose
```
## 8. Resultados
```bash
 ✔ Service deployed to stack camvia-serverless-api-dev (45s)
endpoints:
  GET - https://dz0x577ae0.execute-api.us-east-2.amazonaws.com/dev/items
  POST - https://dz0x577ae0.execute-api.us-east-2.amazonaws.com/dev/items
  GET - https://dz0x577ae0.execute-api.us-east-2.amazonaws.com/dev/swapi/spanish/people/{id}
  GET - https://dz0x577ae0.execute-api.us-east-2.amazonaws.com/dev/swapi/spanish/film/{id}
  GET - https://dz0x577ae0.execute-api.us-east-2.amazonaws.com/dev/api/v1/swagger
functions:
  getItems: camvia-serverless-api-dev-getItems (15 MB)
  createItem: camvia-serverless-api-dev-createItem (15 MB)
  getPeopleById: camvia-serverless-api-dev-getPeopleById (15 MB)
  getFilmById: camvia-serverless-api-dev-getFilmById (15 MB)
  swagger: camvia-serverless-api-dev-swagger (15 MB)

```


## Autor

- **Nombre**: Alexi Acuña
- **Rol**: Desarrollador Principal
- **Descripción**: Desarrollador de software con experiencia en aplicaciones Java y Spring Boot.
  Apasionado por la creación de soluciones eficientes y escalables.
- **GitHub**: [github.com/alexi-ae](https://github.com/alexi-ae)
- **LinkedIn**: [linkedin.com/in/ronald-alexi-ae](https://www.linkedin.com/in/ronald-alexi-ae/)