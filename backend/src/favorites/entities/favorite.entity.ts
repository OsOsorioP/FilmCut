import { User } from '../../users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from 'typeorm';

@Entity()
export class Favorite {
    @PrimaryGeneratedColumn()
    id: number;  
  
    @ManyToOne(() => User, (user) => user.favorites, { eager: true })
    @JoinColumn({ name: 'user_id' })
    userId: number;
  
    @Column({ type: 'int' })
    movieId: number; 
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
  }