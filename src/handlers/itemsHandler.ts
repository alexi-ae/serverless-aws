import {
  getItemsController,
  createItemController,
} from '../controllers/itemsController';

export const getItems = getItemsController;

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Obtiene los items
 *     description: Retorna una lista de items disponibles en el sistema.
 *     responses:
 *       200:
 *         description: Lista de items obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "123"
 *                   name:
 *                     type: string
 *                     example: "Item 1"
 */
export const createItem = createItemController;
