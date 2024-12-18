export class MapperSwapi {
  static mapperTranslatePeople(data: any) {
    return {
      nombre: data.name,
      altura: data.height,
      masa: data.mass,
      colorDeCabello: data.hair_color,
      colorDePiel: data.skin_color,
      colorDeOjos: data.eye_color,
      anioDeNacimiento: data.birth_year,
      genero: data.gender,
      planetaDeOrigen: data.homeworld,
      peliculas: data.films,
      especies: data.species,
      vehiculos: data.vehicles,
      navesEspaciales: data.starships,
      creado: data.created,
      editado: data.edited,
      url: data.url,
    };
  }

  static mapperTranslateFilm(data: any) {
    return {
      nombre: data.name,
      altura: data.height,
      masa: data.mass,
      colorDeCabello: data.hair_color,
      colorDePiel: data.skin_color,
      colorDeOjos: data.eye_color,
      anioDeNacimiento: data.birth_year,
      genero: data.gender,
      planetaDeOrigen: data.homeworld,
      peliculas: data.films,
      especies: data.species,
      vehiculos: data.vehicles,
      navesEspaciales: data.starships,
      creado: data.created,
      editado: data.edited,
      url: data.url,
    };
  }
}
