import { fetchPeopleById, fetchFilmsById } from '../provider/SwapiClient';
import { MapperSwapi } from '../mapper/MapperSwapi';

export class SwapiService {
  getPeopleById = async (id: any) => {

    try {
      const data = await fetchPeopleById(id);
      return MapperSwapi.mapperTranslatePeople(data);
    } catch (error) {
      throw new Error('Could not fetch items');
    }
  };

  getFilmById = async (id: any) => {
    try {
      const data = await fetchFilmsById(id);
      return MapperSwapi.mapperTranslateFilm(data);
    } catch (error) {
      throw new Error('Could not create item');
    }
  };
}
