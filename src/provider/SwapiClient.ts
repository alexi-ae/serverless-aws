import axios from 'axios';

export const fetchPeopleById = async (id: number): Promise<any> => {
  const url = `https://swapi.py4e.com/api/people/${id}/`;
  const response = await axios.get(url);
  return response.data;
};

export const fetchFilmsById = async (id: number): Promise<any> => {
  const url = `https://swapi.py4e.com/api/people/${id}/`;
  const response = await axios.get(url);
  return response.data;
};
