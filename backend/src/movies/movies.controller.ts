import {
    Controller,
    Get,
    Param,
    Query,
  } from '@nestjs/common';
  import { MoviesService } from './movies.service';
  
  @Controller('movies')
  export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
  
    @Get('now_playing')
    fetchNowPlaying() {
      return this.moviesService.fetchNowPlaying();
    }
  
    @Get('popular')
    fetchPopular() {
      return this.moviesService.fetchPopular();
    }
  
    @Get('top_rated')
    fetchTopRated() {
      return this.moviesService.fetchTopRated();
    }
  
    @Get('upcoming')
    fetchUpcoming() {
      return this.moviesService.fetchUpcoming();
    }
  
    @Get('movie/:id')
    fetchMovieById(@Param('id') id: string) {
      return this.moviesService.fetchMovieById(id);
    }
  
    @Get('recommendations/:id')
    fetchRecommendations(@Param('id') id: string) {
      return this.moviesService.fetchRecommendations(id);
    }
  
    @Get('genre/:id')
    fetchMovieByGenre(@Param('id') id: string, @Query('page') page: number) {
      return this.moviesService.fetchMovieByGenre(id, page);
    }
  
    @Get('search')
    fetchSearchMovie(@Query('query') query: string) {
      return this.moviesService.fetchSearchMovie(query);
    }
  }
  