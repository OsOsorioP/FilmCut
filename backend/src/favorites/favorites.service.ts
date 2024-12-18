import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorite } from './entities/favorite.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private readonly favoriteRepository: Repository<Favorite>,
  ) {}

  async addFavorite({ userId, movieId }: CreateFavoriteDto) {
    const movie = await this.favoriteRepository.findOne({
      where: {
        userId,
        movieId,
      },
    });

    if (movie) {
      throw new BadRequestException('This movie is already in your favorites.');
    }

    const newFavorite = this.favoriteRepository.create({ userId, movieId });
    return this.favoriteRepository.save(newFavorite);
  }

  async GetFavorite(userId: number) {
    return this.favoriteRepository.find({
      where: { userId },
      select: { movieId: true },
    });
  }

  async removeFromFavorites({userId,movieId}:CreateFavoriteDto) {
    const movie = await this.favoriteRepository.findOne({
      where: { userId: userId, movieId },
    });

    if (!movie) {
      throw new NotFoundException('Movie favorite not found');
    }

    return this.favoriteRepository.remove(movie);
  }
}
