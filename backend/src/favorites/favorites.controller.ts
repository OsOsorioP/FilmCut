import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('favorites')
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post('create')
  addFavorite(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.addFavorite(createFavoriteDto);
  }

  @Get(':id')
  GetFavorite(@Param('id') userId: number) {
    return this.favoritesService.GetFavorite(userId);
  }

  @Delete('remove')
  removeFromFavorites(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.removeFromFavorites(createFavoriteDto);
  }
}
