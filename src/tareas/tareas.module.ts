import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TareasService } from './services/tareas.service';
import { TareasController } from './controllers/tareas.controller';
import { Tarea } from './entities/tarea.entity';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { Photo } from './entities/photo.entity';
import { PhotosService } from './services/photos.service';
import { PhotosController } from './controllers/photos.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tarea, User, Profile, Photo])
  ],
  providers: [TareasService, UserService, PhotosService],
  controllers: [TareasController, UserController, PhotosController]
})
export class TareasModule {}
