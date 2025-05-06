import { NewsItem } from "../types/News";
import axios from 'axios';

export const fetchNews = async (): Promise<NewsItem[]> => {
    const response = await axios.get<NewsItem[]>('/news.json');
    return response.data;
  };