import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Photo } from "./photo.entity";
import { User } from "./user.entity";

@Entity()
export class Profile {

    @PrimaryGeneratedColumn() 
    id: number;
    
    @Column()
    name: string;

    @Column({ name: 'last_name' })
    lastname: string;

    @OneToOne(()=> User, (user) => user.profile)
    user: User;

    @OneToMany(() => Photo, (photo) => photo.profile)
    photos: Photo[];
}