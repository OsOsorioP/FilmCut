import { Injectable, BadRequestException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MoviesService {
  private readonly apiKey = process.env.TMDB_API_KEY;
  private readonly baseUrl = process.env.BASE_URL;
  private readonly token = process.env.TOKEN;

  private async fetchFromAPI(url: string, params: any) {
    try {
      const response = await axios.get(url, {
        params,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${this.token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new BadRequestException('Failed to fetch data from API TMDB');
    }
  }

  async fetchNowPlaying() {
    const params = { api_key: this.apiKey, page: 2 };
    const data = await this.fetchFromAPI(
      `${this.baseUrl}/movie/now_playing`,
      params,
    );
    return data.results;
  }

  async fetchPopular() {
    const params = { api_key: this.apiKey };
    const data = await this.fetchFromAPI(
      `${this.baseUrl}/movie/popular`,
      params,
    );
    return data.results;
  }

  async fetchTopRated() {
    const params = { api_key: this.apiKey };
    const data = await this.fetchFromAPI(
      `${this.baseUrl}/movie/top_rated`,
      params,
    );
    return data.results;
  }

  async fetchUpcoming() {
    const params = { api_key: this.apiKey };
    const data = await this.fetchFromAPI(
      `${this.baseUrl}/movie/upcoming`,
      params,
    );
    return data.results;
  }

  async fetchMovieById(id: string) {
    const params = { api_key: this.apiKey };
    const data = await this.fetchFromAPI(`${this.baseUrl}/movie/${id}`, params);
    return data;
  }

  async fetchRecommendations(id: string) {
    const params = { api_key: this.apiKey };
    const data = await this.fetchFromAPI(
      `${this.baseUrl}/movie/${id}/recommendations`,
      params,
    );
    return data.results;
  }

  async fetchMovieByGenre(id: string, page: number) {
    const params = { api_key: this.apiKey, with_genres: id, page:page };
    const data = await this.fetchFromAPI(
      `${this.baseUrl}/discover/movie`,
      params,
    );
    return data.results;
  }

  async fetchSearchMovie(query: string) {
    const params = { api_key: this.apiKey, query };
    const data = await this.fetchFromAPI(
      `${this.baseUrl}/search/movie`,
      params,
    );
    return data.results;
  }
}
