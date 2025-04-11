import axios from 'axios';

const API_URL = 'https://api.thecatapi.com/v1/images/search';

export interface CatImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export const fetchRandomCat = async (): Promise<CatImage> => {
  try {
    const response = await axios.get<CatImage[]>(API_URL);
    return response.data[0];
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
};