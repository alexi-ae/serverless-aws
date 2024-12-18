import { SwapiService } from '../../src/services/swapiService';
import {
  fetchPeopleById,
  fetchFilmsById,
} from '../../src/provider/SwapiClient';
import { MapperSwapi } from '../../src/mapper/MapperSwapi';

jest.mock('../../src/provider/SwapiClient', () => ({
  fetchPeopleById: jest.fn(),
  fetchFilmsById: jest.fn(),
}));

jest.mock('../../src/mapper/MapperSwapi', () => ({
  MapperSwapi: {
    mapperTranslatePeople: jest.fn(),
    mapperTranslateFilm: jest.fn(),
  },
}));

describe('SwapiService', () => {
  const swapiService = new SwapiService();

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getPeopleById', () => {
    it('should fetch data and map it correctly', async () => {
      const mockId = '123';
      const mockFetchedData = { name: 'Luke Skywalker', id: mockId };
      const mockMappedData = { nombre: 'Luke Skywalker', id: mockId };

      (fetchPeopleById as jest.Mock).mockResolvedValue(mockFetchedData);

      (MapperSwapi.mapperTranslatePeople as jest.Mock).mockReturnValue(
        mockMappedData,
      );

      const result = await swapiService.getPeopleById(mockId);

      expect(fetchPeopleById).toHaveBeenCalledWith(mockId);
      expect(MapperSwapi.mapperTranslatePeople).toHaveBeenCalledWith(
        mockFetchedData,
      );
      expect(result).toEqual(mockMappedData);
    });

    it('should throw an error if fetch fails', async () => {
      const mockId = '987';
      const mockError = new Error('API failed');

      (fetchPeopleById as jest.Mock).mockRejectedValue(mockError);

      await expect(swapiService.getPeopleById(mockId)).rejects.toThrow(
        'Could not fetch items',
      );
      expect(fetchPeopleById).toHaveBeenCalledWith(mockId);
      expect(MapperSwapi.mapperTranslatePeople).not.toHaveBeenCalled();
    });
  });

  describe('getFilmById', () => {
    it('should fetch film data and map it correctly', async () => {
      const mockId = '101';
      const mockFetchedFilmData = { title: 'A New Hope', id: mockId }; // Datos simulados de fetchFilmsById
      const mockMappedFilmData = { titulo: 'Una Nueva Esperanza', id: mockId }; // Datos simulados de MapperSwapi.mapperTranslateFilm

      (fetchFilmsById as jest.Mock).mockResolvedValue(mockFetchedFilmData);
      (MapperSwapi.mapperTranslateFilm as jest.Mock).mockReturnValue(
        mockMappedFilmData,
      );

      const result = await swapiService.getFilmById(mockId);

      expect(fetchFilmsById).toHaveBeenCalledWith(mockId); // Verifica que fetchFilmsById se llamó con el ID correcto
      expect(MapperSwapi.mapperTranslateFilm).toHaveBeenCalledWith(
        mockFetchedFilmData,
      ); // Verifica que los datos se pasaron correctamente al mapper
      expect(result).toEqual(mockMappedFilmData); // Verifica que el resultado es el esperado
    });

    it('should throw an error if fetchFilmsById fails', async () => {
      const mockId = '987';
      const mockError = new Error('API failed');

      (fetchFilmsById as jest.Mock).mockRejectedValue(mockError);

      await expect(swapiService.getFilmById(mockId)).rejects.toThrow(
        'Could not create item',
      );
      expect(fetchFilmsById).toHaveBeenCalledWith(mockId); // Verifica que fetchFilmsById se llamó incluso en caso de error
      expect(MapperSwapi.mapperTranslateFilm).not.toHaveBeenCalled(); // Verifica que el mapper no se llamó
    });
  });
});
