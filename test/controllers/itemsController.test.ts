import {
  getItemsController,
  createItemController,
} from '../../src/controllers/itemsController';
import { getItems, createItem } from '../../src/services/itemsService'; // Ruta a tu servicio getItems

jest.mock('../../src/services/itemsService', () => ({
  getItems: jest.fn(),
  createItem: jest.fn(),
}));

describe('createItemController', () => {
  it('given valid data when call createItem then create a new item and return 201 with the new item', async () => {
    const event = {
      body: JSON.stringify({
        name: 'Espada de luces',
        description: 'Espada de guerra.',
      }),
    };

    const mockNewItem = {
      id: '1',
      name: 'Espada de luces',
      description: 'Espada de guerra.',
    };

    (createItem as jest.Mock).mockResolvedValue(mockNewItem);

    const result = await createItemController(event);

    expect(result.statusCode).toBe(201);
    expect(JSON.parse(result.body)).toEqual(mockNewItem);
  });

  it('given  invalid data when call createItem then generate error for database return 500', async () => {
    const event = {
      body: JSON.stringify({ name: 'Espada de luces' }),
    };

    (createItem as jest.Mock).mockRejectedValue(new Error('Database error'));

    const result = await createItemController(event);

    expect(result.statusCode).toBe(500);
    expect(JSON.parse(result.body).error).toBe('Database error');
  });
});

describe('getItemsController', () => {
  it('given get valid when call getItemsController then return a list of items with status 200', async () => {
    const mockItems = [
      { id: '1', name: 'Espada de luces' },
      { id: '2', name: 'Escudo de hierro' },
    ];

    (getItems as jest.Mock).mockResolvedValue(mockItems);

    const event = {};
    const result = await getItemsController(event);

    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body)).toEqual(mockItems);
  });

  it('given invalidad conexion db when call getItemsController then return status 500 if getItems throws an error', async () => {
    (getItems as jest.Mock).mockRejectedValue(
      new Error('Database connection failed'),
    );

    const event = {};
    const result = await getItemsController(event);

    expect(result.statusCode).toBe(500);
    expect(JSON.parse(result.body).error).toBe('Database connection failed');
  });

  it('given generic error when call getItemsController then return a generic error message if getItems throws an unknown error', async () => {
    (getItems as jest.Mock).mockRejectedValue('Unknown error');

    const event = {};
    const result = await getItemsController(event);
    expect(result.statusCode).toBe(500);
    expect(JSON.parse(result.body).error).toBe('Unknown error occurred');
  });
});
