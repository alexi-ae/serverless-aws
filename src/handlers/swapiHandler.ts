import {
  getPeopleByIdController,
  getFilmByIdController,
} from '../controllers/swapiController';

/**
 * @swagger
 * /dev/swapi/spanish/people/{id}:
 *   get:
 *     summary: Obtiene información de una persona por ID
 *     description: Devuelve detalles como nombre, altura, género, y más para una persona en el universo de Star Wars.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la persona
 *     responses:
 *       200:
 *         description: Datos de la persona
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 altura:
 *                   type: string
 *                 masa:
 *                   type: string
 *                 colorDeCabello:
 *                   type: string
 *                 colorDePiel:
 *                   type: string
 *                 colorDeOjos:
 *                   type: string
 *                 anioDeNacimiento:
 *                   type: string
 *                 genero:
 *                   type: string
 *                 planetaDeOrigen:
 *                   type: string
 *                 peliculas:
 *                   type: array
 *                   items:
 *                     type: string
 *                 especies:
 *                   type: array
 *                   items:
 *                     type: string
 *                 vehiculos:
 *                   type: array
 *                   items:
 *                     type: string
 *                 navesEspaciales:
 *                   type: array
 *                   items:
 *                     type: string
 *                 creado:
 *                   type: string
 *                 editado:
 *                   type: string
 *                 url:
 *                   type: string
 *       500:
 *         description: Error del servidor
 */
export const getPeopleById = getPeopleByIdController;

/**
 * @swagger
 * /dev/swapi/spanish/film/{id}:
 *   get:
 *     summary: Obtiene información de una película por ID
 *     description: Devuelve detalles sobre una película en el universo de Star Wars.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Datos de la película
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nombre:
 *                   type: string
 *                 director:
 *                   type: string
 *                 estreno:
 *                   type: string
 *                 personajes:
 *                   type: array
 *                   items:
 *                     type: string
 *       500:
 *         description: Error del servidor
 */
export const getFilmById = getFilmByIdController;
