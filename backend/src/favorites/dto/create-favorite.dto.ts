import { IsInt, IsPositive } from "class-validator";

export class CreateFavoriteDto {
  @IsInt()
  @IsPositive()
  userId: number;

  @IsInt()
  @IsPositive()
  movieId: number;
}
