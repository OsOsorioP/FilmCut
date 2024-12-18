import { Favorite } from '../../favorites/entities/favorite.entity';
import { Role } from '../../common/enums/rol.enum';
import {
  Entity,
  DeleteDateColumn,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length:30 })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column({type:'enum', default: Role.USER, enum: Role })
  role: Role;

  @OneToMany(() => Favorite, (favorite) => favorite.userId)
  favorites: Favorite[];

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
