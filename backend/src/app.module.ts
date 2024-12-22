import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesModule } from './movies/movies.module';

import * as dotenv from 'dotenv';
import { User } from './users/entities/user.entity';
import { FavoritesModule } from './favorites/favorites.module';
import { Favorite } from './favorites/entities/favorite.entity';
import { ConfigModule } from '@nestjs/config';

dotenv.config();

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MoviesModule,
    FavoritesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      ssl: process.env.SSL === 'true',
      extra: {
        ssl:
          process.env.SSL === 'true'
            ? {
                rejectUnauthorized: false,
              }
            : null,
      },
      entities: [User, Favorite],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
