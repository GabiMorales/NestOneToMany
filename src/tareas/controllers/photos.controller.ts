import { Body, Controller, Post } from '@nestjs/common';
import { PhotosService } from '../services/photos.service';

@Controller('api/photos')
export class PhotosController {

    constructor(private photoService: PhotosService) {}

    @Post()
    addPhoto(@Body() body: any) {
        return this.photoService.addPhoto(body);
    }
}
